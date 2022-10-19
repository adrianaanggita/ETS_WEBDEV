function myFnc(e){

    
    e.classList.toggle("show");

    var elem = document.getElementById("navID"), elemm = document.getElementById("sidenav")
    right = elem.style.right;
    console.log(right);
    if(right == "0px" || right == "") {
        elem.style.right = "-260px";
        elemm.style.right = "-260px";
    }else{
        elem.style.right = "0px";
        elemm.style.right = "0px";
    }
}
