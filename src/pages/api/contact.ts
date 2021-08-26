import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

// TODO: FIX - Serverless function working, but blocked by Zoho mail
// TODO: Create a validation middleware
const contactApiRoute = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      try {
        sendgrid.setApiKey(process.env.NEXT_SENDGRID_API_KEY);
        await sendgrid.send({
          dynamicTemplateData: req.body,
          from: "contacto@eliss.mx",
          replyTo: req.body.email,
          templateId: process.env.NEXT_SENDGRID_TEMPLATE_ID,
          to: "contacto@eliss.mx",
        });
        res.status(200).json({ message: "Message sent successfully." });
      } catch (error) {
        res.status(500).json({ error, message: "Message not sent." });
      }
      break;
    default:
      return res.status(405).json({ message: "Method Not Allowed." });
  }
};

export default contactApiRoute;
