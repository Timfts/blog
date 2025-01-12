// import * as constants from "./constants";
// import { createCanvas, decodeBase64ToArrayBuffer } from "./helpers";


// class DistanceMeter {
    
// }

// class Horizon {
    
// }

// class Trex {
    
// }


// export class Runner {
//   static config = {
//     ACCELERATION: 0.001,
//     BG_CLOUD_SPEED: 0.2,
//     BOTTOM_PAD: 10,
//     CLEAR_TIME: 3000,
//     CLOUD_FREQUENCY: 0.5,
//     GAMEOVER_CLEAR_TIME: 750,
//     GAP_COEFFICIENT: 0.6,
//     GRAVITY: 0.6,
//     INITIAL_JUMP_VELOCITY: 12,
//     MAX_CLOUDS: 6,
//     MAX_OBSTACLE_LENGTH: 3,
//     MAX_SPEED: 12,
//     MIN_JUMP_HEIGHT: 35,
//     MOBILE_SPEED_COEFFICIENT: 1.2,
//     RESOURCE_TEMPLATE_ID: "audio-resources",
//     SPEED: 6,
//     SPEED_DROP_COEFFICIENT: 3,
//   };

//   static defaultDimensions = {
//     WIDTH: constants.DEFAULT_WIDTH,
//     HEIGHT: 150,
//   };

//   static classes = {
//     CANVAS: "runner-canvas",
//     CONTAINER: "runner-container",
//     CRASHED: "crashed",
//     ICON: "icon-offline",
//     TOUCH_CONTROLLER: "controller",
//   };

//   static imageSources = {
//     LDPI: [
//       { name: "CACTUS_LARGE", id: "1x-obstacle-large" },
//       { name: "CACTUS_SMALL", id: "1x-obstacle-small" },
//       { name: "CLOUD", id: "1x-cloud" },
//       { name: "HORIZON", id: "1x-horizon" },
//       { name: "RESTART", id: "1x-restart" },
//       { name: "TEXT_SPRITE", id: "1x-text" },
//       { name: "TREX", id: "1x-trex" },
//     ],
//     HDPI: [
//       { name: "CACTUS_LARGE", id: "2x-obstacle-large" },
//       { name: "CACTUS_SMALL", id: "2x-obstacle-small" },
//       { name: "CLOUD", id: "2x-cloud" },
//       { name: "HORIZON", id: "2x-horizon" },
//       { name: "RESTART", id: "2x-restart" },
//       { name: "TEXT_SPRITE", id: "2x-text" },
//       { name: "TREX", id: "2x-trex" },
//     ],
//   };

//   static sounds = {
//     BUTTON_PRESS: "offline-sound-press",
//     HIT: "offline-sound-hit",
//     SCORE: "offline-sound-reached",
//   };

//   static keycodes = {
//     JUMP: { 38: 1, 32: 1 }, // Up, spacebar
//     DUCK: { 40: 1 }, // Down
//     RESTART: { 13: 1 }, // Enter
//   };

//   static events = {
//     ANIM_END: "webkitAnimationEnd",
//     CLICK: "click",
//     KEYDOWN: "keydown",
//     KEYUP: "keyup",
//     MOUSEDOWN: "mousedown",
//     MOUSEUP: "mouseup",
//     RESIZE: "resize",
//     TOUCHEND: "touchend",
//     TOUCHSTART: "touchstart",
//     VISIBILITY: "visibilitychange",
//     BLUR: "blur",
//     FOCUS: "focus",
//     LOAD: "load",
//   };

//   config = Runner.config;
//   dimensions = Runner.defaultDimensions;

//   horizon: Horizon;
//   Trex: Trex;
//   distanceMeter: DistanceMeter;
//   containerEl: HTMLElement = null;
//   canvas: HTMLCanvasElement = null;
//   canvasCtx: CanvasRenderingContext2D = null;

//   playingIntro: boolean = false;
//   drawPending: boolean = false;

//   outerContainerEl: HTMLElement;
//   detailsButton: HTMLButtonElement;
//   touchController: HTMLDivElement;
//   msPerFrame = 1000 / constants.FPS;
//   currentSpeed = this.config.SPEED;
//   tRex = null;
//   distanceRan = 0;
//   highestScore = 0;
//   time = 0;
//   runningTime = 0;
//   obstacles = [];
//   started = false;
//   activated = false;
//   crashed = false;
//   paused = false;
//   resizeTimerId_ = null;
//   playCount = 0;
//   // Sound FX.
//   audioBuffer = null;
//   soundFx = {};
//   // Global web audio context for playing sounds.
//   audioContext = null;
//   // Images.
//   images = {};
//   imagesLoaded = 0;

//   constructor(outerContainerId: string) {
//     this.outerContainerEl = document.querySelector(outerContainerId);
//     this.detailsButton = this.outerContainerEl.querySelector("#details-button");
//     // if (Runner.instance_) {
//     //     return Runner.instance_;
//     //   }
//     //   Runner.instance_ = this;

//     // this.loadImages(); TODO
//   }

