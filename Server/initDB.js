const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Create or open database
const dbPath = path.join(__dirname, "todoData.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("❌ Error opening database:", err.message);
  } else {
    console.log("✅ Connected to SQLite database.");
  }
});

// Create users table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    )
  `, (err) => {
    if (err) {
      console.error("❌ Error creating table:", err.message);
    } else {
      console.log("✅ Users table created successfully.");
    }
  });
});

// Close database
db.close((err) => {
  if (err) {
    console.error("❌ Error closing database:", err.message);
  } else {
    console.log("✅ Database connection closed.");
  }
});