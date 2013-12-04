// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {
	var stringed="";

	function travAndString(element){

	  if(typeof element === "function"){
	  	stringed += "function()";
	  } else if (typeof element === "object"){
	  	if(element === null){
	  		stringed += "null";
	  	} else if (Array.isArray(element)){
	  		if(element.length===0){
	  			stringed += "[]";
	  		} else {
		  		stringed += "[";
		  		_.each(element, function(val){
		  			travAndString(val);
		  			stringed += ",";
		  		});
		  		stringed = stringed.substr(0, stringed.length-1);
		  		stringed += "]";
		  	}
	  	} else {
	  		if(Object.keys(element).length===0){
	  			stringed += "{}";
	  		} else {
		  		stringed += "{";
		  		_.each(element, function(val, key){
		  			travAndString(key);
		  			stringed += ":";
		  			travAndString(val);
		  			stringed += ",";
		  		});
		  		stringed = stringed.substr(0, stringed.length-1);
		  		stringed += "}";
		  	}
	  	}
	  } else if (typeof element === "number") {
	  	stringed += element;
	  } else if (typeof element === "boolean") {
	  	stringed += element.toString();
	  } else if (typeof element === "string") {
	  	stringed += "\""+element+"\"";
	  }
	}
	travAndString(obj);
	return stringed;
};

//tostring will fail
//jsonstringify will string no matter what
//will always come back as a string(objects, arrays, booleans, etc)
//might need to construct string version (possibly use typeof)
