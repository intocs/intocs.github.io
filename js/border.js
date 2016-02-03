const NUM_IMAGES = 13;
var images = [];

for (var i = 0; i < NUM_IMAGES; i++) {
    images.push(`../img/c${i + 1}.png`);
}

var getRandomImgURL = () => images[Math.floor(Math.random() * NUM_IMAGES)];

var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

const spriteHeight = viewportWidth / (5 * 3);


window.onload = function() {
    for (i = 0; i < viewportHeight / spriteHeight; i++) {

        var imgLeft = document.createElement("img"),
            imgRight = document.createElement("img");

        imgLeft.src = `url(\/${getRandomImgURL()}`;
        imgRight.src = `url(\/${getRandomImgURL()}`;
        imgLeft.style.height = imgRight.style.height = `${spriteHeight.toString()}px`;

        imgRight.className = "border-sprite";

        document.querySelector("#left").appendChild(imgLeft);
        document.querySelector("#right").appendChild(imgRight);

    }
}
