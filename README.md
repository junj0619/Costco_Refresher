# Costco_Refresher
This is a Google Extension to search available delivery options on Costco grocery store

Steps to setup:

1) Download and load Costco_Refresher extensions in your Chrome
![](https://github.com/junj0619/Costco_Refresher/blob/master/img/Load%20Costco_Refresher%20Extension.png)

2) Go to smtpjs.com to generate Encrypted SMTP credentials
![](https://github.com/junj0619/Costco_Refresher/blob/master/img/Generate%20SMTP%20encryption.png)

3) Put encrypted SMTP credentials into content.js file **SecureToken**

```javascript
function sendEmail(option) {
  Email.send({
    SecureToken: 'Your encrpted SMTP credentials',
    To: 'YourAccount@gmail.com',   //Change it to your email to
    From: 'YourAccount@gmail.com', //Change it to your email from
    Subject: 'Costco Delivery is available.',
    Body: '<html><h2>Costco Delivery is available.<h2>' + option + '</html>',
  }).then(
    (message) => console.log(message)
  );
}
```
4) Reload Costco_Refresher in extenstion

5) Go to Costco grocery sameday checkout page(https://sameday.costco.com/store/checkout_v3)
