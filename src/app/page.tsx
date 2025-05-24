import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <p>
        Click{" "}
        <Link href={"/documents/123"}>
          <span className="text-blue-500 underline py-2">here</span>
        </Link>{" "}
        to go to document id
      </p>
    </div>
  );
};

export default Home;
