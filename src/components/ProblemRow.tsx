import { useState } from "react";
import { ExternalLink } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type StatusType = "pending" | "accepted" | "wa" | "tle" | "rte" | "ce";

interface Problem {
  id: number;
  name: string;
  difficulty: 1 | 2 | 3;
  solves: number;
  sourceUrl: string;
}

interface ProblemRowProps {
  problem: Problem;
  status: StatusType;
  onStatusChange: (problemId: number, status: StatusType) => void;
}

const statusLabels: Record<StatusType, string> = {
  pending: "—",
  accepted: "Accepted",
  wa: "WA",
  tle: "TLE",
  rte: "RTE",
  ce: "CE",
};

const statusColors: Record<StatusType, string> = {
  pending: "bg-status-pending",
  accepted: "bg-status-accepted",
  wa: "bg-status-wa",
  tle: "bg-status-tle",
  rte: "bg-status-wa",
  ce: "bg-status-tle",
};

export const ProblemRow = ({ problem, status, onStatusChange }: ProblemRowProps) => {

  return (
    <div
      className={`flex items-center gap-4 px-4 py-3 rounded-md border border-border transition-colors ${statusColors[status]}/10 hover:${statusColors[status]}/20`}
    >
      {/* Status Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className={`w-24 justify-center ${statusColors[status]} hover:${statusColors[status]}/90 text-foreground`}
          >
            {statusLabels[status]}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-popover">
          <DropdownMenuItem onClick={() => onStatusChange(problem.id, "pending")}>
            {statusLabels.pending}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusChange(problem.id, "accepted")}>
            {statusLabels.accepted}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusChange(problem.id, "wa")}>
            {statusLabels.wa}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusChange(problem.id, "tle")}>
            {statusLabels.tle}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusChange(problem.id, "rte")}>
            {statusLabels.rte}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onStatusChange(problem.id, "ce")}>
            {statusLabels.ce}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Problem Name */}
      <a
        href={problem.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-accent hover:underline flex-1"
      >
        {problem.id}. {problem.name}
        <ExternalLink className="w-4 h-4" />
      </a>

      {/* Difficulty */}
      <div className="flex gap-1">
        {[1, 2, 3].map((level) => (
          <div
            key={level}
            className={`w-2 h-2 rounded-full ${
              level <= problem.difficulty ? "bg-accent" : "bg-muted"
            }`}
          />
        ))}
      </div>

      {/* Solves */}
      <div className="text-muted-foreground text-sm w-16 text-right">
        {problem.solves}
      </div>
    </div>
  );
};
