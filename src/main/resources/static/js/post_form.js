$(document).ready(function () {

   $("#add-form").change(function () {
       var name = $('#name').val();
       var select = $('#select').val();
       var contact = $('#contact').val();
       var time = $('#time').val();
       var others = $('#others').val();
       if (name.length >= 3){
           if (contact.length >= 9){
               if($('#start').length > 0){
                   if ($('#end').length > 0){
                       $('#submit').attr("disabled", false);
                   }else {
                       $('#submit').attr("disabled", true);
                   }
               }else {
                   $('#submit').attr("disabled", true);

               }
           }else {
               $('#submit').attr("disabled", true);
           }
       }else {
           $('#submit').attr("disabled", true);
       }
   });

   $('#back').click(function (e) {
       e.preventDefault();
       window.location.href ="/tracks";
       return (false);
   });

   $("#add-form").submit(function(e)  {
       e.preventDefault();
       var name = $('#name').val();
       var select = $('#select').val();
       var contact = $('#contact').val();
       var time = $('#time').val();
       var others = $('#others').val();
       var start_latitude = $('#start').data("latitude");
       var start_longitude = $('#start').data("longitude");
       var end_latitude = $('#end').data("latitude");
       var end_longitude = $('#end').data("longitude");
       console.log(start_longitude);
       console.log(start_latitude);
       $.ajax({
           url: '/track/new',
           type: 'post',
           contentType: "application/json",
           dataType: 'json',
           data: JSON.stringify({name: name,
               start_latitude: start_latitude,
               start_longitude: start_longitude,
               end_latitude: end_latitude,
               end_longitude: end_longitude,
               space:select,
               telephone:contact,
               time:time,
               other:others}),
           success: function (data) {
               alert("Trasa stworzona twój link to http://localhost:8080/track/" + data['link'])
           },
           error: function (e) {
               alert("Nie udało się stworzyć wybranej trasy.Spróbuj ponownie!")
           }
       });
   })
});