//for SIGNUP popup logic
const loginSignupBtn = document.getElementById('login-register-btn');
const registerPopup = document.getElementById('register-popup');
const registerBackBtn = document.getElementById('register-back-btn');
const registerPopupCloseBtn = document.getElementById('register-popup-close-btn');
const registerBtnProfile = document.getElementById('register-btn-profile');
//for SIGNUP popup EMAIL logic
const registerEmailInput = document.getElementById('register-email-input');
const registerEmailLabel = document.getElementById('register-email-label');
const registerEmail = document.getElementById('register-email');
const registerEmailWarning = document.getElementById('register-email-warning');
//for SIGNUP popup EMAIL logic
const registerUsernameInput = document.getElementById('register-username-input');
const registerUsernameLabel = document.getElementById('register-username-label');
const registerUsername = document.getElementById('register-username');
const registerUsernameWarning = document.getElementById('register-username-warning');
//for SIGNUP popup PASSWORD logic
const registerBtnRevealPasswordMain = document.getElementById('register-btn-reveal-password-main');
const registerBtnNotRevealPasswordMain = document.getElementById('register-btn-not-reveal-password-main');
const registerPasswordInput = document.getElementById('register-password-input');
const registerPasswordLabel = document.getElementById('register-password-label');
const registerPassword = document.getElementById('register-password');
const registerPasswordWarning = document.getElementById('register-password-warning');
//for SIGNUP popup PASSWORD logic SECOND
const registerBtnRevealPasswordMainSecond = document.getElementById('register-btn-reveal-password-main-second');
const registerBtnNotRevealPasswordMainSecond = document.getElementById('register-btn-not-reveal-password-main-second');
const registerPasswordInputSecond = document.getElementById('register-password-input-second');
const registerPasswordLabelSecond = document.getElementById('register-password-label-second');
const registerPasswordSecond = document.getElementById('register-password-second');
const registerPasswordWarningSecond = document.getElementById('register-password-warning-second');



//SIGNUP popup logic
registerBackBtn.addEventListener('click', () => {
    window.history.go(-1);
})

registerPopupCloseBtn.addEventListener('click', () => {
    window.history.go(-2);
});



//SIGNUP popup EMAIL logic
registerEmailInput.addEventListener('focus', () => {
    const inputValue = registerEmailInput.value;
    if (inputValue.length > 0 && !inputValue.includes('@')) {
        registerEmailWarning.style.display = 'flex';
        registerEmailLabel.style.transition = 'color 0.2s';
        registerEmailLabel.style.color = 'rgb(244, 33,46)';
        registerEmail.style.border = '1px solid rgb(244, 33, 46)';
        registerEmail.style.outline = '1px solid rgb(244, 33, 46)';
    } else {
        registerEmailLabel.style.transition = 'font-size 0.2s, padding 0.2s, height 0.2s, color 0.2s, border 0.2s, outline 0.2s';
        registerEmailLabel.style.fontSize = '13px';
        registerEmailLabel.style.color = 'rgba(255,255,255, 0.6)';
        registerEmailLabel.style.paddingTop = '4px';
        registerEmail.style.border = '1px solid rgba(255,255,255, 0.6)';
        registerEmail.style.outline = '1px solid rgba(255,255,255, 0.6)';
    }
});

