const express = require('express') // Not needed with next.js ?
const app = express();
const PORT = process.env.PORT || 8000; // 8000 for localhost testing

app.listen(port, () => console.log(`Listening on port: ${PORT}`))