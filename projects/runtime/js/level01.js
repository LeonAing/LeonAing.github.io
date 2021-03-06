var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs00 = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY-100},
                {type: 'sawblade',x:600,y:groundY-100},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'spike',x:300,y:groundY},
                {type: 'fire',x:1000,y:groundY},
                {type: 'enemy',x:500,y:groundY-50},
                {type: 'enemy',x:600,y:groundY-50},
                {type: 'enemy',x:700,y:groundY-50},
                {type: 'reward',x:900,y:groundY-150},
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
    var hitZoneSize = 25;
    var damageFromObstacle = 10;

    function createSawBlade(x,y) {
        // your code goes here
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
}
    
    function createSpike(x,y) {
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/wooden-barricade.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
}
    function createFire(x,y) {
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/fire.png');
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
}
    
    function createEnemy(x,y) {
        // all code from TODO 12
        var enemy =  game.createGameItem('enemy', 25);
        var redSquare = draw.rect(50,50,'red');
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
    
        enemy.velocityX = -1;
        enemy.rotationalVelocity = 10;
    
        enemy.onPlayerCollision = function() {
        console.log('The enemy has hit Halle');
        game.changeIntegrity(-10);
        enemy.fadeOut();
        };
        enemy.onProjectileCollision = function() {
        console.log('Halle has hit the enemy');
        game.increaseScore(100);
        enemy.shrink();
        };
}
    function createReward(x,y) {
        var reward =  game.createGameItem('reward', 25);
        var yellowCircle = draw.circle(25,'yellow');
        yellowCircle.x = -25;
        yellowCircle.y = -25;
        reward.addChild(yellowCircle);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
    
        reward.velocityX = -1;
        //enemy.rotationalVelocity = 10;
    
        reward.onPlayerCollision = function() {
        console.log('Halle has collected a reward');
        game.increaseScore(500);
        reward.fadeOut();
        };
}


    for(var i = 0; i <= levelData.gameItems.length; i++){
        if(levelData.gameItems[i].type === 'sawblade') {createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y);
        }
        else if(levelData.gameItems[i].type === 'spike') {createSpike(levelData.gameItems[i].x, levelData.gameItems[i].y);
        }
        else if(levelData.gameItems[i].type === 'fire') {createFire(levelData.gameItems[i].x, levelData.gameItems[i].y);
        }
        else if(levelData.gameItems[i].type === 'enemy') {createEnemy(levelData.gameItems[i].x, levelData.gameItems[i].y);
        }
        else if(levelData.gameItems[i].type === 'reward') {createReward(levelData.gameItems[i].x, levelData.gameItems[i].y);
        }
}
};
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}