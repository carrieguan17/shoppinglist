const db = require('./index.js');

module.exports = {
  getAllItems: function(callback) {
    db.query('select * from items', (err, results, fields) => {
      if(err){
        callback(err);
      } else {
        console.log('Results:', results);
        callback(null, results);
      }
    })
  },
  insertItem: function(item, callback) {
    db.query(`insert into items (itemName, quantity) values("${item.itemName}", ${item.quantity})`, (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results);
      }
    })
  }
}