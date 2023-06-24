import { Link } from "react-router-dom";
//import { sendEmail } from "./sendEmail";
import sendEmail from "./sendEmail";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Textarea,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";

//const [email, setEmail] = useState('');

export function SignUp() {

  // const sendEmail = () => {
  //   const recipientEmail = email;
  //   const subject = 'Subject of the email';
  //   const body = 'Content of the email';

  //   const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  //   const emailLink = document.createElement('a');
  //   emailLink.href = mailtoLink;
  //   emailLink.click();
  //   console.log("I'm here!");
  // };

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 bg-[#0f1624]">
        <div className="absolute inset-0 z-0 h-full w-full  " />
        <div className="container mx-auto flex items-center justify-between text-white">
          <div className="w-full md:w-1/2 pr-2">
            <strong>Email: support@cloud-fence.com</strong>
            <br />
            <span> Address:</span>
            <br />
            <span className="text-white">New York Office</span>
            <br />
            <span className="text-white">448 West 57th Street</span>
            <br />
            <span className="text-white">New York, NY 10019</span>
          </div>

          <Card className="absolute top-2/4 left-2/4 w-full max-w-[50rem] -translate-y-2/4 -translate-x-2/4">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-12 place-items-center"
            >
              <Typography variant="h3" color="white">
                Contact Us
              </Typography>
            </CardHeader>
            <div className="mx-4 mt-4 max-w-3xl">
              <div className="flex">
                <div className="w-1/2 pl-2">
                  <form className="text-center">
                    <Input variant="standard" size="lg" label="Full Name" />
                    <Input variant="standard" type="email" label="Email" size="lg" />
                    <Textarea
                      variant="standard"
                      size="lg"
                      label="Message"
                      rows={8}
                      onChange={handleInputChange}
                    />
                  </form>
                </div>
              </div>
              <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth onClick={sendEmail('test', "jd_bendjenahi@esi.dz", "this is a test")}>
                  Send the request
                </Button>
              </CardFooter>
            </div>
          </Card>
        </div>
        <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
          <SimpleFooter />
        </div>
      </div>
    </>
  );
}

export default SignUp;
----------------
import { Avatar, Typography, Button } from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function Profile() {
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4">
        <div className="container mx-auto">
          <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/team-2.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400">Conntect</Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        22
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Friends
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        10
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Photos
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        89
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Comments
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  Jenna Stones
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Los Angeles, California
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Solution Manager - Creative Tim Officer
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    University of Computer Science
                  </Typography>
                </div>
              </div>

              <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                <div className="mt-2 flex flex-wrap justify-center">
                  <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                    <Typography className="mb-8 font-normal text-blue-gray-500">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </Typography>
                    <Button variant="text">Show more</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
