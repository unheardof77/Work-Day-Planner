/* 

color code timeblocks*/

function saveButton() {
    let input8 = $(`#input8`).val();
    let input9 = $(`#input9`).val();
    let input10 = $(`#input10`).val();
    let input11 = $(`#input11`).val();
    let input12 = $(`#input12`).val();
    let input1 = $(`#input1`).val();
    let input2 = $(`#input2`).val();
    let input3 = $(`#input3`).val();
    let input4 = $(`#input4`).val();
    let input5 = $(`#input5`).val();
    localStorage.setItem("input8", input8);
    localStorage.setItem("input9", input9);
    localStorage.setItem("input10", input10);
    localStorage.setItem("input11", input11);
    localStorage.setItem("input12", input12);
    localStorage.setItem("input1", input1);
    localStorage.setItem("input2", input2);
    localStorage.setItem("input3", input3);
    localStorage.setItem("input4", input4);
    localStorage.setItem("input5", input5); 
};

$("#btn8, #btn9, #btn10, #btn11, #btn12, #btn1, #btn2, #btn3, #btn4, #btn5").click(function (event) {
    event.stopPropagation();
    saveButton()
});

$(`#input8`).val(localStorage.getItem("input8"));
$(`#input9`).val(localStorage.getItem("input9"));
$(`#input10`).val(localStorage.getItem("input10"));
$(`#input11`).val(localStorage.getItem("input11"));
$(`#input12`).val(localStorage.getItem("input12"));
$(`#input1`).val(localStorage.getItem("input1"));
$(`#input2`).val(localStorage.getItem("input2"));
$(`#input3`).val(localStorage.getItem("input3"));
$(`#input4`).val(localStorage.getItem("input4"));
$(`#input5`).val(localStorage.getItem("input5"));

let date = moment().format("dddd, Do");
$(`#currentDay`).text(date)