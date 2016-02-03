var images = ["../img/c1.png", "../img/c2.png", "../img/c3.png", "../img/c4.png", "../img/c5.png",
              "../img/c7.png", "../img/c8.png", "../img/c9.png", "../img/c10.png", "../img/c11.png",
              "../img/c12.png", "../img/c13.png"]
var viewportWidth = $(window).width();
var viewportHeight = $(window).height();
const spriteHeight = viewportWidth / (5 * 3);


window.onload = function() {
    for (i = 0; i < viewportHeight / spriteHeight; i++) {
        this.img = document.createElement("img");
        this.img.src = 'url(/' + images[Math.floor(Math.random() * images.length)];
        this.img.style.height = spriteHeight.toString() + "px";
        parent = document.getElementById("left");
        parent.appendChild(this.img);
    }
    for (i = 0; i < viewportHeight / spriteHeight; i++) {
        this.img = document.createElement("img");
        this.img.src = 'url(/' + images[Math.floor(Math.random() * images.length)];
        this.img.style.height = spriteHeight.toString() + "px";
        this.img.className = "border-sprite";
        parent = document.getElementById("right");
        parent.appendChild(this.img);
    }
}