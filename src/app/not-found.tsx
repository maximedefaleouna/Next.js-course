"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  let pathname: string | string[] = usePathname();
  pathname = pathname.split("/");
  console.log(pathname);
  return (
    <div className="bg-black flex items-center justify-center text-2xl text-red-400 flex-col h-[100vh]">
      <h2>Page Not found</h2>
      <p>page introuvable</p>
    </div>
  );
}
