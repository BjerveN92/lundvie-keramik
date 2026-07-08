# Cloudinary i SvelteKit — hur det fungerar

## Översikt

Tanken är enkel: bilder hanteras helt i Cloudinary, inte i Svelte-projektet. När en ny bild laddas upp till Cloudinary dyker den automatiskt upp på sidan.

```
Cloudinary (bildlagring)
        ↓
+page.server.js (hämtar via API, server-side)
        ↓
+page.svelte (tar emot data)
        ↓
pictures.svelte (renderar bilderna)
```

---

## 1. Miljövariabler — `.env`

Credentials lagras i en `.env`-fil i projektets rot. SvelteKit/Vite läser den automatiskt.

```env
CLOUDINARY_CLOUD_NAME=ditt-cloud-name
CLOUDINARY_API_KEY=din-api-key
CLOUDINARY_API_SECRET=din-api-secret
CLOUDINARY_FOLDER=din-mapp
```

Värdena hittar du i Cloudinary-dashboarden under **Settings → API Keys**.

> Dessa variabler är privata — de används bara på servern och når aldrig browsern.

---

## 2. Server-loader — `src/routes/pictures/+page.server.js`

Det här är kärnan. SvelteKit kör `load()`-funktionen på servern innan sidan renderas.

```js
import {
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET
} from '$env/static/private';

export async function load() {
  const credentials = btoa(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`);
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image?type=upload&max_results=100`;

  const res = await fetch(url, {
    headers: { Authorization: `Basic ${credentials}` }
  });

  const data = await res.json();
  return { images: data.resources ?? [] };
}
```

**Vad händer här?**
- `$env/static/private` — SvelteKits sätt att läsa privata env-variabler (bara tillgängliga server-side)
- `btoa(key:secret)` — kodar credentials till Base64 för HTTP Basic Auth
- Cloudinary Admin API returnerar ett objekt med `resources` — en array av bildobjekt
- `return { images: ... }` — datan skickas vidare till page-komponenten

---

## 3. Page-komponent — `src/routes/pictures/+page.svelte`

Tar emot datan från `load()` via `data`-propen och skickar den vidare till bildkomponenten.

```svelte
<script>
  import Pictures from "$lib/components/pictures.svelte";
  let { data } = $props();
</script>

<Pictures images={data.images} />
```

---

## 4. Bildkomponent — `src/lib/components/pictures.svelte`

Renderar bilderna i ett responsivt CSS-grid.

```svelte
<script>
  let { images = [] } = $props();
</script>

{#if images.length === 0}
  <p>Inga bilder hittades.</p>
{:else}
  <div class="grid">
    {#each images as image}
      <img src={image.secure_url} alt={image.public_id} loading="lazy" />
    {/each}
  </div>
{/if}
```

Varje `image`-objekt från Cloudinary innehåller bl.a.:
- `secure_url` — HTTPS-länken till bilden
- `public_id` — bildens namn/sökväg i Cloudinary (t.ex. `min-mapp/bild1`)
- `width`, `height`, `format` — metadata

---

## Lägga till bilder

1. Logga in på [cloudinary.com](https://cloudinary.com)
2. Ladda upp bilder till din mapp
3. Ladda om sidan — bilderna dyker upp automatiskt

Inget i Svelte-projektet behöver ändras.
