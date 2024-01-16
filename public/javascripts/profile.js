const togglerBtn = document.getElementById('toggler-btn');
const togglerPopup = document.getElementById('toggler-popup')
const closeBtn = document.getElementById('close-btn');
const backBtn = document.getElementById('back-btn');
const logoutBtn = document.getElementById('profile-logout-btn');
togglerBtn.addEventListener('click', () => {
    togglerPopup.style.display = 'flex';
    document.getElementById('nav').style.backdropFilter = 'none';
})

closeBtn.addEventListener('click', () => {
    togglerPopup.style.display = 'none';
    document.getElementById('nav').style.backdropFilter = 'blur(29px)';
})

closeBtn.addEventListener('click', function () {
    document.getElementById('quiz-popup').style.display = 'none';
})

backBtn.addEventListener('click', () => {
    window.history.go(-1);
});

logoutBtn.addEventListener('click', () => {
    window.location.href = '/logout';
})

// document.addEventListener('DOMContentLoaded', function () {
//     const userDataScript = document.getElementById('userData');
//     const user = JSON.parse(userDataScript.textContent);
//     console.log(user);
// });

