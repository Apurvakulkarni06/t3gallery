import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...images, ...images, ...images].map((image, index)=>(
            <div key={image.id + '_' + index} className="flex w-48 flex-col">
              <img src={image.url} />
              <p>{image.name}</p>
            </div>
          ))
        }
      </div>
    </main>
  );
}
