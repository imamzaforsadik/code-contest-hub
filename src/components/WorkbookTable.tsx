import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { NavLink } from "@/components/NavLink";

interface Workbook {
  id: number;
  title: string;
  problemCount: number;
  active: number;
  joined: number;
  views: number;
  author: string;
  updateTime: string;
}

interface WorkbookTableProps {
  workbooks: Workbook[];
}

export const WorkbookTable = ({ workbooks }: WorkbookTableProps) => {
  return (
    <div className="rounded-md border border-border overflow-hidden">
      <Table>
        <TableHeader className="bg-table-header">
          <TableRow className="hover:bg-table-header border-b border-border">
            <TableHead className="w-20 text-muted-foreground font-medium">ID</TableHead>
            <TableHead className="text-muted-foreground font-medium">Title</TableHead>
            <TableHead className="w-24 text-center text-muted-foreground font-medium">Active</TableHead>
            <TableHead className="w-24 text-center text-muted-foreground font-medium">Joined</TableHead>
            <TableHead className="w-24 text-center text-muted-foreground font-medium">View</TableHead>
            <TableHead className="w-40 text-muted-foreground font-medium">Author</TableHead>
            <TableHead className="w-48 text-muted-foreground font-medium">Update time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workbooks.map((workbook) => (
            <TableRow 
              key={workbook.id} 
              className="bg-table-row hover:bg-table-row-hover border-b border-border transition-colors"
            >
              <TableCell className="text-muted-foreground">{workbook.id}</TableCell>
              <TableCell>
                <NavLink 
                  to={`/workbook/${workbook.id}`}
                  className="text-accent hover:underline"
                >
                  {workbook.title}
                </NavLink>
                <span className="text-muted-foreground text-sm ml-2">
                  {workbook.problemCount} Problems
                </span>
              </TableCell>
              <TableCell className="text-center text-muted-foreground">{workbook.active}</TableCell>
              <TableCell className="text-center text-muted-foreground">{workbook.joined}</TableCell>
              <TableCell className="text-center text-muted-foreground">{workbook.views}</TableCell>
              <TableCell>
                <NavLink 
                  to={`/user/${workbook.author}`}
                  className="text-accent hover:underline"
                >
                  {workbook.author}
                </NavLink>
              </TableCell>
              <TableCell className="text-muted-foreground">{workbook.updateTime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
