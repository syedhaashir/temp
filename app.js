let input_1;
let input_2;
let matrixOne = [], matrixTwo = [];
function start() {
    
    let display = document.querySelector('#form2')
    
    input_1 = +document.querySelector('#input_1').value;
    input_2 = +document.querySelector('#input_2').value;


    // input_1 = Number(input_1);
    // input_2 = Number(input_2);


    if (isNaN(input_1) && isNaN(input_2)) {
        alert("Please Enter Valid Rows And Columns")


    }
    else if (input_1 == input_2) {
        document.querySelector('#mat_1').innerHTML = "";
        for (let i = 0; i < input_1; i++) {
            matrixOne.push([])
            for (let j = 0; j < input_2; j++) {
                matrixOne[i].push(0)

                document.querySelector('#mat_1').innerHTML += (`<input type="number" placeholder="0" required id="mat1_${[i]}${[j]}" class="vals">`)
            }
            document.querySelector('#mat_1').innerHTML += ("<br>")

        }


        document.querySelector('#mat_2').innerHTML = "";
        for (i = 0; i < input_1; i++) {
            for (j = 0; j < input_2; j++) {

                document.querySelector('#mat_2').innerHTML += (`<input type="number" placeholder="0" required id="mat2_${[i]}${[j]}" class="vals">`)
            }
            document.querySelector('#mat_2').innerHTML += ("<br>")

        }


        console.log("No.of rows are : ", input_1);
        console.log("No.of columns are : ", input_2);

        display.style.display = 'block';


    }

    else {
        alert("Please Enter Same No. Of Rows And Columns");
    }
}

function sum() {

    let display = document.querySelector('#result')
    display.style.display = 'block'

    // let input_1 = document.querySelector('#input_1').value;
    // let input_2 = document.querySelector('#input_2').value;


    // input_1 = Number(input_1);
    // input_2 = Number(input_2);

    
    let result = [];
    let result2 = [];

    for (let i = 0; i < input_1; i++) {
        for (let j = 0; j < input_2; j++) {
            matrixOne[i][j] = Number(document.getElementById(`mat1_${[i]}${[j]}`).value);
        }

    }
    for (i = 0; i < input_1; i++) {
        for (j = 0; j < input_2; j++) {
            matrixTwo[i][j] = Number(document.getElementById(`mat2_${[i]}${[j]}`).value);
        }

    }
    for(let i = 0; i < input_1; i++){
        result[i] = []
        result2[i] = []
        for(let j = 0; j < input_1; j++){
          result[i][j] = 0
          result[i][j] = ''
          for(let k = 0; k < input_1; k++){    
            result[i][j] += mats_1[i][k] * mats_2[k][j];
            result2[i][j] += k == 0 ? `${mats_1[i][k]} x ${mats_2[k][j]}` : ` + ${mats_1[i][k]} x ${mats_2[k][j]}`
          }  
        }
        
      }




    for (let i = 0; i < input_1; i++) {

        for (let j = 0; j < input_2; j++) {
            document.querySelector('#result').innerHTML += (`<strong class="value" style="text-align:center;">${result[i][j]}</strong>`)

        }
        document.querySelector('#result').innerHTML += ("<br>")
    }

    // for (i = 0; i < input_1; i++) {
    //     for (j = 0; j < input_2; j++) {
    //         document.getElementById(`div_${i}${j}`).innerText += result[i][j];
    //     }

    // }

    console.log(mats_1);
    console.log(mats_2);
    console.log(result);
    return;
}