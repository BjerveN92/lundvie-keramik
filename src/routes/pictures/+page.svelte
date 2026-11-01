<script lang="ts">
  import Pictures from "$lib/components/pictures.svelte";
  import Ornament from "$lib/components/ornament.svelte";
  import type { PageData } from "./$types";

  let { data }: { data: PageData } = $props();
</script>

<section class="gallery-page">
  <h1 class="page-heading">Bilder</h1>
  <Ornament />
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
    margin: 0;
    color: var(--text-color);
  }

  .gallery-scroll {
    flex: 0 1 auto;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1.5rem 0;
    margin: auto 0;
  }
</style>
