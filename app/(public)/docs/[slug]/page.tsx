import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { marked } from "marked";

type Props = {
  params: { slug: string };
};

export default async function DocPage({ params }: Props) {
  const filePath = path.join(
    process.cwd(),
    "content/docs",
    `${params.slug}.md`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const markdown = fs.readFileSync(filePath, "utf-8");
  const html = marked(markdown);

  return (
    <article className="prose max-w-none">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}