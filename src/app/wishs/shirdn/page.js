"use client";

import AddWish from "@/components/AddWish";
import CreateDatabase from "@/components/CreateDatabase";

export default function Admin() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-8 p-4 space-y-8 md:space-y-0 w-full max-w-4xl mx-auto">
      <CreateDatabase />
      <AddWish />
    </div>
  );
}
