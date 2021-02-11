const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default (req, res) => {
    const { nombre, email, telefono, ciudad, consulta, mensaje, confirmacion } = req.body;

    
    const opcionesMail = {
        from: process.env.SENDGRID_SENDER_MAIL, // Cambiar por el sender verificado*
        to: process.env.MAIL_DESTINO, // Cambiar por el recipiente
        subject: `Nuevo contacto a través del formulario web de ${email}`,
        html: `<p>Nuevo contacto</p>
        <p>Nombre del contacto: ${nombre} </p>
        <p>Email del contacto: ${email}</p>
        <p>Teléfono de contacto: ${telefono}</p>
        <p>Ciudad: ${ciudad}</p>
        <p>Tipo de consulta: ${consulta}</p>
        <p>Mensaje: ${mensaje}</p>
        <p>------------------ Mensaje enviado a través de la web.</p>
        `
    };

    sgMail.send(opcionesMail).then(() => {
        console.log("Email enviado");
        res.send("success");
    })
        .catch((error) => {
            console.error(error);
            res.send("error" + JSON.stringify(err));
    })

    // transporter.sendMail(opcionesMail, (err, data) => {
    //     if (err) {
    //         console.log(err);
    //         res.send("error" + JSON.stringify(err));
    //     }
    //     else {
    //         console.log("Mail enviado.", data);
    //         res.send("success");
    //     }
    // })
}