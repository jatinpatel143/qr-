let from = document.querySelector("form");
let input = document.querySelector("input");
let select = document.querySelector("select");
let img = document.querySelector("img");
// let a = document.querySelector("a")

let blob;

const qrcode = async (e) => {
  e.preventDefault();
  const patl = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`
  );
  blob = await patl.blob();
  blob = URL.createObjectURL(blob);
  img.setAttribute("src", patl.url);
  from.reset();
};


btn.addEventListener("click", () => {
  let a = document.createElement("a");
  a.download = `${input.value}.png`;
  a.href = blob;
  a.click();
});

from.addEventListener("submit", qrcode);
