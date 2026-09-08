<script lang="ts">
  import { marked } from "marked";

  export let source: string;

  marked.use({
    renderer: {
      link(href: string, title: string | null, text: string) {
        let out = `<a rel="external" href="${encodeURI(href)}" class="link"`;
        if (title) {
          out += ' title="' + title + '"';
        }
        out += ">" + text + "</a>";
        return out;
      },
    },
  });

  $: html = marked.parse(source, {
    smartLists: true,
    smartypants: true,
  });
</script>

<div class="md-output">
  {@html html}
</div>

<style lang="postcss">
  :global(.md-output h1) {
    @apply text-2xl sm:text-3xl font-semibold text-black mt-10 mb-4;
  }

  :global(.md-output h2) {
    @apply text-xl sm:text-2xl font-semibold text-black mt-8 mb-3;
  }

  :global(.md-output h3) {
    @apply text-lg font-semibold text-black mt-6 mb-2;
  }

  :global(.md-output h4) {
    @apply text-base font-semibold text-black mt-4 mb-2;
  }

  :global(.md-output p) {
    @apply mb-4 leading-relaxed;
  }

  :global(.md-output ul) {
    @apply list-disc list-outside pl-6 mb-4;
  }

  :global(.md-output ol) {
    @apply list-decimal list-outside pl-6 mb-4;
  }

  :global(.md-output li) {
    @apply leading-relaxed mb-1;
  }

  :global(.md-output strong) {
    @apply font-semibold text-black;
  }

  :global(.md-output blockquote) {
    @apply border-l-2 border-neutral-300 pl-4 italic my-4 text-neutral-600;
  }

  :global(.md-output img) {
    @apply my-6 rounded-md border border-neutral-200 max-w-full h-auto;
  }

  :global(.md-output pre) {
    @apply bg-neutral-100 p-4 rounded-md overflow-x-auto text-sm my-4;
  }

  :global(.md-output code) {
    @apply bg-neutral-100 px-1 py-0.5 rounded text-[90%];
  }

  :global(.md-output pre code) {
    @apply bg-transparent p-0 text-inherit;
  }

  :global(.md-output table) {
    @apply w-full border-collapse my-4 text-sm;
  }

  :global(.md-output th),
  :global(.md-output td) {
    @apply border border-neutral-200 px-3 py-2 text-left;
  }

  :global(.md-output th) {
    @apply bg-neutral-50 font-semibold text-black;
  }

  :global(.md-output hr) {
    @apply my-8 border-neutral-200;
  }
</style>
