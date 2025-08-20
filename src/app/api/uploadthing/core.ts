import { auth } from '@/auth'
import { db } from '@/lib/db'
import { createUploadthing, type FileRouter } from 'uploadthing/next'
import { UploadThingError, UTApi } from 'uploadthing/server'

const f = createUploadthing()

export const ourFileRouter = {
  //profile picture uploader
  profilePictureUploader: f({
    image: {
      maxFileSize: "32MB",
      maxFileCount: 1
    },
  })
    .middleware(async () => {
      //get the user
      const session = await auth()
      if (!session) throw new UploadThingError("Unauthorised")
      return {userId: session.user.id}
    })
    .onUploadComplete(async ({ metadata, file }) => {
     
    return {uploadedBy: metadata.userId}
  })
} satisfies FileRouter
export type OurFileRouter = typeof ourFileRouter