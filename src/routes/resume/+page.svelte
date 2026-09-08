<script lang="ts">
  import Seo from "$lib/components/Seo.svelte";
  import Workplace from "./Workplace.svelte";
  import { siteConfig } from "$lib/config";
</script>

<Seo
  title="{siteConfig.name} – Resume"
  description="Software engineer, researcher, and designer. Professional background, experience, and education."
/>

<section class="layout-md py-12">
  <h2 class="heading2">Professional Experience</h2>

  <Workplace
    title="[Job Title]"
    company="[Company or Organization]"
    url="https://example.com"
    dates="Month Year – Present"
    location="City, State / Remote"
  >
    <li>
      Describe your primary responsibilities, projects, and the scope of your
      work.
    </li>
    <li>
      Highlight measurable achievements, performance improvements, or features
      delivered.
    </li>
    <li>
      Mention technologies, programming languages, and architectural patterns
      utilized.
    </li>
  </Workplace>

  <Workplace
    title="[Previous Job Title]"
    company="[Previous Company or Organization]"
    url="https://example.com"
    dates="Month Year – Month Year"
    location="City, State"
  >
    <li>
      Summarize your contributions, cross-functional collaboration, and
      technical solutions.
    </li>
    <li>Highlight key deliverables, tools developed, or systems maintained.</li>
  </Workplace>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Education</h2>

  <div class="mb-4">
    <div class="flex justify-between items-end">
      <h3 class="text-black text-lg">[Institution / University Name]</h3>
      <div class="text-neutral-500 mb-0.5">Year — Year</div>
    </div>
    <p class="byline">[Degree and Major / Field of Study]</p>
  </div>

  <p>[Optional honors, GPA, or academic distinctions]</p>

  <h4 class="font-medium mt-4 mb-1">Relevant Coursework:</h4>
  <ul>
    <li>[Relevant Course Subject 1]</li>
    <li>[Relevant Course Subject 2]</li>
    <li>[Relevant Course Subject 3]</li>
    <li>[Relevant Course Subject 4]</li>
  </ul>
</section>

<section class="layout-md py-12">
  <h2 class="heading2">Skills & Technologies</h2>

  <div class="mb-4">
    <ul>
      <li>
        <b>Languages:</b> [List your programming languages, e.g. TypeScript, Python,
        Rust, Go]
      </li>
      <li>
        <b>Frameworks & Libraries:</b> [List your frameworks, e.g. SvelteKit, React,
        Node.js]
      </li>
      <li>
        <b>Tools & Infrastructure:</b> [List tools, e.g. Docker, Git, Linux, Cloud
        Platforms, CI/CD]
      </li>
    </ul>
  </div>
</section>

<style lang="postcss">
  b {
    @apply font-medium;
  }

  ul {
    @apply list-disc pl-7 marker:text-neutral-400;
  }

  .byline {
    @apply font-serif italic;
  }
</style>
