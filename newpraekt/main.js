 // eslatib utaman ushbu script code mening kodim emas
 var list = document.getElementById('salom');
 var nav = document.querySelector('.navigation')
 list.addEventListener('click', click)
 console.log()

 function click() {
     nav.style.transform = "translateX(0)";
     list.style.transform = "translateX(100px)"
 }