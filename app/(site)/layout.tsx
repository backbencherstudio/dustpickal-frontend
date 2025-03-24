import NavBar from "./_components/home/shared/Navbar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
