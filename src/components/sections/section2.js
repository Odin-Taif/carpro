import Link from "next/link";
import Image from "next/image";
// import Author from "./_child/author";
import fetcher from "../../../lib/fetcher";
import Spinner from "../_child/spinner";
import Error from "../_child/error";

export default function section2() {
  const { data, isLoading, isError } = fetcher("api/trending");

  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="container grid md:grid-cols-2 mx-auto py-10">
      {/* <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1> */}
      {/* grid columns */}
      <div className="flex justify-center flex-col mx-auto">helllo</div>
      <div className="grid grid-cols-2 mx-auto">
        {data.map((value, index) => (
          <Post data={value} key={index} />
        ))}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, title, category, img, published, author } = data;
  return (
    <div className=" mx-5 my-5">
      <div className="images">
        <Link href={`/posts/${id}`}>
          <a>
            <Image
              src={img || "/"}
              className="rounded"
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
