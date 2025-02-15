function handleYes() {
    document.body.style.background = '#eea6aa';
    ES.style.visibility = "hidden";
    ES.style.opacity = "0";
    setTimeout(() => {
      SSY.style.visibility = "visible";
      SSY.style.opacity = "1";
    }, 1000);
}