
// global variables
var game;
var player;

// wait for DOM to load before we start up Phaser
window.onload = function() {
	game = new Phaser.Game(500,500, Phaser.AUTO);
	game.state.add('Load', Load);
	game.state.add('Play', Play);
	game.state.start('Load');
}

var Load = function(game) {};
Load.prototype = {
	preload: function() {
		console.log('Load: preload');
		game.load.image('ship', 'assets/img/ship.png');
	},
	create: function() {
		console.log('Load: create');
		game.state.start('Play');
	}
};

var Play = function(game) {};
Play.prototype = {
	preload: function() {
		console.log('Play: preload');
	},
	create: function() {
		console.log('Play: create');
		for(var i = 0; i < 50; i++){
	    player = new Player(game, 'ship', 1, 1);
		game.add.existing(player);
	    }
	},
	update: function() {
		// update
		game.world.wrap(player, 0, true);
	},
};
