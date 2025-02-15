import Image from "next/image";
import Button from "components/buttons/sample";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="widescreen:section-min-height tallscreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
            We Bake with
            <span className="text-yellow-700 dark:text-indigo-300">
              {" "}
              Passion{" "}
            </span>
            Like Never Before...
          </h2>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
            Bringing sweetness to every celebration, from birthdays to weddings
            and beyond.
          </p>
          <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
            Think Heavenly Cakes.
          </p>
        </article>
        <Image
          className="sm:w-1/2 hover:opacity-90 rounded-md"
          src="/heroimage.jpg"
          alt="Rocket Dab"
          width={100}
          height={24}
        />
      </section>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

      <section
        id="delights"
        className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
      >
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Our Delights
        </h2>

        <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div className="group relative">
              <Image
                src="/blackforestcake.jpg"
                alt="BlackForest Cake"
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
                width={100}
                height={24}
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Black Forest
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹ 890.00
                </p>
              </div>
            </div>
            <div className="group relative">
              <Image
                src="/strawberrycake.jpg"
                alt="Strawberry Cake."
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
                width={100}
                height={24}
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Strawberry Cake
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹ 900.00
                </p>
              </div>
            </div>
            <div className="group relative">
              <Image
                src="/cheesecake.jpg"
                alt="Cheese Cake"
                width={100}
                height={24}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Cheese Cake
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹ 700.00
                </p>
              </div>
            </div>
            <div className="group relative">
              <Image
                width={100}
                height={24}
                src="/carrotcake.jpg"
                alt="Carrot Cake."
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Carrot Cake
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹ 400.00
                </p>
              </div>
            </div>
            <div className="group relative">
              <Image
                width={100}
                height={24}
                src="/rainbowcakes.jpg"
                alt="Rainbow Cake."
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Rainbow Cake
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹ 900.00
                </p>
              </div>
            </div>
            <div className="group relative">
              <Image
                width={100}
                height={24}
                src="/blueberriescake.jpg"
                alt=" Blueberries Cake."
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Blueberries Cake
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹ 1200.00
                </p>
              </div>
            </div>
            <div className="group relative">
              <Image
                height={24}
                width={100}
                src="/donutcake.jpg"
                alt="Donut cake"
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Donut Cake
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹ 800.00
                </p>
              </div>
            </div>
            <div className="group relative">
              <Image
                width={100}
                height={24}
                src="/rosecake.jpg"
                alt="Rose Cake."
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700 dark:text-white">
                    <a href="#">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      Rose Cake
                    </a>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  ₹ 900.00
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

      <section
        id="menu"
        className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
      >
        <div className="relative overflow-hidden bg-white dark:bg-black">
          <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                  Love is in the air!
                </h1>
                <p className="mt-4 text-xl text-gray-500 dark:text-white">
                  This Valentines Day, treat your special someone to our
                  heartwarming collection of sweet delights, crafted to make
                  every moment a little sweeter.
                </p>
              </div>
              <div className="">
                <div className="mt-10">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <Image
                              src="/blackforestcake.jpg"
                              alt=""
                              className="size-full object-cover"
                              width={100}
                              height={24}
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/strawberrycake.jpg"
                              alt=""
                              className="size-full object-cover"
                              width={100}
                              height={24}
                            />
                          </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/donutcake.jpg"
                              alt=""
                              className="size-full object-cover"
                              width={100}
                              height={24}
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/rainbowcakes.jpg"
                              alt=""
                              className="size-full object-cover"
                              width={100}
                              height={24}
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/cheesecake.jpg"
                              alt=""
                              className="size-full object-cover"
                              width={100}
                              height={24}
                            />
                          </div>
                        </div>
                        <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/carrotcake.jpg"
                              alt=""
                              className="size-full object-cover"
                              width={100}
                              height={24}
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src="/rosecake.jpg"
                              alt=""
                              className="size-full object-cover"
                              width={100}
                              height={24}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-block rounded-md border border-transparent bg-rose-600 px-8 py-3 text-center font-medium text-white hover:bg-rose-700"
                  >
                    Explore Our Menu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

      <section
        id="testimonials"
        className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
      >
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Testimonials
        </h2>
        <figure className="my-12">
          <blockquote className="relative rounded-3xl bg-pink-500 py-12 pl-14 pr-8 dark:bg-black">
            <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
              Cake Heaven has always been there for me! Their Black Forest cake
              arrived fresh and beautifully packaged, just as expected. The rich
              chocolate, luscious cherries, and perfect cream balance made it
              unforgettable. Life-long customer! A++ shopping experience
            </p>
          </blockquote>
          <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
            &#8212;Karthik, Genius
          </figcaption>
        </figure>
        <figure className="my-12">
          <blockquote className="relative rounded-3xl bg-yellow-500 py-12 pl-14 pr-8 dark:bg-black">
            <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
              I knew I not only wanted — I needed — Cake Heavens Rainbow Cake
              for my celebration. Cake Heaven delivered in one day! Nothing says
              ‘party of the year’ like Cake Heavens vibrant and delicious
              Rainbow Cake!
            </p>
          </blockquote>
          <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
            &#8212;Mohan The Martian
          </figcaption>
        </figure>
        <figure className="my-12">
          <blockquote className="relative rounded-3xl bg-rose-500 py-12 pl-14 pr-8 dark:bg-black">
            <p className="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] dark:text-slate-400 sm:text-3xl">
              I knew I not only wanted &#8212;
              <span className="italic">I needed</span> &#8212; Acme s Infinity
              Rocket for my mission in space. Acme delivered in one day! Nothing
              says <q className="italic">Take me to your leader</q> like Acmes
              Infinity Rocket! 💯
            </p>
          </blockquote>
          <figcaption className="mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl">
            &#8212;Ravi
          </figcaption>
        </figure>
      </section>

      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />

      <section
        id="contact"
        className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-16 p-6"
      >
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Contact Us
        </h2>
        <form
          action=""
          className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
        >
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minLength={3}
            maxLength={60}
            placeholder="Your Subject"
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows={10}
            cols={30}
            placeholder="Your Message"
            required
            className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
          ></textarea>
          <button className="w-48 inline-block rounded-md border-transparent bg-rose-600 px-8 py-3 text-center font-medium text-white hover:bg-rose-700 dark:border-none">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
