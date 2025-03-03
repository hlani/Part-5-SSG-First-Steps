import { e as createComponent, i as renderComponent, r as renderTemplate, u as unescapeHTML } from '../../chunks/astro/server_CgMMJ1kt.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_W3f-QaZ1.mjs';
export { renderers } from '../../renderers.mjs';

const html = () => "<p>Welcome to my first blog post! 🚀<br>\nThis blog is built using <strong>Astro</strong> and supports Markdown for easy content creation.</p>";

				const frontmatter = {"layout":"../../layouts/Layout.astro","title":"My First Blog Post","date":"2024-03-03","description":"This is an introduction to my new blog!"};
				const file = "C:/Users/lamha/Desktop/Part-5-SSG-First-Steps/satellite-shell/src/pages/blog/my-first-post.md";
				const url = "/blog/my-first-post";
				function rawContent() {
					return "   \r\n                                  \r\n                           \r\n                  \r\n                                                      \r\n   \r\n\r\nWelcome to my first blog post! 🚀  \r\nThis blog is built using **Astro** and supports Markdown for easy content creation.\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$Layout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
