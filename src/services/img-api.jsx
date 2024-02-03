import axios from "axios";

const instance = axios.create({
    baseURL: "https://pixabay.com/api",
})


export const getAllImages = ()=> {
    return instance.get("/?q=cat&page=1&key=40998806-b427a66e0a96d7aa9b4c9074f&image_type=photo&orientation=horizontal&per_page=12");
}

export const searchImage = ( q, page=1) => {
    return instance.get("/", {
        params: {
            q,
            page,
            key: "40998806-b427a66e0a96d7aa9b4c9074f",
            image_type: "photo",
            orientation: "horizontal",
            per_page: 12,
        }
    })
}

