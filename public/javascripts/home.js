//for navbar toggler logic
const togglerBtn = document.getElementById('toggler');
const togglerPopup = document.getElementById('toggler-popup');
const closeBtn = document.getElementById('close-btn');
const openBtn = document.getElementById('link-to-main');


//for LOGIN popup logic
const loginBtn = document.getElementById('login-btn');

//Navbar toggler logic
togglerBtn.addEventListener('click', () => {
    togglerPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    togglerPopup.style.display = 'none';
});

openBtn.addEventListener('click', () => {
    togglerPopup.style.display = 'flex';
});



//LOGIN popup logic
loginBtn.addEventListener('click', () => {
    fetch('/check-authentication', {
        method: 'GET',
        credentials: 'same-origin',
    })
        .then(response => response.json())
        .then(data => {
            if (data.isAuthenticated) {
                window.location.href = '/profile';
            } else {
                window.location.href = '/login';
            }
        })
        .catch(error => {
            console.error('Error checking authentication status:', error);
        });
});