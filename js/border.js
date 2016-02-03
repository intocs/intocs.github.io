var images = ["../img/c1.png", "../img/c2.png", "../img/c3.png", "../img/c4.png", "../img/c5.png",
              "../img/c7.png", "../img/c8.png", "../img/c9.png", "../img/c10.png", "../img/c11.png",
              "../img/c12.png", "../img/c13.png", "../img/c14.png"]
window.onload = function() {
    this.img = document.createElement("img");
    this.img.src = 'url(images/' + images[Math.floor(Math.random() * images.length)];
    src = document.getElementById('content');
    src.appendChild(this.img);
}