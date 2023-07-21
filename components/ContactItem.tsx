import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";

export const ContactItem = () => {
  return (
    <div className="flex items-center p-2 justify-between hover:bg-slate-100">
      <div>
        <h5 className="font-bold text-slate-700 text-lg mb-1">Name</h5>
        <p className="text-slate-400">081234567898</p>
      </div>
      <div className="text-slate-700 flex items-center">
        <button type="button" className="mr-2">
          <MdDelete size={24} />
        </button>
        <Link href={"/edit/123"}>
          <MdEdit size={24} />
        </Link>
      </div>
    </div>
  );
};
