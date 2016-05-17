
  /*
  
  var stringifiableObjects = [
  9,
  null,
  true,
  false,
  'Hello world',
  [],
  [8],
  ['hi'],
  [8, 'hi'],
  [1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999],
  [8, [[], 3, 4]],
  [[[['foo']]]],
  {},
  {'a': 'apple'},
  {'foo': true, 'bar': false, 'baz': null},
  {'boolean, true': true, 'boolean, false': false, 'null': null },
  // basic nesting
  {'a': {'b': 'c'}},
  {'a': ['b', 'c']},
  [{'a': 'b'}, {'c': 'd'}],
  {'a': [], 'c': {}, 'b': true}
];

// used for stringifyJSON spec
// hint: JSON does not allow you to stringify functions or
// undefined values, so you should skip those key/value pairs.
unstringifiableValues = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];*/


// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
//simple case 1
 if (obj===null){
  	return ""+null;
  }
//simple case 2
  if (obj === undefined){
  	return ""+ undefined;
  }

  //simple case 3- double quotes...
  if (typeof(obj) === "string"){
  	return '"'+ obj +'"';
  }
//simple case 4
  if (typeof(obj) === "number"){
  	return "" + obj ;
  }
//simple case 5
   if (typeof(obj) === "boolean"){
  	return ""+ obj;
  }

  


  //Advanced (recursion) case #1- regular objects:


 if (typeof(obj)==="object" && (!(Array.isArray(obj)))){		
  	var finalObjArray=[];
  	for (var key in obj){
  		if (!(key=='undefined'||key=='function'||obj[key]===undefined || typeof(obj[key])==="function")){
  	finalObjArray.push(stringifyJSON(key)+":"+stringifyJSON(obj[key]));
  		}
  	}
  	return '{'+finalObjArray.join(",")+'}';	
  }


  //Advanced (recursion) case #1- array/objects

 if (Array.isArray(obj)){
  	var final=[];
	for (var i=0;i<obj.length;i++){
		final.push(stringifyJSON(obj[i]));
	}
	return "["+final.join(",") +"]";
}

  
  
  };

