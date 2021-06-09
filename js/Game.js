class Game{
    constructor(){

    }
    getState(){
        var gameRef=database.ref('gameState')
        gameRef.on('value',(data)=>{
            gameState=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerref=await database.ref('playerCount').once('value')
            if (playerref.exists()){
                playerCount=playerref.val()
                player.getCount()
            }
            form= new Form()
            form.display()
        }
    }
    play(){
        form.hide()
        textSize(30)
        Player.getPlayerInfo()
        if (allPlayers!==undefined){
            var position=100
            for(var plr in allPlayers){
                if (plr==='player'+player.index){
                    fill('red')
                }else{
                    fill('black')
                }
                text (allPlayers[plr].name+ ':'+allPlayers[plr].distance,100,position)
                position+=50
            }
        }
        if (keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=30
            player.update()
        }
    }
}