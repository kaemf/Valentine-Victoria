document.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const buttonRect = denyButton.getBoundingClientRect();
  const buttonCenterX = buttonRect.left + buttonRect.width / 2;
  const buttonCenterY = buttonRect.top + buttonRect.height / 2;

  const distanceX = mouseX - buttonCenterX;
  const distanceY = mouseY - buttonCenterY;
  const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

  if (distance < config.maxDistance) {
    const moveX = (distanceX / distance) * config.moveSpeed;
    const moveY = (distanceY / distance) * config.moveSpeed;

    let newX = denyButton.offsetLeft - moveX;
    let newY = denyButton.offsetTop - moveY;

    newX = Math.max(0, Math.min(window.innerWidth - buttonRect.width, newX));
    newY = Math.max(0, Math.min(window.innerHeight - buttonRect.height, newY));

    denyButton.style.left = `${newX}px`;
    denyButton.style.top = `${newY}px`;
  }
});