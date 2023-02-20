<template>
  <div id="projects">
    <div class="section-title mt-10">
      <h1>Projects</h1>
      <p>These are some of the best projects that I've done recently.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
      <div>
        <nuxt-link to="/projects/pos-desktop-app">
          <div class="box-image">
            <img
              src="../assets/images/pos.webp"
              width="100%"
              loading="lazy"
              alt="Point of sale Image"
            />
            <div class="box-name">
              <p>Point of Sale Desktop App</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="projects/sorting-visualizer">
          <div class="box-image">
            <img
              src="../assets/images/sorting-visualizer1.webp"
              width="100%"
              loading="lazy"
              alt="Sorting Visualizer Image"
            />
            <div class="box-name">
              <p>Sorting Visualizer</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="projects/movie-freaks">
          <div class="box-image">
            <img
              src="../assets/images/movie-freaks.webp"
              width="100%"
              loading="lazy"
              alt="Movie Freaks Image"
            />
            <div class="box-name">
              <p>Movie Freaks</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="projects/cyber-city">
          <div class="box-image">
            <img
              src="../assets/images/cyber-city.webp"
              width="100%"
              loading="lazy"
              alt="Cyber City Image"
            />
            <div class="box-name">
              <p>Cyber City</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="projects/tower-war">
          <div class="box-image">
            <img
              src="../assets/images/tower-war-game.webp"
              width="100%"
              loading="lazy"
              alt="Tower War Game Image"
            />
            <div class="box-name">
              <p>Tower War Game</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="projects/dino-game">
          <div class="box-image">
            <img
              src="../assets/images/dino-game.webp"
              width="100%"
              loading="lazy"
              alt="Dino Game Image"
            />
            <div class="box-name">
              <p>Dinosaur Game</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <!-- <div>
        <nuxt-link to="projects/e-commerce">
          <div class="box-image">
            <img
              src="../assets/images/e-commerce.webp"
              width="100%"
              loading="lazy"
              alt="e-Commerce Image"
            />
            <div class="box-name">
              <p>E-commerce Website</p>
            </div>
          </div>
        </nuxt-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div.box-image {
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  transition-duration: 0.3s;
  border-radius: 8px;
  font-size: 1.5rem;
  color: #000;
}

div.box-image:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 153, 255, 0.2),
    0 6px 20px 0 rgba(0, 153, 255, 0.19);
  transition-duration: 0.3s;
  color: #09f;
}

.box-image > img {
  max-width: 100%;
  opacity: 0.85;
  transition-duration: 0.3s;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.box-image > img:hover {
  opacity: 1;
  transition-duration: 0.3s;
}

div.box-name {
  text-align: center;
  padding: 10px 20px;
}
</style>
