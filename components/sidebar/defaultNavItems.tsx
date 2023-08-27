"use client"
import React from "react";
import {
    CalendarIcon,
    FolderIcon,
    HomeIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import { SubmenuItems } from "@/types/sidebar";
import { useParams, usePathname } from "next/navigation";
import classNames from "classnames";
import Link from "next/link";
import { cn } from "@/lib/utils";
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
}

export function NavItemDefault({
    params,
    className,
    collapsed,
}: Props) {
    const pathname = usePathname();

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
            active: pathname === `/${params}/billboards`
        },
        {
            label: "Projects",
            href: "/projects",
            icon: <FolderIcon className="w-6 h-6" />,
            active: pathname === `/${params}ff`
        },
        {
            label: "Calendar",
            href: "/calendar",
            icon: <CalendarIcon className="w-6 h-6" />,
            active: pathname === `/${params}df`
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
                                'text-indigo-100 hover:bg-indigo-900 flex': true, //colors
                                'transition-colors duration-300': true, //animation
                                'rounded-md p-2 mx-3 gap-4 ': !collapsed,
                                'rounded-full p-2 mx-3 w-10 h-10': collapsed,
                                'bg-indigo-900': item.active
                            })}
                        >
                            <Link href={item.href} className={cn(
                                "flex gap-2"
                            )}>
                                {item.icon} <span>{!collapsed && item.label}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    )
}

export default NavItemDefault