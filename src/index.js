import {curry} from 'folktale/core/lambda';

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const img = document.getElementById('background');

const chain = fn => (...args) => (fn(...args) && false) || args[args.length - 1];
const chainable = fn => curry(2, chain(fn));

const drawImage = chainable(
    ({image, x, y}, ctx) => ctx.drawImage(image, x, y)
);
const drawScaledImage = chainable(
    ({image, x, y, width, height}, ctx) => ctx.drawImage(image, x, y, width, height)
);

const ctxWithImage = drawImage({image: img, x: 0, y: 0})(ctx);

// const Canvas = (ctx) => {
//     return {
//         drawImage: img => x => y => width => height => Canvas(drawImage())
//             // () => ctx.drawImage(img, x, y, width, height),
//     }
// }

// const drawImage = img => x => y => width => height => 
//     () => ctx.drawImage(img, x, y, width, height);
// const canvas = drawImage(image)(0)(0);

