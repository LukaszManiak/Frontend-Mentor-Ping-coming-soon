'use strict';

const input = document.querySelector('.input');
const notifyBtn = document.querySelector('.notify-btn');
const inputBox = document.querySelector('.input-container');
const msgElement = document.querySelector('.alert-box');
const modalBox = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

const checkInput = function () {
  let inputVal = input.value;
  let msg;
  const valid = /\S+@\S+\.\S+/;
  //empty input
  if (!inputVal) {
    showMsg('Whoops! It looks like you forgot to add your email');
    msgElement.classList.remove('hidden');
    //valid email adress
  } else if (!valid.test(inputVal)) {
    showMsg('Please provide a valid email address');
    msgElement.classList.remove('hidden');
  } else {
    hideMsg();
    showModal();
  }
};

const showMsg = function (msg) {
  msgElement.classList.add('alert');
  msgElement.innerText = msg;
};

const hideMsg = function () {
  msgElement.classList.add('hidden');
};

const showModal = function () {
  modalBox.classList.remove('hidden');
  modalBox.classList.add('drop');
};

const hideModal = function () {
  modalBox.classList.add('hidden');
};

closeModal.addEventListener('click', hideModal);

notifyBtn.addEventListener('click', checkInput);
