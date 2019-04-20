let repository = require('../repository');

module.exports = class Get {
    async response (ws, res){
        let doc = await repository.getDocs();
        ws.send(JSON.stringify({
            code: 200,
            message: 'OK',
            data: doc
        }));
    }
};