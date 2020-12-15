import './styles.css';
import { refs } from './refs';
import markup from './markup.hbs';
var _ = require('lodash');
import {makeImg} from './fetch.js'


let searchValue = '';
let page = 1;



const searchImg = _.debounce((e) => {
    refs.galleryList.innerHTML = '';
    searchValue = e.target.value;
    page = 1;
   makeImg(searchValue, page);
    
    refs.searchForm.reset();
    refs.loadMore.classList.remove('is-hidden');
}, 500);


const addMoreImg = async () => {
    page += 1;
    await makeImg(searchValue, page);
  window.scrollTo({top: document.documentElement.offsetHeight, bahavir: 'smoth'})
};



refs.searchForm.addEventListener('input', searchImg);
refs.loadMore.addEventListener('click', addMoreImg);


