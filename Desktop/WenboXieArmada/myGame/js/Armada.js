// Player prefab constructor function
function Player(game, key, scale, velocity) {
	// call to Phaser.Sprite 
	Phaser.Sprite.call(this, game, game.rnd.integerInRange(64,game.width-64), game.rnd.integerInRange(64,game.height-61), key);

	// add custom properties
	this.anchor.set(0.5);
	this.scale.x = game.rnd.integerInRange(scale, scale + 2);
	this.scale.y = game.rnd.integerInRange(scale, scale + 2);
	this.velocity = game.rnd.integerInRange(velocity, velocity + 4);

	// put some physics on it
	game.physics.enable(this);
	this.body.collideWorldBounds = false;
}

// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Player)
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

// override Phaser.Sprite update (to spin the diamond)
Player.prototype.update = function() {
	this.body.x += this.velocity;
	if(game.input.keyboard.isDown(Phaser.Keyboard.R)){
		this.body.x -= this.velocity * 2;
	}
}

