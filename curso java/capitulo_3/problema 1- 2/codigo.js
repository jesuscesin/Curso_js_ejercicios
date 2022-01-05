class Celular{
    constructor(color,peso,tamaño,rdc,ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.rdc = rdc;
        this.ram = ram;
        this.encendido = false;
    }
    prender(){
        if (this.encendido == false){
            alert("celular prendido");
            this.encendido = true;
        }
        else{
            alert("el celular esta apagado");
            this.encendido = false;
        }
    }
    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando el celular");
        }
        else{
            alert("el celular esta apagado")
        }
    }
    tomarFoto(){
        alert(`foto tomada en una resolucion de: ${this.rdc}`)
    }
    grabarVideo(){
        alert(`video tomado en una resolucion de: ${this.rdc}`)
    }
    mobileInfo(){
        return`
        Color:<b> ${this.color}</b><br>
        Peso: <b>${this.peso}</b><br>
        Tamaño:<b> ${this.tamaño}</b><br>
        Resolucion de Camara:<b> ${this.rdc}</b><br>
        Resolucion de Video:<b> ${this.rdc}</b><br>
        Memoria Ram:<b> ${this.ram}</b><br>
        `;
    }
}

class CelularAltaGama extends Celular{
    constructor(color,peso,tamaño,rdc,ram,rdce){
        super(color,peso,tamaño,rdc,ram);
        this.rdce = rdce;
    }
    grabarVideo(){
        alert("Estas Grabando en Camara lenta")
    }
    reconocimientoFacial(){
       alert("vamos a iniciar un reconocimiento facial") 
    }
    mobileInfoAG(){
        return this.mobileInfo() + `Resolucion de Camara Extra: <b> ${this.rdce}</b>`
    }
}

/* celular1 = new Celular("rojo","150","5","full HD","2GB");
celular2 = new Celular("blanco","155","5.4","OLED","3GB");
celular3 = new Celular("negro","167","5.9","HD","5GB"); */

//celular1.prender();
//celular1.grabarVideo();
//celular1.tomarFoto();
//celular1.reiniciar();

celular1 = new CelularAltaGama("rojo","130","5.2","4K","3GB","Full HD");
celular2 = new CelularAltaGama("negro","142","6","4K","4GB","HD");


/* document.write(`
    ${celular1.mobileInfo()} <br>
    ${celular2.mobileInfo()} <br>
    ${celular3.mobileInfo()} <br>
`); */

document.write(`
    ${celular1.mobileInfoAG()} <br><br>
    ${celular2.mobileInfoAG()} <br>
    `);
