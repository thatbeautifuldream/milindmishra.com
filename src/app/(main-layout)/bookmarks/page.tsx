import React from "react";
import { BookmarksPageClient } from "./page.client";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bookmarks | Milind Mishra",
    description: "Bookmarks by Milind Mishra",
}

export default function BookmarksPage() {
    return <BookmarksPageClient />;
}
