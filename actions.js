'use client'

import { Resend } from "resend"
import EmailTemplate from "./app/components/contact/email-template"
import { render } from "@react-email/render"


export const sendEmail = async (prevState, formData) => {
    const name = formData.get("name")
    const email = formData.get("email")
    const message = formData.get("message")
    const subject = formData.get("subject")

    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
            from: email,
            to: "Mikel <mikelgaldosv@gmail.com>",
            subject: subject,
            html: render(EmailTemplate({ name, email, message}))
        })
        return
    } catch (error) {
        console.log(error)
    }
}
