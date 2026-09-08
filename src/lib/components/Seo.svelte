<script lang="ts">
  import { siteConfig } from "$lib/config";

  export let title: string = siteConfig.title;
  export let ogTitle: string | null = null;
  export let description: string = siteConfig.description;
  export let image: string = `${siteConfig.siteUrl}/assets/images/profile-placeholder.svg`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={ogTitle ?? title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
