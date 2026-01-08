"use client";

import { useEffect, useMemo, useState } from "react";

export default function ScrollSpyNav({
  items,
  defaultActiveId,
  activeClassName,
  inactiveClassName,
}) {
  const [activeId, setActiveId] = useState(defaultActiveId || (items[0] && items[0].id));

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    if (!ids.length) return;

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1));

        if (visible.length) {
          const id = visible[0].target.getAttribute("id");
          if (id) setActiveId(id);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0.01, 0.1, 0.25],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <ul className="space-y-1">
      {items.map((item) => (
        <li key={item.id}>
          <a
            className={item.id === activeId ? activeClassName : inactiveClassName}
            href={`#${item.id}`}
            onClick={() => setActiveId(item.id)}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
