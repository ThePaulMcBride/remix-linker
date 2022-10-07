import { Authenticator } from "remix-auth";
import { sessionStorage } from "_app/services/session.server";
import { FormStrategy } from "remix-auth-form";
import { compare } from "bcryptjs";
import invariant from "tiny-invariant";
import { db } from "_app/db.server";
import { createUser } from "./user.server";

type User = {
  id: string;
  email: string;
  name?: string;
  image?: string;
};

export let authenticator = new Authenticator<User>(sessionStorage, {
  throwOnError: true,
});

authenticator.use(
  new FormStrategy(async ({ form }) => {
    let emailInput = form.get("email");
    let passwordInput = form.get("password");
    let actionInput = form.get("action");
    invariant(actionInput, "Action is required");
    invariant(passwordInput, "Password is required");
    invariant(emailInput, "Email is required");

    const action = actionInput.toString();
    const email = emailInput.toString();
    const password = passwordInput.toString();

    if (action === "signup") {
      return createUser(email, password);
    }

    if (action === "login") {
      const user = await db.user.findFirst({
        where: {
          email,
        },
      });

      invariant(user, "Invalid email or password");

      const passwordsMatch = await compare(password, user.hashed_password);

      invariant(passwordsMatch, "Invalid email or password");

      return {
        id: user.id,
        email: user.email,
      };
    }

    throw new Error("Invalid action");
  }),
  "user-pass"
);