registerEmailInput.addEventListener('blur', () => {
    const inputValue = registerEmailInput.value;
    const passwordLength = registerPasswordInput.value.length;
    const passwordValue = registerPasswordInput.value
    const passwordSecondValue = registerPasswordInputSecond.value;
    const emailValue = registerEmailInput.value;
    const usernameValue = registerUsernameInput.value;

    if (passwordLength > 7 && passwordValue === passwordSecondValue && emailValue.includes('@') && usernameValue.length > 5) {
        registerBtnProfile.classList.remove('register-btn-disable');
        registerEmailWarning.style.display = 'flex';
        registerEmailLabel.style.transition = 'color 0.2s';
        registerEmailLabel.style.color = 'rgb(244, 33,46)';
        registerEmail.style.border = '1px solid rgb(244, 33, 46)';
        registerEmail.style.outline = 'none';
    }
    else if (inputValue.length > 0 && !inputValue.includes('@')) {
        registerBtnProfile.classList.add('register-btn-disable');
        registerEmailWarning.style.display = 'flex';
        registerEmailLabel.style.transition = 'color 0.2s';
        registerEmailLabel.style.color = 'rgb(244, 33,46)';
        registerEmail.style.border = '1px solid rgb(244, 33, 46)';
        registerEmail.style.outline = 'none';
    } else if (inputValue.length > 0) {
        registerBtnProfile.classList.add('register-btn-disable');
        registerEmailLabel.style.display = 'block';
        registerEmailLabel.style.fontSize = '13px';
        registerEmailLabel.style.padding = '0px';
        registerEmailLabel.style.height = '20px';
        registerEmailLabel.style.paddingTop = '4px';
        registerEmailLabel.style.paddingLeft = '8.5px';
        registerEmailLabel.style.color = 'rgb(113, 118, 123)';
        registerEmail.style.border = '1px solid rgb(51, 54, 57)';
        registerEmail.style.outline = 'none';
        registerEmailWarning.style.display = 'none';
    } else {
        registerBtnProfile.classList.add('register-btn-disable');
        registerEmailLabel.style.display = 'block';
        registerEmailLabel.style.fontSize = '17px';
        registerEmailLabel.style.color = 'rgb(113, 118, 123)';
        registerEmailLabel.style.paddingTop = '15px';
        registerEmail.style.outline = 'none';
        registerEmail.style.border = '1px solid rgb(51, 54, 57)';
    }
});

//SIGNUP popup USERNAME logic
registerUsernameInput.addEventListener('focus', () => {
    const inputValue = registerUsernameInput.value;
    if (inputValue.length > 0 && inputValue.length < 5) {
        registerUsernameWarning.style.display = 'flex';
        registerUsernameLabel.style.transition = 'color 0.2s';
        registerUsernameLabel.style.color = 'rgb(244, 33,46)';
        registerUsername.style.border = '1px solid rgb(244, 33, 46)';
        registerUsername.style.outline = '1px solid rgb(244, 33, 46)';
    } else {
        registerUsernameLabel.style.transition = 'font-size 0.2s, padding 0.2s, height 0.2s, color 0.2s, border 0.2s, outline 0.2s';
        registerUsernameLabel.style.fontSize = '13px';
        registerUsernameLabel.style.color = 'rgba(255,255,255, 0.6)';
        registerUsernameLabel.style.paddingTop = '4px';
        registerUsername.style.border = '1px solid rgba(255,255,255, 0.6)';
        registerUsername.style.outline = '1px solid rgba(255,255,255, 0.6)';
    }
});

registerUsernameInput.addEventListener('blur', () => {
    const inputValue = registerUsernameInput.value;
    const passwordLength = registerPasswordInput.value.length;
    const passwordValue = registerPasswordInput.value
    const passwordSecondValue = registerPasswordInputSecond.value;
    const emailValue = registerEmailInput.value;
    const usernameValue = registerUsernameInput.value;

    if (passwordLength > 7 && passwordValue === passwordSecondValue && emailValue.includes('@') && usernameValue.length > 5) {
        registerBtnProfile.classList.remove('register-btn-disable');
        registerUsernameWarning.style.display = 'flex';
        registerUsernameLabel.style.transition = 'color 0.2s';
        registerUsernameLabel.style.color = 'rgb(244, 33,46)';
        registerUsername.style.border = '1px solid rgb(244, 33, 46)';
        registerUsername.style.outline = 'none';
        registerUsernameWarning.style.display = 'none';
    }
    else if (inputValue.length > 0 && inputValue.length < 5) {
        registerBtnProfile.classList.add('register-btn-disable');
        registerUsernameWarning.style.display = 'flex';
        registerUsernameLabel.style.transition = 'color 0.2s';
        registerUsernameLabel.style.color = 'rgb(244, 33,46)';
        registerUsername.style.border = '1px solid rgb(244, 33, 46)';
        registerUsername.style.outline = 'none';
    } else if (inputValue.length === 0) {
        registerBtnProfile.classList.add('register-btn-disable');
        registerUsernameLabel.style.display = 'block';
        registerUsernameLabel.style.fontSize = '17px';
        registerUsernameLabel.style.color = 'rgb(113, 118, 123)';
        registerUsernameLabel.style.paddingTop = '15px';
        registerUsername.style.outline = 'none';
        registerUsername.style.border = '1px solid rgb(51, 54, 57)';
    } else {
        registerBtnProfile.classList.add('register-btn-disable');
        registerUsernameLabel.style.display = 'block';
        registerUsernameLabel.style.fontSize = '13px';
        registerUsernameLabel.style.padding = '0px';
        registerUsernameLabel.style.height = '20px';
        registerUsernameLabel.style.paddingTop = '4px';
        registerUsernameLabel.style.paddingLeft = '8.5px';
        registerUsernameLabel.style.color = 'rgb(113, 118, 123)';
        registerUsername.style.border = '1px solid rgb(51, 54, 57)';
        registerUsername.style.outline = 'none';
        registerUsernameWarning.style.display = 'none';
    }
});

