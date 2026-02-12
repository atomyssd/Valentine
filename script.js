"use strict";

// 1. Массив твоих грустных картинок (для img-1)
const sadImages = [
  "./img/sad1.webp",
  "./img/sad2.webp",
  "./img/sad3.webp",
  "./img/sad4.webp",
  "./img/sad5.webp",
];

// 2. Массив твоих счастливых картинок (покажутся обе в конце)
const happyImages = [
  "./img/happy1.webp",
  "./img/happy2.webp"
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img1 = document.getElementById("img-1");
const img2 = document.getElementById("img-2");

let noCount = 0;
let yesButtonSize = 1;

function generateMessage(noCount) {
  const messages = [
    "NO 😔",
    "Are you sure? 🥺",
    "Kitten please 😓",
    "Don't do this 😭",
    "You're breaking my heart 💔",
    "Cry... 😭💔",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

// КЛИК ПО "NO"
noBtn.addEventListener("click", () => {
  noCount++;
  
  // Скрываем вторую картинку, чтобы первая была по центру
  img2.style.display = "none";
  
  // Меняем первую картинку на грустную
  const imageIndex = Math.min(noCount, sadImages.length - 1);
  img1.src = sadImages[imageIndex];
  
  // Кнопка "Yes" растет
  yesButtonSize += 0.4;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
  
  // Текст кнопки "No"
  noBtn.innerHTML = generateMessage(noCount);
});

// КЛИК ПО "YES"
yesBtn.addEventListener("click", () => {
  title.innerHTML = "YEEAAH! I LOVE YOU, KATEN!! 💗";
  btnContainer.classList.add("hidden");
  
  // 1. Принудительно показываем оба элемента
  img1.style.display = "block";
  img2.style.display = "block";
  
  // 2. Устанавливаем одну и ту же картинку для обоих
  // Мы берем первую картинку из массива happyImages
  const finalPhoto = happyImages[0]; 
  
  img1.src = finalPhoto;
  img2.src = finalPhoto;
  
  // 3. Немного увеличиваем для красоты
  img1.style.transform = "scale(1.1)";
  img2.style.transform = "scale(1.1)";
});