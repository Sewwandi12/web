var push =require('web-push');
let vapidKeys = {
    publicKey: 'BJ2JZ_l9Jzit8sGLqz8aXozZJ_KGW4B7REnZDir_urgRRA3pPHKlzYhTULyZul60GHLiGpb7k6_tcIfsdsL-_xA',
    privateKey: 'zOF9oMZ_h1ePFtQITVTtceTGCM-ttEEdO4fiPyet68I'
  }

  push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.privateKey, vapidKeys.privateKey)
  let sub= {
    endpoint:
    "https://fcm.googleapis.com/fcm/send/cNNckCJwMiY:APA91bGoD0AeROkzmQxB3f4lEWXYNoTMQBCsQ0WvNB-xsY4cmCGWUiZgWW8XdtUvLBytenJPT55L0nMI8Dk09fj49ufW11EA2wCOPt6eBrPJFXyWMbaYD02QKEsxb-CyJFLgTsjoeyJy",
    expirationTime:null,
  keys:{
    p256dh:"BJ2nn1GHpU9x-D0VCC0SLuPTQXifo-9ov6Ze8eWGhoRyq11PEuARaPB76KYZMIZFEeac-xkLa8uIg8kep-TMsD4",
    auth:"k0eY16mwMInwB_cy841ppQ"
}};
  
  push.sendNotification(sub,'test message')