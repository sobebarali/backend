const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const morgan = require("morgan")

// Creating a custom morgan configuration using format string of predefined tokens
app.use(
  morgan(
    ":method :status :res[content-length] :response-time :date[web] HTTP/:http-version :url \n"
  )
)

// Using a predefined format string called combined
app.use(morgan("combined"))

// Using a predefined format string called common
app.use(morgan("common"))

// Using a predefined format string called dev
app.use(morgan("dev"))

// Using a predefined format string called short
app.use(morgan("short"))

// Using a predefined format string called tiny
app.use(morgan("tiny"))


app.get("/", (req, res) => {
  try {
    return res.send("Morgan Logger Test")
  } catch (error) {
    res.status(500).send({
      message: error.message,
    })
  }
})

app.listen(port, () => {
  console.log("Server started at http://localhost:" + port)
})
