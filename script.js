"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//For opening the modal on click
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

// For closing the modal window by clicking on close-modal class(button)

const closeModal = function () {
  btnCloseModal.addEventListener("click", function () {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  });
};

btnCloseModal.addEventListener("click", closeModal);

//For closing modal window when clicking outside of the window(i.e by clicking on overlay class)

overlay.addEventListener("click", function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
});

/// For closing modal via Esc key on keyboard

document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  }
});
