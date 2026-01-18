const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 5000;

// Multer Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'backend/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.json());
// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Initial Data Load (Bundled)
let itemsData = [];
try {
    itemsData = require('./data/items.json');
} catch (e) {
    console.warn("Could not require items.json:", e);
    itemsData = [];
}

// Helper to read data (Returns in-memory data for Vercel)
const readData = () => {
    // In a real app, we would re-read the file here.
    // For Vercel (read-only), we just return the in-memory copy.
    // However, to support local dev persistence without restart, we can check fs locally.
    if (process.env.VERCEL) {
        return itemsData;
    }

    // Local Dev: Try to read file for persistence
    try {
        const data = fs.readFileSync(dataPath, 'utf8');
        return JSON.parse(data);
    } catch (e) {
        return itemsData;
    }
};

// Helper to write data
const writeData = (data) => {
    // Update in-memory
    itemsData = data;

    // Try to write to file (Works locally, fails/ignores on Vercel)
    try {
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error("Error writing data (expected on Vercel):", e.message);
    }
};

// DEBUG ENDPOINT
app.get('/api/debug', (req, res) => {
    const p1 = path.join(process.cwd(), 'backend', 'data', 'items.json');
    res.json({
        cwd: process.cwd(),
        dirname: __dirname,
        path_p1: p1,
        exists_p1: fs.existsSync(p1),
        files_cwd: fs.readdirSync(process.cwd()),
        // Add more debug info if needed
    });
});

// GET all items
app.get('/api/items', (req, res) => {
    const items = readData();
    res.json(items);
});

// GET single item
app.get('/api/items/:id', (req, res) => {
    const items = readData();
    const item = items.find(i => i.id == req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
});

// POST new item
app.post('/api/items', (req, res) => {
    const items = readData();
    const newItem = {
        id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
        ...req.body,
        price: parseFloat(req.body.price) // Ensure price is a number
    };
    items.push(newItem);
    writeData(items);
    res.status(201).json(newItem);
});

// Export for Vercel
module.exports = app;

// Only start server if run directly (local dev)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
