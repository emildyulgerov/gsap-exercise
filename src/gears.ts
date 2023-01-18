import * as PIXI from 'pixi.js';
import {gsap} from 'gsap';
import { PixiPlugin } from 'gsap/PixiPlugin';


gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

let animation: gsap.core.Tween;
let animations: gsap.core.Tween[] = [];

const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x999999
})

document.body.appendChild(app.view as HTMLCanvasElement);
init()
async function init() {
    const first = await PIXI.Assets.load('/assets/gear12.png');
    const second = await PIXI.Assets.load('/assets/gear16.png');
    const third = await PIXI.Assets.load('/assets/gear20.png');
    const fourth = await PIXI.Assets.load('/assets/gear24.png');
    const fifth = await PIXI.Assets.load('/assets/gear28.png');
    const sixth = await PIXI.Assets.load('/assets/gear40.png');
    
    const gearbox = await PIXI.Assets.load('/assets/gearbox.png');
    const gbSprite = new PIXI.Sprite(gearbox);
    gbSprite.anchor.set(0.5, 0.5)
    gbSprite.position.set(400, 300);
    app.stage.addChild(gbSprite);



    const paused = await PIXI.Assets.load('/assets/speed-paused.png');
    const normalSpeed = await PIXI.Assets.load('/assets/speed-normal.png');
    const fastSpeed = await PIXI.Assets.load('/assets/speed-fast.png');
    const fastestSpeed = await PIXI.Assets.load('/assets/speed-faster.png');

    const pausedSprite = new PIXI.Sprite(paused);
    const normalSprite = new PIXI.Sprite(normalSpeed);
    const fastSprite = new PIXI.Sprite(fastSpeed);
    const fastestSprite = new PIXI.Sprite(fastestSpeed);
    
    spawnGear(first, 300, 117, 6, 'ccw');
    spawnGear(second, 542, 471, 8, 'ccw');
    spawnGear(third, 212, 441, 10, 'ccw');
    spawnGear(fourth, 676, 388, 12, 'cw');
    spawnGear(fifth, 142, 130, 14, 'cw');
    spawnGear(sixth, 400, 300, 20, 'cw');


    pausedSprite.anchor.set(0.5);
    pausedSprite.position.set(343, 300);

    normalSprite.anchor.set(0.5);
    normalSprite.position.set(383, 300);

    fastSprite.anchor.set(0.5);
    fastSprite.position.set(420, 300);

    fastestSprite.anchor.set(0.5);
    fastestSprite.position.set(455, 300);


    fastestSprite.interactive = true;
    fastSprite.interactive = true;
    normalSprite.interactive = true;
    pausedSprite.interactive = true;


    pausedSprite.on('pointertap', () => {
        for (let a of animations){
            a.pause();
        }
    })

    normalSprite.on('pointertap', () => {
        for (let a of animations){
            a.play()
            a.timeScale(1);
        }
    })

    fastSprite.on('pointertap', () => {
        for (let a of animations){
            a.timeScale(2);
        }
    })

    fastestSprite.on('pointertap', () => {
        for (let a of animations) {
            a.timeScale(4);
        }
    })

    
    app.stage.addChild(normalSprite);
    app.stage.addChild(fastestSprite);
    app.stage.addChild(fastSprite);
    app.stage.addChild(pausedSprite);


    function spawnGear(texture: PIXI.Texture, x: number, y: number, duration: number, direction: 'cw' | 'ccw'){
        const sprite = new PIXI.Sprite(texture);
        let rot;
        if (direction == 'cw'){
            rot = 360
        } else {
            rot = -360
        }
        animation = gsap.to(sprite, {pixi: {rotation: `${rot}`}, ease: 'power0' ,duration: duration, repeat: -1});
        sprite.anchor.set(0.5, 0.5);
        sprite.position.set(x, y);
        app.stage.addChild(sprite);
        animations.push(animation);
    }


}