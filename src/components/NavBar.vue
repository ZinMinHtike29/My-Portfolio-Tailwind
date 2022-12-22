<template>
  <nav
    class="flex z-50 dark:bg-indigo-700 bg-indigo-400 sm:bg-opacity-50 sm:backdrop-blur-lg shadow-lg items-center justify-between px-4 py-2 fixed top-0 w-full"
  >
    <ul
      class="flex justify-center items-center left-0 dark:bg-indigo-700 dark:md:bg-transparent bg-indigo-400 gap-4 lg:gap-8 w-full flex-col fixed md:static md:flex-row md:w-fit md:bg-transparent transition-all duration-200 ease-in py-7 md:py-0 z-[1000]"
      :class="navStatus ? 'top-0' : '-top-full'"
      v-wave="{
        color: 'rebeccapurple',
        initialOpacity: 0.5,
        duration: 0.5,
        easing: 'ease-in',
      }"
      id="navItem"
    >
      <li v-for="t in NavText" :key="t">
        <div class="text-center text-white md:flex">
          <!-- <div class="font-bold md:mr-2 hidden lg:inline text-indigo-600">
            0{{ i }}.
          </div> -->
          <div
            class="md:font-bold dark:text-indigo-200"
            @click="scrollMe(t.id)"
            :class="
              currentTab == t.id
                ? 'dark:text-indigo-900 dark:md:text-indigo-900 text-indigo-700'
                : ''
            "
          >
            {{ t.name }}
          </div>
        </div>
      </li>
    </ul>
    <div class="block sm:hidden"></div>
    <div class="flex items-center">
      <div>
        <span>
          <div
            class="w-14 z-10"
            v-if="mode != 'day'"
            @click="changeMode('day')"
          >
            <Vue3Lottie :animationData="sun" />
          </div>
          <div
            class="w-14 z-10"
            v-if="mode != 'night'"
            @click="changeMode('night')"
          >
            <Vue3Lottie :animationData="night" />
          </div>
        </span>
      </div>
      <div class="block md:hidden z-[1001]" @click="toggleNav">
        <div
          class="w-10 h-1 bg-indigo-200 my-2 transition-all duration-300 ease-in-out"
          :class="navStatus ? 'rotate-45 translate-y-2 ' : ''"
        ></div>
        <div
          class="w-5 h-1 bg-indigo-200 mb-2 transition-all duration-300 ease-in-out"
          :class="navStatus ? ' -translate-x-5 opacity-0 ' : ''"
        ></div>
        <div
          class="w-10 h-1 bg-indigo-200 mb-2 transition-all duration-300 ease-in-out"
          :class="navStatus ? '-rotate-45 -translate-y-4 ' : ''"
        ></div>
      </div>
    </div>
  </nav>
</template>

<script>
import sun from "@/assets/animation/sun.json";
import night from "@/assets/animation/night.json";
export default {
  name: "NavBar",
  data() {
    return {
      NavText: [
        { name: "< Home />", id: "home" },
        { name: "< About />", id: "about" },
        { name: "< Skills />", id: "skill" },
        { name: "< Projects />", id: "project" },
        { name: "< Career />", id: "career" },
        { name: "< Contact />", id: "contact" },
      ],
      navStatus: false,
      currentTab: "home",
      sun,
      night,
      mode: "day",
    };
  },
  methods: {
    scrollMe(id) {
      this.currentTab = id;
      let element = document.getElementById(id);
      let top = element.offsetTop;
      window.scrollTo(0, top);
    },
    toggleNav() {
      if (this.navStatus) {
        this.navStatus = false;
      } else {
        this.navStatus = true;
      }
    },
    changeMode(mode) {
      this.mode = mode;
      if (mode == "night") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("mode", mode);
    },
    setDarkMode() {
      let mode = localStorage.getItem("mode");
      if (mode != null && mode == "night") {
        this.mode = mode;
        document.documentElement.classList.add("dark");
      }
    },
  },
  mounted() {
    this.setDarkMode();
  },
};
</script>

<style lang="stylus" scoped></style>
