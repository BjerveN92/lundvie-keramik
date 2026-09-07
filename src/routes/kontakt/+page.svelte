<section class="contact">
  <h1 class="page-heading">Kontakt</h1>
  <p>Verkstaden är öppen efter överenskommelse.</p>
  <p>Vi svarar gärna på frågor om beställningar.</p>
  <div class="contact-details">
    <span>info@keramikco.se</span>
    <span>+46 70 123 45 67</span>
  </div>
</section>

<style>
  .contact {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 32rem;
    margin: auto;
    padding: clamp(1.75rem, 4vh, 3rem) clamp(1.5rem, 5vw, 3.5rem);
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur) saturate(140%);
    -webkit-backdrop-filter: var(--glass-blur) saturate(140%);
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    box-shadow: var(--glass-shadow);
  }

  .page-heading {
    font-size: clamp(1.5rem, 4vw, 2.25rem);
    margin: 0 0 1.25rem;
    color: var(--text-color);
    text-shadow: var(--text-shadow-strong);
  }

  .contact p {
    font-size: 1.0625rem;
    margin: 0 0 0.5rem;
    color: var(--text-color);
    text-shadow: var(--text-shadow-soft);
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1.5rem;
    font-size: 1.0625rem;
    color: var(--text-color);
    text-shadow: var(--text-shadow-soft);
  }
</style>
