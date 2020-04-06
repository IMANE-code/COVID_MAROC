function Arab(){
    var part2= document.getElementById('part2');
    var part1 =document.getElementById('part1');
    var partArab = document.getElementById('part-arab'); 
    var partFransh =document.getElementById('part-fransh'); 
    var imgFrancais = document.getElementById('img__francais');
    var imgArabe = document.getElementById('img__arabe');

    part2.style.display="bolck";
    partArab.style.display="block";
    imgArabe.style.display="block";

    part1.style.display="none";
    partFransh.style.display="none";
    imgFrancais.style.display="none";
}
function Franc(){
    var part2= document.getElementById('part2');
    var part1 =document.getElementById('part1');
    var partArab = document.getElementById('part-arab'); 
    var partFransh =document.getElementById('part-fransh'); 
    var imgFrancais = document.getElementById('img__francais');
    var imgArabe = document.getElementById('img__arabe');

    part1.style.display="bolck";
    partFransh.style.display="block";
    imgFrancais.style.display="block";

    part2.style.display="none";
    partArab.style.display="none";
    imgArabe.style.display="none";
}
