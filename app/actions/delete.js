const errors = require('../errors');
let repository = require('../repository');

module.exports = class Delete {
    async response (ws, req, clients){
        for(let i in clients) {
            if (clients.hasOwnProperty(i)) {
                if (req.data._id) {
                    let doc = await repository.deleteDoc(req.data._id);
                    try {
                            clients[i].ws.send(JSON.stringify({
                            code: 200,
                            response: 'delete',
                            data: doc
                        }));
                    } catch(e) { console.log('not deleted\n'+e); }
                } else ws.send(JSON.stringify(errors['400']));
            }
        }
    }
};