var unit0 = 0;
var total0=document.getElementById("majtotal");//1. la var total me permet de stocker ce qui est dans la balise qui a comme id majtotal
var tota0=parseInt(total0.innerText); //2. parsint de "convertir" le texte recu en entier. 
var sommetotal=document.getElementById("totall");// idem que 1
var somtot=parseInt(sommetotal.innerText);// idem que 2


function increment0(event){
  unit0++;
  document.getElementById("0").value=unit0
  tota0=1500*unit0;
  total0.innerHTML =tota0; // permet de remplacer le text se trouvant dans majtotal par tota.
  somtot=tota0+tota1+tota2; //pour le total du haut à droite(le grand total).
  sommetotal.innerHTML =somtot;

  return  0;
}
function decrement0(event){
  if (unit0>0) {
    unit0--;
    document.getElementById("0").value=unit0;
    tota0=1500*unit0;
    total0.innerHTML=tota0;
    somtot=tota0+tota1+tota2;
    sommetotal.innerHTML =somtot;

    return  0;
  }

}
function supprime0(){
  alert("Vous allez supprimer de votre panier cet article")
  tota0=0;
  total0.innerHTML=tota0;
  somtot=tota0+tota1+tota2;
  sommetotal.innerHTML =somtot;
  var par=document.getElementById('parent0');// element parent.
  var sup=document.getElementById('sup0'); // element enfant.
  par.remove(sup); //pour supprimer un element enfant il faut absolument passer l'element parent.
}


var unit1 = 0;
var total1=document.getElementById("majtotal1");
var tota1=parseInt(total1.innerText);
function increment1(event){
  unit1++;
  document.getElementById("1").value=unit1;
  tota1=2500*unit1;
  total1.innerHTML =tota1;
  somtot=tota0+tota1+tota2;
  sommetotal.innerHTML =somtot;
  return  0;
}
function decrement1(event){
  if (unit1>0) {
    unit1--;
    document.getElementById("1").value=unit1;
    tota1=2500*unit1;
    total1.innerHTML=tota1;
    somtot=tota0+tota1+tota2;
    sommetotal.innerHTML =somtot;
    return  0;
  }

}


function supprime1(){
  alert("Vous allez supprimer de votre panier cet article")
  tota1=0;
  total1.innerHTML=tota1;
  somtot=tota0+tota1+tota2+0;
  sommetotal.innerHTML =somtot;
  var par=document.getElementById('parent1');
  var sup=document.getElementById('sup1');
  par.remove(sup);
}


var unit2 = 0;
var total2=document.getElementById("majtotal2");
var tota2=parseInt(total2.innerText);
function increment2(event){
  unit2++;
  document.getElementById("2").value=unit2;
  tota2=3000*unit2;
  total2.innerHTML =tota2; 
  somtot=tota0+tota1+tota2+0;
  sommetotal.innerHTML =somtot;
  return  0;
}
function decrement2(event){
  if (unit2>0) {
    unit2--;
    document.getElementById("2").value=unit2;
    tota2=3000*unit2;
    total2.innerHTML=tota2;
    somtot=tota0+tota1+tota2+0;
    sommetotal.innerHTML =somtot;
    return  0;
  }

}


function supprime2(){
  alert("Vous allez supprimer de votre panier cet article")
  tota2=0;
  total2.innerHTML=tota2;
  somtot=tota0+tota1+tota2+0;
  sommetotal.innerHTML =somtot;
  var par=document.getElementById('parent2');
  var sup=document.getElementById('sup2');
  par.remove(sup);
}

//Pour le coeur.
var btn=document.getElementById('btn');
function Toggle(){
  if (btn.classList.contains("far")) { //.classList permet de parcourrir les class dfes elements et .contains indexe la class qui contient far
    btn.classList.remove("far");// .remove permet de supprimer la valeur far de la class
    btn.classList.add("fas");// .add permet d'ajouter fas a la class
}
else{
    btn.classList.remove("fas");
    btn.classList.add("far");
    }
}
var btn1=document.getElementById('btn1');
function Toggle1(){
  if (btn1.classList.contains("far")) {
    btn1.classList.remove("far");
    btn1.classList.add("fas");
}
else{
    btn1.classList.remove("fas");
    btn1.classList.add("far");
    }
}
var btn2=document.getElementById('btn2');
function Toggle2(){
  if (btn2.classList.contains("far")) {
    btn2.classList.remove("far");
    btn2.classList.add("fas");
}
else{
    btn2.classList.remove("fas");
    btn2.classList.add("far");
    }
}