//SIGNUP popup PASSWORD logic
registerBtnRevealPasswordMain.addEventListener('click', () => {
    registerBtnRevealPasswordMain.style.display = 'none';
    registerBtnNotRevealPasswordMain.style.display = 'flex';
    registerPasswordInput.type = 'text';
    registerPasswordInput.focus();
});

registerBtnNotRevealPasswordMain.addEventListener('click', () => {
    registerBtnRevealPasswordMain.style.display = 'flex';
    registerBtnNotRevealPasswordMain.style.display = 'none';
    registerPasswordInput.type = 'password';
    registerPasswordInput.focus();
});

registerPasswordInput.addEventListener('focus', () => {
    registerPasswordLabel.style.transition = 'font-size 0.2s, padding 0.2s, height 0.2s, color 0.2s, border 0.2s, outline 0.2s';
    registerPasswordLabel.style.fontSize = '13px';
    registerPasswordLabel.style.color = 'rgba(255,255,255, 0.6)';
    registerPasswordLabel.style.paddingTop = '4px';
    registerPassword.style.outline = '1px solid rgba(255,255,255, 0.6)';
    registerPassword.style.border = '1px solid rgba(255,255,255, 0.6)';
});

registerPasswordInput.addEventListener('blur', () => {
    const passInputValue = registerPasswordInput.value;
    const passwordLength = registerPasswordInput.value.length;
    const passwordValue = registerPasswordInput.value
    const passwordSecondValue = registerPasswordInputSecond.value;
    const emailValue = registerEmailInput.value;
    const usernameValue = registerUsernameInput.value;

    if (passwordLength > 7 && passwordValue === passwordSecondValue && emailValue.includes('@') && usernameValue.length > 5) {
        registerBtnProfile.classList.remove('register-btn-disable');
        registerPassword.style.outline = 'none';
        registerPassword.style.border = '1px solid rgb(51, 54, 57)';
        registerPasswordLabel.style.color = 'rgb(113,118,123';
        registerPasswordWarning.style.display = 'none';
        registerPasswordInput.addEventListener('focus', () => {
            registerPassword.style.outline = '1px solid rgba(255,255,255, 0.6)';
            registerPassword.style.border = '1px solid rgba(255,255,255, 0.6)';
            registerPasswordLabel.style.color = 'rgba(255,255,255, 0.6)';
        })
    }
    else if (passInputValue.length > 0) {
        registerBtnProfile.classList.add('register-btn-disable');
        registerPasswordLabel.style.display = 'block';
        registerPasswordLabel.style.fontSize = '13px';
        registerPasswordLabel.style.padding = '0px';
        registerPasswordLabel.style.height = '20px';
        registerPasswordLabel.style.paddingTop = '4px';
        registerPasswordLabel.style.paddingLeft = '8.5px';
        registerPasswordLabel.style.color = 'rgb(113, 118, 123)';
        registerPassword.style.border = '1px solid rgba(255,255,255, 0.6)';
        registerPassword.style.outline = 'none';
        if (passInputValue.length < 8) {
            registerBtnProfile.classList.add('register-btn-disable');
            registerPassword.style.outline = 'none';
            registerPassword.style.border = '1px solid rgb(244, 33, 46)';
            registerPasswordLabel.style.color = 'rgb(244,33,46)';
            registerPasswordWarning.style.display = 'block';
            registerPasswordInput.addEventListener('focus', () => {
                registerPassword.style.border = '1px solid rgb(244, 33, 46)';
                registerPassword.style.outline = '1px solid rgb(244, 33, 46)';
                registerPasswordLabel.style.color = 'rgb(244, 33, 46)';
            })
        } else {
            registerBtnProfile.classList.add('register-btn-disable');
            registerPassword.style.outline = 'none';
            registerPassword.style.border = '1px solid rgb(51, 54, 57)';
            registerPasswordLabel.style.color = 'rgb(113,118,123';
            registerPasswordWarning.style.display = 'none';
            registerPasswordInput.addEventListener('focus', () => {
                registerPassword.style.outline = '1px solid rgba(255,255,255, 0.6)';
                registerPassword.style.border = '1px solid rgba(255,255,255, 0.6)';
                registerPasswordLabel.style.color = 'rgba(255,255,255, 0.6)';
            })
        }
    } else {
        registerBtnProfile.classList.add('register-btn-disable');
        registerPasswordLabel.style.display = 'block';
        registerPasswordLabel.style.fontSize = '17px';
        registerPasswordLabel.style.color = 'rgb(113, 118, 123)';
        registerPasswordLabel.style.paddingTop = '15px';
        registerPassword.style.outline = 'none';
        registerPassword.style.border = '1px solid rgb(51, 54, 57)';
    }
});

