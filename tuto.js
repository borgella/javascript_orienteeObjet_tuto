"use strict"

//!-- PREMIÈRE facon de créer un object JavaScript -->
var costumer = {

    name: "Toto",	// just a value for the key name

    speak: function () {	// a function as value for the key speak
        return "My name is " + this.name;
    },

    address: {		// an object as value for the key address		
        street: "5574 Place Basile Patenaude",
        city: "Montreal",
        state: "Quebec"
    },

    get getName() {	// a getter
        return this.name;
    }

};

var array = [];
var elem1 = costumer;
var elem2 = costumer;
elem2.name = "Brian";
array.push(elem1);
array.push(elem2);

array.forEach(function (obj) {

    console.log("For Each fonction " + obj.getName + "\n");
    console.log("For Each fonction " + obj.address.city + "\n");
    console.log("For Each fonction " + obj.speak() + "\n");

});

nextLine();

console.log("The getter field is call on costumer " + costumer.getName + "\n");
console.log(costumer.name + "\n");
console.log(costumer.speak() + " " + "and i live at " + costumer.address.street + "\n");
nextLine();

//!-- On ajoute une nouvelle propriété à l object  adresse durant l éxecution / add new property to costumer object at runtime -->
costumer.address.country = " Canada";
console.log(costumer.speak() + " " + "and i live at " + costumer.address.country + "\n");
nextLine();

//!-- var toto = new costumer() ne fonctionnera pas ce n est pas une fonction -->
var toto = costumer;
toto.name = 'Toto';
consle.log(toto.speak() + " " + "and i live at " + costumer.address.country + "\n");
nextLine();

//!-- All fields here is public any functions can modify them-->
function Person(name, street) {
    this.name = name;

    this.street = street;

    this.speak = function () {
        return "My name is " + this.name;
    };
}

var rondo = new Person("Rondo", "5574 Place Basile");
console.log(rondo.speak() + "\n ");

console.log("Rondo is type of Person ? " + (rondo instanceof Person) + "\n ");
nextLine();

function changeName(person) {
    person.name = "Rajon Rondo";
}

changeName(rondo);

console.log("Rondo name has been change to " + rondo.name + "\n ");
nextLine();

//!-- TROISIEME facon de créer un object JavaScript -->
//!-- With Private fields In JavaScript, all fields here is private because we declared them -->
var Person1 = function (nom, street) {
    var name = nom;
    var street = street;

    this.getName = function () {
        return name;
    };
}
var person = new Person1("Borgella", "Place Basile");

console.log("Print the name of Person1 " + person.getName() + "\n ");
nextLine();
console.log("The name will be UNDEFINED because it is private: " + person.name + "\n ");
nextLine();
//##################################################################################################

function Coordinates(latitude, longitude) {
    this.latitude = latitude;
    this.longitude = longitude;
}

//##### PREMIERE FACON DE DEFINIR DES GETTERS ET SETTERS EN JAVASCRIPT#######
Object.__defineGetter__.call(Coordinates.prototype, "getCoords", function () {
    return "Lat: " + this.latitude + " Long: " + this.longitude;
});

Object.__defineGetter__.call(Coordinates.prototype, "getLatitude", function () {
    return this.latitude;
});

Object.__defineGetter__.call(Coordinates.prototype, "getLongitude", function () {
    return this.longitude;
});

Object.__defineSetter__.call(Coordinates.prototype, "setLatitude", function (latitude) {
    this.latitude = latitude;
});

Object.__defineSetter__.call(Coordinates.prototype, "setLongitude", function (longitude) {
    this.longitude = longitude;
});

var testCoords = new Coordinates(40.31, 44.54);
console.log("The latitude of this shit is: " + testCoords.getLatitude + " and the longitude of this shit also is: " + testCoords.getLongitude + "\n ");

console.log("Let's show the new values to those fields " + "\n ");

testCoords.setLatitude = 4334213.87;
testCoords.setLongitude = 400342.56;
console.log("The latitude of this shit after setter is: " + testCoords.getLatitude + " and the longitude of this shit also is: " + testCoords.getLongitude + "\n ");
nextLine();
//##########################################################################


