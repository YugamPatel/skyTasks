import React from "react";
import { Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode } from "@/state";

const Navbar = () => {
  const dispatch = useAppDispatch();

  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  return (
    <div className="dark:bg-dark-bg flex w-full items-center justify-between bg-white px-4 py-3">
      {/* Search */}
      <div className="flex items-center gap-8">
        <div className="relative flex h-min w-[200px]">
          <Search className="absolute top-1/2 left-[4px] mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white" />
          <input
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
            type="search"
            placeholder="Search..."
          />
        </div>
      </div>

      {/* icons */}
      <div className="flex items-center">
        <button
          className="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 cursor-pointer dark:text-white"></Sun>
          ) : (
            <Moon className="h-6 w-6 cursor-pointer dark:text-white"></Moon>
          )}
        </button>
        <Link
          href={"/settings"}
          className="h-min w-min rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>
        <div className="mr-5 ml-2 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default Navbar;
