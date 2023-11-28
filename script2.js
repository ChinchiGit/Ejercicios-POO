class Warrior{
    constructor(life, power, nombre){
        this.life = life;
        this.power = power;
        this.nombre = nombre;
    }

    attack(){
        console.log(`${this.nombre} lanza su ataque con una fuerza de ${this.power}`);
    }

    defend(damage){
        this.life = this.life - damage;
        console.log(`${this.nombre} se defiende. Ha recibido un ataque de fuerza ${damage}. Le quedan ${this.life} puntos de vida`);

    }
};

class Maya extends Warrior{
    constructor(life, power, nombre){
        super(life, power, nombre);
    }

    drinkColaCao(){
        this.power = this.power +10;
        console.log(`${this.nombre} ha bebido ColaCao y ahora su poder de ataque es ${this.power}`)
    }

};

class Aztec extends Warrior{
    constructor(life, power, nombre){
        super(life, power, nombre);
    }

    drinkNesquik(){
        this.life = this.life +10;
        console.log(`${this.nombre} ha bebido Nesquick y ahora su vida es ${this.life}`)
    }

};

let pepeMaya = new Maya(100, 10, "Pepe el Maya");
let juanAzteca = new Aztec (100, 10, "Juan el Azteca");

pepeMaya.drinkColaCao();
juanAzteca.drinkNesquik();

pepeMaya.attack();
juanAzteca.defend(pepeMaya.power);

juanAzteca.attack();
pepeMaya.defend(juanAzteca.power);
