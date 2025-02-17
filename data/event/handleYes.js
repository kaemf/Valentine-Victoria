function handleYes() {
    if (noStep >= 2){
      textElement.textContent = "А тепер ще раз, будеш моєю Валентиною? 💖";
      denyButton.textContent = "Ніколи в житті!";
      acceptButton.textContent = "Так, моя киця!";
      denyEmpty.textContent = "Ніколи в житті!";
      noStep = 0;
    }
    else{
      document.body.style.background = '#eea6aa';
      ES.style.visibility = "hidden";
      ES.style.opacity = "0";
      setTimeout(() => {
        SSY.style.visibility = "visible";
        SSY.style.opacity = "1";
      }, 1000);
    }
}