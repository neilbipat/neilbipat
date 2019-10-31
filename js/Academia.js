console.log('hello');

// let for the images over at html
let imgOne = document.querySelector('#img1');
let imgTwo = document.querySelector('#img2');
let imgThree = document.querySelector('#img3');
let imgFour = document.querySelector('#img4');
let imgFive = document.querySelector('#img5');
let imgSix = document.querySelector('#img6');

// let for the main Modal and the Img port where the images will show in the dock
let mainModal = document.querySelector('#picModal');
let imgInModal = document.querySelector('#showImgs');

//close button
let button = document.querySelector('.close');



// Event Listeners to grow picture
imgOne.addEventListener('click', growPicture);
imgTwo.addEventListener('click', growPicture);
imgThree.addEventListener('click', growPicture);
imgFour.addEventListener('click', growPicture);
imgFive.addEventListener('click', growPicture);
imgSix.addEventListener('click', growPicture);


// Click the pictures and it opens the modal and grows the pic
function growPicture(){
  mainModal.style.display = 'block';
  imgInModal.src = this.src;
}

// Closes the modal by clicking anywhere off the picture or button
window.onclick = function (e) {
  if (e.target == picModal || e.target == button) {
    picModal.style.display = "none";
  }
}
