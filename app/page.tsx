import { AddButton } from "@/components/AddButton";
import { ContactItem } from "@/components/ContactItem";

interface Contact {
  _id: string;
  name: string;
  phoneNumber: string;
}

export default async function Home() {
  const getContacts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/contacts", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch contacts");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading contacts : ", error);
  }
};
  
  const { contacts }: { contacts: Contact[] } = await getContacts();

  return (
    <main className="p-3 max-w-sm mx-auto">
      {contacts.map((contact) => (
        <ContactItem
          _id={contact._id}
          name={contact.name}
          phoneNumber={contact.phoneNumber}
        />
      ))}

      <AddButton />
    </main>
  );
}
