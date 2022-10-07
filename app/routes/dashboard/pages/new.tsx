import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { ActionFunction, MetaFunction, redirect } from "@remix-run/node";
import { Form, Link } from "@remix-run/react";
import invariant from "tiny-invariant";
import { db } from "~/db.server";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return {
    title: "Create a page | Linker",
  };
};

export const action: ActionFunction = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });

  if (!user) {
    return { redirect: "/login" };
  }

  // generate random alphabetic slug
  const slug = Math.random().toString(36).substring(2, 7);

  const formData = await request.formData();
  const title = formData.get("title");
  const bio = formData.get("bio");

  if (!title || !bio) invariant(false, "Title and bio are required");

  const page = await db.page.create({
    data: {
      title: title.toString(),
      bio: bio.toString(),
      slug,
      owner: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  return redirect(`/dashboard/pages/${page.slug}`);
};

export default function NewPage() {
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
                <Link
                  to="/dashboard/pages"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  Pages
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon
                  className="h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                <span
                  aria-current="page"
                  className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  New
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Create Page
          </h2>
        </div>
      </div>
      <Form method="post" className="space-y-8 divide-y divide-gray-200 mt-8">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Page Info
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                This information will be used when sharing the page.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* <div className="sm:col-span-4">
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700"
                >
                  URL
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="url"
                    id="url"
                    autoComplete="url"
                    className="block w-full min-w-0 flex-1 rounded-none rounded-l-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                  <span className="inline-flex items-center rounded-r-md border border-l-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">
                    .linker.io
                  </span>
                </div>
              </div> */}

              <div className="sm:col-span-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Page Title
                </label>
                <div className="mt-1">
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bio
                </label>
                <div className="mt-1">
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  What is this page about?
                </p>
              </div>

              {/* <div className="sm:col-span-6">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo
                </label>
                <div className="mt-1 flex items-center">
                  <span className="h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                    <svg
                      className="h-full w-full text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Change
                  </button>
                </div>
              </div> */}

              {/* <div className="sm:col-span-6">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cover photo
                </label>
                <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
