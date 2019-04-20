const errors = require('../errors');
let repository = require('../repository');

module.exports = class Update {
    async response (ws, req){
        if (req.data.title && req.data.text && req.data.style) {
            let doc = await repository.updateDoc(req.data._id, req.data.title, req.data.text, req.data.style);
            ws.send(JSON.stringify({
                code: 200,
                message: 'OK',
                data: doc
            }));
        } else ws.send(JSON.stringify(errors['400']));
    }
};