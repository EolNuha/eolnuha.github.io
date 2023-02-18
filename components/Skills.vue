<template>
  <div id="skills">
    <div class="section-title mt-10">
      <h1>Skills</h1>
      <p>These are my main skills as a full-stack software developer.</p>
    </div>
    <div
      class="flex items-center flex-wrap justify-center gap-[10px] skill-categories"
    >
      <span
        class="border-bottom text-3xl px-2 cursor-pointer border-b-2"
        :class="{
          'border-blue-500 text-blue-500 border-b-4': category === 'frontend',
        }"
        @click="changeCategory('frontend')"
        >Front-end</span
      >
      <span
        class="border-bottom text-3xl px-2 cursor-pointer border-b-2"
        :class="{
          'border-blue-500 text-blue-500 border-b-4': category === 'backend',
        }"
        @click="changeCategory('backend')"
        >Back-end</span
      >
      <span
        class="border-bottom text-3xl px-2 cursor-pointer border-b-2"
        :class="{
          'border-blue-500 text-blue-500 border-b-4': category === 'other',
        }"
        @click="changeCategory('other')"
        >Other</span
      >
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
      <div class="pr-0">
        <div class="my-skills">
          <div class="my-skills-bar">
            <div class="loader" v-if="loading">
              <div class="big-circle">
                <div class="small-circle"></div>
              </div>
            </div>
            <div
              v-else
              class="bar"
              v-for="skill in skills.slice(0, skills.length / 2)"
              :key="`skill${skill.language}`"
            >
              <div class="info">
                <span class="text-uppercase">{{ skill.language }}</span>
              </div>
              <div class="progress-line">
                <span
                  class="language"
                  :style="'--skill-level:' + skill.percent + '%'"
                  :skill-content="skill.percent + '%'"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pr-0">
        <div class="my-skills">
          <div class="my-skills-bar">
            <div class="loader" v-if="loading">
              <div class="big-circle">
                <div class="small-circle"></div>
              </div>
            </div>
            <div
              v-else
              class="bar"
              v-for="skill in skills.slice(skills.length / 2, skills.length)"
              :key="skill.language"
            >
              <div class="info">
                <span class="text-uppercase">{{ skill.language }}</span>
              </div>
              <div class="progress-line">
                <span
                  class="language"
                  :style="'--skill-level:' + skill.percent + '%'"
                  :skill-content="skill.percent + '%'"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      category: "frontent",
      skills: [],
      skillsList: [
        { language: "html", category: "frontend", percent: "100" },
        { language: "css", category: "frontend", percent: "95" },
        { language: "javascript", category: "frontend", percent: "90" },
        { language: "vue.js", category: "frontend", percent: "85" },
        { language: "nuxt.js", category: "frontend", percent: "85" },
        { language: "react.js", category: "frontend", percent: "75" },
        { language: "react-native", category: "frontend", percent: "55" },
        { language: "bootstrap", category: "frontend", percent: "100" },
        { language: "tailwindcss", category: "frontend", percent: "100" },
        // { language: "less", category: "frontend", percent: "75" },
        { language: "scss", category: "frontend", percent: "90" },
        { language: "python", category: "backend", percent: "90" },
        { language: "django", category: "backend", percent: "85" },
        { language: "flask", category: "backend", percent: "85" },
        { language: "java", category: "backend", percent: "60" },
        { language: "postgresql", category: "backend", percent: "70" },
        { language: "groovy", category: "backend", percent: "60" },
        { language: "mysql", category: "backend", percent: "85" },
        { language: "c/c++", category: "backend", percent: "55" },
        { language: "moqui", category: "backend", percent: "80" },
        { language: "sqlite3", category: "backend", percent: "90" },
        { language: "git", category: "other", percent: "90" },
        { language: "linux server", category: "other", percent: "70" },
        { language: "xml", category: "other", percent: "80" },
        { language: "ms office", category: "other", percent: "100" },
        { language: "pygame", category: "other", percent: "95" },
        { language: "tensorflow", category: "other", percent: "60" },
        { language: "agile/scrum", category: "other", percent: "85" },
        { language: "opencv", category: "other", percent: "55" },
        { language: "oop", category: "other", percent: "90" },
        { language: "googling", category: "other", percent: "100" },
      ],
    };
  },
  created() {
    this.changeCategory("frontend");
  },
  methods: {
    changeCategory(category) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.category = category;
        this.skills = this.skillsList.filter(function (el) {
          return el.category == category;
        });
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
/*Skill bars*/
.my-skills {
  position: relative;
  width: 100%;
  background: #fff;
  border-radius: 8px;
  margin: 20px 0px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.1);
  transition-duration: 0.3s;
}

.my-skills-bar {
  padding: 25px 30px;
}

.my-skills-bar .bar {
  margin: 25px 0;
}

.my-skills-bar .bar .info span {
  font-size: 1rem;
  font-weight: 500;
}

.my-skills-bar .bar .info {
  margin-bottom: 8px;
  color: #07374a;
}

.my-skills-bar .bar .progress-line {
  position: relative;
  height: 10px;
  width: 100%;
  background: #f0f0f0;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  animation: animate 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

.bar .progress-line span {
  position: absolute;
  background: #09f;
  height: 100%;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  animation: animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards;
}

@keyframes animate {
  100% {
    transform: scaleX(1);
  }
}

.progress-line .language {
  width: var(--skill-level);
}

.bar .progress-line span::before {
  position: absolute;
  content: "";
  height: 0;
  right: 0;
  top: -14px;
  width: 0;
  border: 7px solid transparent;
  border-bottom-width: 0px;
  border-right-width: 0px;
  border-top-style: #f0f0f0;
  border-top-color: #07374a;
}

.bar .progress-line span::after {
  position: absolute;
  right: 0;
  top: -28px;
  color: #f0f0f0;
  font-size: 12px;
  font-weight: 700;
  background: #07374a;
  padding: 1px 8px;
  border-radius: 3px;
}

.progress-line .language::after {
  content: attr(skill-content);
}

@media (max-width: 700px) {
  .my-skills-bar .bar .progress-line {
    width: 100%;
  }

  .skill-categories .h4 {
    font-size: 19px !important;
  }
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}

.big-circle {
  width: 8rem;
  height: 8rem;
  border: 5px solid #09f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-color: #09f transparent #09f #09f;
  animation: bigcircle 1.2s linear infinite;
}

.small-circle {
  position: relative;
  width: 5rem;
  height: 5rem;
  border: 5px solid #09f;
  border-radius: 50%;
  border-color: #09f #09f transparent #09f;
}

@keyframes bigcircle {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
