class Form{
    constructor(){
    this.title = createElement('h1');
    this.input = createInput("Enter Name")
    this.button = createButton("Start");
    this.greeting = createElement('h1');
    } 
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
        this.title.position(100,0);
        this.title.html('Car Racing Game');
        this.input.position(100,100);
        this.button.position(100,150);
        this.button.mousePressed(()=>{
            player.name = this.input.value();
            this.input.hide()
            this.button.hide()
            playerCount+=1
            player.index=playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.position(100,100)
            this.greeting.html("Welcome "+ player.name)
        })
    }
}