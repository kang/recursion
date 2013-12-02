// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (nameOfClass) {
  var elemArr = [];
  
  function travAndCheck(element){
    var children = element.children;
    _.each(children, function(child){
      if(child.classList.contains(nameOfClass)){
        elemArr.push(child);
      }
      if(child.hasChildNodes){
        travAndCheck(child);
      }
    })
  }
  travAndCheck(document);
  return elemArr;
};
