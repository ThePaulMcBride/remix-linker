var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-JPOXUEC7.css";

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    className: "h-full bg-gray-50",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        className: "h-full",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 30,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 32,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/api/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action
});

// app/services/auth.server.ts
var import_remix_auth = require("remix-auth");

// app/services/session.server.ts
var import_node = require("@remix-run/node");
if (!process.env.SESSION_SECRET)
  throw new Error("Please set the SESSION_SECRET environment variable");
var sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "_session",
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// app/services/auth.server.ts
var import_remix_auth_form = require("remix-auth-form"), import_bcryptjs2 = require("bcryptjs"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/services/user.server.ts
var import_bcryptjs = require("bcryptjs");

// app/services/stripe.server.ts
var import_stripe = __toESM(require("stripe"));
if (!process.env.STRIPE_SECRET_KEY)
  throw new Error("STRIPE_SECRET_KEY is not defined");
var stripe = new import_stripe.default(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01"
});

// app/services/user.server.ts
var createUser = async (email, password) => {
  let hashedPassword = await (0, import_bcryptjs.hash)(password, 10);
  if (await db.user.findFirst({
    where: {
      email
    }
  }))
    throw new Error("A user with that email address already exists");
  try {
    let customer = await stripe.customers.create({ email }), user = await db.user.create({
      data: {
        email,
        hashed_password: hashedPassword,
        stripe_customer_id: customer.id
      }
    });
    return {
      id: user.id,
      email: user.email
    };
  } catch {
    throw new Error(
      "There was an error creating your account, please try again"
    );
  }
};

// app/services/auth.server.ts
var authenticator = new import_remix_auth.Authenticator(sessionStorage, {
  throwOnError: !0
});
authenticator.use(
  new import_remix_auth_form.FormStrategy(async ({ form }) => {
    let emailInput = form.get("email"), passwordInput = form.get("password"), actionInput = form.get("action");
    (0, import_tiny_invariant.default)(actionInput, "Action is required"), (0, import_tiny_invariant.default)(passwordInput, "Password is required"), (0, import_tiny_invariant.default)(emailInput, "Email is required");
    let action5 = actionInput.toString(), email = emailInput.toString(), password = passwordInput.toString();
    if (action5 === "signup")
      return createUser(email, password);
    if (action5 === "login") {
      let user = await db.user.findFirst({
        where: {
          email
        }
      });
      (0, import_tiny_invariant.default)(user, "Invalid email or password");
      let passwordsMatch = await (0, import_bcryptjs2.compare)(password, user.hashed_password);
      return (0, import_tiny_invariant.default)(passwordsMatch, "Invalid email or password"), {
        id: user.id,
        email: user.email
      };
    }
    throw new Error("Invalid action");
  }),
  "user-pass"
);

