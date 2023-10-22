const nodeMailer = require('../config/nodemailer')
exports.newComment = (comment) => {
    console.log('newComment', comment)
    console.log('inside new Comment mailer')
    let htmlString = nodeMailer.renderTemplate({ comment: comment }, '/comments/new_comment.ejs')
    console.log(comment);
    nodeMailer.transporter.sendMail({
        from: "rahulverma9559@gmail.com",
        to: comment.user.email,
        subject: 'New Comment Published',
        html: htmlString
    }, (err, info) => {
        if (err) {
            console.log('error in sending mail', err);
            return
        }
        console.log('message sent', info);
        return
    })
}