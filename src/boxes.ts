import * as PIXI from 'pixi.js';
import {gsap} from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';


gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);


const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x999999
})

document.body.appendChild(app.view as HTMLCanvasElement);

const first = new PIXI.Graphics();
first.beginFill(0xffffff);
first.drawRect(0, 0, 100, 100);
first.endFill();
first.pivot.set(50, 50)
first.position.set(100, 300);
first.interactive = true;

const second = new PIXI.Graphics();
second.beginFill(0xffffff);
second.drawRect(0, 0, 100, 100);
second.endFill();
second.pivot.set(50, 50);
second.position.set(300, 300);
second.interactive = true;


const third = new PIXI.Graphics();
third.beginFill(0xffffff);
third.drawRect(0, 0, 100, 100);
third.endFill();
third.pivot.set(50, 50);
third.position.set(500, 300);
third.interactive = true;

const fourth = new PIXI.Graphics();
fourth.beginFill(0xffffff);
fourth.drawRect(0, 0, 100, 100);
fourth.endFill();
fourth.pivot.set(50, 50);
fourth.position.set(700, 300);
fourth.interactive = true;


app.stage.addChild(first);
app.stage.addChild(second);
app.stage.addChild(third);
app.stage.addChild(fourth);



let firstAnimation = gsap.to(first, {pixi: {rotation: 360}, duration: 1, paused: true});
let secondAnimation = gsap.to(second, {pixi: {blur: 10}, duration: 1, paused: true});
let thirdAnimation = gsap.to(third, {pixi: {skewX: 50}, duration: 1, paused: true});
let fourthAnimation = gsap.to(fourth, {pixi: {tint: 0xff0000}, duration: 1, paused: true});



first.on('pointertap', () => {
    if (firstAnimation.reversed()){
        firstAnimation.play();
    } else {
        firstAnimation.reverse();
    }
})

second.on('pointertap', () => {
    if (secondAnimation.reversed()){
        secondAnimation.play();
    } else {
        secondAnimation.reverse();
    }
})

third.on('pointertap', () => {
    if (thirdAnimation.reversed()){
        thirdAnimation.play();
    } else {
        thirdAnimation.reverse();
    }
})

fourth.on('pointertap', () => {
    if (fourthAnimation.reversed()){
        fourthAnimation.play();
    } else {
        fourthAnimation.reverse();
    }
})

// function test(obj: PIXI.Graphics, ...vars){
//     return gsap.to(obj, {pixi: {}})
// }