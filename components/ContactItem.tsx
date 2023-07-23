"use client";
import Link from "next/link";
import { MdDelete, MdEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ContactProps {
  _id: string;
  name: string;
  phoneNumber: string;
}

export const ContactItem = (props: ContactProps) => {
  const router = useRouter();

  const removeContact = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      const res = await fetch(
        `https://contact-app-liart.vercel.app/api/contacts?id=${props._id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <div className="flex items-center p-2 justify-between hover:bg-slate-100">
      <div>
        <h5 className="font-bold text-slate-700 text-lg mb-1">{props.name}</h5>
        <p className="text-slate-400">{props.phoneNumber}</p>
      </div>
      <div className="text-slate-700 flex items-center">
        <button type="button" className="mr-2" onClick={removeContact}>
          <MdDelete className="fill-slate-400" size={18} />
        </button>
        <Link href={`/edit/${props._id}`}>
          <MdEdit size={18} />
        </Link>
      </div>
    </div>
  );
};
