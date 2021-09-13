const images = [
    "image/fancy-carousel (1).jpg",
    "image/fancy-carousel (2).jpg",
    "image/fancy-carousel (3).jpg",
    "image/fancy-carousel (4).jpg",
    "image/fancy-carousel (5).jpg",
    "image/fancy-carousel (6).jpg",
    "image/fancy-carousel (7).jpg",
    "image/fancy-carousel (8).jpg",
    "image/fancy-carousel (9).jpg",
    "image/fancy-carousel (10).jpg",
    "image/fancy-carousel (11).jpg",
    "image/fancy-carousel (12).jpg",
]
let imgIndex = 0;
let imgContainer = document.getElementById('img-container');
setInterval(()=>{
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgContainer.setAttribute('src', imgUrl);
    imgIndex++;
    console.log(imgUrl);
},1000)