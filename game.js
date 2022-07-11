//document.getElementById("heading").innerHTML="player 1 wins";

function loading(){
    var chance1=Math.floor(Math.random()*6+1);
    var image1="diceimages/d"+chance1+".png";
    //document.getElementById("item1").setAttribute("src",image1);
    document.querySelector("#dice1 #item1").setAttribute("src",image1);

    var chance2=Math.floor(Math.random()*6+1);
    var image2="diceimages/d"+chance2+".png";
    //document.getElementById("item2").setAttribute("src",image2);
    document.querySelector("#dice2 #item2").setAttribute("src",image2);

    if(chance1>chance2){
        document.getElementById("heading").innerHTML="&#127884; player 1 wins";
    }else if(chance1===chance2){
        document.getElementById("heading").innerHTML="OOps  A  Tie!!";
    }else{
        document.getElementById("heading").innerHTML="player 2 wins &#127884;";
    }
}