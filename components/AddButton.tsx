import Link from "next/link";

export const AddButton = () => {
  return (
    <Link
      href="/add"
      className="flex items-center justify-center bg-blue-500 text-white rounded-full h-12 w-12 fixed bottom-5 right-5"
    >
      <span className="text-3xl">+</span>
    </Link>
  );
};
