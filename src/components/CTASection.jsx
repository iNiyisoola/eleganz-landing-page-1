export const CTASection = () => {

  return(
    <div className="h-screen items-center justify-items-center">
      <div className="max-w-3xl bg-indigo-500 rounded-md text-center text-white p-12 shadow-xl">
        <h3 className="sm:text-lg md:text-4xl font-bold mt-2 tracking-tight text-pretty lg:text-balance mb-4">That next outfit that will blow your mind...</h3>
        <p className="mb-10">....is just a <a className="font-bold hover:text-fuchsia-500" href="#">click</a> away.</p>
        <a className="px-8 py-4 border rounded-md bg-white hover:bg-fuchsia-500 text-indigo-500 hover:text-white" href="#">SignUp</a>
      </div>
    </div>
  );
};