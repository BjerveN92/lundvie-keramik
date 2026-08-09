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
    align-items: center;
    gap: 3rem;
    width: 100%;
    padding: 4rem 0;
  }

  @media (min-width: 768px) {
    .about {
      flex-direction: row;
    }
  }

  .about-text {
    flex: 1;
  }

  .page-heading {
    font-family: "Playfair Display", Georgia, serif;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    font-weight: 400;
    margin: 0 0 1.5rem;
  }

  .about-text p {
    font-size: 1.125rem;
    line-height: 1.625;
    margin: 0 0 1rem;
  }

  .about-image-col {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .image-placeholder {
    width: 18rem;
    height: 18rem;
    border: 1px solid var(--color-black);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-beige-dark);
  }

  .image-placeholder span {
    font-family: "Playfair Display", Georgia, serif;
    font-size: 0.875rem;
    letter-spacing: 0.15em;
  }
</style>
