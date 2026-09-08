# Portfolio Website Template

A clean, minimalist personal portfolio website built with
[SvelteKit](https://kit.svelte.dev/), [Tailwind CSS](https://tailwindcss.com/),
and [TypeScript](https://www.typescriptlang.org/).

Design source: Extracted from the
[ekzhang/ekzhang.github.io](https://github.com/ekzhang/ekzhang.github.io)
repository by [Eric Zhang](https://ekzhang.com), featuring elegant Newsreader
typography, reactive page transitions, markdown-powered project portfolios, and
YAML-driven writing lists.

---

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
npm run build
```

Static files will be emitted to the `build/` directory.

### 4. Preview Production Build Locally

```bash
npm run preview
```

---

## Project Structure & Customization

### 1. Site Configuration & Personal Details

Edit **`src/lib/config.ts`** to update site-wide information:

- **`name`** / **`fullName`**: Name displayed in header and titles.
- **`roles`**: Key roles shown on the homepage intro.
- **`bio`**: Introductory bio paragraphs.
- **`githubUsername`**: Fetches GitHub star counts dynamically for projects.
- **`social`**: Links and handles rendered in the footer.
- **`navLinks`**: Navigation links displayed in the header.

### 2. Homepage (`src/routes/+page.svelte`)

- Customize the featured project showcase list in `featuredProjects`.
- Replace the profile portrait at `static/assets/images/profile.jpg`.

### 3. Projects Showcase (`src/projects/*.md`)

Add or edit project markdown files inside `src/projects/`. Each project uses
YAML frontmatter:

```markdown
---
title: Project Name
date: 2024-01-15
repo: your-username/repo-name
topics: ["TypeScript", "Distributed Systems"]
lead: A short, compelling one-line description of the project.
image: preview-image.png
image_border: true
---

Detailed description and documentation in Markdown...
```

- Place corresponding preview images in `src/projects/` (supports `.png`,
  `.jpg`, `.svg`).
- Projects are automatically indexed on `/projects` with instant sorting by Date
  or GitHub Stars.

### 4. Writing, Articles & Native HTML Logs (`src/routes/writing/writing.yaml`)

Organize external articles, notes, and native blog post logs in
`src/routes/writing/writing.yaml`:

```yaml
logs:
  - title: "Log Entry: My Post Title"
    date: 2024-04-10
    summary: "A short summary of this post."
    link: "/writing/logs/my-post" # Points to src/logs/my-post.html

technology:
  - title: "External Article Title"
    date: 2024-05-12
    summary: "Summary of an article hosted on an external site."
    link: "https://example.com/article"
```

#### Adding Native HTML Blog Posts:

1. Create an HTML file in `src/logs/` (for example, `src/logs/my-post.html`).
2. Add optional YAML frontmatter at the top:

   ```html
   ---
   title: "My Post Title"
   date: "2024-04-10"
   summary: "A short summary of this post."
   ---

   <p>Write your blog post in standard HTML here...</p>
   ```

3. Add the entry to the `logs` list in `src/routes/writing/writing.yaml` with
   `link: "/writing/logs/my-post"`.
4. It will automatically render as a static page with full site styling,
   navigation, and typography.

### 5. Resume (`src/routes/resume/+page.svelte`)

- Update professional experience using `<Workplace>` components.
- Update education, awards, and technical skills sections.

---

## Deployment (GitHub Pages)

This project uses `@sveltejs/adapter-static` and is pre-configured with a GitHub
Actions workflow in `.github/workflows/ci.yml`.

To deploy:

1. Push your changes to the `main` branch on GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment**, select **GitHub Actions** or set the branch
     to `gh-pages`.
3. The site will be built and published to `https://<your-username>.github.io`.

---

## Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Starts the local development server              |
| `npm run build`   | Builds the static website to the `build/` folder |
| `npm run preview` | Serves the production build locally              |
| `npm run check`   | Runs SvelteKit type checks                       |
| `npm run format`  | Formats codebase with Prettier                   |
| `npm run lint`    | Checks code formatting                           |

---

## Credits & Design Source

The design architecture, typography, and page transition aesthetics of this
template are sourced from:

- Repository:
  [ekzhang/ekzhang.github.io](https://github.com/ekzhang/ekzhang.github.io)
- Author: [Eric Zhang](https://ekzhang.com)
