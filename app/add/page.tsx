import Link from "next/link";

export default function AddPage() {
  return (
    <main className="p-3 max-w-sm mx-auto">
      <input
        type="text"
        placeholder="Name"
        id="input-name"
        className="p-2 w-full focus:outline-none border border-slate-700 mb-3"
      />
      <input
        type="number"
        placeholder="08123456789"
        id="input-name"
        className="p-2 w-full focus:outline-none border border-slate-700"
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
    </main>
  );
}
