import { useState } from "react";
import { Card, CardFooter, Input, Button } from "@material-tailwind/react";
import sendEmail from "./sendEmail";

export function Contact() {
  const [message, setMessage] = useState(""); // State to store the message

  const handleSendRequest = () => {
    // Get the email input value
    const emailInput = document.getElementById("work-email");
    const email = emailInput.value.trim();

    const companyInput = document.getElementById("company-name");
    const name = companyInput.value.trim();

    // Email validation regex pattern
    const emailPattern = /^([\w.-]+)@(\[(\d{1,3}\.){3}|(?!hotmail|gmail|googlemail|yahoo|gmx|ymail|outlook|bluewin|protonmail|t\-online|web\.|online\.|aol\.|live\.)(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,63}|\d{1,3})(\]?)$/;

    // Check if the email matches the work email pattern
    if (emailPattern.test(email)) {
      // Valid work email, proceed with sending the request
      sendEmail(name, email, "Please add me to your waiting list.");
      setMessage("Request sent successfully."); // Set the success message
    } else {
      // Invalid email, show an error message
      setMessage("Invalid email. Please enter a valid work email.");
    }
  };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 bg-[#0f1624]">
        <div className="absolute inset-0 z-0 h-full w-full" />
        <div className="container mx-auto flex items-center justify-between text-white">
          <Card className="absolute top-2/4 left-2/4 w-full max-w-[30rem] -translate-y-2/4 -translate-x-2/4">
            <form className="mx-4 mt-1 max-w-3xl text-center">
              <Input variant="standard" size="lg" label="Company Name" id="company-name" />
              <Input variant="standard" type="email" label="Work Email" size="lg" id="work-email" />
            </form>
            <CardFooter className="pt-2">
              <Button variant="gradient" fullWidth onClick={handleSendRequest}>
                Join the waiting list
              </Button>
              {message && <p style={{ color: "blue" }}>{message}</p>}
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Contact;
