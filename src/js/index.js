import '../css/index.scss';
import {p, getProducts} from './products.js';

import {hexToCSSFilter} from 'hex-to-css-filter';
import html from '../index.html';


//Search Mobile Input
const searchBtn = document.getElementById('searchBtn');
const searchBox = document.getElementById('searchBox');
const searchInput = document.getElementById('searchInput');

let searchBoxOpened = false;


searchBtn.addEventListener('click', () => {

    if(searchBoxOpened)
    {
        searchBox.classList.remove('openBox');
        searchBoxOpened = !searchBoxOpened;
        M.toast({html:'Not Implmented yet!'});

    }else{

        searchBox.classList.add('openBox');
        searchBoxOpened = !searchBoxOpened;
        searchInput.focus();
    }
})

searchInput.addEventListener('keyup', (e)=>{

    if(e.key === 'Enter'){
        searchBox.classList.remove('openBox');
        searchBoxOpened = !searchBoxOpened;
        e.target.value = '';
        M.toast({html:'Not Implemented yet!'});
    }
})

searchInput.addEventListener('focusout',(e)=>{
    searchBox.classList.remove('openBox');
    searchBoxOpened = !searchBoxOpened;
        e.target.value = '';
})

//Login Mobile Input
const menuMobile = document.getElementById('menuMobile');
const loginBox = document.getElementById('loginBox');
const loginForm = document.getElementById('signInForm');
const loginButton = document.getElementById('btnSignIn');
const hiddenButton = document.getElementById('hiddenButton');

let loginBoxOpened = false;

loginBtn.addEventListener('click', () => {

    console.log(loginBoxOpened);

    if(loginBox.classList.contains('openLogin'))
    {
        loginBox.classList.remove('openLogin');
        menuMobile.style.zIndex = 3;
        hiddenButton.style.zIndex = 5;
        loginForm.style.display = 'none';
        loginBoxOpened = !loginBoxOpened;

    }else{

        loginForm.style.display = 'flex';
        loginBox.classList.add('openLogin');
        menuMobile.style.zIndex = 4;
        hiddenButton.style.zIndex = 3;




    }
})

document.addEventListener('click',(e)=>{

    if (loginBox !== e.target && !loginBox.contains(e.target)) {

        loginBox.classList.remove('openLogin');
        menuMobile.style.zIndex = 3;
        hiddenButton.style.zIndex = 5;
        loginForm.style.display = 'none';
        loginBoxOpened = !loginBoxOpened;
    }
})

loginButton.addEventListener('click',(e)=>{
    e.preventDefault();
    loginBox.classList.remove('openLogin');
    menuMobile.style.zIndex = 3;
        hiddenButton.style.zIndex = 5;
    loginForm.style.display = 'none';
    loginBoxOpened = !loginBoxOpened;

})

//Cart Mobile Mobile
const cartBtn = document.getElementById('cartIcon');

cartBtn.addEventListener('click',() => {
    M.toast({html:'Not Implemented yet!'});
})

//Menu on top
window.addEventListener('scroll',()=>{

    if(window.scrollY > 160 && window.innerWidth > 600)
    {
        document.getElementById('home').style.position = 'fixed';
        document.getElementById('home').style.top = '0';
    }
    else{

        if (window.innerWidth > 600) {

            document.getElementById('home').style.position = 'absolute';

            if(window.innerWidth > 600 && window.innerWidth < 993){

                document.getElementById('home').style.top = '150px';

            }
            else{
                document.getElementById('home').style.top = '220px';
            }
        }

    }

    if(window.innerWidth < 600){
            document.getElementById('home').style.top = '';
            document.getElementById('home').style.position = '';
    }

})

let device = '';
window.addEventListener('resize',()=>{

    if(window.innerWidth < 600){
        document.getElementById('home').style.position = '';
        document.getElementById('home').style.top = '';
    }

    if(window.innerWidth > 600 && window.innerWidth < 992){
        document.getElementById('home').style.position = 'absolute';
        document.getElementById('home').style.top = '150px';
    }

    window.scrollTo(0,0);
})

//Search box device

const searchBarDevice = document.getElementById('searchBoxDevice');
const searchBtnDevice = document.getElementById('searchBtnDevice');
const searchInputDevice = document.getElementById('searchInputDevice');

searchBtnDevice.addEventListener('click',()=>{

    let opened = searchBarDevice.classList.toggle('search-box-device-open');

    if (opened) {
        searchInputDevice.focus();
    }else{
        searchInputDevice.blur();
    }

})

