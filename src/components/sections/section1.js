import Image from "next/image";
import Link from "next/link";
// import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import fetcher from "../../../lib/fetcher";
import Spinner from "../../components/_child/spinner";
import Error from "../../components/_child/error";

export default function Section1() {
  const { data, isLoading, isError } = fetcher("api/trending");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  SwiperCore.use([Autoplay]);
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right",
  };

  return (
    <section className="py-5" style={bg}>
      <div className="container mx-auto md:px-20">
        {/* <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1> */}
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
        >
          {data.map((value, index) => (
            <SwiperSlide key={index}>
              <Slide data={value}></Slide>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="grid grid-cols-1">
          <Link href={`/posts`}>
            <button className="bg-yellow-500 hover:bg-blue-700 text-white text-2xl font-bold py-3 px-20 md:px-20 rounded">
              Contact us now!!!
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { id, title, category, img, description } = data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Image src={img || "/"} width={600} height={600} />
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat"></div>
        <div className="title">
          <h1 className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
            {title || "Unknown"}
          </h1>
        </div>
        <p className="text-gray-500 py-3">{description || "description"}</p>
      </div>
    </div>
  );
}
