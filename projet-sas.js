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
  { cin: "QR901234", nom: "Berrada", prenom: "Omar", partiPolitique: "RNI", age: 38,
    electeurs: ["CD234567", "EF345678", "MN789012"] },
  { cin: "ST012345", nom: "Fassi", prenom: "Khadija", partiPolitique: "PAM", age: 31,
    electeurs: [] },
];

function ajouter_un(tab)  {
  let CIN = prompt("saisir votre CIN : ")
  let NOM = prompt("saisir votre nom  : ")
  let PRENOM = prompt("saisir votre prenom  : ")
  let PartiPolitique = prompt("qu`il est votre Parti Politique : ")
  let AGE= Number(prompt("saisir votre age  : ")) ;
  if (PartiPolitique==="")
        PartiPolitique="Indépendant"

  while(!Number.isInteger(AGE)){
    console.log("L'âge doit être un nombre.")
    AGE= Number(prompt("saisir votre age  : "))
  if(AGE<18)
    console.log("Vous n'avez pas le droit d'être un candidat .")
    }
  
    let candidat ={cin:CIN,nom:NOM,prenom:PRENOM,partiPolitique:PartiPolitique,age:AGE,electeurs:[]}
    tab.push(candidat)
}

//Ajouter plusieurs candidats à la fois
function ajouter_pls(n){ 
for (let i=0; i<n;i++)
    ajouter_un(tab)
}

//Afficher la liste des candidats
function affichage(tab){
  for ( i=0;i<tab.length;i++){
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
function bblSort(arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < (arr.length - i - 1); j++) {

          if (arr[j].electeurs.length < arr[j + 1].electeurs.length) {

              let temp = arr[j]
              arr[j] = arr[j + 1]
              arr[j + 1] = temp
          }
      }
  }

  affichage(arr)
}

//Trier les candidats par parti politique
function filter(arr,pp){
  let result=[] 
  for (let i = 0; i < arr.length; i++){
    if (arr[i].partiPolitique===pp){
      result.push(arr[i])
    }
   affichage(result)
  } 
}

