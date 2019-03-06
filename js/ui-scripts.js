/*  UI scripts for 03-05-2019 project  */

// mouseover glossary
$('#trigger-sequencer-mouseover').hover(
    function(){ $('#sequencer-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#sequencer-mouseover').removeClass('glossary-mouseover-display') }
)


// envelope canvas
var envelopeCanvas = document.getElementById("envelope-canvas");
var moveCanvas = envelopeCanvas.getContext("2d");
moveCanvas.strokeStyle = "#2AD6A0";
moveCanvas.lineWidth = 5;
moveCanvas.beginPath();
moveCanvas.moveTo(0,0);
moveCanvas.lineTo(970,40);
moveCanvas.stroke();

// tab between synth & drum machine
function openInstrument(event, instrumentName) {
    var i, tabcontent, tablinks; 
    tabcontent = document.getElementsByClassName("instrument-element");
    for (i = 0; i < tabcontent.length; i++ ){
        tabcontent[i].style.display = "none";}
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");}
    document.getElementById(instrumentName).style.display = "block";
    event.currentTarget.className += " active";}
document.getElementById("defaultOpen").click();

// open "how to play" page
$(document).ready(function(){
    $("#how-to-play-button").click(function(){
        $("#how-to-play-content").toggle();
    });
    $("#hide-how-to-play").click(function(){
        $("#how-to-play-content").toggle();
    });
});

