import re
import os

# Files to process
files_to_process = [
    "src/questions/data/subjects/currencies/Cryptocurrency/level10.js",
    "src/questions/data/subjects/currencies/Dollar/level10.js"
]

# Shortened versions - maintaining difficulty but reducing length
shortenings = {
    # Cryptocurrency shortenings
    "In the context of Universal Composability (UC) framework, what fundamental limitation prevents achieving perfect privacy in concurrent zero-knowledge protocols under polynomial-time assumptions?":
        "What UC framework limitation prevents perfect privacy in concurrent zero-knowledge protocols?",

    "¿Cuál es la razón fundamental por la que las Pruebas Racionales no pueden lograr un error de solidez por debajo de 1/2 contra probadores computacionalmente ilimitados en el modelo teórico de juegos que maximiza la utilidad?":
        "¿Por qué las Pruebas Racionales no pueden lograr error de solidez < 1/2 contra probadores ilimitados?",

    "¿Qué suposición criptográfica fundamental se viola cuando una blockchain logra tanto secreto hacia adelante perfecto como seguridad post-compromiso simultáneamente en el modelo de fuga continua de claves?":
        "¿Qué suposición se viola con perfect forward secrecy y post-compromise security simultáneos?",

    "Welche fundamentale kryptographische Annahme wird verletzt, wenn eine Blockchain sowohl perfekte Forward Secrecy als auch Post-Compromise Security gleichzeitig im kontinuierlichen Schlüssel-Leakage-Modell erreicht?":
        "Welche Annahme wird verletzt bei gleichzeitiger Forward Secrecy und Post-Compromise Security?",

    "Welke fundamentele cryptografische aanname wordt geschonden wanneer een blockchain zowel perfecte forward secrecy als post-compromise security gelijktijdig bereikt in het continue sleutel-lekkage model?":
        "Welke aanname wordt geschonden bij gelijktijdige forward secrecy en post-compromise security?",

    "In the context of Incrementally Verifiable Computation (IVC), what mathematical structure is required for the folding scheme to maintain perfect completeness under adversarial accumulator manipulation?":
        "What IVC structure maintains perfect completeness under adversarial accumulator manipulation?",

    "En el contexto de Computación Incrementalmente Verificable (IVC), ¿qué estructura matemática se requiere para que el esquema de plegado mantenga completitud perfecta bajo manipulación adversarial del acumulador?":
        "¿Qué estructura IVC mantiene completitud perfecta bajo manipulación adversarial del acumulador?",

    "Im Kontext der Incrementally Verifiable Computation (IVC), welche mathematische Struktur ist erforderlich, damit das Folding-Schema perfekte Vollständigkeit unter adversarialer Akkumulator-Manipulation aufrechterhält?":
        "Welche IVC-Struktur erhält perfekte Vollständigkeit unter adversarialer Akkumulator-Manipulation?",

    "In de context van Incrementally Verifiable Computation (IVC), welke wiskundige structuur is vereist voor het folding schema om perfecte volledigheid te behouden onder adversariële accumulator manipulatie?":
        "Welke IVC-structuur behoudt perfecte volledigheid onder adversariële accumulator manipulatie?",

    "En Computación Multi-Parte con Seguridad Encubierta, ¿qué propiedad matemática asegura que la probabilidad de detectar comportamiento malicioso se acerque a 1 a medida que aumenta el número de ejecuciones paralelas?":
        "¿Qué propiedad MPC asegura que la detección de comportamiento malicioso → 1 con más ejecuciones?",

    "In Multi-Party Computation mit Covert Security, welche mathematische Eigenschaft stellt sicher, dass die Wahrscheinlichkeit der Erkennung bösartigen Verhaltens sich 1 nähert, wenn die Anzahl paralleler Ausführungen steigt?":
        "Welche MPC-Eigenschaft stellt sicher dass Erkennung bösartigen Verhaltens → 1 bei mehr Ausführungen?",

    "In Multi-Party Computation met Covert Security, welke wiskundige eigenschap zorgt ervoor dat de kans op het detecteren van kwaadaardig gedrag nadert tot 1 naarmate het aantal parallelle uitvoeringen toeneemt?":
        "Welke MPC-eigenschap zorgt dat detectie kwaadaardig gedrag → 1 bij meer uitvoeringen?",

    "What fundamental impossibility result explains why Byzantine Fault Tolerant consensus cannot achieve both optimal resilience (f < n/3) and optimal communication complexity (O(n²)) simultaneously in asynchronous networks?":
        "Why can't BFT consensus achieve both optimal resilience (f<n/3) and O(n²) complexity simultaneously?",

    "¿Qué resultado fundamental de imposibilidad explica por qué el consenso Tolerante a Fallas Bizantinas no puede lograr tanto resistencia óptima (f < n/3) como complejidad de comunicación óptima (O(n²)) simultáneamente en redes asíncronas?":
        "¿Por qué BFT no puede lograr resistencia óptima (f<n/3) y complejidad O(n²) simultáneamente?",

    "Welches fundamentale Unmöglichkeitsergebnis erklärt, warum Byzantine Fault Tolerant Konsens nicht sowohl optimale Widerstandsfähigkeit (f < n/3) als auch optimale Kommunikationskomplexität (O(n²)) gleichzeitig in asynchronen Netzwerken erreichen kann?":
        "Warum kann BFT nicht Widerstandsfähigkeit (f<n/3) und Komplexität O(n²) gleichzeitig erreichen?",

    "Welk fundamenteel onmogelijkheidsresultaat verklaart waarom Byzantine Fault Tolerant consensus niet zowel optimale veerkracht (f < n/3) als optimale communicatie complexiteit (O(n²)) gelijktijdig kan bereiken in asynchrone netwerken?":
        "Waarom kan BFT niet veerkracht (f<n/3) en complexiteit O(n²) gelijktijdig bereiken?",

    "In gitterbasierten Post-Quanten-Kryptographie, welcher fundamentale Kompromiss verhindert das Erreichen sowohl von CCA2-Sicherheit als auch kompakten Chiffretexten ohne strukturierte Annahmen jenseits von Ring-LWE?":
        "Welcher Kompromiss verhindert CCA2-Sicherheit und kompakte Chiffretexte ohne Ring-LWE?",

    "In rooster-gebaseerde Post-Quantum Cryptografie, welke fundamentele afweging voorkomt het bereiken van zowel CCA2 beveiliging als compacte cijferteksten zonder gestructureerde aannames voorbij Ring-LWE?":
        "Welke afweging voorkomt CCA2-beveiliging en compacte cijferteksten zonder Ring-LWE?",

    "In the context of Functional Encryption with indistinguishability-based security, what mathematical barrier prevents achieving simulation-based security for general functionalities without indistinguishability obfuscation?":
        "What barrier prevents simulation-based FE security without indistinguishability obfuscation?",

    "En el contexto de Cifrado Funcional con seguridad basada en indistinguibilidad, ¿qué barrera matemática impide lograr seguridad basada en simulación para funcionalidades generales sin ofuscación de indistinguibilidad?":
        "¿Qué barrera impide seguridad basada en simulación en FE sin ofuscación de indistinguibilidad?",

    "Im Kontext von Functional Encryption mit ununterscheidbarkeitsbasierter Sicherheit, welche mathematische Barriere verhindert das Erreichen simulationsbasierter Sicherheit für allgemeine Funktionalitäten ohne Indistinguishability Obfuscation?":
        "Welche Barriere verhindert simulationsbasierte FE-Sicherheit ohne Indistinguishability Obfuscation?",

    "In de context van Functional Encryption met ononderscheidbaarheidgebaseerde beveiliging, welke wiskundige barrière voorkomt het bereiken van simulatiegebaseerde beveiliging voor algemene functionaliteiten zonder indistinguishability obfuscation?":
        "Welke barrière voorkomt simulatiegebaseerde FE-beveiliging zonder indistinguishability obfuscation?",

    "What complexity-theoretic assumption underlies the hardness of the Unique Shortest Vector Problem (uSVP) that makes it potentially easier than the general Shortest Vector Problem (SVP) in high dimensions?":
        "What assumption makes uSVP potentially easier than general SVP in high dimensions?",

    "¿Qué suposición teórica de complejidad subyace a la dureza del Problema del Vector Más Corto Único (uSVP) que lo hace potencialmente más fácil que el Problema del Vector Más Corto general (SVP) en altas dimensiones?":
        "¿Qué suposición hace uSVP potencialmente más fácil que SVP general en altas dimensiones?",

    "Welche komplexitätstheoretische Annahme liegt der Härte des Unique Shortest Vector Problem (uSVP) zugrunde, die es in hohen Dimensionen möglicherweise einfacher macht als das allgemeine Shortest Vector Problem (SVP)?":
        "Welche Annahme macht uSVP potenziell einfacher als allgemeines SVP in hohen Dimensionen?",

    "Welke complexiteittheoretische aanname ligt ten grondslag aan de hardheid van het Unique Shortest Vector Problem (uSVP) dat het mogelijk makkelijker maakt dan het algemene Shortest Vector Problem (SVP) in hoge dimensies?":
        "Welke aanname maakt uSVP mogelijk makkelijker dan algemene SVP in hoge dimensies?",

    "In Interactive Oracle Proofs (IOPs), welche fundamentale Begrenzung verhindert das gleichzeitige Erreichen sowohl polylogarithmischer Query-Komplexität als auch konstanten Soundness-Fehlers für NP-Relationen?":
        "Welche IOP-Begrenzung verhindert polylogarithmische Query-Komplexität und konstanten Soundness-Fehler?",

    "Im Kontext von Succinct Non-interactive Arguments of Knowledge (SNARKs), welche mathematische Barriere verhindert das gleichzeitige Erreichen sowohl universeller Einrichtung als auch Post-Quanten-Sicherheit?":
        "Welche SNARK-Barriere verhindert universelle Einrichtung und Post-Quanten-Sicherheit gleichzeitig?",

    "En criptografía de umbral para generación de claves distribuidas (DKG), ¿qué imposibilidad fundamental surge al intentar lograr tanto configuración no interactiva como seguridad adaptiva simultáneamente?":
        "¿Qué imposibilidad DKG surge al intentar configuración no interactiva y seguridad adaptiva?",

    "In der Threshold-Kryptographie für verteilte Schlüsselerzeugung (DKG), welche fundamentale Unmöglichkeit entsteht beim Versuch, sowohl nicht-interaktive Einrichtung als auch adaptive Sicherheit gleichzeitig zu erreichen?":
        "Welche DKG-Unmöglichkeit entsteht bei nicht-interaktiver Einrichtung und adaptiver Sicherheit?",

    "In drempel cryptografie voor gedistribueerde sleutelgeneratie (DKG), welke fundamentele onmogelijkheid ontstaat bij het proberen om zowel non-interactieve setup als adaptieve beveiliging gelijktijdig te bereiken?":
        "Welke DKG-onmogelijkheid ontstaat bij non-interactieve setup en adaptieve beveiliging?",

    # Dollar shortenings
    "En análisis econométrico avanzado, ¿cuál es el coeficiente de determinación (R²) para la relación entre el índice del dólar estadounidense (DXY) y los precios globales de materias primas durante los últimos 50 años?":
        "¿Cuál es el R² entre el índice DXY y precios globales de materias primas (últimos 50 años)?",

    "In der fortgeschrittenen ökonometrischen Analyse, wie hoch ist der Bestimmtheitskoeffizient (R²) für die Beziehung zwischen dem US-Dollar-Index (DXY) und globalen Rohstoffpreisen über die letzten 50 Jahre?":
        "Wie hoch ist der R² zwischen US-Dollar-Index (DXY) und globalen Rohstoffpreisen (50 Jahre)?",

    "Según la teoría monetaria avanzada, ¿cuál es el tamaño óptimo del balance de la Reserva Federal como porcentaje del PIB para mantener la estabilidad de precios mientras se maximizan los ingresos por señoreaje?":
        "¿Cuál es el tamaño óptimo del balance de la Fed (% PIB) para estabilidad de precios y máximo señoreaje?",

    "Laut fortgeschrittener Geldtheorie, wie groß sollte die optimale Federal Reserve-Bilanz als Prozentsatz des BIP sein, um Preisstabilität zu erhalten und gleichzeitig Seigniorage-Einnahmen zu maximieren?":
        "Wie groß sollte die optimale Fed-Bilanz (% BIP) für Preisstabilität und maximale Seigniorage sein?",

    "Volgens geavanceerde monetaire theorie, wat is de optimale Federal Reserve balansgrootte als percentage van het BBP om prijsstabiliteit te handhaven terwijl seigniorage-inkomsten worden gemaximaliseerd?":
        "Wat is de optimale Fed-balansgrootte (% BBP) voor prijsstabiliteit en maximale seigniorage?",

    "In the context of international central bank digital currencies (CBDCs), what is the theoretical maximum transaction throughput that would be required to fully replace physical US dollar circulation globally?":
        "What theoretical max transaction throughput would replace physical USD circulation globally with CBDCs?",

    "En el contexto de las monedas digitales de bancos centrales internacionales (CBDCs), ¿cuál es el rendimiento máximo teórico de transacciones que se requeriría para reemplazar completamente la circulación física del dólar estadounidense globalmente?":
        "¿Cuál es el rendimiento máximo teórico de transacciones CBDC para reemplazar USD físico globalmente?",

    "Im Kontext internationaler digitaler Zentralbankwährungen (CBDCs), wie hoch ist der theoretische maximale Transaktionsdurchsatz, der erforderlich wäre, um die physische US-Dollar-Zirkulation global vollständig zu ersetzen?":
        "Wie hoch ist der theoretische maximale CBDC-Transaktionsdurchsatz für globalen USD-Ersatz?",

    "¿Cuál es el rango de frecuencia de firma electromagnética precisa de la tecnología de reconocimiento de caracteres de tinta magnética (MICR) utilizada en los sistemas de procesamiento de cheques de la Reserva Federal?":
        "¿Cuál es el rango de frecuencia electromagnética de la tecnología MICR de la Reserva Federal?",

    "According to the most advanced computational fluid dynamics models, what is the optimal air circulation pattern in Bureau of Engraving and Printing facilities to minimize particulate contamination during currency production?":
        "What is the optimal air circulation pattern in BEP facilities to minimize contamination?",

    "Según los modelos computacionales de dinámica de fluidos más avanzados, ¿cuál es el patrón óptimo de circulación de aire en las instalaciones de la Oficina de Grabado e Impresión para minimizar la contaminación de partículas durante la producción de moneda?":
        "¿Cuál es el patrón óptimo de circulación de aire en BEP para minimizar contaminación?",

    "Laut den fortgeschrittensten rechnerischen Strömungsdynamik-Modellen, wie ist das optimale Luftzirkulationsmuster in Bureau of Engraving and Printing-Anlagen zur Minimierung von Partikelkontamination während der Währungsproduktion?":
        "Wie ist das optimale Luftzirkulationsmuster in BEP-Anlagen zur Minimierung von Kontamination?",

    "Volgens de meest geavanceerde computationele vloeistofdynamica modellen, wat is het optimale luchtcirculatiepatroon in Bureau of Engraving and Printing faciliteiten om particulaire verontreiniging tijdens valutaproductie te minimaliseren?":
        "Wat is het optimale luchtcirculatiepatroon in BEP-faciliteiten om verontreiniging te minimaliseren?",

    "En el contexto del criptoanálisis avanzado, ¿cuál es la clase de complejidad computacional para romper los patrones de seguridad algorítmicos incrustados en los billetes estadounidenses Serie 2013 y posteriores?":
        "¿Cuál es la clase de complejidad para romper patrones de seguridad en billetes US Serie 2013+?",

    "In de context van geavanceerde cryptoanalyse, wat is de computationele complexiteitsklasse voor het breken van de algoritmische veiligheidspatronen ingebed in Amerikaanse bankbiljetten Serie 2013 en later?":
        "Wat is de complexiteitsklasse voor het breken van veiligheidspatronen in US-biljetten Serie 2013+?",

    "¿Cómo se aplica el principio constitucional de proporcionalidad bajo la ley de la UE a las medidas de política monetaria del BCE, particularmente siguiendo la sentencia PSPP del Tribunal Constitucional alemán?":
        "¿Cómo se aplica el principio de proporcionalidad UE a las medidas del BCE post-sentencia PSPP?",
}

def process_file(filepath):
    print(f"\n{'='*80}")
    print(f"Processing: {filepath}")
    print(f"{'='*80}")

    if not os.path.exists(filepath):
        print(f"ERROR: File not found: {filepath}")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    changes_made = 0
    for old_text, new_text in shortenings.items():
        if old_text in content:
            content = content.replace(old_text, new_text)
            changes_made += 1
            print(f"✓ Shortened: {old_text[:80]}...")
            print(f"  → {new_text[:80]}...")

    if changes_made > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"\n✅ Made {changes_made} changes to {filepath}")
    else:
        print(f"\n⚠️ No matching questions found in {filepath}")

# Process all files
for filepath in files_to_process:
    process_file(filepath)

print(f"\n{'='*80}")
print("SUMMARY")
print(f"{'='*80}")
print(f"Processed {len(files_to_process)} files")
print(f"Applied {len(shortenings)} shortenings")
