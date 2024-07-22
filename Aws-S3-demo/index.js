import dotenv from "dotenv";
dotenv.config();
import { S3Client, 
         GetObjectCommand,
         PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

// getunsignedurl code
// Create a new S3 client
const s3client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
});

async function getObjectUrl(key) {
    const command = new GetObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key
    });
    const url = await getSignedUrl(s3client, command, { expiresIn: 3600 }); // URL expires in 1 hour
    return url;
}

async function putObject(filename,contentype) {
    const command = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `upload/user-videos/${filename}`,
        ContentType: contentype,
    })
    const url = await getSignedUrl(s3client, command); // URL expires in 1 hour
    return url;
}

async function getImage() {
    // console.log(await getObjectUrl(key));
    console.log(await putObject(`video-${Date.now()}.mp4`,"video/mp4"));
}

getImage();
