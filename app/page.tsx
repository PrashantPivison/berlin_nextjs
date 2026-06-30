import { redirect } from "next/navigation";

// The site's single built page lives at /why-berlin; send the root there.
export default function Home() {
  redirect("/why-berlin");
}