//##### DEUXIEME FACON DE DEFINIR DES GETTERS ET SETTERS EN JAVASCRIPT#######
function Point(posX, posY) {
    this.xPos = posX;
    this.yPos = posY;

    // On va ajouter une function callback qui laissera à l'utilisateur le soin de définir ses propres opérations sur les variables d'instances.
    // Personnellement je considère une fonction callback comme une fonction abstraite dont l'implémentation dépendra du programmeur.
    //Fonction qui prend comme parametre une seule et unique fonction callback 
    this.calculate = function (callback) {
        if (typeof callback === 'function')
            return callback(this.xPos, this.yPos);
        else
            return new Error(' You should throw a function here, no joke');
    }

    //Fonction qui prend comme paramétre deux variables plus une fonction callback,
    // la fonction qui jouera le role de callback doit etre une 	fonction qui prend aussi deux paramètres. 
    //A l'appel de la fonction operation les parametre number1,number2 sont obligatoires.
    this.operation = function (number1, number2, callback) {
        if (typeof callback === 'function')
            return callback(number1, number2);
        else
            return { code: 1000, error: 'you should pass a function as value' };
    }

}

Object.defineProperty(Point.prototype, "getX", {
    get: function () {
        return this.xPos;
    }
});

Object.defineProperty(Point.prototype, "setX", {
    set: function (valueX) {
        this.xPos = valueX;
    }
});

Object.defineProperty(Point.prototype, "getY", {
    get: function () {
        return this.yPos;
    }
});

Object.defineProperty(Point.prototype, "setY", {
    set: function (valueY) {
        this.yPos = valueY;
    }
});


var testPoint = new Point(8.3, 5.5);
console.log("The x postion is: " + testPoint.getX + " and y position is: " + testPoint.getY + "\n ");

testPoint.setX = 22;
testPoint.setY = 31;

console.log("The new value of X is: " + testPoint.getX + " and Y is: " + testPoint.getY + "\n ");

// THE ASYNCRHONIMOUS PART OF THE CLASS POINT
console.log("Using the callback function of point with an UNDEFINE function : " + testPoint.calculate(function (pointX, pointY) {
    return pointX + pointY;
}));
nextLine();

// we're adding functions to the Point object that will use the calculate callback function
Point.prototype.multiply = function (pointX, pointY) {
    return pointX * pointY;
}

Point.prototype.substract = function (pointx, pointY) {
    return pointx - pointY;
}

function divide() {
    var number1 = 12;
    var number2 = 6;
    return number1 / number2;
}

console.log("Using the callback Operation's function of point with a define function (5, 4, MULTIPLY): " + testPoint.operation(5, 4, testPoint.multiply));
nextLine();

console.log("Using the callback Operation's function of point with a UNDEFINE function: " + testPoint.operation(5, 4, function (pointx, pointy) {
    return pointx * pointy;
}));
nextLine();

console.log("Using the callback function of point with a define function:(MULTIPLY) " + testPoint.calculate(testPoint.multiply));
nextLine();

console.log("Using the callback function of point with a define function:(SUBSTRACT) " + testPoint.calculate(testPoint.substract));
nextLine();

console.log("Activate the error for the calculate callback function  " + testPoint.calculate(toto));
nextLine();

console.log("Activate the error for the calculate callback operation  " + testPoint.operation(toto));
nextLine();
nextLine();

//##########################################################################

//##### UPTODATE WAY,TROISIEME FACON DE DEFINIR DES GETTERS ET SETTERS EN JAVASCRIPT#######

var Circle = function (radius) {
    this.radius = radius;
}

// on ajoute un objet qui contient le getter et le setter au prototype de l'objet Circle
Circle.prototype = {
    get getRadius() {
        return this.radius;
    },

    set setRadius(radius) {
        this.radius = radius;
    },

    getRadius2: function (radius) {
        return this.radius
    }
}

var testCircle = new Circle(2.74);

console.log("The radius of the circle: " + testCircle.getRadius + "\n ");

testCircle.setRadius = 3.14;
console.log("The radius of the circle after setter call with TEST_RADIUS: " + testCircle.getRadius2() + "\n ");
nextLine();
//###################### HERITAGE EN JAVASCRIPT###############################

