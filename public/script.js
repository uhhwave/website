const card = document.getElementById("card");

let isDragging = false;
let offsetX, offsetY;
card.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - card.getBoundingClientRect().left;
    offsetY = e.clientY - card.getBoundingClientRect().top;
    card.style.cursor = 'none';
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        card.style.left = `${e.clientX - offsetX}px`;
        card.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    card.style.cursor = 'none';
});
const cursor = document.querySelector('#custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
    cursor.style.visibility = 'visible';
});

const hoverElements = document.querySelectorAll('a, button, .hover-target');

hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        document.body.classList.add('hover-grow');
    });

    element.addEventListener('mouseleave', () => {
        document.body.classList.remove('hover-grow');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in-visible');
        }, index * 500);
    });
});

const canvas = document.getElementById("rainCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Raindrop {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.length = Math.random() * 20 + 10;
        this.speed = Math.random() * 5 + 2;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.width = Math.random() + 0.5;
    }

    update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
            this.y = -this.length;
            this.x = Math.random() * canvas.width;
        }
    }

    draw() {
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = this.width;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.y + this.length);
        ctx.stroke();
    }
}

const raindrops = [];
for (let i = 0; i < 300; i++) {
    raindrops.push(new Raindrop());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    raindrops.forEach(raindrop => {
        raindrop.update();
        raindrop.draw();
    });
    requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});