# Menu 2 — Archive Summary

Snapshot of the second menu iteration (menuData2.json).
Full data preserved in `menu2-data.json` alongside this file.

## Stats
- 66 items, 5 categories
- Images in `public/images/menu2/` (35 files, mostly PNG + 1 JPEG)
- 31 items have no image (empty string)

## Categories & Item Count
| Category | Items | Price Range |
|---|---|---|
| Mezze | 28 | €5–€8 |
| Hoofdgerechten | 20 | €7.50–€70 |
| Dranken | 15 | €2.50–€14 |
| Warme Dranken | 4 | €3–€8 |
| Desserts | 2 | €2–€8 |

## Key Differences from Menu 1
- Restructured categories: "BBQ Gerechten", "Onze Gerechten", "Soepen", "Sandwiches", "Menu Combinaties" collapsed into "Hoofdgerechten"
- Added "Warme Dranken" and "Desserts" categories
- More items overall (66 vs 57), expanded drinks selection
- Added `tags` field on some items (e.g. "Vegan", "Krokant en kruidig")
- Image path format changed from `/public/images/menu/` to `/images/menu2/`
- Many items missing images (31 of 66)

## Image Filenames (in public/images/menu2/)
baba-ganoush.png, batata-harra.png, biryani.jpeg, bonen-in-tomatosaus.png,
bulgur-in-tomatensaus.png, burak.png, drinks.png, falafel.png,
fattoush.png, friet.png, hummus-bi-lahme.png, hummus.png,
kippennuggets.png, marine.png, menu-halve-kip.png, menu-kebab.png,
menu-lamsbrochette.png, menu-shish-tawook-2.png, menu-shish-tawook-3.png,
menu-shish-tawook.png, menu-vegetarisch.png, menu-zalm.png,
mix-grill-2.png, mix-grill-3.png, mix-grill-4.png, mix-grill.png,
moussaka.png, mutabal.png, orka-soep.png, qozi.png, rijst.png,
shoarma-arabi.png, tabouleh-2.png, tabouleh.png, warak-einab-2.png,
warak-einab.png

## Notes
- Some images exist on disk but aren't referenced in the JSON (e.g. drinks.png, mix-grill-2/3/4.png, tabouleh-2.png, menu-shish-tawook-2/3.png, warak-einab-2.png, bonen-in-tomatosaus.png, orka-soep.png)
- biryani.jpeg is the only non-PNG
- friet.png is shared by both "Portie Frietjes Klein" and "Portie Frietjes Groot"
