
  function demmarerTest() {
      let partiequise = document.getElementById("partiequise");
      let partieAccueil =document.getElementById("partieAccueil");
      
        partiequise.style.display="block";
        partieAccueil.style.display="none";

        partiequise.style.display="block";
        partieAccueil.style.display="none";
  }

  let currentSlide = 0;
  let numberSlide = 22;

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
  
  let choi=document.getElementsByName('choi');
  function currentSlid1(){
    if(currentSlide == numberSlide){
        choi[0].style.visibility="hidden";
    } 
  }

  function currentSlidX(){
    if(currentSlide != numberSlide){
        choi[0].style.visibility="visible";
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
  var age = document.getElementById('age');
  function validAge(){
   
    if(age>15){
        alert('Age vlidé :)');  
    }
    else {
        alert ('!!!!! Prenez contact avec votre médecin généraliste au moindre doute. Cette application n’est pour l’instant pas adaptée aux personnes de moins de 15 ans. En cas d’urgence, appeler le 15.');
        location.reload();
    }    
  }
