var numeroAyudas = 0;
var minutosTranscurridos = 0;
var segundosTranscurridos = 0;
var minutos = "";
var segundos = "";
var valores = [];
var verdaderos = 0;
var falsos = 0;

function obtenerRespuestas(form1, form2, form3, form4, form5) {
    var sizes = form1.length;
    var faltoResponder = true;
    
    for (i=0; i < sizes; i++) 
    {
        if (form1[i].checked==true) 
        {
            valores[0] = form1.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 1')
        return;
    }
    faltoResponder=true;

    sizes = form2.length;
    for (i=0; i < sizes; i++) 
    {
        if (form2[i].checked==true) 
        {
            valores[1] = form2.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 2')
        return;
    }
    faltoResponder=true;

    sizes = form3.length;
    for (i=0; i < sizes; i++) 
    {
        if (form3[i].checked==true) 
        {
            valores[2] = form3.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 3')
        return;
    }
    faltoResponder=true;

    sizes = form4.length;
    for (i=0; i < sizes; i++) 
    {
        if (form4[i].checked==true) 
        {
            valores[3] = form4.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 4')
        return;
    }
    faltoResponder=true;

    sizes = form5.length;
    for (i=0; i < sizes; i++) 
    {
        if (form5[i].checked==true) 
        {
            valores[4] = form5.elements[i].value;
            faltoResponder = false;
        }
    }
    if (faltoResponder) 
    {
        alert('Faltó contestar una pregunta. 5')
        return;
    }

    for (i = 0; i < valores.length; i++)
    {
        if (valores[i] == "Verdadero") 
        {
            verdaderos += 1;
        }
        else
        {
            falsos += 1;
        }
        // alert(valores[i])
    }

    alert(falsos + " " + minutosTranscurridos + " " + numeroAyudas);
    
    var obj = {
        crisp_input: [falsos, minutosTranscurridos, numeroAyudas],
        variables_input: [
            {
                name: "Errores",
                setsName: ["Pocos", "Algunos", "Muchos"],
                sets: [
                    [0,0,1,2],
                    [1,2,3,4],
                    [3,4,5,5]
                ]
            },
            {
                name: "Tiempo",
                setsName: ["Bueno", "Decente", "Mucho"],
                sets: [
                    [0,0,0,2],
                    [1,3,3,5],
                    [4,6,6,6]
                ]
            },
            {
                name: "Ayudas",
                setsName: ["Pocas", "Algunas", "Muchas"],
                sets: [
                    [0,0,0,2],
                    [1,3,3,5],
                    [4,6,6,6]
                ]
            }
        ],
        variable_output: {
            name: "Complejidad",
            setsName: ["Facil", "Medio", "Dificil"],
            sets: [
                [0,0,0,3],
                [2,5,5,8],
                [7,10,10,10]
            ]
        },
        inferences: [
            [2,1,0],
            [2,1,0],
            [2,1,0]
        ]
    };

    var fl = new FuzzyLogic();

    alert(fl.getResult(obj))

    if (fl.getResult(obj) >= 7)
    {
        window.location.href = "../guerra_mundial_2/guerra_mundial_2.html";
    }
    else if (fl.getResult(obj) <= 3)
    {
        window.location.href = "../prehistoria/prehistoria.html";
    }
    else 
    {
        window.location.href = "../independencia_mexico/independencia_mexico.html";
    }

    // Agarrar errores (falsos), tiempo (minutosTranscurridos), ayudas (numeroAyudas) y pasarlos a fuzzy logic.
    //Falta redirigir en js a otra pagina, las ayudas y el cronometro
    
    //TimeMe.js
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

    document.getElementById("tiempo-reloj-1").innerText = minutos + ":" + segundos;
    document.getElementById("tiempo-reloj-2").innerText = minutos + ":" + segundos;

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
        alert('Comprende desde los orígenes de la historia humana hasta los 10 mil años a.C.');
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 2) {
        alert('Su uso se difundió rápidamente debido a su fácil obtención y a su gran maleabilidad')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 3) {
        alert('Comprende desde los 10 mil años a.C. hasta los 3 mil años a.C.')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 4) {
        alert('Se domesticaron algunos animales con los que se organizó la ganadería actual')
        numeroAyudas += 1;
        return;
    }
    if (dificultad == 1 && pregunta == 5) {
        alert('Con esta nueva aleación se comenzó a fabricar nuevas armas, ornamentos y utensilios.')
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