import nodemailer from 'nodemailer'

export const sendMail = (req, res) => {
    try {
        const { client_name, client_email, client_mobile, client_message } = req.body
        const transporter = nodemailer.createTransport({
            service: 'hotmail',
            auth: {
                user: 'portfolioassistant@outlook.com',
                pass: 'Portfolio@123'
            }
        })

        const options = {
            from: 'portfolioassistant@outlook.com',
            to: 'mishorpatra1608@gmail.com',
            subject: 'New message',
            text: `Name: ${client_name}\nEmail: ${client_email}\nMobile: ${client_mobile}\nMessage: ${client_message}`
        }

        transporter.sendMail(options, (error, info) => {
            if(error) {
                console.log(error)
                return
            }
            else {
                console.log('Mail sent ' + info.response)
            }
        })

        return res.status(200).json("Mail sent successfully")
    } catch(error) {
        console.log(error)
    }
}
