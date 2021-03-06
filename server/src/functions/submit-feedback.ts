import { mailAdapter } from "../adapters/mail-adapter"
import { FeedbacksRepository } from "../repositories/feedbacks-repository"

interface SubmitFeedbackRequest {
    type: string,
    comment: string,
    screenshot?: string
}


export class SubmitFeedback {

    constructor(
        private feedbacksRepository: FeedbacksRepository,
        private mailAdapter: mailAdapter
    ) { }

    async execute(request: SubmitFeedbackRequest) {
        const { type, comment, screenshot } = request

        if (!type) {
            throw new Error("type is required.")
        }

        if (!comment) {
            throw new Error("comment is required.")
        }

        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw new Error("invalid screenshot format.")
        }

        await this.feedbacksRepository.create({
            type,
            comment,
            screenshot,
        })

        await this.mailAdapter.sendMail({
            subject: "Novo feedback",
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
                `<p>Tipo do feedback: ${type} </p>`,
                `<p>comentário: ${comment} </p>`,
                screenshot ? `<img src="${screenshot}"/>` : "",
                `</div>`
            ].join('\n')
        })
    }
}