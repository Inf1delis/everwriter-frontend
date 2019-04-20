let repository = require('../repository');

module.exports = class Like {
    async response(ws, req, clients) {
        let doc = await repository.changeLike(req.data._id, Number(req.data.like));
        for (let i in clients) {
            if (clients.hasOwnProperty(i)) {
                try {
                    clients[i].ws.send(JSON.stringify({
                        code: 200,
                        response: 'like',
                        data: doc
                    }));
                } catch (e) {
                    console.log('not liked\n' + e);
                }
            }
        }
    }
};