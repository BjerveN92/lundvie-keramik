<section class="about">
  <div class="about-text">
    <h1 class="page-heading">Om oss</h1>
    <p>
      Lundvie Kermaik har funnits i lennartsfors sedan 1982. Vi som jobbar här
      är Ole Bjervig och Karin Lundkvist.
    </p>
    <p>
      Vi drejar brukskermaik och unika ting, främst i stengods. Allt görs för
      hand och med eget framtagna glasyrer. Numera säljs våra saker endast här
      direkt från verkstan.
    </p>
  </div>
  <div class="about-image-col">
    <div class="image-placeholder">
      <span>FOTO KOMMER</span>
    </div>
  </div>
</section>

<style>
  .about {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
    width: 100%;
    margin: auto;
    max-width: 60rem;
  }

  @media (min-width: 768px) {
    .about {
      flex-direction: row;
    }
  }

  .about-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: clamp(1.5rem, 3vw, 2.5rem);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur) saturate(140%);
    -webkit-backdrop-filter: var(--glass-blur) saturate(140%);
    border: 1px solid var(--glass-border);
    border-radius: 1.25rem;
    box-shadow: var(--glass-shadow);
  }

  .page-heading {
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    margin: 0 0 1.25rem;
    color: var(--text-color);
    text-shadow: var(--text-shadow-strong);
  }

  .about-text p {
    font-size: 1.0625rem;
    line-height: 1.6;
    margin: 0 0 1rem;
    color: var(--text-color);
    text-shadow: var(--text-shadow-soft);
  }

  .about-text p:last-child {
    margin-bottom: 0;
  }

  .about-image-col {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-placeholder {
    width: min(16rem, 80%);
    aspect-ratio: 1;
    border: 1.5px dashed var(--glass-border);
    border-radius: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur);
    -webkit-backdrop-filter: var(--glass-blur);
    box-shadow: var(--glass-shadow);
  }

  .image-placeholder span {
    font-size: 0.875rem;
    letter-spacing: 0.15em;
    color: var(--text-color);
    text-shadow: var(--text-shadow-soft);
  }
</style>
