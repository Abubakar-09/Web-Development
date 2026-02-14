import express from 'express'
import blogRoute from "./routes/blog.js"
import { engine } from 'express-handlebars';

const app = express()
const port = 3000

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', blogRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
