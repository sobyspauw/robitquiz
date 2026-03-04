(function() {
  const level2 = {
    questions: [
      {
        question: {
          en: "What is Classification in ML?",
          es: "¿Qué es clasificación en ML?",
          de: "Was ist Klassifikation in ML?",
          nl: "Wat is classificatie in ML?"
        },
        options: [
          { en: "Predicting categories or classes", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Predicting continuous numbers", es: "Predecir números continuos", de: "Kontinuierliche Zahlen vorhersagen", nl: "Continue getallen voorspellen" },
          { en: "Sorting files on disk", es: "Ordenar archivos", de: "Dateien sortieren", nl: "Bestanden sorteren" },
          { en: "Creating folders", es: "Crear carpetas", de: "Ordner erstellen", nl: "Mappen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Classification predicts discrete categories like spam/not spam or cat/dog",
          es: "Clasificación predice categorías discretas como spam/no spam",
          de: "Klassifikation sagt diskrete Kategorien vorher wie Spam/kein Spam",
          nl: "Classificatie voorspelt discrete categorieën zoals spam/geen spam"
        }
      },
      {
        question: {
          en: "What is Regression in ML?",
          es: "¿Qué es regresión en ML?",
          de: "Was ist Regression in ML?",
          nl: "Wat is regressie in ML?"
        },
        options: [
          { en: "Predicting continuous numerical values", es: "Predecir valores numéricos continuos", de: "Kontinuierliche Zahlenwerte vorhersagen", nl: "Continue numerieke waarden voorspellen" },
          { en: "Predicting categories", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Going backwards in time", es: "Retroceder en el tiempo", de: "Zurück in der Zeit", nl: "Terug in de tijd" },
          { en: "Deleting old data", es: "Eliminar datos antiguos", de: "Alte Daten löschen", nl: "Oude data verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Regression predicts continuous values like house prices or temperature",
          es: "Regresión predice valores continuos como precios de casas",
          de: "Regression sagt kontinuierliche Werte vorher wie Hauspreise",
          nl: "Regressie voorspelt continue waarden zoals huizenprijzen"
        }
      },
      {
        question: {
          en: "What is the Training Set?",
          es: "¿Qué es el conjunto de entrenamiento?",
          de: "Was ist der Trainingssatz?",
          nl: "Wat is de trainingsset?"
        },
        options: [
          { en: "Data used to train the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren des Modells", nl: "Data om het model te trainen" },
          { en: "Data to test the model", es: "Datos para probar", de: "Daten zum Testen", nl: "Data om te testen" },
          { en: "Data to delete", es: "Datos para eliminar", de: "Daten zum Löschen", nl: "Data om te verwijderen" },
          { en: "Data to ignore", es: "Datos para ignorar", de: "Daten zum Ignorieren", nl: "Data om te negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Training set is used to teach the model patterns in the data",
          es: "El conjunto de entrenamiento enseña patrones al modelo",
          de: "Der Trainingssatz lehrt dem Modell Muster in den Daten",
          nl: "De trainingsset leert het model patronen in de data"
        }
      },
      {
        question: {
          en: "What is the Test Set?",
          es: "¿Qué es el conjunto de prueba?",
          de: "Was ist der Testsatz?",
          nl: "Wat is de testset?"
        },
        options: [
          { en: "Data to evaluate model performance", es: "Datos para evaluar el modelo", de: "Daten zur Bewertung", nl: "Data om prestaties te evalueren" },
          { en: "Data to train the model", es: "Datos para entrenar", de: "Daten zum Trainieren", nl: "Data om te trainen" },
          { en: "Data to throw away", es: "Datos para descartar", de: "Daten zum Wegwerfen", nl: "Data om weg te gooien" },
          { en: "Data from tests", es: "Datos de exámenes", de: "Daten von Tests", nl: "Data van examens" }
        ],
        correct: 0,
        explanation: {
          en: "Test set evaluates how well the model performs on unseen data",
          es: "El conjunto de prueba evalúa el rendimiento con datos no vistos",
          de: "Der Testsatz bewertet die Leistung bei ungesehenen Daten",
          nl: "De testset evalueert prestaties op ongeziene data"
        }
      },
      {
        question: {
          en: "Why split data into training and testing?",
          es: "¿Por qué dividir datos en entrenamiento y prueba?",
          de: "Warum Daten in Training und Test aufteilen?",
          nl: "Waarom data splitsen in training en test?"
        },
        options: [
          { en: "To check if model works on new data", es: "Para verificar si funciona con datos nuevos", de: "Um zu prüfen ob das Modell bei neuen Daten funktioniert", nl: "Om te controleren of het model werkt op nieuwe data" },
          { en: "To save disk space", es: "Para ahorrar espacio", de: "Um Speicherplatz zu sparen", nl: "Om schijfruimte te besparen" },
          { en: "To make it slower", es: "Para hacerlo más lento", de: "Um es langsamer zu machen", nl: "Om het langzamer te maken" },
          { en: "It\'s not necessary", es: "No es necesario", de: "Es ist nicht notwendig", nl: "Het is niet nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Splitting prevents overfitting and ensures model generalizes to new data",
          es: "Dividir previene sobreajuste y asegura generalización",
          de: "Aufteilen verhindert Überanpassung und stellt Generalisierung sicher",
          nl: "Splitsen voorkomt overfitting en zorgt voor generalisatie"
        }
      },
      {
        question: {
          en: "Is Email spam detection a classification or regression task?",
          es: "¿Es Email spam detection clasificación o regresión?",
          de: "Ist Email spam detection Klassifikation oder Regression?",
          nl: "Is Email spam detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Email spam detection is classification - predicts categories",
          es: "Email spam detection es clasificación - predice categorías",
          de: "Email spam detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Email spam detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is House price prediction a classification or regression task?",
          es: "¿Es House price prediction clasificación o regresión?",
          de: "Ist House price prediction Klassifikation oder Regression?",
          nl: "Is House price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "House price prediction is regression - predicts continuous values",
          es: "House price prediction es regresión - predice valores continuos",
          de: "House price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "House price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Disease diagnosis a classification or regression task?",
          es: "¿Es Disease diagnosis clasificación o regresión?",
          de: "Ist Disease diagnosis Klassifikation oder Regression?",
          nl: "Is Disease diagnosis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Disease diagnosis is classification - predicts categories",
          es: "Disease diagnosis es clasificación - predice categorías",
          de: "Disease diagnosis ist Klassifikation - sagt Kategorien vorher",
          nl: "Disease diagnosis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Stock price prediction a classification or regression task?",
          es: "¿Es Stock price prediction clasificación o regresión?",
          de: "Ist Stock price prediction Klassifikation oder Regression?",
          nl: "Is Stock price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Stock price prediction is regression - predicts continuous values",
          es: "Stock price prediction es regresión - predice valores continuos",
          de: "Stock price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Stock price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Image recognition a classification or regression task?",
          es: "¿Es Image recognition clasificación o regresión?",
          de: "Ist Image recognition Klassifikation oder Regression?",
          nl: "Is Image recognition classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Image recognition is classification - predicts categories",
          es: "Image recognition es clasificación - predice categorías",
          de: "Image recognition ist Klassifikation - sagt Kategorien vorher",
          nl: "Image recognition is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Temperature forecasting a classification or regression task?",
          es: "¿Es Temperature forecasting clasificación o regresión?",
          de: "Ist Temperature forecasting Klassifikation oder Regression?",
          nl: "Is Temperature forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature forecasting is regression - predicts continuous values",
          es: "Temperature forecasting es regresión - predice valores continuos",
          de: "Temperature forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Temperature forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Credit card fraud detection a classification or regression task?",
          es: "¿Es Credit card fraud detection clasificación o regresión?",
          de: "Ist Credit card fraud detection Klassifikation oder Regression?",
          nl: "Is Credit card fraud detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Credit card fraud detection is classification - predicts categories",
          es: "Credit card fraud detection es clasificación - predice categorías",
          de: "Credit card fraud detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Credit card fraud detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Sales forecasting a classification or regression task?",
          es: "¿Es Sales forecasting clasificación o regresión?",
          de: "Ist Sales forecasting Klassifikation oder Regression?",
          nl: "Is Sales forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sales forecasting is regression - predicts continuous values",
          es: "Sales forecasting es regresión - predice valores continuos",
          de: "Sales forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Sales forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Sentiment analysis a classification or regression task?",
          es: "¿Es Sentiment analysis clasificación o regresión?",
          de: "Ist Sentiment analysis Klassifikation oder Regression?",
          nl: "Is Sentiment analysis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis is classification - predicts categories",
          es: "Sentiment analysis es clasificación - predice categorías",
          de: "Sentiment analysis ist Klassifikation - sagt Kategorien vorher",
          nl: "Sentiment analysis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Age prediction a classification or regression task?",
          es: "¿Es Age prediction clasificación o regresión?",
          de: "Ist Age prediction Klassifikation oder Regression?",
          nl: "Is Age prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Age prediction is regression - predicts continuous values",
          es: "Age prediction es regresión - predice valores continuos",
          de: "Age prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Age prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "What is Classification in ML?",
          es: "¿Qué es clasificación en ML?",
          de: "Was ist Klassifikation in ML?",
          nl: "Wat is classificatie in ML?"
        },
        options: [
          { en: "Predicting categories or classes", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Predicting continuous numbers", es: "Predecir números continuos", de: "Kontinuierliche Zahlen vorhersagen", nl: "Continue getallen voorspellen" },
          { en: "Sorting files on disk", es: "Ordenar archivos", de: "Dateien sortieren", nl: "Bestanden sorteren" },
          { en: "Creating folders", es: "Crear carpetas", de: "Ordner erstellen", nl: "Mappen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Classification predicts discrete categories like spam/not spam or cat/dog",
          es: "Clasificación predice categorías discretas como spam/no spam",
          de: "Klassifikation sagt diskrete Kategorien vorher wie Spam/kein Spam",
          nl: "Classificatie voorspelt discrete categorieën zoals spam/geen spam"
        }
      },
      {
        question: {
          en: "What is Regression in ML?",
          es: "¿Qué es regresión en ML?",
          de: "Was ist Regression in ML?",
          nl: "Wat is regressie in ML?"
        },
        options: [
          { en: "Predicting continuous numerical values", es: "Predecir valores numéricos continuos", de: "Kontinuierliche Zahlenwerte vorhersagen", nl: "Continue numerieke waarden voorspellen" },
          { en: "Predicting categories", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Going backwards in time", es: "Retroceder en el tiempo", de: "Zurück in der Zeit", nl: "Terug in de tijd" },
          { en: "Deleting old data", es: "Eliminar datos antiguos", de: "Alte Daten löschen", nl: "Oude data verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Regression predicts continuous values like house prices or temperature",
          es: "Regresión predice valores continuos como precios de casas",
          de: "Regression sagt kontinuierliche Werte vorher wie Hauspreise",
          nl: "Regressie voorspelt continue waarden zoals huizenprijzen"
        }
      },
      {
        question: {
          en: "What is the Training Set?",
          es: "¿Qué es el conjunto de entrenamiento?",
          de: "Was ist der Trainingssatz?",
          nl: "Wat is de trainingsset?"
        },
        options: [
          { en: "Data used to train the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren des Modells", nl: "Data om het model te trainen" },
          { en: "Data to test the model", es: "Datos para probar", de: "Daten zum Testen", nl: "Data om te testen" },
          { en: "Data to delete", es: "Datos para eliminar", de: "Daten zum Löschen", nl: "Data om te verwijderen" },
          { en: "Data to ignore", es: "Datos para ignorar", de: "Daten zum Ignorieren", nl: "Data om te negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Training set is used to teach the model patterns in the data",
          es: "El conjunto de entrenamiento enseña patrones al modelo",
          de: "Der Trainingssatz lehrt dem Modell Muster in den Daten",
          nl: "De trainingsset leert het model patronen in de data"
        }
      },
      {
        question: {
          en: "What is the Test Set?",
          es: "¿Qué es el conjunto de prueba?",
          de: "Was ist der Testsatz?",
          nl: "Wat is de testset?"
        },
        options: [
          { en: "Data to evaluate model performance", es: "Datos para evaluar el modelo", de: "Daten zur Bewertung", nl: "Data om prestaties te evalueren" },
          { en: "Data to train the model", es: "Datos para entrenar", de: "Daten zum Trainieren", nl: "Data om te trainen" },
          { en: "Data to throw away", es: "Datos para descartar", de: "Daten zum Wegwerfen", nl: "Data om weg te gooien" },
          { en: "Data from tests", es: "Datos de exámenes", de: "Daten von Tests", nl: "Data van examens" }
        ],
        correct: 0,
        explanation: {
          en: "Test set evaluates how well the model performs on unseen data",
          es: "El conjunto de prueba evalúa el rendimiento con datos no vistos",
          de: "Der Testsatz bewertet die Leistung bei ungesehenen Daten",
          nl: "De testset evalueert prestaties op ongeziene data"
        }
      },
      {
        question: {
          en: "Why split data into training and testing?",
          es: "¿Por qué dividir datos en entrenamiento y prueba?",
          de: "Warum Daten in Training und Test aufteilen?",
          nl: "Waarom data splitsen in training en test?"
        },
        options: [
          { en: "To check if model works on new data", es: "Para verificar si funciona con datos nuevos", de: "Um zu prüfen ob das Modell bei neuen Daten funktioniert", nl: "Om te controleren of het model werkt op nieuwe data" },
          { en: "To save disk space", es: "Para ahorrar espacio", de: "Um Speicherplatz zu sparen", nl: "Om schijfruimte te besparen" },
          { en: "To make it slower", es: "Para hacerlo más lento", de: "Um es langsamer zu machen", nl: "Om het langzamer te maken" },
          { en: "It\'s not necessary", es: "No es necesario", de: "Es ist nicht notwendig", nl: "Het is niet nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Splitting prevents overfitting and ensures model generalizes to new data",
          es: "Dividir previene sobreajuste y asegura generalización",
          de: "Aufteilen verhindert Überanpassung und stellt Generalisierung sicher",
          nl: "Splitsen voorkomt overfitting en zorgt voor generalisatie"
        }
      },
      {
        question: {
          en: "Is Email spam detection a classification or regression task?",
          es: "¿Es Email spam detection clasificación o regresión?",
          de: "Ist Email spam detection Klassifikation oder Regression?",
          nl: "Is Email spam detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Email spam detection is classification - predicts categories",
          es: "Email spam detection es clasificación - predice categorías",
          de: "Email spam detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Email spam detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is House price prediction a classification or regression task?",
          es: "¿Es House price prediction clasificación o regresión?",
          de: "Ist House price prediction Klassifikation oder Regression?",
          nl: "Is House price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "House price prediction is regression - predicts continuous values",
          es: "House price prediction es regresión - predice valores continuos",
          de: "House price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "House price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Disease diagnosis a classification or regression task?",
          es: "¿Es Disease diagnosis clasificación o regresión?",
          de: "Ist Disease diagnosis Klassifikation oder Regression?",
          nl: "Is Disease diagnosis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Disease diagnosis is classification - predicts categories",
          es: "Disease diagnosis es clasificación - predice categorías",
          de: "Disease diagnosis ist Klassifikation - sagt Kategorien vorher",
          nl: "Disease diagnosis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Stock price prediction a classification or regression task?",
          es: "¿Es Stock price prediction clasificación o regresión?",
          de: "Ist Stock price prediction Klassifikation oder Regression?",
          nl: "Is Stock price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Stock price prediction is regression - predicts continuous values",
          es: "Stock price prediction es regresión - predice valores continuos",
          de: "Stock price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Stock price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Image recognition a classification or regression task?",
          es: "¿Es Image recognition clasificación o regresión?",
          de: "Ist Image recognition Klassifikation oder Regression?",
          nl: "Is Image recognition classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Image recognition is classification - predicts categories",
          es: "Image recognition es clasificación - predice categorías",
          de: "Image recognition ist Klassifikation - sagt Kategorien vorher",
          nl: "Image recognition is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Temperature forecasting a classification or regression task?",
          es: "¿Es Temperature forecasting clasificación o regresión?",
          de: "Ist Temperature forecasting Klassifikation oder Regression?",
          nl: "Is Temperature forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature forecasting is regression - predicts continuous values",
          es: "Temperature forecasting es regresión - predice valores continuos",
          de: "Temperature forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Temperature forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Credit card fraud detection a classification or regression task?",
          es: "¿Es Credit card fraud detection clasificación o regresión?",
          de: "Ist Credit card fraud detection Klassifikation oder Regression?",
          nl: "Is Credit card fraud detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Credit card fraud detection is classification - predicts categories",
          es: "Credit card fraud detection es clasificación - predice categorías",
          de: "Credit card fraud detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Credit card fraud detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Sales forecasting a classification or regression task?",
          es: "¿Es Sales forecasting clasificación o regresión?",
          de: "Ist Sales forecasting Klassifikation oder Regression?",
          nl: "Is Sales forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sales forecasting is regression - predicts continuous values",
          es: "Sales forecasting es regresión - predice valores continuos",
          de: "Sales forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Sales forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Sentiment analysis a classification or regression task?",
          es: "¿Es Sentiment analysis clasificación o regresión?",
          de: "Ist Sentiment analysis Klassifikation oder Regression?",
          nl: "Is Sentiment analysis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis is classification - predicts categories",
          es: "Sentiment analysis es clasificación - predice categorías",
          de: "Sentiment analysis ist Klassifikation - sagt Kategorien vorher",
          nl: "Sentiment analysis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Age prediction a classification or regression task?",
          es: "¿Es Age prediction clasificación o regresión?",
          de: "Ist Age prediction Klassifikation oder Regression?",
          nl: "Is Age prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Age prediction is regression - predicts continuous values",
          es: "Age prediction es regresión - predice valores continuos",
          de: "Age prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Age prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "What is Classification in ML?",
          es: "¿Qué es clasificación en ML?",
          de: "Was ist Klassifikation in ML?",
          nl: "Wat is classificatie in ML?"
        },
        options: [
          { en: "Predicting categories or classes", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Predicting continuous numbers", es: "Predecir números continuos", de: "Kontinuierliche Zahlen vorhersagen", nl: "Continue getallen voorspellen" },
          { en: "Sorting files on disk", es: "Ordenar archivos", de: "Dateien sortieren", nl: "Bestanden sorteren" },
          { en: "Creating folders", es: "Crear carpetas", de: "Ordner erstellen", nl: "Mappen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Classification predicts discrete categories like spam/not spam or cat/dog",
          es: "Clasificación predice categorías discretas como spam/no spam",
          de: "Klassifikation sagt diskrete Kategorien vorher wie Spam/kein Spam",
          nl: "Classificatie voorspelt discrete categorieën zoals spam/geen spam"
        }
      },
      {
        question: {
          en: "What is Regression in ML?",
          es: "¿Qué es regresión en ML?",
          de: "Was ist Regression in ML?",
          nl: "Wat is regressie in ML?"
        },
        options: [
          { en: "Predicting continuous numerical values", es: "Predecir valores numéricos continuos", de: "Kontinuierliche Zahlenwerte vorhersagen", nl: "Continue numerieke waarden voorspellen" },
          { en: "Predicting categories", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Going backwards in time", es: "Retroceder en el tiempo", de: "Zurück in der Zeit", nl: "Terug in de tijd" },
          { en: "Deleting old data", es: "Eliminar datos antiguos", de: "Alte Daten löschen", nl: "Oude data verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Regression predicts continuous values like house prices or temperature",
          es: "Regresión predice valores continuos como precios de casas",
          de: "Regression sagt kontinuierliche Werte vorher wie Hauspreise",
          nl: "Regressie voorspelt continue waarden zoals huizenprijzen"
        }
      },
      {
        question: {
          en: "What is the Training Set?",
          es: "¿Qué es el conjunto de entrenamiento?",
          de: "Was ist der Trainingssatz?",
          nl: "Wat is de trainingsset?"
        },
        options: [
          { en: "Data used to train the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren des Modells", nl: "Data om het model te trainen" },
          { en: "Data to test the model", es: "Datos para probar", de: "Daten zum Testen", nl: "Data om te testen" },
          { en: "Data to delete", es: "Datos para eliminar", de: "Daten zum Löschen", nl: "Data om te verwijderen" },
          { en: "Data to ignore", es: "Datos para ignorar", de: "Daten zum Ignorieren", nl: "Data om te negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Training set is used to teach the model patterns in the data",
          es: "El conjunto de entrenamiento enseña patrones al modelo",
          de: "Der Trainingssatz lehrt dem Modell Muster in den Daten",
          nl: "De trainingsset leert het model patronen in de data"
        }
      },
      {
        question: {
          en: "What is the Test Set?",
          es: "¿Qué es el conjunto de prueba?",
          de: "Was ist der Testsatz?",
          nl: "Wat is de testset?"
        },
        options: [
          { en: "Data to evaluate model performance", es: "Datos para evaluar el modelo", de: "Daten zur Bewertung", nl: "Data om prestaties te evalueren" },
          { en: "Data to train the model", es: "Datos para entrenar", de: "Daten zum Trainieren", nl: "Data om te trainen" },
          { en: "Data to throw away", es: "Datos para descartar", de: "Daten zum Wegwerfen", nl: "Data om weg te gooien" },
          { en: "Data from tests", es: "Datos de exámenes", de: "Daten von Tests", nl: "Data van examens" }
        ],
        correct: 0,
        explanation: {
          en: "Test set evaluates how well the model performs on unseen data",
          es: "El conjunto de prueba evalúa el rendimiento con datos no vistos",
          de: "Der Testsatz bewertet die Leistung bei ungesehenen Daten",
          nl: "De testset evalueert prestaties op ongeziene data"
        }
      },
      {
        question: {
          en: "Why split data into training and testing?",
          es: "¿Por qué dividir datos en entrenamiento y prueba?",
          de: "Warum Daten in Training und Test aufteilen?",
          nl: "Waarom data splitsen in training en test?"
        },
        options: [
          { en: "To check if model works on new data", es: "Para verificar si funciona con datos nuevos", de: "Um zu prüfen ob das Modell bei neuen Daten funktioniert", nl: "Om te controleren of het model werkt op nieuwe data" },
          { en: "To save disk space", es: "Para ahorrar espacio", de: "Um Speicherplatz zu sparen", nl: "Om schijfruimte te besparen" },
          { en: "To make it slower", es: "Para hacerlo más lento", de: "Um es langsamer zu machen", nl: "Om het langzamer te maken" },
          { en: "It\'s not necessary", es: "No es necesario", de: "Es ist nicht notwendig", nl: "Het is niet nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Splitting prevents overfitting and ensures model generalizes to new data",
          es: "Dividir previene sobreajuste y asegura generalización",
          de: "Aufteilen verhindert Überanpassung und stellt Generalisierung sicher",
          nl: "Splitsen voorkomt overfitting en zorgt voor generalisatie"
        }
      },
      {
        question: {
          en: "Is Email spam detection a classification or regression task?",
          es: "¿Es Email spam detection clasificación o regresión?",
          de: "Ist Email spam detection Klassifikation oder Regression?",
          nl: "Is Email spam detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Email spam detection is classification - predicts categories",
          es: "Email spam detection es clasificación - predice categorías",
          de: "Email spam detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Email spam detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is House price prediction a classification or regression task?",
          es: "¿Es House price prediction clasificación o regresión?",
          de: "Ist House price prediction Klassifikation oder Regression?",
          nl: "Is House price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "House price prediction is regression - predicts continuous values",
          es: "House price prediction es regresión - predice valores continuos",
          de: "House price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "House price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Disease diagnosis a classification or regression task?",
          es: "¿Es Disease diagnosis clasificación o regresión?",
          de: "Ist Disease diagnosis Klassifikation oder Regression?",
          nl: "Is Disease diagnosis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Disease diagnosis is classification - predicts categories",
          es: "Disease diagnosis es clasificación - predice categorías",
          de: "Disease diagnosis ist Klassifikation - sagt Kategorien vorher",
          nl: "Disease diagnosis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Stock price prediction a classification or regression task?",
          es: "¿Es Stock price prediction clasificación o regresión?",
          de: "Ist Stock price prediction Klassifikation oder Regression?",
          nl: "Is Stock price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Stock price prediction is regression - predicts continuous values",
          es: "Stock price prediction es regresión - predice valores continuos",
          de: "Stock price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Stock price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Image recognition a classification or regression task?",
          es: "¿Es Image recognition clasificación o regresión?",
          de: "Ist Image recognition Klassifikation oder Regression?",
          nl: "Is Image recognition classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Image recognition is classification - predicts categories",
          es: "Image recognition es clasificación - predice categorías",
          de: "Image recognition ist Klassifikation - sagt Kategorien vorher",
          nl: "Image recognition is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Temperature forecasting a classification or regression task?",
          es: "¿Es Temperature forecasting clasificación o regresión?",
          de: "Ist Temperature forecasting Klassifikation oder Regression?",
          nl: "Is Temperature forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature forecasting is regression - predicts continuous values",
          es: "Temperature forecasting es regresión - predice valores continuos",
          de: "Temperature forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Temperature forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Credit card fraud detection a classification or regression task?",
          es: "¿Es Credit card fraud detection clasificación o regresión?",
          de: "Ist Credit card fraud detection Klassifikation oder Regression?",
          nl: "Is Credit card fraud detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Credit card fraud detection is classification - predicts categories",
          es: "Credit card fraud detection es clasificación - predice categorías",
          de: "Credit card fraud detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Credit card fraud detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Sales forecasting a classification or regression task?",
          es: "¿Es Sales forecasting clasificación o regresión?",
          de: "Ist Sales forecasting Klassifikation oder Regression?",
          nl: "Is Sales forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sales forecasting is regression - predicts continuous values",
          es: "Sales forecasting es regresión - predice valores continuos",
          de: "Sales forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Sales forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Sentiment analysis a classification or regression task?",
          es: "¿Es Sentiment analysis clasificación o regresión?",
          de: "Ist Sentiment analysis Klassifikation oder Regression?",
          nl: "Is Sentiment analysis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis is classification - predicts categories",
          es: "Sentiment analysis es clasificación - predice categorías",
          de: "Sentiment analysis ist Klassifikation - sagt Kategorien vorher",
          nl: "Sentiment analysis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Age prediction a classification or regression task?",
          es: "¿Es Age prediction clasificación o regresión?",
          de: "Ist Age prediction Klassifikation oder Regression?",
          nl: "Is Age prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Age prediction is regression - predicts continuous values",
          es: "Age prediction es regresión - predice valores continuos",
          de: "Age prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Age prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "What is Classification in ML?",
          es: "¿Qué es clasificación en ML?",
          de: "Was ist Klassifikation in ML?",
          nl: "Wat is classificatie in ML?"
        },
        options: [
          { en: "Predicting categories or classes", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Predicting continuous numbers", es: "Predecir números continuos", de: "Kontinuierliche Zahlen vorhersagen", nl: "Continue getallen voorspellen" },
          { en: "Sorting files on disk", es: "Ordenar archivos", de: "Dateien sortieren", nl: "Bestanden sorteren" },
          { en: "Creating folders", es: "Crear carpetas", de: "Ordner erstellen", nl: "Mappen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Classification predicts discrete categories like spam/not spam or cat/dog",
          es: "Clasificación predice categorías discretas como spam/no spam",
          de: "Klassifikation sagt diskrete Kategorien vorher wie Spam/kein Spam",
          nl: "Classificatie voorspelt discrete categorieën zoals spam/geen spam"
        }
      },
      {
        question: {
          en: "What is Regression in ML?",
          es: "¿Qué es regresión en ML?",
          de: "Was ist Regression in ML?",
          nl: "Wat is regressie in ML?"
        },
        options: [
          { en: "Predicting continuous numerical values", es: "Predecir valores numéricos continuos", de: "Kontinuierliche Zahlenwerte vorhersagen", nl: "Continue numerieke waarden voorspellen" },
          { en: "Predicting categories", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Going backwards in time", es: "Retroceder en el tiempo", de: "Zurück in der Zeit", nl: "Terug in de tijd" },
          { en: "Deleting old data", es: "Eliminar datos antiguos", de: "Alte Daten löschen", nl: "Oude data verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Regression predicts continuous values like house prices or temperature",
          es: "Regresión predice valores continuos como precios de casas",
          de: "Regression sagt kontinuierliche Werte vorher wie Hauspreise",
          nl: "Regressie voorspelt continue waarden zoals huizenprijzen"
        }
      },
      {
        question: {
          en: "What is the Training Set?",
          es: "¿Qué es el conjunto de entrenamiento?",
          de: "Was ist der Trainingssatz?",
          nl: "Wat is de trainingsset?"
        },
        options: [
          { en: "Data used to train the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren des Modells", nl: "Data om het model te trainen" },
          { en: "Data to test the model", es: "Datos para probar", de: "Daten zum Testen", nl: "Data om te testen" },
          { en: "Data to delete", es: "Datos para eliminar", de: "Daten zum Löschen", nl: "Data om te verwijderen" },
          { en: "Data to ignore", es: "Datos para ignorar", de: "Daten zum Ignorieren", nl: "Data om te negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Training set is used to teach the model patterns in the data",
          es: "El conjunto de entrenamiento enseña patrones al modelo",
          de: "Der Trainingssatz lehrt dem Modell Muster in den Daten",
          nl: "De trainingsset leert het model patronen in de data"
        }
      },
      {
        question: {
          en: "What is the Test Set?",
          es: "¿Qué es el conjunto de prueba?",
          de: "Was ist der Testsatz?",
          nl: "Wat is de testset?"
        },
        options: [
          { en: "Data to evaluate model performance", es: "Datos para evaluar el modelo", de: "Daten zur Bewertung", nl: "Data om prestaties te evalueren" },
          { en: "Data to train the model", es: "Datos para entrenar", de: "Daten zum Trainieren", nl: "Data om te trainen" },
          { en: "Data to throw away", es: "Datos para descartar", de: "Daten zum Wegwerfen", nl: "Data om weg te gooien" },
          { en: "Data from tests", es: "Datos de exámenes", de: "Daten von Tests", nl: "Data van examens" }
        ],
        correct: 0,
        explanation: {
          en: "Test set evaluates how well the model performs on unseen data",
          es: "El conjunto de prueba evalúa el rendimiento con datos no vistos",
          de: "Der Testsatz bewertet die Leistung bei ungesehenen Daten",
          nl: "De testset evalueert prestaties op ongeziene data"
        }
      },
      {
        question: {
          en: "Why split data into training and testing?",
          es: "¿Por qué dividir datos en entrenamiento y prueba?",
          de: "Warum Daten in Training und Test aufteilen?",
          nl: "Waarom data splitsen in training en test?"
        },
        options: [
          { en: "To check if model works on new data", es: "Para verificar si funciona con datos nuevos", de: "Um zu prüfen ob das Modell bei neuen Daten funktioniert", nl: "Om te controleren of het model werkt op nieuwe data" },
          { en: "To save disk space", es: "Para ahorrar espacio", de: "Um Speicherplatz zu sparen", nl: "Om schijfruimte te besparen" },
          { en: "To make it slower", es: "Para hacerlo más lento", de: "Um es langsamer zu machen", nl: "Om het langzamer te maken" },
          { en: "It\'s not necessary", es: "No es necesario", de: "Es ist nicht notwendig", nl: "Het is niet nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Splitting prevents overfitting and ensures model generalizes to new data",
          es: "Dividir previene sobreajuste y asegura generalización",
          de: "Aufteilen verhindert Überanpassung und stellt Generalisierung sicher",
          nl: "Splitsen voorkomt overfitting en zorgt voor generalisatie"
        }
      },
      {
        question: {
          en: "Is Email spam detection a classification or regression task?",
          es: "¿Es Email spam detection clasificación o regresión?",
          de: "Ist Email spam detection Klassifikation oder Regression?",
          nl: "Is Email spam detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Email spam detection is classification - predicts categories",
          es: "Email spam detection es clasificación - predice categorías",
          de: "Email spam detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Email spam detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is House price prediction a classification or regression task?",
          es: "¿Es House price prediction clasificación o regresión?",
          de: "Ist House price prediction Klassifikation oder Regression?",
          nl: "Is House price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "House price prediction is regression - predicts continuous values",
          es: "House price prediction es regresión - predice valores continuos",
          de: "House price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "House price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Disease diagnosis a classification or regression task?",
          es: "¿Es Disease diagnosis clasificación o regresión?",
          de: "Ist Disease diagnosis Klassifikation oder Regression?",
          nl: "Is Disease diagnosis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Disease diagnosis is classification - predicts categories",
          es: "Disease diagnosis es clasificación - predice categorías",
          de: "Disease diagnosis ist Klassifikation - sagt Kategorien vorher",
          nl: "Disease diagnosis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Stock price prediction a classification or regression task?",
          es: "¿Es Stock price prediction clasificación o regresión?",
          de: "Ist Stock price prediction Klassifikation oder Regression?",
          nl: "Is Stock price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Stock price prediction is regression - predicts continuous values",
          es: "Stock price prediction es regresión - predice valores continuos",
          de: "Stock price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Stock price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Image recognition a classification or regression task?",
          es: "¿Es Image recognition clasificación o regresión?",
          de: "Ist Image recognition Klassifikation oder Regression?",
          nl: "Is Image recognition classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Image recognition is classification - predicts categories",
          es: "Image recognition es clasificación - predice categorías",
          de: "Image recognition ist Klassifikation - sagt Kategorien vorher",
          nl: "Image recognition is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Temperature forecasting a classification or regression task?",
          es: "¿Es Temperature forecasting clasificación o regresión?",
          de: "Ist Temperature forecasting Klassifikation oder Regression?",
          nl: "Is Temperature forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature forecasting is regression - predicts continuous values",
          es: "Temperature forecasting es regresión - predice valores continuos",
          de: "Temperature forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Temperature forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Credit card fraud detection a classification or regression task?",
          es: "¿Es Credit card fraud detection clasificación o regresión?",
          de: "Ist Credit card fraud detection Klassifikation oder Regression?",
          nl: "Is Credit card fraud detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Credit card fraud detection is classification - predicts categories",
          es: "Credit card fraud detection es clasificación - predice categorías",
          de: "Credit card fraud detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Credit card fraud detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Sales forecasting a classification or regression task?",
          es: "¿Es Sales forecasting clasificación o regresión?",
          de: "Ist Sales forecasting Klassifikation oder Regression?",
          nl: "Is Sales forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sales forecasting is regression - predicts continuous values",
          es: "Sales forecasting es regresión - predice valores continuos",
          de: "Sales forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Sales forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Sentiment analysis a classification or regression task?",
          es: "¿Es Sentiment analysis clasificación o regresión?",
          de: "Ist Sentiment analysis Klassifikation oder Regression?",
          nl: "Is Sentiment analysis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis is classification - predicts categories",
          es: "Sentiment analysis es clasificación - predice categorías",
          de: "Sentiment analysis ist Klassifikation - sagt Kategorien vorher",
          nl: "Sentiment analysis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Age prediction a classification or regression task?",
          es: "¿Es Age prediction clasificación o regresión?",
          de: "Ist Age prediction Klassifikation oder Regression?",
          nl: "Is Age prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Age prediction is regression - predicts continuous values",
          es: "Age prediction es regresión - predice valores continuos",
          de: "Age prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Age prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "What is Classification in ML?",
          es: "¿Qué es clasificación en ML?",
          de: "Was ist Klassifikation in ML?",
          nl: "Wat is classificatie in ML?"
        },
        options: [
          { en: "Predicting categories or classes", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Predicting continuous numbers", es: "Predecir números continuos", de: "Kontinuierliche Zahlen vorhersagen", nl: "Continue getallen voorspellen" },
          { en: "Sorting files on disk", es: "Ordenar archivos", de: "Dateien sortieren", nl: "Bestanden sorteren" },
          { en: "Creating folders", es: "Crear carpetas", de: "Ordner erstellen", nl: "Mappen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Classification predicts discrete categories like spam/not spam or cat/dog",
          es: "Clasificación predice categorías discretas como spam/no spam",
          de: "Klassifikation sagt diskrete Kategorien vorher wie Spam/kein Spam",
          nl: "Classificatie voorspelt discrete categorieën zoals spam/geen spam"
        }
      },
      {
        question: {
          en: "What is Regression in ML?",
          es: "¿Qué es regresión en ML?",
          de: "Was ist Regression in ML?",
          nl: "Wat is regressie in ML?"
        },
        options: [
          { en: "Predicting continuous numerical values", es: "Predecir valores numéricos continuos", de: "Kontinuierliche Zahlenwerte vorhersagen", nl: "Continue numerieke waarden voorspellen" },
          { en: "Predicting categories", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Going backwards in time", es: "Retroceder en el tiempo", de: "Zurück in der Zeit", nl: "Terug in de tijd" },
          { en: "Deleting old data", es: "Eliminar datos antiguos", de: "Alte Daten löschen", nl: "Oude data verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Regression predicts continuous values like house prices or temperature",
          es: "Regresión predice valores continuos como precios de casas",
          de: "Regression sagt kontinuierliche Werte vorher wie Hauspreise",
          nl: "Regressie voorspelt continue waarden zoals huizenprijzen"
        }
      },
      {
        question: {
          en: "What is the Training Set?",
          es: "¿Qué es el conjunto de entrenamiento?",
          de: "Was ist der Trainingssatz?",
          nl: "Wat is de trainingsset?"
        },
        options: [
          { en: "Data used to train the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren des Modells", nl: "Data om het model te trainen" },
          { en: "Data to test the model", es: "Datos para probar", de: "Daten zum Testen", nl: "Data om te testen" },
          { en: "Data to delete", es: "Datos para eliminar", de: "Daten zum Löschen", nl: "Data om te verwijderen" },
          { en: "Data to ignore", es: "Datos para ignorar", de: "Daten zum Ignorieren", nl: "Data om te negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Training set is used to teach the model patterns in the data",
          es: "El conjunto de entrenamiento enseña patrones al modelo",
          de: "Der Trainingssatz lehrt dem Modell Muster in den Daten",
          nl: "De trainingsset leert het model patronen in de data"
        }
      },
      {
        question: {
          en: "What is the Test Set?",
          es: "¿Qué es el conjunto de prueba?",
          de: "Was ist der Testsatz?",
          nl: "Wat is de testset?"
        },
        options: [
          { en: "Data to evaluate model performance", es: "Datos para evaluar el modelo", de: "Daten zur Bewertung", nl: "Data om prestaties te evalueren" },
          { en: "Data to train the model", es: "Datos para entrenar", de: "Daten zum Trainieren", nl: "Data om te trainen" },
          { en: "Data to throw away", es: "Datos para descartar", de: "Daten zum Wegwerfen", nl: "Data om weg te gooien" },
          { en: "Data from tests", es: "Datos de exámenes", de: "Daten von Tests", nl: "Data van examens" }
        ],
        correct: 0,
        explanation: {
          en: "Test set evaluates how well the model performs on unseen data",
          es: "El conjunto de prueba evalúa el rendimiento con datos no vistos",
          de: "Der Testsatz bewertet die Leistung bei ungesehenen Daten",
          nl: "De testset evalueert prestaties op ongeziene data"
        }
      },
      {
        question: {
          en: "Why split data into training and testing?",
          es: "¿Por qué dividir datos en entrenamiento y prueba?",
          de: "Warum Daten in Training und Test aufteilen?",
          nl: "Waarom data splitsen in training en test?"
        },
        options: [
          { en: "To check if model works on new data", es: "Para verificar si funciona con datos nuevos", de: "Um zu prüfen ob das Modell bei neuen Daten funktioniert", nl: "Om te controleren of het model werkt op nieuwe data" },
          { en: "To save disk space", es: "Para ahorrar espacio", de: "Um Speicherplatz zu sparen", nl: "Om schijfruimte te besparen" },
          { en: "To make it slower", es: "Para hacerlo más lento", de: "Um es langsamer zu machen", nl: "Om het langzamer te maken" },
          { en: "It\'s not necessary", es: "No es necesario", de: "Es ist nicht notwendig", nl: "Het is niet nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Splitting prevents overfitting and ensures model generalizes to new data",
          es: "Dividir previene sobreajuste y asegura generalización",
          de: "Aufteilen verhindert Überanpassung und stellt Generalisierung sicher",
          nl: "Splitsen voorkomt overfitting en zorgt voor generalisatie"
        }
      },
      {
        question: {
          en: "Is Email spam detection a classification or regression task?",
          es: "¿Es Email spam detection clasificación o regresión?",
          de: "Ist Email spam detection Klassifikation oder Regression?",
          nl: "Is Email spam detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Email spam detection is classification - predicts categories",
          es: "Email spam detection es clasificación - predice categorías",
          de: "Email spam detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Email spam detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is House price prediction a classification or regression task?",
          es: "¿Es House price prediction clasificación o regresión?",
          de: "Ist House price prediction Klassifikation oder Regression?",
          nl: "Is House price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "House price prediction is regression - predicts continuous values",
          es: "House price prediction es regresión - predice valores continuos",
          de: "House price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "House price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Disease diagnosis a classification or regression task?",
          es: "¿Es Disease diagnosis clasificación o regresión?",
          de: "Ist Disease diagnosis Klassifikation oder Regression?",
          nl: "Is Disease diagnosis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Disease diagnosis is classification - predicts categories",
          es: "Disease diagnosis es clasificación - predice categorías",
          de: "Disease diagnosis ist Klassifikation - sagt Kategorien vorher",
          nl: "Disease diagnosis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Stock price prediction a classification or regression task?",
          es: "¿Es Stock price prediction clasificación o regresión?",
          de: "Ist Stock price prediction Klassifikation oder Regression?",
          nl: "Is Stock price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Stock price prediction is regression - predicts continuous values",
          es: "Stock price prediction es regresión - predice valores continuos",
          de: "Stock price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Stock price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Image recognition a classification or regression task?",
          es: "¿Es Image recognition clasificación o regresión?",
          de: "Ist Image recognition Klassifikation oder Regression?",
          nl: "Is Image recognition classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Image recognition is classification - predicts categories",
          es: "Image recognition es clasificación - predice categorías",
          de: "Image recognition ist Klassifikation - sagt Kategorien vorher",
          nl: "Image recognition is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Temperature forecasting a classification or regression task?",
          es: "¿Es Temperature forecasting clasificación o regresión?",
          de: "Ist Temperature forecasting Klassifikation oder Regression?",
          nl: "Is Temperature forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature forecasting is regression - predicts continuous values",
          es: "Temperature forecasting es regresión - predice valores continuos",
          de: "Temperature forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Temperature forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Credit card fraud detection a classification or regression task?",
          es: "¿Es Credit card fraud detection clasificación o regresión?",
          de: "Ist Credit card fraud detection Klassifikation oder Regression?",
          nl: "Is Credit card fraud detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Credit card fraud detection is classification - predicts categories",
          es: "Credit card fraud detection es clasificación - predice categorías",
          de: "Credit card fraud detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Credit card fraud detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Sales forecasting a classification or regression task?",
          es: "¿Es Sales forecasting clasificación o regresión?",
          de: "Ist Sales forecasting Klassifikation oder Regression?",
          nl: "Is Sales forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sales forecasting is regression - predicts continuous values",
          es: "Sales forecasting es regresión - predice valores continuos",
          de: "Sales forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Sales forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Sentiment analysis a classification or regression task?",
          es: "¿Es Sentiment analysis clasificación o regresión?",
          de: "Ist Sentiment analysis Klassifikation oder Regression?",
          nl: "Is Sentiment analysis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis is classification - predicts categories",
          es: "Sentiment analysis es clasificación - predice categorías",
          de: "Sentiment analysis ist Klassifikation - sagt Kategorien vorher",
          nl: "Sentiment analysis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Age prediction a classification or regression task?",
          es: "¿Es Age prediction clasificación o regresión?",
          de: "Ist Age prediction Klassifikation oder Regression?",
          nl: "Is Age prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Age prediction is regression - predicts continuous values",
          es: "Age prediction es regresión - predice valores continuos",
          de: "Age prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Age prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "What is Classification in ML?",
          es: "¿Qué es clasificación en ML?",
          de: "Was ist Klassifikation in ML?",
          nl: "Wat is classificatie in ML?"
        },
        options: [
          { en: "Predicting categories or classes", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Predicting continuous numbers", es: "Predecir números continuos", de: "Kontinuierliche Zahlen vorhersagen", nl: "Continue getallen voorspellen" },
          { en: "Sorting files on disk", es: "Ordenar archivos", de: "Dateien sortieren", nl: "Bestanden sorteren" },
          { en: "Creating folders", es: "Crear carpetas", de: "Ordner erstellen", nl: "Mappen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Classification predicts discrete categories like spam/not spam or cat/dog",
          es: "Clasificación predice categorías discretas como spam/no spam",
          de: "Klassifikation sagt diskrete Kategorien vorher wie Spam/kein Spam",
          nl: "Classificatie voorspelt discrete categorieën zoals spam/geen spam"
        }
      },
      {
        question: {
          en: "What is Regression in ML?",
          es: "¿Qué es regresión en ML?",
          de: "Was ist Regression in ML?",
          nl: "Wat is regressie in ML?"
        },
        options: [
          { en: "Predicting continuous numerical values", es: "Predecir valores numéricos continuos", de: "Kontinuierliche Zahlenwerte vorhersagen", nl: "Continue numerieke waarden voorspellen" },
          { en: "Predicting categories", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Going backwards in time", es: "Retroceder en el tiempo", de: "Zurück in der Zeit", nl: "Terug in de tijd" },
          { en: "Deleting old data", es: "Eliminar datos antiguos", de: "Alte Daten löschen", nl: "Oude data verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Regression predicts continuous values like house prices or temperature",
          es: "Regresión predice valores continuos como precios de casas",
          de: "Regression sagt kontinuierliche Werte vorher wie Hauspreise",
          nl: "Regressie voorspelt continue waarden zoals huizenprijzen"
        }
      },
      {
        question: {
          en: "What is the Training Set?",
          es: "¿Qué es el conjunto de entrenamiento?",
          de: "Was ist der Trainingssatz?",
          nl: "Wat is de trainingsset?"
        },
        options: [
          { en: "Data used to train the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren des Modells", nl: "Data om het model te trainen" },
          { en: "Data to test the model", es: "Datos para probar", de: "Daten zum Testen", nl: "Data om te testen" },
          { en: "Data to delete", es: "Datos para eliminar", de: "Daten zum Löschen", nl: "Data om te verwijderen" },
          { en: "Data to ignore", es: "Datos para ignorar", de: "Daten zum Ignorieren", nl: "Data om te negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Training set is used to teach the model patterns in the data",
          es: "El conjunto de entrenamiento enseña patrones al modelo",
          de: "Der Trainingssatz lehrt dem Modell Muster in den Daten",
          nl: "De trainingsset leert het model patronen in de data"
        }
      },
      {
        question: {
          en: "What is the Test Set?",
          es: "¿Qué es el conjunto de prueba?",
          de: "Was ist der Testsatz?",
          nl: "Wat is de testset?"
        },
        options: [
          { en: "Data to evaluate model performance", es: "Datos para evaluar el modelo", de: "Daten zur Bewertung", nl: "Data om prestaties te evalueren" },
          { en: "Data to train the model", es: "Datos para entrenar", de: "Daten zum Trainieren", nl: "Data om te trainen" },
          { en: "Data to throw away", es: "Datos para descartar", de: "Daten zum Wegwerfen", nl: "Data om weg te gooien" },
          { en: "Data from tests", es: "Datos de exámenes", de: "Daten von Tests", nl: "Data van examens" }
        ],
        correct: 0,
        explanation: {
          en: "Test set evaluates how well the model performs on unseen data",
          es: "El conjunto de prueba evalúa el rendimiento con datos no vistos",
          de: "Der Testsatz bewertet die Leistung bei ungesehenen Daten",
          nl: "De testset evalueert prestaties op ongeziene data"
        }
      },
      {
        question: {
          en: "Why split data into training and testing?",
          es: "¿Por qué dividir datos en entrenamiento y prueba?",
          de: "Warum Daten in Training und Test aufteilen?",
          nl: "Waarom data splitsen in training en test?"
        },
        options: [
          { en: "To check if model works on new data", es: "Para verificar si funciona con datos nuevos", de: "Um zu prüfen ob das Modell bei neuen Daten funktioniert", nl: "Om te controleren of het model werkt op nieuwe data" },
          { en: "To save disk space", es: "Para ahorrar espacio", de: "Um Speicherplatz zu sparen", nl: "Om schijfruimte te besparen" },
          { en: "To make it slower", es: "Para hacerlo más lento", de: "Um es langsamer zu machen", nl: "Om het langzamer te maken" },
          { en: "It\'s not necessary", es: "No es necesario", de: "Es ist nicht notwendig", nl: "Het is niet nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Splitting prevents overfitting and ensures model generalizes to new data",
          es: "Dividir previene sobreajuste y asegura generalización",
          de: "Aufteilen verhindert Überanpassung und stellt Generalisierung sicher",
          nl: "Splitsen voorkomt overfitting en zorgt voor generalisatie"
        }
      },
      {
        question: {
          en: "Is Email spam detection a classification or regression task?",
          es: "¿Es Email spam detection clasificación o regresión?",
          de: "Ist Email spam detection Klassifikation oder Regression?",
          nl: "Is Email spam detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Email spam detection is classification - predicts categories",
          es: "Email spam detection es clasificación - predice categorías",
          de: "Email spam detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Email spam detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is House price prediction a classification or regression task?",
          es: "¿Es House price prediction clasificación o regresión?",
          de: "Ist House price prediction Klassifikation oder Regression?",
          nl: "Is House price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "House price prediction is regression - predicts continuous values",
          es: "House price prediction es regresión - predice valores continuos",
          de: "House price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "House price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Disease diagnosis a classification or regression task?",
          es: "¿Es Disease diagnosis clasificación o regresión?",
          de: "Ist Disease diagnosis Klassifikation oder Regression?",
          nl: "Is Disease diagnosis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Disease diagnosis is classification - predicts categories",
          es: "Disease diagnosis es clasificación - predice categorías",
          de: "Disease diagnosis ist Klassifikation - sagt Kategorien vorher",
          nl: "Disease diagnosis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Stock price prediction a classification or regression task?",
          es: "¿Es Stock price prediction clasificación o regresión?",
          de: "Ist Stock price prediction Klassifikation oder Regression?",
          nl: "Is Stock price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Stock price prediction is regression - predicts continuous values",
          es: "Stock price prediction es regresión - predice valores continuos",
          de: "Stock price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Stock price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Image recognition a classification or regression task?",
          es: "¿Es Image recognition clasificación o regresión?",
          de: "Ist Image recognition Klassifikation oder Regression?",
          nl: "Is Image recognition classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Image recognition is classification - predicts categories",
          es: "Image recognition es clasificación - predice categorías",
          de: "Image recognition ist Klassifikation - sagt Kategorien vorher",
          nl: "Image recognition is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Temperature forecasting a classification or regression task?",
          es: "¿Es Temperature forecasting clasificación o regresión?",
          de: "Ist Temperature forecasting Klassifikation oder Regression?",
          nl: "Is Temperature forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Temperature forecasting is regression - predicts continuous values",
          es: "Temperature forecasting es regresión - predice valores continuos",
          de: "Temperature forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Temperature forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Credit card fraud detection a classification or regression task?",
          es: "¿Es Credit card fraud detection clasificación o regresión?",
          de: "Ist Credit card fraud detection Klassifikation oder Regression?",
          nl: "Is Credit card fraud detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Credit card fraud detection is classification - predicts categories",
          es: "Credit card fraud detection es clasificación - predice categorías",
          de: "Credit card fraud detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Credit card fraud detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Sales forecasting a classification or regression task?",
          es: "¿Es Sales forecasting clasificación o regresión?",
          de: "Ist Sales forecasting Klassifikation oder Regression?",
          nl: "Is Sales forecasting classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sales forecasting is regression - predicts continuous values",
          es: "Sales forecasting es regresión - predice valores continuos",
          de: "Sales forecasting ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Sales forecasting is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Sentiment analysis a classification or regression task?",
          es: "¿Es Sentiment analysis clasificación o regresión?",
          de: "Ist Sentiment analysis Klassifikation oder Regression?",
          nl: "Is Sentiment analysis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Sentiment analysis is classification - predicts categories",
          es: "Sentiment analysis es clasificación - predice categorías",
          de: "Sentiment analysis ist Klassifikation - sagt Kategorien vorher",
          nl: "Sentiment analysis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Age prediction a classification or regression task?",
          es: "¿Es Age prediction clasificación o regresión?",
          de: "Ist Age prediction Klassifikation oder Regression?",
          nl: "Is Age prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Age prediction is regression - predicts continuous values",
          es: "Age prediction es regresión - predice valores continuos",
          de: "Age prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Age prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "What is Classification in ML?",
          es: "¿Qué es clasificación en ML?",
          de: "Was ist Klassifikation in ML?",
          nl: "Wat is classificatie in ML?"
        },
        options: [
          { en: "Predicting categories or classes", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Predicting continuous numbers", es: "Predecir números continuos", de: "Kontinuierliche Zahlen vorhersagen", nl: "Continue getallen voorspellen" },
          { en: "Sorting files on disk", es: "Ordenar archivos", de: "Dateien sortieren", nl: "Bestanden sorteren" },
          { en: "Creating folders", es: "Crear carpetas", de: "Ordner erstellen", nl: "Mappen maken" }
        ],
        correct: 0,
        explanation: {
          en: "Classification predicts discrete categories like spam/not spam or cat/dog",
          es: "Clasificación predice categorías discretas como spam/no spam",
          de: "Klassifikation sagt diskrete Kategorien vorher wie Spam/kein Spam",
          nl: "Classificatie voorspelt discrete categorieën zoals spam/geen spam"
        }
      },
      {
        question: {
          en: "What is Regression in ML?",
          es: "¿Qué es regresión en ML?",
          de: "Was ist Regression in ML?",
          nl: "Wat is regressie in ML?"
        },
        options: [
          { en: "Predicting continuous numerical values", es: "Predecir valores numéricos continuos", de: "Kontinuierliche Zahlenwerte vorhersagen", nl: "Continue numerieke waarden voorspellen" },
          { en: "Predicting categories", es: "Predecir categorías", de: "Kategorien vorhersagen", nl: "Categorieën voorspellen" },
          { en: "Going backwards in time", es: "Retroceder en el tiempo", de: "Zurück in der Zeit", nl: "Terug in de tijd" },
          { en: "Deleting old data", es: "Eliminar datos antiguos", de: "Alte Daten löschen", nl: "Oude data verwijderen" }
        ],
        correct: 0,
        explanation: {
          en: "Regression predicts continuous values like house prices or temperature",
          es: "Regresión predice valores continuos como precios de casas",
          de: "Regression sagt kontinuierliche Werte vorher wie Hauspreise",
          nl: "Regressie voorspelt continue waarden zoals huizenprijzen"
        }
      },
      {
        question: {
          en: "What is the Training Set?",
          es: "¿Qué es el conjunto de entrenamiento?",
          de: "Was ist der Trainingssatz?",
          nl: "Wat is de trainingsset?"
        },
        options: [
          { en: "Data used to train the model", es: "Datos para entrenar el modelo", de: "Daten zum Trainieren des Modells", nl: "Data om het model te trainen" },
          { en: "Data to test the model", es: "Datos para probar", de: "Daten zum Testen", nl: "Data om te testen" },
          { en: "Data to delete", es: "Datos para eliminar", de: "Daten zum Löschen", nl: "Data om te verwijderen" },
          { en: "Data to ignore", es: "Datos para ignorar", de: "Daten zum Ignorieren", nl: "Data om te negeren" }
        ],
        correct: 0,
        explanation: {
          en: "Training set is used to teach the model patterns in the data",
          es: "El conjunto de entrenamiento enseña patrones al modelo",
          de: "Der Trainingssatz lehrt dem Modell Muster in den Daten",
          nl: "De trainingsset leert het model patronen in de data"
        }
      },
      {
        question: {
          en: "What is the Test Set?",
          es: "¿Qué es el conjunto de prueba?",
          de: "Was ist der Testsatz?",
          nl: "Wat is de testset?"
        },
        options: [
          { en: "Data to evaluate model performance", es: "Datos para evaluar el modelo", de: "Daten zur Bewertung", nl: "Data om prestaties te evalueren" },
          { en: "Data to train the model", es: "Datos para entrenar", de: "Daten zum Trainieren", nl: "Data om te trainen" },
          { en: "Data to throw away", es: "Datos para descartar", de: "Daten zum Wegwerfen", nl: "Data om weg te gooien" },
          { en: "Data from tests", es: "Datos de exámenes", de: "Daten von Tests", nl: "Data van examens" }
        ],
        correct: 0,
        explanation: {
          en: "Test set evaluates how well the model performs on unseen data",
          es: "El conjunto de prueba evalúa el rendimiento con datos no vistos",
          de: "Der Testsatz bewertet die Leistung bei ungesehenen Daten",
          nl: "De testset evalueert prestaties op ongeziene data"
        }
      },
      {
        question: {
          en: "Why split data into training and testing?",
          es: "¿Por qué dividir datos en entrenamiento y prueba?",
          de: "Warum Daten in Training und Test aufteilen?",
          nl: "Waarom data splitsen in training en test?"
        },
        options: [
          { en: "To check if model works on new data", es: "Para verificar si funciona con datos nuevos", de: "Um zu prüfen ob das Modell bei neuen Daten funktioniert", nl: "Om te controleren of het model werkt op nieuwe data" },
          { en: "To save disk space", es: "Para ahorrar espacio", de: "Um Speicherplatz zu sparen", nl: "Om schijfruimte te besparen" },
          { en: "To make it slower", es: "Para hacerlo más lento", de: "Um es langsamer zu machen", nl: "Om het langzamer te maken" },
          { en: "It\'s not necessary", es: "No es necesario", de: "Es ist nicht notwendig", nl: "Het is niet nodig" }
        ],
        correct: 0,
        explanation: {
          en: "Splitting prevents overfitting and ensures model generalizes to new data",
          es: "Dividir previene sobreajuste y asegura generalización",
          de: "Aufteilen verhindert Überanpassung und stellt Generalisierung sicher",
          nl: "Splitsen voorkomt overfitting en zorgt voor generalisatie"
        }
      },
      {
        question: {
          en: "Is Email spam detection a classification or regression task?",
          es: "¿Es Email spam detection clasificación o regresión?",
          de: "Ist Email spam detection Klassifikation oder Regression?",
          nl: "Is Email spam detection classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Email spam detection is classification - predicts categories",
          es: "Email spam detection es clasificación - predice categorías",
          de: "Email spam detection ist Klassifikation - sagt Kategorien vorher",
          nl: "Email spam detection is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is House price prediction a classification or regression task?",
          es: "¿Es House price prediction clasificación o regresión?",
          de: "Ist House price prediction Klassifikation oder Regression?",
          nl: "Is House price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "House price prediction is regression - predicts continuous values",
          es: "House price prediction es regresión - predice valores continuos",
          de: "House price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "House price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Disease diagnosis a classification or regression task?",
          es: "¿Es Disease diagnosis clasificación o regresión?",
          de: "Ist Disease diagnosis Klassifikation oder Regression?",
          nl: "Is Disease diagnosis classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Disease diagnosis is classification - predicts categories",
          es: "Disease diagnosis es clasificación - predice categorías",
          de: "Disease diagnosis ist Klassifikation - sagt Kategorien vorher",
          nl: "Disease diagnosis is classificatie - voorspelt categorieën"
        }
      },
      {
        question: {
          en: "Is Stock price prediction a classification or regression task?",
          es: "¿Es Stock price prediction clasificación o regresión?",
          de: "Ist Stock price prediction Klassifikation oder Regression?",
          nl: "Is Stock price prediction classificatie of regressie?"
        },
        options: [
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Stock price prediction is regression - predicts continuous values",
          es: "Stock price prediction es regresión - predice valores continuos",
          de: "Stock price prediction ist Regression - sagt kontinuierliche Werte vorher",
          nl: "Stock price prediction is regressie - voorspelt continue waarden"
        }
      },
      {
        question: {
          en: "Is Image recognition a classification or regression task?",
          es: "¿Es Image recognition clasificación o regresión?",
          de: "Ist Image recognition Klassifikation oder Regression?",
          nl: "Is Image recognition classificatie of regressie?"
        },
        options: [
          { en: "Classification", es: "Clasificación", de: "Klassifikation", nl: "Classificatie" },
          { en: "Regression", es: "Regresión", de: "Regression", nl: "Regressie" },
          { en: "Neither", es: "Ninguno", de: "Keines", nl: "Geen van beide" },
          { en: "Both", es: "Ambos", de: "Beide", nl: "Beide" }
        ],
        correct: 0,
        explanation: {
          en: "Image recognition is classification - predicts categories",
          es: "Image recognition es clasificación - predice categorías",
          de: "Image recognition ist Klassifikation - sagt Kategorien vorher",
          nl: "Image recognition is classificatie - voorspelt categorieën"
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level2;
  }
})();