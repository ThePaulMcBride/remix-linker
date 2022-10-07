import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = ({ request }) => {
  const domain = request.headers.get("host") || "localhost:3000";

  return {
    domain,
  };
};

export default function Index() {
  const { domain } = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix: {domain}</h1>
    </div>
  );
}
