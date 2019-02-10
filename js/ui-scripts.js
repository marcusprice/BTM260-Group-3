/*  UI scripts for 02-07-2019 project  */


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
    $("#how-to-play-content").hide();
    $("#how-to-play-button").click(function(){
        $("#how-to-play-content").toggle();
    });
    $("#hide-how-to-play").click(function(){
        $("#how-to-play-content").toggle();
    });
});

// open glossary
$(document).ready(function(){
    $("#glossary-content").hide();
    $("#glossary-button").click(function(){
        $("#glossary-content").toggle();
        $("#wrapper").css('position', 'fixed');  //stop background scrolling
    });
    $("#hide-glossary").click(function(){
        $("#glossary-content").toggle();
    });
});