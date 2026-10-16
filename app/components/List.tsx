import Link from "next/link";

export type Item = { title: string; text?: string; href?: string };

/** Clean ruled list: title + one short line, optional link. */
export default function List({ items }: { items: Item[] }) {
  return (
    <div className="list">
      {items.map((it) => {
        const body = (
          <>
            <i className="k" aria-hidden="true" />
            <span>
              <b>{it.title}</b>
              {it.text && <small>{it.text}</small>}
            </span>
            {it.href && <span className="arw" aria-hidden="true">↗</span>}
          </>
        );
        if (!it.href) return <div className="li" key={it.title}>{body}</div>;
        const ext = it.href.startsWith("http");
        return ext ? (
          <a className="li" key={it.title} href={it.href} target="_blank" rel="noopener noreferrer">{body}</a>
        ) : (
          <Link className="li" key={it.title} href={it.href}>{body}</Link>
        );
      })}
    </div>
  );
}
