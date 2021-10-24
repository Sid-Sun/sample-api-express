import {Request, Response} from 'express'

const Handler = (_: Request, res: Response) => {
    res.send('Hello World!')
}

export default Handler