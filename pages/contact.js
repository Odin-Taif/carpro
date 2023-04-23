import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "use-web3forms";
import Image from "next/image";
import { FiMapPin } from "react-icons/fi";
import Layout from "../src/components/layout";
import { FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
export default function Contact({ headerFooter }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(false);
  // Please update the Access Key in the Sanity CMS - Site Congig Page
  const apiKey = "";

  //siteconfig?.w3ckey || "02c22b43-48c2-4fa1-8383-ce01c0cc494b";
  const { submit: onSubmit } = useWeb3Forms({
    apikey: apiKey,
    from_name: "Vestrås Tech AB",
    subject: "New Contact Message from sara Website",
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });
  return (
    <>
      <Layout>
        <div className="md:grid grid-cols-2 content-center justify-center m-5 sm:p-20">
          <div className=" grid m-10 md:grid-cols-1">
            <p className=" text-black">
              Grundsätzlich ist es unser Anspruch, Ihnen vielfältige
              Mietwagenlösungen zu attraktiven Konditionen zu bieten. Darüber
              hinaus lassen wir uns immer wieder besondere Angebote einfallen,
              mit denen wir spezielle Bedürfnisse rund um Ihre Mobilität
              besonders günstig und umfangreich abdecken. Schauen Sie einfach
              mal rein – es lohnt sich!.
            </p>
            {/* {siteconfig?.phone && ( */}
            <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
              <div className="flex flex-col">
                <h4 className="text-3xl font-semibold text-black">
                  <div className="flex flex-row hover:cursor-pointer">
                    <a
                      href="https://www.google.com/maps/dir//V%C3%A4ster%C3%A5s+Tech+AB/data=!4m8!4m7!1m0!1m5!1m1!1s0x465e6177c01d8a57:0x8117349cbcdf9ca6!2m2!1d16.5420248!2d59.6102065"
                      target="_blank"
                    >
                      Adress
                    </a>
                    <FiMapPin
                      size={25}
                      className="text-black m-2 hover:text-red-500 "
                    />
                  </div>
                  <hr className="my-3 border-teal-700" />
                </h4>
                <h5 className="text-lg mt-0 mb-2 text-blueGray-600  text-gray-300">
                  <br /> 722 11 Vienna
                  <br />
                  {/* <span className="text-black"> Söndag Stängt</span> */}
                </h5>
                <div className="lg:block">
                  <a
                    href="tel:+436769617206"
                    className="flex m-2 lg:inline-block text-black "
                  >
                    <span className="flex flex-row items-center hover:text-yellow-300 ">
                      <AiOutlineMail size={25} className="mr-1 lg:mr-0  " />|
                      info@carpromorris.se
                    </span>
                  </a>
                  <a
                    href="tel:+436769617206"
                    className="flex m-2 lg:inline-block text-black"
                  >
                    <span className="flex flex-row items-center hover:text-yellow-300 ">
                      <FaMobileAlt size={25} className="mr-1 lg:mr-0 " />|
                      +436769617206
                    </span>
                  </a>
                </div>
                <div>
                  <Image
                    alt="qrlogo"
                    src={"images/carpro1.webp"}
                    width={100}
                    height={100}
                    loader={() => value}
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>
            <div>
              {isSubmitSuccessful && isSuccess && (
                <div className="mt-3 text-sm text-center text-green-500">
                  {message || "Success. Message sent successfully"}
                </div>
              )}
              {isSubmitSuccessful && !isSuccess && (
                <div className="mt-3 text-sm text-center text-red-500">
                  {message || "Something went wrong. Please try later."}
                </div>
              )}
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="my-10">
            <input
              type="checkbox"
              id=""
              className="hidden"
              style={{ display: "none" }}
              {...register("botcheck")}
            ></input>

            <div className="mb-5">
              <input
                type="text"
                placeholder="Full Name"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-black rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.name
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-black dark:ring-0"
                }`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
              />
              {errors.name && (
                <div className="mt-1 text-red-600">
                  <small>{errors.name.message}</small>
                </div>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="email_address" className="sr-only">
                Email Address
              </label>
              <input
                id="email_address"
                type="email"
                placeholder="Email Address"
                name="email"
                autoComplete="false"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-black rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4  ${
                  errors.email
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-black dark:ring-0"
                }`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <div className="mt-1 text-red-600">
                  <small>{errors.email.message}</small>
                </div>
              )}
            </div>

            <div className="mb-3">
              <textarea
                name="message"
                placeholder="Your Message"
                className={`w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-black dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4  ${
                  errors.message
                    ? "border-red-600 focus:border-red-600 ring-red-100 dark:ring-0"
                    : "border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-black dark:ring-0"
                }`}
                {...register("message", {
                  required: "Enter your Message",
                })}
              />
              {errors.message && (
                <div className="mt-1 text-red-600">
                  {" "}
                  <small>{errors.message.message}</small>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 font-semibold text-black transition-colors bg-green-300 rounded-md hover:bg-green-700 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-black dark:text-black "
            >
              {isSubmitting ? (
                <svg
                  className="w-5 h-5 mx-auto text-black dark:text-black animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2018.3827613439657!2d16.5415329!3d59.6099896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465e613f6eaf55a1%3A0xa02ab31c773de0b1!2sKungsgatan%202%2C%20722%2011%20V%C3%A4ster%C3%A5s!5e0!3m2!1sen!2sse!4v1674222383088!5m2!1sen!2sse"
          className="w-full"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Layout>
    </>
  );
}

// export async function getStaticProps() {
//   // const { data: headerFooterData } = await axios.get(HEADER_FOOTER_ENDPOINT);
//   // return {
//   //   props: {
//   //     headerFooter: headerFooterData?.data ?? {},
//   //   },
//   //   /**
//   //    * Revalidate means that if a new request comes to server, then every 1 sec it will check
//   //    * if the data is changed, if it is changed then it will update the
//   //    * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
//   //    */
//   //   revalidate: 1,
//   // };
// }
