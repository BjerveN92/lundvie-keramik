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

  // --- the strip: a real horizontal scroller, so it can be swiped on touch
  // screens, scrolled with a mouse wheel/trackpad, and rolls on by itself ---
  const LOOP_SECONDS = 90; // time for one full loop — higher = slower
  const RESUME_AFTER_MS = 20; // pause after the visitor has scrolled
  const HOLD_SPEED = 700; // px per second while an arrow button is held

  let marquee = $state<HTMLDivElement>();
  let track = $state<HTMLDivElement>();

  // arrow buttons (computer only): -1 = held left, 1 = held right, 0 = none
  let hold = 0;

  function startHold(e: PointerEvent, dir: number) {
    if (e.button !== 0) return;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    hold = dir;
  }

  function onArrowKey(e: KeyboardEvent, dir: number) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      hold = e.type === "keydown" ? dir : 0;
    }
  }

  $effect(() => {
    if (!marquee || !track || images.length === 0) return;
    const el = marquee;
    const strip = track;

    // the list is rendered twice; one loop = distance to the second copy
    const loopWidth = () =>
      (strip.children[images.length] as HTMLElement).offsetLeft -
      (strip.children[0] as HTMLElement).offsetLeft;

    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
    let pos = 0; // kept as a float; scrollLeft may round small steps away
    let lastSet = 0;
    let lastUserScroll = -Infinity;
    let hovering = false;
    let frame = 0;
    let prev = performance.now();

    function setScroll(x: number) {
      el.scrollLeft = x;
      lastSet = el.scrollLeft;
    }

    // jump back/forward one loop at the ends, so it never runs out
    function wrap() {
      const loop = loopWidth();
      if (pos >= loop) pos -= loop;
      else if (pos < 1) pos += loop;
    }

    function onScroll() {
      // a scroll we didn't cause ourselves = the visitor swiped or scrolled
      if (Math.abs(el.scrollLeft - lastSet) > 1) {
        lastUserScroll = performance.now();
        pos = el.scrollLeft;
        wrap();
        if (Math.abs(pos - el.scrollLeft) > 1) setScroll(pos);
        else lastSet = el.scrollLeft;
      }
    }

    // a normal (vertical) mouse wheel scrolls the strip sideways
    function onWheel(e: WheelEvent) {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }

    function tick(now: number) {
      const dt = Math.min(now - prev, 100) / 1000;
      prev = now;
      const idle = now - lastUserScroll > RESUME_AFTER_MS;
      if (hold) {
        // fast-forward / rewind while an arrow button is held down
        pos += hold * HOLD_SPEED * dt;
        wrap();
        setScroll(pos);
      } else if (!hovering && idle && !reduceMotion.matches) {
        pos += (loopWidth() / LOOP_SECONDS) * dt;
        wrap();
        setScroll(pos);
      }
      frame = requestAnimationFrame(tick);
    }

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") hovering = true;
    };
    const onLeave = () => (hovering = false);
    const onTouch = () => (lastUserScroll = performance.now());

    el.addEventListener("scroll", onScroll, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", onTouch);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerdown", onTouch);
    };
  });
</script>

{#if images.length === 0}
  <p class="empty">Inga bilder hittades.</p>
{:else}
  <div class="gallery">
  {#each [-1, 1] as dir (dir)}
    <button
      class="arrow"
      class:right={dir === 1}
      aria-label={dir === 1 ? "Rulla bilderna åt höger" : "Rulla bilderna åt vänster"}
      title="Håll inne för att rulla"
      onpointerdown={(e) => startHold(e, dir)}
      onpointerup={() => (hold = 0)}
      onpointercancel={() => (hold = 0)}
      onlostpointercapture={() => (hold = 0)}
      onkeydown={(e) => onArrowKey(e, dir)}
      onkeyup={(e) => onArrowKey(e, dir)}
      onblur={() => (hold = 0)}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d={dir === 1 ? "M9 5l7 7-7 7" : "M15 5l-7 7 7 7"} />
      </svg>
    </button>
  {/each}
  <div class="marquee" bind:this={marquee}>
    <div class="marquee-track" bind:this={track}>
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
  </div>
{/if}
<dialog bind:this={dialog} onclick={onDialogClick}>
  {#if selected}
    <img src={selected.secure_url} alt={selected.public_id} />
  {/if}
</dialog>

<style>
  /* --- config: tweak these to change size/spacing of the loop (the speed
     is LOOP_SECONDS in the script above) --- */
  .marquee {
    /* scales with the screen height so the images fill the space under the
       header instead of floating in it */
    /* as tall as the free space allows (cqh = height of the gallery area),
       but never wider than 75% of the screen, so phones show more than one */
    --picture-size: clamp(
      120px,
      min(100cqh - 1.5rem, 48dvh, 75vw),
      680px
    ); /* thumbnail width/height */
    --picture-gap: 1.25rem; /* space between thumbnails */

    /* scrolls sideways (swipe / wheel) with the scrollbar hidden */
    overflow-x: auto;
    overflow-y: hidden;
    scrollbar-width: none;
    overscroll-behavior-x: contain;
    touch-action: pan-x;
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

  .marquee::-webkit-scrollbar {
    display: none;
  }

  /* holds the strip + the two arrow buttons on top of its faded edges */
  .gallery {
    position: relative;
    width: 100%;
  }

  /* hold-to-scroll arrows, only on computers (a mouse that can hover);
     phones swipe instead */
  .arrow {
    all: unset;
    position: absolute;
    top: 50%;
    left: clamp(0.25rem, 1.5vw, 1rem);
    z-index: 1;
    display: none;
    place-items: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 50%;
    border: 1px solid var(--line);
    background: rgba(1, 1, 68, 0.55);
    color: var(--accent);
    cursor: pointer;
    transform: translateY(-50%);
    backdrop-filter: blur(4px);
    transition:
      background 0.2s ease,
      transform 0.15s ease;
    user-select: none;
    -webkit-user-select: none;
  }

  .arrow.right {
    left: auto;
    right: clamp(0.25rem, 1.5vw, 1rem);
  }

  .arrow:hover {
    background: rgba(1, 1, 68, 0.85);
  }

  .arrow:active {
    transform: translateY(-50%) scale(0.92);
  }

  .arrow:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  .arrow svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (hover: hover) and (pointer: fine) {
    .arrow {
      display: grid;
    }
  }

  .marquee-track {
    display: flex;
    align-items: center;
    gap: var(--picture-gap);
    width: max-content;
    /* room for the hover lift + shadow inside the scroller */
    padding: 6px 0 12px;
  }

  .thumb {
    /* `all: unset` must come first — it resets everything above it,
       including border-radius */
    all: unset;
    --picture-radius: 0.75rem;
    flex: 0 0 auto;
    width: var(--picture-size);
    display: block;
    cursor: pointer;
    border-radius: var(--picture-radius);
    /* the image zooms on hover; clipping here keeps its corners rounded.
       will-change stops Safari from showing square corners mid-zoom. */
    overflow: hidden;
    will-change: transform;
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
    filter: brightness(1.3);
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
