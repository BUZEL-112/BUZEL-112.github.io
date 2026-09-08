<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";
  import { formatTime } from "$lib/utils";

  type Writing = {
    title: string;
    date: Date | string;
    summary: string;
    link: string;
  };

  export let data: Writing[];

  function isExternal(url: string): boolean {
    return url.startsWith("http://") || url.startsWith("https://");
  }
</script>

<div class="grid gap-y-4">
  {#each data as item}
    <a
      href={item.link}
      class="block -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors"
      target={isExternal(item.link) ? "_blank" : undefined}
      rel={isExternal(item.link) ? "noreferrer" : undefined}
    >
      <div class="flex flex-col sm:flex-row sm:items-end mb-1.5">
        <div class="text-lg text-black">
          {item.title}
          {#if isExternal(item.link)}
            <ArrowUpRight size={18} class="inline text-neutral-400" />
          {/if}
        </div>
        <div class="sm:ml-auto mb-0.5 text-neutral-500">
          {formatTime("%B %-d, %Y", item.date)}
        </div>
      </div>
      <div class="text-lg leading-snug font-serif italic">
        {item.summary}
      </div>
    </a>
  {/each}
</div>
