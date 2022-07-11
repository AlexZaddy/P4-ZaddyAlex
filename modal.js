function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
let formData = document.querySelectorAll(".formData");
const locaction = document.getElementsByName('location');
let formDataCheck = document.querySelector(".formDataCheck");
let checkbox1 = document.getElementById('checkbox1');
let birthdate = document.getElementById('birthdate');
let firstName = document.getElementById('first');
let lastName = document.getElementById('last');
let nbTournois = document.getElementById('quantity');
let mail = document.getElementById('email');
let modalBody = document.getElementsByClassName('modal-body');
let form = document.getElementsByName('reserve');





const data = {}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
locaction.forEach(city => {
  city.addEventListener('click', function () { data.city = this.value })
});



function secondEtape() {
  modalBody[0].appendChild(document.createElement('aside'));
  modalBody[0].querySelector('aside').classList.add('tempo-text');
  modalBody[0].querySelector('.tempo-text').innerText = "Merci ! Votre réservation a été reçue.";
  // modalBody[0].querySelector('.t').item(1).classList.add('tempo');
  modalBody[0].querySelector('.tempo-text').style.marginBottom = '100%';
  modalBody[0].appendChild(document.createElement('button'));
  modalBody[0].querySelectorAll('button').item(0).innerText = 'terminer';
  modalBody[0].querySelectorAll('button').item(0).classList = 'btn-submit';
  modalBody[0].querySelectorAll('button').item(0).classList.add('tempo-text');

  let tempo = document.querySelectorAll('.tempo-text');
  tempo[1].addEventListener('click', function () {
    modalbg.style.display = "";
    form[0].style.display = '';
    tempo.forEach(element => {
      element.remove();
    });

  })

}

function validate(e) {
  e.preventDefault();
  if (data) {
    // cree une cle dans mon objet data 
    data.first = formData[0].querySelector('input').value;
    data.last = formData[1].querySelector('input').value;
    data.email = formData[2].querySelector('input').value;
    data.nee = formData[3].querySelector('input').value;
    data.compet = formData[4].querySelector('input').value;
    console.log(data);

    formData.forEach(element => {
      if (element.querySelector('input').value === "") {
        element.querySelector('input').style.border = "2px solid red";
        element.append(document.createElement('div'));
        element.querySelector('div').append(document.createElement('p'))
        element.querySelector('p').innerText = "lorem ipsum oiute oiureoi ios!";
        element.querySelector('p').style.fontSize = '12px';
        element.querySelector('p').style.color = 'red';
        //console.log(element)

      }
      else if (element.querySelector('p') && element.querySelector('p') != "") {
        element.querySelector('input').style.border = "none";
        element.querySelector('p').innerText = "";

      }

    });
    if (!data.city || data.city == "") {
      formDataCheck.append(document.createElement('p'));
      formDataCheck.querySelector('p').innerText = "Vous devez choisir une option.";
      formDataCheck.querySelector('p').style.fontSize = '12px';
      formDataCheck.querySelector('p').style.color = 'red';
    } else if (formDataCheck.querySelector('p')) {
      formDataCheck.querySelector('p').innerText = "";
    }

    if (checkbox1.checked != true) {
      formData[5].append(document.createElement('p'));
      formData[5].querySelector('p').innerText = "Vous devez vérifier que vous acceptez les termes et conditions.";
      formData[5].querySelector('p').style.fontSize = '12px';
      formData[5].querySelector('p').style.color = 'red';
    }

    if (birthdate.value == "") {
      formData[3].querySelector('p').innerText = "Vous devez entrer votre date de naissance.";

    }
    if (firstName.value == "" && firstName.value.length < 2) {
      formData[0].querySelector('p').innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    }
    if (lastName.value == "" && lastName.value.length < 2) {
      formData[1].querySelector('p').innerText = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    }
    if (nbTournois.value == 0) {
      formData[4].querySelector('p').innerText = "Vous devez entrer le nombre de tounois aux quelle vous déja participée";
    }
    if (mail.value == "") {
      formData[2].querySelector('p').innerText = "Entré un mail valide."
    }
  }
  if (data.first && data.first !== "" && data.last && data.last !== "" && data.email && data.email !== "" && data.nee && data.nee !== "" && data.compet && data.compet !== "" && data.city && data.city !== "") {

    form[0].style.display = 'none';
    secondEtape();
  } else {
    console.log('non');
  }
}