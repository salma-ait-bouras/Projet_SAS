const prompt = require('prompt-sync')();

// menu
function menu (){
console.log("===============  ===== Menu ==================== ")
console.log(" 1. Ajouter un nouveau candidat")
console.log(" 2. Ajouter plusieurs candidats à la fois")
console.log(" 3. Afficher la liste des candidats")
console.log(" 4. Voter pour un candidat")
console.log(" 5. Modifier les informations d'un candidat")
console.log(" 6. Supprimer un candidat")
console.log(" 7. Rechercher des candidats")
console.log(" 8. Statistiques de l'élection")
console.log(" 0. sortir ")
console.log("==============================================")

let choix = prompt("choisir un nombre : ")
return choix;
}

//Ajouter un nouveau candidat
const candidats = [
  { cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Indépendant", age: 40,
    electeurs: [] },
  { cin: "CD234567", nom: "El Amrani", prenom: "Fatima Zahra", partiPolitique: "PJD", age: 35,
    electeurs: ["AB123456", "GH456789", "KL678901"] },
  { cin: "EF345678", nom: "Chraibi", prenom: "Younes", partiPolitique: "RNI", age: 45,
    electeurs: [] },
  { cin: "GH456789", nom: "Bennani", prenom: "Salma", partiPolitique: "PAM", age: 29,
    electeurs: ["IJ567890"] },
  { cin: "IJ567890", nom: "Ouahbi", prenom: "Karim", partiPolitique: "Istiqlal", age: 52,
    electeurs: [] },
  { cin: "KL678901", nom: "Ziani", prenom: "Nadia", partiPolitique: "Indépendant", age: 33,
    electeurs: [] },
  { cin: "MN789012", nom: "Tazi", prenom: "Hamza", partiPolitique: "USFP", age: 60,
    electeurs: ["QR901234"] },
  { cin: "OP890123", nom: "Idrissi", prenom: "Meryem", partiPolitique: "PJD", age: 27,
    electeurs: [] },
  { cin: " ", nom: "Berrada", prenom: "Omar", partiPolitique: "RNI", age: 38,
    electeurs: ["CD234567", "EF345678", "MN789012"] },
  { cin: "ST012345", nom: "Fassi", prenom: "Khadija", partiPolitique: "PAM", age: 31,
    electeurs: [] },
];

function ajouter_un(tab)  {
  let CIN = prompt("saisir votre CIN : ")
  let NOM = prompt("saisir votre nom  : ")
  let PRENOM = prompt("saisir votre prenom  : ")
  let PartiPolitique = prompt("qu`il est votre Parti Politique : ")
  let AGE= Number(prompt("saisir votre age  : ")) 
  for (let i=0;i<tab.length;i++){
    for (let j=0;j<tab[i].electeurs.length;j++){
     if(CIN === tab[i].cin || CIN===tab[i].electeurs[j]){
      console.log("vous êtes déjà un candidat .")
      return;
     }
    }
   }   
  while(CIN==="" || NOM==="" || PRENOM===""){
    if(CIN===""){ 
      CIN = prompt("saisir votre CIN : ");}
    else if (NOM===""){
      NOM = prompt("saisir votre nom : ");}
    else 
       PRENOM = prompt("saisir votre prenom : ");
}
  if (PartiPolitique===""){
    PartiPolitique="Indépendant"
  }
  while (!Number.isInteger(AGE) || AGE < 18) {
    if (!Number.isInteger(AGE)) {
        console.log("L'âge doit être un nombre.");
    } else {
        console.log("Vous n'avez pas le droit d'être un candidat.");
        
    }

    AGE = Number(prompt("saisir votre age : "));
  }
    let candidat ={cin:CIN,nom:NOM,prenom:PRENOM,partiPolitique:PartiPolitique,age:AGE,electeurs:[]}
    tab.push(candidat)
  } 


