import info from '../services/info.js';

const getInfo = (req, res) => {
    const data = getInfo();
    res.status(200).send(data);
}

export { getInfo };