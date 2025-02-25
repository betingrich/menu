document.addEventListener("DOMContentLoaded", function() {
  const text = "Welcome to Bingwa Sokoni data deals.";
  const welcomeText = document.getElementById("welcome-text");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      welcomeText.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
});
