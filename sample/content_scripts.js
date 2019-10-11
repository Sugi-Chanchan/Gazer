//$("body").prepend('<div class="txt">Hello World!</div>');
//$("body").prepend('<canvas id="canvas"> </canvas>');


$("body").prepend('<script async type="text/javascript" src="https://webgazer.cs.brown.edu/webgazer.js"></script>');



$("body").prepend(`

 <canvas id="plotting_canvas" width="500" height="500" style="cursor:crosshair;"></canvas>


`);





     
$("body").prepend(`<script type='text/javascript'>
function test(){var prediction = webgazer.getCurrentPrediction();if (prediction) {var x = prediction.x;var y = prediction.y;console.log(x,y)}};</script>`);


$("body").prepend("<script type='text/javascript' >setInterval('test()',500);</script>");

$("body").prepend(`<script type='text/javascript' >


window.onload = function() {

    //start the webgazer tracker
    webgazer.setRegression('ridge') /* currently must set regression and tracker */
        .setTracker('clmtrackr')
        .setGazeListener(function(data, clock) {
          //   console.log(data); /* data is an object containing an x and y key which are the x and y prediction coordinates (no bounds limiting) */
          //   console.log(clock); /* elapsed time in milliseconds since webgazer.begin() was called */
        })
        .begin()
        .showPredictionPoints(true); /* shows a square every 100 milliseconds where current prediction is */


    //Set up the webgazer video feedback.
    var setup = function() {

        //Set up the main canvas. The main canvas is used to calibrate the webgazer.
        var canvas = document.getElementById("plotting_canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = 'fixed';
    };

    function checkIfReady() {
        if (webgazer.isReady()) {
            setup();
        } else {
            setTimeout(checkIfReady, 100);
        }
    }
    setTimeout(checkIfReady,100);
};

window.onbeforeunload = function() {
    //webgazer.end(); //Uncomment if you want to save the data even if you reload the page.
    window.localStorage.clear(); //Comment out if you want to save data across different sessions
}

/**
 * Restart the calibration process by clearing the local storage and reseting the calibration point
 */
function Restart(){
    document.getElementById("Accuracy").innerHTML = "<a>Not yet Calibrated</a>";
    ClearCalibration();
    PopUpInstruction();
}





</script>`);

var canvas;





var webgazer=document.getElementsByName(name);


function createCanvas() {
      canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      var context = canvas.getContext('2d');
      context.fillStyle = "rgb(0,0,192)";
      context.fillRect(0, 0, 64, 64);
    }


createCanvas();



//var webgazer = $.getScript("wbgazer.js");

function myAlert(){
  alert("ばーか");
}


function scrollAlert(){

var y = window.pageYOffset ;

console.log(y);


}





function test(){




var prediction = webgazer.getCurrentPrediction();
if (prediction) {
    var x = prediction.x;
    var y = prediction.y;
console.log(x,y)



}

}







//setInterval('test()',500);

myAlert();
alert("なす");


/*
document.addEventListener("click",function (e) {
		console.log("イベントの通知を受け取った");
	});


var prediction = webgazer.getCurrentPrediction();
if (prediction) {
    var x = prediction.x;
    var y = prediction.y;
console.log(x+":"+y);
}
*/
