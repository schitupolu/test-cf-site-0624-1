import emailjs from "emailjs-com";
import dotenv from "dotenv";

const serviceId = import.meta.env.VITE_serviceID;
const templateId = import.meta.env.VITE_templateID;
const userId = import.meta.env.VITE_publicKey;

const sendEmail = async (name, email, message) => {
  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      { name, email, message },
      userId
    );

    if (response.status === 200) {
      console.log("Successfully sent message.");
    }
  } catch (error) {
    console.error("Failed to send email. Error: ", error);
  }
};

export default sendEmail;