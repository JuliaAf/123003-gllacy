var link=document.querySelector(".feedback-link");var popup=document.querySelector(".feedback-form");var close=popup.querySelector(".feedback-close");var login=popup.querySelector("[type=text]");var email=popup.querySelector("[type=email]");var form=popup.querySelector("form");var storage=localStorage.getItem("login");var overlay=document.querySelector(".overlay");link.addEventListener("click",function(event){event.preventDefault();popup.classList.add("feedback-form-open");overlay.classList.add("overlay-open");if(storage){login.value=storage;email.focus();}else{login.focus();}});close.addEventListener("click",function(event){event.preventDefault();popup.classList.remove("feedback-form-open");popup.classList.remove("feedback-error");overlay.classList.remove("overlay-open");});form.addEventListener("submit",function(event){if(!login.value||!email.value){event.preventDefault();popup.classList.remove("feedback-error");popup.offsetWidth=popup.offsetWidth;popup.classList.add("feedback-error");}else{localStorage.setItem("login",login.value);}});window.addEventListener("keydown",function(event){if(event.keyCode===27){if(popup.classList.contains("feedback-form-open")){popup.classList.remove("feedback-form-open");popup.classlist.remove("feedback-error");overlay.classList.remove("overlay-open");}}});
