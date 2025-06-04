
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  loader.style.opacity = "0";
  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 1000);
});



  function selecionarLado(lado) {
    const assassinoBtn = document.getElementById('assassinoBtn');
    const sobreviventeBtn = document.getElementById('sobreviventeBtn');

    if (lado === 'assassino') {
      assassinoBtn.classList.add('bg-red-800');
      sobreviventeBtn.classList.remove('bg-red-800');
      sobreviventeBtn.classList.add('bg-transparent');
    } else {
      sobreviventeBtn.classList.add('bg-red-800');
      assassinoBtn.classList.remove('bg-red-800');
      assassinoBtn.classList.add('bg-transparent');
    }
  }