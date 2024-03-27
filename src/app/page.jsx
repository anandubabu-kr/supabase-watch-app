import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <>
      <div className=" bg-slate-400 ">
        <h1 className=" text-2xl text-center">Welcome to watch list</h1>
      </div>

      <div className=" w-1/2 mx-auto">
        <AuthForm />
      </div>
    </>
  );
}
