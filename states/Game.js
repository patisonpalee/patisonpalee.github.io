var Game = function(game) {};
/*
Game.prototype = {

  preload: function () {
    this.optionCount = 1;
  },

  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(900, 550, text, optionStyle);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    var onOver = function (target) {
      target.fill = "#FEFFD5";
      target.stroke = "rgba(200,200,200,0.5)";
      txt.useHandCursor = true;
    };
    var onOut = function (target) {
      target.fill = "white";
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
    game.add.sprite(0, 0, 'stars');
    this.addMenuOption('Next ->', function (e) {
      this.game.state.start("GameOver");
    });
  }
};
*/

    var result = 'Drag a sprite';
    var feedback = ' '
    var score = 0;
    var Gameobjects = [];
    var bgobjects = [];
    var tweenobjects = [];
    var fx, wrongfx;
    var t;
    var counter = 0;
    var isplaced = false;

Game.prototype = {

  preload: function () {
    this.optionCount = 1;
  },

  addMenuOption: function(text, callback) {
    var optionStyle = { font: '30pt TheMinion', fill: 'white', align: 'left', stroke: 'rgba(0,0,0,0)', srokeThickness: 4};
    var txt = game.add.text(900, 550, text, optionStyle);
    txt.anchor.setTo(0.5);
    txt.stroke = "rgba(0,0,0,0";
    txt.strokeThickness = 4;
    var onOver = function (target) {
      target.fill = "#FEFFD5";
      target.stroke = "rgba(200,200,200,0.5)";
      txt.useHandCursor = true;
    };
    var onOut = function (target) {
      target.fill = "white";
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
      score = 0;
      t_score = score;
    this.stage.disableVisibilityChange = false;
      
     this.game.add.sprite(0, 0, 'bg1');
     this.game.add.sprite(0, 0, 'bg2');
     this.game.add.sprite(0, 0, 'bg3');
    this.game.add.sprite(0, 0, 'bg4');
    this.game.add.sprite(0, 0, 'bg5');
    //this.game.add.sprite(0, 0, 'bg6');
      
    this.game.add.sprite(20, 20, 'grid');
    this.addMenuOption('<- Back', function (e) {
      this.game.state.start("GameMenu");
    });
      
        t = this.game.add.text(450, 520, "Score : "+score.toString(),{
        font: "30px Arial black",
        fill: 'white',
        align: "center"
    });
      feedback_t = this.game.add.text( 265, 220," ",{
        font: "40px bold Arial black",
        fill: 'red',
        align: "center"
    });
      
      Gameobjects[0] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'car');
        Gameobjects[1] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'motor');
        Gameobjects[2] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'blender');
        Gameobjects[3] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'drill');

        Gameobjects[4] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'oven');
        Gameobjects[5] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'iron');
        Gameobjects[6] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'refrigerator');
        Gameobjects[7] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'air_conditioner');

        Gameobjects[8] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'computer');
        Gameobjects[9] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'phone');
        Gameobjects[10] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'radio');
        Gameobjects[11] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'tv');

        Gameobjects[12] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'floodlight');
        Gameobjects[13] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'flashlight');
        Gameobjects[14] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'lamp');
        Gameobjects[15] = this.game.add.sprite(Math.floor((Math.random() * 350) + 600), Math.floor((Math.random() * 480) + 20), 'light');


      
      
        for (i = 0; i < Gameobjects.length; i++) {

            Gameobjects[i].inputEnabled = true;
            Gameobjects[i].input.enableDrag();
            Gameobjects[i].events.onDragStart.add(this.onDragStart, this);
            Gameobjects[i].events.onDragStop.add(this.onDragStop, this);
            
             tweenobjects[i] =  game.add.tween(Gameobjects[i].scale).to( { x: 1.03, y: 1.03 }, Math.floor((Math.random() * 400) + 400), "Sine.easeInOut", true, 0, -1, true);
        }
        
       fx = game.add.audio('blaster');
      wrongfx = game.add.audio('wrongans');
      var text2 = game.add.text(10, 480, "จงเลือกเครื่องใช้ไฟฟ้าให้ตรงกับหมวดหมู่การใช้งาน", {
        font: "30px Arial black",
        fill: 'white',
        align: "center"
    });
      
      
  },
    onDown: function(sprite, pointer){
        result = "Down " + sprite.key;
        //this.blaster.play();
        console.log('down', sprite.key);
	},
    onDragStart: function(sprite, pointer){
		result = "Dragging " + sprite.key;
        
	},
    onDragStop: function(sprite, pointer){
		result = sprite.key + " dropped at x:" + pointer.x + " y: " + pointer.y;
                // Motion or Power
               
                if (sprite.key == "car") {
                    if (sprite.x < 250 && sprite.y < 200) {
                        sprite.input.enabled = false;
                        
                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                         
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "motor") {
                    if (sprite.x < 250 && sprite.y < 200) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "blender") {
                    if (sprite.x < 250 && sprite.y < 200) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "drill") {
                    if (sprite.x < 250 && sprite.y < 200) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                // Heating and Cooling
                if (sprite.key == "oven") {
                    if (sprite.x > 320 && sprite.x < 575 && sprite.y > 20 && sprite.y < 200) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "iron") {
                    if (sprite.x > 320 && sprite.x < 575 && sprite.y > 20 && sprite.y < 200) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "refrigerator") {
                    if (sprite.x > 320 && sprite.x < 575 && sprite.y > 20 && sprite.y < 200) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "air_conditioner") {
                    if (sprite.x > 320 && sprite.x < 575 && sprite.y > 20 && sprite.y < 200) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                // Communication
                if (sprite.key == "computer") {
                    if (sprite.x > 30 && sprite.x < 270 && sprite.y > 240 && sprite.y < 430) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "phone") {
                    if (sprite.x > 30 && sprite.x < 270 && sprite.y > 240 && sprite.y < 430) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "radio") {
                    if (sprite.x > 30 && sprite.x < 270 && sprite.y > 240 && sprite.y < 430) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "tv") {
                    if (sprite.x > 30 && sprite.x < 270 && sprite.y > 240 && sprite.y < 430) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                // Light
                if (sprite.key == "floodlight") {
                    if (sprite.x > 320 && sprite.x < 575 && sprite.y > 240 && sprite.y < 430) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "flashlight") {
                    if (sprite.x > 320 && sprite.x < 575 && sprite.y > 240 && sprite.y < 430) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "lamp") {
                    if (sprite.x > 320 && sprite.x < 575 && sprite.y > 240 && sprite.y < 430) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                }
                if (sprite.key == "light") {
                    if (sprite.x > 320 && sprite.x < 575 && sprite.y > 240 && sprite.y < 430) {
                        sprite.input.enabled = false;

                        feedback = "ถูกต้อง";
                        score += 100;
                         fx.play(); isplaced = true;
                    } else {
                        feedback = " ผิด !";
                        wrongfx.play(); isplaced = true;
                    }
                    
                }
        
        if(score >= 1600){
            t_score = score;
            this.game.state.start("GameOver");
        }
                
	},
    update: function(){
		
	   if(isplaced == true){
           counter ++;
           if(counter > 30){
               counter = 0;
               isplaced = false;
               feedback = "";
           }
       }
	},
	collisionHandler: function(obj1, obj2) {
		
	},
	render: function() {
       // game.debug.text(result, 10, 565);

      //  game.debug.text("จงเลือกเครื่องใช้ไฟฟ้าให้ตรงกับหมวดหมู่การใช้งาน", 10, 510);
       // game.debug.text(feedback, 10, 530);
      //  game.debug.text("Score : " + score + " Points" + counter, 610, 20);
       t.setText("Score : "+score.toString());
        feedback_t.setText(feedback);
     //   game.debug.soundInfo(fx, 20, 32);

	}
};