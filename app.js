let min = 0;
let seg = 0;
let inicio;

// declarando os botoes
let start = document.getElementById('start');
let pause = document.getElementById('pause');
let zerar = document.getElementById('zerar');



let span = document.getElementById('cronometro');
    span.innerHTML = '00' + ':' + '00';
    start.addEventListener('click', () => {
        inicio = setInterval(() => {
           // span.innerHTML = min + ':' + seg;
            //span.innerHTML = `0${min}:0${seg}`

            if(seg < 10){
                span.innerHTML = `0${min}:0${seg}`
            }else{
                span.innerHTML = `0${min}:${seg}`
            }
            seg += 1;
            if(seg == 60){
                min += 1;
                seg = 0;
            }
        }, 100)
    start.setAttribute('disabled', 'disabled')    
});

pause.addEventListener('click', () => {
    clearInterval(inicio)
    start.removeAttribute('disabled')
});

zerar.addEventListener('click', () => {
    clearInterval(inicio)
    min = 0;
    seg = 0;
    span.innerHTML = '00' + ':' + '00';
    start.removeAttribute('disabled')
});





