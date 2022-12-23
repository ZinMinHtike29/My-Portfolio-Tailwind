<template>
  <div
    class="container md:min-h-[768px] lg:min-h-screen flex items-center m-auto mt-3 my-3 md:my-0"
    id="home"
  >
    <div class="px-8 pt-20 md:pt-0">
      <div
        class="sm:float-right md:w-60 dark:brightness-50 dark:border-indigo-900 border-indigo-600 border-t-8 border-r-8 pt-3 pr-3"
      >
        <img src="../assets/images/myimage.jpg" class="aspect-square" />
      </div>
      <div class="pt-10 mb-4">
        <div class="">
          <h1
            class="text-3xl md:text-5xl lg:text-6xl xl:text-8xl font-bold md:flex mb-6"
          >
            <span class="dark:text-slate-200 mr-2"> Hi,I'm</span>
            <span
              class="dark:text-indigo-900 text-indigo-600 md:ml-4 typewriter dark:brightness-50"
              >Zin Min Htike</span
            >
          </h1>
          <h1
            class="text-2xl md:text-4xl lg:text-5xl xl:text-7xl font-bold dark:brightness-50 text-indigo-600 dark:text-indigo-900"
          >
            Web Developer
          </h1>
          <p
            class="my-6 text-sm md:text-lg lg:text-xl dark:text-slate-200 text-gray-700 tracking-widest leading-relaxed"
          >
            I have been studying Web Development since the beginning of 2022.I
            learn PHP(Laravel) And Vue.Js .You can see my projects at my GitHub
            Account
            <a
              href="https://github.com/ZinMinHtike29"
              class="text-indigo-600 underline underline-offset-1 dark:text-indigo-900 dark:brightness-50 dark:font-bold"
              target="_blank"
              >Zin Min Htike</a
            >. <br />
          </p>
          <div class="">
            <div
              class="flex items-center gap-8 md:absolute mb-2 md:mb-0 h-full left-5 md:flex-col top-[30%] text-indigo-600 dark:text-indigo-900 dark:brightness-50"
              :class="[
                width == 768 ? ' -ml-3' : '',
                width == 1024 ? '-ml-3' : '',
              ]"
            >
              <a href="https://www.facebook.com/zin.m.htike.125">
                <i class="fa-brands fa-facebook-f"></i
              ></a>
              <a href="https://github.com/ZinMinHtike29">
                <i class="fa-brands fa-github"></i
              ></a>
              <a href=""><i class="fa-brands fa-telegram"></i></a>
              <a href=""><i class="fa-brands fa-linkedin"></i></a>
              <div
                class="h-48 w-1 dark:bg-indigo-900 bg-indigo-600 hidden md:block"
              ></div>
            </div>

            <div
              class="flex mb-6 md:mb-0 items-center gap-28 md:absolute w-7 h-full right-5 md:flex-col text-indigo-600"
              :class="[
                width == 768 ? ' -mr-3 top-[36%]' : 'top-[37%]',
                width == 1024 ? '-mr-4' : '',
              ]"
            >
              <div
                class="md:rotate-[270deg] font-semibold tracking-wider dark:text-indigo-900 dark:brightness-50"
              >
                htike0869@gmail.com
              </div>
              <div
                class="h-48 w-1 dark:bg-indigo-900 dark:brightness-50 bg-indigo-600 hidden md:block"
              ></div>
            </div>
          </div>

          <div>
            <button
              type="button"
              class="inline-block px-6 py-2.5 dark:bg-indigo-900 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-lg hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
              v-wave="{
                color: 'greenyellow',
                initialOpacity: 0.5,
                duration: 0.5,
                easing: 'ease-in',
              }"
            >
              Download Cv
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeSection",
  data() {
    return {
      width: window.innerWidth,
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
    });
  },
};
</script>

<style lang="scss" scoped></style>
