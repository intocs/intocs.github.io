const NUM_IMAGES = 13;

var imageURLs = Array(NUM_IMAGES).fill().map(function(n, i) {
    return `img/c${i + 1}.png`;
});

function getRandomImgURL() {
    return imageURLs[ Math.floor(Math.random() * NUM_IMAGES) ];
}

var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

// constants below are 5: ratio of width to page, 3: ratio of height to width
const spriteHeight = viewportWidth / (5 * 3);


window.addEventListener("load", function() {
    for (i = 0; i < (viewportHeight - spriteHeight) / spriteHeight; i++) {

        var imgLeft  = document.createElement("img"),
            imgRight = document.createElement("img");

        imgLeft.src = getRandomImgURL();
        imgRight.src = getRandomImgURL();
        imgLeft.style.height = imgRight.style.height = `${ spriteHeight }px`;

        imgRight.className = "border-sprite";

        $("#left").append(imgLeft);
        $("#right").append(imgRight);

    }
});
