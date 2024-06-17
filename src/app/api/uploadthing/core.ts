import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import {  UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

const f = createUploadthing();


// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    //Define as many FileEoutes as you like, each with unique routeSlug
    imageUploader: f({ image: { maxFileSize: "16MB", maxFileCount: 10} })
        // Set permissions and file types for this FileRoute
        .middleware(async ({ req })=>{
            // This code runs on your server before upload
            const user =  auth();
            
            // If you throw, the user will not be able to upload
            if(!user) throw new UploadThingError("Unauthorized");

            //Whatever is returned here is accessible in onUploadComplete as `metadata`
            return { userId: user.userId}

        })
        .onUploadComplete(async ({ metadata, file}) =>{
            // This code RUNS ON SERVER after upload
            console.log("Upload completed for userId:", metadata.userId);

            await db.insert(images).values({
                name: file.name,
                url: file.url,
                userId: metadata.userId
            })

            // console.log("file URL:", file.url);
            return { uploadedBy: metadata.userId}
        }),
    
} satisfies FileRouter;

export type ourFileRouter = typeof ourFileRouter;