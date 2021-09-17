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

function draw(timeStamp) {
    gw.ctx.clearRect(0, 0, gw.canvas.width, gw.canvas.height);

    const margin = 50;
    const centerX = gw.canvas.width/2;
    const centerY = gw.canvas.height/2;
    const radius = (Math.min(gw.canvas.width, gw.canvas.height) / 2) - margin;
    const clockPositionAngle = 2.0/colorWheel.length;
    const increment = 0.0025;
    const fontSize = 40;
    const offset = fontSize / 2;

    colorWheel.forEach( element => {

        const angle = (clockPositionAngle * element.clockPosition);
    
        const startAngle = angle * Math.PI;
        const endAngle = (angle + clockPositionAngle) * Math.PI;
    
        gw.ctx.beginPath();    
        gw.ctx.arc(centerX, centerY, radius, startAngle,  endAngle);
        gw.ctx.strokeStyle = element.colorName;
        gw.ctx.lineWidth = 10;
        gw.ctx.stroke();
        gw.ctx.font = `${fontSize}px Arial`;
        const x = (centerX - offset) + (radius * Math.cos(startAngle));
        const y = (centerY + offset) + (radius * Math.sin(startAngle));
        gw.ctx.fillText('🤖', x, y);

        element.clockPosition += increment;
    });
    
    gw.requestID = requestAnimationFrame(draw);
}

const gw = new grafix.GameWorld(draw);

function main() {
    gw.start();
}

main();