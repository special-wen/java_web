'use strict'

/*
window.onload = function createSate() {
   let image = document.createElement('img');
   image.src = '../System_manager/image/1.png';
   document.getElementById('seat').appendChild(image);
}

*/

window.onload = function createSate() {
    for(let i = 1;i<=8;i++){
        for(let j = 1;j<=8;j++){
            let sateImage = document.createElement('img');
            let num = document.createElement('span');
            sateImage.src = '../System_manager/image/1.png';
            num.innerText = i+','+j;
            sateImage.setAttribute("class","sate");
            document.getElementById('seat').appendChild(sateImage);
            document.getElementById('seat').appendChild(num);
        }
        let br = document.createElement('br');

        document.getElementById('seat').appendChild(br);
    }
}

//function changeSate() {

//}