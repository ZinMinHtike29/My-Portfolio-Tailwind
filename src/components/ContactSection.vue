<template>
  <div class="container m-auto my-5 md:my-0 px-8 pb-7" id="contact">
    <div class="text-2xl md:text-4xl mb-10">
      <span
        class="text-indigo-600 font-extrabold dark:brightness-50 dark:text-indigo-900"
        >05 .
      </span>
      <span class="font-bold text-neutral-800 dark:text-neutral-200">{{
        contactStart
      }}</span>
    </div>
    <div class="">
      <div
        class="p-6 rounded-lg shadow-lg dark:bg-transparent bg-white relative"
        v-motion-pop-visible
      >
        <div class="md:grid grid-cols-12">
          <div class="col-span-6 lg:col-span-5">
            <Vue3Lottie :animationData="Contact" class="z-30" />
          </div>
          <div
            class="col-span-6 lg:col-span-7 flex flex-col justify-center z-[5000]"
          >
            <div class="">
              <div
                class="text-2xl md:text-3xl mb-6 font-bold dark:text-indigo-300 text-indigo-600"
              >
                <h1>Send Message . .</h1>
              </div>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                @submit.prevent="handelSubmit"
              >
                <p class="hidden">
                  <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <div class="mb-8">
                  <input
                    type="text"
                    v-model="form.name"
                    name="name"
                    class="block w-full pb-3 text-indigo-700 focus:outline-none transition ease-in-out m-0 lg:w-3/4 border-b-2 border-indigo-600 bg-transparent dark:border-indigo-300 dark:placeholder-indigo-300 placeholder-indigo-700"
                    placeholder="Enter Your Name"
                  />
                  <small class="text-red-400" v-if="validateForm.name"
                    >Need To Fill Your Name ...
                  </small>
                </div>
                <div class="mb-8">
                  <input
                    type="email"
                    v-model="form.email"
                    name="email"
                    class="block w-full pb-3 text-indigo-700 focus:outline-none transition ease-in-out m-0 lg:w-3/4 border-b-2 border-indigo-600 bg-transparent dark:border-indigo-300 dark:placeholder-indigo-300 placeholder-indigo-700"
                    placeholder="Enter Your Email"
                  />
                  <small class="text-red-400" v-if="validateForm.email"
                    >Need To Fill Your Email ...
                  </small>
                </div>
                <div class="mb-8">
                  <textarea
                    name="message"
                    v-model="form.message"
                    cols="30"
                    rows="6"
                    class="block w-full pb-3 text-indigo-700 focus:outline-none transition ease-in-out m-0 lg:w-3/4 border-b-2 border-indigo-600 bg-transparent dark:border-indigo-300 dark:placeholder-indigo-300 placeholder-indigo-700"
                    placeholder="Enter Your Message"
                  ></textarea>
                  <small class="text-red-400" v-if="validateForm.message"
                    >Need To Fill Your Message ...
                  </small>
                </div>
                <div class="text-end lg:w-3/4 z-[1000]">
                  <button
                    type="submit"
                    class="inline-block px-6 py-2 border-2 dark:border-indigo-300 border-indigo-800 dark:text-white text-black sm:text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                    v-wave="{
                      color: 'rebeccapurple',
                      initialOpacity: 0.5,
                      duration: 0.5,
                      easing: 'ease-in',
                    }"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="absolute bottom-0 w-full left-0 hidden md:block">
          <svg
            width="100%"
            height="100%"
            id="svg"
            viewBox="0 0 1440 400"
            xmlns="http://www.w3.org/2000/svg"
            class="transition duration-300 ease-in-out delay-150 rounded-b-lg"
          >
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#4f46e5"></stop>
                <stop offset="95%" stop-color="#818cf8"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,400 C 0,400 0,133 0,133 C 113.49282296650719,116.16746411483254 226.98564593301438,99.33492822966507 321,111 C 415.0143540669856,122.66507177033493 489.5502392344498,162.82775119617224 576,158 C 662.4497607655502,153.17224880382776 760.8133971291865,103.35406698564594 872,94 C 983.1866028708135,84.64593301435406 1107.1961722488038,115.75598086124401 1204,129 C 1300.8038277511962,142.244019138756 1370.401913875598,137.622009569378 1440,133 C 1440,133 1440,400 1440,400 Z"
              stroke="none"
              stroke-width="0"
              fill="url(#gradient)"
              fill-opacity="0.53"
              class="transition-all duration-300 ease-in-out delay-150 path-0"
            ></path>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="5%" stop-color="#4f46e5"></stop>
                <stop offset="95%" stop-color="#818cf8"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,400 C 0,400 0,266 0,266 C 84.14354066985646,242.3062200956938 168.28708133971293,218.61244019138758 280,227 C 391.7129186602871,235.38755980861242 530.9952153110049,275.85645933014354 626,278 C 721.0047846889951,280.14354066985646 771.7320574162678,243.96172248803828 843,235 C 914.2679425837322,226.03827751196172 1006.0765550239234,244.29665071770336 1109,254 C 1211.9234449760766,263.70334928229664 1325.9617224880383,264.8516746411483 1440,266 C 1440,266 1440,400 1440,400 Z"
              stroke="none"
              stroke-width="0"
              fill="url(#gradient)"
              fill-opacity="1"
              class="transition-all duration-300 ease-in-out delay-150 path-1"
            ></path>
          </svg>
        </div>
      </div>
    </div>
    <div
      class="my-7 text-xl md:text-2xl font-bold text-end dark:text-neutral-300 text-neutral-500"
    >
      <span>{{ contactEnd }}</span>
    </div>
  </div>
</template>

<script>
import Contact from "@/assets/animation/Contact.json";
export default {
  name: "ContactSection",
  data() {
    return {
      contactStart: "< get in touch >",
      contactEnd: " < / get in touch >",
      Contact,
      form: {
        name: "",
        email: "",
        message: "",
      },
      validateForm: {
        name: false,
        email: false,
        message: false,
      },
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handelSubmit() {
      this.validationData();
      if (
        !this.validateForm.name &&
        this.validateForm.email &&
        this.validateForm.message
      ) {
        fetch("/", {
          method: "Post",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: this.encode({
            "form-name": "contact",
            ...this.form,
          }),
        }).then((success) => {
          if (success.ok) {
            this.clearForm();
          }
        });
      }
    },
    clearForm() {
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    },
    validationData() {
      this.validateForm.name = this.form.name == "" ? true : false;
      this.validateForm.email = this.form.email == "" ? true : false;
      this.validateForm.message = this.form.message == "" ? true : false;
    },
  },
};
</script>

<style lang="stylus" scoped></style>
