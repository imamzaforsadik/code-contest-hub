import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { ProblemRow } from "@/components/ProblemRow";
import { ProblemFilters, FilterState } from "@/components/ProblemFilters";

// Sample problems data
const problemsData = [
  {
    id: 1,
    name: "Two Sum",
    difficulty: 1 as const,
    solves: 5234,
    sourceUrl: "https://leetcode.com/problems/two-sum/",
    source: "LeetCode",
  },
  {
    id: 2,
    name: "Add Two Numbers",
    difficulty: 2 as const,
    solves: 3421,
    sourceUrl: "https://leetcode.com/problems/add-two-numbers/",
    source: "LeetCode",
  },
  {
    id: 6,
    name: "Loops",
    difficulty: 2 as const,
    solves: 3813,
    sourceUrl: "https://codeforces.com/problemset/problem/1/A",
    source: "Codeforces",
  },
  {
    id: 3,
    name: "Longest Substring",
    difficulty: 2 as const,
    solves: 2987,
    sourceUrl: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    source: "LeetCode",
  },
  {
    id: 4,
    name: "Median of Two Sorted Arrays",
    difficulty: 3 as const,
    solves: 1234,
    sourceUrl: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    source: "LeetCode",
  },
  {
    id: 5,
    name: "Reverse Integer",
    difficulty: 1 as const,
    solves: 4567,
    sourceUrl: "https://leetcode.com/problems/reverse-integer/",
    source: "LeetCode",
  },
  {
    id: 7,
    name: "APlusB",
    difficulty: 1 as const,
    solves: 8901,
    sourceUrl: "https://www.kattis.com/problems/aplusb",
    source: "Kattis",
  },
  {
    id: 8,
    name: "Dynamic Programming",
    difficulty: 3 as const,
    solves: 2341,
    sourceUrl: "https://atcoder.jp/contests/dp",
    source: "AtCoder",
  },
];

const Problems = () => {
  const [filters, setFilters] = useState<FilterState>({
    hideAccepted: false,
    sortBy: "id",
    sources: [],
  });
  
  const [problemStatuses, setProblemStatuses] = useState<Record<number, string>>({});

  const handleStatusChange = (problemId: number, status: string) => {
    setProblemStatuses((prev) => ({
      ...prev,
      [problemId]: status,
    }));
  };

  // Apply filters and sorting
  const filteredProblems = problemsData.filter((problem) => {
    if (filters.hideAccepted && problemStatuses[problem.id] === "accepted") {
      return false;
    }
    if (filters.sources.length > 0 && !filters.sources.includes(problem.source)) {
      return false;
    }
    return true;
  });

  const sortedProblems = [...filteredProblems].sort((a, b) => {
    switch (filters.sortBy) {
      case "difficulty":
        return a.difficulty - b.difficulty;
      case "solves":
        return b.solves - a.solves;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return a.id - b.id;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="flex">
        <ProblemFilters onFilterChange={setFilters} />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-bold mb-6">Problems</h1>
          <div className="space-y-2">
            {sortedProblems.map((problem) => (
              <ProblemRow 
                key={problem.id} 
                problem={problem}
                status={(problemStatuses[problem.id] as any) || "pending"}
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Problems;
