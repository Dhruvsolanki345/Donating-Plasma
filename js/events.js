
function bigDiv(target){
    target.style.transform = 'scale(1.08)' ;
}

function normalDiv(target){
    target.style.transform = 'scale(1.00)' ;
}

function removeWarning(){
    document.getElementById("nameloc").innerHTML="";
    document.getElementById("emailloc").innerHTML="";
}

function resetFun(){
    document.getElementById("demo").innerHTML = "The form was reset";
}
