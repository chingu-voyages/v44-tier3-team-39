
import { app } from "./server.js";
import connectDB from "./config/mongoose.config.js";

// Connect to the database
connectDB();

const PORT = process.env.PORT || 6000;

// Start the server
app.listen(PORT, () =>
  console.log(`Server started on port ${PORT}`)
);