import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { WorkbookSidebar } from "@/components/WorkbookSidebar";
import { WorkbookTable } from "@/components/WorkbookTable";
import { Pagination } from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Plus, Filter, RotateCcw } from "lucide-react";

type FilterType = "all" | "joined" | "created" | "followed";

const mockWorkbooks = [
  {
    id: 3284,
    title: "罗勇军《算法竞赛》题单",
    problemCount: 1112,
    active: 114,
    joined: 1309,
    views: 82440,
    author: "wzcjj",
    updateTime: "15 months ago",
  },
  {
    id: 12319,
    title: "B类比赛训练题选",
    problemCount: 259,
    active: 44,
    joined: 65,
    views: 2721,
    author: "GenbroRed",
    updateTime: "24 hr ago",
  },
  {
    id: 2856,
    title: "CSES Problem Set",
    problemCount: 400,
    active: 41,
    joined: 573,
    views: 47234,
    author: "Isun",
    updateTime: "4 months ago",
  },
  {
    id: 5268,
    title: "洛谷题单汇总",
    problemCount: 635,
    active: 36,
    joined: 263,
    views: 25045,
    author: "Chenzimo",
    updateTime: "16 months ago",
  },
  {
    id: 9243,
    title: "ZAFH ACM 训练题单",
    problemCount: 379,
    active: 26,
    joined: 49,
    views: 4658,
    author: "RYchan",
    updateTime: "55 days ago",
  },
  {
    id: 2842,
    title: "极算Codeforces难度集",
    problemCount: 10265,
    active: 24,
    joined: 936,
    views: 54929,
    author: "Sand_Tripper",
    updateTime: "4 months ago",
  },
  {
    id: 752,
    title: "[kuangbin]各种各样的题单(去重后)",
    problemCount: 739,
    active: 22,
    joined: 2875,
    views: 196196,
    author: "Von",
    updateTime: "19 months ago",
  },
  {
    id: 5300,
    title: "CodeForces DP(1300~1800)题单",
    problemCount: 317,
    active: 21,
    joined: 277,
    views: 8850,
    author: "ExtractStars",
    updateTime: "16 months ago",
  },
  {
    id: 45,
    title: "刘汝佳竞赛题单(算法竞赛入门经典 第二版 2014)",
    problemCount: 419,
    active: 20,
    joined: 1814,
    views: 160899,
    author: "Trote_w",
    updateTime: "19 months ago",
  },
  {
    id: 6284,
    title: "一个动态更新的综合综合题单（来自 Studying Father）",
    problemCount: 724,
    active: 20,
    joined: 31,
    views: 2930,
    author: "MournInk",
    updateTime: "13 months ago",
  },
  {
    id: 5302,
    title: "CodeForces 图论(1500~2300)题单",
    problemCount: 413,
    active: 18,
    joined: 124,
    views: 6987,
    author: "ExtractStars",
    updateTime: "16 months ago",
  },
  {
    id: 10266,
    title: "SMU25新生主题习题",
    problemCount: 109,
    active: 14,
    joined: 104,
    views: 3443,
    author: "IR101",
    updateTime: "54 days ago",
  },
  {
    id: 2855,
    title: "一个动态更新的综合综合题单",
    problemCount: 726,
    active: 13,
    joined: 235,
    views: 14487,
    author: "StudyingFather",
    updateTime: "3 years ago",
  },
  {
    id: 5651,
    title: "CodeForces DP(1800~2000)题单",
    problemCount: 218,
    active: 13,
    joined: 108,
    views: 3480,
    author: "ExtractStars",
    updateTime: "15 months ago",
  },
  {
    id: 2605,
    title: "Codeforces DP进阶分类专题",
    problemCount: 73,
    active: 12,
    joined: 877,
    views: 30626,
    author: "GDUT20ZYL",
    updateTime: "5 years ago",
  },
  {
    id: 5303,
    title: "CodeForces 数学(1300~1900)题单",
    problemCount: 764,
    active: 12,
    joined: 78,
    views: 6440,
    author: "ExtractStars",
    updateTime: "16 months ago",
  },
  {
    id: 187,
    title: "[kuangbin]带你飞1-23",
    problemCount: 357,
    active: 11,
    joined: 2529,
    views: 259121,
    author: "takanashirin",
    updateTime: "8 years ago",
  },
  {
    id: 4124,
    title: "板刷Educational Codeforces Round",
    problemCount: 1177,
    active: 11,
    joined: 25,
    views: 7661,
    author: "rabbitohh",
    updateTime: "3 months ago",
  },
  {
    id: 4196,
    title: "《深入浅出程序设计竞赛(基础篇)》(汪瑞泽领衔编著)",
    problemCount: 273,
    active: 10,
    joined: 248,
    views: 13682,
    author: "dganshin",
    updateTime: "20 months ago",
  },
  {
    id: 11871,
    title: "BCOI基础网校题组(初一使用)",
    problemCount: 272,
    active: 10,
    joined: 26,
    views: 945,
    author: "wfbczx",
    updateTime: "53 days ago",
  },
];

const Index = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        <WorkbookSidebar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
              
              <div className="flex items-center gap-2">
                <Button variant="secondary" size="sm">
                  <Filter className="w-4 h-4 mr-1" />
                  Filter
                </Button>
                <Button variant="secondary" size="sm">
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
                <Button variant="default" size="sm">
                  <Plus className="w-4 h-4 mr-1" />
                  Create
                </Button>
              </div>
            </div>

            <WorkbookTable workbooks={mockWorkbooks} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
