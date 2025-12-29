export const dynamic = "force-dynamic";

import fs from "fs/promises";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

export default async function Page() {
  const filePath = path.join(process.cwd(), "content", "hello.md");
  const markdown = await fs.readFile(filePath, "utf-8");

  const result = await remark().use(html).process(markdown);
  const htmlContent = result.toString();

  return (
    <main style={{ padding: 24 }}>
      <article dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>export const dynamic = "force-dynamic";

  );
}