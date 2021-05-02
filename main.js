var canvas = new fabric.Canvas("myCanvas");
block_width = 30;
block_height = 30;
player_x = 10;
player_y = 10;
var player_object = "";
function player_update(){
fabric.Image.fromURL("player.png" , function(Img){
player_object = Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y , 
left:player_x
});
canvas.add(player_object);
});
}
var block_object = "";
function image_update(get_image){
    fabric.Image.fromURL(get_image , function(Img){
    block_object = Img;
    block_object.scaleToWidth(block_width);
    block_object.scaleToHeight(block_height);
    block_object.set({
    top:player_y , 
    left:player_x
    });
    canvas.add(block_object);
    });
    }
    window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    key_press =  e.keyCode;
    if(e.shiftKey == true && key_press == "80"){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        }
        if(e.shiftKey == true && key_press == "77"){
            block_width = block_width - 10;
            block_height = block_height - 10;
            document.getElementById("current_width").innerHTML = block_width;
            document.getElementById("current_height").innerHTML = block_height;
        }
        if(key_press == "38"){
            up()
        }
        if(key_press == "40"){
            down()
        }
        if(key_press == "37"){
            left()
        }
        if(key_press == "39"){
            right()
        }
        if(key_press == "87"){
            image_update("wall.jpg");
        console.log("w")
        }
        if(key_press == "71"){
            image_update("ground.png");
        console.log("g")
        }
        if(key_press == "76"){
            image_update("light_green.png");
        console.log("l")
        }
        if(key_press == "84"){
            image_update("trunk.jpg");
        console.log("t")
        }
        if(key_press == "82"){
            image_update("roof.jpg");
        console.log("r")
        }
        if(key_press == "89"){
            image_update("yellow_wall.png");
        console.log("y")
        }
        if(key_press == "68"){
            image_update("dark_green.png");
        console.log("d")
        }
        if(key_press == "67"){
            image_update("cloud.jpg");
        console.log("c")
        }
        if(key_press == "85"){
            image_update("unique.png");
        console.log("u")
        }
}
function up(){
if (player_y >= 0){
player_y = player_y - block_height;
canvas.remove(player_object);
player_update();
}
}
function down(){
    if (player_y <= 650){
    player_y = player_y + block_height;
    canvas.remove(player_object);
    player_update();
    }
    }
    function left(){
        if (player_x >= 0){
        player_x = player_x - block_height;
        canvas.remove(player_object);
        player_update();
        }
        }
        function right(){
            if (player_x <= 450){
            player_x = player_x + block_height;
            canvas.remove(player_object);
            player_update();
            }
            }