menu_list_array = ["Chicken Tandoori Pizza","Veg Sureme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza "]

function getmenu(){
    var htmldata;
    onclick= getmenu();
    htmldata = "<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata = htmldata + '<li>' + menu_list_array[i] + '<li>'
    }
    htmldata = htmldata + "</ol>"
    document.getElementById("getmenu()").innerHTML = htmldata;
}
function additem(){
    var htmldata;
    var item = document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata = "<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata = htmldata + <div class="card"> +'<img src="images/pizzaImg.png"/>' + menu_list_array[i] + </div>
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
}