/*La función es para rellenar los demás botones que no tienen 
enlace directo con otra página html*/
(function(){
    const ingresarButton = document.querySelector('.links');
    const ingresarButton2 = [...document.querySelectorAll('.cta')];
    const ingresarButton3 = [...document.querySelectorAll('.price__cta')];

    if (ingresarButton) {
    ingresarButton.addEventListener('click', ()=>{
        alert('Enlace no disponible!');
    });
    };

    ingresarButton2.forEach(button => {
        button.addEventListener('click', ()=>{
            alert('Enlace no disponible!');
    });
    });

    ingresarButton3.forEach(button2 => {
        button2.addEventListener('click', ()=>{
            alert('Enlace no disponible!');
    });
    });

})();