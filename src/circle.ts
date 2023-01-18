import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);


const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x999999,
})

document.body.appendChild(app.view as HTMLCanvasElement);

const circle = new PIXI.Graphics();
circle.beginFill()
circle.drawCircle(0, 0, 50);
circle.endFill();
circle.position.set(100, 100);

const second = new PIXI.Graphics();
second.beginFill();
second.drawCircle(0, 0, 50);
second.endFill();
second.position.set(100, 300);

const third = new PIXI.Graphics();
third.beginFill();
third.drawCircle(0, 0, 50);
third.endFill();
third.position.set(100, 500);


app.stage.addChild(circle);
app.stage.addChild(second);
app.stage.addChild(third);


const tl = gsap.timeline();

gsap.to(circle, {pixi: {x:700}, duration: 2, delay: 1});
gsap.to(circle, {pixi: {scale: 1.5}, duration: 1, delay: 1});
gsap.to(circle, {pixi: {scale: 1}, duration: 1, delay: 2});

gsap.to(second, {pixi: {x: 700}, duration: 2, delay: 1, ease: 'power0'});
gsap.to(second, {pixi: {scale: 1.5}, duration: 1, delay: 1, ease: 'elastic.out'});
gsap.to(second, {pixi: {scale: 1}, duration: 1, delay: 2, ease: 'elastic.in'});

gsap.to(third, {pixi: {x: 700}, duration: 2, delay: 1, ease: "sine.inOut"});
gsap.to(third, {pixi: {scale: 1.5}, duration: 1, delay: 1, ease: "bounce.out"});
gsap.to(third, {pixi: {scale: 1}, duration: 1, delay: 2, ease: "bounce.in"});

