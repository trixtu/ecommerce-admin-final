"use client"

import classNames from "classnames";
import React, { PropsWithChildren, useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./sidebar/navbar";


const Layout = (
    { parameter, params }:
        { parameter: React.ReactNode, params: any }
) => {
    const [collapsed, setSidebarCollapsed] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
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
            />
            <div className="">
                <Navbar onMenuButtonClick={() => setShowSidebar((prev) => !prev)} />
                {parameter}
            </div>
        </div>
    );
};
export default Layout;