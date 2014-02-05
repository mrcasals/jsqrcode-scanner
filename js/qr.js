function read(a)
{
    // $("#qr-value").text(a);
  $.getJSON('http://192.168.1.96:3000/conferences/futurejs/tickets?id=' + a, function(data){
    // $('#output').html(data.contents);
    console.log(data)
    alert(data.contents);
  });
}

qrcode.callback = read;