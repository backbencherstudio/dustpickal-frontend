import NavBar from "./_components/home/shared/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#e6f8f9]">
      <NavBar />
      {children}
    </div>
  );
}
