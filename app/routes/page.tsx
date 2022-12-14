import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = ({ request }) => {
  const url = request.url || "localhost:3000";

  const parsedUrl = new URL(url);
  const domain = parsedUrl.hostname;

  return {
    domain,
  };
};

export default function Index() {
  const { domain } = useLoaderData();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Domain: {domain}</h1>
    </div>
  );
}
