let date = moment().format("dddd, Do");
$(`#currentDay`).text(date);

let currentTime = parseInt(moment().format("H"));

function saveButton() {
    let input8 = $(`#8`).val();
    let input9 = $(`#9`).val();
    let input10 = $(`#10`).val();
    let input11 = $(`#11`).val();
    let input12 = $(`#12`).val();
    let input1 = $(`#13`).val();
    let input2 = $(`#14`).val();
    let input3 = $(`#15`).val();
    let input4 = $(`#16`).val();
    let input5 = $(`#17`).val();
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

$(`#8`).val(localStorage.getItem("input8"));
$(`#9`).val(localStorage.getItem("input9"));
$(`#10`).val(localStorage.getItem("input10"));
$(`#11`).val(localStorage.getItem("input11"));
$(`#12`).val(localStorage.getItem("input12"));
$(`#13`).val(localStorage.getItem("input1"));
$(`#14`).val(localStorage.getItem("input2"));
$(`#15`).val(localStorage.getItem("input3"));
$(`#16`).val(localStorage.getItem("input4"));
$(`#17`).val(localStorage.getItem("input5"));

$(`input`).each(function() {
    if (parseInt($(this).attr(`id`)) === currentTime){
        $(this).addClass(`present`)
    }else if(parseInt($(this).attr(`id`)) < currentTime){
        $(this).addClass(`past`)
    }else {
        $(this).addClass(`future`)
    }
});