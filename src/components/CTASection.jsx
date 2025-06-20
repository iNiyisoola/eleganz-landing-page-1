export const CTASection = () => {

  return(
    <div className="container flex justify-center mx-auto">
      
        <div className="max-w-3xl bg-indigo-500 rounded-md text-center text-white px-6 py-6 md:py-10 mt-8 sm:mt-16 md:mt-20 mb-8 sm:mb-16 md:mb-20 mx-6 shadow-xl">
          <h3 className="sm:text-lg md:text-4xl font-bold mt-2 tracking-tight text-pretty lg:text-balance mb-4">That next outfit that will blow your mind...</h3>
          <p className="mb-10">....is just a <a className="font-bold hover:text-fuchsia-500" href="#">click</a> away.</p>
          <a className="px-4 md:px-4 py-2 md:py-2 text-sm font-bold rounded-md bg-white hover:bg-fuchsia-500 text-indigo-500 hover:text-white" href="#">Sign Up</a>
        </div>
      
    </div>
  );
};