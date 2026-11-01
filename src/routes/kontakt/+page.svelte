<script lang="ts">
  import Ornament from "$lib/components/ornament.svelte";
</script>

<section class="contact-page">
  <h1 class="page-heading">Kontakt</h1>
  <Ornament />
  <div class="contact-band">
    <p>Verkstaden är öppen efter överenskommelse.</p>
    <p>Vi svarar gärna på frågor om beställningar.</p>
    <div class="contact-details">
      <span>info@keramikco.se</span>
      <span>+46 70 123 45 67</span>
    </div>
  </div>
</section>

<style>
  .contact-page {
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

  .contact-band {
    flex: 0 1 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem 0;
    margin: auto 0;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .contact-band p {
    font-size: 1.0625rem;
    margin: 0 0 0.5rem;
    color: var(--text-color);
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    font-size: 1.0625rem;
    color: var(--accent);
  }
</style>
