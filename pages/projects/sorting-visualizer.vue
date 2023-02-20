<template>
  <div>
    <Header smallText="Project" largeText="Sorting Visualizer" />
    <div class="container">
      <div class="sorting-box-shadow my-5 relative rounded">
        <div class="sidebar rounded" :style="'display: ' + sidebar">
          <div class="p-2 m-0 cursor-pointer" @click="sidebar = 'none'">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="w-7 h-7 text-neutral-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              ></path>
            </svg>
          </div>
          <h4 class="text-center font-bold">Config</h4>
          <div class="flex flex-col gap-[10px]">
            <label class="w-full">Sorting Algorithm</label>
            <select
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-neutral-500 focus:border-neutral-500 block w-full p-2.5"
              v-model="selectedSort"
              :disabled="loading"
            >
              <option disabled value="">Select One</option>
              <option
                v-for="(sort, index) in sorts"
                :value="sort"
                :key="`${index}x`"
              >
                {{ sort.name }}
              </option>
            </select>
            <label>Dataset Size</label>
            <input
              type="range"
              v-model="datasetSize"
              min="5"
              max="50"
              class="accent-neutral-700"
              :disabled="loading"
            />
            <label>Sorting Speed</label>
            <input
              type="range"
              class="accent-neutral-700"
              v-model="sortingSpeed"
              min="1"
              max="50"
              :disabled="loading"
            />
          </div>
        </div>
        <div class="flex justify-between items-center p-3">
          <div class="bars-icon m-0 p-2" @click="sidebar = 'block'">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="h-7 w-7 text-neutral-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              ></path>
            </svg>
          </div>
          <div>
            <p class="p-3 sort-description" v-if="selectedSort">
              {{ selectedSort.name }} - Time: {{ selectedSort.time }} | Space:
              {{ selectedSort.space }}
            </p>
          </div>
        </div>
        <div class="p-3 bg-neutral-700 text-center">
          <button
            class="border-2 border-gray-300 text-white p-2 rounded"
            @click="newArray"
            :disabled="loading"
          >
            Randomize
          </button>
          <button
            class="border-2 border-gray-300 text-white p-2 rounded"
            @click="mergeSort()"
            v-if="selectedSort === sorts[0]"
            :disabled="loading"
          >
            {{ selectedSort.name }}
          </button>
          <button
            class="border-2 border-gray-300 text-white p-2 rounded"
            @click="quickSort"
            v-if="selectedSort === sorts[1]"
            :disabled="loading"
          >
            {{ selectedSort.name }}
          </button>
          <button
            class="border-2 border-gray-300 text-white p-2 rounded"
            @click="bubbleSort"
            v-if="selectedSort === sorts[2]"
            :disabled="loading"
          >
            {{ selectedSort.name }}
          </button>
          <button
            class="border-2 border-gray-300 text-white p-2 rounded"
            v-if="!selectedSort"
            @click="sidebar = 'block'"
            :disabled="loading"
          >
            Select Sorting Algorithm
          </button>
        </div>
        <div class="array-container text-center p-3">
          <div
            class="array-bar"
            v-for="(i, idx) in array"
            :style="'height:' + i + 'px;'"
            :key="`${i}-${idx}height`"
          ></div>
        </div>
      </div>
      <div class="my-8">
        <p>
          The Sorting Visualizer is a fascinating project that I developed using
          popular web development technologies, such as Javascript, Vue.js,
          HTML, and CSS. It provides a practical way to learn about various
          sorting algorithms by creating a visual representation of their
          operation. Through its user-friendly and interactive interface, this
          project allows users to experiment with different sorting algorithms,
          visualize their performance and understand how each one works. With
          this project, I aimed to create an educational and enjoyable tool that
          would serve as a valuable resource for anyone interested in learning
          more about algorithms and how they work.
        </p>
        <h3 class="font-bold my-3">Technologies used:</h3>
        <div class="flex gap-[5px] items-center flex-wrap">
          <span class="pillar">JavaScript</span>
          <span class="pillar">Vue.js</span>
          <span class="pillar">HTML</span>
          <span class="pillar">SCSS</span>
          <span class="pillar">CSS</span>
        </div>
        <h3 class="font-bold my-3">Social Links:</h3>
        <div class="flex gap-[5px] items-center flex-wrap">
          <a
            href="https://github.com/EolNuha/eolnuha.github.io/blob/master/pages/projects/sorting-visualizer.vue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              class="w-8 h-8 text-neutral-700"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "Portfolio | Sorting Visualizer",
      meta: [
        {
          name: "keywords",
          hid: "keywords",
          content:
            "eol nuha, eol, nuha, eol nuha portfolio, eol nuha projects, Sorting Visualizer, eol nuha Sorting Visualizer",
        },
        {
          property: "og:title",
          hid: "og-title",
          content: "Portfolio | Sorting Visualizer",
        },
        {
          name: "twitter:title",
          hid: "twitter-title",
          content: "Portfolio | Sorting Visualizer",
        },
      ],
    };
  },
  data() {
    return {
      array: [],
      datasetSize: 50,
      sortingSpeed: 50,
      lowestSortSpeed: 60,
      sidebar: "none",
      sorts: [
        { name: "Merge Sort", space: "O(n)", time: "O(n log n)" },
        { name: "Quick Sort", space: "O(log n)", time: "O(n log n)*" },
        { name: "Bubble Sort", space: "O(1)", time: "O(n^2)" },
      ],
      selectedSort: "",
      loading: false,
    };
  },
  mounted() {
    this.newArray();
  },
  watch: {
    datasetSize: {
      handler: function () {
        this.newArray();
      },
    },
  },
  methods: {
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    newArray() {
      this.array = [];
      for (let i = 0; i < this.datasetSize; i++) {
        this.array.push(this.randomInt(10, 500));
      }
    },
    mergeSort() {
      const animations = this.$getMergeSortAnimations(
        JSON.parse(JSON.stringify(this.array))
      );
      this.loading = true;
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("array-bar");
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneId, barTwoId] = animations[i];
          const barOneStyle = arrayBars[barOneId].style;
          const barTwoStyle = arrayBars[barTwoId].style;
          const color = i % 3 === 0 ? "yellow" : "rgba(32, 33, 36, 0.7)";
          setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
          }, i * (this.lowestSortSpeed - this.sortingSpeed));
        } else {
          setTimeout(() => {
            const [barOneId, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneId].style;
            barOneStyle.height = `${newHeight}px`;
            if (i === animations.length - 1) {
              this.loading = false;
            }
          }, i * (this.lowestSortSpeed - this.sortingSpeed));
        }
      }
    },
    bubbleSort() {
      alert("Implementing Next!");
    },
    quickSort() {
      alert("Implementing Next!");
    },
  },
};
</script>

<style lang="scss" scoped>
.array-bar {
  width: 1vw;
  border-radius: 4px 4px 0px 0px;
  display: inline-block;
  margin: 0 1px;
  background-color: rgba(32, 33, 36, 0.5);
}
.sorting-box-shadow {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}
.bars-icon {
  cursor: pointer;
  border-radius: 50%;
}
.bars-icon:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.sidebar {
  position: absolute;
  height: 100%;
  width: 100%;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  background-color: #ffffff;
  padding: 10px;
  transition-duration: 0.3s;
}
.sort-description {
  display: none;
}
@media screen and (min-width: 800px) {
  .sidebar {
    width: 40%;
  }
  .sort-description {
    display: block;
  }
}

.submit-btn {
  background: linear-gradient(
    60deg,
    rgba(32, 33, 36, 1) 0%,
    rgb(79, 79, 79) 100%
  );
  color: white;
}
</style>
