import NavBar from "./_components/home/shared/Navbar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#e7f9f9]">
      <NavBar />
      {children}
    </div>
  );
}
