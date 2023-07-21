"use client";
import Link from "next/link";
import { useState } from "react";

export default function page() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  return (
    <main className="p-3 max-w-sm mx-auto">
      <input
        type="text"
        placeholder="Name"
        id="input-name"
        className="p-2 w-full focus:outline-none border border-slate-700 mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="08123456789"
        id="input-name"
        className="p-2 w-full focus:outline-none border border-slate-700"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 p-3 mt-4 rounded-lg text-white mr-3"
      >
        Save Changes
      </button>
      <Link
        href="/"
        className="py-3 px-5 rounded-lg text-slate-700 bg-slate-200"
      >
        Cancel
      </Link>
    </main>
  );
}
