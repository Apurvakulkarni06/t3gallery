import FullImageView from "~/components/FullImageView";

export default async function PhotoImage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  return <FullImageView photoId={idAsNumber} />;
}
