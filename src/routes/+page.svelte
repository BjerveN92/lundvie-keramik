<script lang="ts">
  import Ornament from "$lib/components/ornament.svelte";
  import houseImage from "$lib/assets/Messenger_creation_8FD094FB-71F8-470E-B830-5E8A95A3793A.jpeg";
</script>

<section class="hero">
  <p class="subtitle">1982</p>
  <Ornament />
  <h1 class="heading">Välkommen till Lundvie Keramik</h1>
  <div class="band">
    <!-- <img
      class="image"
      src={houseImage}
      alt="Gamla Brukshandeln i Lennartsfors, där Lundvie Keramik finns"
    /> -->
    <div class="text">
      <p class="intro">
        Vi tillverkar bruksföremål i stengods<br />
        som vi säljer direkt ifrån verkstaden.
      </p>
      <p class="intro">
        Du finner oss mitt i centrala Lennartsfors<br />
        på andra våningen i gamla Brukshandeln. <br />
        Vi har öppet året om
      </p>

      <!-- <p class="label">/p> -->
      <p class="season">Högsäsong</p>
      <p class="hours">
        1 juli – 2 aug 2026<br />
        Onsdag – söndag 13.00 – 18.00
      </p>
      <p class="season">Lågsäsong</p>
      <p class="hours">Ring före!</p>
    </div>
  </div>
</section>

<style>
  /* All text sizes are plain px. Everything uses the one size set on .hero
     except .heading and .season, which set their own. */

  .hero {
    font-size: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    flex: 1;
    min-height: 0;
  }

  .band {
    flex: 1 1 auto;
    min-height: 0;
    width: 100%;
    max-width: 1000px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .text {
    flex: 1;
    min-width: 0;
  }

  .subtitle {
    letter-spacing: 0.3em;
    margin: 0;
    color: var(--accent);
  }

  /* "Välkommen till Lundvie Keramik" */
  .heading {
    font-size: 36px;
    margin: 0;
  }

  /* the two intro paragraphs */
  .intro {
    margin: 1px;
  }

  /* "Högsäsong" and "Lågsäsong" */
  .season {
    font-size: 28px;
    font-weight: 600;
    margin: 8px 0 0;
    color: var(--accent);
  }

  /* dates, times and "Ring före!" */
  .hours {
    margin: 0;
  }
</style>
