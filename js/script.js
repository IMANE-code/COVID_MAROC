function Accueil(){
    let  partieAccueil = document.getElementById('partieAccueil');
    let  partieConseil = document.getElementById('partieConseil');
    let partiequise = document.getElementById("partiequise");

    partiequise.style.display="none";
    partieConseil.style.display="none";
    partieAccueil.style.display="block";
  }
  function Conseil(){
    let  partieAccueil = document.getElementById('partieAccueil');
    let  partieConseil = document.getElementById('partieConseil');
    let partiequise = document.getElementById("partiequise");

    partiequise.style.display="none";
    partieAccueil.style.display="none";
    partieConseil.style.display="block";
  }
  function demmarerTest() {
      let partiequise = document.getElementById("partiequise");
      let partieAccueil =document.getElementById("partieAccueil");
      let partieConseil=document.getElementById("partieConseil");

      partiequise.style.display="block";
      partieConseil.style.display="none";
      partieAccueil.style.display="none";
  }
  var currentSlide = 0;
  var numberSlide = 22;

  function next(){
      var quise = document.getElementsByName("quise");
      
      if (currentSlide == numberSlide) {
          currentSlide = 0;
          quise[currentSlide].style.display ="block"; 
          quise[numberSlide].style.display ="none";
      } else {
          currentSlide = currentSlide + 1;
          quise[currentSlide].style.display ="block"; 
          quise[currentSlide-1].style.display ="none"; 
      }
  }

  
  function prev(){
      var quise = document.getElementsByName("quise");

     if (currentSlide == 0) {
         currentSlide = numberSlide;
         quise[currentSlide].style.display ="block"; 
         quise[0].style.display ="none";
     } else {
         currentSlide = currentSlide - 1;
         quise[currentSlide].style.display ="block"; 
         quise[currentSlide+1].style.display ="none";
     }
 }

