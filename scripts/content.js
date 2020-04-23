$(document).ready(function () {
  var delay = 10 * 1000;

  setTimeout(function () {
    if (isDeliveryAvailable()) {
      const deliveryOptions = $('div.react-tabs').html();
      sendEmail(deliveryOptions);
    } else {
      reloadPage();
    }
  }, delay);
});

function reloadPage() {
  window.location.reload();
}

function isDeliveryAvailable() {
  return (
    $('#react-tabs-0').length > 0 &&
    $('input[name="delivery_option"]').length > 0
  );
}

function sendEmail(option) {
  Email.send({
    SecureToken: 'YourSecureToken',
    To: 'YourEmail@gmail.com',
    From: 'YourEmail@gmail.com',
    Subject: 'Costco Delivery is available.',
    Body: '<html><h2>Costco Delivery is available.<h2>' + option + '</html>',
  }).then(
    // message => alert(message)
    (message) => console.log(message)
  );
}
