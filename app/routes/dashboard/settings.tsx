import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return {
    title: "Settings | Linker",
  };
};

export default function Settings() {
  return (
    <div>
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <Link
            to="/dashboard"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            Back
          </Link>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  <HomeIcon
                    className="h-5 w-5 flex-shrink-0 text-gray-400"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  Settings
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Settings
          </h2>
        </div>
      </div>
    </div>
  );
}
