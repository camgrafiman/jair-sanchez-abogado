const nodemailer = require('nodemailer');

export default (req, res) => {
    const { nombre, email, telefono, ciudad, consulta, mensaje, confirmacion } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "magcamaleon@gmail.com",
            pass: "cadreon2016"
        }
    });
    const opcionesMail = {
        from: email,
        to: "magcamaleon@gmail.com",
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

    transporter.sendMail(opcionesMail, (err, data) => {
        if (err) {
            console.log(err);
            res.send("error" + JSON.stringify(err));
        }
        else {
            console.log("Mail enviado.", data);
            res.send("success");
        }
    })
}