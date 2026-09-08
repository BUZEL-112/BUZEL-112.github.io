<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { CalendarDays, Star } from "lucide-svelte";

  import Seo from "$lib/components/Seo.svelte";
  import Project from "./Project.svelte";
  import { siteConfig } from "$lib/config";

  const projects = import.meta.glob("../../projects/*.md", {
    eager: true,
  }) as any;
  const images = import.meta.glob("../../projects/*.{png,jpg,svg}", {
    eager: true,
  }) as any;

  function trimName(id: string) {
    return id.match(/\.\.\/projects\/(.*)\.md$/)?.[1];
  }

  $: projectsByDate = Object.keys(projects).sort(
    (a, b) =>
      new Date(projects[b].date).getTime() -
      new Date(projects[a].date).getTime()
  );
  $: projectsByTitle = Object.keys(projects).sort((a, b) => {
    const titleA = (projects[a].title || "").toLowerCase();
    const titleB = (projects[b].title || "").toLowerCase();
    return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
  });

  onMount(() => {
    // Fix scroll position after the page loads
    const selected = $page.url.hash.slice(1);
    if (selected) {
      setTimeout(() => {
        if ($page.url.hash.slice(1) === selected) {
          document.getElementById(selected)?.scrollIntoView();
        }
      }, 500);
    }
  });

  let stars: Record<string, number> | null = null;
  onMount(async () => {
    if (!siteConfig.githubUsername) return;
    try {
      const resp = await fetch(
        `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100`
      );
      if (resp.ok) {
        const repos = await resp.json();
        stars = {};
        for (const obj of repos) {
          if (obj.full_name && obj.stargazers_count !== undefined) {
            stars[obj.full_name] = obj.stargazers_count;
          }
        }
      }
    } catch (e) {
      console.warn("Could not fetch GitHub stars:", e);
    }
  });

  $: projectsByStars = [...projectsByTitle].sort((a, b) => {
    const starsA = stars?.[projects[a].repo] ?? 0;
    const starsB = stars?.[projects[b].repo] ?? 0;
    return starsB - starsA;
  });

  let sortOrder: "date" | "stars" = "date";
</script>

<Seo
  title="{siteConfig.name} – Projects"
  description="Open-source software projects, libraries, tools, and technical experiments."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Projects & Open Source</h2>

  <p class="text-lg mb-4">
    A curated collection of software projects, open source tools, and
    experiments. Each item below is generated automatically from markdown files
    located in <code class="text-sm bg-neutral-100 px-1 py-0.5 rounded"
      >src/projects/</code
    >.
  </p>

  <p class="text-lg mb-4">
    You can customize this introduction to reflect your areas of interest,
    favorite technologies, and open source philosophy.
  </p>

  <p class="text-lg">
    Have questions or interested in collaborating?
    <a
      class="link"
      href={siteConfig.social.find((s) => s.label === "Email")?.href ||
        "mailto:contact@example.com"}>Get in touch</a
    >!
  </p>
</section>

{#if Object.keys(projects).length > 0}
  <div class="bg-gray-900 text-neutral-200 dark">
    <section class="layout-md py-12">
      <h2 class="heading2 text-white">Table of Contents</h2>
      <ul class="sm:columns-2">
        {#each projectsByTitle as id (id)}
          <li>
            <a class="link" href="#{trimName(id)}">{projects[id].title}</a>
          </li>
        {/each}
      </ul>
    </section>
  </div>

  <div class="bg-neutral-50 border-b border-neutral-200 py-4">
    <div class="flex justify-center space-x-6">
      <button
        class:active={sortOrder === "date"}
        on:click={() => (sortOrder = "date")}
      >
        <CalendarDays size={18} strokeWidth={1.8} class="mr-1.5" /> by Date
      </button>
      <button
        class:active={sortOrder === "stars"}
        on:click={() => (sortOrder = "stars")}
      >
        <Star size={18} strokeWidth={1.8} class="mr-1.5" /> by Stars
      </button>
    </div>
  </div>

  {#each sortOrder === "date" ? projectsByDate : projectsByStars as id (id)}
    <section class="py-10" id={trimName(id)}>
      <div class="mx-auto max-w-[1152px] px-4 sm:px-6">
        <Project data={projects[id]} {images} {stars} />
      </div>
    </section>
  {/each}
{/if}

<style lang="postcss">
  button {
    @apply flex items-center text-neutral-400 transition-colors hover:text-black;
  }

  button.active {
    @apply text-black;
  }
</style>
