import nodemailer from 'nodemailer'
import { mailAdapter, sendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "cd497cc61d449c",
        pass: "c867e6f0659215"
    }
});

export class NodemailerMailAdapter implements mailAdapter {
    async sendMail({ subject, body }: sendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "ticolls@hotmail.com",
            subject,
            html: body,
        })

    }
}