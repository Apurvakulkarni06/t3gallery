import { getImage } from "~/server/queries";

export default async function FullImageView({ photoId }: { photoId: number }) {
  const image = await getImage(photoId);
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink justify-center items-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>

      <div className="flex w-48 flex-shrink-0 flex-col border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
