let points = 3;
let change  = 0;
const goodAns = createAudio("data/sounds/good_choice.mp3", false,0.7, 1);
const badAns = createAudio("data/sounds/bad_choice.mp3", false,0.7, 1);
const cancel = createAudio("data/sounds/cancel.wav", false,0.7, 1);


function init_p4() {
    // Disable swiper when arriving
    swiper.disable();
    document.getElementById("p4p1").innerText = getText("p4-p1");
    linkDiv("assemblee", false);
    linkDiv("maires", true);
    linkDiv("conseil", true);
    linkDiv("prime", true);
    const slide = document.getElementById("p4");

    let illust = {
        pos1: '40%',
        pos2: '43%',
        pos3: '120%',
        pos4: '120%'
      }
    
    slide.onclick = function (){
        anime({
          targets: illust,
          pos1: '25%',
          pos2: '28%',
          pos3: '48%',
          pos4: '70%',
          loop: false,
          easing: 'easeInOutCubic',
          update: function(anim) {
            document.getElementById("p4-bulle-pm").src = "img/dialogBoxes/P4_MEDIUM_SECRETAIRE_2.svg";
            document.getElementById("p4p1").innerText = getText("p4-p2");
            document.getElementById("p4-bulle-pm").style.top = illust.pos1;
            document.getElementById("p4p1").style.top = illust.pos2;
            document.getElementById("assemblee").style.top = illust.pos3;
            document.getElementById("maires").style.top = illust.pos3;
            document.getElementById("conseil").style.top = illust.pos4;
            document.getElementById("prime").style.top = illust.pos4;
            slide.onclick = null;
          }
        }
        )};


        function linkDiv(divId, valid) {
            const element = document.getElementById(divId);
            if (valid) {
                element.addEventListener("click", event => {
                    element.style.background = "#0AF2E1";
                    document.getElementById("p4-bulle-pm").setAttribute ('src',"img/dialogBoxes/P4_SMALL_SECRETAIRE_2.svg");
                    document.getElementById("p4p1").innerText = getText("p4-all-desc");
                    element.querySelector(".positiontext").style.background = "#fff";
                    element.querySelector(".positiontext").style.color = "#4F00EC";
                    element.querySelector(".validityIcon").style.display = "block";
                    goodAns.play();
        
                    points = points - 1;
        
                    if (points <= 0) {
                        // Enable swiper once the right answers have been given
                        document.getElementById("p4p1").innerText = getText("p4-all-desc-good");
                        showTitle("p4");
                        deleteEventListener("assemblee");
                        deleteEventListener("maires");
                        deleteEventListener("conseil");
                        deleteEventListener("prime");
                        shakeElement(document.getElementById("p4-bulle-pm"));
                        setTimeout(()=>{
                            document.getElementById("p4-bulle-pm").setAttribute ('src',"img/dialogBoxes/P4_MEDIUM_NOTE.svg");
                            document.getElementById("p4p1").innerText = getText("p4-note1");
                        },1500);

                        setTimeout(()=>{
                            document.getElementById("p4p1").innerText = getText("p4-note2");
                            showArrow();
                            swiper.enable();
                        },5000);
                       
                        
                        
                    }
        
                }, false);
            } else {
                element.addEventListener("click", event => {
                    if(change == 1){
                        element.style.background = "#fff";
                        element.querySelector(".positiontext").style.background = "#d0bff7";
                        element.querySelector(".positiontext").style.color = "#fff";
                        element.querySelector(".validityIcon").style.display = "none";
                        cancel.play();
                        change = 0;
        
                    }else{
                        shakeElement(element);
                        document.getElementById("p4-bulle-pm").setAttribute ('src',"img/dialogBoxes/P4_SMALL_SECRETAIRE_2.svg");
                        document.getElementById("p4p1").innerText = getText("p4-a1-desc");
                        element.style.background = "#FF2019";
                        element.querySelector(".positiontext").style.background = "#fff";
                        element.querySelector(".positiontext").style.color = "#4F00EC";
                        element.querySelector(".validityIcon").style.display = "block";
                        badAns.play();
                        change = 1;
                    }
                }, false);
            }
        };
    };


function deleteEventListener(divId) {
    const element = document.getElementById(divId);
    element.replaceWith(element.cloneNode(true));
}
