# CSS Background-effekter för text-animering

Alla fungerar med `@property`-animering — byt bara ut `linear-gradient(...)` i `background`-egenskapen.

## `linear-gradient`
Rät linje från en riktning till en annan.
```css
background: linear-gradient(to right, red, blue, green);
```

## `radial-gradient`
Strålar ut från en punkt, cirkulärt eller elliptiskt.
```css
background: radial-gradient(circle, red, blue, green);
```

## `conic-gradient`
Roterar runt en punkt, som ett färghjul. Dramatiskt på text.
```css
background: conic-gradient(red, yellow, green, blue, red);
```

## `repeating-linear-gradient`
Upprepar ett mönster av ränder.
```css
background: repeating-linear-gradient(45deg, red 0px, blue 20px, red 40px);
```

## `repeating-conic-gradient`
Upprepar ett koniskt mönster ("pizza-skiva"-effekt).
```css
background: repeating-conic-gradient(red 0deg, blue 30deg, red 60deg);
```

## Användning med `background-clip: text`
```css
background-clip: text;
color: transparent;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```
