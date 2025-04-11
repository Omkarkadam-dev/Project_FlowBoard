const textArray = [
    "Organize. Prioritize. Execute.",
    "Your Workflow. Simplified.",
    "Build with Kanban Power."
  ];
  const typingSpeed = 80;
  const erasingSpeed = 50;
  const delayBetween = 1800;
  let textIndex = 0;
  let charIndex = 0;
  const typedText = document.getElementById("typed-text");
  
  function type() {
    if (charIndex < textArray[textIndex].length) {
      typedText.textContent += textArray[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetween);
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typedText.textContent = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      textIndex = (textIndex + 1) % textArray.length;
      setTimeout(type, 500);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    if (textArray.length) setTimeout(type, 500);
  });
  