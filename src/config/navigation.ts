export interface NavItem {
  href: string;
  label: string;
  shortcut?: string;
  visible?: boolean; // defaults to true if not specified
}

export const navigation: NavItem[] = [
  {
    href: "/",
    label: "Home",
    shortcut: "1",
  },
  {
    href: "/contact",
    label: "Contact",
    shortcut: "2",
  },
  {
    href: "/blog",
    label: "Blog",
    shortcut: "3",
  },
  {
    href: "/gist",
    label: "Gists",
    shortcut: "4",
  },
  {
    href: "/links",
    label: "Links",
    shortcut: "5",
    visible: false,
  },
];
