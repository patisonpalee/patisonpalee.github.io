var Credits = function(game) {};

 var fx;
Credits.prototype = {

  preload: function () {
    this.optionCount = 1;
  },

  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(900, 550, text, optionStyle);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 10;
    var onOver = function (target) {
      target.fill = "#FEFFD5";
      target.stroke = "rgba(200,200,200,0.5)";
      txt.useHandCursor = true;
    };
    var onOut = function (target) {
      target.fill = "black";
      target.stroke = "rgba(0,0,0,0)";
      txt.useHandCursor = false;
    };
    //txt.useHandCursor = true;
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback, this);
    txt.events.onInputOver.add(onOver, this);
    txt.events.onInputOut.add(onOut, this);

    this.optionCount ++;


  },

  create: function () {
    this.stage.disableVisibilityChange = false;
  /*   fx = game.add.audio('exit');
   
      fx.loop = true;
       music.stop();
      fx.play();
    */

     this.game.add.sprite(0, 0, 'bg1');
     this.game.add.sprite(0, 0, 'bg2');
     this.game.add.sprite(0, 0, 'bg3');
    this.game.add.sprite(0, 0, 'bg4');
    this.game.add.sprite(0, 0, 'bg5');
    this.game.add.sprite(0, 0, 'bg6');
      
      var temp =this.game.add.sprite(20,0,'brand');
      var temp2 = this.game.add.sprite(780,20,'brand2');
      
       var titleStyle = { font: 'bold 28pt TheMinion', fill: 'black', align: 'center'};
      var text = game.add.text(210, 100, "Music by kastenfrosch \n japanyoshithegamer \n and dambient \n From www.freesound.org", titleStyle);
    
      
       temp.scale.setTo(0.5, 0.5);
    this.addMenuOption('Back ->', function (e) {
        fx.stop();
      this.game.state.start("GameMenu");
    });
  }
};
