var awsIot = require('aws-iot-device-sdk');

var deviceId = 'Unknown';

var device = awsIot.device({
  keyPath: '-private.pem.key',
  certPath: '-certificate.pem.crt',
  caPath: 'aws-root-CA.crt',
  clientId: deviceId,
  host: 'a1m9uvqo63xvsq.iot.us-east-1.amazonaws.com'
});

device
  .on('close', function() {
    console.log('iot close');
  });

device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('meetup/notebook');
  });

device
  .on('error', function(error) {
    console.log('error:' + error);
  });

device
  .on('message', function(topic, payload) {
    console.log('message');
    console.log(topic, payload.toString());
  });

device
  .on('reconnect', function() {
    console.log('reconnect');
  });