//Ajouter plusieurs candidats à la fois
function ajouter_pls(tab,n){ 
for (let i=0; i<n;i++)
    ajouter_un(tab)
}

//Afficher la liste des candidats
function affichage(tab){
  for (let i=0;i<tab.length;i++){
    console.log(`    candidat: ${i+1} 
    CIN : ${tab[i].cin}
    Nom : ${tab[i].nom}
    Prenom : ${tab[i].prenom}
    PartiPolitique : ${tab[i].partiPolitique}
    Age : ${tab[i].age}
    Nombre de votes: ${tab[i].electeurs.length}
    ------------------------------------`)
  }
}

//Trier les candidats par nombre de votes
function bblSort(tab) {
  let arr=[...tab] 
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < (arr.length - i - 1); j++) {

          if (arr[j].electeurs.length < arr[j + 1].electeurs.length) {

              let temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
          }
      }
  }

  return arr;
}

//Trier les candidats par parti politique
function filter(arr,pp){
  let result=[] 
  for (let i = 0; i < arr.length; i++){
    if (arr[i].partiPolitique===pp){
      result.push(arr[i])
    }
  } 
 return result
}

//votage 
function votage(arr){
  let CIN = prompt("saisir votre CIN : ")
  for (let i=0;i<arr.length;i++){
    for (let j=0;j<arr[i].electeurs.length;j++)
     if(CIN===arr[i].electeurs[j]){
      console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau .")
      return;
     }
  }
 let cin_cnd= prompt("saisir CIN du candidat pour lequel vous souhaitez voter : ")  
let trv=false;  
for (let i=0;i<arr.length;i++){
  if(cin_cnd===arr[i].cin){
    arr[i].electeurs.push(CIN); 
    trv=true
    break ;
  } 
}
if(!trv)
  console.log("aucun candidat a ce CIN")
}

//recherche par CIN
function recherche_cin (arr,r_cin){
  for (let i=0;i<arr.length;i++){
    if(r_cin===arr[i].cin){
       return i;
    } 
  }return "aucun candidat a ce CIN";
}

//modification pp
function modification_du_pp (arr){
let CIN = prompt("saisir  le CIN de candidates tu veux modifies :")
let i=recherche_cin (arr,CIN)
if (Number.isInteger(i)){
 let Npp = prompt("saisir le nouveau parti politique: ")
 arr[i].partiPolitique=Npp
   console.log("la modification fait avec succès .")
}else console.log(i)
}

//modification age
function modification_age (arr){
let CIN = prompt("saisir  le CIN de candidates tu veux modifies :")
let i=recherche_cin (arr,CIN)
if (Number.isInteger(i)){
 let Nage = Number(prompt("saisir le nouveau age : "))
 while (!Number.isInteger(Nage) || Nage < 18) {
    if (!Number.isInteger(Nage)) {
        console.log("L'âge doit être un nombre.");
    } else {
        console.log("L'âge doit être supérieur ou égal à 18.");
    }

    Nage = Number(prompt("saisir votre age : "));
}
 arr[i].age=Nage
  console.log("la modification fait avec succès .")
}else console.log(i)
}

//suppression 
function suppression(arr){
let CIN = prompt("saisir  le CIN de candidates tu veux modifies :")
let index=recherche_cin (arr,CIN)
let temp=0
if (Number.isInteger(index)){
 for (let i=index;i<arr.length-1;i++){
  temp=arr[i]
  arr[i]=arr[i+1]
  arr[i+1]=temp
 }
 arr.pop()
 console.log("la suppression fait avec succès . ")
}
else console.log(index)

}

// recherch par nom
function recherche_nom (arr){
  let Nom = prompt("saisir le nom de candidates tu veux chercher :")
  let trv =false
  for (let i=0;i<arr.length;i++){
    if(Nom===arr[i].nom){
      console.log(`    candidat: ${i+1} 
    CIN : ${arr[i].cin}
    Nom : ${arr[i].nom}
    Prenom : ${arr[i].prenom}
    PartiPolitique : ${arr[i].partiPolitique}
    Age : ${arr[i].age}
    Nombre de votes: ${arr[i].electeurs.length}`)
    trv=true
    } 
  } 
  if (!trv){
    console.log("aucun candidat a ce nom .")
  }
}

