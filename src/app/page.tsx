import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/a990e9e8-c144-4b2b-8a19-758bdeafefdd-yqspls.jpg",
  "https://utfs.io/f/c804fd41-4bb5-4493-a43d-d4b4fabdb363-okj3t3.jpg",
  "https://utfs.io/f/9043718e-d546-40ec-ae1f-84051d5ed89b-rjovai.jpg",
  "https://utfs.io/f/a1cde628-ca7e-4914-9c27-0f7522d2cc4b-ai5pma.jpg",
  "https://utfs.io/f/f479ad7f-dda0-4aeb-93e6-89899d13ac87-rdnwut.jpg",
  "https://utfs.io/f/22be43fb-60d3-45c5-b047-17c72770e771-2l59ia.jpg",
  "https://utfs.io/f/68140bcc-ea46-43ea-b7d0-7d6826eaf9be-kgmhqf.jpg",
  "https://utfs.io/f/5a10fbbb-8be4-4e33-a591-742cb12f0822-m3xgc6.jpg"
]
const mockImages = mockUrls.map((url, index)=>({
  id: index + 1,
  url
}))
export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log("post:", posts);
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post)=>(
            <div key={post.id}>
              {post.name}
            </div>
          ))
        }
        {
          [...mockImages, ...mockImages, ...mockImages].map((image, index)=>(
            <div key={image.id + '_' + index} className="w-48">
              <img src={image.url} />
            </div>
          ))
        }
      </div>
    </main>
  );
}
