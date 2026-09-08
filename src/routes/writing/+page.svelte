<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import WritingList from "./WritingList.svelte";
  import writing from "./writing.yaml";
  import { siteConfig } from "$lib/config";
</script>

<Seo
  title="{siteConfig.name} – Writing"
  description="Past writing: technical articles, logs, notes, and publications."
/>

{#if writing.logs}
  <section class="layout-md py-12">
    <h2 class="heading2">Logs</h2>
    <WritingList data={writing.logs} />
  </section>
{/if}

{#if writing.technology}
  <section class="layout-md py-12">
    <h2 class="heading2">Technology & Engineering</h2>
    <WritingList data={writing.technology} />
  </section>
{/if}

{#if writing.notes}
  <section class="layout-md py-12">
    <h2 class="heading2">Notes & Guides</h2>
    <WritingList data={writing.notes} />
  </section>
{/if}

{#if writing.papers}
  <section class="layout-md py-12">
    <h2 class="heading2">Publications & Articles</h2>
    <WritingList data={writing.papers} />
  </section>
{/if}
