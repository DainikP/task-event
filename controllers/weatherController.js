const axios = require('axios');

exports.getWeather = async (req, res) => {
    const { location } = req.params;
    try {
        const response = await axios.get(`http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API_KEY}&query=${location}`);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
