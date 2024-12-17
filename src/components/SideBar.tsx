import "../css/sideBar.css";
import { FileText, Settings2 } from "lucide-react";

interface SidebarProps {
  goToPage: (page: string) => void;
  page: string;
}
export default function Sidebar({ goToPage, page }: SidebarProps) {
  return (
    <nav className="sidebar">
      <button
        onClick={() => goToPage("content")}
        data-selected={page === "content"}
      >
        <FileText />
        Content
      </button>
      <button
        onClick={() => goToPage("customize")}
        data-selected={page === "customize"}
      >
        <Settings2 />
        Customize
      </button>
    </nav>
  );
}
