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

    const margin = 5;
    const cols = (grafix.worldProps.canvas.width - (margin * 4)) / 25;
    const rows = (grafix.worldProps.canvas.height - 25) / 25;

    let index = 0;
    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < cols; j += 1) {
            if (index < emoji.emojiTable.length) {
                grafix.worldProps.ctx.fillText(String.fromCodePoint(emoji.emojiTable[index].codePoint,0xFE0F), (j * 25) + (margin), (i * 25) + 25);
            }
            index += 1;
        }
    }

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