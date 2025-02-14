const denyButton = document.querySelector(".btn-deny");
const denyEmpty = document.querySelector(".deny-empty");
const acceptButton = document.querySelector(".btn-accept");
const textElement = document.querySelector(".text-appear");
const img = document.querySelector(".image-container > img");
const bsod = document.querySelector(".bsod");
const SSY = document.querySelector(".she-say-yes");
const ES = document.querySelector(".entire-screen");
const imContainer = document.querySelector(".image-container");

const textVariants = [
  "Are you sure pookie? 😳",
  "Don't try to be a sigma...",
  "Think again... 🤔",
  "Don't break my heart 💔",
  "Last chance! 😱",
  "Seriously?! 😵",
  "Okay... you win 😔",
];

let textIndex = 0;
let acceptSize = 1;
let moveSpeed = 4;
let maxDistance = 120;
let textSize = 2;


function handleLoveNo() {
  bsod.style.display = "block";
  textElement.textContent = "Даю можливість передумати, кохана :)";
  setTimeout(() => {
    bsod.style.display = "none";
  }, 5 * 600)
  // textElement.textContent = textVariants[textIndex];
  // textIndex = (textIndex + 1) % textVariants.length;

  // acceptSize += 4.15;
  // acceptButton.style.transform = `scale(${acceptSize})`;

  // textSize += 0.2;
  // textElement.style.fontSize = `${textSize}em`;
}
document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const buttonRect = denyButton.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const distanceX = mouseX - buttonCenterX;
  const distanceY = mouseY - buttonCenterY;
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  if (distance < maxDistance) {
    const moveX = (distanceX / distance) * moveSpeed;
    const moveY = (distanceY / distance) * moveSpeed;

    let newX = denyButton.offsetLeft - moveX;
    let newY = denyButton.offsetTop - moveY;

    newX = Math.max(0, Math.min(window.innerWidth - buttonRect.width, newX));
    newY = Math.max(0, Math.min(window.innerHeight - buttonRect.height, newY));

    // denyButton.style.position = "absolute";
    denyButton.style.left = `${newX}px`;
    denyButton.style.top = `${newY}px`;
  }
});

function handleLoveYes() {
  document.body.style.background = '#eea6aa';
  ES.style.visibility = "hidden";
  ES.style.opacity = "0";
  setTimeout(() => {
    SSY.style.visibility = "visible";
    SSY.style.opacity = "1";
  }, 1000);
}

denyButton.addEventListener("click", handleLoveNo);

const randomInt = (n) => Math.floor(Math.random() * n);
document.getElementById("dynamic").innerText = `
    @keyframes spin {
        0% {
          margin-top: 2vh;
          opacity: 0;
        }
        20% {
          opacity:1.0;
          margin-top: 0vh;
          margin-left: 0vw;
          transform: rotate(${randomInt(90)}deg);
        }
        100% {
          opacity: 0.4;
          margin-top: 100vh;
          margin-left: ${randomInt(4)}vw;
          transform: rotate(1080deg); 
        }
      };
    `;
let numberOfHearts = 45;
  while (numberOfHearts--) {
    var heartDiv = document.createElement("div");
    heartDiv.classList.add("heart");
    heartDiv.style = `animation: spin ${randomInt(14) + 6}s ease-in infinite;
                        top: ${randomInt(40)}vh;
                       left: ${randomInt(100)}vw;
                  font-size: ${randomInt(40) + 20}px;
                      color: ${["#d00", "#e66", "#fcc"][randomInt(3)]};`;
    heartDiv.textContent = ["\u2661", "\u2665"][randomInt(2)];
    document.getElementById("falling-hearts").appendChild(heartDiv);
  }