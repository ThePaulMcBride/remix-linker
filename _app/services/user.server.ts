import { hash } from "bcryptjs";
import { db } from "_app/db.server";
import { stripe } from "_app/services/stripe.server";

export const createUser = async (email: string, password: string) => {
  const hashedPassword = await hash(password, 10);
  const exists = await db.user.findFirst({
    where: {
      email,
    },
  });

  if (exists) {
    throw new Error("A user with that email address already exists");
  }

  try {
    const customer = await stripe.customers.create({ email });

    const user = await db.user.create({
      data: {
        email,
        hashed_password: hashedPassword,
        stripe_customer_id: customer.id,
      },
    });

    return {
      id: user.id,
      email: user.email,
    };
  } catch (error) {
    throw new Error(
      "There was an error creating your account, please try again"
    );
  }
};