//Afficher le nombre total de candidats.
function nmbr_t_candidats (arr){
  console.log (`le nombre total de candidats est : ${arr.length}`)
} 

//le nombre total de votes
function nmbr_t_votes (arr){
  let sum=0
    for (let i=0;i<arr.length;i++){
      sum+=arr[i].electeurs.length
    }

  console.log (`le nombre total de votes est : ${sum}`)
} 

// le Top 3 des candidats ayant le plus de votes.
function top_3(arr){
  let top =[]
  let tab=bblSort(arr)
  for (let i=0;i<3;i++){
    top.push(tab[i])
  }
  console.log ("le Top 3 des candidats  est :")
  affichage(top)
}

//Afficher le nombre de candidats par parti politique.
function nombre_candidats_pp(arr) {
let partis = [];
let nombres = [];
for (let i = 0; i < arr.length; i++) {
    let pp = arr[i].partiPolitique;
    let trouve = false;
    for (let j = 0; j < partis.length; j++) {
        if (partis[j] === pp) {
            nombres[j]++;
            trouve = true;
        }
    }
    if (trouve === false) {
        partis.push(pp);
        nombres.push(1);
    }
}
for (let i = 0; i < partis.length; i++) {
    console.log(partis[i] + " : " + nombres[i] + " candidat(s)");
}
}

let choix;
while (choix != "0") {
  choix = menu();
  switch (choix) {
  case "1":
   ajouter_un(candidats)
   break;
  case "2":
    let n = Number(prompt("combien de candidat tu veux ajouter :"))
   ajouter_pls(candidats,n)
   break;
  case "3":
    let m ;
    m= prompt(`1.Afficher la liste des candidats:
2.Afficher la liste des candidats trier par le nombre de votes :
3.Afficher la liste des candidats d'un parti politique spécifique : 
0.sortir
choisire un nombre : `)
      while(m!=0){
        if (m==1){
          affichage(candidats)
          break;
        }
        else if (m==2){
          affichage(bblSort(candidats))
          break;
        }
        else if (m==3){
          let pp= prompt("saisir le parti politique:")
          affichage(filter(candidats,pp))
          break;
        }
        else 
          console.log("ce choix n'existe pas .")
         break;
      }
   break;
  case "4":
    votage(candidats)
   break;
  case "5":
    let l ;
    l=prompt(`1. tu veux modifier le parti politique d'un candidat.
2. tu veux modifier l'âge d'un candidat.
0. sortir`)
    while(l!=0){
      if (l==1){
      modification_du_pp(candidats)
      break;
      }
      else if (l==2){
        modification_age (candidats)
        break;
      }
      else 
        console.log("ce choix n'existe pas .")
      break;
    }
   break;
  case "6":
   suppression(candidats)
   break;
  case "7":
    recherche_nom (candidats)
   break;
  case "8":
    let k ;
    k=prompt(`1.Afficher le nombre total de candidats.
2. Afficher le nombre total de votes exprimés dans toute l'élection.
3.Afficher le Top 3 des candidats ayant le plus de votes.
4.Afficher le nombre de candidats par parti politique.
0. sortir`)
    while(k!=0){
      if (k==1){
       nmbr_t_candidats (candidats)
       break;
      }
      else if (k==2){
        nmbr_t_votes (candidats)
        break;
      }
      else if (k==3){
        top_3(candidats)
      }
      else if (k==4){
        nombre_candidats_pp(candidats)
      }
      else 
        console.log("ce choix n'existe pas .")
      break;
    }
  break;
  case "0":
    console.log("Au revoir !");
    break;
  default:
    console.log("ce choix n'existe pas .")
    break;
    }
}
