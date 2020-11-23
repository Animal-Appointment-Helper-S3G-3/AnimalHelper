// good website for seeing symptoms and diagnoses: https://pets.webmd.com/dogs/symptoms 
let symptomsAndDiagnoses = [["vomiting", "itch", "bad breath"],["Bacterial infection of the gastrointestinal tract", "allergies or dry skin", "Brush/clean their teeth. If it is more serious, it could be an oral infection or gum disease."]]
function checkSymptoms(){
  displayDiagnoses.innerHTML = "";
  let s = symptomTextbox.value.toLowerCase();
  for(let i = 0; i < symptomsAndDiagnoses[0].length; i++){
    if(s.includes(symptomsAndDiagnoses[0][i])){
      displayDiagnoses.innerHTML = symptomsAndDiagnoses[1][i]
      break;
    }
  }
}

let button = document.querySelector("#submitSymptomsButton").addEventListener("click", checkSymptoms)