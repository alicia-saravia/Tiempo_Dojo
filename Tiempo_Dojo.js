function cargando(){
    alert("Cargando informe meteorológico...");
    return false;
}

function esconder() {
    let esconde = document.getElementById("detener_tiempo");
    esconde.style.display = "none";
}

function cambio_unidad() {
    document.getElementById("unidades");
    unidad = unidades.value;
    console.log(unidad);
    if (unidad=="celsius"){
        let hoy_max = document.getElementById("hoy_max");
        let hoy_min = document.getElementById("hoy_min");
        max = parseInt(hoy_max.innerHTML);
        min = parseInt(hoy_min.innerHTML);
        hoy_max.innerHTML= Math.round((max-32)*5/9) + "°";
        hoy_min.innerHTML = Math.round((min-32)*5/9) + "°";
        let manana_max = document.getElementById("manana_max");
        let manana_min = document.getElementById("manana_min");
        max = parseInt(manana_max.innerHTML);
        min = parseInt(manana_min.innerHTML);
        manana_max.innerHTML = Math.round((max-32)*5/9) + "°";
        manana_min.innerHTML = Math.round((min-32)*5/9) + "°";
        let viernes_max = document.getElementById("viernes_max");
        let viernes_min = document.getElementById("viernes_min");
        max = parseInt(viernes_max.innerHTML);
        min = parseInt(viernes_min.innerHTML);
        viernes_max.innerHTML = Math.round((max-32)*5/9) + "°";
        viernes_min.innerHTML = Math.round((min-32)*5/9) + "°";
        let sabado_max = document.getElementById("sabado_max");
        let sabado_min = document.getElementById("sabado_min");
        max = parseInt(sabado_max.innerHTML);
        min = parseInt(sabado_min.innerHTML);
        sabado_max.innerHTML = Math.round((max-32)*5/9) + "°";
        sabado_min.innerHTML = Math.round((min-32)*5/9) + "°";
    } else {
        let hoy_max = document.getElementById("hoy_max");
        let hoy_min = document.getElementById("hoy_min");
        max = parseInt(hoy_max.innerHTML);
        min = parseInt(hoy_min.innerHTML);
        hoy_max.innerHTML= Math.round(max*9/5 + 32) + "°";
        hoy_min.innerHTML = Math.round(min*9/5 + 32) + "°";
        let manana_max = document.getElementById("manana_max");
        let manana_min = document.getElementById("manana_min");
        max = parseInt(manana_max.innerHTML);
        min = parseInt(manana_min.innerHTML);
        manana_max.innerHTML = Math.round(max*9/5 + 32) + "°";
        manana_min.innerHTML = Math.round(min*9/5 + 32) + "°";
        let viernes_max = document.getElementById("viernes_max");
        let viernes_min = document.getElementById("viernes_min");
        max = parseInt(viernes_max.innerHTML);
        min = parseInt(viernes_min.innerHTML);
        viernes_max.innerHTML = Math.round(max*9/5 + 32) + "°";
        viernes_min.innerHTML = Math.round(min*9/5 + 32) + "°";
        let sabado_max = document.getElementById("sabado_max");
        let sabado_min = document.getElementById("sabado_min");
        max = parseInt(sabado_max.innerHTML);
        min = parseInt(sabado_min.innerHTML);
        sabado_max.innerHTML = Math.round(max*9/5 + 32) + "°";
        sabado_min.innerHTML = Math.round(min*9/5 + 32) + "°";
    }
}