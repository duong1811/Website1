function checkVisibleElements() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const position = section.getBoundingClientRect();
        const isVisible = (position.top <= 2940);
        const isVisible2 = (position.top >= 0 && position.y <= window.innerHeight/2);
        if (isVisible2) {
          $('.nav-link').removeClass('active')
          let name = section.getAttribute('name')
          $("#"+name).addClass('active')
        }
        if (isVisible) {
            if (window.innerWidth >= 776) {
                $("#logo").css({
                    'height': '90px'
                });
                $(".menu .nav-link").css({
                    'font-size': '25px',
                    'font-weight': 'normal',
                })
            } 

        } else {
            $(".menu .nav-link, #logo, .menu, .logo").attr("style", "")
        }
        if (position.top <= 2900) {
            if($("#contact1").attr('class') === 'nav-link active'){
                $('.button-top').addClass("d-none")
            }else{
              $('.button-top').removeClass("d-none");
            }
        } else {
            $('.button-top').addClass("d-none")
        }
    });
}
window.addEventListener('scroll', checkVisibleElements);
window.addEventListener('load', checkVisibleElements);
function sendMail() {
    emailjs.init("beQJO3UD2fnHcUuDq");
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        telephone: document.getElementById("telephone").value
    };

    const serviceID = "service_t8h4ege";
    const templateID = "template_2o83j8n";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("telephone").value = "";
            console.log(res);
            $(".notification").removeClass("d-none");
            setTimeout(function () {
                $(".notification").addClass("d-none");
            }, 300)
        })
        .catch(err => console.log(err));

}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Delete cookie
function deleteCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=;" + expires + ";path=/";
}

// Read cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    $("#cookieNotice").css({"display" : "none"})
  } else {
    $("#cookieNotice").css({"display" : "block"})
  }
}
// Set cookie consent
function acceptCookieConsent() {
    deleteCookie('username');
    setCookie("username", true, 30);
    document.getElementById("cookieNotice").style.display = "none";
}
function rejectCookieConsent() {
    document.getElementById("cookieNotice").style.display = "none";
}



