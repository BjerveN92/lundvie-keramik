<script lang="ts">
</script>

<section class="hero">
  <p class="subtitle">SEDAN 1985</p>
  <h2 class="hero-heading">
    Handgjord keramik <br /> från vår verkstad till ditt hem
  </h2>
  <p class="hero-body">
    Varje pjäs formas, bränns och glaseras för hand. Inga två stycken är
    exakt lika – och det är precis poängen.
  </p>
  <a href="/pictures" class="cta-btn">Se våra verk</a>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .subtitle {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.875rem;
    letter-spacing: 0.3em;
    margin: 0 0 1rem;
  }

  .hero-heading {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
    line-height: 1.25;
    margin: 0 0 1.5rem;
  }

  .hero-body {
    font-size: 1.25rem;
    max-width: 42rem;
    line-height: 1.625;
    margin: 0;
  }

  .cta-btn {
    margin-top: 2.5rem;
    display: inline-block;
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.125rem;
    padding: 0.75rem 2rem;
    border: 1px solid var(--color-black);
    text-decoration: none;
    color: var(--color-black);
    background-color: transparent;
    transition: background-color 0.15s ease, color 0.15s ease;
  }

  .cta-btn:hover {
    background-color: var(--color-black);
    color: var(--color-white);
  }
</style>
