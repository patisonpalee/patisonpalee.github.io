var GameMenu = function() {};
var fx;
GameMenu.prototype = {

  menuConfig: {
    startY: 260,
    startX: 30
  },

  init: function () {
    this.titleText = game.make.text(game.world.centerX, 120, "เครื่องใช้ไฟฟ้า\nแสนสนุก", {
      font: 'bold 60pt TheMinion',
      fill: '#FDFFB5',
      align: 'center'
    });
    this.titleText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 10);
    this.titleText.anchor.set(0.5);
    this.optionCount = 1;
  },

  create: function () {

    fx = game.add.audio('blaster');
    if (music.name !== "dangerous" && playMusic) {
      music.stop();
      music = game.add.audio('dangerous');
      music.loop = true;
     
      music.play();
    }
      
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'bg1');
      game.add.sprite(0, 0, 'bg2');
      game.add.sprite(0, 0, 'bg3');
      game.add.sprite(0, 0, 'bg4');
    game.add.existing(this.titleText);

    this.addMenuOption('Start', function () {
        fx.play();
        game.state.start("Game");
    });
    this.addMenuOption('Options', function () {
        fx.play();
        game.state.start("Options");
    });
    this.addMenuOption('Credits', function () {
        fx.play();
        game.state.start("Credits");
    });
  }
};

Phaser.Utils.mixinPrototype(GameMenu.prototype, mixins);