//   /**
//    * Setting individual settings for debugging.
//    */
//   updateConfigSetting(setting: string, value: any) {
//     if (setting in this.config && value != undefined) {
//       this.config[setting] = value;
//       switch (setting) {
//         case "GRAVITY":
//         case "MIN_JUMP_HEIGHT":
//         case "SPEED_DROP_COEFFICIENT":
//           this.tRex.config[setting] = value;
//           break;
//         case "INITIAL_JUMP_VELOCITY":
//           this.tRex.setJumpVelocity(value);
//           break;
//         case "SPEED":
//           this.setSpeed(value);
//           break;
//       }
//     }
//   }

//   /**
//    * Load and cache the image assets from the page.
//    */
//   loadImages() {
//     const imageSources = constants.IS_HIDPI
//       ? Runner.imageSources.HDPI
//       : Runner.imageSources.LDPI;
//     var numImages = imageSources.length;
//     for (let i = numImages - 1; i >= 0; i--) {
//       const imgSource = imageSources[i];
//       this.images[imgSource.name] = document.getElementById(imgSource.id);
//     }
//     this.init();
//   }

//   /**
//    * Load and decode base 64 encoded sounds.
//    */
//   loadSounds() {
//     if (!constants.IS_IOS) {
//       this.audioContext = new AudioContext();
//       const resourceTemplate = document.querySelector<HTMLTemplateElement>(
//         `#${this.config.RESOURCE_TEMPLATE_ID}`
//       ).content;
//       for (const sound in Runner.sounds) {
//         let soundSrc = resourceTemplate.querySelector<HTMLAudioElement>(
//           `#${Runner.sounds[sound]}`
//         ).src;
//         soundSrc = soundSrc.substr(soundSrc.indexOf(",") + 1);
//         const buffer = decodeBase64ToArrayBuffer(soundSrc);
//         // Async, so no guarantee of order in array.
//         this.audioContext.decodeAudioData(
//           buffer,
//           function (index, audioData) {
//             this.soundFx[index] = audioData;
//           }.bind(this, sound)
//         );
//       }
//     }
//   }

//   /**
//    * Sets the game speed. Adjust the speed accordingly if on a smaller screen.
//    */
//   setSpeed(opt_speed?: number) {
//     const speed = opt_speed || this.currentSpeed;
//     // Reduce the speed on smaller mobile screens.
//     if (this.dimensions.WIDTH < constants.DEFAULT_WIDTH) {
//       const mobileSpeed =
//         ((speed * this.dimensions.WIDTH) / constants.DEFAULT_WIDTH) *
//         this.config.MOBILE_SPEED_COEFFICIENT;
//       this.currentSpeed = mobileSpeed > speed ? speed : mobileSpeed;
//     } else if (opt_speed) {
//       this.currentSpeed = opt_speed;
//     }
//   }

//   /**
//    * Game initialiser.
//    */
//   init() {
//     // Hide the static icon.
//     //document.querySelector('.' + Runner.classes.ICON).style.visibility = 'hidden';
//     this.adjustDimensions();
//     this.setSpeed();
//     this.containerEl = document.createElement("div");
//     this.containerEl.className = Runner.classes.CONTAINER;
//     // Player canvas container.
//     this.canvas = createCanvas(
//       this.containerEl,
//       this.dimensions.WIDTH,
//       this.dimensions.HEIGHT
//     );
//     this.canvasCtx = this.canvas.getContext("2d");
//     this.canvasCtx.fillStyle = "#f7f7f7";
//     this.canvasCtx.fill();
//     Runner.updateCanvasScaling(this.canvas);
//     // Horizon contains clouds, obstacles and the ground.
//     this.horizon = new Horizon(
//       this.canvas,
//       this.images,
//       this.dimensions,
//       this.config.GAP_COEFFICIENT
//     );
//     // Distance meter
//     this.distanceMeter = new DistanceMeter(
//       this.canvas,
//       this.images.TEXT_SPRITE,
//       this.dimensions.WIDTH
//     );
//     // Draw t-rex
//     this.tRex = new Trex(this.canvas, this.images.TREX);
//     this.outerContainerEl.appendChild(this.containerEl);
//     if (constants.IS_MOBILE) {
//       this.createTouchController();
//     }
//     this.startListening();
//     this.update();
//     window.addEventListener(
//       Runner.events.RESIZE,
//       this.debounceResize.bind(this)
//     );
//   }

//   createTouchController() {
//     this.touchController = document.createElement("div");
//     this.touchController.className = Runner.classes.TOUCH_CONTROLLER;
//   }

//   /**
//    * Debounce the resize event.
//    */
//   debounceResize() {
//     if (!this.resizeTimerId_) {
//       this.resizeTimerId_ = setInterval(this.adjustDimensions.bind(this), 250);
//     }
//   }

