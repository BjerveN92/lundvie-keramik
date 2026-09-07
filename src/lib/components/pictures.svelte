<script lang="ts">
  // TypeScript-interface CloudinaryImage — löser alla implicitly any-felen
  interface CloudinaryImage {
    secure_url: string;
    public_id: string;
  }

  let { images = [] }: { images: CloudinaryImage[] } = $props();

  let dialog: HTMLDialogElement;
  let selected = $state<CloudinaryImage | null>(null);

  //dialog.showModal() — aktiverar ::backdrop (den mörka överlägget)
  // som en CSS-pseudo-element, ingen div-overlay behövs
  function open(image: CloudinaryImage) {
    selected = image;
    dialog.showModal();
  }

  function close() {
    dialog.close();
    selected = null;
  }
  // e.target === dialog — stänger bara modalen om man klickar direkt på bakgrunden, inte på bilden
  function onDialogClick(e: MouseEvent) {
    if (e.target === dialog) close();
  }
</script>

{#if images.length === 0}
  <p class="empty">Inga bilder hittades.</p>
{:else}
  <div class="grid">
    {#each images as image}
      <button class="thumb" onclick={() => open(image)}>
        <img src={image.secure_url} alt={image.public_id} loading="lazy" />
      </button>
    {/each}
  </div>
{/if}
<dialog bind:this={dialog} onclick={onDialogClick}>
  {#if selected}
    <img src={selected.secure_url} alt={selected.public_id} />
  {/if}
</dialog>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 1rem;
    width: 100%;
  }

  .thumb {
    all: unset;
    display: block;
    cursor: pointer;
    border-radius: 0.75rem;
    overflow: hidden;
    border: 1px solid var(--glass-border);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .thumb:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  }

  .thumb img {
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
    display: block;
    transition:
      transform 0.3s ease,
      filter 0.3s ease;
  }

  .thumb:hover img {
    transform: scale(1.06);
    filter: brightness(1.08);
  }

  dialog {
    background: transparent;
    border: none;
    padding: 0;
    max-width: 90vw;
    max-height: 90vh;
  }

  dialog::backdrop {
    background: hsl(0 0% 0% / 0.85);
    backdrop-filter: blur(6px);
    cursor: zoom-out;
  }

  dialog img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 0.75rem;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    display: block;
  }

  .empty {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 0.875rem;
    letter-spacing: 0.15em;
    text-align: center;
    color: var(--text-color);
    text-shadow: var(--text-shadow-soft);
  }
</style>
