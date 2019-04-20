let repository = require('../repository');

module.exports = class GetAfterDate {
    async response (ws, req) {
        let date = new Date(req.data.timestamp);
        let doc = await repository.getDocsAfterDate(date);
        ws.send(JSON.stringify({
            code: 200,
            response: 'getAfterDate',
            data: doc
        }));
    }};