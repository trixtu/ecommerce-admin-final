import { NavItems } from "@/types/sidebar";
import { Home } from 'lucide-react';

export const sideMenu: NavItems[] = [
  {
    label: "Master Data",
    icon: undefined,
    link: "javascript:;",
    isParent: false,
  },
  {
    label: "Master Korcam",
    icon: <Home className="w-4 h-4" />,
    link: "/dashboard/master-korcam",
    isParent: false,
  },
  {
    label: "Master Kordes",
    icon: <Home className="w-4 h-4" />,
    link: "/dashboard/master-kordes",
    isParent: false,
  },
  {
    label: "Master Korlap",
    icon: <Home className="w-4 h-4" />,
    link: "/dashboard/master-korlap",
    isParent: false,
  },
  {
    label: "Master Pemilih",
    icon: <Home className="w-4 h-4" />,
    link: "/dashboard/master-pemilih",
    isParent: false,
  },
  {
    label: "Settings",
    icon: <Home className="w-4 h-4" />,
    link: "/settings",
    isParent: true,
    subMenu: [
      {
        label: "Profile",
        link: "/settings/profile",
      },
      {
        label: "Preferences",
        link: "/settings/preferences",
      },
    ],
  },
]