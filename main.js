var signBtn = document.getElementById('btn');
var input = document.getElementById('txt');

signBtn.addEventListener('click', function() {
    input.value = '';
});

let image = document.getElementById('slide-img');
let images = ['1.png', '2.png', '3.jpg', '4.jpg', '5.jpg']

setInterval(function(){
    let random = Math.floor(Math.random() * 5);
    image.src = images[random];
}, 3000)