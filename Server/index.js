const express = require('express')
const path = require('path')
const { open } = require('sqlite')
const sqlite3 = require('sqlite3')
const dbPath = path.join(__dirname, 'todoData.db')
const app = express()
let db = null

const initializeDBAndServer = async () => {
    try {
        db = await open({
            filename: dbPath,
            driver: sqlite3.Database
        })
        app.listen(5000)
        console.log("Server Running!")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

initializeDBAndServer()

app.get("/", (request, response) => {
    response.send("Hello Lomdu")
})