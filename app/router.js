const updateReq = require('./actions/update');
const deleteReq = require('./actions/delete');
const getReq = require('./actions/get');
const insertReq = require('./actions/insert');
const getAfterDateReq = require('./actions/afterDate');
const errors = require('./errors');

module.exports = class Router {
  
  constructor() {
    this.Update = new updateReq();
    this.Delete = new deleteReq();
    this.Get = new getReq();
    this.Insert = new insertReq();
    this.GetAfterDate = new getAfterDateReq();
  }
  
  parseRequest(str) {
    let data = false;
    try {
      data = JSON.parse(str);
    } catch(e){
      console.log(e);
    }
    return data;
  }
  
go(req, ws, msg, clients) {
    let data = this.parseRequest(msg); // Вдруг прилетел неправильный json
    if( data ) {
      switch( data.action ) {
      case 'get':
        this.Get.response(ws, data);
        break;
      case 'getAfterDate':
        this.GetAfterDate.response(ws, data);
        break;
      case 'delete':
        this.Delete.response(ws, data, clients);
        break;
      case 'post':
         this.Insert.response(ws, data, clients);
         break;
      case 'update':
         this.Update.response(ws, data, clients);
         break;
      
      default: // Либо отдаём 404
        ws.send( JSON.stringify(errors['404']) );
        break;
      }
    } else 
      ws.send( JSON.stringify(errors['400']) );    
  }
  
};
