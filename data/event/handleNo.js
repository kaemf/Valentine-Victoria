function handleNo() {
  bsod.style.display = "block";
  textElement.textContent = variants.textVariants[noStep];
  denyButton.textContent = variants.buttonsVarinats.deny[noStep];
  acceptButton.textContent = variants.buttonsVarinats.accept[noStep];
  denyEmpty.textContent = variants.buttonsVarinats.deny[noStep];

  if (noStep <= 6){
    setTimeout(() => {
      denyButton.style.top = 'auto';
      denyButton.style.left = 'auto';
      bsod.style.display = "none";
    }, intervalToHideBSOD(noStep));
  }
  else{
    denyButton.removeEventListener("click", handleNo);
    acceptButton.removeEventListener("click", handleYes);
  }

  noStep++;
}