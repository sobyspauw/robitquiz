# RobitQuiz Question Guidelines

## Character Limits (Richtlijnen - niet strikt)

### Vragen + Antwoordopties
- **Level 1-5:** Max ~120 chars (vragen), ~100 chars (opties)
- **Level 6-8:** Max ~140 chars (vragen), ~100 chars (opties)
- **Level 9-10:** Max ~160 chars (vragen), ~100 chars (opties)

### Explanations (Uitleg)
- **Level 1-5:** Max ~350 chars
- **Level 6-8:** Max ~400 chars
- **Level 9-10:** Max ~450 chars

**Note:** Dit zijn richtlijnen, geen harde limieten. Focus op leesbaarheid en correctheid boven exacte character counts.

---

## Kwaliteitseisen

### 1. Correctheid
- ✅ Feitelijk accurate informatie
- ✅ Eén correct antwoord (tenzij expliciet multiple choice)
- ✅ Geen verouderde informatie
- ✅ Verifieerbare feiten

### 2. Difficulty Levels

**Level 1-3 (Beginner):**
- Algemene kennis, breed bekend
- Simpele concepten
- Geen technische jargon
- Vraagvoorbeeld: "What is AI?" / "Who invented the telephone?"

**Level 4-6 (Intermediate):**
- Specifiekere kennis
- Enige vakkennis vereist
- Basis technische termen OK
- Vraagvoorbeeld: "What algorithm is used in..." / "When was X invented?"

**Level 7-8 (Advanced):**
- Diepgaande kennis
- Technische details
- Vakjargon toegestaan
- Vraagvoorbeeld: "What is the complexity of..." / "How does X mechanism work?"

**Level 9-10 (Expert):**
- Specialistische kennis
- Complexe technische concepten
- Voor experts/enthousiastelingen
- Vraagvoorbeeld: "What theorem proves..." / "Which specific implementation..."

### 3. Vertalingen

**Alle 4 talen moeten aanwezig zijn:**
- `en:` Engels (basis)
- `es:` Spaans
- `de:` Duits
- `nl:` Nederlands

**Vertaalregels:**
- ✅ Betekenis consistent over alle talen
- ✅ Lengte ongeveer gelijk (±20% is OK)
- ✅ Cultureel gepast
- ⚠️ Technische termen: vaak Engels behouden (bijv. "Machine Learning")
- ⚠️ Namen/merken: consistent over talen

**Voorbeeld goede vertaling:**
```javascript
question: {
  en: "What is the capital of France?",
  es: "¿Cuál es la capital de Francia?",
  de: "Was ist die Hauptstadt von Frankreich?",
  nl: "Wat is de hoofdstad van Frankrijk?"
}
```

### 4. Antwoordopties

**Regels:**
- ✅ 4 opties (standaard)
- ✅ 1 correct antwoord
- ✅ 3 plausibele foute antwoorden (geen nonsens)
- ✅ Ongeveer gelijke lengte opties
- ❌ Geen "Alle bovenstaande" of "Geen van bovenstaande" (verwarrend in andere talen)

**Voorbeeld goede opties:**
```javascript
options: [
  { en: "Paris", es: "París", de: "Paris", nl: "Parijs" },
  { en: "London", es: "Londres", de: "London", nl: "Londen" },
  { en: "Berlin", es: "Berlín", de: "Berlin", nl: "Berlijn" },
  { en: "Madrid", es: "Madrid", de: "Madrid", nl: "Madrid" }
]
```

### 5. Explanations

**Doel:** Educatief, niet alleen bevestiging

**Goede explanation bevat:**
- ✅ Waarom het antwoord correct is
- ✅ Relevante context/achtergrond
- ✅ Optioneel: interessant extra feit
- ❌ NIET: herhaling van de vraag
- ❌ NIET: "The correct answer is X because it is correct"

**Voorbeeld:**
```javascript
explanation: {
  en: "Paris has been France's capital since 987 CE when Hugh Capet chose it. Today, it's home to ~2.2M people in the city proper and ~12M in the metro area.",
  es: "París es la capital de Francia desde 987 CE cuando Hugh Capet la eligió. Hoy alberga ~2.2M personas en la ciudad y ~12M en el área metropolitana.",
  de: "Paris ist seit 987 n. Chr. Frankreichs Hauptstadt, als Hugh Capet sie wählte. Heute leben ~2,2M Menschen in der Stadt und ~12M in der Metropolregion.",
  nl: "Parijs is sinds 987 CE de hoofdstad van Frankrijk toen Hugh Capet het koos. Vandaag wonen er ~2,2M mensen in de stad en ~12M in de metropoolregio."
}
```

