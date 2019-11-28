$(document).ready(function () {
    $.getJSON('json.json', function (data) {
      var content = '';
      for (var x in data) {
        content += data[x].username + '<br>';
      }
      $("#shwo").html(content);
    });

    $.ajax({
      url: 'json.json',
      dataType: 'json',
      cache: false,
      success: function (data, status) {

        $.each(data, function (index) {
          $("#shwo").append(data[index].username + '<br>');
        });
      },
      error: function (xhr, textStatus, err) {
        console.log(xhr);
        console.log(textStatus);
        console.log(err);
      }
    });


    $api = '6a62eb185af9f6207383f05418fc7b18';
    $amount = "500";
    $currencies = 'EGP';
    $from = 'USD'
    $.ajax({
      url: 'http://apilayer.net/api/live?access_key=' + $api + '&currencies=' + $currencies + '&source=' + $from + '&format=1',
      dataType: 'json',
      cache: false,
      success: function (data, status) {
        $.each(data, function (index) {
          if (data[index] == 'USD') {
            $from = data[index];
            $("#shwo").append($from + '<br>');
          } else if (data[index] == data["quotes"]){
            $currencies = data["quotes"].USDEGP;
            $result = Math.round($currencies);
            $result = Math.round(($amount /$result));
            $("#shwo").append($currencies + '<br>');
            $("#shwo").append($result + '<br>');
          }
        });
      },
      error: function (xhr, textStatus, err) {
        console.log(xhr);
        console.log(textStatus);
        console.log(err);
      }
    });

});
