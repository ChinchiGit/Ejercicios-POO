class Persona{
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles(){
        console.log("Tu nombre es " + this.nombre + ". Tu edad es "+ this.edad +". Tu género es "+ this.genero);
    }
};

class Estudiante extends Persona{

    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero)
        this.curso = curso;
        this.grupo = grupo;
    }
    registrar(){
        console.log("Hola " + this.nombre + ". Estas en el curso " + this.curso + " y en el grupo " +this.grupo);
    }
};



class Profesor extends Persona{
    constructor (nombre, edad, genero,asignatura, nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel= nivel;
    }
    asignar(){
        console.log("Hola " + this.nombre + ". Impartes la asignatura " + this.asignatura + " en el nivel " +this.nivel);
    }
};



let persona1 = new Persona ("Pepe", 40, "Hombre");
let persona2 = new Estudiante ("Juan", 25, "Hombre", "Primero", "A");
let persona3 = new Profesor ("María", 32, "Mujer", "Matemáticas", "Avanzado");

persona1.obtDetalles();
persona2.obtDetalles();
persona2.registrar();
persona3.obtDetalles();
persona3.asignar();