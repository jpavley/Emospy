/**
 * Emospy.js
 * (c) 2021
 */

import * as grafix from '../lib/grafix.js';
import * as emoji from '../lib/emoji.js';

// drawing and animation
const game = {
    requestID: '',
    state: 'not started'
};




function draw() {
    grafix.worldProps.ctx.clearRect(0, 0, 
        grafix.worldProps.canvas.width, 
        grafix.worldProps.canvas.height);

    grafix.countFrames();

    grafix.worldProps.ctx.save();
    grafix.worldProps.ctx.beginPath();
    grafix.worldProps.ctx.font = '25px Arial';

    //                                                                    x    y
    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x2708),          100, 100);
    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x2708, 0xFE0F),  100, 150);

    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x270F),          150, 100);
    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x270F, 0xFE0F),  150, 150);

    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x1F4BA),         200, 100);
    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x1F4BA, 0xFE0F), 200, 150);

    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x260E),         250, 100);
    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x260E, 0xFE0F), 250, 150);

    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x26F2),         300, 100);
    grafix.worldProps.ctx.fillText(String.fromCodePoint(0x26F2, 0xFE0F), 300, 150);


    game.requestID = requestAnimationFrame(draw);
}

function start() {
    grafix.initWorld();
    grafix.initTimeKeeper();

    canvas.addEventListener('click', (e) => {
        if (game.state == 'running') {
            pause();
        } else if (game.state == 'paused') {
            unpause();
        }
        console.log(grafix.worldProps.clickX, grafix.worldProps.clickY);
        grafix.reportTimeKeeperCounters();
    });

    grafix.initGrafix(grafix.worldProps.canvas, {
        showGrid: false,
        showCenter: false,
        showTextBox: false,
        showMouseCoordinates: false,
        showFPS: false
    });

    game.requestID = requestAnimationFrame(draw)
}

function pause() {
    game.state = 'paused';
    cancelAnimationFrame(game.requestID);
}

function unpause() {
    game.state = 'running';
    game.requestID = requestAnimationFrame(draw);
}

function main() {
    start();
}

main();