---

## Te Vermijden

### ❌ Filosofische/onbeantwoordbare vragen
**FOUT:** "Wat is de ultieme betekenis van bewustzijn in AI?"
**GOED:** "What is the Turing Test?"

### ❌ Meerduidige vragen
**FOUT:** "Who invented the computer?" (veel kandidaten)
**GOED:** "Who built the first programmable computer (Z3)?" (Konrad Zuse)

### ❌ Verouderde informatie
**FOUT:** "How many planets are in our solar system?" (als antwoord 9 is)
**GOED:** Check dat antwoord nog klopt (8 planeten sinds 2006)

### ❌ Te lange vragen/opties
**FOUT:** "In the context of advanced computational fluid dynamics models, what is the optimal air circulation pattern in Bureau of Engraving facilities?" (150+ chars)
**GOED:** "What air circulation minimizes contamination in currency printing facilities?"

### ❌ Culturele bias
**FOUT:** Vragen die alleen in één regio bekend zijn
**GOED:** Internationaal bekende feiten/concepten

---

## Checklist voor Vragen Verkorten

Bij het verkorten van te lange vragen:

1. **Verwijder redundantie**
   - Voor: "What is the main primary reason..."
   - Na: "What is the main reason..."

2. **Gebruik afkortingen** (als algemeen bekend)
   - Voor: "Artificial Intelligence"
   - Na: "AI"
   - Voor: "United States Dollar"
   - Na: "USD"

3. **Verwijder onnodige context**
   - Voor: "In the field of economics, what is GDP?"
   - Na: "What is GDP?"

4. **Simplificeer zinnen**
   - Voor: "What is the fundamental underlying principle..."
   - Na: "What principle..."

5. **Maar behoud betekenis!**
   - Level 9-10 mag technisch blijven
   - Correctheid > beknoptheid

---

## Tips per Subject

### **Technical subjects (AI, Currencies, etc.)**
- Afkortingen zijn OK: ML, GDP, API, etc.
- Technische termen behouden in hogere levels
- Engels laten voor vakjargon is acceptabel

### **Historical subjects (Famous People, Egypt, etc.)**
- Data kunnen verkort: "1945" i.p.v. "in het jaar 1945"
- Namen kunnen ingekort: "Churchill" i.p.v. "Winston Churchill" (als duidelijk)

### **Scientific subjects (Dinosaurs, Physics, etc.)**
- Latijnse namen kunnen verkort na eerste vermelding
- Wetenschappelijke notatie gebruiken waar gepast
- Formules/symbolen gebruiken indien duidelijk

---

## Workflow voor Verkorten

1. **Lees originele vraag**
2. **Check correctheid** - klopt het antwoord?
3. **Check difficulty** - past het bij het level?
4. **Verkort indien nodig:**
   - Vraag zelf
   - Antwoordopties
   - Explanation
5. **Vertaal consistent** over alle 4 talen
6. **Test lengte** - binnen richtlijnen?
7. **Finale check** - is het nog steeds correct en duidelijk?

---

## Estimated Work (Status)

**Total questions:** 24,163
**Need shortening:** 6,733 (28%)

### Breakdown:
- **Questions/Options:** 4,204 vragen (17.5%)
  - Level 1-5: 1,291 (10.7%)
  - Level 6-8: 1,514 (21.0%)
  - Level 9-10: 1,399 (29.2%)

- **Explanations:** 2,529 (10.5%)
  - Level 1-5: 611 (5.1%)
  - Level 6-8: 1,027 (14.3%)
  - Level 9-10: 891 (18.7%)

---

## Priority Order

1. **Level 1-5 eerst** (simpele levels moeten kort zijn)
2. **Subjects met meeste lange vragen:**
   - F1 (70 files)
   - Currencies (55 files)
   - Dinosaurs (51 files)
   - Desserts (50 files)
   - Famous People (50 files)
3. **Level 6-10 daarna**

---

*Last updated: 2025-12-16*
*Based on: Scenario "Soepel" for questions/options, "Ruim" for explanations*
