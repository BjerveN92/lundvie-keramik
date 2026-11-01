<script lang="ts">
  import Ornament from "$lib/components/ornament.svelte";
</script>

<section class="hero">
  <p class="subtitle">SEDAN 1985</p>
  <Ornament />
  <h1 class="hero-heading">
    Handgjord keramik <br /> från vår verkstad till ditt hem
  </h1>
  <p class="hero-body">
    Varje pjäs formas, bränns och glaseras för hand. Inga två stycken är exakt
    lika – och det är precis poängen.
  </p>
  <a href="/pictures" class="cta-btn">Se våra verk</a>
</section>

<style>
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 42rem;
    margin: auto;
    padding: clamp(1.75rem, 4vh, 3rem) clamp(1.5rem, 5vw, 3.5rem);
    /* thin double frame: border + an inset hairline */
    border: 1px solid var(--line);
    outline: 1px solid var(--line);
    outline-offset: -0.5rem;
  }

  .subtitle {
    font-size: 0.875rem;
    letter-spacing: 0.3em;
    margin: 0;
    color: var(--accent);
  }

  .hero-heading {
    font-size: clamp(1.75rem, 4.5vw, 2.75rem);
    line-height: 1.25;
    margin: 0 0 1.25rem;
    color: var(--text-color);
  }

  .hero-body {
    font-size: 1.0625rem;
    max-width: 34rem;
    line-height: 1.625;
    margin: 0;
    color: var(--text-color);
  }

  .cta-btn {
    margin-top: 2rem;
    display: inline-block;
    font-size: 1rem;
    letter-spacing: 0.04em;
    padding: 0.8rem 2.25rem;
    border: 1px solid var(--line);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 0.8125rem;
    color: var(--text-color);
    background-color: transparent;
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;
  }

  .cta-btn:hover {
    background-color: var(--text-color);
    border-color: var(--text-color);
    color: var(--color-black);
    text-shadow: none;
  }
</style>
