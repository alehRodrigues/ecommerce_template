import '../css/index.scss';

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
        M.toast({html:'Not Implmented yet!'});
    }
})

searchInput.addEventListener('focusout',(e)=>{
    searchBox.classList.remove('openBox');
    searchBoxOpened = !searchBoxOpened;
        e.target.value = '';
})

//Login Mobile Input
const loginBox = document.getElementById('loginBox');
const loginForm = document.getElementById('signInForm');
const loginButton = document.getElementById('btnSignIn');

let loginBoxOpened = false;

loginBtn.addEventListener('click', () => {

    if(loginBoxOpened)
    {
        loginBox.classList.remove('openLogin');
        loginForm.style.display = 'none';
        loginBoxOpened = !loginBoxOpened;

    }else{

        loginForm.style.display = 'flex';
        loginBox.classList.add('openLogin');


    }
})

document.addEventListener('click',(e)=>{

    console.log();
    if (loginBox !== e.target && !loginBox.contains(e.target)) {

        loginBox.classList.remove('openLogin');
        loginForm.style.display = 'none';
        loginBoxOpened = !loginBoxOpened;
    }
})

loginButton.addEventListener('click',(e)=>{

    loginBox.classList.remove('openLogin');
    loginForm.style.display = 'none';
    loginBoxOpened = !loginBoxOpened;
    M.toast({html:'Not Implmented yet!'});

})

//Cart Mobile Mobile
const cartBtn = document.getElementById('cartIcon');

cartBtn.addEventListener('click',() => {
    M.toast({html:'Not Implmented yet!'});
})
