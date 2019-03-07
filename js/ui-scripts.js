/*
// envelope canvas
var envelopeCanvas = document.getElementById("envelope-canvas");
var moveCanvas = envelopeCanvas.getContext("2d");
moveCanvas.strokeStyle = "#2AD6A0";
moveCanvas.lineWidth = 5;
moveCanvas.beginPath();
moveCanvas.moveTo(0,0);
moveCanvas.lineTo(970,40);
moveCanvas.stroke();
*/

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


// filter type dropdown box
var x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);



// hidden page elements
// open "about" page
$(function(){
    $("#about-button").click(function(){
        $("#about-content").toggle();
    });
    $("#hide-about").click(function(){
        $("#about-content").toggle();
    });
});

// open "how to play" page
$(function(){
    $("#how-to-play-button").click(function(){
        $("#how-to-play-content").toggle();
    });
    $("#hide-how-to-play").click(function(){
        $("#how-to-play-content").toggle();
    });
});

// open "glossary" page
$(function(){
    $("#glossary-button").click(function(){
        $("#glossary-content").toggle();
    });
    $("#hide-glossary").click(function(){
        $("#glossary-content").toggle();
    });
});

// mouseover glossary
$('#trigger-sequencer-mouseover').hover(
    function(){ $('#sequencer-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#sequencer-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-keyboardsequencer-mouseover').hover(
    function(){ $('#keyboardsequencer-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#keyboardsequencer-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-drumsequencer-mouseover').hover(
    function(){ $('#drumsequencer-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#drumsequencer-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-oscillator-mouseover').hover(
    function(){ $('#oscillator-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#oscillator-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-envelope-mouseover').hover(
    function(){ $('#envelope-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#envelope-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-filter-mouseover').hover(
    function(){ $('#filter-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#filter-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-amplifier-mouseover').hover(
    function(){ $('#amplifier-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#amplifier-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-effects-mouseover').hover(
    function(){ $('#effects-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#effects-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-attack-mouseover').hover(
    function(){ $('#attack-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#attack-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-sustain-mouseover').hover(
    function(){ $('#sustain-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#sustain-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-decay-mouseover').hover(
    function(){ $('#decay-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#decay-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-release-mouseover').hover(
    function(){ $('#release-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#release-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-cutofffrequency-mouseover').hover(
    function(){ $('#cutofffrequency-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#cutofffrequency-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-resonance-mouseover').hover(
    function(){ $('#resonance-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#resonance-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-distortion-mouseover').hover(
    function(){ $('#distortion-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#distortion-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-volume-mouseover').hover(
    function(){ $('#volume-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#volume-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-time-mouseover').hover(
    function(){ $('#time-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#time-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-feedback-mouseover').hover(
    function(){ $('#feedback-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#feedback-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-delaydrywet-mouseover').hover(
    function(){ $('#delaydrywet-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#delaydrywet-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-roomsize-mouseover').hover(
    function(){ $('#roomsize-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#roomsize-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-dampening-mouseover').hover(
    function(){ $('#dampening-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#dampening-mouseover').removeClass('glossary-mouseover-display') }
)
$('#trigger-reverbdrywet-mouseover').hover(
    function(){ $('#reverbdrywet-mouseover').addClass('glossary-mouseover-display') },
    function(){ $('#reverbdrywet-mouseover').removeClass('glossary-mouseover-display') }
)