<script lang="ts">
  import Ornament from "$lib/components/ornament.svelte";
  import aboutImage from "$lib/assets/Messenger_creation_46D7D6B3-1823-41AD-83AE-72E00995145B.jpeg";
</script>

<section class="about-page">
  <h1 class="page-heading">Om oss</h1>
  <Ornament />
  <div class="about-band">
    <img
      class="about-image"
      src={aboutImage}
      alt="Ole Bjervig och Karin Lundkvist"
    />
    <div class="about-text">
      <p>
        Vi & vår verkstad har funnits här i Lennartsfors sedan 1982. <br /> Till
        en början höll vi till i den gamla smedgården. Därefter flyttade vi
        själva till kanalen medan verkstaden flyttade till Brukshandeln mitt i
        byn. <br /> Här har vi sedan 1986 både verkstad med butik och 2014 också
        vårt boende.
      </p>

      <p>
        Vi tillverkar mindre serier bruksföremål och unika ting främst i
        stengods men ibland också lergods och porslin.
      </p>

      <p>
        Allt görs för hand och med eget framtagna glasyrer. Materialet är
        högbränt och tåligt, och går därför utmärkt att maskindiska. Materialet
        har analyserats och är godkänt att använda till livsmedel.
      </p>

      <p>Våra produkter går endast att köpa här direkt från verkstaden.</p>

      <p>
        Våra keramik utbildningar har vi fått vid Bangholms keramik i Danmark,
        Rönnowska skolan i Helsingborg samt Nyckelviksskolan på Lidingö.
      </p>
    </div>
  </div>
</section>

<style>
  /* same structure as the Images page: title on top, content band below */
  .about-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
    min-height: 0;
  }

  .page-heading {
    flex: 0 0 auto;
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    margin: 0;
    color: var(--text-color);
  }

  /* portrait photo shown whole at its own proportions, as tall as the page
     allows, with the text beside it */
  .about-band {
    flex: 1 1 auto;
    min-height: 0;
    width: min(100%, 70rem);
    margin: 1.8rem 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: clamp(1.5rem, 4vw, 3rem);
  }

  .about-image {
    flex: 0 1 auto;
    height: 100%;
    width: auto;
    min-width: 0;
    max-width: 50%;
    object-fit: contain;
    display: block;
  }

  .about-text {
    flex: 1;
    min-width: 0;
  }

  .about-text p {
    font-size: clamp(1.0625rem, 2.4vh, 1.3rem);
    line-height: 1.7;
    margin: 0 0 1.25rem;
    color: var(--text-color);
  }

  .about-text p:last-child {
    margin-bottom: 0;
  }
</style>
