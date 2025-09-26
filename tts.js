// Simple TTS Extension for TypingMind (Web Speech API)

function speakText(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "de-DE"; // DE für Deutsch, en-US für Englisch usw.
  utterance.rate = 1.0;     // Geschwindigkeit (0.5 - 2.0)
  utterance.pitch = 1.0;    // Tonhöhe (0 - 2)
  speechSynthesis.speak(utterance);
}

function addTTSButtons() {
  document.querySelectorAll(".message").forEach(msg => {
    if (!msg.querySelector(".speak-btn")) {
      const btn = document.createElement("button");
      btn.innerText = "🔊";
      btn.className = "speak-btn";
      btn.style.marginLeft = "8px";
      btn.onclick = () => speakText(msg.innerText);
      msg.appendChild(btn);
    }
  });
}

const observer = new MutationObserver(addTTSButtons);
observer.observe(document.body, { childList: true, subtree: true });
document.addEventListener("DOMContentLoaded", addTTSButtons);
