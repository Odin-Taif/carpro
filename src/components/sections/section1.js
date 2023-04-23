import Image from "next/image";
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
    <section className="container py-10 mx-auto">
      <div className="mx-auto md:px-10">
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
      </div>
    </section>
  );
}

function Slide({ data }) {
  const { id, title, img, description } = data;
  return (
    <div className="grid md:grid-cols-2">
      <div className="image mx-5">
        <Image src={img || "/"} width={600} height={600} />
      </div>
      <div className="info flex justify-center flex-col mx-5">
        <div className="title">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 hover:text-gray-600">
            {title || "Unknown"}
          </h1>
        </div>
        <p className="text-gray-500 py-3">{description || "description"}</p>
      </div>
    </div>
  );
}
