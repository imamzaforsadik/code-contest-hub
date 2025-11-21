import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProblemFiltersProps {
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  hideAccepted: boolean;
  sortBy: string;
  sources: string[];
}

export const ProblemFilters = ({ onFilterChange }: ProblemFiltersProps) => {
  const [hideAccepted, setHideAccepted] = useState(false);
  const [sortBy, setSortBy] = useState("id");
  const [selectedSources, setSelectedSources] = useState<string[]>([]);

  const sources = ["LeetCode", "Codeforces", "Kattis", "AtCoder", "HackerRank"];

  const handleFilterUpdate = (updates: Partial<FilterState>) => {
    const newFilters = {
      hideAccepted,
      sortBy,
      sources: selectedSources,
      ...updates,
    };
    onFilterChange(newFilters);
  };

  const toggleSource = (source: string) => {
    const newSources = selectedSources.includes(source)
      ? selectedSources.filter((s) => s !== source)
      : [...selectedSources, source];
    setSelectedSources(newSources);
    handleFilterUpdate({ sources: newSources });
  };

  return (
    <aside className="w-64 bg-card border-r border-border p-4 space-y-6">
      {/* Hide Accepted */}
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">Filters</h3>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="hide-accepted"
            checked={hideAccepted}
            onCheckedChange={(checked) => {
              setHideAccepted(checked as boolean);
              handleFilterUpdate({ hideAccepted: checked as boolean });
            }}
          />
          <Label htmlFor="hide-accepted" className="text-sm cursor-pointer">
            Hide Accepted
          </Label>
        </div>
      </div>

      {/* Sort By */}
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">Sort By</h3>
        <Select
          value={sortBy}
          onValueChange={(value) => {
            setSortBy(value);
            handleFilterUpdate({ sortBy: value });
          }}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="id">Problem ID</SelectItem>
            <SelectItem value="difficulty">Difficulty</SelectItem>
            <SelectItem value="solves">Most Solved</SelectItem>
            <SelectItem value="name">Name</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Problem Sources */}
      <div className="space-y-2">
        <h3 className="font-semibold text-foreground">Problem Source</h3>
        <div className="space-y-2">
          {sources.map((source) => (
            <div key={source} className="flex items-center space-x-2">
              <Checkbox
                id={source}
                checked={selectedSources.includes(source)}
                onCheckedChange={() => toggleSource(source)}
              />
              <Label htmlFor={source} className="text-sm cursor-pointer">
                {source}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setHideAccepted(false);
          setSortBy("id");
          setSelectedSources([]);
          handleFilterUpdate({
            hideAccepted: false,
            sortBy: "id",
            sources: [],
          });
        }}
      >
        Clear Filters
      </Button>
    </aside>
  );
};
