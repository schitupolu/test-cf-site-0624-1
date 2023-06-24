import React from "react";
import {
  Typography
} from "@material-tailwind/react";

export function Company() {
 return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-2 bg-[#0f1624]">
      <section className="-mt-32 bg-[#0f1624] px-4 pb-2 pt-4">
        <div className="container mx-auto">
          <div className="mt-32 bg-[#0f1624] flex flex-wrap items-center">
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <img
                alt="Card Image"
                src="/img/newyork.jpg"
                style={{ maxWidth: "500%", maxHeight: "350px" }}
              />
            </div>
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center p-3 text-center ">
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="white"
              >
                Our Story 
              </Typography>
              <Typography className="mb-4 font-normal text-white">
                Founded in 2023 in New York, Cloud-fence is the first cloud security platform that combines Cloud Network Security and Continuous Posture management from a single dashboard, hence giving customers deep visibility and security insights correlated to their cloud context.
              </Typography>
              <Typography className="mb-4 font-normal text-white">
                The inspiration for Cloud-fence came after our founders, Cloud security experts witnessed countless businesses struggle to properly secure their cloud workloads.
              </Typography>
              <Typography className="mb-4 font-normal text-white">
                Cloud-fence was built to allow companies deploy all the security services they need with one click, and immediately secure and gain deep visibility across all their cloud footprint.
              </Typography>
            </div>
          </div>
        </div>
      </section>
      </div>
      
      <section className="-mt-32 bg-[#0f1624] px-4 pb-2 pt-4">
        <div className="container mx-auto">
          <div className="mt-32 bg-[#0f1624] flex flex-wrap items-left">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-left justify-left p-3 text-left "></div>
              <Typography variant="h3" className="mb-3 font-bold " color="white">
                Our Vision
              </Typography>
              <Typography className="mb-8 font-normal text-white">
                At Cloud-fence, it is our mission to build a future without a cumbersome legacy approach to network security in the cloud.
                We work hand-in-hand with our customers and partners to deliver holistic security that is purpose-built for today’s cloud-first and securely enables any business, anywhere.
              </Typography>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <img
                alt="Card Image"
                src="/img/visionImage.jpg"
                style={{ maxWidth: "500%", maxHeight: "350px" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#0f1624] py-20">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <Typography variant="h3" className="font-bold text-white">
              The Leadership Team
            </Typography>
          </div>
          <div className="flex flex-wrap items-center justify-center">
            <div className="mx-10">
              <img
                alt="Mounira Picture"
                src="/img/mounira.png"
                className="h-60 w-60 mb-4 rounded-full"
              />
              <Typography variant="h5" className="font-bold text-white text-center mb-2">
                Mounira Remini
              </Typography>
              <Typography variant="body1" className="text-white text-center mb-4">
                Founder and CEO
              </Typography>
              <div className="flex justify-center"> {/* Center the LinkedIn icon */}

                <a href="https://www.linkedin.com/in/mouniraremini/">
                  <img
                    alt="LinkedIn Icon"
                    src="/img/linkedin.png"
                    className="h-6 w-6"
                  />
                </a>
              </div>  
            </div>
            
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Company;
