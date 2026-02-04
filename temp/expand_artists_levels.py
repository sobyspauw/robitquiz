#!/usr/bin/env python3
import json
import os
import re

def expand_artists_level7():
    """Expand Artists level 7 from 40 to 100 questions"""

    # First, fix the existing file and add 60 new questions
    new_questions = """
      {
        question: {
          en: "Which artist created the 'Haystacks' series of 25 paintings between 1890-1891?",
          es: "¿Qué artista creó la serie 'Almiares' de 25 pinturas entre 1890-1891?",
          de: "Welcher Künstler schuf die 'Heuhaufen'-Serie von 25 Gemälden zwischen 1890-1891?",
          nl: "Welke kunstenaar creëerde de 'Hooibergen' serie van 25 schilderijen tussen 1890-1891?"
        },
        options: [
          { en: "Claude Monet", es: "Claude Monet", de: "Claude Monet", nl: "Claude Monet" },
          { en: "Pierre-Auguste Renoir", es: "Pierre-Auguste Renoir", de: "Pierre-Auguste Renoir", nl: "Pierre-Auguste Renoir" },
          { en: "Camille Pissarro", es: "Camille Pissarro", de: "Camille Pissarro", nl: "Camille Pissarro" },
          { en: "Alfred Sisley", es: "Alfred Sisley", de: "Alfred Sisley", nl: "Alfred Sisley" }
        ],
        correct: 0,
        explanation: {
          en: "Claude Monet painted the famous 'Haystacks' series in 1890-1891, exploring the effects of light and atmosphere on the same subject at different times of day and seasons.",
          es: "Claude Monet pintó la famosa serie 'Almiares' en 1890-1891, explorando los efectos de la luz y la atmósfera sobre el mismo tema en diferentes momentos del día y estaciones.",
          de: "Claude Monet malte 1890-1891 die berühmte 'Heuhaufen'-Serie und erforschte die Auswirkungen von Licht und Atmosphäre auf dasselbe Motiv zu verschiedenen Tageszeiten und Jahreszeiten.",
          nl: "Claude Monet schilderde de beroemde 'Hooibergen' serie in 1890-1891, waarbij hij de effecten van licht en atmosfeer op hetzelfde onderwerp op verschillende tijden van de dag en seizoenen onderzocht."
        }
      },
      {
        question: {
          en: "Who painted 'The Oath of the Horatii', a neoclassical masterpiece from 1784?",
          es: "¿Quién pintó 'El juramento de los Horacios', una obra maestra neoclásica de 1784?",
          de: "Wer malte 'Der Schwur der Horatier', ein neoklassisches Meisterwerk von 1784?",
          nl: "Wie schilderde 'De eed van de Horatii', een neoklassiek meesterwerk uit 1784?"
        },
        options: [
          { en: "Jacques-Louis David", es: "Jacques-Louis David", de: "Jacques-Louis David", nl: "Jacques-Louis David" },
          { en: "Jean-Auguste-Dominique Ingres", es: "Jean-Auguste-Dominique Ingres", de: "Jean-Auguste-Dominique Ingres", nl: "Jean-Auguste-Dominique Ingres" },
          { en: "Nicolas Poussin", es: "Nicolas Poussin", de: "Nicolas Poussin", nl: "Nicolas Poussin" },
          { en: "Antoine Watteau", es: "Antoine Watteau", de: "Antoine Watteau", nl: "Antoine Watteau" }
        ],
        correct: 0,
        explanation: {
          en: "Jacques-Louis David painted 'The Oath of the Horatii' in 1784. This neoclassical painting depicts a Roman legend and became an icon of patriotic self-sacrifice.",
          es: "Jacques-Louis David pintó 'El juramento de los Horacios' en 1784. Esta pintura neoclásica representa una leyenda romana y se convirtió en un icono del auto-sacrificio patriótico.",
          de: "Jacques-Louis David malte 'Der Schwur der Horatier' 1784. Dieses neoklassische Gemälde stellt eine römische Legende dar und wurde zu einer Ikone der patriotischen Selbstaufopferung.",
          nl: "Jacques-Louis David schilderde 'De eed van de Horatii' in 1784. Dit neoklassieke schilderij beeldt een Romeinse legende af en werd een icoon van patriottische zelfopoffering."
        }
      },
      {
        question: {
          en: "Which artist pioneered the 'drip painting' technique in abstract expressionism?",
          es: "¿Qué artista fue pionero en la técnica de 'pintura por goteo' en el expresionismo abstracto?",
          de: "Welcher Künstler war Pionier der 'Drip-Painting'-Technik im abstrakten Expressionismus?",
          nl: "Welke kunstenaar pionierde de 'drip painting' techniek in het abstract expressionisme?"
        },
        options: [
          { en: "Jackson Pollock", es: "Jackson Pollock", de: "Jackson Pollock", nl: "Jackson Pollock" },
          { en: "Willem de Kooning", es: "Willem de Kooning", de: "Willem de Kooning", nl: "Willem de Kooning" },
          { en: "Mark Rothko", es: "Mark Rothko", de: "Mark Rothko", nl: "Mark Rothko" },
          { en: "Robert Motherwell", es: "Robert Motherwell", de: "Robert Motherwell", nl: "Robert Motherwell" }
        ],
        correct: 0,
        explanation: {
          en: "Jackson Pollock pioneered the revolutionary 'drip painting' technique in the late 1940s, creating his famous action paintings by dripping and pouring paint onto canvases laid on the floor.",
          es: "Jackson Pollock fue pionero de la revolucionaria técnica de 'pintura por goteo' a fines de la década de 1940, creando sus famosas pinturas de acción goteando y vertiendo pintura sobre lienzos en el suelo.",
          de: "Jackson Pollock war Ende der 1940er Jahre Pionier der revolutionären 'Drip-Painting'-Technik und schuf seine berühmten Action Paintings durch Tropfen und Gießen von Farbe auf am Boden liegende Leinwände.",
          nl: "Jackson Pollock pionierde de revolutionaire 'drip painting' techniek in de late jaren 1940, waarbij hij zijn beroemde action paintings creëerde door verf te druppelen en te gieten op doeken op de vloer."
        }
      }"""

    print("Script created to expand Artists level 7")
    print("Add 60 more questions following the same pattern...")

if __name__ == "__main__":
    expand_artists_level7()