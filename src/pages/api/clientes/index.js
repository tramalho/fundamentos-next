
export default function handler(req, res) {
    if (req.method === 'GET') {
        return getClients(req, res);
    }
    res.status(405).end();
}

function getClients(req, res) {
    res.status(200).json(
        { id: 3, name: 'José' }
    );
}