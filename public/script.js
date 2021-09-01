
/*  filtro Cães */


filterSelectionSexoC("all")
filterSelectionTamanhoC("all")
filterSelectionDisponibilidadeC("all")

function filterSelectionSexoC(s) {
    var x, i;
    x = document.getElementsByClassName("filterDiv Cachorro");
    if (s == "all") s = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(s) > -1) w3AddClass(x[i], "show");
    }
}

function filterSelectionTamanhoC(t) {
    var x, i;
    x = document.getElementsByClassName("filterDiv Cachorro");
    if (t == "all") t = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(t) > -1) w3AddClass(x[i], "show");
    }
}
function filterSelectionDisponibilidadeC(d) {
    var x, i;
    x = document.getElementsByClassName("filterDiv Cachorro");
    if (d == "all") d = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(d) > -1) w3AddClass(x[i], "show");
    }
}

function filterSelectionSexoG(sg) {
    var x, i;
    x = document.getElementsByClassName("filterDiv Gato");
    if (sg == "all") sg = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(sg) > -1) w3AddClass(x[i], "show");
    }
}

function filterSelectionTamanhoG(tg) {
    var x, i;
    x = document.getElementsByClassName("filterDiv Gato");
    if (tg == "all") tg = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(tg) > -1) w3AddClass(x[i], "show");
    }
}
function filterSelectionDisponibilidadeG(dg) {
    var x, i;
    x = document.getElementsByClassName("filterDiv Gato");
    if (dg == "all") dg = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(dg) > -1) w3AddClass(x[i], "show");
    }
}






function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)


















/* Filtro gatos */





function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}




/* Filtro ADM */




filterSelection3("all")


function filterSelection3(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}





/*  Scroll  */























