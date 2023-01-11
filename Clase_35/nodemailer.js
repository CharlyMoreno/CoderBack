//  suzanne.fisher@ethereal.email
//rWeYTJFfAjpZyHgAYd

import { createTransport } from "nodemailer";

const TEST_EMAIL = 'suzanne.fisher@ethereal.email' 

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'suzanne.fisher@ethereal.email',
        pass: 'rWeYTJFfAjpZyHgAYd'
    }
});

const mailOptions = {
    from: 'Servidor Node.js',
    to: TEST_EMAIL,
    subject: 'Mail de prueba desde node.js',
    html: '<h1 style="color: blue;">Contenido de prueba <span style="color: green">Node js</span></h1>'
}

;(async () => {
    try{
        const info = await transporter.sendMail(mailOptions);
        console.log(info);
    }
    catch(error){
        console.log(error)
    }
})()