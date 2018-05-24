var funcy = document.createElement('script');
funcy.textContent = ''+
'function hidebar() {'+
'    var x = document.getElementById("logger");'+
'    if (x.style.display === "none") {'+
'        x.style.display = "flex";'+
'    } else {'+
'        x.style.display = "none";'+
'    }'+
'} '+
'function jira(t, i) {' +
'  var url = window.location.href;' +
'  url = url.replace("browse", "rest/api/latest/issues/");' +
'  url = url.concat("/worklog");' +
'  var timestamp = (new Date()).toISOString();' +
'  if (timestamp.endsWith("Z")) {' +
'    timestamp = timestamp.replace("Z", "+0000");' +
'  }' +
'  var comment = document.getElementById("comment-logger").value;' +
'  var settings = {' +
'    "async": true,' +
'    "crossDomain": true,' +
'    "url": url,' +
'    "method": "POST",' +
'    "headers": {' +
'      "content-type": "application/json",' +
'      "cache-control": "no-cache"' +
'    },' +
'    "processData": false,' +
'    "data": {"timeSpent": "\"+i+t+\"","started": "\"+timestamp+\"","comment": "\"+comment+\""}' +
'  };' +
'  console.log(settings);' +
'};'