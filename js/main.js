let action = document.getElementById('action');
action.onsubmit = function(e){
    e.preventDefault();
}

function calculate(){

// start bill and people main

    let inputBill = document.getElementById('inputBill').value,
    inputPeople = document.getElementById('inputPeople').value;
    document.getElementById('inputPeople').value = "";
    document.getElementById('inputBill').value = "";

// start your_service

    let select = document.getElementById('select_main'),
    sele = select.options[select.selectedIndex].value;

// start button calculate main

    let total = document.getElementById('total');
    if(inputBill == "" || inputPeople == ""){

        alert("No field can't be left empty");

    }  else {

        // total button calculate main

            total = total.textContent = (inputBill / inputPeople) * parseInt(sele);
    }   
}

