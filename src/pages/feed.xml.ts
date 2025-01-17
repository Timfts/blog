import rss from "@astrojs/rss";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
import { getPostsByLang } from "@cms/collections/posts/helpers";
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getPostsByLang("en", false);

  return rss({
    // campo `<title>` no xml final
    title: "Tim Fontes's Blog",
    // campo `<description>` no xml final
    description: "To do",
    // Pega o "site" do seu projeto do contexto do endpoint
    // https://docs.astro.build/pt-br/reference/api-reference/#contextsite
    site: context.site,
    // Array de `<item>`s no xml final
    // Veja a seção "Gerando items" para exemplos utilizando coleções de conteúdo e importações de glob
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: (post.data.updated_date || post.data.created_date) as Date,
      description: post.data.excerpt,
      link: `/posts/${post.data.page_url}`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
    })),
    // (opcional) injeta xml customizado
    customData: `<language>en</language>`,
  });
}
