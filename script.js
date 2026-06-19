const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function heartX(t){
    return 16 * Math.pow(Math.sin(t), 3);
}

function heartY(t){
    return 13 * Math.cos(t)
        - 5 * Math.cos(2 * t)
        - 2 * Math.cos(3 * t)
        - Math.cos(4 * t);
}

let points = [];
let angle = 0;

function drawHeart() {

    if(angle < Math.PI * 2){

        const x = heartX(angle) * 18;
        const y = heartY(angle) * 18;

        points.push({
            x: canvas.width / 2 + x,
            y: canvas.height / 2 - y
        });

        angle += 0.03;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    points.forEach(point => {

        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.lineTo(point.x, point.y);
        ctx.strokeStyle = "rgba(255, 0, 0, 0.2)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(point.x, point.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#ff0000";
        ctx.shadowBlur = 25;
        ctx.shadowColor = "#ff0000";
        ctx.fill();
    });

    requestAnimationFrame(drawHeart);
}

drawHeart();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});