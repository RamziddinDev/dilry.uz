function animation() {
    var value = document.querySelector('.input_null_1').value;
    if (value == '') {
        alert('Akaxon kerekli joyni tuldirib quysez! iloji busa!!! Rahmat');
    } else {
        alert(value + ' ' + "Мы отправили вам смс с кодом подтверждения");
        document.querySelector('.page_1').style.marginTop = '-100%';
        document.getElementById("page_2").style.display = "flex";
        setTimeout(() => {
            time()
        }, 500)

        function time() {
            document.getElementById("page_1").style.display = "none";
            document.querySelector('.page_2').style.marginTop = '0%';
        }
    }
}

function animation2() {
    var value = document.querySelector('.input_null_2').value;
    if (value == '') {
        alert('Akaxon kerekli joyni tuldirib quysez! iloji busa!!! Rahmat');
    } else {
        document.querySelector('.page_2').style.marginTop = '-100%';
        document.getElementById("page_3").style.display = "flex";
        setTimeout(() => {
            time()
        }, 500)

        function time() {
            document.getElementById("page_2").style.display = "none";
            document.querySelector('.page_3').style.marginTop = '0%';
        }
    }

}

function animation3() {
    document.querySelector('.page_2').style.marginTop = '-100%';
    document.getElementById("page_1").style.display = "flex";
    setTimeout(() => {
        time()
    }, 500)

    function time() {
        document.getElementById("page_2").style.display = "none";
        document.querySelector('.page_1').style.marginTop = '0%';
    }
}




//if this function is not work plaesa call me, my nomer is a 90 244 2276;




//function animation(){
//    document.getElementById("active").style.display = "none";
//    document.getElementById("active_page").style.display = "grid";
//    document.getElementById("active_page").style.marginTop = "0";}
//function animation2(){
//    document.getElementById("active").style.display = "grid";
//    document.getElementById("active_page").style.display = "none";
//    document.getElementById("active_page").style.marginTop = "0";
//    document.getElementById("active_page_2").style.display = "none";}
//function animation3(){
//    document.getElementById("active").style.display = "none";
//   document.getElementById("active_page").style.display = "none";
//    document.getElementById("active_page").style.marginTop = "0";
//    document.getElementById("active_page_2").style.display = "grid";}