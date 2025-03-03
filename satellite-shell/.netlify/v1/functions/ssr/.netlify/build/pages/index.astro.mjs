import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CgMMJ1kt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_W3f-QaZ1.mjs';
import { b as blogPosts } from '../chunks/blogPosts_w9JNIkRV.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Blog Posts</h1> <div class="blog-list"> ${blogPosts.map((post) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="blog-card"> <h2>${post.title}</h2> <p>${post.date}</p> <p>${post.description}</p> </a>`)} </div> ` })}`;
}, "C:/Users/lamha/Desktop/Part-5-SSG-First-Steps/satellite-shell/src/pages/index.astro", void 0);

const $$file = "C:/Users/lamha/Desktop/Part-5-SSG-First-Steps/satellite-shell/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
