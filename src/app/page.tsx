import { db } from "~/server/db";
import { SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'
export const dynamic = "force-dynamic";

async function Images(){
  
  const images = await db.query.images.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  });

  return(
    <div className="flex flex-wrap gap-4">

    {
      [...images, ...images, ...images].map((image, index)=>(
        <div key={image.id + '_' + index} className="flex w-48 flex-col">
          <img className="h-48 object-cover" src={image.url} />
          <p>{image.name}</p>
        </div>
      ))
    }
    </div>
  )
}

export default async function HomePage() {

  
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in from above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
