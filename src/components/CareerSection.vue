<template>
  <div class="container m-auto my-5 md:my-0 px-8" id="career">
    <div class="">
      <div class="text-2xl md:text-4xl mb-6">
        <span
          class="text-indigo-600 font-extrabold dark:brightness-50 dark:text-indigo-900"
          >04 .
        </span>
        <span class="font-bold text-neutral-800 dark:text-neutral-200">{{
          careerStart
        }}</span>
      </div>
      <div class="">
        <p
          v-motion-pop-visible
          class="text-sm md:text-lg dark:text-slate-200 lg:text-xl text-gray-700 tracking-widest leading-relaxed"
        >
         OJT At Code-Lab 2023-Jan - Feb
        </p>
      </div>
      <div
        class="my-7 text-xl md:text-2xl font-bold text-end text-neutral-500 dark:text-neutral-300"
      >
        <span>{{ careerEnd }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareerSection",
  data() {
    return {
      careerStart: "< my working career >",
      careerEnd: "< / my working career >",
    };
  },
};
</script>

<style lang="stylus" scoped></style>
