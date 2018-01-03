import * as express from 'express'
import routes from './routes'
const app = express();
const port = process.env.PORT || 3000

routes(app)

app.listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  return console.log(`server is listening on ${port}`)
})