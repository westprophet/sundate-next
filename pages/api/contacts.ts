import sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

sgMail.setApiKey("");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, message, name } = req.body;
  const msg = {
    to: 'Sundateinc@gmail.com',
    from: email,
    subject: 'Форма на сайте',
    name: name,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
};
