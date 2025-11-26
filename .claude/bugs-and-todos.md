# Bugs & To-Do List

**Last Updated:** 2025-10-22

---

tutorial robotje toevoegen in plaats van het logo.

laad scherm animatie maken robot die alles aan het uitpakken is? (meerdere afbeeldingen maken die achterelkaar laten plakken voor het filmpje)

sizing dubbel check

sizing shop fixen(klein scherm en groot scherm)

sizing klein scherm hoofdonderwerpen scherm

geluid glitch fixen 

nieuwe ai plaatjes maken voor de onderwerpen

wat te doen met leaderbords?(voor nu verwijderen? zo ja hoe anders challange met vrienden?) - server voor nodig

## 🎯 ACTIEVE TAKEN

### 🐛 Bugs - High Priority
- [ ] **Level 10 special popup shows multiple "Next" buttons** - Needs testing after recent fix

### 🐛 Bugs - Medium Priority
- [ ] **Responsive sizing voor verschillende telefoon groottes** - Algemene optimalisatie nodig

### 🐛 Bugs - Low Priority
- [ ] **Level 10 popup: show "Next: [subcategory name]"** - Voor volgende subcategory in hetzelfde hoofdonderwerp

### ✨ Features - High Priority
*Alle voltooid! 🎉*

### ✨ Features - Medium Priority
- [ ] **Time-out na 5 verkeerde True/False pogingen**
- [ ] **"Watch ad or diamond" optie aantrekkelijker maken** - In timeout/mistakes popups

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
