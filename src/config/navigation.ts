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
    href: "/mock-interview",
    label: "Mock Interviews",
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
    href: "/slide",
    label: "Slide",
    shortcut: "5",
  },
  {
    href: "/links",
    label: "Links",
    shortcut: "6",
    visible: false,
  },
];
