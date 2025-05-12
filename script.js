// script.js

function openWish() {
    document.getElementById("welcomeScene").classList.add("hidden");
    document.getElementById("wishPaper").classList.remove("hidden");
  }
  
  function startParty() {
    document.getElementById("wishPaper").classList.add("hidden");
    document.getElementById("partyScene").classList.remove("hidden");
    document.getElementById("bgMusic").play();
    launchConfetti();
  }
  
  function showGift() {
    document.getElementById("giftMessage").style.display = "block";
  }
  
  function endParty() {
    document.getElementById("partyScene").classList.add("hidden");
    document.getElementById("endingScene").classList.remove("hidden");
  }
  
  function launchConfetti() {
    const duration = 5 * 1000;
    const end = Date.now() + duration;
  
    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
  
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
  