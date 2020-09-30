db.query('select * from groceries', (err, result) => {
  var promise = new Promise();
  if (err) {
    promise.reject(err);
  } else {
    preomise.resolve(result);
  }
  return promise;
})

db.query()
  .then(res.status(200).send)
  .catch(res.status(500).send)