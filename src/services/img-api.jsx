
const BASE_URL ='https://pixabay.com/api/';
const KEY = '40998806-b427a66e0a96d7aa9b4c9074f';


function FetchImg(query, page=1) {
    return fetch(`${BASE_URL}?key=${KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`).then(response => response.json());
}

export default FetchImg;