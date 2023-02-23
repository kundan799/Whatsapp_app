import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import dotenv from "dotenv";
dotenv.config();

const name = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const storage=new GridFsStorage({
    url:`mongodb://${name}:${password}@ac-koroocl-shard-00-00.qbpv0uu.mongodb.net:27017,ac-koroocl-shard-00-01.qbpv0uu.mongodb.net:27017,ac-koroocl-shard-00-02.qbpv0uu.mongodb.net:27017/?ssl=true&replicaSet=atlas-gtulmh-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})
export default multer({storage}); 