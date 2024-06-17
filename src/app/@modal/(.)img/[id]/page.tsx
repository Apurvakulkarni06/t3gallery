import { Modal } from "./modal";
import FullImageView from "~/components/FullImageView";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) throw new Error("Invalid photo id");
  return (
    <Modal>
      <FullImageView photoId={idAsNumber} />
    </Modal>
  );
}
