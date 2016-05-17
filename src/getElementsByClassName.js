// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:


var getElementsByClassName = function(target,current){ 


 var array=[];

 if (current===undefined){
 current=document.body;
}

if (current.classList!==undefined){
 if(current.className.split(' ').indexOf(target) !== -1 ){
    array.push(current);
  }
}

if(current.children!==undefined){
    for (var i = 0; i < current.childNodes.length; i++){
if (current.childNodes[i].classList!==undefined){
      array.push(getElementsByClassName(target, current.childNodes[i]))};
    }
  }
  
  
  return array.reduce(function(a,b){return a.concat(b)},[]);
};
