const errors = require('../errors');
let repository = require('../repository');

module.exports = class Insert {
    async response (ws, req){
        if (req.data.id && req.data.title && req.data.text && req.data.style) {
            let doc = await repository.insertDoc(req.data.id, req.data.title, req.data.text, req.data.style);
            ws.send(JSON.stringify({
                code: 200,
                response: 'post',
                data: doc
            }));
        } else ws.send(JSON.stringify(errors['400']));
    }
};