function Animal(name) {
    this.name = name;

    this.toString = function () {
        return "The animal name is: " + this.name;
    }
}

Animal.prototype = {
    get getName() {
        return this.name;
    },
    set setName(name) {
        this.name = name;
    }
}

Animal.prototype.toString2 = function () {
    return "My name as animal is: " + this.name;
}

function Canine(name) {
    this.name = name;
}

function Wolf(name) {
    this.name = name;
}

Canine.prototype = new Animal();
Wolf.prototype = new Canine();

// c'est important de reinialiser les constructeurs des objets dont on attribue leur prototype a un aute objet
Canine.prototype.constructor = Canine;
Wolf.prototype.constructor = Wolf;

var wolf = new Wolf("wolf");

console.log("Display the animal name with toString of the Animal class: " + wolf.toString() + "\n ");
console.log("Wolf is an instance of Animal: " + (wolf instanceof Animal) + "\n ");

Animal.prototype.sound = "Animmaaaal.....!!";
Animal.prototype.getSound = function (animal) {
    return "I m an Animal, a " + animal.getName + " and i cry like: " + this.sound;
}

console.log(wolf.getSound(wolf) + "\n ");

Wolf.prototype.sound = "Wolf wolf wolf....!!!!";
Wolf.prototype.getSound = function () {
    return "I m an Animal, a " + this.getName + " and i cry like: " + this.sound;
}

console.log(wolf.getSound(wolf) + "\n ");
nextLine();

//############ Juste hériter le prototype d'un objet########

function Rodent() {
    this.name = "Rodent";
}

function Rat() {
    this.name = "Rat";
}

Rodent.prototype = new Animal();

Rat.prototype = new Rodent();

Rodent.prototype.constructor = Rodent;
Rat.prototype.constructor = Rat;

var caneRat = new Rat();

console.log(caneRat.toString() + "\n " + caneRat.getSound(caneRat) + "\n ");
nextLine();
nextLine();

//###################### FUNCTION QUI VA CREER L'HERITAGE ###############################

function inherit(Child, Parent) {
    var Temp = function () { };
    Temp.prototype = Parent.prototype;
    Child.prototype = new Temp();
    Child.prototype.constructor = Child;
}

function extend(Child, Parent) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
}

function Deer() {
    this.name = "Deer";
    this.sound = "Woauuuuu";
}

extend(Deer, Animal);

var deer = new Deer();

console.log("Deer Object toString(): " + deer.toString() + "\n ");
console.log("Deer Object getSound(): " + deer.getSound(deer) + "\n ");

var Eagle = function () {
    this.name = "eagle";
}

extend(Eagle, Animal);

var eagle = new Eagle();
console.log("Eagle Object: " + eagle.toString() + "\n ");


var ane = new Animal("Bourique");
console.log(ane.toString() + "\n ");
nextLine();
nextLine();



var Vehicule = function (name, marque, annee) {
    this.name = name;
    this.marque = marque;
    this.annee = annee;
}

Vehicule.prototype = {
    drive: function () {
        return "The " + this.name + " Vehicule drive so fast.";
    },
    stop: function () {
        return this.name + " stops wihout any issues."
    }
}

var Truck = function (name) {
    this.name = name;
}

extend(Truck, Vehicule);

Truck.prototype.drive = function () {
    return Vehicule.prototype.drive.apply(this);
}

var truck = new Truck("Jeep");

console.log(truck.drive() + "\n ");
console.log(truck.stop() + "\n ");
nextLine();
nextLine();

// EMAC6 nouvelle version de JavaScript avec une nouvelle syntaxe et des classes
//no need to put function
var addStuff = {
    sum(num1, num2) {
        return num1 + num2;
    }
}

console.log("1 + 3 = " + addStuff.sum(1, 3) + "\n ");

class Point2 {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
    }
    // you can still use the old way to define setter in the new version of javascript
    get getTheX() {
        return this.posX;
    }
    set setX(posx) {
        this.posX = posx;
    }
    // the new way to set a value in the newest javasript version
    setTheX(posx) {
        this.posX = posx;
    }

    sum() {
        return this.posX + this.posY;
    }
}

