import type { ActionFunction } from "@remix-run/node";
import { authenticator } from "_app/services/auth.server";

export const action: ActionFunction = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/login" });
};
