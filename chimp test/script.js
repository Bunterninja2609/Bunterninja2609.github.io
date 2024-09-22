var waitTime = 1;
var autoHide = false;
var isHidden = false;
var timer = 0;
var isRunning = false;
var nextNum = 1;
var totalNumOfNum = 0;
var steps = 10;
var waitTimeInput = document.getElementById("waitTimeInput");
function startTest() {
    for (let index = 1; index <= 9; index++) {
        document.getElementById("button" + index).innerHTML = " "+index+" ";
        document.getElementById("button" + index).style.background = "none";
        document.getElementById("button" + index).style.position = "absolute";
    }

    autoHide = !document.getElementById("autoHide").checked;
    isHidden = false;
    waitTime = Number(waitTimeInput.value)
    isRunning = true;
    nextNum = 1;
    timer = 0;
    totalNumOfNum = 0;
    rearrangeBoxes()
};
function rearrangeBoxes(){
    for (let index = 1; index <= 9; index++) {
        newPos(index)
    }
};
function newPos(number){
    l = Math.floor(Math.random()*10)*50;
    t = Math.floor(Math.random()*10)*50;
    overlap = false;
    i = 0;
    while (i < 1 || (overlap)){
        overlap = false;
        l = Math.floor(Math.random()*10)*50;
        t = Math.floor(Math.random()*10)*50;
        for (let index = 1; index <= 9; index++) {
            if (l+"px" == document.getElementById("button" + index).style.left && t+"px" == document.getElementById("button" + index).style.top) {
                //alert("overlap " + i);
                overlap = true;
            }
        }
        i++;
    }
    document.getElementById("button" + number).style.left = l + "px";
    document.getElementById("button" + number).style.top = t + "px";
    
}
setInterval(function(){
    if (isRunning){
        timer = timer += steps/1000
        document.getElementById("timer").innerHTML = Math.floor(timer*100)/100 +"  "+waitTime;
        if (totalNumOfNum >= 9) {
            isRunning=false;
        }
        hide(timer >= waitTime && !autoHide)
        
    }
}, steps);

function enterNum(number){
    hide(autoHide)
    
    if (number == nextNum) {
        totalNumOfNum += 1;
        nextNum += 1;
        document.getElementById("button" + number).innerHTML = "";
        document.getElementById("button" + number).style.background = "none";
        //document.getElementById("button" + index).style.boxShadow = "none";
    };
};
function hide(bool){
    if (bool && !isHidden){
        waitTime = timer;
        isHidden = true;
        
        for (let index = 1; index <= 9; index++) {
            document.getElementById("button" + index).innerHTML = "";
            document.getElementById("button" + index).style.backgroundColor = "#f5f5f5";
            //document.getElementById("button" + index).style.boxShadow = "1px 1px 10px white";

        }
    }
}
