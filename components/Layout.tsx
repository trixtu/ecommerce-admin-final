"use client"

import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./sidebar/navbar";
import { ScrollArea } from "./ui/scroll-area";


const Layout = (
    { parameter, params }:
        { parameter: React.ReactNode, params: any }
) => {
    const [collapsed, setSidebarCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false)
    return (

        <div
            className={classNames({
                "grid bg-zinc-100 max-h-screen min-h-screen": true,
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
                <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
                {parameter}
            </div>
        </div>

    );
};
export default Layout;