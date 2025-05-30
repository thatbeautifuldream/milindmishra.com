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
    href: "/slide",
    label: "Talks",
    shortcut: "2",
  },
  {

    href: "/youtube",
    label: "Videos",
    shortcut: "3",
  },
  {
    href: "/blog",
    label: "Blog",
    shortcut: "4",
  },
  {
    href: "/gist",
    label: "Snippets",
    shortcut: "5",
  },
  {
    href: "/links",
    label: "Socials",
    shortcut: "6",
  },
];
