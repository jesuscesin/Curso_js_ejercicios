class App{
    constructor(descargas,puntuacion,peso){
        this.descargas = descargas;
        this.puntuacion = puntuacion;
        this.peso = peso;
        this.iniciada = false;
        this.instalada = false;     
    }
    instalar(){
        if (this.instalada == false){
            this.instalada = true;
            alert("App Instalada")
        }
    }
    desinstalar(){
        if (this.instalada == true){
            this.instalada = false;
            alert("App Desinstalada")
        }
    }
    abrir(){
        if (this.iniciada == false && this.instalada == true){
            this.iniciada = true;
            alert("App encendida");
        }
    }
    cerrar(){
        if (this.iniciada == true && this.instalada == true){
            this.iniciada = false;
            alert("App cerrada");
        }
    }
    appInfo(){
        return `
        Descargas: <b>${this.descargas}</b><br>
        Puntuacion: <b>${this.puntuacion}</b><br>
        Peso: <b>${this.peso}</b><br>
        `
    }
    
}

app = new App("16.000","5 estrellas","900mb");
app2 = new App("1.000","1 estrellas","70mb");
app3 = new App("14.000","4 estrellas","800mb");
app4 = new App("23.000","3 estrellas","990mb");
app5 = new App("116.000","5 estrellas","2gb");
app6 = new App("15.000","5 estrellas","600mb");
app7 = new App("18.000","3 estrellas","1gb");


app.instalar();
app.abrir();
app.cerrar();
app.desinstalar();

document.write(`
    ${app.appInfo()} <br>
    ${app2.appInfo()} <br>
    ${app3.appInfo()} <br>
    ${app4.appInfo()} <br>
    ${app5.appInfo()} <br>
    ${app6.appInfo()} <br>
    ${app7.appInfo()} <br>
`);
