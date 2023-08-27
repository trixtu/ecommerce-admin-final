"use client"
import { MainSidebar } from "./main-sidebar";
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();

  return (
    <ScrollArea>
      <div className="hidden min-h-screen lg:h-full px-4 pt-2 pb-4 bg-light lg:flex justify-between flex-col bg-white shadow-sm border w-[280px]">
        <div className="flex flex-col">
          <div className="space-y-3">
            <div className="flex items-center pl-1 gap-4">
              <span className="bg-gray-900 border border-gray-600 rounded-sm p-2 w-full shadow-lg">
                <Image src="/images/trixtu.png" alt="logo" width={100} height={30} />
              </span>
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

export default Sidebar