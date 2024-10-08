"use client";

import { motion } from "framer-motion";
import { useTabStore, type TabType } from "~/stores";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const tabs: TabType[] = ["Home", "Projects", "Resume", "Blogs"];

interface TabProps {
  text: string;
  selected: boolean;
  customID?: string;
}

const Tab = ({ text, selected, customID }: TabProps) => {
  const { setSelectedTab } = useTabStore();
  const router = useRouter();

  const handleTabClick = (tab: TabType) => {
    setSelectedTab(tab);
    switch (tab) {
      case "Home":
        router.push("/");
        break;
      case "Projects":
        router.push("/projects");
        break;
      case "Resume":
        router.push("/resume");
        break;
      case "Blogs":
        router.push("/blogs");
        break;
    }
  };
  return (
    <button
      onClick={() => handleTabClick(text as TabType)}
      className={`${
        selected ? "text-primary" : " hover:text-primary/80"
      } relative rounded-md px-2 py-1 text-sm font-medium text-gray-500 transition-colors duration-300 focus-within:outline-primary dark:text-gray-300`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex size-full h-full w-full items-end justify-center"
          layoutId={customID + "linetab"}
          transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[60%] rounded-t-full bg-primary"></span>
        </motion.div>
      )}
    </button>
  );
};

interface LineTabProps {
  center?: boolean;
  customID?: string;
  children: React.ReactNode;
}

const LineTabs = ({ center, customID, children }: LineTabProps) => {
  const { selectedTab } = useTabStore();
  const pathname = usePathname();

  useEffect(() => {
    switch (pathname) {
      case "/":
        if (selectedTab !== "Home") {
          useTabStore.getState().setSelectedTab("Home");
        }
        break;
      case "/projects":
        if (selectedTab !== "Projects") {
          useTabStore.getState().setSelectedTab("Projects");
        }
        break;
      case "/resume":
        if (selectedTab !== "Resume") {
          useTabStore.getState().setSelectedTab("Resume");
        }
        break;
      case "/blogs":
        if (selectedTab !== "Blogs") {
          useTabStore.getState().setSelectedTab("Blogs");
        }
        break;
    }
  }, [pathname, selectedTab]);

  return (
    <>
      <div
        className={`${
          center ? "justify-center" : ""
        } border-black-500/25 mb-8 flex flex-wrap items-center gap-2 border-b`}
      >
        {tabs.map((tab) => (
          <Tab
            text={tab}
            selected={selectedTab === tab}
            key={tab}
            customID={customID}
          />
        ))}
      </div>
      {children}
    </>
  );
};

export default LineTabs;
