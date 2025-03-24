"use client";
import { usePathname } from "next/navigation";
import NavBar from "../(site)/_components/home/shared/Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  if (pathname?.includes("/dashboard")) return null;
  return <NavBar />;
}
