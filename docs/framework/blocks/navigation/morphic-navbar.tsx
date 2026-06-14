"use client";

/**
 * Block: Morphic navbar — pill nav where the active item detaches into its own
 * rounded segment and neighbors re-round their corners (morphing capsule effect).
 * Compact marketing-site nav for small link sets (3-5 items).
 * Source: 21st.dev community. Adaptation: the source used an undefined `.glass`
 * utility — replaced with concrete backdrop classes (retheme to direction tokens).
 * PLACEHOLDER: items + `href="#"` — wire real routes and derive activePath from
 * usePathname() instead of local state when used as the actual site nav.
 */

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  name: string;
}

interface MorphicNavbarProps {
  items?: Record<string, NavItem>;
  defaultPath?: string;
  className?: string;
}

const DEFAULT_NAV_ITEMS: Record<string, NavItem> = {
  "/": { name: "home" },
  "/works": { name: "works" },
  "/blog": { name: "blog" },
  "/about": { name: "about" },
};

export function MorphicNavbar({
  items = DEFAULT_NAV_ITEMS,
  defaultPath = "/",
  className,
}: MorphicNavbarProps) {
  const [activePath, setActivePath] = useState(defaultPath);

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return activePath === "/";
    }
    return activePath.startsWith(path);
  };

  return (
    <nav className={clsx("mx-auto max-w-4xl px-4 py-2", className)}>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-between overflow-hidden rounded-xl border border-border/50 bg-background/60 backdrop-blur-md">
          {Object.entries(items).map(([path, { name }], index, array) => {
            const isActive = isActiveLink(path);
            const isFirst = index === 0;
            const isLast = index === array.length - 1;
            const prevPath = index > 0 ? array[index - 1][0] : null;
            const nextPath =
              index < array.length - 1 ? array[index + 1][0] : null;

            return (
              <Link
                className={clsx(
                  "flex items-center justify-center bg-black p-1.5 px-4 text-sm text-white transition-all duration-300 dark:bg-white dark:text-black",
                  isActive
                    ? "mx-2 rounded-xl font-semibold text-sm"
                    : clsx(
                        (isActiveLink(prevPath || "") || isFirst) &&
                          "rounded-l-xl",
                        (isActiveLink(nextPath || "") || isLast) &&
                          "rounded-r-xl"
                      )
                )}
                href="#"
                key={path}
                onClick={() => setActivePath(path)}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default MorphicNavbar;
