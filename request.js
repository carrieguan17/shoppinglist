import $ from 'jquery';
import axios from 'axios';
const ENDPOINT = '/groceries';

request = {
  ajax: function(callback) {
    $.ajax({
      method: "GET",
      url: ENDPOINT,
      context: this,
      success: callback(data),
      error: console.log(err)
    })
  },
  axios: function(callback) {
    axios.get(ENDPOINT)
      .then(callback)
      .catch(console.log)
  }
  fetch: function(callback) {
    fetch(ENDPOINT)
      .then(callback)
      .catch(console.log)
  }
}