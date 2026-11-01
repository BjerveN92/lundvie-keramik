<script lang="ts">
  import Ornament from "$lib/components/ornament.svelte";
  import aboutImage from "$lib/assets/Messenger_creation_2D361A61-A4C2-4FFE-B987-0D520B85BBF4.jpeg";
</script>

<section class="about-page">
  <h1 class="page-heading">Om oss</h1>
  <Ornament />
  <div class="about-band">
    <div class="about-text">
      <p>
        Lundvie Kermaik har funnits i lennartsfors sedan 1982. Vi som jobbar
        här är Ole Bjervig och Karin Lundkvist.
      </p>
      <p>
        Vi drejar brukskermaik och unika ting, främst i stengods. Allt görs för
        hand och med eget framtagna glasyrer. Numera säljs våra saker endast här
        direkt från verkstan.
      </p>
    </div>
    <div class="about-image-col">
      <img
        class="about-image"
        src={aboutImage}
        alt="Ole Bjervig och Karin Lundkvist"
      />
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

  .about-band {
    flex: 0 1 auto;
    min-height: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2rem;
    padding: 1.5rem 0;
    margin: auto 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .about-text {
    flex: 1;
    min-width: 0;
  }

  .about-text p {
    font-size: 1.0625rem;
    line-height: 1.6;
    margin: 0 0 1rem;
    color: var(--text-color);
  }

  .about-text p:last-child {
    margin-bottom: 0;
  }

  .about-image-col {
    flex: 1;
    min-width: 0;
    align-self: stretch;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .about-image {
    max-width: 100%;
    max-height: 45vh;
    object-fit: contain;
    display: block;
  }
</style>
