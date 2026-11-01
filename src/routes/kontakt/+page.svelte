<script lang="ts">
  import Ornament from "$lib/components/ornament.svelte";
</script>

<section class="contact-page">
  <h1 class="page-heading">Kontakt</h1>
  <Ornament />
  <div class="contact-band">
    <div class="contact-details">
      <span>info@lundviekeramik.se</span>
      <span>+4676 114 7816</span>
      <span>+4670 646 9114</span>
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
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    gap: 1.5rem;
    margin-top: 0.5rem 0;
    color: var(--accent);
  }
</style>
