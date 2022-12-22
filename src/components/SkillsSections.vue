<template>
  <div class="container m-auto my-5 md:my-0 px-8" id="skill">
    <div class="">
      <div class="text-2xl md:text-4xl mb-8">
        <span
          class="text-indigo-600 font-extrabold dark:brightness-50 dark:text-indigo-900"
          >02 .
        </span>
        <span class="font-bold text-neutral-800 dark:text-neutral-200">{{
          skillStart
        }}</span>
      </div>
      <div class="">
        <div
          class="bg-white shadow-xl p-6 md:p-10 rounded-xl dark:bg-indigo-800 dark:backdrop-blur-xl"
          v-motion-pop-visible
        >
          <div class="md:grid grid-cols-12 mb-5">
            <div
              class="col-span-3 lg:col-span-2 flex mb-3 md:mb-0 items-center dark:text-slate-200 text-neutral-800 font-semibold"
            >
              <img
                src="../assets/images/bootstrap.png"
                class="aspect-square w-10 mr-3"
                alt=""
              />
              Bootstrap
            </div>
            <div
              class="col-span-9 lg:col-span-10 flex gap-2 sm:gap-5 dark:brightness-75"
            >
              <div class="rounded-lg w-1/5 h-10 bg-indigo-200"></div>
              <div class="rounded-lg w-1/5 h-10 bg-indigo-300"></div>
              <div class="rounded-lg w-1/5 h-10 bg-indigo-400"></div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300">
                <div class="w-[70%] h-full bg-indigo-400 rounded-l-lg"></div>
              </div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300"></div>
            </div>
          </div>
          <div class="md:grid grid-cols-12 mb-5">
            <div
              class="col-span-3 lg:col-span-2 flex mb-3 md:mb-0 items-center dark:text-slate-200 text-neutral-800 font-semibold"
            >
              <img
                src="../assets/images/tailwind-css-icon.png"
                class="w-10 mr-3"
                alt=""
              />

              Tailwind
            </div>
            <div
              class="col-span-9 lg:col-span-10 flex gap-2 sm:gap-5 dark:brightness-75"
            >
              <div class="rounded-lg w-1/5 h-10 bg-indigo-200"></div>
              <div class="rounded-lg w-1/5 h-10 bg-indigo-300"></div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300">
                <div class="w-[90%] h-full bg-indigo-400 rounded-l-lg"></div>
              </div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300"></div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300"></div>
            </div>
          </div>
          <div class="md:grid grid-cols-12 mb-5">
            <div
              class="col-span-3 lg:col-span-2 flex mb-3 md:mb-0 items-center dark:text-slate-200 text-neutral-800 font-semibold"
            >
              <img
                src="../assets/images/js.png"
                class="aspect-square w-10 mr-3"
                alt=""
              />
              Javascript
            </div>
            <div
              class="col-span-9 lg:col-span-10 flex gap-2 sm:gap-5 dark:brightness-75"
            >
              <div class="rounded-lg w-1/5 h-10 bg-indigo-200"></div>
              <div class="rounded-lg w-1/5 h-10 bg-indigo-300"></div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300">
                <div class="w-[64%] h-full bg-indigo-400 rounded-l-lg"></div>
              </div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300"></div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300"></div>
            </div>
          </div>
          <div class="md:grid grid-cols-12 mb-5">
            <div
              class="col-span-3 lg:col-span-2 flex mb-3 md:mb-0 items-center dark:text-slate-200 text-neutral-800 font-semibold"
            >
              <img
                src="../assets/images/vue.png"
                class="aspect-square w-10 mr-3"
                alt=""
              />
              Vue js
            </div>
            <div
              class="col-span-9 lg:col-span-10 flex gap-2 sm:gap-5 dark:brightness-75"
            >
              <div class="rounded-lg w-1/5 h-10 bg-indigo-200"></div>
              <div class="rounded-lg w-1/5 h-10 bg-indigo-300"></div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300">
                <div class="w-[60%] h-full bg-indigo-400 rounded-l-lg"></div>
              </div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300"></div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300"></div>
            </div>
          </div>
          <div class="md:grid grid-cols-12">
            <div
              class="col-span-3 lg:col-span-2 flex mb-3 md:mb-0 items-center dark:text-slate-200 text-neutral-800 font-semibold"
            >
              <img
                src="../assets/images/62a4c87afdee15d2905007c7.png"
                class="aspect-square w-10 mr-3"
                alt=""
              />
              PHP(Laravel)
            </div>
            <div
              class="col-span-9 lg:col-span-10 flex gap-2 sm:gap-5 dark:brightness-75"
            >
              <div class="rounded-lg w-1/5 h-10 bg-indigo-200"></div>
              <div class="rounded-lg w-1/5 h-10 bg-indigo-300"></div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300">
                <div class="w-[62%] h-full bg-indigo-400 rounded-l-lg"></div>
              </div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300"></div>
              <div class="rounded-lg w-1/5 h-10 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="my-7 text-xl md:text-2xl font-bold text-end text-neutral-500 dark:text-neutral-300"
      >
        <span>{{ skillEnd }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SkillsSection",
  data() {
    return {
      skillStart: "< my skills >",
      skillEnd: "< / my skills >",
    };
  },
};
</script>

<style lang="stylus" scoped></style>
