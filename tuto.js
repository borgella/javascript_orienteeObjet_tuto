"use strict"

//<!-- PREMIÈRE facon de créer un object JavaScript -->
  var costumer = {

  	name : "Toto",	// just a value for the key name
	  
  	speak : function(){	// a function as value for the key speak
  		return "My name is " + this.name;
  	},
	
  	address : {		// an object as value for the key address		
  		street : "5574 Place Basile Patenaude",
  		city : "Montreal",
  		state : "Quebec"
  	},
	
    	get getName(){	// a getter
      	 	return this.name;
    	}
    
  };

  var array = [];
  var elem1 = costumer;
  var elem2 = costumer;
  elem2.name = "Brian";
  array.push(elem1);
  array.push(elem2);

  array.forEach(function(obj){

      console.log("For Each fonction "+obj.getName+ "\n");
      console.log("For Each fonction "+obj.address.city+  "\n");
      console.log("For Each fonction "+obj.speak()+  "\n");

  });

  nextLine();

  console.log("The getter field is call on costumer "+costumer.getName+ "\n");
  console.log( costumer.name + "\n");
  console.log( costumer.speak()+ " "+"and i live at "+costumer.address.street + "\n");
  nextLine();

   //<!-- On ajoute une nouvelle propriété à l object  adresse durant l éxecution / add new property to costumer object at runtime -->
  costumer.address.country = " Canada";	
  console.log( costumer.speak()+ " "+"and i live at "+costumer.address.country + "\n");
  nextLine();

   function nextLine(){
    console.log("\n");
  }