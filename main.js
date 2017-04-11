// Global Variables
var
  game = new Phaser.Game(1024, 600, Phaser.AUTO, 'game'),
  Main = function () {},
  gameOptions = {
    playSound: true,
    playMusic: true
  },
  musicPlayer,
  t_score;




Main.prototype = {

  preload: function () {
    game.load.image('stars',    'assets/images/stars.jpg');
    game.load.image('loading',  'assets/images/loading.png');
    game.load.image('brand',    'assets/images/logo.png');
      game.load.image('brand2',    'assets/images/logo2.png');
       game.load.image('bg1', 'layer_08.png');
       game.load.image('bg2', 'layer_07.png');
       game.load.image('bg3', 'layer_06.png');
       game.load.image('bg4', 'layer_05.png');
       game.load.image('bg5', 'layer_04.png');
       game.load.image('bg6', 'layer_03.png');
    game.load.script('polyfill',   'lib/polyfill.js');
    game.load.script('utils',   'lib/utils.js');
    game.load.script('splash',  'states/Splash.js');
  },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');