// app/routes/api/logout.ts
var action = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" });
};

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  loader: () => loader
});
var import_react3 = require("@remix-run/react"), import_react4 = require("react"), import_react5 = require("@headlessui/react"), import_outline = require("@heroicons/react/24/outline");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Pages", href: "/dashboard/pages" },
  { name: "Settings", href: "/dashboard/settings" }
], userNavigation = [
  { name: "Your Profile", href: "/dashboard/profile" },
  { name: "Settings", href: "/dashboard/settings" }
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
var loader = async ({ request }) => ({
  user: await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  })
});
function Dashboard() {
  let { user } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "min-h-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Disclosure, {
          as: "nav",
          className: "bg-white shadow-sm",
          children: ({ open }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex h-16 justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex flex-shrink-0 items-center",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              className: "block h-8 w-auto lg:hidden",
                              src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                              alt: "Your Company"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard.tsx",
                              lineNumber: 45,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              className: "hidden h-8 w-auto lg:block",
                              src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
                              alt: "Your Company"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard.tsx",
                              lineNumber: 50,
                              columnNumber: 23
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/dashboard.tsx",
                          lineNumber: 44,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8",
                          children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.NavLink, {
                            to: item.href,
                            end: item.href === "/dashboard",
                            className: ({ isActive }) => classNames(
                              isActive ? "border-indigo-500 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                              "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            ),
                            children: item.name
                          }, item.name, !1, {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 58,
                            columnNumber: 25
                          }, this))
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard.tsx",
                          lineNumber: 56,
                          columnNumber: 21
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 43,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "hidden sm:ml-6 sm:flex sm:items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          type: "button",
                          className: "rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                              className: "sr-only",
                              children: "View notifications"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard.tsx",
                              lineNumber: 81,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.BellIcon, {
                              className: "h-6 w-6",
                              "aria-hidden": "true"
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard.tsx",
                              lineNumber: 82,
                              columnNumber: 23
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/dashboard.tsx",
                          lineNumber: 77,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Menu, {
                          as: "div",
                          className: "relative ml-3",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Menu.Button, {
                                className: "flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "sr-only",
                                    children: "Open user menu"
                                  }, void 0, !1, {
                                    fileName: "app/routes/dashboard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 27
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                                    className: "h-8 w-8 rounded-full",
                                    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                                    alt: ""
                                  }, void 0, !1, {
                                    fileName: "app/routes/dashboard.tsx",
                                    lineNumber: 90,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/dashboard.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard.tsx",
                              lineNumber: 87,
                              columnNumber: 23
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Transition, {
                              as: import_react4.Fragment,
                              enter: "transition ease-out duration-200",
                              enterFrom: "transform opacity-0 scale-95",
                              enterTo: "transform opacity-100 scale-100",
                              leave: "transition ease-in duration-75",
                              leaveFrom: "transform opacity-100 scale-100",
                              leaveTo: "transform opacity-0 scale-95",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Menu.Items, {
                                className: "absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                                children: [
                                  userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Menu.Item, {
                                    children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Link, {
                                      to: item.href,
                                      className: classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      ),
                                      children: item.name
                                    }, void 0, !1, {
                                      fileName: "app/routes/dashboard.tsx",
                                      lineNumber: 110,
                                      columnNumber: 33
                                    }, this)
                                  }, item.name, !1, {
                                    fileName: "app/routes/dashboard.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                  }, this)),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Menu.Item, {
                                    children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Form, {
                                      method: "post",
                                      action: "/api/logout",
                                      className: "w-full",
                                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                        className: classNames(
                                          active ? "bg-gray-100" : "",
                                          "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                        ),
                                        children: "Logout"
                                      }, void 0, !1, {
                                        fileName: "app/routes/dashboard.tsx",
                                        lineNumber: 129,
                                        columnNumber: 33
                                      }, this)
                                    }, void 0, !1, {
                                      fileName: "app/routes/dashboard.tsx",
                                      lineNumber: 124,
                                      columnNumber: 31
                                    }, this)
                                  }, "sign-out", !1, {
                                    fileName: "app/routes/dashboard.tsx",
                                    lineNumber: 122,
                                    columnNumber: 27
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/dashboard.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard.tsx",
                              lineNumber: 97,
                              columnNumber: 23
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/dashboard.tsx",
                          lineNumber: 86,
                          columnNumber: 21
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 76,
                      columnNumber: 19
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "-mr-2 flex items-center sm:hidden",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Disclosure.Button, {
                        className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "sr-only",
                            children: "Open main menu"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 147,
                            columnNumber: 23
                          }, this),
                          open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.XMarkIcon, {
                            className: "block h-6 w-6",
                            "aria-hidden": "true"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 149,
                            columnNumber: 25
                          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.Bars3Icon, {
                            className: "block h-6 w-6",
                            "aria-hidden": "true"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 154,
                            columnNumber: 25
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/dashboard.tsx",
                        lineNumber: 146,
                        columnNumber: 21
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 144,
                      columnNumber: 19
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/dashboard.tsx",
                  lineNumber: 42,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 41,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Disclosure.Panel, {
                className: "sm:hidden",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "space-y-1 pt-2 pb-3",
                    children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Disclosure.Button, {
                      as: import_react3.NavLink,
                      to: item.href,
                      className: ({ isActive }) => classNames(
                        isActive ? "bg-indigo-50 border-indigo-500 text-indigo-700" : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800",
                        "block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                      ),
                      children: item.name
                    }, item.name, !1, {
                      fileName: "app/routes/dashboard.tsx",
                      lineNumber: 167,
                      columnNumber: 21
                    }, this))
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 165,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "border-t border-gray-200 pt-4 pb-3",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex items-center px-4",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "flex-shrink-0",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                              className: "h-10 w-10 rounded-full",
                              src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                              alt: ""
                            }, void 0, !1, {
                              fileName: "app/routes/dashboard.tsx",
                              lineNumber: 187,
                              columnNumber: 23
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 186,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "ml-3",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "text-base font-medium text-gray-800",
                                children: user.name
                              }, void 0, !1, {
                                fileName: "app/routes/dashboard.tsx",
                                lineNumber: 194,
                                columnNumber: 23
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "text-sm font-medium text-gray-500",
                                children: user.email
                              }, void 0, !1, {
                                fileName: "app/routes/dashboard.tsx",
                                lineNumber: 197,
                                columnNumber: 23
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 193,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            type: "button",
                            className: "ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "sr-only",
                                children: "View notifications"
                              }, void 0, !1, {
                                fileName: "app/routes/dashboard.tsx",
                                lineNumber: 205,
                                columnNumber: 23
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.BellIcon, {
                                className: "h-6 w-6",
                                "aria-hidden": "true"
                              }, void 0, !1, {
                                fileName: "app/routes/dashboard.tsx",
                                lineNumber: 206,
                                columnNumber: 23
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/dashboard.tsx",
                            lineNumber: 201,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/dashboard.tsx",
                        lineNumber: 185,
                        columnNumber: 19
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "mt-3 space-y-1",
                        children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Disclosure.Button, {
                          as: "a",
                          href: item.href,
                          className: "block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800",
                          children: item.name
                        }, item.name, !1, {
                          fileName: "app/routes/dashboard.tsx",
                          lineNumber: 211,
                          columnNumber: 23
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard.tsx",
                        lineNumber: 209,
                        columnNumber: 19
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard.tsx",
                    lineNumber: 184,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 164,
                columnNumber: 15
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-10",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
                fileName: "app/routes/dashboard.tsx",
                lineNumber: 230,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/dashboard.tsx",
              lineNumber: 229,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard.tsx",
            lineNumber: 228,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard.tsx",
          lineNumber: 227,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/pages/index.tsx
var pages_exports = {};
__export(pages_exports, {
  default: () => Pages,
  meta: () => meta2
});
var import_outline2 = require("@heroicons/react/24/outline"), import_react6 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Pages | Linker"
});
function Pages() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            className: "sm:hidden",
            "aria-label": "Back",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
              to: "/dashboard",
              className: "flex items-center text-sm font-medium text-gray-500 hover:text-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline2.ChevronLeftIcon, {
                  className: "-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400",
                  "aria-hidden": "true"
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/pages/index.tsx",
                  lineNumber: 24,
                  columnNumber: 13
                }, this),
                "Back"
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/pages/index.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/pages/index.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            className: "hidden sm:flex",
            "aria-label": "Breadcrumb",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
              className: "flex items-center space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
                      to: "/dashboard",
                      className: "text-sm font-medium text-gray-500 hover:text-gray-700",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline2.HomeIcon, {
                        className: "h-5 w-5 flex-shrink-0 text-gray-400",
                        "aria-hidden": "true"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/pages/index.tsx",
                        lineNumber: 39,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/pages/index.tsx",
                      lineNumber: 35,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/pages/index.tsx",
                    lineNumber: 34,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/pages/index.tsx",
                  lineNumber: 33,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline2.ChevronRightIcon, {
                        className: "h-5 w-5 flex-shrink-0 text-gray-400",
                        "aria-hidden": "true"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/pages/index.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",
                        children: "Pages"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/pages/index.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/pages/index.tsx",
                    lineNumber: 47,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/pages/index.tsx",
                  lineNumber: 46,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/pages/index.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/pages/index.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/pages/index.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-2 md:flex md:items-center md:justify-between",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "min-w-0 flex-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",
              children: "Pages"
            }, void 0, !1, {
              fileName: "app/routes/dashboard/pages/index.tsx",
              lineNumber: 62,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/pages/index.tsx",
            lineNumber: 61,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-4 flex flex-shrink-0 md:mt-0 md:ml-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Link, {
              to: "/dashboard/pages/new",
              className: "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
              children: "Create new"
            }, void 0, !1, {
              fileName: "app/routes/dashboard/pages/index.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/pages/index.tsx",
            lineNumber: 66,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/pages/index.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/pages/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/pages/new.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action2,
  default: () => NewPage,
  meta: () => meta3
});
var import_outline3 = require("@heroicons/react/24/outline"), import_node2 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta3 = () => ({
  title: "Create a page | Linker"
}), action2 = async ({ request }) => {
  let user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  if (!user)
    return { redirect: "/login" };
  let slug = Math.random().toString(36).substring(2, 7), formData = await request.formData(), title = formData.get("title"), bio = formData.get("bio");
  (!title || !bio) && (0, import_tiny_invariant2.default)(!1, "Title and bio are required");
  let page = await db.page.create({
    data: {
      title: title.toString(),
      bio: bio.toString(),
      slug,
      owner: {
        connect: {
          id: user.id
        }
      }
    }
  });
  return (0, import_node2.redirect)(`/dashboard/pages/${page.slug}`);
};
function NewPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            className: "sm:hidden",
            "aria-label": "Back",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
              to: "/dashboard",
              className: "flex items-center text-sm font-medium text-gray-500 hover:text-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline3.ChevronLeftIcon, {
                  className: "-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400",
                  "aria-hidden": "true"
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/pages/new.tsx",
                  lineNumber: 61,
                  columnNumber: 13
                }, this),
                "Back"
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/pages/new.tsx",
              lineNumber: 57,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/pages/new.tsx",
            lineNumber: 56,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            className: "hidden sm:flex",
            "aria-label": "Breadcrumb",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
              className: "flex items-center space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
                      to: "/dashboard",
                      className: "text-sm font-medium text-gray-500 hover:text-gray-700",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline3.HomeIcon, {
                        className: "h-5 w-5 flex-shrink-0 text-gray-400",
                        "aria-hidden": "true"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/pages/new.tsx",
                        lineNumber: 76,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/pages/new.tsx",
                      lineNumber: 72,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/pages/new.tsx",
                    lineNumber: 71,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/pages/new.tsx",
                  lineNumber: 70,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline3.ChevronRightIcon, {
                        className: "h-5 w-5 flex-shrink-0 text-gray-400",
                        "aria-hidden": "true"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/pages/new.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Link, {
                        to: "/dashboard/pages",
                        className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",
                        children: "Pages"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/pages/new.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/pages/new.tsx",
                    lineNumber: 84,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/pages/new.tsx",
                  lineNumber: 83,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline3.ChevronRightIcon, {
                        className: "h-5 w-5 flex-shrink-0 text-gray-400",
                        "aria-hidden": "true"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/pages/new.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        "aria-current": "page",
                        className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",
                        children: "New"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/pages/new.tsx",
                        lineNumber: 103,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/pages/new.tsx",
                    lineNumber: 98,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/pages/new.tsx",
                  lineNumber: 97,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/pages/new.tsx",
              lineNumber: 69,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/pages/new.tsx",
            lineNumber: 68,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/pages/new.tsx",
        lineNumber: 55,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-2 md:flex md:items-center md:justify-between",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "min-w-0 flex-1",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",
            children: "Create Page"
          }, void 0, !1, {
            fileName: "app/routes/dashboard/pages/new.tsx",
            lineNumber: 116,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/pages/new.tsx",
          lineNumber: 115,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/pages/new.tsx",
        lineNumber: 114,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Form, {
        method: "post",
        className: "space-y-8 divide-y divide-gray-200 mt-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "space-y-8 divide-y divide-gray-200",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                      className: "text-lg font-medium leading-6 text-gray-900",
                      children: "Page Info"
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/pages/new.tsx",
                      lineNumber: 125,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "mt-1 text-sm text-gray-500",
                      children: "This information will be used when sharing the page."
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/pages/new.tsx",
                      lineNumber: 128,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/dashboard/pages/new.tsx",
                  lineNumber: 124,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "sm:col-span-4",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          htmlFor: "title",
                          className: "block text-sm font-medium text-gray-700",
                          children: "Page Title"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/pages/new.tsx",
                          lineNumber: 156,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "mt-1",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                            id: "title",
                            name: "title",
                            type: "text",
                            className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/pages/new.tsx",
                            lineNumber: 163,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/pages/new.tsx",
                          lineNumber: 162,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/pages/new.tsx",
                      lineNumber: 155,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "sm:col-span-6",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          htmlFor: "bio",
                          className: "block text-sm font-medium text-gray-700",
                          children: "Bio"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/pages/new.tsx",
                          lineNumber: 173,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "mt-1",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                            id: "bio",
                            name: "bio",
                            rows: 3,
                            className: "block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
                            defaultValue: ""
                          }, void 0, !1, {
                            fileName: "app/routes/dashboard/pages/new.tsx",
                            lineNumber: 180,
                            columnNumber: 19
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/pages/new.tsx",
                          lineNumber: 179,
                          columnNumber: 17
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "mt-2 text-sm text-gray-500",
                          children: "What is this page about?"
                        }, void 0, !1, {
                          fileName: "app/routes/dashboard/pages/new.tsx",
                          lineNumber: 188,
                          columnNumber: 17
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/dashboard/pages/new.tsx",
                      lineNumber: 172,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/dashboard/pages/new.tsx",
                  lineNumber: 133,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/pages/new.tsx",
              lineNumber: 123,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/pages/new.tsx",
            lineNumber: 122,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "pt-5",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex justify-end",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "button",
                  className: "rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                  children: "Cancel"
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/pages/new.tsx",
                  lineNumber: 269,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  className: "ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                  children: "Save"
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/pages/new.tsx",
                  lineNumber: 275,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/pages/new.tsx",
              lineNumber: 268,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/pages/new.tsx",
            lineNumber: 267,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/pages/new.tsx",
        lineNumber: 121,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/pages/new.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/settings.tsx
var settings_exports = {};
__export(settings_exports, {
  default: () => Settings,
  meta: () => meta4
});
var import_outline4 = require("@heroicons/react/24/outline"), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta4 = () => ({
  title: "Settings | Linker"
});
function Settings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            className: "sm:hidden",
            "aria-label": "Back",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
              to: "/dashboard",
              className: "flex items-center text-sm font-medium text-gray-500 hover:text-gray-700",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline4.ChevronLeftIcon, {
                  className: "-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400",
                  "aria-hidden": "true"
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/settings.tsx",
                  lineNumber: 24,
                  columnNumber: 13
                }, this),
                "Back"
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/settings.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/settings.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
            className: "hidden sm:flex",
            "aria-label": "Breadcrumb",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
              className: "flex items-center space-x-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react8.Link, {
                      to: "/dashboard",
                      className: "text-sm font-medium text-gray-500 hover:text-gray-700",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline4.HomeIcon, {
                        className: "h-5 w-5 flex-shrink-0 text-gray-400",
                        "aria-hidden": "true"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/settings.tsx",
                        lineNumber: 39,
                        columnNumber: 19
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/dashboard/settings.tsx",
                      lineNumber: 35,
                      columnNumber: 17
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/dashboard/settings.tsx",
                    lineNumber: 34,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/settings.tsx",
                  lineNumber: 33,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline4.ChevronRightIcon, {
                        className: "h-5 w-5 flex-shrink-0 text-gray-400",
                        "aria-hidden": "true"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/settings.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700",
                        children: "Settings"
                      }, void 0, !1, {
                        fileName: "app/routes/dashboard/settings.tsx",
                        lineNumber: 52,
                        columnNumber: 17
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/dashboard/settings.tsx",
                    lineNumber: 47,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/dashboard/settings.tsx",
                  lineNumber: 46,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/dashboard/settings.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/settings.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/settings.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-2 md:flex md:items-center md:justify-between",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "min-w-0 flex-1",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",
            children: "Settings"
          }, void 0, !1, {
            fileName: "app/routes/dashboard/settings.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/dashboard/settings.tsx",
          lineNumber: 61,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/dashboard/settings.tsx",
        lineNumber: 60,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/settings.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard/index.tsx
var dashboard_exports2 = {};
__export(dashboard_exports2, {
  default: () => Dashboard2,
  meta: () => meta5
});
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), meta5 = () => ({
  title: "Dashboard"
});
function Dashboard2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "md:flex md:items-center md:justify-between mb-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "min-w-0 flex-1",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight",
              children: "Pages"
            }, void 0, !1, {
              fileName: "app/routes/dashboard/index.tsx",
              lineNumber: 15,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 14,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-4 flex md:mt-0 md:ml-4",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Link, {
              to: "/dashboard/pages/new",
              className: "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
              children: "Create"
            }, void 0, !1, {
              fileName: "app/routes/dashboard/index.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/index.tsx",
        lineNumber: 13,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Link, {
        to: "/dashboard/pages/new",
        className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
            className: "mx-auto h-12 w-12 text-gray-400",
            xmlns: "http://www.w3.org/2000/svg",
            stroke: "currentColor",
            fill: "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 1,
              d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            }, void 0, !1, {
              fileName: "app/routes/dashboard/index.tsx",
              lineNumber: 41,
              columnNumber: 11
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 33,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
            className: "mt-2 block text-sm font-medium text-gray-900",
            children: "Create a new page"
          }, void 0, !1, {
            fileName: "app/routes/dashboard/index.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/dashboard/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/dashboard/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  action: () => action3,
  default: () => SignUp,
  loader: () => loader2,
  meta: () => meta6
});
var import_node3 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_remix_auth2 = require("remix-auth");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => await authenticator.isAuthenticated(request, {
  successRedirect: "/dashboard"
}), action3 = async ({ request }) => {
  if (request.method !== "POST")
    throw new import_node3.Response("Method Not Allowed", { status: 405 });
  try {
    return await authenticator.authenticate("user-pass", request, {
      successRedirect: "/dashboard"
    });
  } catch (error) {
    return error instanceof import_node3.Response ? error : error instanceof import_remix_auth2.AuthorizationError ? (0, import_node3.json)({ error: error.message }, { status: 401 }) : error;
  }
}, meta6 = () => ({
  title: "Sign Up"
});
function SignUp() {
  let data = (0, import_react10.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "sm:mx-auto sm:w-full sm:max-w-md",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            className: "mx-auto h-12 w-auto",
            src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
            alt: "Your Company"
          }, void 0, !1, {
            fileName: "app/routes/sign-up.tsx",
            lineNumber: 46,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "mt-6 text-center text-3xl font-bold tracking-tight text-gray-900",
            children: "Sign up for an account"
          }, void 0, !1, {
            fileName: "app/routes/sign-up.tsx",
            lineNumber: 51,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "mt-2 text-center text-sm text-gray-600",
            children: [
              "Or",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
                to: "/login",
                className: "font-medium text-indigo-600 hover:text-indigo-500",
                children: "sign in to an existing account"
              }, void 0, !1, {
                fileName: "app/routes/sign-up.tsx",
                lineNumber: 56,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/sign-up.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 45,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
          children: [
            (data == null ? void 0 : data.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "rounded-md bg-red-50 p-4 mb-6",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "ml-3",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "text-sm font-medium text-red-800",
                  children: data.error
                }, void 0, !1, {
                  fileName: "app/routes/sign-up.tsx",
                  lineNumber: 70,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/sign-up.tsx",
                lineNumber: 69,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/sign-up.tsx",
              lineNumber: 68,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Form, {
              className: "space-y-6",
              method: "post",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "email",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Email address"
                    }, void 0, !1, {
                      fileName: "app/routes/sign-up.tsx",
                      lineNumber: 79,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-1",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        id: "email",
                        name: "email",
                        type: "email",
                        autoComplete: "email",
                        required: !0,
                        className: "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                        fileName: "app/routes/sign-up.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/sign-up.tsx",
                      lineNumber: 85,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/sign-up.tsx",
                  lineNumber: 78,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "password",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Password"
                    }, void 0, !1, {
                      fileName: "app/routes/sign-up.tsx",
                      lineNumber: 98,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-1",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        id: "password",
                        name: "password",
                        type: "password",
                        autoComplete: "current-password",
                        required: !0,
                        className: "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                        fileName: "app/routes/sign-up.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/sign-up.tsx",
                      lineNumber: 104,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/sign-up.tsx",
                  lineNumber: 97,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "action",
                  value: "signup"
                }, void 0, !1, {
                  fileName: "app/routes/sign-up.tsx",
                  lineNumber: 116,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                    children: "Sign up"
                  }, void 0, !1, {
                    fileName: "app/routes/sign-up.tsx",
                    lineNumber: 119,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/sign-up.tsx",
                  lineNumber: 118,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/sign-up.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/sign-up.tsx",
          lineNumber: 66,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/sign-up.tsx",
        lineNumber: 65,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/sign-up.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        children: "Welcome to Remix"
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react11.Link, {
            to: "/sign-up",
            children: "Sign Up"
          }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 9,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action4,
  default: () => Login,
  loader: () => loader3,
  meta: () => meta7
});
var import_node4 = require("@remix-run/node"), import_node5 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => await authenticator.isAuthenticated(request, {
  successRedirect: "/dashboard"
}), action4 = async ({ request }) => {
  if (request.method !== "POST")
    throw new import_node5.Response("Method Not Allowed", { status: 405 });
  try {
    return await authenticator.authenticate("user-pass", request, {
      successRedirect: "/dashboard"
    });
  } catch (error) {
    return error instanceof import_node5.Response ? error : (0, import_node4.json)(
      { error: "Email address or password is incorrect" },
      { status: 401 }
    );
  }
}, meta7 = () => ({
  title: "Login"
});
function Login() {
  let data = (0, import_react12.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "sm:mx-auto sm:w-full sm:max-w-md",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            className: "mx-auto h-12 w-auto",
            src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600",
            alt: "Your Company"
          }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "mt-6 text-center text-3xl font-bold tracking-tight text-gray-900",
            children: "Sign in to your account"
          }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 54,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "mt-2 text-center text-sm text-gray-600",
            children: [
              "Or",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Link, {
                to: "/sign-up",
                className: "font-medium text-indigo-600 hover:text-indigo-500",
                children: "sign up for a new account"
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 59,
                columnNumber: 11
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/login.tsx",
            lineNumber: 57,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 48,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10",
          children: [
            (data == null ? void 0 : data.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "rounded-md bg-red-50 p-4 mb-6",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "ml-3",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "text-sm font-medium text-red-800",
                  children: data.error
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 73,
                  columnNumber: 17
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/login.tsx",
                lineNumber: 72,
                columnNumber: 15
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/login.tsx",
              lineNumber: 71,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react12.Form, {
              className: "space-y-6",
              method: "post",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "email",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Email address"
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 82,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-1",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        id: "email",
                        name: "email",
                        type: "email",
                        autoComplete: "email",
                        required: !0,
                        className: "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                        fileName: "app/routes/login.tsx",
                        lineNumber: 89,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 88,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 81,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                      htmlFor: "password",
                      className: "block text-sm font-medium text-gray-700",
                      children: "Password"
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 101,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-1",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                        id: "password",
                        name: "password",
                        type: "password",
                        autoComplete: "current-password",
                        required: !0,
                        className: "block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      }, void 0, !1, {
                        fileName: "app/routes/login.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/login.tsx",
                      lineNumber: 107,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 100,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                  type: "hidden",
                  name: "action",
                  value: "login"
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 119,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    type: "submit",
                    className: "flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                    children: "Sign in"
                  }, void 0, !1, {
                    fileName: "app/routes/login.tsx",
                    lineNumber: 122,
                    columnNumber: 15
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/login.tsx",
                  lineNumber: 121,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/login.tsx",
              lineNumber: 80,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 69,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 68,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "af362baf", entry: { module: "/build/entry.client-IF4DG3GT.js", imports: ["/build/_shared/chunk-MRPLIX47.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-QLHM6YRB.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/logout": { id: "routes/api/logout", parentId: "root", path: "api/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api/logout-A72S5NME.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-GPXI2MVI.js", imports: ["/build/_shared/chunk-WZRO4ZZR.js", "/build/_shared/chunk-RSAJXPXI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/index": { id: "routes/dashboard/index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/index-IX7DBLKS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/pages/index": { id: "routes/dashboard/pages/index", parentId: "routes/dashboard", path: "pages", index: !0, caseSensitive: void 0, module: "/build/routes/dashboard/pages/index-AU47VV6O.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/pages/new": { id: "routes/dashboard/pages/new", parentId: "routes/dashboard", path: "pages/new", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/pages/new-3HIC2QOW.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard/settings": { id: "routes/dashboard/settings", parentId: "routes/dashboard", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard/settings-GSJ4UDH7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-S77WBK7M.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-WQ3MQMUN.js", imports: ["/build/_shared/chunk-WZRO4ZZR.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up": { id: "routes/sign-up", parentId: "root", path: "sign-up", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up-SCX6O667.js", imports: ["/build/_shared/chunk-WZRO4ZZR.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-AF362BAF.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/logout": {
    id: "routes/api/logout",
    parentId: "root",
    path: "api/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/dashboard/pages/index": {
    id: "routes/dashboard/pages/index",
    parentId: "routes/dashboard",
    path: "pages",
    index: !0,
    caseSensitive: void 0,
    module: pages_exports
  },
  "routes/dashboard/pages/new": {
    id: "routes/dashboard/pages/new",
    parentId: "routes/dashboard",
    path: "pages/new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/dashboard/settings": {
    id: "routes/dashboard/settings",
    parentId: "routes/dashboard",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: settings_exports
  },
  "routes/dashboard/index": {
    id: "routes/dashboard/index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_exports2
  },
  "routes/sign-up": {
    id: "routes/sign-up",
    parentId: "root",
    path: "sign-up",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
