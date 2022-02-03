let size = 1.4;
const makeBigger = () => {
   size +=0.3;
   document.querySelector(".content").style.fontSize = `${size}em`;
   document.querySelector("h1").style.fontSize = `${size+1}em`;

};

const makeSmaller = () => {
   size -=0.3;
   document.querySelector(".content").style.fontSize = `${size}em`;
   document.querySelector("h1").style.fontSize = `${size+1}em`;

};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

