// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//   if(xhr.readyState ===4){
//     var employees = JSON.parse(xhr.responseText);
//     var statusHTML = '<ul class="bulleted">';
//     for (var i=0; i < employees.length; i++){
//       if(employees[i].inoffice === true){
//         statusHTML += '<li class="in">';
//     }else{
//       statusHTML += '<li class="out">';
//     }
//     statusHTML += employees[i].name;
//     statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };

$(document).ready(function (){
  var url="../data/employees.json";
  $.getJSON(url, function (response){
       var statusHTML = '<ul class = "bulleted">';
       $.each(response, function(index, employee){
         if (employee.inoffice === true){
             statusHTML += '<li class = "in">';
         } else {
             statusHTML += '<li class = "out">';
         }
    statusHTML += employee.name +'</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML);
  }); //end json
}); //end ready

// xhr.open('GET', 'data/employees.json');
// xhr.send();

// var roomRequest = new XMLHttpRequest();
// roomRequest.onreadystatechange = function () {
//   if(roomRequest.readyState === 4 && roomRequest.status === 200) {
//     var rooms = JSON.parse(roomRequest.responseText);
//     var statusHTML = '<ul class="rooms">';
//     for (var i=0; i<rooms.length; i += 1) {
//       if (rooms[i].available === true) {
//         statusHTML += '<li class="empty">';
//       } else {
//         statusHTML += '<li class="full">';
//       }
//       statusHTML += rooms[i].room;
//       statusHTML += '</li>';
//     }
//     statusHTML += '</ul>';
//     document.getElementById('roomList').innerHTML = statusHTML;
//   }
// };
// roomRequest.open('GET', '../data/rooms.json');
// roomRequest.send();

$(document).ready(function (){
  var url="../data/rooms.json";
  $.getJSON(url, function (response){
       var statusHTML = '<ul class = "rooms">';
       $.each(response, function(index, rooms){
         if (rooms.available === true){
             statusHTML += '<li class = "empty">';
         } else {
             statusHTML += '<li class = "full">';
         }
    statusHTML += rooms.room +'</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML);
  }); //end json
}); //end ready
