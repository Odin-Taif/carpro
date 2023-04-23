import Link from "next/link";
import Image from "next/image";
import fetcher from "../../../lib/fetcher";
import Spinner from "../_child/spinner";
import Error from "../_child/error";
import FormSection from "./formsection3";

export default function section2() {
  const { data, isLoading, isError } = fetcher("api/services");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container grid md:grid-cols-2 mx-auto py-10">
      {/* grid columns */}
      <div className="flex justify-center flex-col mx-auto">
        <FormSection />
      </div>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 md:m-10">
        <h1 className="flex items-center justify-center font-bold text-center text-xl border-t-2 border-l-2 rounded-lg border-yellow-500">
          WIR ANGEBOTE WAS WIR VON
        </h1>
        {data.map((value, index) => (
          <ServiceCard data={value} key={index} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ data }) {
  const { id, title, img } = data;
  return (
    <div className="">
      <div className="flex items-center justify-center ">
        <Image
          src={img || "/"}
          className="rounded"
          width={100}
          height={100}
          draggable={false}
          alt="services"
        />
      </div>
      <h1 className="flex items-center justify-center m-3 text-center">
        {title}
      </h1>
    </div>
  );
}
