import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Home, FileCode, Activity, Trophy, BookOpen, User, Users, MessageSquare, HelpCircle, Globe, LogIn, UserPlus } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <FileCode className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">CodeJudge</span>
            </div>
            
            <div className="hidden md:flex items-center gap-1">
              <NavLink 
                to="/" 
                end
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                <Home className="w-4 h-4 inline mr-1" />
                Home
              </NavLink>
              <NavLink 
                to="/problems" 
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                <FileCode className="w-4 h-4 inline mr-1" />
                Problem
              </NavLink>
              <NavLink 
                to="/status" 
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                <Activity className="w-4 h-4 inline mr-1" />
                Status
              </NavLink>
              <NavLink 
                to="/contests" 
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                <Trophy className="w-4 h-4 inline mr-1" />
                Contest
              </NavLink>
              <NavLink 
                to="/" 
                className="px-3 py-2 text-sm font-medium text-accent hover:text-accent transition-colors"
                activeClassName="text-accent"
              >
                <BookOpen className="w-4 h-4 inline mr-1" />
                Workbook
              </NavLink>
              <NavLink 
                to="/users" 
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                <User className="w-4 h-4 inline mr-1" />
                User
              </NavLink>
              <NavLink 
                to="/groups" 
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                <Users className="w-4 h-4 inline mr-1" />
                Group
              </NavLink>
              <NavLink 
                to="/forum" 
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                <MessageSquare className="w-4 h-4 inline mr-1" />
                Forum
              </NavLink>
              <NavLink 
                to="/help" 
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                activeClassName="text-foreground"
              >
                <HelpCircle className="w-4 h-4 inline mr-1" />
                Help
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <Globe className="w-4 h-4 mr-1" />
              Language
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <LogIn className="w-4 h-4 mr-1" />
              Login
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <UserPlus className="w-4 h-4 mr-1" />
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
