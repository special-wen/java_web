'use strict'

window.onload = function createSate() {
    for(let i = 1;i<=8;i++){
        for(let j = 1;j<=8;j++){
            let sateImage = document.createElement('img');
            let num = document.createElement('span');
            sateImage.src = '../System_manager/image/1.png';
            num.innerText = i+','+j;
            sateImage.setAttribute("class","sate");
            sateImage.setAttribute('data-toggle','modal');
            sateImage.setAttribute('data-target','#myModal');
            /*sateImage.addEventListener('click',function () {
                alert(i+','+j);
            })*/
            //sateImage.setAttribute('onclick','sate(this)');
            document.getElementById('seat').appendChild(sateImage);
            document.getElementById('seat').appendChild(num);
        }
        let br = document.createElement('br');

        document.getElementById('seat').appendChild(br);
    }
}

function changeState() {
    
}
