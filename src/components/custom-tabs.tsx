import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabItem {
  value: string;
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  tabs: TabItem[];
  defaultTab?: string;
  className?: string;
  tabListClassName?: string;
  tabTriggerClassName?: string;
  tabContentClassName?: string;
}

export default function CustomTabs({
  tabs,
  defaultTab,
  className = "",
  tabListClassName = "",
  tabTriggerClassName = "",
  tabContentClassName = "",
}: CustomTabsProps) {
  // Use first tab as default if none specified
  const defaultValue = defaultTab || tabs[0]?.value;

  const defaultTriggerStyles = `
    relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 
    after:h-0.5 hover:bg-accent hover:text-foreground data-[state=active]:bg-transparent 
    data-[state=active]:shadow-none data-[state=active]:after:bg-primary 
    data-[state=active]:hover:bg-accent
  `;

  const defaultTabListStyles = `
    h-auto gap-2 rounded-none border-b border-border bg-transparent 
    px-0 py-1 text-foreground
  `;

  return (
    <Tabs defaultValue={defaultValue} className={className}>
      <TabsList className={`${defaultTabListStyles} ${tabListClassName}`}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={`${defaultTriggerStyles} ${tabTriggerClassName}`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent
          key={tab.value}
          value={tab.value}
          className={tabContentClassName}
        >
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
