function highlightText(){
    var elem = document.getElementsByTagName('strong');
    
        for (var i=0; i<elem.length; i++){
            elem[i].style.color = "green";
        }
}

function normalText(){
    var elem = document.getElementsByTagName('strong');

        for (var i=0; i<elem.length; i++){
            elem[i].style.color = "black";
        }
}