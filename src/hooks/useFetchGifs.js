
import { useEffect, useState } from "react";
import { getGift } from "../components/helpers/getGift";

export const useFetchGifs = (category,) => {

    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true);

const getImages = async ()=> {
    const newImages = await getGift (category);
    setImages(newImages);
    setisLoading(false);
}
    useEffect(() => {
       getImages();
    }, []);

    return{
    images:images,
    isLoading: isLoading
}
}

