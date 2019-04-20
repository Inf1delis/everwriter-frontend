const errors = require('../errors');
let repository = require('../repository');

module.exports = class Delete {
    async response (ws, req){
        if (req.data._id) {
            let doc = await repository.deleteDoc(req.data._id);
            console.log(doc);
            ws.send(JSON.stringify({
                code: 200,
                message: 'OK',
                data: doc
            }));
        } else ws.send(JSON.stringify(errors['400']));
    }
};