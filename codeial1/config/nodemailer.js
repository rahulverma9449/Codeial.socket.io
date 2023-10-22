const nodemailer = require("nodemailer");
const ejs = require('ejs');
const path = require('path');


let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
        user: 'rahulverma9559@gmail.com',
        pass: 'ebzv fbzi osqb fgea'
    }
});

let renderTemplate = (data, relativePath) => {
    let mailHTML;
    ejs.renderFile(
        path.join(__dirname, '../views/mailers', relativePath),
        data,
        function(err, template) {
            if (err) { console.log('error in rendering remplate'); return }
            mailHTML = template;
        }

    )
    return mailHTML;
}

module.exports = {
    transporter: transporter,
    renderTemplate: renderTemplate
}