import EditForms from "@/components/EditForms";

const getContactById = async (id: string) => {
  try {
    const res = await fetch(
      `https://contact-app-liart.vercel.app/api/contacts/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch contact");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditPage({ params }: { params: { id: string } }) {
  const id = params.id;
  const { contact } = await getContactById(id);
  const { name, phoneNumber } = contact;

  return (
    <main className="p-3 max-w-sm mx-auto">
      <EditForms _id={id} name={name} phoneNumber={phoneNumber} />
    </main>
  );
}
