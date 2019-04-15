window.addEventListener('load', function() {
    var tablist = document.querySelectorAll('.tab-item');
    if(tablist.length > 0) {
        for(var i= 0; i<tablist.length;i++) {
            tablist[i].addEventListener('click', function() {
                var tabId = this.getAttribute('data-tab');
                for(var j=0;j<tablist.length;j++){
                    tablist[j].classList.remove('active');
                    var tabId1 = tablist[j].getAttribute('data-tab');
                    if(document.getElementById(tabId1).classList.contains('active')) {
                        document.getElementById(tabId1).classList.remove('active');
                    }
                }
                var tabContainer = document.getElementById(tabId);
                if(!tabContainer.classList.contains('active')) {
                    tabContainer.classList.add('active');
                }
                if(!this.classList.contains('active')) {
                    this.classList.add('active');
                }
            })
        }
    }

    function getValidateRegister(loginContainer) {
        var container = document.getElementById(loginContainer);
        var emailReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var url = location.href;
        var isPasswordValid,isUsernameValid,isEmailValid,isContactValid,username,contact,email,password,isValid,info;
        username = container.querySelector('.js-username').value;
        password = container.querySelector('.js-password').value;
        contact = container.querySelector('.js-contact').value;
        email = container.querySelector('.js-email').value;
        isUsernameValid = username.length > 8 ? true : false;
        isPasswordValid = password.length > 8 ? true : false;
        isEmailValid = emailReg.test(email);
        isContactValid = contact.length == 10 ? true : false; 
        if(isUsernameValid && isPasswordValid && isEmailValid && isContactValid) {
            isValid = true;
        }
        else {
            isValid = false;
            (!isUsernameValid) ? container.querySelector('.js-username').closest('.field').classList.add('error') : container.querySelector('.js-username').closest('.field').classList.remove('error');
            (!isEmailValid) ? container.querySelector('.js-email').closest('.field').classList.add('error') : container.querySelector('.js-email').closest('.field').classList.remove('error');
            (!isContactValid) ? container.querySelector('.js-contact').closest('.field').classList.add('error') : container.querySelector('.js-contact').closest('.field').classList.remove('error');
            (!isPasswordValid) ? container.querySelector('.js-password').closest('.field').classList.add('error') : container.querySelector('.js-password').closest('.field').classList.remove('error');
        }

        info = {
            isValid : isValid,
            username: username,
            password: password,
            email: email,
            contact: contact,
            url: url
        }

        return info;
    }

    function getValidateLogin(loginContainer) {
        var container = document.getElementById(loginContainer);
        var isPasswordValid,isUsernameValid,username,password,isValid,info;
        var url = location.href;
        console.log(url)
        username = container.querySelector('.js-username').value;
        password = container.querySelector('.js-password').value;
        isUsernameValid = username.length > 8 ? true : false;
        isPasswordValid = password.length > 8 ? true : false;
        if(isUsernameValid && isPasswordValid) {
            isValid = true;
        }
        else {
            isValid = false;
            (!isUsernameValid) ? container.querySelector('.js-username').closest('.field').classList.add('error') : container.querySelector('.js-username').closest('.field').classList.remove('error');
            (!isPasswordValid) ? container.querySelector('.js-password').closest('.field').classList.add('error') : container.querySelector('.js-password').closest('.field').classList.remove('error');        
        }

        info = {
            isValid : isValid,
            username: username,
            password: password,
            url: url
        }

        return info;
    }

    var submitBtn = document.querySelectorAll('.submit-btn');
    for(var i= 0; i< submitBtn.length; i++) {
        submitBtn[i].addEventListener('click', function() {
            var authLink;
            var popupType = this.getAttribute('data-type');
            var authType = this.closest('.tabs-container').getAttribute('id');
            if(popupType === "login" && authType === "user" ) {
                authLink = "loginuser";
            }
            else if(popupType === "login" && authType === "doctor"){
                authLink = "logindoctor";
            }
            else if(popupType === "signup" && authType === "userreg") {
                authLink = "registeruser";
            }
            else {
                authLink = "registerdoctor"
            }

            if(popupType === "login") {
                var info = getValidateLogin(authType);
            }
            else if(popupType == "signup") {
                var info = getValidateRegister(authType);
            }
            if(true) {
                $.post("http://localhost:9003/"+authLink, {...info}, function(data) {        
                    if(data==='done')           
                    {
                        window.location.href="/";
                        alert('email id verified login again !!!');
                    }
                    else {
                        window.location.href="/";
                        alert('user invalid or unverified');
                    }
                });
            }
        })
    }
})


// $(document).ready(function () {
//     $('.js-auth-btn').on('click', function() {
//         var btn = this;
//         var popupAttr = $(btn).attr('data-popup');
//         $('.auth-popup-wrapper').addClass('active');
//         $('#'+popupAttr).addClass('active');
//         if(!$('#'+ popupAttr).find('.tab-item:first').hasClass('active')) {
//             $('#'+ popupAttr).find('.tab-item:first').addClass('active');
//         }
//         if(!$('#'+ popupAttr).find('.tabs-container:first').addClass('active')) {
//             $('#'+ popupAttr).find('.tabs-container:first').addClass('active');
//         }
//         $('.black-overlay').on('click', function() {
//             $('#'+popupAttr).removeClass('active');
//             $(this).closest('.auth-popup-wrapper').removeClass('active');
//             $('.auth-popup-wrapper').find('.tab-item').removeClass('active');
//             $('.auth-popup-wrapper').find('.tabs-container').removeClass('active');
//         })
//     })
// });

