<script lang="ts">
  import Ornament from "$lib/components/ornament.svelte";
</script>

<section class="contact-page">
  <h1 class="page-heading">Kontakt</h1>
  <Ornament />
  <div class="contact-band">
    <div class="contact-details">
      <address class="address">
        Norra Viker Brukshandeln 1<br />
        67292 Årjäng
      </address>

      <span>+4676 114 7816 </span>
      <span>+4670 646 9114 </span>
    </div>

    <form
      name="kontakt"
      method="POST"
      action="/kontakt/tack"
      data-netlify="true"
      data-netlify-honeypot="botfield"
    >
      <input type="hidden" name="form-name" value="kontakt" />

      <p hidden>
        <label>Lämna tomt: <input name="botfield" /></label>
      </p>

      <label>
        Namn
        <input type="text" name="namn" required />
      </label>

      <label>
        E-post
        <input type="email" name="email" required />
      </label>

      <label>
        Meddelande
        <textarea name="meddelande" rows="5" required></textarea>
      </label>

      <button type="submit">Skicka</button>
    </form>
  </div>
</section>

<style>
  /* the site never scrolls, so this page is a column that shrinks to fit:
     everything keeps its natural size except the message box, which takes
     whatever height is left over (and gives it back on short screens) */
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
    font-size: clamp(1.25rem, 3.5vh, 2rem);
    margin: 0;
    color: var(--text-color);
  }

  /* a smaller ornament than on the other pages, to leave room for the form */
  .contact-page :global(.ornament) {
    width: min(14rem, 70%, 26vh);
    margin: clamp(0.2rem, 1vh, 0.6rem) auto;
  }

  .contact-band {
    flex: 0 1 auto;
    min-height: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  /* address on its own row, the two phone numbers side by side below it */
  .contact-details {
    flex: 0 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 0.75rem;
    row-gap: 0.2rem;
    font-size: clamp(0.85rem, 2.2vh, 1.05rem);
    letter-spacing: 0.04em;
    overflow-wrap: anywhere; /* the e-mail address never pokes out on phones */
    color: var(--accent);
  }

  .contact-details span + span::before {
    content: "·";
    margin-right: 0.75rem;
    opacity: 0.6;
  }

  .address {
    flex-basis: 100%;
    font-style: italic;
    font-size: 1.55em;
    line-height: 1.4;
    letter-spacing: 0.02em;
    opacity: 0.85;
  }

  /* contact form — lines-only like the rest of the site: hairline fields
     straight on the photo. Name + e-mail share a row on wider screens. */
  form {
    flex: 0 1 auto;
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto minmax(0, 1fr) auto;
    gap: clamp(0.4rem, 1.5vh, 0.9rem) 1rem;
    width: min(32rem, 100%);
    margin-top: clamp(0.5rem, 2vh, 1.25rem);
    padding-top: clamp(0.5rem, 2vh, 1.25rem);
    border-top: 1px solid var(--line);
    text-align: left;
  }

  label {
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    font-size: 0.75rem;
    font-style: italic;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--accent);
    text-shadow: var(--text-shadow);
  }

  /* the message field spans both columns (the button does too, see below) */
  label:has(textarea) {
    grid-column: 1 / -1;
  }

  input,
  textarea {
    font: inherit;
    font-size: 0.95rem;
    font-style: normal;
    letter-spacing: 0.02em;
    text-transform: none;
    color: var(--color-white);
    background: rgba(1, 1, 68, 0.35);
    border: none;
    border-bottom: 1px solid var(--line);
    border-radius: 0;
    padding: clamp(0.25rem, 0.8vh, 0.45rem) 0.6rem;
    transition:
      background 0.2s ease,
      border-color 0.2s ease;
  }

  /* grows up to 8rem on tall screens, shrinks down to ~2 lines on short ones */
  textarea {
    flex: 1 1 auto;
    height: 8rem;
    min-height: 2.75rem;
    resize: none;
    border: 1px solid var(--line);
  }

  input:focus,
  textarea:focus {
    outline: none;
    background: rgba(1, 1, 68, 0.6);
    border-color: var(--accent);
  }

  button {
    all: unset;
    grid-column: 1 / -1; /* after all: unset, which would reset it */
    justify-self: center;
    padding: clamp(0.35rem, 1vh, 0.55rem) 2.2rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(1, 1, 68, 0.55);
    color: var(--accent);
    font-size: 0.85rem;
    font-style: italic;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    text-shadow: var(--text-shadow);
    cursor: pointer;
    backdrop-filter: blur(4px);
    transition:
      background 0.2s ease,
      transform 0.15s ease;
  }

  button:hover {
    background: rgba(1, 1, 68, 0.85);
  }

  button:active {
    transform: scale(0.96);
  }

  button:focus-visible {
    outline: 1px solid var(--accent);
    outline-offset: 3px;
  }

  /* PHONES — one field per row */
  @media (max-width: 600px) {
    form {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto minmax(0, 1fr) auto;
      column-gap: 0;
    }
  }
</style>
