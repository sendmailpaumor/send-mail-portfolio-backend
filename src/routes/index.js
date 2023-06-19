const express = require('express');
const sendEmail = require('../utils/sendEmail');
const router = express.Router();

// colocar las rutas aquí
router.get('/', (req, res) => {
    res.send("Welcome to express");
});

router.post('/emails/contact', async(req, res)=>{
    const {name, email, phone, message} = req.body
    await sendEmail({
		to: "correosparapaumor@gmail.com", // Email del receptor
		subject: "primer email desde node", // asunto
		html: `
        <h1> ${name} te ha dejado esto: </h1>
        <ul> 
        <li><b> Nombre:</b>${name}</li>
        <li><b> email:</b>${email}</li>
        <li><b> telefono:</b>${phone}</li>
        <li><b> mensaje:</b>${message}</li>
        </ul>
        `
    })

    return res.json({message:'email sent successfully'})
}) 


module.exports = router;
