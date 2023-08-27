"use client"
import Link from "next/link";
import classNames from "classnames";
import { useMemo, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Home } from 'lucide-react';
import { MainNav } from "./main-nav";
import { MainSidebar } from "./main-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image";

export default function Sidebar() {

  return (
    <ScrollArea>
      <div className="hidden min-h-screen lg:h-full px-4 pt-8 pb-4 bg-light lg:flex justify-between flex-col bg-white shadow-sm border">
        <div className="flex flex-col">
          <div className="space-y-3">
            <div className="flex items-center pl-1 gap-4">
              <span className="bg-gray-900 border border-gray-600 rounded-sm p-2 w-full shadow-lg">
                <Image src="/images/trixtu.png" alt="trixtu" width={100} height={30} />
              </span>
            </div>
            <div className="flex items-center">
              <h2 className="text-xl font-bold">Dashboard</h2>
            </div>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center py-4">
                <button
                  type="submit"
                  className="p-2 focus:outline-none focus:ring"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </span>
              <input
                type="search"
                name="Search"
                placeholder="Search..."
                className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none"
              />
            </div>
            <div className="flex-1">
              <MainSidebar />
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}