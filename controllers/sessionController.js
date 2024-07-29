const Session = require('../models/session');

exports.getSessions = async (req, res) => {
    try {
        const sessions = await Session.find({ user: req.user.id });
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
