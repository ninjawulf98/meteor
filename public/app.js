var nasa = {};
var settings = undefined;

var settingrequest = new XMLHttpRequest();
settingrequest.open('GET', '/settings', true);
settingrequest.onload = function () {
    settings = JSON.parse(this.response);
    
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
        document.getElementById(settings.dataid).innerHTML = str;
        //assign globals
        nasa.data = data;

        var myp5 = new p5(s, settings.vizid);
    }

    // Send request
    datarequest.send();

}
settingrequest.send();



//start sketch
var s = function( sketch ) {
  
    sketch.setup = function() {
        const w = document.getElementById(settings.vizid).offsetWidth;
        sketch.createCanvas(w, w);
    };
  
    sketch.draw = function() {
      sketch.background(0);
      sketch.fill(255);
    };
  };
  
  