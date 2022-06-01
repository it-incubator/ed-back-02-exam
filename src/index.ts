import 'dotenv/config'
import express, {Request, Response} from 'express'

const app = express()


app.get('/hello', (req: Request, res: Response) => res.send('Exam 2'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port: ${process.env.PORT}`)
})
