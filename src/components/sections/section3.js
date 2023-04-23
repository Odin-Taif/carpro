import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import fetcher from "../../../lib/fetcher";
import Spinner from "../_child/spinner";
import Error from "../_child/error";

export default function section3() {
  const { data, isLoading, isError } = fetcher("api/trending");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="container mx-auto py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      {/* swiper */}
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <Post data={value}></Post>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, description, published, author } = data;

  return (
    <div className="mx-5 my-5">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image src={img || ""} width={300} height={200} />
          </a>
        </Link>
      </div>
    </div>
  );
}
