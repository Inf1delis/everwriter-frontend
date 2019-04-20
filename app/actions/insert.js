const errors = require('../errors');
let repository = require('../repository');

module.exports = class Insert {
    async response(ws, req, clients) {
            let doc = await repository.insertDoc(req.data.id, req.data.title, req.data.text, req.data.style);
            for (let i in clients) {
                if (clients.hasOwnProperty(i)) {
                    try {
                        clients[i].ws.send(JSON.stringify({
                            code: 200,
                            response: 'post',
                            data: doc
                        }));
                    } catch (e) {
                        console.log('not inserted\n' + e);
                    }
                }
            }
    }
};