//   /**
//    * Adjust game space dimensions on resize.
//    */
//   adjustDimensions() {
//     clearInterval(this.resizeTimerId_);
//     this.resizeTimerId_ = null;
//     const boxStyles = window.getComputedStyle(this.outerContainerEl);
//     const padding = Number(
//       boxStyles.paddingLeft.substr(0, boxStyles.paddingLeft.length - 2)
//     );
//     this.dimensions.WIDTH = this.outerContainerEl.offsetWidth - padding * 2;
//     // Redraw the elements back onto the canvas.
//     if (this.canvas) {
//       this.canvas.width = this.dimensions.WIDTH;
//       this.canvas.height = this.dimensions.HEIGHT;
//       Runner.updateCanvasScaling(this.canvas);
//       this.distanceMeter.calcXPos(this.dimensions.WIDTH);
//       this.clearCanvas();
//       this.horizon.update(0, 0, true);
//       this.tRex.update(0);
//       // Outer container and distance meter.
//       if (this.activated || this.crashed) {
//         this.containerEl.style.width = this.dimensions.WIDTH + "px";
//         this.containerEl.style.height = this.dimensions.HEIGHT + "px";
//         this.distanceMeter.update(0, Math.ceil(this.distanceRan));
//         this.stop();
//       } else {
//         this.tRex.draw(0, 0);
//       }
//       // Game over panel.
//       if (this.crashed && this.gameOverPanel) {
//         this.gameOverPanel.updateDimensions(this.dimensions.WIDTH);
//         this.gameOverPanel.draw();
//       }
//     }
//   }

//   playIntro() {
//     if (!this.started && !this.crashed) {
//       this.playingIntro = true;
//       this.tRex.playingIntro = true;
//       // CSS animation definition.
//       var keyframes =
//         "@-webkit-keyframes intro { " +
//         "from { width:" +
//         Trex.config.WIDTH +
//         "px }" +
//         "to { width: " +
//         this.dimensions.WIDTH +
//         "px }" +
//         "}";
//       document.styleSheets[0].insertRule(keyframes, 0);
//       this.containerEl.addEventListener(
//         Runner.events.ANIM_END,
//         this.startGame.bind(this)
//       );
//       this.containerEl.style.webkitAnimation = "intro .4s ease-out 1 both";
//       this.containerEl.style.width = this.dimensions.WIDTH + "px";
//       if (this.touchController) {
//         this.outerContainerEl.appendChild(this.touchController);
//       }
//       this.activated = true;
//       this.started = true;
//     } else if (this.crashed) {
//       this.restart();
//     }
//   }

//   /**
//    * Update the game status to started.
//    */
//   startGame() {
//     this.runningTime = 0;
//     this.playingIntro = false;
//     this.tRex.playingIntro = false;
//     this.containerEl.style.webkitAnimation = "";
//     this.playCount++;
//     // Handle tabbing off the page. Pause the current game.
//     window.addEventListener(
//       Runner.events.VISIBILITY,
//       this.onVisibilityChange.bind(this)
//     );
//     window.addEventListener(
//       Runner.events.BLUR,
//       this.onVisibilityChange.bind(this)
//     );
//     window.addEventListener(
//       Runner.events.FOCUS,
//       this.onVisibilityChange.bind(this)
//     );
//   }

//   clearCanvas() {
//     this.canvasCtx.clearRect(
//       0,
//       0,
//       this.dimensions.WIDTH,
//       this.dimensions.HEIGHT
//     );
//   }

//   /**
//    * Update the game frame.
//    */
//   update() {
//     this.drawPending = false;
//     var now = getTimeStamp();
//     var deltaTime = now - (this.time || now);
//     this.time = now;
//     if (this.activated) {
//       this.clearCanvas();
//       if (this.tRex.jumping) {
//         this.tRex.updateJump(deltaTime, this.config);
//       }
//       this.runningTime += deltaTime;
//       var hasObstacles = this.runningTime > this.config.CLEAR_TIME;
//       // First jump triggers the intro.
//       if (this.tRex.jumpCount == 1 && !this.playingIntro) {
//         this.playIntro();
//       }
//       // The horizon doesn't move until the intro is over.
//       if (this.playingIntro) {
//         this.horizon.update(0, this.currentSpeed, hasObstacles);
//       } else {
//         deltaTime = !this.started ? 0 : deltaTime;
//         this.horizon.update(deltaTime, this.currentSpeed, hasObstacles);
//       }
//       // Check for collisions.
//       var collision =
//         hasObstacles && checkForCollision(this.horizon.obstacles[0], this.tRex);
//       if (!collision) {
//         this.distanceRan += (this.currentSpeed * deltaTime) / this.msPerFrame;
//         if (this.currentSpeed < this.config.MAX_SPEED) {
//           this.currentSpeed += this.config.ACCELERATION;
//         }
//       } else {
//         this.gameOver();
//       }
//       if (
//         this.distanceMeter.getActualDistance(this.distanceRan) >
//         this.distanceMeter.maxScore
//       ) {
//         this.distanceRan = 0;
//       }
//       var playAcheivementSound = this.distanceMeter.update(
//         deltaTime,
//         Math.ceil(this.distanceRan)
//       );
//       if (playAcheivementSound) {
//         this.playSound(this.soundFx.SCORE);
//       }
//     }
//     if (!this.crashed) {
//       this.tRex.update(deltaTime);
//       this.raq();
//     }
//   }
// }