searchInputDevice.addEventListener('keyup', (e)=>{

    if(e.key === 'Enter'){
        searchBarDevice.classList.toggle('search-box-device-open');
        e.target.value = '';
        M.toast({html:'Not Implemented yet!'});
    }

})

document.addEventListener('click',(e)=>{

    if (searchBarDevice !== e.target && !searchBarDevice.contains(e.target)) {

        searchBarDevice.classList.remove('search-box-device-open');
    }
})

document.getElementById('cartIconDevice').addEventListener('click',()=>{

    M.toast({html:'Not Implemented yet!'});
})


//API

getProducts().then(productsInFront => {


    const cont = document.getElementById('prodContainer');


    productsInFront.forEach(product => {

        const productElem = document.getElementById('productTemplate').cloneNode(true);
        productElem.style.display = 'flex';

        productElem.children[0].children[0].src = product.image_link;
        productElem.children[1].children[0].children[0].innerHTML = product.brand;
        productElem.children[1].children[1].children[0].innerHTML = product.name;
        productElem.children[1].children[2].children[0].innerHTML = `$${product.price.split('.')[0]}<span>${product.price.split('.')[1]}</span>`;

        let colors = product.product_colors;


        if (colors.length > 0) {

            colors.forEach((color)=>{

            let colorContainer  = productElem.children[3].cloneNode(true);
            colorContainer.style.display = 'block';


            colorContainer.children[0].style.filter = `${hexToCSSFilter(color.hex_value).filter.slice(0,-1)}`;
            colorContainer.children[1].innerHTML = color.colour_name;
            colorContainer.children[1].style.color = color.hex_value;

            productElem.appendChild(colorContainer);

            })
        }

        cont.appendChild(productElem);

    })


});


p.then((product)=>{



    const productElem = document.getElementById('productTemplate');

    productElem.children[0].children[0].src = product.imgLink;
    productElem.children[1].children[0].children[0].innerHTML = product.brand;
    productElem.children[1].children[1].children[0].innerHTML = product.name;
    productElem.children[1].children[2].children[0].innerHTML = `$${product.price.split('.')[0]}<span>${product.price.split('.')[1]}</span>`;

    let colors = product.colors;


    if (colors.length > 0) {

        colors.forEach((color)=>{

            let colorContainer  = productElem.children[3].cloneNode(true);
            colorContainer.style.display = 'block';


            colorContainer.children[0].style.filter = `${hexToCSSFilter(color.hex_value).filter.slice(0,-1)}`;
            colorContainer.children[1].innerHTML = color.colour_name;
            colorContainer.children[1].style.color = color.hex_value;

            productElem.appendChild(colorContainer);

        })
    }



})

//Modais

const loginBtnDevice = document.getElementById('loginBtnDevice');

loginBtnDevice.addEventListener('click',()=>{
    const loginModal = document.getElementById('modalLogin');
    M.Modal.init(loginModal).open();



})

document.getElementById('modalBtnSignIn').addEventListener('click',(e)=>{
    M.Modal.getInstance(document.getElementById('modalLogin')).close();
    M.toast({html:'Not Implemented yet!'});

})


let modalBlackFriday = '';
let buttons = '';
document.addEventListener('DOMContentLoaded', function() {
    const m = document.getElementById('modalBlackFriday');
    buttons = document.getElementsByClassName('blackBtn');
    modalBlackFriday = M.Modal.init(m);
    modalBlackFriday.open();

    for(let button of buttons){

    button.addEventListener('click',()=>{
    modalBlackFriday.open();

  })
  }
});

const blackButton = document.getElementById('userButton');

blackButton.addEventListener('click',()=>{
    const userName = document.getElementById('userName');
    const userEmail = document.getElementById('userEmail');

    const normalPrices = document.getElementsByClassName('normalPrice');
    const blackPrices = document.getElementsByClassName('blackPrice');

    for(let i = 0; i < normalPrices.length; i++){

        normalPrices[i].style.textDecoration = 'line-through';
        let price = normalPrices[i].innerHTML;
        console.log(price);
        price = price.match(/\d{1,2}/g);
        price = price.map((value)=>{ return Number(value)/2});
        blackPrices[i].innerHTML = `$${Math.floor(price[0])}<span>${Math.floor(price[1])}</span>`;
        blackPrices[i].style.color = 'red';
        blackPrices[i].children[0].style.color = 'red';

    }




    console.log(userName.value);
    console.log(userEmail.value);

    if (userName.value === '' || userEmail.value === '') {

        M.toast({html:'Field empty is not allowed'});

    }else{

        const userData = {userName: userName.value, userEmail: userEmail.value};

        window.localStorage.setItem('userData', JSON.stringify(userData));

        modalBlackFriday.close();

    }




})















