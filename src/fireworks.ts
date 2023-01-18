import * as PIXI from 'pixi.js';
import {gsap} from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';


gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);


const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x000000
})

document.body.appendChild(app.view as HTMLCanvasElement);


function particle(color: number, parent: PIXI.Container){
    const square = new PIXI.Graphics();
    square.beginFill(0xffffff);
    square.drawRect(0, 0, 4, 4);
    square.pivot.set(2, 2);
    square.endFill();
    
    
    
    gsap.fromTo(square, {pixi: {scale: 0}}, {pixi: {x: 'random(-100, 100)', y: 'random(-100, 100)', rotation: 1440, scale: 2, blur: 1}, duration: 2});   
    gsap.to(square, {pixi: {tint: color}, duration: 2});
    gsap.to(square, {pixi: {tint: 0}, duration: 1, delay: 1});
    parent.addChild(square);
}


function firework(x: number, y: number, color: number){
    let cont = new PIXI.Container();
    cont.position.set(x, y);
    for (let i = 1; i <= 100; i++){
        particle(color, cont);
    }
    gsap.to(cont, {pixi: {y: '+=100'}, duration: 2, ease: 'power2.in', onComplete: () => cont.destroy()});
    return cont
}

const canvas = new PIXI.Graphics();
canvas.beginFill(0x000000);
canvas.drawRect(0, 0, 800, 600);
canvas.endFill();
canvas.interactive = true;

canvas.on('pointertap', ({globalX, globalY}) => {
    let col = ((Math.random() * 256 | 0) << 16) + ((Math.random() * 256 | 0) << 8) + (Math.random() * 256 | 0);
    canvas.addChild(firework(globalX, globalY, col));
})

app.stage.addChild(canvas);