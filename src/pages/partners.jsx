import React from "react";

export function Partners() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-0 pb-32 bg-[#0f1624]">
        <div className="absolute top-0 h-full w-full bg-[#0f1624] bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto mt-8">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center space-x-4">
                  <img
                    src="/img/test2_v.png"
                    alt="Image"
                    style={{ maxWidth: "100%", maxHeight: "300px" }}
                  />
                  <img
                    src="/img/test_v_.png"
                    alt="Image"
                    style={{ maxWidth: "80%", maxHeight: "200px" }}
                  />
                  <img
                    src="/img/test3.png"
                    alt="Image"
                    style={{ maxWidth: "90%", maxHeight: "250px" }}
                  />
                </div>
                <div className="pl-6 mt-2">
                  <p style={{ fontSize: "24px", color: "#FFFFFF" }}>
                    We tightly integrate with our Cloud Providers Partners to
                    deliver Security purposely-built for Cloud.
                  </p>
                </div>
                <div className="pl-30 mt-20">
                  <p style={{ fontSize: "18px", color: "#569BE9" }}>
                    Interested in becoming a partner? Reach out to us at
                    support@cloud-fence.com
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
