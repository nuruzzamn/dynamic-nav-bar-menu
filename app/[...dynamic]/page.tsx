"use client";

import Navbar from "@/components/Navbar";
import { useParams } from "next/navigation";

const DynamicPage = () => {
  const params = useParams(); // Retrieve dynamic route parameter
  const { dynamic } = params;

  console.log("dynamic", dynamic);

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Welcome to My Navbar Example</h1>
        <div className="mt-4">
          <div className="flex flex-row">
            <h1>
              This is a simple navbar with nested menus from
              {(dynamic as string[]).map((item, index) => (
                <span key={index} className="mr-2 text-red-600 font-bold">
                  {` => ${item}`}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DynamicPage;
