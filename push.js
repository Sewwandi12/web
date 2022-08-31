var push =require('web-push');
let vapidKeys = {
    publicKey: 'BJ2JZ_l9Jzit8sGLqz8aXozZJ_KGW4B7REnZDir_urgRRA3pPHKlzYhTULyZul60GHLiGpb7k6_tcIfsdsL-_xA',
    privateKey: 'zOF9oMZ_h1ePFtQITVTtceTGCM-ttEEdO4fiPyet68I'
  }

  push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.privateKey, vapidKeys.privateKey)
  let sub={};
  
  push.sendNotification(sub,'test message')