Här kommer den korta guiden, och svar på wordpress-frågan efter.

**Snabbguide: Koppla lundviekeramik.se till Netlify**

_I Netlify:_

1. Gå till Domain management → klicka "Add a domain" → välj "Add a domain you already own"
2. Skriv in `lundviekeramik.se` och bekräfta
3. Notera A-record IP-adressen Netlify visar (oftast `75.2.60.5`)

_I one.com (DNS-inställningar):_ 4. Ta bort befintliga A-records för `@` och CNAME för `www` (de pekar på wordpress-sidan) 5. Lägg till ny A-record: Hostname tomt/`@`, pekar på Netlify-IP 6. Lägg till ny CNAME: Hostname `www`, alias of `cvmartinbj.netlify.app` 7. **Rör inte MX-records** (e-post)

_Vänta 10-30 min:_ Netlify verifierar automatiskt och aktiverar HTTPS. Klart!

---

**Om WordPress-sidan:**

Den skrivs **inte över automatiskt** — men den blir osynlig så fort du ändrar DNS. Här är vad som faktiskt händer:

WordPress-sidan ligger fysiskt kvar på one.coms webbhotell-servrar med alla filer och databasen intakt. När du ändrar A-record till Netlifys IP slutar bara DNS:en peka dit — besökare som skriver `lundviekeramik.se` skickas till Netlify istället. WordPress-installationen finns kvar, men ingen hittar dit längre.

**Du behöver inte rensa innan** för att kopplingen ska fungera. DNS-ändringen räcker.

**Men du bör städa upp efteråt** av två skäl:

Mamma betalar troligen för webbhotell-delen hos one.com (utöver domänen). Om hon inte längre behöver WordPress kan ni säga upp webbhotellet och bara behålla domänregistreringen — det blir billigare. Kolla vad hon har för paket.

Det är också snyggare att ta bort gammal data som inte används, både för säkerhet (oattänderade WordPress-installationer kan hackas) och för enkelhetens skull.

**Mitt förslag:** Gör DNS-ändringen först och verifiera att Svelte-sidan funkar på domänen i någon dag. När allt rullar smidigt loggar du in på one.coms kontrollpanel och avinstallerar WordPress-installationen, eller ber one.coms support hjälpa till. Säg upp eller nedgradera webbhotell-paketet om det är separat från domänregistreringen.

Säg till om du vill ha hjälp med uppstädningssteget när det blir aktuellt!
