"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Contact {
  _id: string;
  name: string;
  phoneNumber: string;
}

export default function EditForms(props: Contact) {
  const [newName, setNewName] = useState(props.name);
  const [newPhoneNumber, setNewPhoneNumber] = useState(props.phoneNumber);

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `http://localhost:3000/api/contacts/${props._id}`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ newName, newPhoneNumber }),
        }
      );

      if (!res.ok) {
        throw new Error("Failed to update contact");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        id="input-name"
        className="p-2 w-full focus:outline-none border border-slate-700 mb-3"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="08123456789"
        id="input-name"
        className="p-2 w-full focus:outline-none border border-slate-700"
        value={newPhoneNumber}
        onChange={(e) => setNewPhoneNumber(e.target.value)}
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
    </form>
  );
}
