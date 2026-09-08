<script lang="ts">
  import { ArrowUpRight } from "lucide-svelte";
  import Seo from "$lib/components/Seo.svelte";
  import { siteConfig } from "$lib/config";

  const featuredProjects = [
    {
      name: "Project One",
      href: "/projects#project-one",
      desc: "Brief description of your first featured project and its purpose",
      aside: "Optional highlight or milestone",
    },
    {
      name: "Project Two",
      href: "/projects#project-two",
      desc: "Brief description of your second featured project and its tech stack",
    },
    {
      name: "Project Three",
      href: "/projects#project-three",
      desc: "Brief description of another notable tool, library, or experiment",
    },
  ];
</script>

<Seo
  title="{siteConfig.name} – Portfolio"
  description={siteConfig.description}
/>

<p
  class="layout-md text-black text-xl leading-tight font-light mb-16"
  id="intro-is"
>
  <span class="g">is a</span>
  {siteConfig.roles[0]}<span class="g">,</span><br />
  {siteConfig.roles[1]}<span class="g">, and</span><br />
  {siteConfig.roles[2]}<span class="g">.</span>
</p>

<div class="layout-md text-lg space-y-14">
  <div class="space-y-5">
    {#each siteConfig.bio as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>

  <div class="leading-snug space-y-4">
    <p class="pb-2">Notable open-source work:</p>

    {#each featuredProjects as project}
      <a class="project-pair" href={project.href}>
        <div class="text-black font-medium">
          {project.name}
          <ArrowUpRight size={18} class="inline text-neutral-400" />
        </div>
        <div>
          <p>{project.desc}</p>
          {#if project.aside}
            <aside>{project.aside}</aside>
          {/if}
        </div>
      </a>
    {/each}
  </div>

  <div class="space-y-5">
    <p>
      Share additional details about your background, career history, or areas
      of expertise. You can mention previous roles, projects, or open-source
      communities you are involved with.
    </p>

    <p>
      Add information about personal interests, reading, hobbies, or creative
      pursuits outside of programming.
    </p>
  </div>

  <div class="space-y-5">
    <img
      alt="Profile placeholder"
      src="/assets/images/profile-placeholder.svg"
      class="rounded-sm max-w-full border border-neutral-200"
    />
  </div>
</div>

<style lang="postcss">
  .g {
    @apply text-neutral-400;
  }

  :global(em) {
    @apply font-serif text-[110%] leading-[100%];
  }

  .project-pair {
    @apply grid sm:grid-cols-[1fr,2fr] gap-y-1 -mx-3 px-3 py-2 hover:bg-neutral-100 transition-colors;
  }

  aside {
    @apply mt-0.5 text-base text-neutral-500;
  }

  /* Correction for vertical navigation links on mobile. */
  @media (max-width: 420px) {
    #intro-is {
      @apply -mt-10;
    }
  }
</style>
