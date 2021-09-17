
// position on clock: (totalRadians / totalHours) * position
// note that position 0 is 3 o'clock not 12 o'clock
const totalRadians = 2.0;
const totalHours = 12;
const positionOffset = +9;
const clockPositionAngle = 0.16;


const colorWheel = [
    { colorName: 'red',            clockPosition:  0, angle: 0.00 },
    { colorName: 'tomato',         clockPosition:  1, angle: 0.16 },
    { colorName: 'orange',         clockPosition:  2, angle: 0.33 },
    { colorName: 'gold',           clockPosition:  3, angle: 0.50 },
    { colorName: 'yellow',         clockPosition:  4, angle: 0.66 },
    { colorName: 'greenyellow',    clockPosition:  5, angle: 0.83 },
    { colorName: 'green',          clockPosition:  6, angle: 0.10 },
    { colorName: 'cornflowerblue', clockPosition:  7, angle: 1.16 },
    { colorName: 'blue',           clockPosition:  8, angle: 1.13 },
    { colorName: 'indigo',         clockPosition:  9, angle: 1.5 },
    { colorName: 'purple',         clockPosition: 10, angle: 1.66 },
    { colorName: 'darkmagenta',    clockPosition: 11, angle: 1.83 },
];


colorWheel.forEach( element => {
    gw.ctx.fillStyle = element.colorName;

    const radius = (Math.max(gw.canvas.width, gw.canvas.height) / 2);
    const startAngle = element.angle * Math.PI;
    const endAngle = (element.angle + clockPositionAngle) * Math.PI;

    gw.ctx.save();
    gw.ctx.beginPath();    
    gw.ctx.arc(gw.centerX, gw.centerY, radius, startAngle,  endAngle);
    gw.ctx.fill();
    gw.ctx.fillText("hi", gw.centerX, gw.centerY);
});

gw.ctx.beginPath();
const x1 = centerX;
const y1 = centerY;
const r = radius;
const theta = 0;
gw.ctx.moveTo(x1,y1);
gw.ctx.lineTo(x1 + r * Math.cos(theta), y1 + r * Math.sin(theta));
gw.ctx.stroke();

