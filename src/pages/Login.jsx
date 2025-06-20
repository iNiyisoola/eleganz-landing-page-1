export const Login = () => {

  return(
    <div className="container mx-auto">
      <form action="">
        <div class="flex mt-0 sm:mt-14 flex-col items-center justify-center px-6 lg:px-8 py-8 md:py-12 text-sm text-slate-600">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-5 md:mt-10 text-center text-2xl sm:text-4xl md:text-5xl text-slate-800 font-semibold sm:font-bold tracking-tight text-pretty lg:text-balance">Login to your account</h2>
          </div>

          <div class="mt-5 md:mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-1 shadow-md px-12 py-8 rounded-md bg-gray-100">
            <form class="space-y-6" action="#" method="POST">

              <div>
                <label for="email" class="block text-md font-medium text-slate-600">Email address</label>
                <div class="mt-2">
                  <input type="email" name="email" id="email" autocomplete="email" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label for="password" class="block text-md font-medium text-slate-600">Password</label>
                  <div class="text-sm">
                    <a href="#" class="font-semibold text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                  </div>
                </div>
                <div class="mt-2">
                  <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                </div>
              </div>

              <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-md font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Login</button>
              </div>
            </form>

            <p class="mt-10 text-center text-md text-slate-600">
                  Not a member?
                  <a href="#" class="text-md font-medium text-slate-600 hover:text-indigo-500"> Start a 14 day free trial</a>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};