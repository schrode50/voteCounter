'use strict';

(function() {
  var addButton = document.querySelector('.btn-add');
  var deleteButton = document.querySelector('.btn-delete');
  var clickNbr = document.querySelector('#click-nbr');
  var apiUrl = 'http://localhost:3000/api/clicks';

  function ready(fn) {
    if(typeof fn !== 'function') {
      return;
    }

    if(document.readyState === 'complete') {
      return fn();
    }

    document.addEventListener('DOMContentLoaded', fn, false);
  }

  function ajaxRequest(method, url, cb) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
      if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        cb(xmlhttp.response);
      }
    };

    xmlhttp.open(method, url, true);
    xmlhttp.send();
  }

  function updateClickCount(data) {
    var clicksObject = JSON.parse(data);
    clickNbr.innerHTML = clicksObject.clicks;
  }
})();
