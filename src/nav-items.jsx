import { Home, Info, HandHeart, Calendar, FileText } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Information",
    to: "/?tab=info",
    icon: <Info className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Take Action",
    to: "/?tab=action",
    icon: <HandHeart className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Events",
    to: "/?tab=events",
    icon: <Calendar className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Resources",
    to: "/?tab=resources",
    icon: <FileText className="h-4 w-4" />,
    page: <Index />,
  },
];
