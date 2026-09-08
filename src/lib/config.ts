/**
 * Site Configuration Template
 * Update this file with your actual personal and professional details.
 */
export const siteConfig = {
  // Your display name in the header and titles
  name: "Your Name",
  fullName: "Your Full Name",

  // Metadata for SEO and browser titles
  title: "Your Name – Portfolio",
  description:
    "A clean personal portfolio template. Add your personal bio and description here.",
  siteUrl: "https://buzel-112.github.io",

  // Your GitHub username to automatically fetch repository star counts on /projects
  githubUsername: "BUZEL-112",

  // 2-3 role keywords displayed on the homepage intro headline
  roles: ["developer", "designer", "builder"],

  // Paragraphs introducing yourself on the homepage
  bio: [
    "Write a short introductory paragraph about yourself, your core interests, and the kind of work you enjoy doing.",
    "Describe your technical background, the domains you specialize in, and what drives your curiosity.",
    "Share what you are currently learning, building, or looking forward to exploring next.",
  ],

  // Social handles and links displayed in the site footer
  social: [
    {
      label: "GitHub",
      href: "https://github.com/BUZEL-112",
      handle: "@BUZEL-112",
    },
    {
      label: "Twitter",
      href: "https://twitter.com/your-username",
      handle: "@your-username",
    },
    {
      label: "Email",
      href: "mailto:you@example.com",
      handle: "you@example.com",
    },
  ],

  // Navigation items shown in the site header
  navLinks: [
    { name: "projects", href: "/projects" },
    { name: "writing", href: "/writing" },
    { name: "resume", href: "/resume" },
  ],
};
