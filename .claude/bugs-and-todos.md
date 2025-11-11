# Bugs & To-Do List

**Last Updated:** 2025-10-22

---
tutorial laat geen schermen zien.

tutorial text checken bij de explaination text bijvoegen dat het uit gezet kan worden in de settings. daily challange text aanpassen.

in de tutorial beginnen met de taal instellen. 

prijzen in de shop checken

daily challange dezelfde look geven als de normale levels.

game modes vragen maken

game modes fixen


## 🎯 ACTIEVE TAKEN

### 🐛 Bugs - High Priority
- [ ] **Level 10 special popup shows multiple "Next" buttons** - Needs testing after recent fix

### 🐛 Bugs - Medium Priority
- [ ] **Responsive sizing voor verschillende telefoon groottes** - Algemene optimalisatie nodig
- [ ] **Tutorial text klopt niet meer met de huidige stappen** - Text moet geüpdatet worden

### 🐛 Bugs - Low Priority
- [ ] **Level 10 popup: show "Next: [subcategory name]"** - Voor volgende subcategory in hetzelfde hoofdonderwerp

### ✨ Features - High Priority
*Alle voltooid! 🎉*

### ✨ Features - Medium Priority
- [ ] **True/False vragen maken** - Van bestaande vragen in subjects folder
- [ ] **Time-out na 5 verkeerde True/False pogingen**
- [ ] **"Watch ad or diamond" optie aantrekkelijker maken** - In timeout/mistakes popups
- [ ] **Survival en Extreme Survival questions systeem** - Subjects folder hergebruiken?


---

## ✅ RECENT VOLTOOID (2025-10-22)

### Answer Length Optimalisatie - 100% COMPLEET
**Probleem:** Langste antwoord optie was vaak het juiste antwoord

**Oplossing:** 23 systematische fasen toegepast op 10,666+ vragen:
- ✅ Backgammon levels 1-2: 22 batch edits
- ✅ Food/Drinks/Desserts levels 8-10: 90 bestanden (~660 vragen)
- ✅ Board Games: 214+ vragen (Scrabble, Monopoly, Chess, etc.)
- ✅ Dinosaurs: 400+ vragen (alle subcategorieën)
- ✅ Egypt: 300+ vragen (alle subcategorieën)
- ✅ Books, AI, F1, Famous People: 450+ vragen
- ✅ Globale patterns: 6,000+ vragen via batch sed commands

**Methodologie:**
- Fase 1-8: Numbers, abbreviations, filler words, passive voice
- Fase 9-16: Comparisons, time/measurement/direction abbreviations
- Fase 17-23: Location/scientific abbreviations, phrase simplifications
- Difficulty NIET verhoogd, betekenis 100% behouden

### UI/UX Verbeteringen
**1. Completion Popup - Level Number Display**
- ✅ Toont nu: "Level X Completed! You got N correct answers!"
- ✅ Alle talen ondersteund (EN, ES, DE, NL)
- ✅ Gebruikt `window.currentQuizContext.level` voor accurate weergave

**2. Answer Feedback - Enhanced Animations**
- ✅ **Correcte antwoorden:**
  - Groene glow effect (box-shadow)
  - Pulse/scale animatie (1.0x → 1.08x → 1.05x)
  - Groot ✓ icoon (120px) in het midden van scherm
  - Pop + rotate animatie
  - Groen kleurschema (#22c55e)

- ✅ **Foute antwoorden:**
  - Rode glow effect
  - Shake animatie (horizontaal trillen)
  - Groot ✗ icoon (120px) in het midden van scherm
  - Pop + rotate animatie
  - Rood kleurschema (#F23F5D)

- ✅ Sound effects behouden voor volledige feedback

**3. Tutorial Light Mode**
- ✅ Light geel-oranje gradient achtergrond (#fef9e7 to #fef5e7)
- ✅ Gele rand (#fcd34d) voor betere zichtbaarheid
- ✅ Donkere tekst (#1f2937) voor leesbaarheid
- ✅ Aangepaste button styling (geel next button, grijze skip/back buttons)
- ✅ Matcht settings screen tutorial box styling

---

## 💡 AANBEVELINGEN

### UX/UI
- Visual feedback upgrade: Overweeg trillingen (vibration API) bij antwoorden
- Tutorial improvements: Maak interactiever - laat gebruiker stappen uitvoeren

### Game Mechanics
- True/False mode: Snellere, casual game mode voor korte sessies
- Survival modes: Randomize vragen over alle onderwerpen
- Difficulty scaling: Level 1-3 makkelijk, 4-7 medium, 8-10 moeilijk
- Daily challenges variation: Speed challenge, perfect score challenge

### Monetization
- Watch ad incentive: 2x stars/rewards na ad bekijken
- Achievement system: Badges voor prestaties

### Technical
- Responsive design: Test op populairste telefoon resoluties
- Performance: Lazy loading voor vraag bestanden
- Offline mode: Service Workers voor echte offline functionaliteit

### Content Quality
- Question variety: Mix van vraagtypen per level
- Difficulty indicators: Toon moeilijkheidsgraad bij subcategorieën
- Hints systeem: Optionele hints (kost diamonds/stars)

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
