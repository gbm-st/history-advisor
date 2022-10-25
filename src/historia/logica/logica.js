var numeroAyudas = 0;
var minutosTranscurridos = 0;
var segundosTranscurridos = 0;
var minutos = "";
var segundos = "";

function obtenerRespuestas(form1, form2, form3, form4, form5) {
    var sizes = form1.length;
    var faltoResponder = true;
    
    for (i=0; i < sizes; i++) {
        if (form1[i].checked==true) {
            alert(form1.elements[i].value);
            faltoResponder = false;
        }
    }
    if (faltoResponder) {
        alert('Faltó contestar una pregunta. 1')
        return;
    }
    faltoResponder=true;

    sizes = form2.length;
    for (i=0; i < sizes; i++) {
        if (form2[i].checked==true) {
            alert(form2.elements[i].value);
            faltoResponder = false;
        }
    }
    if (faltoResponder) {
        alert('Faltó contestar una pregunta. 2')
        return;
    }
    faltoResponder=true;

    sizes = form3.length;
    for (i=0; i < sizes; i++) {
        if (form3[i].checked==true) {
            alert(form3.elements[i].value);
            faltoResponder = false;
        }
    }
    if (faltoResponder) {
        alert('Faltó contestar una pregunta. 3')
        return;
    }
    faltoResponder=true;

    sizes = form4.length;
    for (i=0; i < sizes; i++) {
        if (form4[i].checked==true) {
            alert(form4.elements[i].value);
            faltoResponder = false;
        }
    }
    if (faltoResponder) {
        alert('Faltó contestar una pregunta. 4')
        return;
    }
    faltoResponder=true;

    sizes = form5.length;
    for (i=0; i < sizes; i++) {
        if (form5[i].checked==true) {
            alert(form5.elements[i].value);
            faltoResponder = false;
        }
    }
    if (faltoResponder) {
        alert('Faltó contestar una pregunta. 5')
        return;
    }

    //Falta redirigir en js a otra pagina, las ayudas y el cronometro
    //TimeMe.js/
    //howto_js_redirect_webpage
    //how-to-measure-a-time-spent-on-a-page
};

function reloj(){
    if (minutosTranscurridos.toString().length == 1)
    {
        minutos = "0"+minutosTranscurridos;
    }
    else 
    {
        minutos = minutosTranscurridos;
    }
    if (segundosTranscurridos.toString().length == 1)
    {
        segundos = "0"+segundosTranscurridos;
    }
    else 
    {
        segundos = segundosTranscurridos;
    }

    document.getElementById("tiempo-reloj").innerText = minutos + ":" + segundos;

    segundosTranscurridos += 1;

    if (segundosTranscurridos == 60) 
    {
        minutosTranscurridos += 1;
        segundosTranscurridos = 0;
    }

    setTimeout("reloj()", 1000)
}

function ayuda(dificultad, pregunta) {
    //Preguntas Prehistoria
    if (dificultad == 1 && pregunta == 1) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ');
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 2) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 3) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 4) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 5) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }

    //Preguntas Independencia
    if (dificultad == 2 && pregunta == 1) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 2) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 3) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 4) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 2 && pregunta == 5) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }

    //Preguntas Segunda Guerra Mundial
    if (dificultad == 3 && pregunta == 1) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 2) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 3) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 4) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 3 && pregunta == 5) {
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C. ')
        numeroAyudas += 1;
        return;
    }
};