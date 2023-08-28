"use client"
import React from "react";
import {
    CalendarIcon,
    FolderIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import { SubmenuItems } from "@/types/sidebar";
import { useParams, usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Archive, FolderOpen, Palette, Ruler, Settings, Store } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
// define a NavItem prop
export type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
    active: boolean
    isParent?: boolean
    subMenu?: SubmenuItems[]
};

type Props = {
    params: string
    collapsed: boolean
    className: string
    showSubMenu: boolean;
    showSidebar: boolean
    setShowSubMenu(showSubMenu: boolean): void
    setShowSidebar(showSidebar: boolean): void
}

export function NavItemDefault({
    params,
    className,
    collapsed,
    showSubMenu,
    setShowSubMenu,
    setShowSidebar
}: Props) {
    const pathname = usePathname();
    const router = useRouter()

    const defaultNavItems: NavItem[] = [
        {
            label: "Dashboard",
            href: `/${params}`,
            icon: <HomeIcon className="w-6 h-6" />,
            active: pathname === `/${params}`,
        },
        {
            label: "Billboards",
            href: `/${params}/billboards`,
            icon: <UserGroupIcon className="w-6 h-6" />,
            subMenu: [
                {
                    label: "test",
                    link: "test",
                }
            ],
            active: pathname === `/${params}/billboards`
        },
        {
            label: "Categories",
            href: `/${params}/categories`,
            icon: <FolderIcon className="w-6 h-6" />,
            active: pathname === `/${params}/categories`,
        },
        {
            label: "Subcategories",
            href: `/${params}/subcategories`,
            icon: <FolderOpen className="w-6 h-6" />,
            active: pathname === `/${params}/subcategories`
        },
        {
            label: "Sizes",
            href: `/${params}/sizes`,
            icon: <Ruler className="w-6 h-6" />,
            active: pathname === `/${params}/sizes`
        },
        {
            label: "Colors",
            href: `/${params}/colors`,
            icon: <Palette className="w-6 h-6" />,
            active: pathname === `/${params}/colors`
        },
        {
            label: "Products",
            href: `/${params}/products`,
            icon: <Archive className="w-6 h-6" />,
            active: pathname === `/${params}/products`
        },
        {
            label: "Orders",
            href: `/${params}/orders`,
            icon: <Store className="w-6 h-6" />,
            active: pathname === `/${params}/orders`
        },
        {
            label: "Settings",
            href: `/${params}/settings`,
            icon: <Settings className="w-6 h-6" />,
            active: pathname === `/${params}/settings`
        },
    ];


    return (

        <nav className="flex-grow">
            <ul
                className={classNames({
                    'my-2 flex flex-col gap-2 items-stretch': true,
                })}
            >
                {defaultNavItems.map((item, index) => {
                    return (
                        <li
                            key={index}
                            className={classNames({
                                'text-indigo-100 hover:bg-indigo-900 relative flex': true, //colors
                                'transition-colors duration-300': true, //animation
                                'rounded-md p-2 mx-3 gap-4 ': !collapsed,
                                'rounded-full p-2 mx-3 w-10 h-10': collapsed,
                                'bg-indigo-900': item.active,
                            })}
                        >

                            <button onClick={
                                () => {
                                    router.push(`${item.href}`),
                                        setShowSidebar(false)
                                }} className={classNames({
                                    "flex gap-2": true,
                                    "w-full": !collapsed
                                })}>
                                {item.icon} <span>{!collapsed && item.label}</span>
                            </button>


                        </li>
                    );
                })}
            </ul>
        </nav>

    )
}

export default NavItemDefault