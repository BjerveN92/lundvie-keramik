<script lang="ts">
  import Pictures from "$lib/components/pictures.svelte";
  import type { PageData } from "./$types";

  let { data } = $props<{ data: PageData }>();
</script>

<section class="gallery-page">
  <h1 class="page-heading">Bilder</h1>
  <div class="gallery-scroll">
    <Pictures images={data.images} />
  </div>
</section>

<style>
  /* Fills the remaining viewport height and never grows past it — the
     grid inside scrolls on its own, so the page itself stays fixed. */
  .gallery-page {
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
    margin: 0 0 1.25rem;
    color: var(--text-color);
    text-shadow: var(--text-shadow-strong);
  }

  .gallery-scroll {
    flex: 1;
    min-height: 0;
    width: 100%;
    overflow-y: auto;
    padding: 1.25rem;
    background: var(--glass-bg);
    backdrop-filter: var(--glass-blur) saturate(140%);
    -webkit-backdrop-filter: var(--glass-blur) saturate(140%);
    border: 1px solid var(--glass-border);
    border-radius: 1.25rem;
    box-shadow: var(--glass-shadow);
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.5) transparent;
  }

  .gallery-scroll::-webkit-scrollbar {
    width: 8px;
  }

  .gallery-scroll::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 999px;
  }

  .gallery-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
</style>
