<template>
  <div class="container m-auto my-5 md:my-0 px-8" id="about">
    <div class="">
      <div class="text-2xl md:text-4xl mb-6">
        <span
          class="text-indigo-600 font-extrabold dark:brightness-50 dark:text-indigo-900"
          >01 .
        </span>
        <span class="font-bold text-neutral-800 dark:text-neutral-200">{{
          aboutStart
        }}</span>
      </div>
      <div class="">
        <p
          class="text-sm md:text-lg lg:text-xl dark:text-slate-200 text-gray-700 tracking-widest leading-relaxed"
          v-motion-pop-visible
        >
          I passed matriculation exam at 2019 . But I'm still in first year of
          distance education because of diseases and other cases. During that
          years , I have been searching for my passion . And then , I found Web
          Development and I choose it . Because , I think it is more suitable
          for me and I believe I can do better with this career. That is all
          about me.
        </p>
        <div class="my-7 text-xl md:text-3xl font-bold" v-motion-pop-visible>
          <span class="text-indigo-600 dark:brightness-50 dark:text-indigo-900">
            What do I Learn ?
          </span>
        </div>
        <p
          class="text-sm md:text-lg lg:text-xl dark:text-slate-200 text-gray-700 tracking-widest leading-relaxed"
          v-motion-pop-visible
        >
          I learn Frontend
          <span
            class="text-indigo-600 dark:brightness-50 dark:text-indigo-900 dark:font-bold"
            >(Vue js)</span
          >
          and Backend
          <span
            class="text-indigo-600 dark:brightness-50 dark:text-indigo-900 dark:font-bold"
            >(PHP-Laravel)</span
          >. I feel like I'm more familiar with Backend . I learn
          <span class="text-indigo-600 dark:text-indigo-900">
            <span class="dark:brightness-50 mr-3 dark:font-bold">
              html, css-library (Bootstrap , Tailwind) , Javascript ,Api</span
            >
            <span class="text-black dark:text-slate-200">and</span>
            <span class="brightness-50 ml-3 dark:font-bold">Jquery(Ajax)</span>
          </span>
          . And , I also learn
          <span
            class="text-indigo-600 dark:brightness-50 dark:text-indigo-900 dark:font-bold"
          >
            Git And Github</span
          >
          . I have knowledege at
          <span
            class="text-indigo-600 dark:brightness-50 dark:text-indigo-900 dark:font-bold"
            >server deployment</span
          >
          .
        </p>
        <div
          class="my-7 text-xl md:text-2xl font-bold text-end text-neutral-500 dark:text-neutral-300"
        >
          <span>{{ aboutEnd }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      aboutStart: "< a little about me >",
      aboutEnd: "</ a little about me >",
    };
  },
};
</script>

<style lang="scss" scoped></style>
