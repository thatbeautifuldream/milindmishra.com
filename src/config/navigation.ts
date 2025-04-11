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
    href: "/blog",
    label: "Blog",
    shortcut: "2",
  },
  {
    href: "/gist",
    label: "Gists",
    shortcut: "3",
  },
  {
    href: "/slide",
    label: "Slide",
    shortcut: "4",
  },
  {
    href: "/links",
    label: "Links",
    shortcut: "5",
    visible: false,
  },
];
