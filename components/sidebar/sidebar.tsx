import React from 'react';
import classNames from 'classnames'
import Image from 'next/image';
import NavItemDefault, { NavItem } from './defaultNavItems';
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';

// add NavItem prop to component prop
type Props = {
    collapsed: boolean;
    navItems?: NavItem[];
    setCollapsed(collapsed: boolean): void;
    shown: boolean;
    params: any
    showSubMenu: boolean;
    showSidebar: boolean
    setShowSubMenu(showSubMenu: boolean): void
    setShowSidebar(showSidebar: boolean): void
};
const Sidebar = ({
    params,
    collapsed,
    shown,
    setCollapsed,
    setShowSubMenu,
    showSubMenu,
    setShowSidebar,
    showSidebar
}: Props) => {
    const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
    return (

        <div
            className={classNames({
                'bg-indigo-700 text-zinc-50 fixed md:static md:translate-x-0 z-20': true,
                'transition-all duration-300 ease-in-out': true,
                'w-[300px]': !collapsed,
                'w-16': collapsed,
                '-translate-x-full': !shown,
            })}
        >
            <div
                className={classNames({
                    'flex flex-col justify-between h-screen md:h-full sticky inset-0': true,
                })}
            >
                {/* logo and collapse button */}
                <div
                    className={classNames({
                        'flex items-center border-b border-b-indigo-800 transition-none': true,
                        'p-4 justify-between': !collapsed,
                        'py-4 justify-center': collapsed,
                    })}
                >
                    {!collapsed && <span className="whitespace-nowrap">
                        <Image src="/images/trixtu.png" alt="logo" width={100} height={30} />
                    </span>}
                    <button
                        className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full"
                        onClick={() => setCollapsed(!collapsed)}
                    >
                        <Icon className="w-5 h-5" />
                    </button>
                </div>
                <NavItemDefault
                    collapsed={collapsed}
                    className=''
                    params={params}
                    setShowSubMenu={setShowSubMenu}
                    showSubMenu={showSubMenu}
                    setShowSidebar={setShowSidebar}
                    showSidebar={showSidebar}
                />
                {/* <nav className="flex-grow">
                    <ul
                        className={classNames({
                            'my-2 flex flex-col gap-2 items-stretch': true,
                        })}
                    >
                        {navItems.map((item, index) => {
                            return (
                                <li
                                    key={index}
                                    className={classNames({
                                        'text-indigo-100 hover:bg-indigo-900 flex': true, //colors
                                        'transition-colors duration-300': true, //animation
                                        'rounded-md p-2 mx-3 gap-4 ': !collapsed,
                                        'rounded-full p-2 mx-3 w-10 h-10': collapsed,
                                    })}
                                >
                                    <Link href={item.href} className="flex gap-2">
                                        {item.icon} <span>{!collapsed && item.label}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav> */}
                {/* <div
                    className={classNames({
                        'grid place-content-stretch p-4 ': true,
                    })}
                >
                    <div className="flex gap-4 items-center h-11 overflow-hidden">
                        
                        <Image
                            src={'/images'}
                            height={36}
                            width={36}
                            alt="profile image"
                            className="rounded-full"
                        />
                        {!collapsed && (
                            <div className="flex flex-col ">
                                <span className="text-indigo-50 my-0">Tom Cook</span>
                                <Link href="/" className="text-indigo-200 text-sm">
                                    View Profile
                                </Link>
                            </div>
                        )}
                    </div>
                </div> */}
            </div>
        </div>

    );
};
export default Sidebar;