import { contactFormSchema } from "@/data/schemas/contact-form-schema";
import nodemailer, { SendMailOptions } from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = (mailOptions: SendMailOptions) =>
  new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(info.messageId);
      }
    });
  });

export async function POST(request: Request) {
  const formData = await request.json();

  const validatonResult = contactFormSchema.safeParse(formData);

  if (!validatonResult.success) {
    const error = validatonResult.error.format();

    return Response.json(
      {
        success: false,
        reason: error,
      },
      {
        status: 422,
      },
    );
  }

  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_DESTINATION,
    subject: "Josprima.dev Contact Form",
    text: JSON.stringify(formData, null, 2),
  };

  try {
    await sendMail(mailOptions);

    return Response.json({ success: true });
  } catch (error) {
    return Response.json(
      {
        success: false,
        reason: "Server Error!",
      },
      {
        status: 500,
      },
    );
  }
}
