var link = document.querySelector(".btn_feedback");
var btn_close = document.querySelector(".close");
var popap = document.querySelector(".modal_overlay");
var login = popap.querySelector("input[id='feed_name_id']");
var password = popap.querySelector("input[id='feed_mail_id']");
var storage = localStorage.getItem("login");
var feedback_form = popap.querySelector(".feedback_form");
var form = popap.querySelector("form");
link.addEventListener("click", function(evt)  {
  evt.preventDefault();
  popap.classList.add("modal_overlay_show");
  console.log("work");
  if(storage)  {
    login.value = storage;
  }
    login.focus();
});
btn_close.addEventListener("click", function()  {
  popap.classList.remove("modal_overlay_show");
  feedback_form.classList.remove("modal_error");
});
form.addEventListener("submit", function(evt)  {
  if(!login.value || !password.value)  {
    evt.preventDefault();
    feedback_form.classList.remove("modal_error");
    feedback_form.offsetWidth =  feedback_form.offsetWidth;
    feedback_form.classList.add("modal_error");
  }
  else  {
    localStorage.setItem("login",login.value);
  }
});
window.addEventListener("keydown", function(evt)  {
  if(evt.keyCode === 27)  {
    if(popap.classList.contains("modal_overlay_show"))  {
      popap.classList.remove("modal_overlay_show");
      feedback_form.classList.remove("modal_error");
    }
  }
});