var point = new Point2(3, 4);
console.log("Class Point2 sum de px + py = " + point.sum() + "\n ");
nextLine();
//old way to set a value in javascript and to call a getter
point.setX = 23;
console.log("SETTER OF THE POINT2 CLASS OLD WAY: " + point.getTheX + "\n ");
nextLine();

//new way to set a value with EMAC6
point.setTheX(44);
console.log("SETTER OF THE POINT2 CLASS EMAC6 WAY: " + point.getPosX() + "\n ");
nextLine();
nextLine();


class Birds {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    toString() {
        return "I m a bird, my name is: " + this.name + ", ";
    }
}

class Pigeon extends Birds {
    constructor(name, color) {
        super(name);
        this.color = color;
    }

    getName() {
        return super.getName();
    }

    getColor() {
        return this.color;
    }

    toString() {
        return super.toString() + "and my color is: " + this.color;
    }

}

var pigeon = new Pigeon("tweet", "red");

console.log("Pigeon name: " + pigeon.toString() + "\n ");
nextLine();
nextLine();
//############ LES PATRON COMMANDES #########################

//############  SINGLETON Pattern #########################

// Singleton 1 Old JavaScript way
function Hero(name) {

    if (typeof Hero.instance === 'object')
        return Hero.instance;
    this.name = name;
    Hero.instance = this;
    return this;
}

Hero.prototype = {
    get getName() {
        return this.name;
    }
}
var borgella = new Hero("Borgella");

var faux = new Hero("faux");

console.log("Hero's name " + borgella.getName + "\n ");

console.log("Hero's name " + faux.getName + "\n ");
nextLine();
nextLine();

// Singleton 2 New JavaScript EMAC6
class Hero2 {

    constructor(hero) {
        if (hero === null) {
            this.name = "Borgel";
        }
        return hero;
    }

    // it works
    //constructor(hero, name){
    //if(hero === null){
    //this.name = name;
    //}
    //return hero;
    //}

    getName() {
        return this.name;
    }

}

var borgel1 = new Hero2(null, "borgel");

var faux1 = new Hero2(borgel1, "faux");

console.log("Hero2's name " + borgel1.getName() + "\n ");

console.log("Hero2's name " + faux1.getName() + "\n ");
nextLine();
nextLine();
//############ Factory Pattern #########################

//Factory 1

function Sword(weapon) {
    this.weaponType = "Sword";
    this.metal = weapon.metal || "Iron";
    this.style = weapon.style || "Samurai";
    this.hasMagic = weapon.hasMagic || false;
}

function Bow(weapon) {
    this.weaponType = "Sword";
    this.metal = weapon.metal || "Acier";
    this.style = weapon.style || "Curl";
    this.hasMagic = weapon.hasMagic || false;
}

function WeaponFactory() { };

WeaponFactory.prototype.makeWeapon = function (weapon) {

    if (weapon.weaponType === "Sword") {
        return weapon;
    } else if (weapon.weaponType === "Bow") {
        return Bow;
    } else {
        return false;
    }

    return null;
}

WeaponFactory.prototype.makeWeapon = function (weapon) {
    var weaponClass = null;

    if (weapon.weaponType === "Sword") {
        weaponClass = Sword;
    } else if (weapon.weaponType === "Bow") {
        weaponClass = Bow;
    } else {
        return false;
    }

    return new weaponClass(weapon);
}

var swordWeapon = {
    weaponType: "Sword",
    metal: "Steel",
    style: "Cuff",
    hasMagic: true
}

var bowWeapon = {
    weaponType: "Bow",
    metal: "Acier"
}

var factory = new WeaponFactory();

var weapon = factory.makeWeapon(swordWeapon);

console.log("The weapon type is: " + weapon.weaponType + "\n ");

function add(number1, number2) {
    return number1 + number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function calculate(number1, number2, callback) {
    if (typeof callback === 'function' && typeof number1 === 'number' && typeof number2 === 'number')
        return callback(number1, number2);
    else return 'error';
}
var result = calculate(40, 6, function (number1, number2) {
    return number1 / number2;
});

console.log("asychronous call: " + calculate(4, 3, function (number1, number2) {
    return number1 - number2;
}));

nextLine();

console.log("the division's result is: " + result);

nextLine();



function nextLine() {
    console.log("\n");
}