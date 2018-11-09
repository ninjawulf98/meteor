var nasa = {};

var datarequest = new XMLHttpRequest();
datarequest.open('GET', '/data', true);
datarequest.onload = function () {
    //load data
    var data = JSON.parse(this.response);
    console.log(data);
    
    let str = "<ul>";
    data.forEach(element => {
        str += "<li>" + element.name + " -- " + element.mass + "</li>";
    });
    str += "</ul>";
    //populate raw data
    document.getElementById("data").innerHTML = str;
    //assign globals
    nasa.data = data;
}

// Send request
datarequest.send();