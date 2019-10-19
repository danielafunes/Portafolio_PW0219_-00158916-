
var idCounter = 0;

var parseLateSwitch = value => {
  if (value) {
    return "tarde";
  }
  return "a tiempo";
};

window.onload = () => {
let carnet_field = document.querySelector("#carnet_field");
let schedule_dropdown = document.querySelector("#schedule_field");
let lete_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");
let tbody = document.querySelector("#table_body");
let carnet_regex = new RegExp("[0-9]{8}$");
let student_list = [];
let serial = 0;


let printArray = () => {
  tbody.innerHTML = "";

  student_list.forEach(elem => {
    let newRow = document.createElement("tr");


    let celda = document.createElement("td");
    let celda2 = document.createElement("td");
    let newBtn = document.createElement("button");
    let confirmCarnet = document.createElement("input")


    newRow.classList.add("table-active");
    newRow.innerHTML = `<td>${elem.carnet}</td>
    <td>${elem.horario}</td>
    <td>${elem.horaIngreso.toLocaleString()}</td>
    <td>${elem.tarde}</td>`;

    
    newBtn.className = "btn btn-danger";
    newBtn.innerText = "Eliminar";
    newBtn.value = idCounter;
  

    confirmCarnet.className = "form-control";
    confirmCarnet.type = "text";


    newBtn.addEventListener("click", event => {
      let idElement = event.target.value;

      if (confirmCarnet.value === elem.carnet) {
        student_list.forEach((elem, pos) => {
          if (idElement == idCounter) {
            student_list.splice(pos, 1);
            printArray();
          }
        });
      }else{
        alert ("Por favor ingrese el carnet correcto!!");
      }
    });

    celda2.appendChild(confirmCarnet);
    newRow.appendChild(celda2);
    tbody.appendChild(newRow);

    celda.appendChild(newBtn);
    newRow.appendChild(celda);
    tbody.appendChild(newRow);



  });
};

let add_student = (carnet, schedule, late) => {
  let dateTime = new Date();
  student_list.push({
    id: serial,
    carnet: carnet,
    horario: schedule,
    tarde: late,
    horaIngreso: dateTime
  });
  serial++;
};



submit_btn.addEventListener("click", () => {

  let carnet = carnet_field.value;
  let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text;
  let late = parseLateSwitch(lete_switch.checked);

  if (carnet_regex.test(carnet)) {
    add_student(carnet, schedule, late);
    printArray();
  } else {
    alert("el carnet no es valido");
  }
});

carnet_field.addEventListener("keyup", event => {
  let keyUp = event.kedCode;
  let carnet = carnet_field.value;
  if (keyUp == 13) {
    submit_btn.click();
  }

  if (carnet_regex.test(carnet)) {
    submit_btn.disabled = false;
  } else {
    submit_btn.disabled = true;

  }
});
};