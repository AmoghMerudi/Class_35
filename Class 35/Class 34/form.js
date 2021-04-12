class Form {
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Multiplayer Car Racing Game");
        title.position(250,10);

        var input  = createInput("Player 1");
        input.position(250,250);

        var button = createButton("Click to play");
        button.position(250,300);

        var greeting = createElement("h1");

        button.mousePressed(
            function(){
                input.hide();
                button.hide();

                var name = input.value();

                playerCount = playerCount+1;

                player.update(name);
                player.updateCount(playerCount);

                greeting.html("Welcome " + name);
                greeting.position(250,250);
            }
        )
    }
}