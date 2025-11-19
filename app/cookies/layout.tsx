import { TopBar } from "../ui/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="grow">{children}</main>
    </div>
  );
}
