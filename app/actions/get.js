let repository = require('../repository');

module.exports = class Get {
    async response (ws, req){
        let date = new Date(req.data.timestamp);
        if(req.data.timestamp){
            let doc = await repository.getDocsAfterDate(date.toISOString());
            console.log(doc);
            ws.send(JSON.stringify({
                code: 200,
                message: 'OK',
                data: doc
            }));
        }
        let doc = await repository.getDocs();
        ws.send(JSON.stringify({
            code: 200,
            message: 'OK',
            data: doc
        }));
    }
};