
export const formetDate=(date)=>{
    const hours=new Date(date).getHours();
    const minutes=new Date(date).getMinutes();

    return  `${hours<10?"0"+hours :hours}:${minutes<10?"0"+minutes :minutes} `
}

//download
export const DownloadAny=(e,image)=>{
    e.preventDefault()
    try{
        fetch(image)
        .then((res)=>res.blob())// here I write blob becouse i want to download
        .then(blob=>{
            const Url=window.URL.createObjectURL(blob)// create url using this
            const ancher=document.createElement("a");// create ancher tag
            ancher.style.display="none";
            ancher.href=Url;// set url here

            const nameSplit=image.split("/");
            const Dname=nameSplit.pop()//

            ancher.download=""+Dname+"";
            document.body.appendChild(ancher)


            ancher.click()//
            window.URL.revokeObjectURL(Url)
        }).catch((err)=>{
            console.log("error getting while download image or any",err.message)
        })


    }catch(err){
        console.log("error getting while download image or any",err.message)
    }
}