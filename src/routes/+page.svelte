<script lang="ts">
  import Ornament from "$lib/components/ornament.svelte";
  import houseImage from "$lib/assets/Messenger_creation_8FD094FB-71F8-470E-B830-5E8A95A3793A.jpeg";
</script>

<section class="hero">
  <p class="subtitle">EST. 1982</p>
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
      <p class="hours">Varierande öppetider – kontakta oss för mer info.</p>
    </div>
  </div>
</section>

<style>
  /* Text sizes scale with the screen, using whichever is smaller of the
     width (vw) and the height (vh), between a min and a max — so the page
     also fits on short laptop screens. Everything uses the one size set on
     .hero except .heading and .season, which set their own. */

  .hero {
    font-size: clamp(0.85rem, min(0.6rem + 1.2vw, 2.5vh), 1.375rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    flex: 1;
    min-height: 0;
  }

  .hero p {
    line-height: 1.5;
  }

  .band {
    width: 100%;
    max-width: 1000px;
    /* centred in the free space below the heading */
    margin: auto 0;
    padding-top: clamp(0.25rem, 1.5vh, 15px);
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
    font-size: clamp(1.3rem, min(1rem + 2vw, 4.5vh), 2.25rem);
    margin: 0;
  }

  /* the two intro paragraphs */
  .intro {
    margin: 0 0 clamp(0.25rem, 1vh, 0.5rem);
  }

  /* "Högsäsong" and "Lågsäsong" */
  .season {
    font-size: clamp(1.05rem, min(0.8rem + 1.2vw, 3.3vh), 1.75rem);
    font-weight: 600;
    margin: clamp(2px, 1vh, 8px) 0 0;
    color: var(--accent);
  }

  /* dates, times and "Ring före!" */
  .hours {
    margin: 0;
  }

  /* on phones the hand-placed line breaks would split lines oddly, so the
     intro text wraps on its own instead */
  @media (max-width: 600px) {
    .intro br {
      display: none;
    }
  }
</style>
