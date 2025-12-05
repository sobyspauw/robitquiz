# Bugs & To-Do List

**Last Updated:** 2025-10-22

---

tutorial stap quiz kies een antwoord staat de highlight line over de text heen.

druk op play stap tutorial icoontje staat op de play knop/highlight.

de learn more text staat te laag/kan niet naar beneden scrollen.

badges/adchievements toevoegen.

een game mode blijft heel lang locked(na -2h cooldown)

sommige vragen zijn veel te lang

bij info game modes mag de tips text weg en het eerste stuk tekst mag weg.

nog een keer naar de rewards balancing kijken.

sommige schermen beginnen halverwegen. als je op play drukt 

alle opties van de vragen ongeveer even lang maken. nog steeds vaak de langste de juiste(3 opties zijn 1 zin en 1 optie is 2 zinnen dan is die het)

pop up maken voor het afmaken van de game modes en stylen???(nog checken)

looks game modes quiz schermen dubbelchecken

sterren costen normale game mode op basis van hoeveel topics

tutorial robotje toevoegen in plaats van het logo.

laad scherm animatie maken robot die alles aan het uitpakken is? (meerdere afbeeldingen maken die achterelkaar laten plakken voor het filmpje)

nieuwe ai plaatjes maken voor de onderwerpen misschien ook voor titels zoals game modes, shop, etc.

game omzetten naar download bare apk.

wat te doen met leaderbords?(voor nu verwijderen? zo ja hoe anders challange met vrienden?) - server voor nodig

## 🎯 ACTIEVE TAKEN

### 🐛 Bugs - High Priority

### 🐛 Bugs - Medium Priority

### 🐛 Bugs - Low Priority

### ✨ Features - High Priority
*Alle voltooid! 🎉*

### ✨ Features - Medium Priority
- [ ] **Time-out na 5 verkeerde True/False pogingen**

---

## 💡 AANBEVELINGEN

### UX/UI
- Visual feedback upgrade: Overweeg trillingen (vibration API) bij antwoorden

### Monetization
- Watch ad incentive: 2x stars/rewards na ad bekijken
- Achievement system: Badges voor prestaties

### Technical
- Responsive design: Test op populairste telefoon resoluties
- Performance: Lazy loading voor vraag bestanden
- Offline mode: Service Workers voor echte offline functionaliteit

---

## 🔍 TESTING CHECKLIST

### Level 10 Completion Flow
- [ ] Start at level 9
- [ ] Complete level 10
- [ ] Verify special popup appears with correct buttons
- [ ] Verify "Back to Subject Screen" button works
- [ ] Verify "Next: [name]" button goes to correct next subcategory
- [ ] Verify only ONE "Next" button appears (not multiple)
- [ ] Go back to subcategory screen
- [ ] Verify button is green and disabled
- [ ] Verify progress bar is 100%
- [ ] Verify text shows "✅ Completed!"
- [ ] Verify cannot click button to restart level 10

### General Progress
- [ ] Progress saves correctly across page refreshes
- [ ] Progress shows correctly for multiple subcategories
- [ ] Unlocking new topics works correctly

---

## 📝 NOTES

- Level 11 internally = "all 10 levels completed" but UI shows "✅ Completed!"
- Use `setSubcategoryProgress("topicId", "subcatId", 11)` to mark as completed
- Console commands reference: `.claude/console-commands.md`

---

## 🎨 CREATIVE TASKS (Niet via Claude mogelijk)

- [ ] Art/afbeeldingen maken voor nieuwe onderwerpen
- [ ] Muziek/geluidseffecten maken (optioneel)
- [ ] Icons/emoji's selecteren voor nieuwe subcategorieën
