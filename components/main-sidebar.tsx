"use client";

import Link from "next/link"
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils"
import { Home } from "lucide-react";
import { Settings } from 'lucide-react';
import { Stamp } from 'lucide-react';


export function MainSidebar({
    className,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    const pathname = usePathname();
    const params = useParams();


    const routes = [
        {
            href: `/${params.storeId}`,
            label: 'Home',
            icon: <Home size={20} />,
            active: pathname === `/${params.storeId}`,
        },
        {
            href: `/${params.storeId}/billboards`,
            label: 'Billboards',
            icon: <Stamp size={20} />,
            active: pathname === `/${params.storeId}/billboards`,

        },
        {
            href: `/${params.storeId}/categories`,
            label: 'Categories',
            icon: <Stamp size={20} />,
            active: pathname === `/${params.storeId}/categories`,
        },
        {
            href: `/${params.storeId}/subcategories`,
            label: "Subcategories",
            icon: <Stamp size={20} />,
            active: pathname === `/${params.storeId}/subcategories`
        },
        {
            href: `/${params.storeId}/sizes`,
            label: 'Sizes',
            icon: <Stamp size={20} />,
            active: pathname === `/${params.storeId}/sizes`,
        },
        {
            href: `/${params.storeId}/colors`,
            label: 'Colors',
            icon: <Stamp size={20} />,
            active: pathname === `/${params.storeId}/colors`,
        },
        {
            href: `/${params.storeId}/products`,
            label: 'Products',
            icon: <Stamp size={20} />,
            active: pathname === `/${params.storeId}/products`,
        },
        {
            href: `/${params.storeId}/orders`,
            label: 'Orders',
            icon: <Stamp size={20} />,
            active: pathname === `/${params.storeId}/orders`,
        },
        {
            href: `/${params.storeId}/settings`,
            label: 'Settings',
            icon: <Settings size={20} />,
            active: pathname === `/${params.storeId}/settings`,
        },
    ]

    return (
        <>
            <ul
                className={cn("pt-2 pb-4 space-y-1 text-base text-black", className)}
                {...props}
            >
                {routes.map((route) => (
                    <li key={route.href}>
                        <Link
                            href={route.href}
                            className={cn(
                                'flex items-center p-2 space-x-3 rounded-md hover:text-primary hover:bg-blue-100',
                                route.active ? 'text-white dark:text-white bg-blue-500 hover:bg-blue-500 hover:text-white' : 'text-slate-700'
                            )}
                        >
                            {route.icon}
                            <span className="mr-2">
                                {route?.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>


        </>
    )
};
