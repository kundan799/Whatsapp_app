import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = "http://localhost:8500";


let gfs, gridfsBucket;

// make sure the db instance is open before passing into `Grid`
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

export const fileuplode=(req,res)=>{
    if(!req.file){
        return request.status(404).json("file not found")
    }
    const imageUrl=`${url}/file/${req.file.filename}`

    return res.status(200).json(imageUrl)


}

// get

export const getImage=async(req,res)=>{
    try{
        const file = await gfs.files.findOne({ filename: req.params.filename });
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res);

    }catch(err){
       return response.status(500).json({ msg: err.message });
    }
}


