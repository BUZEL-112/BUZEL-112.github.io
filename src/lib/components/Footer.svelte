<script lang="ts">
  import { siteConfig } from "$lib/config";
</script>

<footer class="layout-md mt-20 text-lg flex flex-col">
  {#each siteConfig.social as item}
    <div class="row">
      <span>{item.label}</span>
      <hr />
      <a class="link" href={item.href} target="_blank" rel="noreferrer"
        >{item.handle}</a
      >
    </div>
  {/each}
</footer>

<style lang="postcss">
  .row {
    @apply flex items-center space-x-4;
  }

  .row span {
    @apply text-neutral-500;
  }

  .row hr {
    @apply w-full mt-0.5 border-neutral-300 border-dotted;
  }
</style>
