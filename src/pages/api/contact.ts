import sendgrid from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";

// TODO: FIX - Serverless function working, but blocked by Zoho mail
// TODO: Create a validation middleware
export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      try {
        sendgrid.setApiKey(process.env.NEXT_SENDGRID_API_KEY);
        await sendgrid.send({
          from: "contacto@eliss.mx",
          replyTo: req.body.email,
          to: "contacto@eliss.mx",
          templateId: process.env.NEXT_SENDGRID_TEMPLATE_ID,
          dynamicTemplateData: req.body,
        });
        res.status(200).json({ message: "Message sent successfully." });
      } catch (error) {
        res.status(500).json({ message: "Message not sent.", error });
      }
      break;
    default:
      return res.status(405).json({ message: "Method Not Allowed." });
  }
};
