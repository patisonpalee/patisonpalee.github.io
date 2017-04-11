var Splash = function () {};

Splash.prototype = {

  loadScripts: function () {
    game.load.script('style', 'lib/style.js');
    game.load.script('mixins', 'lib/mixins.js');
    game.load.script('WebFont', 'vendor/webfontloader.js');
    game.load.script('gamemenu','states/GameMenu.js');
    game.load.script('game', 'states/Game.js');
    game.load.script('gameover','states/GameOver.js');
    game.load.script('credits', 'states/Credits.js');
    game.load.script('options', 'states/Options.js');
  },

  loadBgm: function () {
    // thanks Kevin Macleod at http://incompetech.com/
    game.load.audio('dangerous', 'assets/bgm/235349__dambient__8-bit-loop.mp3');
    game.load.audio('exit', 'assets/bgm/Exit the Premises.mp3');
    game.load.audio('blaster', '361263__japanyoshithegamer__8-bit-correct-answer.wav');
    game.load.audio('wrongans', '162459__kastenfrosch__hyperstorm.mp3');  
  },
  // varios freebies found from google image search
  loadImages: function () {
    game.load.image('menu-bg', 'assets/images/menu-bg.jpg');
    game.load.image('options-bg', 'assets/images/options-bg.jpg');
    game.load.image('gameover-bg', 'assets/images/gameover-bg.jpg');
    game.load.image('grid', 'drag_bg.png');
    game.load.image('car', 'car.png');
      
        game.load.image('motor', 'motor.png');
        game.load.image('blender', 'blender.png');
        game.load.image('drill', 'drill.png');
        game.load.image('oven', 'oven.png');
        game.load.image('iron', 'iron.png');
        game.load.image('refrigerator', 'refrigerator.png');
        game.load.image('air_conditioner', 'air_conditioner.png');


        game.load.image('computer', 'computer.png');
        game.load.image('phone', 'phone.png');
        game.load.image('radio', 'radio.png');
        game.load.image('tv', 'tv.png');

        game.load.image('floodlight', 'floodlight.png');
        game.load.image('flashlight', 'flashlight.png');
        game.load.image('lamp', 'lamp.png');
        game.load.image('light', 'light.png');
      
   /*   game.load.image('bg1', 'layer_08.png');
       game.load.image('bg2', 'layer_07.png');
       game.load.image('bg3', 'layer_06.png');
       game.load.image('bg4', 'layer_05.png');
       game.load.image('bg5', 'layer_04.png');
       game.load.image('bg6', 'layer_03.png');
     */   
  },

  loadFonts: function () {
    WebFontConfig = {
      custom: {
        families: ['TheMinion'],
        urls: ['assets/style/theminion.css']
      }
    }
  },

  init: function () {
    this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loading");
    this.logo       = game.make.sprite(game.world.centerX, 200, 'brand');
    this.status     = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
    utils.centerGameObjects([this.logo, this.status]);
  },

  preload: function () {
     game.add.sprite(0, 0, 'bg1');
      game.add.sprite(0, 0, 'bg2');
    game.add.existing(this.logo).scale.setTo(0.5);
    game.add.existing(this.loadingBar);
    game.add.existing(this.status);
    this.load.setPreloadSprite(this.loadingBar);

    this.loadScripts();
    this.loadImages();
    this.loadFonts();
    this.loadBgm();

  },

  addGameStates: function () {

    game.state.add("GameMenu",GameMenu);
    game.state.add("Game",Game);
    game.state.add("GameOver",GameOver);
    game.state.add("Credits",Credits);
    game.state.add("Options",Options);
  },

  addGameMusic: function () {
    music = game.add.audio('dangerous');
    music.loop = true;
    music.play();
  },

  create: function() {
    this.status.setText(' ');
    this.addGameStates();
    this.addGameMusic();

    setTimeout(function () {
      game.state.start("GameMenu");
    }, 1000);
  }
};
