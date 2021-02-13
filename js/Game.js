class Game{
    constructor(){}
    gameState(){
        var gameRef = database.ref('gameState')
        gameRef.on("value", function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if(gameState===0){
            player = new Player()
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }

    c1 = createSprite(100, 200)
    c1.addImage(car1)
    c2 = createSprite(300, 200)
    c2.addImage(car2)
    c3 = createSprite(500, 200)
    c3.addImage(car3)
    c4 = createSprite(700, 200)
    c4.addImage(car4)
    car = [c1, c2, c3, c4]


    }
    play(){
        form.hideInfo()
        
        Player.getPlayersInfo()
        if(allPlayers !== undefined){
            background(rgb(198, 135, 103))
         image(track, 0, -displayHeight * 4, displayWidth, displayHeight * 5)
            //var display_position = 130
            var index = 0
            var x = 175
            var y
           for(var plr in allPlayers){
            index = index+1
            x = x+200
            y = displayHeight - allPlayers[plr].distance
            car[index-1].x = x
            car[index-1].y = y  
            if(index===player.index){
            stroke(10)
            fill("red")
            ellipse(x, y, 60, 60)
            car[index-1].shapeColor = "red"
            camera.position.x = displayWidth/2
            camera.position.y = car[index-1].y
               }
        }}
   
    if(keyIsDown(UP_ARROW)&&player.index !== null){
        player.distance+=50 
        player.update()       
    }
    if(player.distance>3800){
        gameState = 2
    }
drawSprites()    
}
end(){
    image(gameOver, 500, 500, 100, 100)
    console.log("Game Over!")
}
}
