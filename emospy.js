/**
 * Emospy.js
 * (c) 2021
 */

import * as grafix from '../lib/grafix.js';
import * as emoji from '../lib/emoji.js';

// position on clock: (totalRadians / totalHours) * position
// note that position 0 is 3 o'clock not 12 o'clock

const colorWheel = [
    { colorName: 'red',             clockPosition:  0 },
    { colorName: 'tomato',          clockPosition:  1 },
    { colorName: 'orange',          clockPosition:  2 },
    { colorName: 'gold',            clockPosition:  3 },
    { colorName: 'yellow',          clockPosition:  4 },
    { colorName: 'greenyellow',     clockPosition:  5 },
    { colorName: 'green',           clockPosition:  6 },
    { colorName: 'steelblue',       clockPosition:  7 },
    { colorName: 'blue',            clockPosition:  8 },
    { colorName: 'blueviolet',      clockPosition:  9 },
    { colorName: 'purple',          clockPosition: 10 },
    { colorName: 'mediumvioletred', clockPosition: 11 },
];

const emojiList = [
    '🍠',
    '🍎', 
    '🍑', 
    '🍊',
    '🍋', 
    '🍏', 
    '🥬', 
    '💧', 
    '🧊', 
    '🫐',
    '🍆', 
    '🍇',
]

function calcX(centerX, fontSize, angle, radius) {
    const offset = fontSize / 2;
    return (centerX - offset) + (radius * Math.cos(angle));
}

function calcY(centerY, fontSize, angle, radius) {
    const offset = fontSize / 2;
    return (centerY + offset) + (radius * Math.sin(angle));
}

function drawColorWheel(radius) {
    const hours = 12;
    const centerX = gw.canvas.width/2;
    const centerY = gw.canvas.height/2;
    const clockHourAngle = 2.0/hours;

    colorWheel.forEach( element => {

        const angle = (clockHourAngle * element.clockPosition);
    
        const startAngle = angle * Math.PI;
        const endAngle = (angle + clockHourAngle) * Math.PI;
    
        gw.ctx.beginPath();    
        gw.ctx.arc(centerX, centerY, radius, startAngle,  endAngle);
        gw.ctx.strokeStyle = element.colorName;
        gw.ctx.lineWidth = 10;
        gw.ctx.stroke();
    });
}

function drawEmojiRing(radius, fontSize) {
    const minuets = 60;
    const clockMinuetAngle = 2.0/minuets;
    const centerX = gw.canvas.width/2;
    const centerY = gw.canvas.height/2;

    for (let i = 0; i < minuets; i += 1) {
        const angle = (clockMinuetAngle * i);
        const startAngle = (angle + 0.015) * Math.PI;

        gw.ctx.beginPath();    
        gw.ctx.font = `${fontSize}px Arial`;
        const x = calcX(centerX, fontSize, startAngle, radius);
        const y = calcY(centerY, fontSize, startAngle, radius);
        let index = Math.floor(i / 5);
        gw.ctx.fillText(emojiList[index], x, y);
    }
}

function draw(timeStamp) {
    gw.ctx.clearRect(0, 0, gw.canvas.width, gw.canvas.height);
    const centerX = gw.canvas.width/2;
    const centerY = gw.canvas.height/2;

    const margin = 50;
    const radius = (Math.min(gw.canvas.width, gw.canvas.height) / 2) - margin;
    const fontSizeRatio = 10;
    const fontSize = radius/fontSizeRatio;

    drawColorWheel(radius - 94);

    drawEmojiRing(radius, fontSize);
    drawEmojiRing(radius - 20, fontSize * 0.9);
    drawEmojiRing(radius - 40, fontSize * 0.7);
    drawEmojiRing(radius - 58, fontSize * 0.5);
    drawEmojiRing(radius - 70, fontSize * 0.4);
    drawEmojiRing(radius - 78, fontSize * 0.3);

    gw.requestID = requestAnimationFrame(draw);
}

const gw = new grafix.GameWorld(draw);

function main() {
    gw.start();
}

main();