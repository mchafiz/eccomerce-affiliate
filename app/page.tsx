import { getMenus } from "@/lib/prisma";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Main() {
  // Fetch the menus data from Prisma
  const menus = await getMenus();

  // Get the current pathname from headers
  const headersList = headers();
  const pathname = headersList.get("x-url") || "/";
  const dynamicUrl = pathname.split("/").pop();

  // Check if the user is on the root path
  if (!dynamicUrl) {
    // Redirect to the first menu's title
    return redirect(`/${menus[0]?.title?.replace(/\s+/g, "-").toLowerCase()}`);
  }

  // If no redirect, render component (for example)
  return <div>Rendering some content...</div>;
}
