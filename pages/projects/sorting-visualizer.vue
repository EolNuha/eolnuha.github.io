<template>
  <div>
    <Header smallText="Eol Nuha" largeText="Sorting Visualizer" />
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
              class=""
              v-model="datasetSize"
              min="1"
              max="50"
            />
            <label>Sorting Speed</label>
            <input
              type="range"
              class=""
              v-model="sortingSpeed"
              min="1"
              max="50"
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
        <div class="p-3 bg-primary text-center">
          <button
            class="border-2 border-neutral-700 submit-btn p-2 rounded"
            @click="newArray"
          >
            Randomize
          </button>
          <button
            class="border-2 border-neutral-700 p-2 rounded"
            @click="mergeSort"
            v-if="selectedSort === sorts[0]"
          >
            {{ selectedSort.name }}
          </button>
          <button
            class="border-2 border-neutral-700 p-2 rounded"
            @click="quickSort"
            v-if="selectedSort === sorts[1]"
          >
            {{ selectedSort.name }}
          </button>
          <button
            class="border-2 border-neutral-700 p-2 rounded"
            @click="bubbleSort"
            v-if="selectedSort === sorts[2]"
          >
            {{ selectedSort.name }}
          </button>
          <button
            class="border-2 border-neutral-700 p-2 rounded"
            v-if="!selectedSort"
            @click="sidebar = 'block'"
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
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      array: [],
      datasetSize: 50,
      sortingSpeed: 50,
      lowestSortSpeed: 60,
      sidebar: "none",
      sorts: [
        { name: "Merge Sort", space: "O(n)", time: "O(n log n)" },
        { name: "Quick Sort", space: "O(log(n))", time: "O(n log(n))*" },
        { name: "Bubble Sort", space: "O(1)", time: "O(2)" },
      ],
      selectedSort: "",
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
      const animations = this.$getMergeSortAnimations(this.array);
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
