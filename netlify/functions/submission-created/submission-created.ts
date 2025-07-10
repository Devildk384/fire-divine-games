const sendGridMail = require("@sendgrid/mail");

export const handler = async (event: any) => {
  try {
    const { name, email, message } = JSON.parse(event.body).payload.data;

    console.log(`name: ${name}, email: ${email}, message: ${message}`);

    sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);
    const mailInternal = {
      from: process.env.SENDER_EMAIL,
      to: process.env.SENDER_EMAIL,
      templateId: process.env.SENDGRID_CONTACT_FORM_INTERNAL_TEMPLATE_ID,
      dynamicTemplateData: {
        name,
        message,
        email,
      },
    };
    await sendGridMail.send(mailInternal);
    const mail = {
      from: process.env.SENDER_EMAIL,
      to: email,
      templateId: process.env.SENDGRID_CONTACT_FORM_TEMPLATE_ID,
      dynamicTemplateData: {
        name,
        message,
      },
    };
    await sendGridMail.send(mail);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Message sent" }),
    };
  } catch (error) {
    return { statusCode: 422, body: String(error) };
  }
};
