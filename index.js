const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "gahe02@gmail.com",
        pass: "dlxx zsge zqwc lxcg"
    }
}
);

app.post("/sendemail", (req, res) => {
    const { name, email, jobtypes, message } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Por favor agrega tu nombre" });
    }

    if (!email) {
        return res.status(400).json({ error: "Por favor agrega tu correo" });
    }


    if (!jobtypes) {
        return res.status(400).json({ error: "Por favor selecciona un tipo de trabajo" });
    }
    if (!message) {
        return res.status(400).json({ error: "Por favor agregue su mensaje" });
    }


    transporter.sendMail({
        to: "hdez_2702@hotmail.com",
        from: "gahe02@gmail.com",
        subject: "Job Offers",
        html: `
        
        <h5>Details Informtion:</h5>

        <ul>
        <li> <p>Name: ${name}</p> </li>
        <li> <p>E-mail: ${email}</p> </li>
        <li> <p>Job Types: ${jobtypes}</p> </li>
        <li> <p>Message: ${message}</p> </li>


        </ul>

        `,

    });

    res.json({ success: "Your e-mail has been sent" })

});

app.listen(PORT, (req, res) => {
    console.log("Server Connected");
});
