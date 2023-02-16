const arrow = document.querySelector(".login-panel i");
const arrowRegister = document.querySelector(".register-panel i");

const loginSection = document.querySelector(".login-section");
const registerSection = document.querySelector(".register-section");

const loginPanel = document.querySelector(".login-panel");
const registerPanel = document.querySelector(".register-panel");

const logoutSection = document.querySelector('.logout');
const logoutPanel = document.querySelector('.logout-panel');

const signIn = document.getElementById('sign-in');
const signUp = document.getElementById('sign-up');
const signOut = document.getElementById('sign-out');
const profile = document.getElementById('profile')
const latestNewsButton = document.getElementById('latest-news');

const approve = document.getElementById('approve');
const decline = document.getElementById('decline');

const remember = document.querySelector('.remember');

const latestNews = document.querySelector(".latest-news-section");
const home = document.querySelector(".home-section");


// Removing Login
arrow.addEventListener('click', (e) => {
    loginSection.classList.remove('dark');
    loginPanel.classList.remove('active');
})

// Removing Register

arrowRegister.addEventListener('click', (e) => {
    registerSection.classList.remove('dark');
    registerPanel.classList.remove('active');
})

// Removing Logout
decline.addEventListener('click', (e) => {
    logoutPanel.classList.remove('active');
    logoutSection.classList.remove('dark');
})

approve.addEventListener('click', (e) => {
    logoutPanel.classList.remove('active');
    logoutSection.classList.remove('dark');
})


// Appearing Login
signIn.addEventListener('click', (e) => {
    e.preventDefault();

    loginSection.classList.add('dark');
    loginPanel.classList.add('active');
})

// Appearing Register
signUp.addEventListener('click', (e) => {
    e.preventDefault();

    registerSection.classList.add('dark');
    registerPanel.classList.add('active');
})

// Appearing Logout
signOut.addEventListener('click', (e) => {
    e.preventDefault();
    logoutSection.classList.add('dark');
    logoutPanel.classList.add('active');
})
// Appearing News List
latestNewsButton.addEventListener('click', (e) => {
    e.preventDefault();


    home.classList.toggle('active');
    latestNews.classList.toggle('active');

    if (latestNews.classList.contains('active')) {
        latestNewsButton.style.color = "#ca2e55";
    } else {
        latestNewsButton.style.color = "#40434e"
    }
})
// Changing state of remeber
remember.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
})

