function obtenerRespuestas(form1) {
    var sizes = form1.length;
    for (i=0; i < sizes; i++) {
            if (form1[i].checked==true) {
                alert(form1.elements[i].value);
        }
    }
};