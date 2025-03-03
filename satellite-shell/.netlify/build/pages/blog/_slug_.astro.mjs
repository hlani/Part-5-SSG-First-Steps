import { e as createComponent, f as createAstro, j as renderHead, k as renderSlot, r as renderTemplate } from '../../chunks/astro/server_CgMMJ1kt.mjs';
import 'kleur/colors';
import 'clsx';
import { b as blogPosts } from '../../chunks/blogPosts_w9JNIkRV.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`Blog post not found: ${slug}`);
  }
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${post.title}</title><link rel="stylesheet" href="/styles.css">${renderHead()}</head> <body> <article class="blog-post"> <h1>${post.title}</h1> <p><strong>Date:</strong> ${post.date}</p> <p>${post.description}</p> <hr> ${renderSlot($$result, $$slots["default"])} <!-- Blog content will be injected here --> </article> </body></html>`;
}, "C:/Users/lamha/Desktop/Part-5-SSG-First-Steps/satellite-shell/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/lamha/Desktop/Part-5-SSG-First-Steps/satellite-shell/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$slug,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
