import { NextApiRequest, NextApiResponse } from "next";
import nodemailer, { Transporter } from "nodemailer";

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const transporter: Transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.SENDER_HOST,
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
      secure: true,
    });

    const mailData = {
      from: `Global for Ukraine <${process.env.SENDER_EMAIL}>`,
      to: process.env.RECEIVER_EMAILS,
      subject: `Donation From ${req.body.email}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
    ${req.body.email}</p>`,
    };
    await transporter.sendMail(mailData);
    res.status(200).end();
  } catch (error) {
    res.status(400);
  }
}
