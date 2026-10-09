import type { ReactNode } from "react";
import type { ArticleBlock, ArticleRun } from "@/lib/neosporin-article";

function Runs({ runs }: { runs: ArticleRun[] }) {
  return (
    <>
      {runs.map((run, index) => {
        let node: ReactNode = run.text;
        if (run.bold) node = <strong>{node}</strong>;
        if (run.italic) node = <em>{node}</em>;
        if (run.href) {
          node = (
            <a href={run.href} target="_blank" rel="noreferrer">
              {node}
            </a>
          );
        }
        return <span key={index}>{node}</span>;
      })}
    </>
  );
}

type ListItem = Extract<ArticleBlock, { type: "li" }>;

function renderList(items: ListItem[], keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let index = 0;

  while (index < items.length) {
    const depth = items[index].depth ?? 0;
    const ordered = Boolean(items[index].ordered);
    const Tag = ordered ? "ol" : "ul";
    const entries: ReactNode[] = [];

    while (
      index < items.length &&
      (items[index].depth ?? 0) === depth &&
      Boolean(items[index].ordered) === ordered
    ) {
      const item = items[index];
      index += 1;
      const nested: ListItem[] = [];
      while (index < items.length && (items[index].depth ?? 0) > depth) {
        nested.push(items[index]);
        index += 1;
      }
      entries.push(
        <li key={entries.length}>
          <Runs runs={item.inlines} />
          {nested.length ? renderList(nested, `${keyPrefix}-${entries.length}`) : null}
        </li>,
      );
    }

    nodes.push(<Tag key={`${keyPrefix}-${nodes.length}`}>{entries}</Tag>);
  }

  return nodes;
}

export function BlogArticle({ blocks }: { blocks: ArticleBlock[] }) {
  const nodes: ReactNode[] = [];
  let list: ListItem[] = [];

  function flushList() {
    if (!list.length) return;
    const items = list;
    list = [];
    nodes.push(...renderList(items, `list-${nodes.length}`));
  }

  for (const block of blocks) {
    if (block.type === "li") {
      list.push(block);
      continue;
    }
    flushList();
    if (block.type === "image") {
      nodes.push(
        <figure key={`figure-${nodes.length}`}>
          <img src={block.src} alt={block.alt} />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>,
      );
      continue;
    }
    if (block.type === "h2" || block.type === "h3") {
      const Tag = block.type;
      nodes.push(
        <Tag key={`h-${nodes.length}`}>
          <Runs runs={block.inlines} />
        </Tag>,
      );
      continue;
    }
    nodes.push(
      <p key={`p-${nodes.length}`}>
        <Runs runs={block.inlines} />
      </p>,
    );
  }
  flushList();

  return <article className="blog-article">{nodes}</article>;
}
