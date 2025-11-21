import { Button } from "@/components/ui/button";

type FilterType = "all" | "joined" | "created" | "followed";

interface WorkbookSidebarProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export const WorkbookSidebar = ({ activeFilter, onFilterChange }: WorkbookSidebarProps) => {
  const filters: { id: FilterType; label: string }[] = [
    { id: "all", label: "All" },
    { id: "joined", label: "I Joined" },
    { id: "created", label: "I Created" },
    { id: "followed", label: "I Followed" },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border p-4 space-y-2">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => onFilterChange(filter.id)}
        >
          {filter.label}
        </Button>
      ))}
    </aside>
  );
};
