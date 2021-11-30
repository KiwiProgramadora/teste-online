class Form{
    constructor(){

    }
    //-------//-------------//-----------//--------------------//------------------///--------------------//---
    display(){
        //var//
        var title = createElement('h2');
        var input = createInput('name');
        var button = createButton('play')
        var messege = createElement('h3')
        //html//
        title.html('carritos')
        //blablabla//
        title.position(130, 0)
        input.position(130, 120)
        button.position(250, 200)
        messege.position(130, 160)
        //MAUSE PRESSED :D//
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount += 1;
            player.update(name);
            player.updateCount(playerCount);
            //html.2//
            messege.html('Hello  '+ name + ' welcome to carritos :)');
            
        })
        
        
        
    }
    //-------//-------------//-----------//--------------------//------------------///--------------------//---
}