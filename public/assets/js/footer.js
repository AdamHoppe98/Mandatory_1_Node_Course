const cats = document.getElementById("cats")

cats.addEventListener("mouseover", () => {
    // const right = cats.style.right;
    const randomNumber = Math.floor(Math.random() * (90 - 10) + 10 )
    console.log(randomNumber);
    
    cats.style.right = randomNumber + '%';
  

})