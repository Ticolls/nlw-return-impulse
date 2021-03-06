import express from 'express'

import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { SubmitFeedback } from './functions/submit-feedback';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';


export const routes = express.Router()

routes.post("/feedbacks", async (req, res) => {

    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()

    const submitFeedback = new SubmitFeedback(prismaFeedbacksRepository, nodemailerMailAdapter)

    await submitFeedback.execute({
        type,
        comment,
        screenshot
    })

    res.send("ta funcionando")
    return res.status(201).send()
})
