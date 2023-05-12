const allowedOrigins = [
    "http://localhost:3000", // for testing FE/React App
    // if you receive Cors Error while testing try inputting 'http://<your IP Address>:3000'

    // Site URL will go here instead of:
    "https://www.milestoned.com",
];
module.exports = allowedOrigins;
