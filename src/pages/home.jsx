import React from "react";
import {
  Card,
  Typography
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { FeatureCard } from "@/widgets/cards";
import { featuresData, contactData } from "@/data";

export function Home() {
  //console.log(import.meta.env.VITE_serviceID)
  return (
    <>
       <section>
          <div className="flex h-screen flex-col bg-[#0f1624]">
            <div className="flex items-center justify-center w-full">
              <div className="text-center bg-[#0f1624] mb-12 mt-40">
                <Typography variant="h2" color="white" className="mb-0 font-black">
                  Boost Your Cloud Security and Visibility in Minutes
                </Typography>
              </div>
            </div>
            <div className="bg-[#0f1624] flex items-center justify-center mt-2">
              <img src="/img/main3.png" alt="Background" className="object-cover w-3/5 h-auto" />
            </div>
          </div>
          
        </section>

      <section className="relative bg-[#0f1624] py-1 px-4 ">
        <div className="container mx-auto">
          <div className="text-center">
            <Typography variant="h2" color="white" className="mb-8">
              Simplifying Cloud Networking and Security
            </Typography>
          </div>
          <div className="mx-auto mt-8 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3 ">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="-mt-32 bg-[#0f1624] px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <div key={title} className="flex justify-center">
                <div className="max-w-lg">
                  <FeatureCard
                    color={color}
                    title={title}
                    icon={React.createElement(icon, {
                      className: "w-5 h-5 text-white",
                    })}
                    description={description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

      <div className="bg-[#0f1624]">
        <Footer />
      </div>
    </>
  );
}

export default Home;