//SIGNUP popup PASSWORD logic SECOND
registerBtnRevealPasswordMainSecond.addEventListener('click', () => {
    registerBtnRevealPasswordMainSecond.style.display = 'none';
    registerBtnNotRevealPasswordMainSecond.style.display = 'flex';
    registerPasswordInputSecond.type = 'text';
    registerPasswordInputSecond.focus();
});

registerBtnNotRevealPasswordMainSecond.addEventListener('click', () => {
    registerBtnRevealPasswordMainSecond.style.display = 'flex';
    registerBtnNotRevealPasswordMainSecond.style.display = 'none';
    registerPasswordInputSecond.type = 'password';
    registerPasswordInputSecond.focus();
});

registerPasswordInputSecond.addEventListener('focus', () => {
    registerPasswordLabelSecond.style.transition = 'font-size 0.2s, padding 0.2s, height 0.2s, color 0.2s, border 0.2s, outline 0.2s';
    registerPasswordLabelSecond.style.fontSize = '13px';
    registerPasswordLabelSecond.style.color = 'rgba(255,255,255, 0.6)';
    registerPasswordLabelSecond.style.paddingTop = '4px';
    registerPasswordSecond.style.outline = '1px solid rgba(255,255,255, 0.6)';
    registerPasswordSecond.style.border = '1px solid rgba(255,255,255, 0.6)';
});

