import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Welcome to My Navbar Example</h1>
        <p className="mt-4">This is a simple navbar with nested menus.</p>
      </main>
    </div>
  );
}
