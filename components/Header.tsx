"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  // {
  //   name: "Projects",
  //   href: "/projects",
  // },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-8 py-6">
          <nav className="flex items-center justify-between">
            <ul className="flex gap-4 sm:gap-8">
              {navLinks.map((nav, id) => (
                <li key={id} className="link">
                  <Link
                    href={nav.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-200"
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
