export const SignUpSection = () => {

  return(
    <div className="container mx-auto ">
      <form action="">
          <div class="flex mb-0 sm:mb-24 flex-col justify-center px-6 lg:px-8 py-8 md:py-12 text-sm sm:text-md text-slate-600">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 class="mt-10 text-center text-2xl sm:text-4xl md:text-5xl text-slate-800 font-semibold sm:font-bold tracking-tight text-pretty lg:text-balance">Sign Up</h2>
            </div>

            <div class="mt-5 md:mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-1 shadow-md rounded-md bg-gray-100 px-10 py-8">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label for="firstName" class="block text-md font-medium text-slate-600">First Name</label>
                  <div class="mt-2">
                    <input type="text" name="firstName" id="fName" autocomplete="firstName" required class="block w-full rounded-md bg-white px-3 py-1.5 text-md text-slate-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div>
                  <label for="lastName" class="block text-md font-medium text-slate-600">Last Name</label>
                  <div class="mt-2">
                    <input type="text" name="lastName" id="lName" autocomplete="lastName" required class="block w-full rounded-md bg-white px-3 py-1.5 text-md text-slate-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-md font-medium text-slate-600">Email address</label>
                  <div class="mt-2">
                    <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-md text-slate-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-md font-medium text-slate-600">Password</label>
                    
                  </div>
                  <div class="mt-2">
                    <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-md text-slate-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                  </div>
                </div>

                <div>
                  <button type="submit" class="flex w-full justify-center rounded-md mb-4 bg-fuchsia-500 px-3 py-1.5 text-md font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
      </form>
    </div>
  );
};