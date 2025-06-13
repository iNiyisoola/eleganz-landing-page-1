export const DescriptionSection = () => {

  return(

    <div class="bg-white py-24 sm:py-32">
      <div class="h-screen mx-auto max-w-7xl px-6 lg:px-8 border-fuchsia-500 rounded-3xl">
        <div class="mx-auto max-w-2xl lg:text-center">
         
          <h3 class="sm:text-lg md:text-4xl text-slate-800 font-bold mt-2 tracking-tight text-pretty lg:text-balance mb-4">What we do</h3>
          <p className="text-md text-pretty tracking-tight">We have the best outfits for any outing, and any occassion. You are styled by the best in the industry. What look do you want; from native attires, formal attires, casuals, semi-formals. We give you the look that you desire. With trending styles, you have no choice but to be eleganZ</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div class="relative pl-16">
              <dt class="mt-2 text-md text-pretty tracking-tight text-slate-800 font-semibold">
                <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500 text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chart-line-icon lucide-chart-line"><path d="M3 3v16a2 2 0 0 0 2 2h16"/><path d="m19 9-5 5-4-4-3 3"/></svg>
                </div>
                Trendy Outfits
              </dt>
              <dd class="mt-2 text-md text-pretty tracking-tight text-slate-600">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
            </div>
            <div class="relative pl-16">
              <dt class="mt-2 text-md text-pretty tracking-tight text-slate-800 font-semibold">
                <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-fuchsia-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
                </div>
                Stylish Looks
              </dt>
              <dd class="mt-2 text-md text-pretty tracking-tight text-slate-600">Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.</dd>
            </div>
            <div class="relative pl-16">
              <dt class="mt-2 text-md text-pretty tracking-tight text-slate-800 font-semibold">
                <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock1-icon lucide-clock-1"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14.5 8"/></svg>
                </div>
                Seasoned Stylists
              </dt>
              <dd class="mt-2 text-md text-pretty tracking-tight text-slate-600">Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.</dd>
            </div>
            <div class="relative pl-16">
              <dt class="mt-2 text-md text-pretty tracking-tight text-slate-800 font-semibold">
                <div class="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-fuchsia-500 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check-icon lucide-user-check"><path d="m16 11 2 2 4-4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                </div>
                Comfort
              </dt>
              <dd class="mt-2 text-md text-pretty tracking-tight text-slate-600">Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

  );
};