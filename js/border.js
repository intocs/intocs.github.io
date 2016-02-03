const NUM_IMAGES = 13;
var images = [];

for (var i = 0; i < 13; i++) {
    images.push(`../img/c${i + 1}.png`);
}

var viewportWidth = $(window).width();
var viewportHeight = $(window).height();

const spriteHeight = viewportWidth / (5 * 3);


window.onload = function() {
    for (i = 0; i < viewportHeight / spriteHeight; i++) {
        var img = document.createElement("img");
        img.src = 'url(/' + images[Math.floor(Math.random() * images.length)];
        img.style.height = spriteHeight.toString() + "px";
        parent = document.getElementById("left");
        parent.appendChild(img);

        img = document.createElement("img");
        img.src = 'url(/' + images[Math.floor(Math.random() * images.length)];
        img.style.height = spriteHeight.toString() + "px";
        this.img.className = "border-sprite";
        parent = document.getElementById("right");
        parent.appendChild(img);
    }
}