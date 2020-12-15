import './index';
import { refs } from './refs';
import markup from './markup.hbs';

const apiKey = '19506242-1f89b350085f2df58b37812a8';
const baseUrl = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12';



export const makeImg = async (searchValue, page) => {
    const dataBase = await fetch(`${baseUrl}&q=${searchValue}&page=${page}&key=${apiKey}`)
        .then((response) =>  response.json());
    const data = [...dataBase['hits']];
    refs.galleryList.insertAdjacentHTML('beforeend', markup(data));
      
};
