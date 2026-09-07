<script lang="ts">
</script>

<section class="hero">
  <p class="subtitle">SEDAN 1985</p>
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
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur) saturate(140%);
    -webkit-backdrop-filter: var(--glass-blur) saturate(140%);
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    box-shadow: var(--glass-shadow);
  }

  .subtitle {
    font-size: 0.875rem;
    letter-spacing: 0.3em;
    margin: 0 0 1rem;
    color: var(--text-color);
    text-shadow: var(--text-shadow-soft);
  }

  .hero-heading {
    font-size: clamp(1.75rem, 4.5vw, 2.75rem);
    line-height: 1.25;
    margin: 0 0 1.25rem;
    color: var(--text-color);
    text-shadow: var(--text-shadow-strong);
  }

  .hero-body {
    font-size: 1.0625rem;
    max-width: 34rem;
    line-height: 1.625;
    margin: 0;
    color: var(--text-color);
    text-shadow: var(--text-shadow-soft);
  }

  .cta-btn {
    margin-top: 2rem;
    display: inline-block;
    font-size: 1rem;
    letter-spacing: 0.04em;
    padding: 0.7rem 2rem;
    border: 1px solid var(--glass-border);
    border-radius: 999px;
    text-decoration: none;
    color: var(--text-color);
    background-color: var(--glass-bg-strong);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      border-color 0.2s ease;
  }

  .cta-btn:hover {
    background-color: rgba(255, 255, 255, 0.92);
    color: var(--color-black);
    border-color: rgba(255, 255, 255, 0.92);
  }
</style>
