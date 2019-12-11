function Hello(){
  var name;
  this.setHello = function(theName){
    name = theName;
  }
  this.sayHello = function () {
    console.log('this name'+ name);
  }
}

module.exports = Hello