
//normale declaration

module.exports.fetchDate = fetchDate;

function fetchDate(){
     
     var options = {
          weekday:'long',
          month:'long',
          year:'numeric',
          day:'numeric'
     }
     
     var today = new Date().toLocaleDateString('en-US',options);
     return today;
}

module.exports.fetchDay = fetchDay;

function fetchDay(){
     
     var options = {
          weekday:'long',
          year:'numeric'
     }
     
     var today = new Date().toLocaleDateString('en-US',options);
     return today;
}


// or  without using function name like anonymouse function

module.exports.fetchDate = function (){
     
     var options = {
          weekday:'long',
          month:'long',
          year:'numeric',
          day:'numeric'
     }
     
     var today = new Date().toLocaleDateString('en-US',options);
     return today;
}

module.exports.fetchDay = function (){
     
     var options = {
          weekday:'long',
          year:'numeric'
     }
     
     var today = new Date().toLocaleDateString('en-US',options);
     return today;
}

// or without using module again & again 

exports.fetchDate = fetchDate;

function fetchDate(){
     
     var options = {
          weekday:'long',
          month:'long',
          year:'numeric',
          day:'numeric'
     }
     
     var today = new Date().toLocaleDateString('en-US',options);
     return today;
}

exports.fetchDay = fetchDay;

function fetchDay(){
     
     var options = {
          weekday:'long',
          year:'numeric'
     }
     
     var today = new Date().toLocaleDateString('en-US',options);
     return today;
}