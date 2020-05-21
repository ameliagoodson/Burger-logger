var orm = require("../config/orm.js") 

// Code that will call the ORM functions using burger specific input for the ORM.

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(data) {
      cb(data);
    });
  },
  // The variables col and val are arrays.
  insertOne: function(col, val, cb) { //WHY doesn't it have the table name here??
    orm.insertOne("burgers", col, val, function(res) {   
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
}

// Export 
module.exports = burger;
