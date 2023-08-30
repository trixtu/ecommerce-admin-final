"use client"

import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./sidebar/navbar";
import { ScrollArea } from "./ui/scroll-area";
import { Store } from "@prisma/client";


const Layout = (
    { parameter, params, stores }:
        { parameter: React.ReactNode, params: any, stores: Record<string, any>[] }
) => {
    const [collapsed, setSidebarCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false)
    return (

        <div
            className={classNames({
                "grid bg-zinc-100 min-h-screen": true,
                "grid-cols-sidebar": !collapsed,
                "grid-cols-sidebar-collapsed": collapsed,
                "transition-[grid-template-columns] duration-300 ease-in-out": true,
            })}
        >
            <Sidebar
                params={params}
                collapsed={collapsed}
                setCollapsed={setSidebarCollapsed}
                shown={showSidebar}
                showSubMenu={showSubMenu}
                setShowSubMenu={setShowSubMenu}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            <div className="">
                <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} stores={stores} />
                {parameter}
            </div>
        </div>

    );
};
export default Layout;