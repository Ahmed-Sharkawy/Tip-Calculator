let action = document.getElementById('action');
action.onsubmit = function(e){
    e.preventDefault();
}


// start button calculate main

function calculate(){
    // start bill and people main
    let inputBill = document.getElementById('inputBill').value,
    inputPeople = document.getElementById('inputPeople').value,
    select = document.getElementById('select_main'),
    
    // start your_service
    sele = select.options[select.selectedIndex].value;
    let total = document.getElementById('total');

    if (inputBill == "" || inputPeople == "" || sele == 0){
        
        alert("No field can't be left empty");
        
    }  else {
        
        // total button calculate main
        
        output = (inputBill / inputPeople) * sele;
        output = output.toFixed(2);
        total.textContent = Math.abs(output);

        document.getElementById('inputPeople').value = "";
        document.getElementById('inputBill').value = "";
        document.getElementById('select_main').value = "0"
    }       
}