//for LOGIN popup logic
const loginBtn = document.getElementById('login-btn');
const loginPopup = document.getElementById('login-popup');
const loginPopupCloseBtn = document.getElementById('login-popup-close-btn');
//for LOGIN popup Username logic
const loginUsernameInput = document.getElementById('login-username-input');
const loginUsernameLabel = document.getElementById('login-username-label');
const loginUsername = document.getElementById('login-username');
//for LOGIN popup PASSWORD logic
const loginBtnRevealPasswordMain = document.getElementById('login-btn-reveal-password-main');
const loginBtnNotRevealPasswordMain = document.getElementById('login-btn-not-reveal-password-main');
const loginPasswordInput = document.getElementById('login-password-input');
const loginPasswordLabel = document.getElementById('login-password-label');
const loginPassword = document.getElementById('login-password');
const loginBtnProfile = document.getElementById('login-btn-profile');
const sorryPass = document.getElementById('sorry-pass');

const loginRegisterBtn = document.getElementById('login-register-btn');

//LOGIN popup logic
loginPopupCloseBtn.addEventListener('click', () => {
    window.history.go(-1);
});

//LOGIN popup USERNAME logic
loginUsernameInput.addEventListener('focus', () => {
    loginUsernameLabel.style.transition = 'font-size 0.2s, padding 0.2s, height 0.2s, color 0.2s, border 0.2s, outline 0.2s';
    loginUsernameLabel.style.fontSize = '13px';
    loginUsernameLabel.style.color = 'rgba(255,255,255, 0.6)';
    loginUsernameLabel.style.paddingTop = '9px';
    loginUsername.style.border = '1px solid rgba(255,255,255, 0.6)';
    loginUsername.style.outline = '1px solid rgba(255,255,255, 0.6)';
});

loginUsernameInput.addEventListener('blur', () => {
    const inputValue = loginUsernameInput.value;
    const passInputValue = loginPasswordInput.value;
    if (inputValue.length > 5 && passInputValue.length > 0) {
        loginBtnProfile.classList.remove('login-btn-disable');
        loginUsernameLabel.style.display = 'block';
        loginUsernameLabel.style.fontSize = '13px';
        loginUsernameLabel.style.padding = '0px';
        loginUsernameLabel.style.height = '20px';
        loginUsernameLabel.style.paddingTop = '9px';
        loginUsernameLabel.style.paddingLeft = '8.5px';
        loginUsernameLabel.style.color = 'rgb(113, 118, 123)';
        loginUsername.style.border = '1px solid rgb(51, 54, 57)';
        loginUsername.style.outline = 'none';
    } else if (inputValue.length > 0) {
        loginBtnProfile.classList.add('login-btn-disable');
        loginUsernameLabel.style.display = 'block';
        loginUsernameLabel.style.fontSize = '13px';
        loginUsernameLabel.style.padding = '0px';
        loginUsernameLabel.style.height = '20px';
        loginUsernameLabel.style.paddingTop = '9px';
        loginUsernameLabel.style.paddingLeft = '8.5px';
        loginUsernameLabel.style.color = 'rgb(113, 118, 123)';
        loginUsername.style.border = '1px solid rgb(51, 54, 57)';
        loginUsername.style.outline = 'none';
    } else {
        loginBtnProfile.classList.add('login-btn-disable');
        loginUsernameLabel.style.display = 'block';
        loginUsernameLabel.style.fontSize = '17px';
        loginUsernameLabel.style.color = 'rgb(113, 118, 123)';
        loginUsernameLabel.style.paddingTop = '19px';
        loginUsername.style.outline = 'none';
        loginUsername.style.border = '1px solid rgb(51, 54, 57)';
    }
});

//LOGIN popup PASSWORD logic
loginBtnRevealPasswordMain.addEventListener('click', () => {
    loginBtnRevealPasswordMain.style.display = 'none';
    loginBtnNotRevealPasswordMain.style.display = 'flex';
    loginPasswordInput.type = 'text';
    loginPasswordInput.focus();
});

loginBtnNotRevealPasswordMain.addEventListener('click', () => {
    loginBtnRevealPasswordMain.style.display = 'flex';
    loginBtnNotRevealPasswordMain.style.display = 'none';
    loginPasswordInput.type = 'password';
    loginPasswordInput.focus();
});

loginPasswordInput.addEventListener('focus', () => {
    loginPasswordLabel.style.transition = 'font-size 0.2s, padding 0.2s, height 0.2s, color 0.2s, border 0.2s, outline 0.2s';
    loginPasswordLabel.style.fontSize = '13px';
    loginPasswordLabel.style.color = 'rgba(255,255,255, 0.6)';
    loginPasswordLabel.style.paddingTop = '9px'
    loginPassword.style.outline = '1px solid rgba(255,255,255, 0.6)';
    loginPassword.style.border = '1px solid rgba(255,255,255, 0.6)';
});

loginPasswordInput.addEventListener('blur', () => {
    const inputValue = loginUsernameInput.value;
    const passInputValue = loginPasswordInput.value;
    if (inputValue.length > 5 && passInputValue.length > 0) {
        loginBtnProfile.classList.remove('login-btn-disable');
        loginPasswordLabel.style.display = 'block';
        loginPasswordLabel.style.fontSize = '13px';
        loginPasswordLabel.style.padding = '0px';
        loginPasswordLabel.style.height = '20px';
        loginPasswordLabel.style.paddingTop = '9px';
        loginPasswordLabel.style.paddingLeft = '8.5px';
        loginPasswordLabel.style.color = 'rgb(113, 118, 123)';
        loginPassword.style.border = '1px solid rgb(51, 54, 57)';
        loginPassword.style.outline = 'none';
        loginBtnProfile.style.cursor = 'pointer';
    }
    else if (passInputValue.length > 0) {
        loginBtnProfile.classList.add('login-btn-disable');
        loginPasswordLabel.style.display = 'block';
        loginPasswordLabel.style.fontSize = '13px';
        loginPasswordLabel.style.padding = '0px';
        loginPasswordLabel.style.height = '20px';
        loginPasswordLabel.style.paddingTop = '9px';
        loginPasswordLabel.style.paddingLeft = '8.5px';
        loginPasswordLabel.style.color = 'rgb(113, 118, 123)';
        loginPassword.style.border = '1px solid rgb(51, 54, 57)';
        loginPassword.style.outline = 'none';
        loginBtnProfile.style.cursor = 'pointer';
    } else {
        loginBtnProfile.classList.add('login-btn-disable');
        loginPasswordLabel.style.display = 'block';
        loginPasswordLabel.style.fontSize = '17px';
        loginPasswordLabel.style.color = 'rgb(113, 118, 123)';
        loginPasswordLabel.style.paddingTop = '19px';
        loginPassword.style.outline = 'none';
        loginPassword.style.border = '1px solid rgb(51, 54, 57)';
    }
});

//REGISTER popup logic
loginRegisterBtn.addEventListener('click', () => {
    window.location.href = '/register';
});