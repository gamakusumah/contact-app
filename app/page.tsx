import { AddButton } from "@/components/AddButton";
import { ContactItem } from "@/components/ContactItem";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-3 max-w-sm mx-auto">
      <ContactItem />
      <AddButton />
    </main>
  );
}
