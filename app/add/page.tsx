"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddPage() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://contact-app-liart.vercel.app/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ name, phoneNumber }),
        }
      );

      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a contact");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="p-3 max-w-sm mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          id="input-name"
          className="p-2 w-full focus:outline-none border border-slate-700 mb-3"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="08123456789"
          id="input-number"
          className="p-2 w-full focus:outline-none border border-slate-700"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 p-3 mt-4 rounded-lg text-white mr-3"
        >
          Add Contact
        </button>
        <Link
          href="/"
          className="py-3 px-5 rounded-lg text-slate-700 bg-slate-200"
        >
          Cancel
        </Link>
      </form>
    </main>
  );
}
