const errors = require('../errors');
let repository = require('../repository');

module.exports = class Update {
    async response (ws, req, clients){
        for(let i in clients) {
            if (clients.hasOwnProperty(i)) {
                if (req.data.title && req.data.text && req.data.likes && req.data.style) {
                    let doc = await repository.updateDoc(req.data._id, req.data.title, req.data.text, req.data.likes, req.data.style);
                    try {
                        clients[i].ws.send(JSON.stringify({
                            code: 200,
                            response: 'update',
                            data: doc
                        }));
                    } catch (e) { console.log('not updated\n'+e); }
                } else ws.send(JSON.stringify(errors['400']));
            }
        }
    }
};