const Event = require('../models/event');
const axios = require('axios');

exports.createEvent = async (req, res) => {
    const { name, date, location, description } = req.body;
    try {
        const newEvent = new Event({
            name,
            date,
            location,
            description,
            user: req.user.id,
        });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEvents = async (req, res) => {
    try {
        const events = await Event.find({ user: req.user.id });
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const { name, date, location, description } = req.body;
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            id,
            { name, date, location, description },
            { new: true }
        );
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        await Event.findByIdAndDelete(id);
        res.status(200).json({ message: 'Event deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
