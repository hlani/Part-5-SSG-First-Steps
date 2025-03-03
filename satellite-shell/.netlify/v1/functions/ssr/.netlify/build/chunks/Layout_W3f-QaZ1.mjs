import { e as createComponent, j as renderHead, k as renderSlot, r as renderTemplate } from './astro/server_CgMMJ1kt.mjs';
import 'kleur/colors';
import 'clsx';

let title;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link rel="stylesheet" href="../../public/style.css">${renderHead()}</head> <body> <main> ${renderSlot($$result, $$slots["default"])} <!-- Content from other pages will go here --> </main> </body></html>`;
}, "C:/Users/lamha/Desktop/Part-5-SSG-First-Steps/satellite-shell/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
