const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Tell Express to serve all static frontend files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Root route sends the main dashboard HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server listener
app.listen(PORT, () => {
    console.log(`✈️  Gulf Aviation Server is cruising at http://localhost:${PORT}`);
})