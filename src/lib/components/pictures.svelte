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
  <div class="marquee">
    <div class="marquee-track">
      {#each [...images, ...images] as image, i (i)}
        <button
          class="thumb"
          onclick={() => open(image)}
          aria-hidden={i >= images.length}
          tabindex={i >= images.length ? -1 : 0}
        >
          <img src={image.secure_url} alt={image.public_id} loading="lazy" />
        </button>
      {/each}
    </div>
  </div>
{/if}
<dialog bind:this={dialog} onclick={onDialogClick}>
  {#if selected}
    <img src={selected.secure_url} alt={selected.public_id} />
  {/if}
</dialog>

<style>
  /* --- config: tweak these to change size/speed/spacing of the loop --- */
  .marquee {
    /* scales with the screen height so the images fill the space under the
       header instead of floating in it */
    --picture-size: clamp(280px, 48dvh, 680px); /* thumbnail width/height */
    --picture-gap: 1.25rem; /* space between thumbnails */
    --marquee-speed: 90s; /* time for one full loop — higher = slower */

    overflow: hidden;
    width: 100%;
    -webkit-mask-image: linear-gradient(
      90deg,
      transparent 0,
      #000 4%,
      #000 96%,
      transparent 100%
    );
    mask-image: linear-gradient(
      90deg,
      transparent 0,
      #000 4%,
      #000 96%,
      transparent 100%
    );
  }

  .marquee-track {
    display: flex;
    align-items: center;
    gap: var(--picture-gap);
    width: max-content;
    animation: marquee-scroll var(--marquee-speed) linear infinite;
  }

  .marquee:hover .marquee-track {
    animation-play-state: paused;
  }

  @keyframes marquee-scroll {
    from {
      transform: translateX(0);
    }
    to {
      /* the track holds the image list twice, so -50% is exactly one loop */
      transform: translateX(-50%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .marquee-track {
      animation: none;
    }
  }

  .thumb {
    all: unset;
    flex: 0 0 auto;
    width: var(--picture-size);
    display: block;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 4px 18px rgba(42, 38, 34, 0.25);
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
    font-size: 0.875rem;
    letter-spacing: 0.15em;
    text-align: center;
    color: var(--text-color);
  }
</style>
