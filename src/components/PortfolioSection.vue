<template>
  <div class="container m-auto my-5 md:my-0 px-8" id="project">
    <div class="">
      <div class="text-2xl md:text-4xl mb-6">
        <span
          class="text-indigo-600 font-extrabold dark:brightness-50 dark:text-indigo-900"
          >03 .
        </span>
        <span class="font-bold text-neutral-800 dark:text-neutral-200">{{
          portfolioStart
        }}</span>
      </div>
      <div class="">
        <p
          v-motion-pop-visible
          class="text-sm md:text-lg lg:text-xl dark:text-slate-200 text-gray-700 tracking-widest leading-relaxed"
        >
          A mini gallery of my project . Lorem ipsum dolor sit amet consectetur
          adipisicing elit . Provident, dolorum. Reprehenderit, deleniti. Eum
          explicabo dolor commodi magni reprehenderit .
        </p>
        <div class="mt-10">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16"
          >
            <div
              class="group"
              v-wave="{
                color: 'rebeccapurple',
                initialOpacity: 0.5,
                duration: 0.5,
                easing: 'ease-in',
              }"
              v-motion-slide-visible-left
            >
              <div
                class="bg-indigo-500 dark:bg-indigo-900 p-6 rounded-lg shadow-lg bg-opacity-30 backdrop-blur-lg h-80 sm:h-96 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl"
              >
                <div class="text-2xl">
                  <div
                    class="text-indigo-600 mb-4 dark:brightness-0 dark:text-indigo-900"
                  >
                    <i class="fa-regular fa-folder"></i>
                  </div>
                </div>
                <div class="">
                  <h1
                    class="text-2xl font-bold text-gray-600 dark:text-slate-200"
                  >
                    Pizza Order System
                  </h1>
                </div>
                <p
                  class="text-sm md:text-lg lg:text-xl dark:text-slate-200 text-gray-600 tracking-widest leading-relaxed my-4"
                >
                  This Project is made with using Laravel And Bootstrap.
                </p>
                <div class="mt-2">
                  <div class="">
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Frontend</span
                    >
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Laravel Blade</span
                    >
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2 mt-2"
                      >Bootstrap
                    </span>
                  </div>
                  <div class="mt-3">
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Backend
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Laravel
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-900 bg-opacity-50 text-white rounded-lg mr-2 mt-2 lg:mt-0"
                    >
                      <a
                        href="https://github.com/ZinMinHtike29/pizza-order-system-course-project"
                        target="_blank"
                      >
                        <i class="fa-brands fa-github mr-1"></i> Source Code</a
                      >
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="group"
              v-wave="{
                color: 'rebeccapurple',
                initialOpacity: 0.5,
                duration: 0.5,
                easing: 'ease-in',
              }"
              v-motion-slide-visible-top
            >
              <div
                class="bg-indigo-500 dark:bg-indigo-900 p-6 rounded-lg shadow-lg bg-opacity-30 backdrop-blur-lg h-80 sm:h-96 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl"
              >
                <div class="text-2xl dark:brightness-0 dark:text-indigo-900">
                  <div class="text-indigo-600 mb-4">
                    <i class="fa-regular fa-folder"></i>
                  </div>
                </div>
                <div class="">
                  <h1
                    class="text-2xl font-bold text-gray-600 dark:text-slate-200"
                  >
                    My Media
                  </h1>
                </div>
                <p
                  class="text-sm md:text-lg lg:text-xl dark:text-slate-200 text-gray-600 tracking-widest leading-relaxed my-3"
                >
                  This Project is made with using Laravel , Vue And Bootstrap.
                </p>
                <div class="mt-2">
                  <div class="">
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Frontend</span
                    >
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Vue
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Bootstrap
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-900 bg-opacity-50 text-white rounded-lg mr-2 mt-2"
                    >
                      <a
                        href="https://github.com/ZinMinHtike29/my-media-client-course-project"
                        target="_blank"
                      >
                        <i class="fa-brands fa-github mr-1"></i> Source Code</a
                      >
                    </span>
                  </div>
                  <div class="mt-3">
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Backend
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Laravel
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Api
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-900 bg-opacity-50 text-white rounded-lg mr-2 mt-2 lg:mt-0"
                    >
                      <a
                        href="https://github.com/ZinMinHtike29/my-media-admin-course-project"
                        target="_blank"
                      >
                        <i class="fa-brands fa-github mr-1"></i> Source Code</a
                      >
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="group"
              v-wave="{
                color: 'rebeccapurple',
                initialOpacity: 0.5,
                duration: 0.5,
                easing: 'ease-in',
              }"
              v-motion-slide-visible-right
            >
              <div
                class="bg-indigo-500 dark:bg-indigo-900 p-6 rounded-lg shadow-lg bg-opacity-30 backdrop-blur-lg h-80 sm:h-96 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl"
              >
                <div class="text-2xl dark:brightness-0 dark:text-indigo-900">
                  <div class="text-indigo-600 mb-4">
                    <i class="fa-regular fa-folder"></i>
                  </div>
                </div>
                <div class="">
                  <h1
                    class="text-2xl font-bold dark:text-slate-200 text-gray-600"
                  >
                    It Shop
                  </h1>
                </div>
                <p
                  class="text-sm md:text-lg lg:text-xl dark:text-slate-200 text-gray-600 tracking-widest leading-relaxed my-3"
                >
                  This Project is made with using Laravel ,Inertia ,Vue And
                  Bootstrap.
                </p>
                <div class="mt-2">
                  <div class="">
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Frontend</span
                    >
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Vue
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Bootstrap
                    </span>
                  </div>
                  <div class="mt-3">
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Backend
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Laravel
                    </span>

                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-900 bg-opacity-50 text-white rounded-lg mr-2 mt-2"
                    >
                      <a
                        href="https://github.com/ZinMinHtike29/It-shop-laravel-inertia-vue"
                        target="_blank"
                      >
                        <i class="fa-brands fa-github mr-1"></i> Source Code</a
                      >
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="group"
              v-wave="{
                color: 'rebeccapurple',
                initialOpacity: 0.5,
                duration: 0.5,
                easing: 'ease-in',
              }"
              v-motion-slide-visible-left
            >
              <div
                class="bg-indigo-500 dark:bg-indigo-900 p-6 rounded-lg shadow-lg bg-opacity-30 backdrop-blur-lg h-80 sm:h-96 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl"
              >
                <div class="text-2xl dark:brightness-0 dark:text-indigo-900">
                  <div class="text-indigo-600 mb-4">
                    <i class="fa-regular fa-folder"></i>
                  </div>
                </div>
                <div class="">
                  <h1
                    class="text-2xl font-bold text-gray-600 dark:text-slate-200"
                  >
                    News Web
                  </h1>
                </div>
                <p
                  class="text-sm md:text-lg lg:text-xl text-gray-600 dark:text-slate-200 tracking-widest leading-relaxed my-3"
                >
                  This Project is made with using Laravel , Vue And Tailwind.
                </p>
                <div class="mt-2">
                  <div class="">
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Frontend</span
                    >
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Vue
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                    >
                      Tailwind
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-900 bg-opacity-50 text-white rounded-lg mr-2 mt-2"
                    >
                      <a
                        href="https://github.com/ZinMinHtike29/blog-web-tailwind-vue-admin-user"
                        target="_blank"
                      >
                        <i class="fa-brands fa-github mr-1"></i> Source Code</a
                      >
                    </span>
                  </div>
                  <div class="mt-3">
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Backend
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Laravel
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                      >Api
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-900 bg-opacity-50 text-white rounded-lg mr-2 mt-2 lg:mt-0"
                    >
                      <a
                        href="https://github.com/ZinMinHtike29/blog-web-laravel-api"
                        target="_blank"
                      >
                        <i class="fa-brands fa-github mr-1"></i> Source Code</a
                      >
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="group"
              v-wave="{
                color: 'rebeccapurple',
                initialOpacity: 0.5,
                duration: 0.5,
                easing: 'ease-in',
              }"
              v-motion-slide-visible-top
            >
              <div
                class="bg-indigo-500 dark:bg-indigo-900 p-6 rounded-lg shadow-lg bg-opacity-30 backdrop-blur-lg h-80 sm:h-96 transition-all duration-300 ease-out group-hover:scale-105 group-hover:shadow-xl"
              >
                <div class="text-2xl">
                  <div
                    class="text-indigo-600 mb-4 dark:brightness-0 dark:text-indigo-900"
                  >
                    <i class="fa-regular fa-folder"></i>
                  </div>
                </div>
                <div class="">
                  <h1
                    class="text-2xl font-bold text-gray-600 dark:text-slate-200"
                  >
                    Bootstrap Portfolio
                  </h1>
                </div>
                <p
                  class="text-sm md:text-lg lg:text-xl text-gray-600 dark:text-slate-200 tracking-widest leading-relaxed my-3"
                >
                  This Project is made with using Bootstrap .
                </p>
                <div class="mt-2">
                  <div class="">
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-600 bg-opacity-50 text-white rounded-lg mr-2"
                    >
                      Bootstrap
                    </span>
                    <span
                      class="text-xs inline-block py-1.5 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-900 bg-opacity-50 text-white rounded-lg mr-2 mt-2"
                    >
                      <a
                        href="https://spiffy-taffy-013396.netlify.app"
                        target="_blank"
                      >
                        <i class="fa-solid fa-link mr-1"></i>Live Demo
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="my-7 text-xl md:text-2xl font-bold text-end text-neutral-500 dark:text-neutral-300"
      >
        <span>{{ portfolioEnd }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PortfolioSection",
  data() {
    return {
      portfolioStart: "< my projects >",
      portfolioEnd: "< / my projects >",
    };
  },
};
</script>

<style lang="stylus" scoped></style>
