const togglerBtn = document.getElementById('toggler');
const togglerPopup = document.getElementById('toggler-popup')
const closeBtn = document.getElementById('close-btn');
const loginBtn = document.getElementById('login-btn');

togglerBtn.addEventListener('click', () => {
    togglerPopup.style.display = 'flex';
    document.getElementById('nav').style.backdropFilter = 'none';
})

closeBtn.addEventListener('click', () => {
    togglerPopup.style.display = 'none';
    document.getElementById('nav').style.backdropFilter = 'blur(29px)';
})

document.getElementById('quiz-popup-close-btn').addEventListener('click', function () {
    document.getElementById('quiz-popup').style.display = 'none';
})

loginBtn.addEventListener('click', () => {
    fetch('/check-authentication', {
        method: 'GET',
        credentials: 'same-origin',
    })
        .then(response => response.json())
        .then(data => {
            if (data.isAuthenticated) {
                window.location.href = `/profile`;
            } else {
                window.location.href = '/login';
            }
        })
        .catch(error => {
            console.error('Error checking authentication status:', error);
        });
});