import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

const logs = import.meta.glob("/src/logs/*.md", {
  eager: true,
}) as Record<
  string,
  {
    title: string;
    date: string;
    summary?: string;
    content: string;
    [key: string]: any;
  }
>;

export const prerender = true;

export const load: PageLoad = ({ params }) => {
  const { slug } = params;
  const match = Object.entries(logs).find(([path]) => {
    const fileSlug = path.split("/").pop()?.replace(/\.md$/, "");
    return fileSlug === slug;
  });

  if (!match) {
    throw error(404, `Log post '${slug}' not found`);
  }

  const [, post] = match;
  return {
    slug,
    post,
  };
};
