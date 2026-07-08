import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_FOLDER } from '$env/static/private';

export async function load() {
  const credentials = btoa(`${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}`);
  const url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/search`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      expression: `asset_folder="${CLOUDINARY_FOLDER}"`,
      with_field: ['metadata'],
      max_results: 100
    })
  });

  if (!res.ok) {
    console.error('Cloudinary error:', await res.text());
    return { images: [] };
  }

  const data = await res.json();

  const sorted = (data.resources ?? []).sort((/** @type {any} */ a, /** @type {any} */ b) => {
    const aOrder = Number(a.metadata?.order ?? Infinity);
    const bOrder = Number(b.metadata?.order ?? Infinity);
    return aOrder - bOrder;
  });

  return { images: sorted };
}
