<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Markdown from "$lib/components/Markdown.svelte";
  import { siteConfig } from "$lib/config";
  import { formatTime } from "$lib/utils";
  import { ArrowLeft } from "lucide-svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ post } = data);
</script>

<Seo
  title="{post.title} – {siteConfig.name}"
  description={post.summary || post.title}
/>

<article class="layout-md py-12">
  <div class="mb-8">
    <a
      href="/writing"
      class="inline-flex items-center text-sm text-neutral-500 hover:text-black mb-6 transition-colors"
    >
      <ArrowLeft size={16} class="mr-1 inline" /> Back to Writing
    </a>

    <h1 class="text-2xl sm:text-3xl font-semibold text-black mb-2">
      {post.title}
    </h1>

    {#if post.date}
      <div class="text-neutral-500 text-sm">
        {formatTime("%B %-d, %Y", post.date)}
      </div>
    {/if}

    {#if post.summary}
      <p class="text-lg text-neutral-600 font-serif italic mt-3">
        {post.summary}
      </p>
    {/if}
  </div>

  <hr class="mb-8" />

  <div class="prose max-w-none">
    <Markdown source={post.content} />
  </div>
</article>
