"use client"

import React, { useState } from "react"
import {
    expandAllFeature,
    hotkeysCoreFeature,
    searchFeature,
    selectionFeature,
    syncDataLoaderFeature,
    TreeState,
} from "@headless-tree/core"
import { useTree } from "@headless-tree/react"
import { FolderIcon, FolderOpenIcon, GlobeIcon, SearchIcon } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Tree, TreeItem, TreeItemLabel } from "@/components/tree"
import { Badge } from "@/components/ui/badge"

type TBookmarkItem = {
    name: string
    url?: string
    children?: TBookmarkItem[]
}

type TItem = {
    name: string
    children?: string[]
    url?: string
}

const bookmarks: TBookmarkItem = {
    name: "Bookmarks",
    children: [
        {
            name: "Design",
            children: [
                {
                    name: "Design Systems",
                    children: [
                        {
                            name: "Tailwind UI",
                            url: "https://tailwindui.com"
                        },
                        {
                            name: "Radix UI",
                            url: "https://www.radix-ui.com"
                        }
                    ]
                },
                {
                    name: "Inspiration",
                    children: [
                        {
                            name: "Dribbble",
                            url: "https://dribbble.com"
                        },
                        {
                            name: "Awwwards",
                            url: "https://www.awwwards.com"
                        }
                    ]
                }
            ]
        },
        {
            name: "Development",
            children: [
                {
                    name: "Documentation",
                    children: [
                        {
                            name: "React Docs",
                            url: "https://react.dev"
                        },
                        {
                            name: "Next.js Docs",
                            url: "https://nextjs.org/docs"
                        }
                    ]
                },
                {
                    name: "Tools",
                    children: [
                        {
                            name: "GitHub",
                            url: "https://github.com"
                        },
                        {
                            name: "Stack Overflow",
                            url: "https://stackoverflow.com"
                        }
                    ]
                }
            ]
        }
    ]
}

// Helper function to flatten the tree for the tree component
function flattenTree(node: TBookmarkItem, parentId: string = ""): Record<string, { name: string; children?: string[]; url?: string }> {
    const result: Record<string, { name: string; children?: string[]; url?: string }> = {}
    const currentId = parentId ? `${parentId}-${node.name.toLowerCase().replace(/\s+/g, "-")}` : "root"

    result[currentId] = {
        name: node.name,
        url: node.url,
        children: node.children?.map(child =>
            `${currentId}-${child.name.toLowerCase().replace(/\s+/g, "-")}`
        )
    }

    if (node.children) {
        node.children.forEach(child => {
            Object.assign(result, flattenTree(child, currentId))
        })
    }

    return result
}

const items = flattenTree(bookmarks)

const indent = 20

export function BookmarksPageClient() {
    // Store the initial expanded items to reset when search is cleared
    const initialExpandedItems = ["root", "root-design", "root-development"]
    const [state, setState] = useState<Partial<TreeState<TItem>>>({})

    const tree = useTree<TItem>({
        state,
        setState,
        initialState: {
            expandedItems: initialExpandedItems,
        },
        indent,
        rootItemId: "root",
        getItemName: (item) => item.getItemData().name,
        isItemFolder: (item) => (item.getItemData()?.children?.length ?? 0) > 0,
        dataLoader: {
            getItem: (itemId) => items[itemId],
            getChildren: (itemId) => items[itemId]?.children ?? [],
        },
        features: [
            syncDataLoaderFeature,
            hotkeysCoreFeature,
            selectionFeature,
            searchFeature,
            expandAllFeature,
        ],
    })

    return (
        <div className="flex h-full flex-col gap-2 *:nth-2:grow">
            <div className="relative">
                <Input
                    className="peer ps-9 text-white"
                    {...{
                        ...tree.getSearchInputElementProps(),
                        onChange: (e) => {
                            // First call the original onChange handler from getSearchInputElementProps
                            const originalProps = tree.getSearchInputElementProps()
                            if (originalProps.onChange) {
                                originalProps.onChange(e)
                            }

                            // Then handle our custom logic
                            const value = e.target.value

                            if (value.length > 0) {
                                // If input has at least one character, expand all items
                                tree.expandAll()
                            } else {
                                // If input is cleared, reset to initial expanded state
                                setState((prevState) => {
                                    return {
                                        ...prevState,
                                        expandedItems: initialExpandedItems,
                                    }
                                })
                            }
                        },
                    }}
                    type="search"
                    placeholder="Quick search..."
                />
                <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                    <SearchIcon className="size-4" aria-hidden="true" />
                </div>
            </div>

            <Tree className="text-white" indent={indent} tree={tree}>
                {tree.getItems().map((item) => {
                    return (
                        <TreeItem key={item.getId()} item={item}>
                            <TreeItemLabel>
                                <span className="flex items-center gap-2">
                                    {item.isFolder() ? (
                                        item.isExpanded() ? (
                                            <FolderOpenIcon className="text-muted-foreground pointer-events-none size-4" />
                                        ) : (
                                            <FolderIcon className="text-muted-foreground pointer-events-none size-4" />
                                        )
                                    ) : null}
                                    {item.getItemData().url ? (
                                        <a
                                            href={item.getItemData().url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2"
                                        >
                                            <GlobeIcon className="size-4" />
                                            {item.getItemName()}
                                            <Badge variant="secondary">
                                                {item.getItemData().url}
                                            </Badge>
                                        </a>
                                    ) : (
                                        item.getItemName()
                                    )}
                                </span>
                            </TreeItemLabel>
                        </TreeItem>
                    )
                })}
            </Tree>
        </div>
    )
}
