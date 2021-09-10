/**
 * Emospy.js
 * (c) 2021
 */

import * as grafix from '../lib/grafix.js';
import * as emoji from '../lib/emoji.js';

function draw(timeStamp) {
    gw.ctx.clearRect(0, 0, gw.canvas.width, gw.canvas.height);

    gw.ctx.save();
    gw.ctx.beginPath();
    gw.ctx.font = '25px Arial';

    const margin = 5;
    const cols = (gw.canvas.width - (margin * 4)) / 25;
    const rows = (gw.canvas.height - 25) / 25;

    let index = 0;
    for (let i = 0; i < rows; i += 1) {
        for (let j = 0; j < cols; j += 1) {
            if (index < emoji.emojiTable.length) {
                gw.ctx.fillText(String.fromCodePoint(emoji.emojiTable[index].codePoint,0xFE0F), (j * 25) + (margin), (i * 25) + 25);
            }
            index += 1;
        }
    }

    gw.requestID = requestAnimationFrame(draw);
}

const gw = new grafix.GameWorld(draw);

function main() {
    gw.start();
}

main();