const roles = [
  "Software Developer",
  "Web Developer",
  "Mobile App Developer",
  "UI/UX Enthusiast",
];
let roleIndex = 0;
let charIndex = 0;
const roleSpan = document.getElementById("animated-role");

function typeRole() {
  if (charIndex < roles[roleIndex].length) {
    roleSpan.textContent += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(typeRole, 100);
  } else {
    setTimeout(eraseRole, 1200);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    roleSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 50);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 500);
  }
}

document.addEventListener("DOMContentLoaded", typeRole);