registerPasswordInputSecond.addEventListener('blur', () => {
    const passInputValueSecond = registerPasswordInputSecond.value;
    const passInputValue = registerPasswordInput.value;
    const passwordLength = registerPasswordInput.value.length;
    const passwordValue = registerPasswordInput.value
    const passwordSecondValue = registerPasswordInputSecond.value;
    const emailValue = registerEmailInput.value;
    const usernameValue = registerUsernameInput.value;

    if (passwordLength > 7 && passwordValue === passwordSecondValue && emailValue.includes('@') && usernameValue.length > 5) {
        registerBtnProfile.classList.remove('register-btn-disable');
        registerPasswordSecond.style.outline = 'none';
        registerPasswordSecond.style.border = '1px solid rgb(51, 54, 57)';
        registerPasswordLabelSecond.style.color = 'rgb(113,118,123';
        registerPasswordWarningSecond.style.display = 'none';
        registerPasswordInputSecond.addEventListener('focus', () => {
            registerPasswordSecond.style.outline = '1px solid rgba(255,255,255, 0.6)';
            registerPasswordSecond.style.border = '1px solid rgba(255,255,255, 0.6)';
            registerPasswordLabelSecond.style.color = 'rgba(255,255,255, 0.6)';
        })
    }
    else if (passInputValueSecond.length > 0) {
        registerBtnProfile.classList.add('register-btn-disable');
        registerPasswordLabelSecond.style.display = 'block';
        registerPasswordLabelSecond.style.fontSize = '13px';
        registerPasswordLabelSecond.style.padding = '0px';
        registerPasswordLabelSecond.style.height = '20px';
        registerPasswordLabelSecond.style.paddingTop = '4px';
        registerPasswordLabelSecond.style.paddingLeft = '8.5px';
        registerPasswordLabelSecond.style.color = 'rgb(113, 118, 123)';
        registerPasswordSecond.style.border = '1px solid rgba(255,255,255, 0.6)';
        registerPasswordSecond.style.outline = 'none';
        if (passInputValueSecond.length < 8) {
            registerPasswordSecond.style.outline = 'none';
            registerPasswordSecond.style.border = '1px solid rgb(244, 33, 46)';
            registerPasswordLabelSecond.style.color = 'rgb(244,33,46)'
            if (passInputValueSecond === passInputValue) {
                registerPasswordWarningSecond.style.display = 'none';

            } else {
                registerPasswordWarningSecond.style.display = 'block';
            }
            registerPasswordInputSecond.addEventListener('focus', () => {
                registerPasswordSecond.style.border = '1px solid rgb(244, 33, 46)';
                registerPasswordSecond.style.outline = '1px solid rgb(244, 33, 46)';
                registerPasswordLabelSecond.style.color = 'rgb(244, 33, 46)';
                if (passInputValueSecond === passInputValue) {
                    registerPasswordWarningSecond.style.display = 'none';
                } else {
                    registerPasswordWarningSecond.style.display = 'block';
                }
            })
        } else {
            registerBtnProfile.classList.add('register-btn-disable');
            registerPasswordSecond.style.outline = 'none';
            registerPasswordSecond.style.border = '1px solid rgb(51, 54, 57)';
            registerPasswordLabelSecond.style.color = 'rgb(113,118,123)';
            if (passInputValueSecond === passInputValue) {
                registerPasswordWarningSecond.style.display = 'none';
            } else {
                registerPasswordWarningSecond.style.display = 'block';
                registerPasswordSecond.style.border = '1px solid rgb(244, 33, 46)';
                registerPasswordSecond.style.outline = 'none';
                registerPasswordLabelSecond.style.color = 'rgb(244, 33, 46)';
            }
            registerPasswordInputSecond.addEventListener('focus', () => {
                registerPasswordSecond.style.outline = 'none';
                registerPasswordSecond.style.border = '1px solid rgba(255,255,255, 0.6)';
                registerPasswordLabelSecond.style.color = 'rgba(255,255,255, 0.6)';
                if (passInputValueSecond === passInputValue) {
                    registerPasswordWarningSecond.style.display = 'none';
                } else {
                    registerPasswordWarningSecond.style.display = 'block';
                    registerPasswordSecond.style.border = '1px solid rgb(244, 33, 46)';
                    registerPasswordSecond.style.outline = '1px solid rgb(244, 33, 46)';
                    registerPasswordLabelSecond.style.color = 'rgb(244, 33, 46)';
                }
            })
        }
    } else {
        registerBtnProfile.classList.add('register-btn-disable');
        registerPasswordLabelSecond.style.display = 'block';
        registerPasswordLabelSecond.style.fontSize = '17px';
        registerPasswordLabelSecond.style.color = 'rgb(113, 118, 123)';
        registerPasswordLabelSecond.style.paddingTop = '15px';
        registerPasswordSecond.style.outline = 'none';
        registerPasswordSecond.style.border = '1px solid rgb(51, 54, 57)';
        registerPasswordWarningSecond.style.display = 'none';
    }
});