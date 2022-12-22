<template>
  <div
    class="w-full min-h-screen bg-gradient-to-b from-indigo-200 to-indigo-600 flex justify-center items-center bg-opacity-50 backdrop-blur-lg"
    v-if="isLoading"
  >
    <span class="loader"></span>
  </div>
  <div class="dark:bg-indigo-800 overflow-x-hidden" v-if="!isLoading">
    <NavBar></NavBar>
    <div class="">
      <home-section></home-section>
    </div>
    <div class="">
      <about-section></about-section>
    </div>
    <div class="">
      <skills-section></skills-section>
    </div>
    <div class="">
      <portfolio-section></portfolio-section>
    </div>
    <div class="">
      <career-section></career-section>
    </div>
    <div class="">
      <contact-section></contact-section>
    </div>
    <div
      class="bg-indigo-500 bg-opacity-75 w-16 h-16 sm:w-20 sm:h-20 fixed right-5 bottom-5 sm:right-10 sm:bottom-10 rounded-full flex justify-center items-center transition-all duration-500 ease-in"
      v-if="scrollValue > 200"
      @click="toTop"
    >
      <span class="loader2"></span>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import HomeSection from "@/components/HomeSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSections.vue";
import PortfolioSection from "@/components/PortfolioSection.vue";
import CareerSection from "@/components/CareerSection.vue";
import ContactSection from "@/components/ContactSection.vue";

export default {
  name: "HomeView",
  components: {
    NavBar,
    HomeSection,
    AboutSection,
    SkillsSection,
    PortfolioSection,
    CareerSection,
    ContactSection,
  },
  data() {
    return {
      aboutMe: "< a little about me >",
      isLoading: true,
      scrollValue: "",
    };
  },
  methods: {
    scrollMe() {
      let element = this.$refs["about"];
      let top = element.offsetTop;
      window.scrollTo(0, top);
    },
    handelScroll() {
      this.scrollValue = window.scrollY;
    },
    toTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handelScroll);
    document.title = "Portfolio | Zin Min Htike";
    document.onreadystatechange = () => {
      if (document.readyState === "complete") {
        setInterval(() => {
          this.isLoading = false;
        }, 1200);
      }
    };
  },
};
</script>
