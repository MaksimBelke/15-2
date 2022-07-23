const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();
let index = 0;
setInterval(()=> {
  if (index < 3){
    index++;
  }
  else index = 0;
  hideTabContent();
  showTabContent(index);
},1500);

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        index = i
        hideTabContent();
        showTabContent(index);
      }
    });
  }
});

const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

console.log(modal, "modal");
console.log(modalTrigger, " modalTrigger");
console.log(closeModalBtn, " closeModalBtn");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
    console.log(event.target);
  }
});

closeModalBtn.addEventListener("click", closeModal);

const forms = document.querySelector("form");
const message = {
  loading: "Загрузка",
  success: "успех",
  fail: "ошибка",
};

// forms.forEach((item) => {
//   postData(item);
// });
const html = document.querySelector("html");

window.addEventListener("scroll", () => {
    if(Math.floor(html.scrollHeight - html.scrollTop - html.clientHeight)=== 0) {
        openModal();
    }
})

const postData = (form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const messageBlock = document.createElement("div");
    messageBlock.textContent = message.loading;
    form.append(messageBlock);

    const request = new XMLHttpRequest();
    request.open("POST", "server.php");
    request.setRequestHeader("Content-type", "application/json");

    const formData = new FormData(form);

    const object = {};

    formData.forEach((item, i) => {
      object[i] = item;
    });

    const json = JSON.stringify(object);

    request.send(json);

    request.addEventListener("load", () => {
      if (request.status === 200) {
        console.log(request.response);
        messageBlock.textContent = message.success;
      } else {
        messageBlock.textContent = message.fail;
      }
    });
  });
};