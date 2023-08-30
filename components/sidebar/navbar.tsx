import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { UserButton, auth } from "@clerk/nextjs";
import StoreSwitcher from "../store-switcher";
import { Store } from "@prisma/client";
import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";
type Props = {
    /**
     * Allows the parent component to modify the state when the
     * menu button is clicked.
     */
    onMenuButtonClick(): void;
    stores: Record<string, any>[]

};
const Navbar = (props: Props) => {

    return (
        <nav
            className={classNames({
                "bg-white text-zinc-500": true, // colors
                "flex items-center": true, // layout
                "w-screen md:w-full sticky z-10 px-8 shadow-sm h-[73px] top-0": true, //positioning & styling
            })}
        >
            <div className="font-bold text-lg">


            </div>
            <div className="flex-grow">
                <div className="flex flex-col">
                    <h5 className="font-semibold">Store Switcher</h5>
                    <StoreSwitcher items={props.stores} />
                </div>

            </div>
            <div className="flex gap-2 items-center justify-center">
                <UserButton afterSignOutUrl="/" />
                <button className="md:hidden bg-indigo-600 text-white rounded-sm p-1" onClick={props.onMenuButtonClick}>
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
