// Neurale netwerken Quiz - Level 3
(function() {
  const level3 = {
    name: {
          "en": "Learning Process",
          "es": "Proceso de Aprendizaje",
          "de": "Lernprozess",
          "nl": "Leerproces"
    },
    questions: [
      {
        question: {
                  "en": "What is the main difference between supervised and unsupervised learning?",
                  "es": "¿Cuál es la principal diferencia entre aprendizaje supervisado y no supervisado?",
                  "de": "Was ist der Hauptunterschied zwischen überwachtem und unüberwachtem Lernen?",
                  "nl": "Wat is het hoofdverschil tussen supervised en unsupervised learning?"
        },
        options: [
        {
                  "en": "Supervised learning requires more computational power",
                  "es": "El aprendizaje supervisado requiere más poder computacional",
                  "de": "Überwachtes Lernen erfordert mehr Rechenleistung",
                  "nl": "Supervised learning vereist meer rekenkracht"
        },
        {
                  "en": "Supervised learning only works with images",
                  "es": "El aprendizaje supervisado solo funciona con imágenes",
                  "de": "Überwachtes Lernen funktioniert nur mit Bildern",
                  "nl": "Supervised learning werkt alleen met afbeeldingen"
        },
        {
                  "en": "Supervised learning is faster than unsupervised learning",
                  "es": "El aprendizaje supervisado es más rápido que el no supervisado",
                  "de": "Überwachtes Lernen ist schneller als unüberwachtes Lernen",
                  "nl": "Supervised learning is sneller dan unsupervised learning"
        },
        {
                  "en": "Supervised learning uses labeled data while unsupervised learning finds patterns in unlabeled data",
                  "es": "El aprendizaje supervisado usa datos etiquetados mientras que el no supervisado encuentra patrones en datos no etiquetados",
                  "de": "Überwachtes Lernen verwendet beschriftete Daten während unüberwachtes Lernen Muster in unbeschrifteten Daten findet",
                  "nl": "Supervised learning gebruikt gelabelde data terwijl unsupervised learning patronen vindt in ongelabelde data"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Supervised learning trains on labeled examples where both input and desired output are known, like image classification with labeled categories. Unsupervised learning discovers hidden patterns in data without labels, such as clustering or dimensionality reduction.",
                  "es": "El aprendizaje supervisado entrena con ejemplos etiquetados donde tanto la entrada como la salida deseada son conocidas, como clasificación de imágenes con categorías etiquetadas. El aprendizaje no supervisado descubre patrones ocultos en datos sin etiquetas, como agrupamiento o reducción de dimensionalidad.",
                  "de": "Überwachtes Lernen trainiert auf beschrifteten Beispielen wo sowohl Eingabe als auch gewünschte Ausgabe bekannt sind, wie Bildklassifikation mit beschrifteten Kategorien. Unüberwachtes Lernen entdeckt versteckte Muster in Daten ohne Beschriftungen, wie Clustering oder Dimensionalitätsreduktion.",
                  "nl": "Supervised learning traint op gelabelde voorbeelden waar zowel invoer als gewenste uitvoer bekend zijn, zoals beeldclassificatie met gelabelde categorieën. Unsupervised learning ontdekt verborgen patronen in data zonder labels, zoals clustering of dimensionaliteitsreductie."
        }
      },
      {
        question: {
                  "en": "What is overfitting in neural networks?",
                  "es": "¿Qué es el sobreajuste en las redes neuronales?",
                  "de": "Was ist Überanpassung in neuronalen Netzwerken?",
                  "nl": "Wat is overfitting in neurale netwerken?"
        },
        options: [
        {
                  "en": "When the network has too few parameters",
                  "es": "Cuando la red tiene muy pocos parámetros",
                  "de": "Wenn das Netzwerk zu wenige Parameter hat",
                  "nl": "Wanneer het netwerk te weinig parameters heeft"
        },
        {
                  "en": "When a model is too simple to capture patterns",
                  "es": "Cuando un modelo es demasiado simple para capturar patrones",
                  "de": "Wenn ein Modell zu einfach ist um Muster zu erfassen",
                  "nl": "Wanneer een model te simpel is om patronen vast te leggen"
        },
        {
                  "en": "When training takes too much time",
                  "es": "Cuando el entrenamiento toma demasiado tiempo",
                  "de": "Wenn das Training zu viel Zeit braucht",
                  "nl": "Wanneer training te veel tijd kost"
        },
        {
                  "en": "When a model learns the training data too well and performs poorly on new data",
                  "es": "Cuando un modelo aprende los datos de entrenamiento demasiado bien y funciona mal en datos nuevos",
                  "de": "Wenn ein Modell die Trainingsdaten zu gut lernt und schlecht bei neuen Daten abschneidet",
                  "nl": "Wanneer een model de trainingsdata te goed leert en slecht presteert op nieuwe data"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Overfitting occurs when a neural network memorizes the training data rather than learning generalizable patterns. The model performs excellently on training data but poorly on validation or test data because it hasn't learned to generalize to new, unseen examples.",
                  "es": "El sobreajuste ocurre cuando una red neuronal memoriza los datos de entrenamiento en lugar de aprender patrones generalizables. El modelo funciona excelentemente en datos de entrenamiento pero mal en datos de validación o prueba porque no ha aprendido a generalizar a ejemplos nuevos no vistos.",
                  "de": "Überanpassung tritt auf wenn ein neuronales Netzwerk die Trainingsdaten auswendig lernt statt verallgemeinerbare Muster zu lernen. Das Modell funktioniert hervorragend bei Trainingsdaten aber schlecht bei Validierungs- oder Testdaten weil es nicht gelernt hat auf neue ungesehene Beispiele zu verallgemeinern.",
                  "nl": "Overfitting treedt op wanneer een neuraal netwerk de trainingsdata uit het hoofd leert in plaats van generaliseerbare patronen te leren. Het model presteert uitstekend op trainingsdata maar slecht op validatie- of testdata omdat het niet heeft geleerd te generaliseren naar nieuwe, ongeziene voorbeelden."
        }
      },
      {
        question: {
                  "en": "What is the purpose of a validation set?",
                  "es": "¿Cuál es el propósito de un conjunto de validación?",
                  "de": "Was ist der Zweck eines Validierungssatzes?",
                  "nl": "Wat is het doel van een validatieset?"
        },
        options: [
        {
                  "en": "To speed up the training process",
                  "es": "Para acelerar el proceso de entrenamiento",
                  "de": "Um den Trainingsprozess zu beschleunigen",
                  "nl": "Om het trainingsproces te versnellen"
        },
        {
                  "en": "To replace the test set entirely",
                  "es": "Para reemplazar completamente el conjunto de prueba",
                  "de": "Um den Testsatz vollständig zu ersetzen",
                  "nl": "Om de testset volledig te vervangen"
        },
        {
                  "en": "To store backup copies of training data",
                  "es": "Para almacenar copias de respaldo de los datos de entrenamiento",
                  "de": "Um Sicherungskopien der Trainingsdaten zu speichern",
                  "nl": "Om back-upkopieën van trainingsdata op te slaan"
        },
        {
                  "en": "To evaluate model performance during training and tune hyperparameters without using test data",
                  "es": "Para evaluar el rendimiento del modelo durante el entrenamiento y ajustar hiperparámetros sin usar datos de prueba",
                  "de": "Um Modellleistung während des Trainings zu bewerten und Hyperparameter zu optimieren ohne Testdaten zu verwenden",
                  "nl": "Om modelprestaties tijdens training te evalueren en hyperparameters af te stellen zonder testdata te gebruiken"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "A validation set is used to monitor training progress and make decisions about hyperparameters, model architecture, and when to stop training. It helps detect overfitting and ensures the test set remains unbiased for final performance evaluation.",
                  "es": "Un conjunto de validación se usa para monitorear el progreso del entrenamiento y tomar decisiones sobre hiperparámetros, arquitectura del modelo y cuándo detener el entrenamiento. Ayuda a detectar sobreajuste y asegura que el conjunto de prueba permanezca imparcial para la evaluación final del rendimiento.",
                  "de": "Ein Validierungssatz wird verwendet um Trainingsfortschritt zu überwachen und Entscheidungen über Hyperparameter, Modellarchitektur und wann das Training zu stoppen ist zu treffen. Er hilft Überanpassung zu erkennen und stellt sicher dass der Testsatz für die finale Leistungsbewertung unvoreingenommen bleibt.",
                  "nl": "Een validatieset wordt gebruikt om trainingsvoortgang te monitoren en beslissingen te nemen over hyperparameters, modelarchitectuur en wanneer training te stoppen. Het helpt overfitting te detecteren en zorgt ervoor dat de testset onbevooroordeeld blijft voor finale prestatie-evaluatie."
        }
      },
      {
        question: {
                  "en": "What is underfitting in machine learning?",
                  "es": "¿Qué es el subajuste en el aprendizaje automático?",
                  "de": "Was ist Unteranpassung im maschinellen Lernen?",
                  "nl": "Wat is underfitting in machine learning?"
        },
        options: [
        {
                  "en": "When training data is insufficient",
                  "es": "Cuando los datos de entrenamiento son insuficientes",
                  "de": "Wenn Trainingsdaten unzureichend sind",
                  "nl": "Wanneer trainingsdata onvoldoende is"
        },
        {
                  "en": "When a model is too simple to capture the underlying patterns in the data",
                  "es": "Cuando un modelo es demasiado simple para capturar los patrones subyacentes en los datos",
                  "de": "Wenn ein Modell zu einfach ist um die zugrundeliegenden Muster in den Daten zu erfassen",
                  "nl": "Wanneer een model te simpel is om de onderliggende patronen in de data vast te leggen"
        },
        {
                  "en": "When the model has too many parameters",
                  "es": "Cuando el modelo tiene demasiados parámetros",
                  "de": "Wenn das Modell zu viele Parameter hat",
                  "nl": "Wanneer het model te veel parameters heeft"
        },
        {
                  "en": "When a model performs too well on training data",
                  "es": "Cuando un modelo funciona demasiado bien en los datos de entrenamiento",
                  "de": "Wenn ein Modell zu gut bei Trainingsdaten abschneidet",
                  "nl": "Wanneer een model te goed presteert op trainingsdata"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Underfitting occurs when a model is too simple or lacks sufficient capacity to learn the underlying patterns in the data. Both training and validation performance are poor because the model cannot capture the complexity of the relationship between inputs and outputs.",
                  "es": "El subajuste ocurre cuando un modelo es demasiado simple o carece de capacidad suficiente para aprender los patrones subyacentes en los datos. Tanto el rendimiento de entrenamiento como el de validación son pobres porque el modelo no puede capturar la complejidad de la relación entre entradas y salidas.",
                  "de": "Unteranpassung tritt auf wenn ein Modell zu einfach ist oder nicht genügend Kapazität hat um die zugrundeliegenden Muster in den Daten zu lernen. Sowohl Trainings- als auch Validierungsleistung sind schlecht weil das Modell die Komplexität der Beziehung zwischen Eingaben und Ausgaben nicht erfassen kann.",
                  "nl": "Underfitting treedt op wanneer een model te simpel is of onvoldoende capaciteit heeft om de onderliggende patronen in de data te leren. Zowel trainings- als validatieprestaties zijn slecht omdat het model de complexiteit van de relatie tussen invoer en uitvoer niet kan vastleggen."
        }
      },
      {
        question: {
                  "en": "What is cross-validation in machine learning?",
                  "es": "¿Qué es la validación cruzada en el aprendizaje automático?",
                  "de": "Was ist Kreuzvalidierung im maschinellen Lernen?",
                  "nl": "Wat is cross-validatie in machine learning?"
        },
        options: [
        {
                  "en": "A way to cross-reference different datasets",
                  "es": "Una forma de hacer referencias cruzadas entre diferentes conjuntos de datos",
                  "de": "Eine Art verschiedene Datensätze zu verkreuzen",
                  "nl": "Een manier om verschillende datasets kruislings te refereren"
        },
        {
                  "en": "A method to validate user inputs",
                  "es": "Un método para validar entradas de usuario",
                  "de": "Eine Methode um Benutzereingaben zu validieren",
                  "nl": "Een methode om gebruikersinvoer te valideren"
        },
        {
                  "en": "A technique that divides data into multiple folds to get more robust performance estimates",
                  "es": "Una técnica que divide los datos en múltiples pliegues para obtener estimaciones de rendimiento más robustas",
                  "de": "Eine Technik die Daten in mehrere Falten teilt um robustere Leistungsschätzungen zu erhalten",
                  "nl": "Een techniek die data opdeelt in meerdere vouwen om robuustere prestatieschattingen te krijgen"
        },
        {
                  "en": "A technique to combine multiple models",
                  "es": "Una técnica para combinar múltiples modelos",
                  "de": "Eine Technik um mehrere Modelle zu kombinieren",
                  "nl": "Een techniek om meerdere modellen te combineren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Cross-validation divides the dataset into k folds, trains on k-1 folds and validates on the remaining fold, repeating this process k times. This provides a more reliable estimate of model performance and reduces dependence on a particular train-validation split.",
                  "es": "La validación cruzada divide el conjunto de datos en k pliegues, entrena en k-1 pliegues y valida en el pliegue restante, repitiendo este proceso k veces. Esto proporciona una estimación más confiable del rendimiento del modelo y reduce la dependencia de una división particular de entrenamiento-validación.",
                  "de": "Kreuzvalidierung teilt den Datensatz in k Falten, trainiert auf k-1 Falten und validiert auf der verbleibenden Falte, wiederholt diesen Prozess k mal. Dies bietet eine zuverlässigere Schätzung der Modellleistung und reduziert Abhängigkeit von einer bestimmten Training-Validierung-Aufteilung.",
                  "nl": "Cross-validatie verdeelt de dataset in k vouwen, traint op k-1 vouwen en valideert op de resterende vouw, herhaalt dit proces k keer. Dit biedt een betrouwbaardere schatting van modelprestaties en vermindert afhankelijkheid van een bepaalde train-validatie verdeling."
        }
      },
      {
        question: {
                  "en": "What is reinforcement learning?",
                  "es": "¿Qué es el aprendizaje por refuerzo?",
                  "de": "Was ist Reinforcement Learning?",
                  "nl": "Wat is reinforcement learning?"
        },
        options: [
        {
                  "en": "A learning paradigm where an agent learns through trial and error by receiving rewards or penalties",
                  "es": "Un paradigma de aprendizaje donde un agente aprende a través de prueba y error al recibir recompensas o penalizaciones",
                  "de": "Ein Lernparadigma wo ein Agent durch Versuch und Irrtum lernt indem er Belohnungen oder Strafen erhält",
                  "nl": "Een leerparadigma waarbij een agent leert door trial-and-error door beloningen of straffen te ontvangen"
        },
        {
                  "en": "A technique to reinforce training data",
                  "es": "Una técnica para reforzar los datos de entrenamiento",
                  "de": "Eine Technik um Trainingsdaten zu verstärken",
                  "nl": "Een techniek om trainingsdata te versterken"
        },
        {
                  "en": "A method to strengthen neural network connections",
                  "es": "Un método para fortalecer las conexiones de la red neuronal",
                  "de": "Eine Methode um neuronale Netzwerkverbindungen zu stärken",
                  "nl": "Een methode om neurale netwerkverbindingen te versterken"
        },
        {
                  "en": "A way to add more layers to the network",
                  "es": "Una forma de agregar más capas a la red",
                  "de": "Eine Art mehr Schichten zum Netzwerk hinzuzufügen",
                  "nl": "Een manier om meer lagen aan het netwerk toe te voegen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Reinforcement learning is a machine learning paradigm where an agent learns to make decisions by interacting with an environment. The agent receives rewards for good actions and penalties for bad ones, gradually learning optimal behavior through experience.",
                  "es": "El aprendizaje por refuerzo es un paradigma de aprendizaje automático donde un agente aprende a tomar decisiones interactuando con un entorno. El agente recibe recompensas por buenas acciones y penalizaciones por las malas, aprendiendo gradualmente el comportamiento óptimo a través de la experiencia.",
                  "de": "Reinforcement Learning ist ein maschinelles Lernparadigma wo ein Agent lernt Entscheidungen zu treffen durch Interaktion mit einer Umgebung. Der Agent erhält Belohnungen für gute Aktionen und Strafen für schlechte, lernt allmählich optimales Verhalten durch Erfahrung.",
                  "nl": "Reinforcement learning is een machine learning paradigma waarbij een agent leert beslissingen te nemen door interactie met een omgeving. De agent ontvangt beloningen voor goede acties en straffen voor slechte, leert geleidelijk optimaal gedrag door ervaring."
        }
      },
      {
        question: {
                  "en": "What is the difference between online and offline learning?",
                  "es": "¿Cuál es la diferencia entre aprendizaje en línea y fuera de línea?",
                  "de": "Was ist der Unterschied zwischen Online- und Offline-Lernen?",
                  "nl": "Wat is het verschil tussen online en offline learning?"
        },
        options: [
        {
                  "en": "There is no difference between them",
                  "es": "No hay diferencia entre ellos",
                  "de": "Es gibt keinen Unterschied zwischen ihnen",
                  "nl": "Er is geen verschil tussen hen"
        },
        {
                  "en": "Online learning requires internet connection, offline learning doesn't",
                  "es": "El aprendizaje en línea requiere conexión a internet, el fuera de línea no",
                  "de": "Online-Lernen erfordert Internetverbindung, Offline-Lernen nicht",
                  "nl": "Online learning vereist internetverbinding, offline learning niet"
        },
        {
                  "en": "Online learning updates the model continuously with new data, while offline learning trains on a fixed dataset",
                  "es": "Aprendizaje en línea actualiza modelo continuamente con nuevos datos, mientras aprendizaje fuera línea entrena en conjunto datos fijo",
                  "de": "Online-Lernen aktualisiert das Modell kontinuierlich mit neuen Daten, während Offline-Lernen auf einem festen Datensatz trainiert",
                  "nl": "Online learning werkt het model continu bij met nieuwe data, terwijl offline learning traint op een vaste dataset"
        },
        {
                  "en": "Online learning is faster than offline learning",
                  "es": "El aprendizaje en línea es más rápido que el fuera de línea",
                  "de": "Online-Lernen ist schneller als Offline-Lernen",
                  "nl": "Online learning is sneller dan offline learning"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Online learning (incremental learning) continuously updates the model as new data arrives, making it suitable for streaming data and changing environments. Offline learning (batch learning) trains on a complete, fixed dataset and doesn't update until retrained on a new dataset.",
                  "es": "El aprendizaje en línea (aprendizaje incremental) actualiza continuamente el modelo cuando llegan nuevos datos, haciéndolo adecuado para datos de transmisión y entornos cambiantes. El aprendizaje fuera de línea (aprendizaje por lotes) entrena en un conjunto de datos completo y fijo y no se actualiza hasta ser reentrenado en un nuevo conjunto de datos.",
                  "de": "Online-Lernen (inkrementelles Lernen) aktualisiert kontinuierlich das Modell wenn neue Daten ankommen, macht es geeignet für Streaming-Daten und sich ändernde Umgebungen. Offline-Lernen (Batch-Lernen) trainiert auf einem vollständigen, festen Datensatz und aktualisiert nicht bis es auf einem neuen Datensatz neu trainiert wird.",
                  "nl": "Online learning (incrementeel leren) werkt het model continu bij wanneer nieuwe data arriveert, waardoor het geschikt is voor streaming data en veranderende omgevingen. Offline learning (batch learning) traint op een complete, vaste dataset en werkt niet bij tot het opnieuw getraind wordt op een nieuwe dataset."
        }
      },
      {
        question: {
                  "en": "What is transfer learning?",
                  "es": "¿Qué es el aprendizaje por transferencia?",
                  "de": "Was ist Transfer Learning?",
                  "nl": "Wat is transfer learning?"
        },
        options: [
        {
                  "en": "Converting one file format to another",
                  "es": "Convertir un formato de archivo a otro",
                  "de": "Ein Dateiformat in ein anderes umwandeln",
                  "nl": "Het converteren van één bestandsformaat naar een ander"
        },
        {
                  "en": "Moving data from one computer to another",
                  "es": "Mover datos de una computadora a otra",
                  "de": "Daten von einem Computer auf einen anderen übertragen",
                  "nl": "Data verplaatsen van de ene computer naar de andere"
        },
        {
                  "en": "Transferring weights between identical networks",
                  "es": "Transferir pesos entre redes idénticas",
                  "de": "Gewichte zwischen identischen Netzwerken übertragen",
                  "nl": "Gewichten overdragen tussen identieke netwerken"
        },
        {
                  "en": "Using knowledge from a pre-trained model on one task to improve learning on a related task",
                  "es": "Usar conocimiento de un modelo preentrenado en una tarea para mejorar el aprendizaje en una tarea relacionada",
                  "de": "Verwendung von Wissen aus einem vortrainierten Modell bei einer Aufgabe um das Lernen bei einer verwandten Aufgabe zu verbessern",
                  "nl": "Het gebruik van kennis van een voorgetraind model op één taak om het leren op een gerelateerde taak te verbeteren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Transfer learning leverages knowledge gained from training a model on one task to improve performance on a different but related task. This is particularly useful when you have limited training data for the target task, as you can build upon features learned from a larger dataset.",
                  "es": "El aprendizaje por transferencia aprovecha el conocimiento obtenido del entrenamiento de un modelo en una tarea para mejorar el rendimiento en una tarea diferente pero relacionada. Esto es particularmente útil cuando tienes datos de entrenamiento limitados para la tarea objetivo, ya que puedes construir sobre características aprendidas de un conjunto de datos más grande.",
                  "de": "Transfer Learning nutzt Wissen das beim Training eines Modells für eine Aufgabe gewonnen wurde um die Leistung bei einer anderen aber verwandten Aufgabe zu verbessern. Dies ist besonders nützlich wenn Sie begrenzte Trainingsdaten für die Zielaufgabe haben, da Sie auf Merkmalen aufbauen können die aus einem größeren Datensatz gelernt wurden.",
                  "nl": "Transfer learning maakt gebruik van kennis verkregen uit het trainen van een model op één taak om prestaties op een andere maar gerelateerde taak te verbeteren. Dit is bijzonder nuttig wanneer je beperkte trainingsdata hebt voor de doeltaak, omdat je kunt voortbouwen op kenmerken geleerd van een grotere dataset."
        }
      },
      {
        question: {
                  "en": "What is early stopping in neural network training?",
                  "es": "¿Qué es la parada temprana en el entrenamiento de redes neuronales?",
                  "de": "Was ist Early Stopping beim Training neuronaler Netzwerke?",
                  "nl": "Wat is early stopping bij het trainen van neurale netwerken?"
        },
        options: [
        {
                  "en": "Terminating training when loss reaches zero",
                  "es": "Terminar el entrenamiento cuando la pérdida llega a cero",
                  "de": "Training beenden wenn der Verlust null erreicht",
                  "nl": "Training beëindigen wanneer verlies nul bereikt"
        },
        {
                  "en": "Stopping training due to computational limits",
                  "es": "Detener el entrenamiento debido a límites computacionales",
                  "de": "Training aufgrund von Rechengrenzen stoppen",
                  "nl": "Training stoppen vanwege computationele beperkingen"
        },
        {
                  "en": "A technique that stops training when validation performance stops improving to prevent overfitting",
                  "es": "Una técnica que detiene el entrenamiento cuando el rendimiento de validación deja de mejorar para prevenir el sobreajuste",
                  "de": "Eine Technik die das Training stoppt wenn die Validierungsleistung aufhört sich zu verbessern um Überanpassung zu verhindern",
                  "nl": "Een techniek die training stopt wanneer validatieprestaties stoppen met verbeteren om overfitting te voorkomen"
        },
        {
                  "en": "Stopping training after a fixed number of epochs",
                  "es": "Detener el entrenamiento después de un número fijo de épocas",
                  "de": "Training nach einer festen Anzahl von Epochen stoppen",
                  "nl": "Training stoppen na een vast aantal epochs"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Early stopping monitors validation performance during training and stops when it begins to degrade, even if training loss continues to decrease. This prevents overfitting by stopping before the model memorizes the training data too well.",
                  "es": "La parada temprana monitorea el rendimiento de validación durante el entrenamiento y se detiene cuando comienza a degradarse, incluso si la pérdida de entrenamiento continúa disminuyendo. Esto previene el sobreajuste deteniéndose antes de que el modelo memorice demasiado bien los datos de entrenamiento.",
                  "de": "Early Stopping überwacht die Validierungsleistung während des Trainings und stoppt wenn sie sich zu verschlechtern beginnt, auch wenn der Trainingsverlust weiter abnimmt. Dies verhindert Überanpassung durch Stoppen bevor das Modell die Trainingsdaten zu gut auswendig lernt.",
                  "nl": "Early stopping monitort validatieprestaties tijdens training en stopt wanneer deze beginnen te verslechteren, zelfs als trainingsverlies blijft afnemen. Dit voorkomt overfitting door te stoppen voordat het model de trainingsdata te goed uit het hoofd leert."
        }
      },
      {
        question: {
                  "en": "What is regularization in neural networks?",
                  "es": "¿Qué es la regularización en las redes neuronales?",
                  "de": "Was ist Regularisierung in neuronalen Netzwerken?",
                  "nl": "Wat is regularisatie in neurale netwerken?"
        },
        options: [
        {
                  "en": "Making the network structure more regular",
                  "es": "Hacer que la estructura de la red sea más regular",
                  "de": "Die Netzwerkstruktur regelmäßiger machen",
                  "nl": "De netwerkstructuur regelmatiger maken"
        },
        {
                  "en": "Techniques to prevent overfitting by adding constraints or penalties to the model",
                  "es": "Técnicas para prevenir el sobreajuste agregando restricciones o penalizaciones al modelo",
                  "de": "Techniken um Überanpassung zu verhindern durch Hinzufügen von Beschränkungen oder Strafen zum Modell",
                  "nl": "Technieken om overfitting te voorkomen door beperkingen of straffen aan het model toe te voegen"
        },
        {
                  "en": "Standardizing input data",
                  "es": "Estandarizar datos de entrada",
                  "de": "Eingabedaten standardisieren",
                  "nl": "Invoerdata standaardiseren"
        },
        {
                  "en": "Setting all weights to regular intervals",
                  "es": "Establecer todos los pesos en intervalos regulares",
                  "de": "Alle Gewichte auf regelmäßige Intervalle setzen",
                  "nl": "Alle gewichten op regelmatige intervallen instellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Regularization encompasses various techniques like L1/L2 penalties, dropout, and weight decay that constrain the model's complexity to prevent overfitting. These methods help the model generalize better to unseen data by discouraging overly complex patterns.",
                  "es": "La regularización abarca varias técnicas como penalizaciones L1/L2, dropout y decay de pesos que restringen la complejidad del modelo para prevenir el sobreajuste. Estos métodos ayudan al modelo a generalizar mejor a datos no vistos desalentando patrones excesivamente complejos.",
                  "de": "Regularisierung umfasst verschiedene Techniken wie L1/L2-Strafen, Dropout und Weight Decay die die Komplexität des Modells beschränken um Überanpassung zu verhindern. Diese Methoden helfen dem Modell besser auf ungesehene Daten zu generalisieren durch Entmutigung übermäßig komplexer Muster.",
                  "nl": "Regularisatie omvat verschillende technieken zoals L1/L2-straffen, dropout en weight decay die de complexiteit van het model beperken om overfitting te voorkomen. Deze methoden helpen het model beter te generaliseren naar ongeziene data door het ontmoedigen van overly complexe patronen."
        }
      },
      {
        question: {
                  "en": "What is the vanishing gradient problem?",
                  "es": "¿Qué es el problema del gradiente que se desvanece?",
                  "de": "Was ist das Problem des verschwindenden Gradienten?",
                  "nl": "Wat is het probleem van verdwijnende gradiënten?"
        },
        options: [
        {
                  "en": "When gradients disappear due to computational errors",
                  "es": "Cuando los gradientes desaparecen debido a errores computacionales",
                  "de": "Wenn Gradienten aufgrund von Rechenfehlern verschwinden",
                  "nl": "Wanneer gradiënten verdwijnen door computationele fouten"
        },
        {
                  "en": "When the network loses gradient information permanently",
                  "es": "Cuando la red pierde información de gradiente permanentemente",
                  "de": "Wenn das Netzwerk Gradienteninformation dauerhaft verliert",
                  "nl": "Wanneer het netwerk gradiëntinformatie permanent verliest"
        },
        {
                  "en": "When gradients become very small in deep networks, making it difficult to train early layers",
                  "es": "Cuando los gradientes se vuelven muy pequeños en redes profundas, dificultando el entrenamiento de las primeras capas",
                  "de": "Wenn Gradienten in tiefen Netzwerken sehr klein werden und es schwierig machen frühe Schichten zu trainieren",
                  "nl": "Wanneer gradiënten zeer klein worden in diepe netwerken, waardoor het moeilijk wordt om vroege lagen te trainen"
        },
        {
                  "en": "When the learning rate is set too high",
                  "es": "Cuando la tasa de aprendizaje se establece demasiado alta",
                  "de": "Wenn die Lernrate zu hoch eingestellt ist",
                  "nl": "Wanneer de leersnelheid te hoog is ingesteld"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "The vanishing gradient problem occurs in deep neural networks where gradients become exponentially smaller as they propagate backward through layers. This makes it extremely difficult to update weights in early layers, effectively preventing them from learning meaningful representations.",
                  "es": "El problema del gradiente que se desvanece ocurre en redes neuronales profundas donde los gradientes se vuelven exponencialmente más pequeños al propagarse hacia atrás a través de las capas. Esto hace extremadamente difícil actualizar pesos en las primeras capas, evitando efectivamente que aprendan representaciones significativas.",
                  "de": "Das Problem des verschwindenden Gradienten tritt in tiefen neuronalen Netzwerken auf wo Gradienten exponentiell kleiner werden wenn sie rückwärts durch Schichten propagieren. Dies macht es extrem schwierig Gewichte in frühen Schichten zu aktualisieren, verhindert effektiv dass sie bedeutungsvolle Darstellungen lernen.",
                  "nl": "Het probleem van verdwijnende gradiënten treedt op in diepe neurale netwerken waar gradiënten exponentieel kleiner worden als ze achterwaarts door lagen propageren. Dit maakt het extreem moeilijk om gewichten in vroege lagen bij te werken, waardoor ze effectief worden verhinderd betekenisvolle representaties te leren."
        }
      },
      {
        question: {
                  "en": "What is the exploding gradient problem?",
                  "es": "¿Qué es el problema del gradiente explosivo?",
                  "de": "Was ist das Problem explodierender Gradienten?",
                  "nl": "Wat is het probleem van exploderende gradiënten?"
        },
        options: [
        {
                  "en": "When the training data becomes too large",
                  "es": "Cuando los datos de entrenamiento se vuelven demasiado grandes",
                  "de": "Wenn die Trainingsdaten zu groß werden",
                  "nl": "Wanneer de trainingsdata te groot wordt"
        },
        {
                  "en": "When computational resources are exceeded",
                  "es": "Cuando se exceden los recursos computacionales",
                  "de": "Wenn Rechenressourcen überschritten werden",
                  "nl": "Wanneer computationele bronnen worden overschreden"
        },
        {
                  "en": "When the network architecture explodes in size",
                  "es": "Cuando la arquitectura de la red explota en tamaño",
                  "de": "Wenn die Netzwerkarchitektur in der Größe explodiert",
                  "nl": "Wanneer de netwerkarchitectuur in grootte explodeert"
        },
        {
                  "en": "When gradients become extremely large, causing unstable training and weight updates",
                  "es": "Cuando los gradientes se vuelven extremadamente grandes, causando entrenamiento inestable y actualizaciones de pesos",
                  "de": "Wenn Gradienten extrem groß werden und instabiles Training und Gewichtsaktualisierungen verursachen",
                  "nl": "Wanneer gradiënten extreem groot worden, wat instabiele training en gewichtupdates veroorzaakt"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "The exploding gradient problem occurs when gradients become extremely large during backpropagation, leading to unstable training where weights change drastically. This can cause the model to diverge and fail to converge to a solution.",
                  "es": "El problema del gradiente explosivo ocurre cuando los gradientes se vuelven extremadamente grandes durante la retropropagación, llevando a entrenamiento inestable donde los pesos cambian drásticamente. Esto puede causar que el modelo diverja y falle en converger a una solución.",
                  "de": "Das Problem explodierender Gradienten tritt auf wenn Gradienten während der Rückpropagation extrem groß werden, was zu instabilem Training führt wo sich Gewichte drastisch ändern. Dies kann dazu führen dass das Modell divergiert und nicht zu einer Lösung konvergiert.",
                  "nl": "Het probleem van exploderende gradiënten treedt op wanneer gradiënten extreem groot worden tijdens backpropagation, wat leidt tot instabiele training waarbij gewichten drastisch veranderen. Dit kan ervoor zorgen dat het model divergeert en er niet in slaagt te convergeren naar een oplossing."
        }
      },
      {
        question: {
                  "en": "What is gradient clipping?",
                  "es": "¿Qué es el recorte de gradiente?",
                  "de": "Was ist Gradient Clipping?",
                  "nl": "Wat is gradient clipping?"
        },
        options: [
        {
                  "en": "Reducing the number of training samples",
                  "es": "Reducir el número de muestras de entrenamiento",
                  "de": "Die Anzahl der Trainingsproben reduzieren",
                  "nl": "Het aantal trainingssteekproeven verminderen"
        },
        {
                  "en": "Removing unnecessary gradients from the network",
                  "es": "Eliminar gradientes innecesarios de la red",
                  "de": "Unnötige Gradienten aus dem Netzwerk entfernen",
                  "nl": "Onnodige gradiënten uit het netwerk verwijderen"
        },
        {
                  "en": "Cutting connections between layers",
                  "es": "Cortar conexiones entre capas",
                  "de": "Verbindungen zwischen Schichten schneiden",
                  "nl": "Verbindingen tussen lagen doorsnijden"
        },
        {
                  "en": "A technique to limit gradient values to prevent the exploding gradient problem",
                  "es": "Una técnica para limitar los valores de gradiente para prevenir el problema del gradiente explosivo",
                  "de": "Eine Technik um Gradientenwerte zu begrenzen um das Problem explodierender Gradienten zu verhindern",
                  "nl": "Een techniek om gradiëntwaarden te begrenzen om het probleem van exploderende gradiënten te voorkomen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Gradient clipping is a technique that caps gradient values at a predefined threshold during training. When gradients exceed this threshold, they are scaled down to prevent the exploding gradient problem and maintain training stability.",
                  "es": "El recorte de gradiente es una técnica que limita los valores de gradiente en un umbral predefinido durante el entrenamiento. Cuando los gradientes exceden este umbral, se escalan hacia abajo para prevenir el problema del gradiente explosivo y mantener la estabilidad del entrenamiento.",
                  "de": "Gradient Clipping ist eine Technik die Gradientenwerte bei einem vordefinierten Schwellenwert während des Trainings begrenzt. Wenn Gradienten diesen Schwellenwert überschreiten, werden sie herunterskaliert um das Problem explodierender Gradienten zu verhindern und Trainingsstabilität zu erhalten.",
                  "nl": "Gradient clipping is een techniek die gradiëntwaarden beperkt tot een voorgedefinieerde drempelwaarde tijdens training. Wanneer gradiënten deze drempel overschrijden, worden ze naar beneden geschaald om het probleem van exploderende gradiënten te voorkomen en trainingsstabiliteit te behouden."
        }
      },
      {
        question: {
                  "en": "What is curriculum learning?",
                  "es": "¿Qué es el aprendizaje curricular?",
                  "de": "Was ist Curriculum Learning?",
                  "nl": "Wat is curriculum learning?"
        },
        options: [
        {
                  "en": "Training multiple models simultaneously",
                  "es": "Entrenar múltiples modelos simultáneamente",
                  "de": "Mehrere Modelle gleichzeitig trainieren",
                  "nl": "Meerdere modellen tegelijkertijd trainen"
        },
        {
                  "en": "Learning about school curricula",
                  "es": "Aprender sobre planes de estudio escolares",
                  "de": "Über Schulcurricula lernen",
                  "nl": "Leren over schoolcurricula"
        },
        {
                  "en": "A training strategy that presents examples from easy to difficult, mimicking human learning",
                  "es": "Una estrategia de entrenamiento que presenta ejemplos de fácil a difícil, imitando el aprendizaje humano",
                  "de": "Eine Trainingsstrategie die Beispiele von einfach zu schwierig präsentiert, menschliches Lernen nachahmend",
                  "nl": "Een trainingsstrategie die voorbeelden van gemakkelijk naar moeilijk presenteert, menselijk leren nabootsend"
        },
        {
                  "en": "A method to organize training data alphabetically",
                  "es": "Un método para organizar datos de entrenamiento alfabéticamente",
                  "de": "Eine Methode um Trainingsdaten alphabetisch zu organisieren",
                  "nl": "Een methode om trainingsdata alfabetisch te organiseren"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Curriculum learning is inspired by how humans learn - starting with simple concepts and gradually moving to more complex ones. By training neural networks on easier examples first, then progressively introducing harder ones, models often achieve better performance and faster convergence.",
                  "es": "El aprendizaje curricular se inspira en cómo aprenden los humanos - comenzando con conceptos simples y moviéndose gradualmente a otros más complejos. Al entrenar redes neuronales en ejemplos más fáciles primero, luego introducir progresivamente los más difíciles, los modelos a menudo logran mejor rendimiento y convergencia más rápida.",
                  "de": "Curriculum Learning ist inspiriert davon wie Menschen lernen - beginnend mit einfachen Konzepten und sich allmählich zu komplexeren bewegend. Durch Training neuronaler Netzwerke auf einfacheren Beispielen zuerst, dann progressives Einführen schwierigerer, erreichen Modelle oft bessere Leistung und schnellere Konvergenz.",
                  "nl": "Curriculum learning is geïnspireerd door hoe mensen leren - beginnend met eenvoudige concepten en geleidelijk overgaand naar complexere. Door neurale netwerken eerst te trainen op gemakkelijkere voorbeelden, en dan progressief moeilijkere te introduceren, bereiken modellen vaak betere prestaties en snellere convergentie."
        }
      },
      {
        question: {
                  "en": "What is data augmentation in machine learning?",
                  "es": "¿Qué es la aumentación de datos en el aprendizaje automático?",
                  "de": "Was ist Datenaugmentation im maschinellen Lernen?",
                  "nl": "Wat is data-augmentatie in machine learning?"
        },
        options: [
        {
                  "en": "Adding more layers to the model",
                  "es": "Agregar más capas al modelo",
                  "de": "Mehr Schichten zum Modell hinzufügen",
                  "nl": "Meer lagen aan het model toevoegen"
        },
        {
                  "en": "Collecting more real-world data",
                  "es": "Recopilar más datos del mundo real",
                  "de": "Mehr reale Daten sammeln",
                  "nl": "Meer echte data verzamelen"
        },
        {
                  "en": "Increasing the size of the neural network",
                  "es": "Aumentar el tamaño de la red neuronal",
                  "de": "Die Größe des neuronalen Netzwerks erhöhen",
                  "nl": "De grootte van het neurale netwerk vergroten"
        },
        {
                  "en": "Creating additional training examples by applying transformations to existing data",
                  "es": "Crear ejemplos de entrenamiento adicionales aplicando transformaciones a datos existentes",
                  "de": "Zusätzliche Trainingsbeispiele erstellen durch Anwendung von Transformationen auf bestehende Daten",
                  "nl": "Het creëren van aanvullende trainingsvoorbeelden door transformaties toe te passen op bestaande data"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Data augmentation artificially increases the training dataset size by creating modified versions of existing examples. Common techniques include rotation, scaling, cropping, and adding noise. This helps prevent overfitting and improves model generalization.",
                  "es": "La aumentación de datos aumenta artificialmente el tamaño del conjunto de datos de entrenamiento creando versiones modificadas de ejemplos existentes. Las técnicas comunes incluyen rotación, escalado, recorte y agregar ruido. Esto ayuda a prevenir el sobreajuste y mejora la generalización del modelo.",
                  "de": "Datenaugmentation erhöht künstlich die Größe des Trainingsdatensatzes durch Erstellen modifizierter Versionen bestehender Beispiele. Häufige Techniken umfassen Rotation, Skalierung, Zuschneiden und Hinzufügen von Rauschen. Dies hilft Überanpassung zu verhindern und verbessert Modellgeneralisierung.",
                  "nl": "Data-augmentatie verhoogt kunstmatig de grootte van de trainingsdataset door gemodificeerde versies van bestaande voorbeelden te creëren. Veelvoorkomende technieken zijn rotatie, schaling, bijsnijden en ruis toevoegen. Dit helpt overfitting te voorkomen en verbetert modelgeneralisatie."
        }
      },
      {
        question: {
                  "en": "What is ensemble learning?",
                  "es": "¿Qué es el aprendizaje en conjunto?",
                  "de": "Was ist Ensemble Learning?",
                  "nl": "Wat is ensemble learning?"
        },
        options: [
        {
                  "en": "Training one large model instead of many small ones",
                  "es": "Entrenar un modelo grande en lugar de muchos pequeños",
                  "de": "Ein großes Modell trainieren statt vieler kleiner",
                  "nl": "Één groot model trainen in plaats van veel kleine"
        },
        {
                  "en": "Using the same model multiple times",
                  "es": "Usar el mismo modelo múltiples veces",
                  "de": "Dasselbe Modell mehrmals verwenden",
                  "nl": "Hetzelfde model meerdere keren gebruiken"
        },
        {
                  "en": "Combining multiple models to make better predictions than any individual model",
                  "es": "Combinar múltiples modelos para hacer mejores predicciones que cualquier modelo individual",
                  "de": "Mehrere Modelle kombinieren um bessere Vorhersagen zu machen als jedes einzelne Modell",
                  "nl": "Het combineren van meerdere modellen om betere voorspellingen te maken dan elk individueel model"
        },
        {
                  "en": "Training models to play music together",
                  "es": "Entrenar modelos para tocar música juntos",
                  "de": "Modelle trainieren um zusammen Musik zu spielen",
                  "nl": "Modellen trainen om samen muziek te maken"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Ensemble learning combines predictions from multiple models to achieve better performance than individual models. Common techniques include bagging (like Random Forest), boosting (like XGBoost), and stacking. The idea is that different models make different types of errors, so combining them reduces overall error.",
                  "es": "El aprendizaje en conjunto combina predicciones de múltiples modelos para lograr mejor rendimiento que modelos individuales. Las técnicas comunes incluyen bagging (como Random Forest), boosting (como XGBoost) y stacking. La idea es que diferentes modelos cometen diferentes tipos de errores, así que combinarlos reduce el error general.",
                  "de": "Ensemble Learning kombiniert Vorhersagen von mehreren Modellen um bessere Leistung als einzelne Modelle zu erreichen. Häufige Techniken umfassen Bagging (wie Random Forest), Boosting (wie XGBoost) und Stacking. Die Idee ist dass verschiedene Modelle verschiedene Arten von Fehlern machen, also reduziert sie zu kombinieren den Gesamtfehler.",
                  "nl": "Ensemble learning combineert voorspellingen van meerdere modellen om betere prestaties te bereiken dan individuele modellen. Veelvoorkomende technieken zijn bagging (zoals Random Forest), boosting (zoals XGBoost) en stacking. Het idee is dat verschillende modellen verschillende soorten fouten maken, dus het combineren ervan vermindert de totale fout."
        }
      },
      {
        question: {
                  "en": "What is the bias-variance tradeoff?",
                  "es": "¿Qué es el compromiso sesgo-varianza?",
                  "de": "Was ist der Bias-Varianz-Tradeoff?",
                  "nl": "Wat is de bias-variantie afweging?"
        },
        options: [
        {
                  "en": "The fundamental tradeoff between a model's ability to fit training data and generalize to new data",
                  "es": "Compromiso fundamental entre capacidad modelo ajustarse a datos entrenamiento y generalizar a nuevos datos",
                  "de": "Der grundlegende Kompromiss zwischen der Fähigkeit eines Modells Trainingsdaten anzupassen und auf neue Daten zu generalisieren",
                  "nl": "De fundamentele afweging tussen het vermogen van een model om trainingsdata te fitten en te generaliseren naar nieuwe data"
        },
        {
                  "en": "The difference between training and testing accuracy",
                  "es": "La diferencia entre precisión de entrenamiento y prueba",
                  "de": "Der Unterschied zwischen Training und Test-Genauigkeit",
                  "nl": "Het verschil tussen trainings- en testnauwkeurigheid"
        },
        {
                  "en": "A method to balance positive and negative examples",
                  "es": "Un método para equilibrar ejemplos positivos y negativos",
                  "de": "Eine Methode um positive und negative Beispiele auszugleichen",
                  "nl": "Een methode om positieve en negatieve voorbeelden in evenwicht te brengen"
        },
        {
                  "en": "A technique to reduce computational complexity",
                  "es": "Una técnica para reducir la complejidad computacional",
                  "de": "Eine Technik um Rechenkomplexität zu reduzieren",
                  "nl": "Een techniek om computationele complexiteit te verminderen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The bias-variance tradeoff describes the fundamental tension in machine learning: high bias models (underfitting) are too simple and miss patterns, while high variance models (overfitting) are too complex and don't generalize. The goal is finding the sweet spot that minimizes total error.",
                  "es": "El compromiso sesgo-varianza describe la tensión fundamental en el aprendizaje automático: modelos de alto sesgo (subajuste) son demasiado simples y pierden patrones, mientras que modelos de alta varianza (sobreajuste) son demasiado complejos y no generalizan. El objetivo es encontrar el punto óptimo que minimiza el error total.",
                  "de": "Der Bias-Varianz-Tradeoff beschreibt die grundlegende Spannung im maschinellen Lernen: Modelle mit hohem Bias (Unteranpassung) sind zu einfach und verpassen Muster, während Modelle mit hoher Varianz (Überanpassung) zu komplex sind und nicht generalisieren. Das Ziel ist den optimalen Punkt zu finden der den Gesamtfehler minimiert.",
                  "nl": "De bias-variantie afweging beschrijft de fundamentele spanning in machine learning: hoge bias modellen (underfitting) zijn te simpel en missen patronen, terwijl hoge variantie modellen (overfitting) te complex zijn en niet generaliseren. Het doel is het vinden van het optimale punt dat de totale fout minimaliseert."
        }
      },
      {
        question: {
                  "en": "What is dropout and how does it prevent overfitting?",
                  "es": "¿Qué es dropout y cómo previene el sobreajuste?",
                  "de": "Was ist Dropout und wie verhindert es Überanpassung?",
                  "nl": "Wat is dropout en hoe voorkomt het overfitting?"
        },
        options: [
        {
                  "en": "Removing students from training programs",
                  "es": "Eliminar estudiantes de programas de entrenamiento",
                  "de": "Studenten aus Trainingsprogrammen entfernen",
                  "nl": "Studenten uit trainingsprogramma's verwijderen"
        },
        {
                  "en": "Deleting unnecessary training data",
                  "es": "Eliminar datos de entrenamiento innecesarios",
                  "de": "Unnötige Trainingsdaten löschen",
                  "nl": "Onnodige trainingsdata verwijderen"
        },
        {
                  "en": "A regularization technique that randomly deactivates neurons during training to prevent co-adaptation",
                  "es": "Una técnica de regularización que desactiva aleatoriamente neuronas durante el entrenamiento para prevenir la co-adaptación",
                  "de": "Eine Regularisierungstechnik die zufällig Neuronen während des Trainings deaktiviert um Co-Adaptation zu verhindern",
                  "nl": "Een regularisatietechniek die willekeurig neuronen deactiveert tijdens training om co-adaptatie te voorkomen"
        },
        {
                  "en": "Stopping training early",
                  "es": "Detener el entrenamiento temprano",
                  "de": "Training früh stoppen",
                  "nl": "Training vroeg stoppen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Dropout randomly sets a fraction of neurons to zero during each training step, forcing the network to not rely on specific neurons and preventing co-adaptation. This creates a more robust model that generalizes better to new data by reducing overfitting.",
                  "es": "Dropout establece aleatoriamente una fracción de neuronas a cero durante cada paso de entrenamiento, forzando a la red a no depender de neuronas específicas y previniendo la co-adaptación. Esto crea un modelo más robusto que generaliza mejor a nuevos datos reduciendo el sobreajuste.",
                  "de": "Dropout setzt zufällig einen Bruchteil von Neuronen auf null während jedem Trainingsschritt, zwingt das Netzwerk nicht auf spezifische Neuronen zu verlassen und verhindert Co-Adaptation. Dies erstellt ein robusteres Modell das besser auf neue Daten generalisiert durch Reduzierung von Überanpassung.",
                  "nl": "Dropout stelt willekeurig een fractie van neuronen in op nul tijdens elke trainingsstap, waardoor het netwerk gedwongen wordt niet te vertrouwen op specifieke neuronen en co-adaptatie wordt voorkomen. Dit creëert een robuuster model dat beter generaliseert naar nieuwe data door overfitting te verminderen."
        }
      },
      {
        question: {
                  "en": "What is the difference between generative and discriminative models?",
                  "es": "¿Cuál es la diferencia entre modelos generativos y discriminativos?",
                  "de": "Was ist der Unterschied zwischen generativen und diskriminativen Modellen?",
                  "nl": "Wat is het verschil tussen generatieve en discriminatieve modellen?"
        },
        options: [
        {
                  "en": "Generative models only work with images",
                  "es": "Los modelos generativos solo funcionan con imágenes",
                  "de": "Generative Modelle funktionieren nur mit Bildern",
                  "nl": "Generatieve modellen werken alleen met afbeeldingen"
        },
        {
                  "en": "Generative models learn the joint probability distribution while discriminative models learn decision boundaries",
                  "es": "Los modelos generativos aprenden la distribución de probabilidad conjunta mientras que los modelos discriminativos aprenden fronteras de decisión",
                  "de": "Generative Modelle lernen die gemeinsame Wahrscheinlichkeitsverteilung während diskriminative Modelle Entscheidungsgrenzen lernen",
                  "nl": "Generatieve modellen leren de gezamenlijke waarschijnlijkheidsverdeling terwijl discriminatieve modellen beslissingsgrenzen leren"
        },
        {
                  "en": "There is no significant difference",
                  "es": "No hay diferencia significativa",
                  "de": "Es gibt keinen signifikanten Unterschied",
                  "nl": "Er is geen significant verschil"
        },
        {
                  "en": "Generative models are faster than discriminative models",
                  "es": "Los modelos generativos son más rápidos que los modelos discriminativos",
                  "de": "Generative Modelle sind schneller als diskriminative Modelle",
                  "nl": "Generatieve modellen zijn sneller dan discriminatieve modellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Generative models learn P(X,Y) - the full joint distribution of data and labels, allowing them to generate new samples. Discriminative models learn P(Y|X) - the conditional probability, focusing on decision boundaries for classification. Examples: GANs are generative, while most classifiers are discriminative.",
                  "es": "Los modelos generativos aprenden P(X,Y) - la distribución conjunta completa de datos y etiquetas, permitiéndoles generar nuevas muestras. Los modelos discriminativos aprenden P(Y|X) - la probabilidad condicional, enfocándose en fronteras de decisión para clasificación. Ejemplos: las GAN son generativas, mientras que la mayoría de clasificadores son discriminativos.",
                  "de": "Generative Modelle lernen P(X,Y) - die vollständige gemeinsame Verteilung von Daten und Labels, ermöglichen ihnen neue Proben zu generieren. Diskriminative Modelle lernen P(Y|X) - die bedingte Wahrscheinlichkeit, fokussieren auf Entscheidungsgrenzen für Klassifikation. Beispiele: GANs sind generativ, während die meisten Klassifikatoren diskriminativ sind.",
                  "nl": "Generatieve modellen leren P(X,Y) - de volledige gezamenlijke verdeling van data en labels, waardoor ze nieuwe steekproeven kunnen genereren. Discriminatieve modellen leren P(Y|X) - de conditionele waarschijnlijkheid, gericht op beslissingsgrenzen voor classificatie. Voorbeelden: GANs zijn generatief, terwijl de meeste classificeerders discriminatief zijn."
        }
      },
      {
        question: {
                  "en": "What is the purpose of mini-batch gradient descent in neural network training?",
                  "es": "¿Cuál es el propósito del descenso de gradiente en mini-lotes en el entrenamiento de redes neuronales?",
                  "de": "Was ist der Zweck des Mini-Batch-Gradientenabstiegs beim Training neuronaler Netzwerke?",
                  "nl": "Wat is het doel van mini-batch gradient descent bij het trainen van neurale netwerken?"
        },
        options: [
        {
                  "en": "Reduce the size of neural networks",
                  "es": "Reducir el tamaño de las redes neuronales",
                  "de": "Die Größe neuronaler Netzwerke reduzieren",
                  "nl": "De grootte van neurale netwerken verkleinen"
        },
        {
                  "en": "Minimize the number of training epochs",
                  "es": "Minimizar el número de épocas de entrenamiento",
                  "de": "Die Anzahl der Trainingsepochen minimieren",
                  "nl": "Het aantal trainingsepochs minimaliseren"
        },
        {
                  "en": "Create smaller training datasets",
                  "es": "Crear conjuntos de datos de entrenamiento más pequeños",
                  "de": "Kleinere Trainingsdatensätze erstellen",
                  "nl": "Kleinere trainingsdatasets creëren"
        },
        {
                  "en": "Balance between computational efficiency and gradient stability",
                  "es": "Equilibrar entre eficiencia computacional y estabilidad del gradiente",
                  "de": "Ausgleich zwischen rechnerischer Effizienz und Gradientenstabilität",
                  "nl": "Balans tussen computationele efficiëntie en gradiëntstabiliteit"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Mini-batch gradient descent processes a small subset of training data at each iteration, providing a balance between the noise reduction of batch gradient descent and the computational efficiency of stochastic gradient descent.",
                  "es": "El descenso de gradiente en mini-lotes procesa un pequeño subconjunto de datos de entrenamiento en cada iteración, proporcionando un equilibrio entre la reducción de ruido del descenso de gradiente por lotes y la eficiencia computacional del descenso de gradiente estocástico.",
                  "de": "Mini-Batch-Gradientenabstieg verarbeitet eine kleine Teilmenge der Trainingsdaten bei jeder Iteration und bietet ein Gleichgewicht zwischen der Rauschreduzierung des Batch-Gradientenabstiegs und der rechnerischen Effizienz des stochastischen Gradientenabstiegs.",
                  "nl": "Mini-batch gradient descent verwerkt een kleine subset van trainingsdata bij elke iteratie, wat een balans biedt tussen de ruisvermindering van batch gradient descent en de computationele efficiëntie van stochastic gradient descent."
        }
      },
      {
        question: {
                  "en": "What is semi-supervised learning?",
                  "es": "¿Qué es el aprendizaje semi-supervisado?",
                  "de": "Was ist semi-überwachtes Lernen?",
                  "nl": "Wat is semi-supervised learning?"
        },
        options: [
        {
                  "en": "Partially automating the training process",
                  "es": "Automatizar parcialmente proceso entrenamiento",
                  "de": "Trainingsprozess teilweise automatisieren",
                  "nl": "Trainingsproces gedeeltelijk automatiseren"
        },
        {
                  "en": "Training only half of the network parameters",
                  "es": "Entrenar solo mitad de parámetros red",
                  "de": "Nur Hälfte der Netzwerkparameter trainieren",
                  "nl": "Slechts de helft van netwerkparameters trainen"
        },
        {
                  "en": "Using supervision only during inference",
                  "es": "Usar supervisión solo durante inferencia",
                  "de": "Überwachung nur während Inferenz verwenden",
                  "nl": "Supervisie alleen tijdens inferentie gebruiken"
        },
        {
                  "en": "Learning paradigm combining small labeled dataset with large unlabeled dataset",
                  "es": "Paradigma aprendizaje combinando pequeño conjunto etiquetado con gran conjunto sin etiquetar",
                  "de": "Lernparadigma das kleinen beschrifteten Datensatz mit großem unbeschrifteten Datensatz kombiniert",
                  "nl": "Leerparadigma dat kleine gelabelde dataset combineert met grote ongelabelde dataset"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Semi-supervised learning uses a small amount of labeled data combined with a large amount of unlabeled data for training. This approach is useful when labeling data is expensive or time-consuming, leveraging unlabeled data to improve model performance beyond what labeled data alone can achieve.",
                  "es": "El aprendizaje semi-supervisado usa una pequeña cantidad de datos etiquetados combinada con gran cantidad de datos sin etiquetar para entrenamiento. Este enfoque es útil cuando etiquetar datos es costoso o consume tiempo, aprovechando datos sin etiquetar para mejorar rendimiento del modelo más allá de lo que solo datos etiquetados pueden lograr.",
                  "de": "Semi-überwachtes Lernen verwendet eine kleine Menge beschrifteter Daten kombiniert mit großer Menge unbeschrifteter Daten zum Training. Dieser Ansatz ist nützlich wenn Datenbeschriftung teuer oder zeitaufwendig ist, nutzt unbeschriftete Daten um Modellleistung über das hinaus zu verbessern was beschriftete Daten allein erreichen können.",
                  "nl": "Semi-supervised learning gebruikt een kleine hoeveelheid gelabelde data gecombineerd met grote hoeveelheid ongelabelde data voor training. Deze aanpak is nuttig wanneer data labelen duur of tijdrovend is, maakt gebruik van ongelabelde data om modelprestaties te verbeteren boven wat gelabelde data alleen kan bereiken."
        }
      },
      {
        question: {
                  "en": "What is active learning in machine learning?",
                  "es": "¿Qué es el aprendizaje activo en aprendizaje automático?",
                  "de": "Was ist aktives Lernen im maschinellen Lernen?",
                  "nl": "Wat is actief leren in machine learning?"
        },
        options: [
        {
                  "en": "Strategy where model queries oracle to label most informative examples",
                  "es": "Estrategia donde modelo consulta oráculo para etiquetar ejemplos más informativos",
                  "de": "Strategie wo Modell Orakel abfragt um informativste Beispiele zu beschriften",
                  "nl": "Strategie waarbij model oracle bevraagt om meest informatieve voorbeelden te labelen"
        },
        {
                  "en": "Learning that requires constant user interaction",
                  "es": "Aprendizaje que requiere interacción constante usuario",
                  "de": "Lernen das konstante Benutzerinteraktion erfordert",
                  "nl": "Leren dat constante gebruikersinteractie vereist"
        },
        {
                  "en": "Training models while actively using them",
                  "es": "Entrenar modelos mientras se usan activamente",
                  "de": "Modelle trainieren während sie aktiv genutzt werden",
                  "nl": "Modellen trainen terwijl ze actief gebruikt worden"
        },
        {
                  "en": "High-energy training requiring more GPU power",
                  "es": "Entrenamiento alta energía requiriendo más poder GPU",
                  "de": "Hochenergie-Training das mehr GPU-Leistung erfordert",
                  "nl": "Hoogenergetische training die meer GPU-vermogen vereist"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Active learning intelligently selects which unlabeled examples should be labeled next based on their expected informativeness. By strategically choosing examples that maximize learning, active learning reduces the total number of labels needed while maintaining high model performance.",
                  "es": "El aprendizaje activo selecciona inteligentemente qué ejemplos sin etiquetar deben etiquetarse después basándose en su informatividad esperada. Al elegir estratégicamente ejemplos que maximizan el aprendizaje, el aprendizaje activo reduce el número total de etiquetas necesarias mientras mantiene alto rendimiento del modelo.",
                  "de": "Aktives Lernen wählt intelligent aus welche unbeschrifteten Beispiele als nächstes beschriftet werden sollten basierend auf ihrer erwarteten Informativität. Durch strategische Auswahl von Beispielen die Lernen maximieren, reduziert aktives Lernen die Gesamtzahl benötigter Labels während hohe Modellleistung erhalten bleibt.",
                  "nl": "Actief leren selecteert intelligent welke ongelabelde voorbeelden vervolgens gelabeld moeten worden op basis van hun verwachte informativiteit. Door strategisch voorbeelden te kiezen die leren maximaliseren, vermindert actief leren het totale aantal benodigde labels terwijl hoge modelprestaties behouden blijven."
        }
      },
      {
        question: {
                  "en": "What is meta-learning or learning to learn?",
                  "es": "¿Qué es el meta-aprendizaje o aprender a aprender?",
                  "de": "Was ist Meta-Learning oder Lernen zu lernen?",
                  "nl": "Wat is meta-learning of leren te leren?"
        },
        options: [
        {
                  "en": "Teaching models to teach other models",
                  "es": "Enseñar modelos a enseñar otros modelos",
                  "de": "Modelle lehren andere Modelle zu lehren",
                  "nl": "Modellen leren andere modellen te leren"
        },
        {
                  "en": "Training models to quickly adapt to new tasks with minimal data",
                  "es": "Entrenar modelos para adaptarse rápidamente a nuevas tareas con datos mínimos",
                  "de": "Modelle trainieren um sich schnell an neue Aufgaben mit minimalen Daten anzupassen",
                  "nl": "Modellen trainen om snel aan te passen aan nieuwe taken met minimale data"
        },
        {
                  "en": "Learning about the learning process itself",
                  "es": "Aprender sobre el proceso de aprendizaje mismo",
                  "de": "Über den Lernprozess selbst lernen",
                  "nl": "Leren over het leerproces zelf"
        },
        {
                  "en": "Using metadata to improve training",
                  "es": "Usar metadatos para mejorar entrenamiento",
                  "de": "Metadaten verwenden um Training zu verbessern",
                  "nl": "Metadata gebruiken om training te verbeteren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Meta-learning aims to train models that can quickly adapt to new tasks with few examples by learning from experience across many tasks. Rather than learning a single task well, meta-learning models learn general learning strategies that transfer across tasks, enabling rapid few-shot learning.",
                  "es": "El meta-aprendizaje busca entrenar modelos que puedan adaptarse rápidamente a nuevas tareas con pocos ejemplos aprendiendo de experiencia a través de muchas tareas. En lugar de aprender bien una sola tarea, los modelos de meta-aprendizaje aprenden estrategias de aprendizaje generales que transfieren a través de tareas, permitiendo aprendizaje rápido de pocos ejemplos.",
                  "de": "Meta-Learning zielt darauf ab Modelle zu trainieren die sich schnell an neue Aufgaben mit wenigen Beispielen anpassen können durch Lernen aus Erfahrung über viele Aufgaben. Anstatt eine einzelne Aufgabe gut zu lernen, lernen Meta-Learning-Modelle allgemeine Lernstrategien die über Aufgaben übertragen, ermöglichen schnelles Few-Shot-Lernen.",
                  "nl": "Meta-learning heeft tot doel modellen te trainen die snel kunnen aanpassen aan nieuwe taken met weinig voorbeelden door te leren van ervaring over vele taken. In plaats van een enkele taak goed te leren, leren meta-learning modellen algemene leerstrategieën die overdragen tussen taken, waardoor snel few-shot leren mogelijk wordt."
        }
      },
      {
        question: {
                  "en": "What is few-shot learning?",
                  "es": "¿Qué es el aprendizaje de pocos ejemplos?",
                  "de": "Was ist Few-Shot Learning?",
                  "nl": "Wat is few-shot learning?"
        },
        options: [
        {
                  "en": "Taking few training iterations",
                  "es": "Tomar pocas iteraciones de entrenamiento",
                  "de": "Wenige Trainingsiterationen nehmen",
                  "nl": "Weinig trainingsiteraties nemen"
        },
        {
                  "en": "Using few layers in the network",
                  "es": "Usar pocas capas en la red",
                  "de": "Wenige Schichten im Netzwerk verwenden",
                  "nl": "Weinig lagen in het netwerk gebruiken"
        },
        {
                  "en": "Training with low computational resources",
                  "es": "Entrenar con recursos computacionales bajos",
                  "de": "Mit geringen Rechenressourcen trainieren",
                  "nl": "Trainen met lage computationele bronnen"
        },
        {
                  "en": "Learning new concepts from very few examples, typically 1-5 samples per class",
                  "es": "Aprender nuevos conceptos de muy pocos ejemplos, típicamente 1-5 muestras por clase",
                  "de": "Neue Konzepte aus sehr wenigen Beispielen lernen, typischerweise 1-5 Proben pro Klasse",
                  "nl": "Nieuwe concepten leren van zeer weinig voorbeelden, typisch 1-5 steekproeven per klasse"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Few-shot learning tackles the challenge of learning from extremely limited data - often just one (one-shot) or a handful of examples per class. This mimics human learning ability to recognize new objects from minimal exposure and is crucial for domains where collecting large datasets is impractical.",
                  "es": "El aprendizaje de pocos ejemplos aborda el desafío de aprender de datos extremadamente limitados - a menudo solo uno (one-shot) o un puñado de ejemplos por clase. Esto imita la capacidad de aprendizaje humano para reconocer nuevos objetos con exposición mínima y es crucial para dominios donde recopilar grandes conjuntos de datos es impráctico.",
                  "de": "Few-Shot Learning bewältigt die Herausforderung aus extrem begrenzten Daten zu lernen - oft nur ein (One-Shot) oder eine Handvoll Beispiele pro Klasse. Dies ahmt menschliche Lernfähigkeit nach neue Objekte aus minimaler Exposition zu erkennen und ist entscheidend für Domänen wo Sammeln großer Datensätze unpraktisch ist.",
                  "nl": "Few-shot learning pakt de uitdaging aan van leren uit extreem beperkte data - vaak slechts één (one-shot) of een handvol voorbeelden per klasse. Dit bootst menselijk leervermogen na om nieuwe objecten te herkennen met minimale blootstelling en is cruciaal voor domeinen waar het verzamelen van grote datasets onpraktisch is."
        }
      },
      {
        question: {
                  "en": "What is catastrophic forgetting in neural networks?",
                  "es": "¿Qué es el olvido catastrófico en redes neuronales?",
                  "de": "Was ist katastrophales Vergessen in neuronalen Netzwerken?",
                  "nl": "Wat is catastrofaal vergeten in neurale netwerken?"
        },
        options: [
        {
                  "en": "Memory overflow during training",
                  "es": "Desbordamiento memoria durante entrenamiento",
                  "de": "Speicherüberlauf während Training",
                  "nl": "Geheugenoverflow tijdens training"
        },
        {
                  "en": "Forgetting to save model checkpoints",
                  "es": "Olvidar guardar puntos control modelo",
                  "de": "Vergessen Modell-Checkpoints zu speichern",
                  "nl": "Vergeten model checkpoints op te slaan"
        },
        {
                  "en": "Complete loss of all network weights",
                  "es": "Pérdida completa de todos pesos red",
                  "de": "Vollständiger Verlust aller Netzwerkgewichte",
                  "nl": "Volledig verlies van alle netwerkgewichten"
        },
        {
                  "en": "When training on new tasks causes network to forget previously learned tasks",
                  "es": "Cuando entrenar en nuevas tareas causa que red olvide tareas previamente aprendidas",
                  "de": "Wenn Training auf neuen Aufgaben Netzwerk veranlasst zuvor gelernte Aufgaben zu vergessen",
                  "nl": "Wanneer trainen op nieuwe taken ervoor zorgt dat netwerk eerder geleerde taken vergeet"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Catastrophic forgetting occurs when a neural network trained sequentially on multiple tasks loses performance on earlier tasks as it learns new ones. This happens because weights optimized for new tasks overwrite information needed for old tasks, making continual learning challenging.",
                  "es": "El olvido catastrófico ocurre cuando una red neuronal entrenada secuencialmente en múltiples tareas pierde rendimiento en tareas anteriores al aprender nuevas. Esto sucede porque pesos optimizados para nuevas tareas sobrescriben información necesaria para tareas antiguas, haciendo el aprendizaje continuo desafiante.",
                  "de": "Katastrophales Vergessen tritt auf wenn ein neuronales Netzwerk sequentiell auf mehreren Aufgaben trainiert Leistung bei früheren Aufgaben verliert während es neue lernt. Dies geschieht weil für neue Aufgaben optimierte Gewichte Informationen überschreiben die für alte Aufgaben benötigt werden, macht kontinuierliches Lernen herausfordernd.",
                  "nl": "Catastrofaal vergeten treedt op wanneer een neuraal netwerk sequentieel getraind op meerdere taken prestaties verliest op eerdere taken terwijl het nieuwe leert. Dit gebeurt omdat gewichten geoptimaliseerd voor nieuwe taken informatie overschrijven die nodig is voor oude taken, wat continu leren uitdagend maakt."
        }
      },
      {
        question: {
                  "en": "What is continual learning or lifelong learning?",
                  "es": "¿Qué es el aprendizaje continuo o aprendizaje de por vida?",
                  "de": "Was ist kontinuierliches Lernen oder lebenslanges Lernen?",
                  "nl": "Wat is continu leren of levenslang leren?"
        },
        options: [
        {
                  "en": "Never finishing the training process",
                  "es": "Nunca terminar proceso entrenamiento",
                  "de": "Trainingsprozess niemals beenden",
                  "nl": "Trainingsproces nooit afmaken"
        },
        {
                  "en": "Training models continuously without stopping",
                  "es": "Entrenar modelos continuamente sin parar",
                  "de": "Modelle kontinuierlich ohne Stopp trainieren",
                  "nl": "Modellen continu trainen zonder te stoppen"
        },
        {
                  "en": "Learning throughout the entire human lifespan",
                  "es": "Aprender durante toda vida humana",
                  "de": "Während gesamter menschlicher Lebensspanne lernen",
                  "nl": "Leren gedurende hele menselijke levensduur"
        },
        {
                  "en": "Ability to learn new tasks sequentially while retaining knowledge from previous tasks",
                  "es": "Capacidad aprender nuevas tareas secuencialmente mientras retiene conocimiento de tareas previas",
                  "de": "Fähigkeit neue Aufgaben sequentiell zu lernen während Wissen von vorherigen Aufgaben behalten wird",
                  "nl": "Vermogen om nieuwe taken sequentieel te leren terwijl kennis van eerdere taken behouden blijft"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Continual learning aims to develop models that can learn a sequence of tasks over time without forgetting previous knowledge. This requires techniques like elastic weight consolidation, progressive networks, or memory replay to mitigate catastrophic forgetting and enable accumulation of knowledge.",
                  "es": "El aprendizaje continuo busca desarrollar modelos que puedan aprender una secuencia de tareas con el tiempo sin olvidar conocimiento previo. Esto requiere técnicas como consolidación elástica de pesos, redes progresivas o reproducción de memoria para mitigar olvido catastrófico y permitir acumulación de conocimiento.",
                  "de": "Kontinuierliches Lernen zielt darauf ab Modelle zu entwickeln die eine Sequenz von Aufgaben über Zeit lernen können ohne vorheriges Wissen zu vergessen. Dies erfordert Techniken wie elastische Gewichtskonsolidierung, progressive Netzwerke oder Memory Replay um katastrophales Vergessen zu mildern und Wissensakkumulation zu ermöglichen.",
                  "nl": "Continu leren heeft tot doel modellen te ontwikkelen die een reeks taken in de tijd kunnen leren zonder eerdere kennis te vergeten. Dit vereist technieken zoals elastische gewichtsconsolidatie, progressieve netwerken of geheugen replay om catastrofaal vergeten te mitigeren en kennisaccumulatie mogelijk te maken."
        }
      },
      {
        question: {
                  "en": "What is knowledge distillation in neural networks?",
                  "es": "¿Qué es la destilación de conocimiento en redes neuronales?",
                  "de": "Was ist Wissensdestillation in neuronalen Netzwerken?",
                  "nl": "Wat is kennisdistillatie in neurale netwerken?"
        },
        options: [
        {
                  "en": "Transferring knowledge from large teacher model to smaller student model",
                  "es": "Transferir conocimiento de modelo maestro grande a modelo estudiante pequeño",
                  "de": "Wissen von großem Lehrer-Modell auf kleineres Schüler-Modell übertragen",
                  "nl": "Kennis overdragen van groot leraarmodel naar kleiner studentmodel"
        },
        {
                  "en": "Compressing model weights",
                  "es": "Comprimir pesos modelo",
                  "de": "Modellgewichte komprimieren",
                  "nl": "Modelgewichten comprimeren"
        },
        {
                  "en": "Extracting only essential features from data",
                  "es": "Extraer solo características esenciales de datos",
                  "de": "Nur wesentliche Merkmale aus Daten extrahieren",
                  "nl": "Alleen essentiële kenmerken uit data extraheren"
        },
        {
                  "en": "Purifying training data",
                  "es": "Purificar datos entrenamiento",
                  "de": "Trainingsdaten reinigen",
                  "nl": "Trainingsdata zuiveren"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Knowledge distillation trains a smaller student network to mimic a larger teacher network's behavior by learning from the teacher's soft predictions rather than hard labels. This produces compact models that retain much of the teacher's performance while being faster and more efficient for deployment.",
                  "es": "La destilación de conocimiento entrena una red estudiante más pequeña para imitar comportamiento de red maestro más grande aprendiendo de predicciones suaves del maestro en lugar de etiquetas duras. Esto produce modelos compactos que retienen mucho del rendimiento del maestro mientras son más rápidos y eficientes para despliegue.",
                  "de": "Wissensdestillation trainiert ein kleineres Schüler-Netzwerk das Verhalten eines größeren Lehrer-Netzwerks nachzuahmen durch Lernen von weichen Vorhersagen des Lehrers statt harten Labels. Dies produziert kompakte Modelle die viel von Lehrerleistung behalten während schneller und effizienter für Deployment sind.",
                  "nl": "Kennisdistillatie traint een kleiner studentnetwerk om het gedrag van een groter leraarnetwerk na te bootsen door te leren van zachte voorspellingen van de leraar in plaats van harde labels. Dit produceert compacte modellen die veel van de prestaties van de leraar behouden terwijl ze sneller en efficiënter zijn voor deployment."
        }
      },
      {
        question: {
                  "en": "What is neural architecture search (NAS)?",
                  "es": "¿Qué es la búsqueda de arquitectura neuronal (NAS)?",
                  "de": "Was ist neuronale Architektursuche (NAS)?",
                  "nl": "Wat is neural architecture search (NAS)?"
        },
        options: [
        {
                  "en": "Automated process of discovering optimal network architectures for specific tasks",
                  "es": "Proceso automatizado descubrir arquitecturas red óptimas para tareas específicas",
                  "de": "Automatisierter Prozess optimale Netzwerkarchitekturen für spezifische Aufgaben zu entdecken",
                  "nl": "Geautomatiseerd proces om optimale netwerkarchitecturen voor specifieke taken te ontdekken"
        },
        {
                  "en": "Organizing network layers alphabetically",
                  "es": "Organizar capas red alfabéticamente",
                  "de": "Netzwerkschichten alphabetisch organisieren",
                  "nl": "Netwerklagen alfabetisch organiseren"
        },
        {
                  "en": "Searching for pre-trained models online",
                  "es": "Buscar modelos pre-entrenados en línea",
                  "de": "Vortrainierte Modelle online suchen",
                  "nl": "Voorgetrainde modellen online zoeken"
        },
        {
                  "en": "Finding the best hyperparameters manually",
                  "es": "Encontrar mejores hiperparámetros manualmente",
                  "de": "Beste Hyperparameter manuell finden",
                  "nl": "Beste hyperparameters handmatig vinden"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Neural Architecture Search automatically discovers effective network architectures through systematic exploration and optimization, often using reinforcement learning or evolutionary algorithms. NAS can find architectures that outperform human-designed networks but typically requires significant computational resources.",
                  "es": "La Búsqueda de Arquitectura Neuronal descubre automáticamente arquitecturas de red efectivas a través de exploración sistemática y optimización, a menudo usando aprendizaje por refuerzo o algoritmos evolutivos. NAS puede encontrar arquitecturas que superan redes diseñadas por humanos pero típicamente requiere recursos computacionales significativos.",
                  "de": "Neuronale Architektursuche entdeckt automatisch effektive Netzwerkarchitekturen durch systematische Exploration und Optimierung, oft mit Reinforcement Learning oder evolutionären Algorithmen. NAS kann Architekturen finden die von Menschen entworfene Netzwerke übertreffen aber erfordert typischerweise bedeutende Rechenressourcen.",
                  "nl": "Neural Architecture Search ontdekt automatisch effectieve netwerkarchitecturen door systematische exploratie en optimalisatie, vaak met reinforcement learning of evolutionaire algoritmes. NAS kan architecturen vinden die door mensen ontworpen netwerken overtreffen maar vereist typisch aanzienlijke computationele bronnen."
        }
      },
      {
        question: {
                  "en": "What is the difference between L1 and L2 regularization?",
                  "es": "¿Cuál es la diferencia entre regularización L1 y L2?",
                  "de": "Was ist der Unterschied zwischen L1- und L2-Regularisierung?",
                  "nl": "Wat is het verschil tussen L1 en L2 regularisatie?"
        },
        options: [
        {
                  "en": "No significant difference exists",
                  "es": "No existe diferencia significativa",
                  "de": "Es existiert kein signifikanter Unterschied",
                  "nl": "Er bestaat geen significant verschil"
        },
        {
                  "en": "L1 is faster than L2",
                  "es": "L1 es más rápido que L2",
                  "de": "L1 ist schneller als L2",
                  "nl": "L1 is sneller dan L2"
        },
        {
                  "en": "L1 works only for classification, L2 for regression",
                  "es": "L1 funciona solo para clasificación, L2 para regresión",
                  "de": "L1 funktioniert nur für Klassifikation, L2 für Regression",
                  "nl": "L1 werkt alleen voor classificatie, L2 voor regressie"
        },
        {
                  "en": "L1 promotes sparsity by driving weights to zero, L2 prevents large weights through squared penalties",
                  "es": "L1 promueve dispersión llevando pesos a cero, L2 previene pesos grandes mediante penalizaciones cuadradas",
                  "de": "L1 fördert Sparsität durch Treiben von Gewichten auf Null, L2 verhindert große Gewichte durch quadratische Strafen",
                  "nl": "L1 bevordert sparsheid door gewichten naar nul te drijven, L2 voorkomt grote gewichten door gekwadrateerde straffen"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "L1 regularization (Lasso) adds absolute value of weights to loss, encouraging sparse solutions where many weights become exactly zero, providing feature selection. L2 regularization (Ridge) adds squared weights, discouraging large weights but rarely making them exactly zero, producing smoother weight distributions.",
                  "es": "La regularización L1 (Lasso) agrega valor absoluto de pesos a pérdida, alentando soluciones dispersas donde muchos pesos se vuelven exactamente cero, proporcionando selección de características. La regularización L2 (Ridge) agrega pesos al cuadrado, desalentando pesos grandes pero rara vez haciéndolos exactamente cero, produciendo distribuciones de peso más suaves.",
                  "de": "L1-Regularisierung (Lasso) fügt Absolutwert von Gewichten zum Verlust hinzu, fördert sparsame Lösungen wo viele Gewichte genau Null werden, bietet Merkmalsselektion. L2-Regularisierung (Ridge) fügt quadrierte Gewichte hinzu, entmutigt große Gewichte macht sie aber selten genau Null, produziert glattere Gewichtsverteilungen.",
                  "nl": "L1 regularisatie (Lasso) voegt absolute waarde van gewichten toe aan verlies, moedigt sparse oplossingen aan waar veel gewichten precies nul worden, biedt kenmerksselectie. L2 regularisatie (Ridge) voegt gekwadrateerde gewichten toe, ontmoedigt grote gewichten maar maakt ze zelden precies nul, produceert gladdere gewichtsverdelingen."
        }
      },
      {
        question: {
                  "en": "What is batch normalization and why is it useful?",
                  "es": "¿Qué es la normalización por lotes y por qué es útil?",
                  "de": "Was ist Batch-Normalisierung und warum ist sie nützlich?",
                  "nl": "Wat is batch normalisatie en waarom is het nuttig?"
        },
        options: [
        {
                  "en": "Standardizing batch sizes",
                  "es": "Estandarizar tamaños lote",
                  "de": "Stapelgrößen standardisieren",
                  "nl": "Batchgroottes standaardiseren"
        },
        {
                  "en": "Normalizing layer inputs to reduce internal covariate shift and accelerate training",
                  "es": "Normalizar entradas capa para reducir cambio covarianza interna y acelerar entrenamiento",
                  "de": "Schichteingaben normalisieren um interne Kovariantenverschiebung zu reduzieren und Training zu beschleunigen",
                  "nl": "Laaginvoeren normaliseren om interne covariantieverschuiving te verminderen en training te versnellen"
        },
        {
                  "en": "Creating batches of training data",
                  "es": "Crear lotes datos entrenamiento",
                  "de": "Stapel von Trainingsdaten erstellen",
                  "nl": "Batches van trainingsdata creëren"
        },
        {
                  "en": "Normalizing only the final output",
                  "es": "Normalizar solo salida final",
                  "de": "Nur finale Ausgabe normalisieren",
                  "nl": "Alleen finale uitvoer normaliseren"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Batch normalization normalizes activations within each mini-batch by subtracting mean and dividing by standard deviation. This stabilizes learning, allows higher learning rates, reduces sensitivity to initialization, acts as regularization, and significantly speeds up training of deep networks.",
                  "es": "La normalización por lotes normaliza activaciones dentro de cada mini-lote restando media y dividiendo por desviación estándar. Esto estabiliza aprendizaje, permite tasas aprendizaje más altas, reduce sensibilidad a inicialización, actúa como regularización y acelera significativamente entrenamiento de redes profundas.",
                  "de": "Batch-Normalisierung normalisiert Aktivierungen innerhalb jedes Mini-Batches durch Subtraktion des Mittelwerts und Division durch Standardabweichung. Dies stabilisiert Lernen, erlaubt höhere Lernraten, reduziert Empfindlichkeit gegenüber Initialisierung, wirkt als Regularisierung und beschleunigt Training tiefer Netzwerke signifikant.",
                  "nl": "Batch normalisatie normaliseert activaties binnen elke mini-batch door gemiddelde af te trekken en te delen door standaarddeviatie. Dit stabiliseert leren, staat hogere leersnelheden toe, vermindert gevoeligheid voor initialisatie, werkt als regularisatie en versnelt training van diepe netwerken aanzienlijk."
        }
      },
      {
        question: {
                  "en": "What is learning rate scheduling?",
                  "es": "¿Qué es la programación de tasa de aprendizaje?",
                  "de": "Was ist Lernraten-Scheduling?",
                  "nl": "Wat is learning rate scheduling?"
        },
        options: [
        {
                  "en": "Planning when to collect training data",
                  "es": "Planificar cuándo recopilar datos entrenamiento",
                  "de": "Planen wann Trainingsdaten gesammelt werden",
                  "nl": "Plannen wanneer trainingsdata te verzamelen"
        },
        {
                  "en": "Setting specific times for training sessions",
                  "es": "Establecer tiempos específicos para sesiones entrenamiento",
                  "de": "Spezifische Zeiten für Trainingssitzungen festlegen",
                  "nl": "Specifieke tijden voor trainingssessies instellen"
        },
        {
                  "en": "Organizing training epochs chronologically",
                  "es": "Organizar épocas entrenamiento cronológicamente",
                  "de": "Trainingsepochen chronologisch organisieren",
                  "nl": "Training epochs chronologisch organiseren"
        },
        {
                  "en": "Adjusting learning rate during training according to predefined schedule or adaptive rules",
                  "es": "Ajustar tasa aprendizaje durante entrenamiento según programa predefinido o reglas adaptativas",
                  "de": "Lernrate während Training nach vordefiniertem Zeitplan oder adaptiven Regeln anpassen",
                  "nl": "Leersnelheid tijdens training aanpassen volgens voorgedefinieerd schema of adaptieve regels"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Learning rate scheduling systematically changes the learning rate during training. Common strategies include step decay, exponential decay, cosine annealing, and adaptive methods. This helps models converge more effectively by using larger rates initially for faster progress, then smaller rates for fine-tuning.",
                  "es": "La programación de tasa de aprendizaje cambia sistemáticamente la tasa de aprendizaje durante entrenamiento. Estrategias comunes incluyen decaimiento por pasos, decaimiento exponencial, recocido cosenoidal y métodos adaptativos. Esto ayuda a modelos converger más efectivamente usando tasas mayores inicialmente para progreso más rápido, luego tasas menores para ajuste fino.",
                  "de": "Lernraten-Scheduling ändert systematisch die Lernrate während des Trainings. Häufige Strategien umfassen Schrittzerfall, exponentieller Zerfall, Kosinus-Annealing und adaptive Methoden. Dies hilft Modellen effektiver zu konvergieren durch Verwendung größerer Raten anfangs für schnelleren Fortschritt, dann kleinere Raten für Feinabstimmung.",
                  "nl": "Learning rate scheduling verandert systematisch de leersnelheid tijdens training. Veelvoorkomende strategieën zijn step decay, exponential decay, cosine annealing en adaptieve methoden. Dit helpt modellen effectiever te convergeren door grotere snelheden aanvankelijk te gebruiken voor snellere vooruitgang, dan kleinere snelheden voor fijnafstemming."
        }
      },
      {
        question: {
                  "en": "What is the warm-up period in neural network training?",
                  "es": "¿Qué es el período de calentamiento en entrenamiento de redes neuronales?",
                  "de": "Was ist die Aufwärmphase beim Training neuronaler Netzwerke?",
                  "nl": "Wat is de opwarmperiode in neurale netwerk training?"
        },
        options: [
        {
                  "en": "Training on easier examples first",
                  "es": "Entrenar primero en ejemplos más fáciles",
                  "de": "Zuerst auf einfacheren Beispielen trainieren",
                  "nl": "Eerst trainen op gemakkelijkere voorbeelden"
        },
        {
                  "en": "Preheating GPU before training",
                  "es": "Precalentar GPU antes entrenamiento",
                  "de": "GPU vor Training vorheizen",
                  "nl": "GPU voorverwarmen voor training"
        },
        {
                  "en": "Loading data into memory",
                  "es": "Cargar datos en memoria",
                  "de": "Daten in Speicher laden",
                  "nl": "Data in geheugen laden"
        },
        {
                  "en": "Initial phase with gradually increasing learning rate to stabilize early training",
                  "es": "Fase inicial con tasa aprendizaje gradualmente creciente para estabilizar entrenamiento temprano",
                  "de": "Anfangsphase mit allmählich steigender Lernrate um frühes Training zu stabilisieren",
                  "nl": "Initiële fase met geleidelijk toenemende leersnelheid om vroege training te stabiliseren"
        }
        ],
        correct: 3,
        explanation: {
                  "en": "Learning rate warm-up gradually increases the learning rate from a small value to the target value over initial training iterations. This prevents instability caused by large gradients at the start when weights are randomly initialized, particularly important for large batch training and transformer models.",
                  "es": "El calentamiento de tasa de aprendizaje aumenta gradualmente la tasa de aprendizaje de un valor pequeño al valor objetivo sobre iteraciones de entrenamiento iniciales. Esto previene inestabilidad causada por gradientes grandes al inicio cuando pesos están aleatoriamente inicializados, particularmente importante para entrenamiento de lotes grandes y modelos transformer.",
                  "de": "Lernraten-Aufwärmung erhöht allmählich die Lernrate von einem kleinen Wert zum Zielwert über anfängliche Trainingsiterationen. Dies verhindert Instabilität verursacht durch große Gradienten am Anfang wenn Gewichte zufällig initialisiert sind, besonders wichtig für großes Batch-Training und Transformer-Modelle.",
                  "nl": "Learning rate warm-up verhoogt geleidelijk de leersnelheid van een kleine waarde naar de doelwaarde over initiële trainingsiteraties. Dit voorkomt instabiliteit veroorzaakt door grote gradiënten aan het begin wanneer gewichten willekeurig geïnitialiseerd zijn, bijzonder belangrijk voor grote batch training en transformer modellen."
        }
      },
      {
        question: {
                  "en": "What is model ensembling and how does it improve performance?",
                  "es": "¿Qué es el ensamblaje de modelos y cómo mejora el rendimiento?",
                  "de": "Was ist Modell-Ensembling und wie verbessert es die Leistung?",
                  "nl": "Wat is model ensembling en hoe verbetert het de prestaties?"
        },
        options: [
        {
                  "en": "Combining predictions from multiple models to reduce variance and improve accuracy",
                  "es": "Combinar predicciones de múltiples modelos para reducir varianza y mejorar precisión",
                  "de": "Vorhersagen von mehreren Modellen kombinieren um Varianz zu reduzieren und Genauigkeit zu verbessern",
                  "nl": "Voorspellingen van meerdere modellen combineren om variantie te verminderen en nauwkeurigheid te verbeteren"
        },
        {
                  "en": "Averaging all training data",
                  "es": "Promediar todos datos entrenamiento",
                  "de": "Alle Trainingsdaten mitteln",
                  "nl": "Alle trainingsdata middelen"
        },
        {
                  "en": "Training all models together simultaneously",
                  "es": "Entrenar todos modelos juntos simultáneamente",
                  "de": "Alle Modelle gleichzeitig zusammen trainieren",
                  "nl": "Alle modellen tegelijkertijd samen trainen"
        },
        {
                  "en": "Building one very large model",
                  "es": "Construir un modelo muy grande",
                  "de": "Ein sehr großes Modell bauen",
                  "nl": "Eén zeer groot model bouwen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Model ensembling combines predictions from multiple independent models through voting, averaging, or weighted combination. This leverages diversity - different models make different errors, so combining them reduces overall error and improves robustness, though at the cost of increased computational requirements.",
                  "es": "El ensamblaje de modelos combina predicciones de múltiples modelos independientes mediante votación, promediación o combinación ponderada. Esto aprovecha diversidad - diferentes modelos cometen diferentes errores, así combinarlos reduce error general y mejora robustez, aunque a costo de mayores requisitos computacionales.",
                  "de": "Modell-Ensembling kombiniert Vorhersagen von mehreren unabhängigen Modellen durch Abstimmung, Mittelung oder gewichtete Kombination. Dies nutzt Diversität - verschiedene Modelle machen verschiedene Fehler, also reduziert sie zu kombinieren Gesamtfehler und verbessert Robustheit, obwohl auf Kosten erhöhter Rechenanforderungen.",
                  "nl": "Model ensembling combineert voorspellingen van meerdere onafhankelijke modellen door stemmen, middelen of gewogen combinatie. Dit maakt gebruik van diversiteit - verschillende modellen maken verschillende fouten, dus het combineren ervan vermindert totale fout en verbetert robuustheid, zij het ten koste van verhoogde computationele vereisten."
        }
      },
      {
        question: {
                  "en": "What is the test set and why should it never be used during training?",
                  "es": "¿Qué es el conjunto de prueba y por qué nunca debe usarse durante entrenamiento?",
                  "de": "Was ist der Testsatz und warum sollte er niemals während des Trainings verwendet werden?",
                  "nl": "Wat is de testset en waarom moet deze nooit tijdens training gebruikt worden?"
        },
        options: [
        {
                  "en": "Backup data in case training data is lost",
                  "es": "Datos respaldo en caso datos entrenamiento se pierdan",
                  "de": "Backup-Daten falls Trainingsdaten verloren gehen",
                  "nl": "Back-updata voor het geval trainingsdata verloren gaat"
        },
        {
                  "en": "Final holdout data for unbiased performance evaluation; using it during training causes data leakage",
                  "es": "Datos finales retenidos para evaluación rendimiento imparcial; usarlos durante entrenamiento causa fuga datos",
                  "de": "Finale zurückgehaltene Daten für unvoreingenommene Leistungsbewertung; sie während Training zu verwenden verursacht Datenleck",
                  "nl": "Finale achtergehouden data voor onbevooroordeelde prestatie-evaluatie; deze tijdens training gebruiken veroorzaakt data lekkage"
        },
        {
                  "en": "Data for testing code correctness",
                  "es": "Datos para probar corrección código",
                  "de": "Daten zum Testen von Code-Korrektheit",
                  "nl": "Data voor het testen van code correctheid"
        },
        {
                  "en": "Small subset for quick evaluation",
                  "es": "Pequeño subconjunto para evaluación rápida",
                  "de": "Kleine Teilmenge für schnelle Bewertung",
                  "nl": "Kleine subset voor snelle evaluatie"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "The test set is a completely separate portion of data reserved exclusively for final model evaluation after all training and hyperparameter tuning is complete. Using it during training causes data leakage, giving an overoptimistic performance estimate and failing to reflect real-world generalization.",
                  "es": "El conjunto de prueba es una porción de datos completamente separada reservada exclusivamente para evaluación final del modelo después que todo entrenamiento y ajuste de hiperparámetros está completo. Usarlo durante entrenamiento causa fuga de datos, dando estimación de rendimiento demasiado optimista y no refleja generalización del mundo real.",
                  "de": "Der Testsatz ist ein vollständig separater Datenteil der ausschließlich für finale Modellbewertung nach Abschluss allen Trainings und Hyperparameter-Tunings reserviert ist. Ihn während Training zu verwenden verursacht Datenleck, gibt überoptimistische Leistungsschätzung und spiegelt reale Generalisierung nicht wider.",
                  "nl": "De testset is een volledig gescheiden deel data gereserveerd uitsluitend voor finale modelevaluatie na voltooiing van alle training en hyperparameter tuning. Deze tijdens training gebruiken veroorzaakt data lekkage, geeft overoptimistische prestatieschatting en weerspiegelt niet echte generalisatie."
        }
      },
      {
        question: {
                  "en": "What is data leakage in machine learning?",
                  "es": "¿Qué es la fuga de datos en aprendizaje automático?",
                  "de": "Was ist Datenleck im maschinellen Lernen?",
                  "nl": "Wat is data lekkage in machine learning?"
        },
        options: [
        {
                  "en": "Loss of training data due to hardware failure",
                  "es": "Pérdida datos entrenamiento por falla hardware",
                  "de": "Verlust von Trainingsdaten durch Hardware-Ausfall",
                  "nl": "Verlies van trainingsdata door hardware falen"
        },
        {
                  "en": "When information from test/validation sets influences training, causing overestimated performance",
                  "es": "Cuando información de conjuntos prueba/validación influye entrenamiento, causando rendimiento sobreestimado",
                  "de": "Wenn Informationen aus Test/Validierungs-Sets Training beeinflussen, verursacht überschätzte Leistung",
                  "nl": "Wanneer informatie uit test/validatiesets training beïnvloedt, veroorzaakt overschatte prestaties"
        },
        {
                  "en": "Unauthorized access to training datasets",
                  "es": "Acceso no autorizado a conjuntos datos entrenamiento",
                  "de": "Unbefugter Zugriff auf Trainingsdatensätze",
                  "nl": "Ongeautoriseerde toegang tot trainingsdatasets"
        },
        {
                  "en": "Gradients becoming too small",
                  "es": "Gradientes volviéndose demasiado pequeños",
                  "de": "Gradienten werden zu klein",
                  "nl": "Gradiënten worden te klein"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Data leakage occurs when information that wouldn't be available at prediction time improperly influences model training or evaluation. Common sources include using test data during training, features that contain target information, or improper preprocessing. This leads to unrealistically high performance that doesn't generalize.",
                  "es": "La fuga de datos ocurre cuando información que no estaría disponible en tiempo de predicción influye impropiamente entrenamiento o evaluación del modelo. Fuentes comunes incluyen usar datos de prueba durante entrenamiento, características que contienen información objetivo o preprocesamiento impropio. Esto lleva a rendimiento irrealmente alto que no generaliza.",
                  "de": "Datenleck tritt auf wenn Informationen die zur Vorhersagezeit nicht verfügbar wären Modelltraining oder -bewertung unangemessen beeinflussen. Häufige Quellen umfassen Verwendung von Testdaten während Training, Merkmale die Zielinformationen enthalten oder unsachgemäße Vorverarbeitung. Dies führt zu unrealistisch hoher Leistung die nicht generalisiert.",
                  "nl": "Data lekkage treedt op wanneer informatie die niet beschikbaar zou zijn op voorspellingstijd modeltraining of -evaluatie ongepast beïnvloedt. Veelvoorkomende bronnen zijn het gebruik van testdata tijdens training, kenmerken die doelinformatie bevatten of onjuiste voorverwerking. Dit leidt tot onrealistisch hoge prestaties die niet generaliseren."
        }
      },
      {
        question: {
                  "en": "What is stratified sampling in train-test splits?",
                  "es": "¿Qué es el muestreo estratificado en divisiones entrenamiento-prueba?",
                  "de": "Was ist stratifizierte Stichprobenziehung bei Train-Test-Aufteilungen?",
                  "nl": "Wat is gestratificeerde steekproeftrekking in train-test splitsingen?"
        },
        options: [
        {
                  "en": "Splitting data into multiple horizontal layers",
                  "es": "Dividir datos en múltiples capas horizontales",
                  "de": "Daten in mehrere horizontale Schichten aufteilen",
                  "nl": "Data splitsen in meerdere horizontale lagen"
        },
        {
                  "en": "Random sampling without replacement",
                  "es": "Muestreo aleatorio sin reemplazo",
                  "de": "Zufällige Stichprobenziehung ohne Ersatz",
                  "nl": "Willekeurige steekproeftrekking zonder vervanging"
        },
        {
                  "en": "Ensuring class proportions are preserved in both training and test sets",
                  "es": "Asegurar que proporciones clase se preserven en conjuntos entrenamiento y prueba",
                  "de": "Sicherstellen dass Klassenproportionen in Trainings- und Testsets erhalten bleiben",
                  "nl": "Ervoor zorgen dat klasseverhoudingen behouden blijven in zowel trainings- als testsets"
        },
        {
                  "en": "Sampling data from different geographic strata",
                  "es": "Muestrear datos de diferentes estratos geográficos",
                  "de": "Daten aus verschiedenen geografischen Schichten ziehen",
                  "nl": "Data bemonsteren uit verschillende geografische lagen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Stratified sampling maintains the same class distribution in train and test sets as in the original dataset. This is crucial for imbalanced datasets to ensure representative evaluation and prevent bias, particularly important when some classes have very few examples.",
                  "es": "El muestreo estratificado mantiene la misma distribución de clases en conjuntos de entrenamiento y prueba que en conjunto de datos original. Esto es crucial para conjuntos de datos desbalanceados para asegurar evaluación representativa y prevenir sesgo, particularmente importante cuando algunas clases tienen muy pocos ejemplos.",
                  "de": "Stratifizierte Stichprobenziehung erhält dieselbe Klassenverteilung in Trainings- und Testsets wie im ursprünglichen Datensatz. Dies ist entscheidend für unausgeglichene Datensätze um repräsentative Bewertung sicherzustellen und Bias zu verhindern, besonders wichtig wenn einige Klassen sehr wenige Beispiele haben.",
                  "nl": "Gestratificeerde steekproeftrekking handhaaft dezelfde klassenverdeling in trainings- en testsets als in de originele dataset. Dit is cruciaal voor ongebalanceerde datasets om representatieve evaluatie te waarborgen en bias te voorkomen, bijzonder belangrijk wanneer sommige klassen zeer weinig voorbeelden hebben."
        }
      },
      {
        question: {
                  "en": "What is class imbalance and how does it affect training?",
                  "es": "¿Qué es el desequilibrio de clases y cómo afecta el entrenamiento?",
                  "de": "Was ist Klassenungleichgewicht und wie beeinflusst es das Training?",
                  "nl": "Wat is klasse-onbalans en hoe beïnvloedt het training?"
        },
        options: [
        {
                  "en": "Unequal importance of different classes",
                  "es": "Importancia desigual de diferentes clases",
                  "de": "Ungleiche Wichtigkeit verschiedener Klassen",
                  "nl": "Ongelijke belangrijkheid van verschillende klassen"
        },
        {
                  "en": "Imbalanced computational load per class",
                  "es": "Carga computacional desbalanceada por clase",
                  "de": "Unausgewogene Rechenlast pro Klasse",
                  "nl": "Ongebalanceerde computationele belasting per klasse"
        },
        {
                  "en": "When classes have vastly different sample counts, causing models to favor majority class",
                  "es": "Cuando clases tienen recuentos muestra vastamente diferentes, causando que modelos favorezcan clase mayoritaria",
                  "de": "Wenn Klassen stark unterschiedliche Probenzahlen haben, veranlasst Modelle Mehrheitsklasse zu bevorzugen",
                  "nl": "Wanneer klassen sterk verschillende steekproefaantallen hebben, waardoor modellen meerderheidsklasse bevoordelen"
        },
        {
                  "en": "Classes having different feature distributions",
                  "es": "Clases teniendo diferentes distribuciones características",
                  "de": "Klassen mit unterschiedlichen Merkmalsverteilungen",
                  "nl": "Klassen met verschillende kenmerkverdelingen"
        }
        ],
        correct: 2,
        explanation: {
                  "en": "Class imbalance occurs when training data has significantly more examples of some classes than others. Models tend to bias toward majority classes since minimizing overall error favors predicting the common class. Solutions include resampling, class weighting, synthetic data generation (SMOTE), or using appropriate evaluation metrics.",
                  "es": "El desequilibrio de clases ocurre cuando datos de entrenamiento tienen significativamente más ejemplos de algunas clases que otras. Los modelos tienden a sesgar hacia clases mayoritarias ya que minimizar error general favorece predecir la clase común. Soluciones incluyen remuestreo, ponderación de clases, generación de datos sintéticos (SMOTE) o usar métricas de evaluación apropiadas.",
                  "de": "Klassenungleichgewicht tritt auf wenn Trainingsdaten signifikant mehr Beispiele einiger Klassen als andere haben. Modelle neigen dazu Mehrheitsklassen zu bevorzugen da Minimierung des Gesamtfehlers Vorhersage der häufigen Klasse begünstigt. Lösungen umfassen Resampling, Klassengewichtung, synthetische Datengenerierung (SMOTE) oder Verwendung geeigneter Bewertungsmetriken.",
                  "nl": "Klasse-onbalans treedt op wanneer trainingsdata aanzienlijk meer voorbeelden van sommige klassen heeft dan andere. Modellen neigen te biassen naar meerderheidsklassen aangezien minimaliseren van totale fout voorspellen van de algemene klasse bevoordeelt. Oplossingen omvatten resampling, klasse weging, synthetische datageneratie (SMOTE) of gebruik van geschikte evaluatiemetrieken."
        }
      },
      {
        question: {
                  "en": "What is the no free lunch theorem in machine learning?",
                  "es": "¿Qué es el teorema de no hay almuerzo gratis en aprendizaje automático?",
                  "de": "Was ist das No-Free-Lunch-Theorem im maschinellen Lernen?",
                  "nl": "Wat is het no free lunch theorema in machine learning?"
        },
        options: [
        {
                  "en": "No single algorithm performs best for all problems; model selection depends on specific task",
                  "es": "Ningún algoritmo único rinde mejor para todos problemas; selección modelo depende tarea específica",
                  "de": "Kein einzelner Algorithmus leistet am besten für alle Probleme; Modellauswahl hängt von spezifischer Aufgabe ab",
                  "nl": "Geen enkel algoritme presteert best voor alle problemen; modelselectie hangt af van specifieke taak"
        },
        {
                  "en": "Machine learning always requires computational cost",
                  "es": "Aprendizaje automático siempre requiere costo computacional",
                  "de": "Maschinelles Lernen erfordert immer Rechenkosten",
                  "nl": "Machine learning vereist altijd computationele kosten"
        },
        {
                  "en": "Training requires significant resources",
                  "es": "Entrenamiento requiere recursos significativos",
                  "de": "Training erfordert bedeutende Ressourcen",
                  "nl": "Training vereist aanzienlijke bronnen"
        },
        {
                  "en": "Free datasets are never as good as paid ones",
                  "es": "Conjuntos datos gratuitos nunca son tan buenos como pagados",
                  "de": "Kostenlose Datensätze sind nie so gut wie bezahlte",
                  "nl": "Gratis datasets zijn nooit zo goed als betaalde"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "The no free lunch theorem states that averaged across all possible problems, no machine learning algorithm is universally superior to another. Every algorithm makes assumptions that work well for some problems but poorly for others. This emphasizes the importance of understanding your specific problem and selecting appropriate algorithms.",
                  "es": "El teorema de no hay almuerzo gratis establece que promediado a través de todos problemas posibles, ningún algoritmo de aprendizaje automático es universalmente superior a otro. Cada algoritmo hace suposiciones que funcionan bien para algunos problemas pero mal para otros. Esto enfatiza la importancia de entender tu problema específico y seleccionar algoritmos apropiados.",
                  "de": "Das No-Free-Lunch-Theorem besagt dass gemittelt über alle möglichen Probleme kein maschineller Lernalgorithmus universell einem anderen überlegen ist. Jeder Algorithmus macht Annahmen die für einige Probleme gut funktionieren aber schlecht für andere. Dies betont die Wichtigkeit Ihr spezifisches Problem zu verstehen und geeignete Algorithmen auszuwählen.",
                  "nl": "Het no free lunch theorema stelt dat gemiddeld over alle mogelijke problemen geen machine learning algoritme universeel superieur is aan een ander. Elk algoritme maakt aannames die goed werken voor sommige problemen maar slecht voor andere. Dit benadrukt het belang van het begrijpen van uw specifieke probleem en het selecteren van geschikte algoritmes."
        }
      },
      {
        question: {
                  "en": "What is domain adaptation in machine learning?",
                  "es": "¿Qué es la adaptación de dominio en aprendizaje automático?",
                  "de": "Was ist Domänenanpassung im maschinellen Lernen?",
                  "nl": "Wat is domeinaanpassing in machine learning?"
        },
        options: [
        {
                  "en": "Transferring model trained on source domain to perform well on different target domain",
                  "es": "Transferir modelo entrenado en dominio fuente para rendir bien en dominio objetivo diferente",
                  "de": "Modell das auf Quelldomäne trainiert wurde übertragen um auf verschiedener Zieldomäne gut zu funktionieren",
                  "nl": "Model getraind op brondomein overdragen om goed te presteren op verschillend doeldomein"
        },
        {
                  "en": "Converting data between different domains",
                  "es": "Convertir datos entre diferentes dominios",
                  "de": "Daten zwischen verschiedenen Domänen konvertieren",
                  "nl": "Data converteren tussen verschillende domeinen"
        },
        {
                  "en": "Adapting network architecture to domain requirements",
                  "es": "Adaptar arquitectura red a requisitos dominio",
                  "de": "Netzwerkarchitektur an Domänenanforderungen anpassen",
                  "nl": "Netwerkarchitectuur aanpassen aan domeinvereisten"
        },
        {
                  "en": "Training models for specific internet domains",
                  "es": "Entrenar modelos para dominios internet específicos",
                  "de": "Modelle für spezifische Internet-Domänen trainieren",
                  "nl": "Modellen trainen voor specifieke internet domeinen"
        }
        ],
        correct: 0,
        explanation: {
                  "en": "Domain adaptation addresses the challenge when training and deployment data come from different distributions (domains). For example, a model trained on product photos needs to work on user-uploaded images. Techniques include domain-adversarial training, fine-tuning, or learning domain-invariant features.",
                  "es": "La adaptación de dominio aborda el desafío cuando datos de entrenamiento y despliegue vienen de diferentes distribuciones (dominios). Por ejemplo, un modelo entrenado en fotos de productos necesita funcionar en imágenes subidas por usuarios. Las técnicas incluyen entrenamiento adversario de dominio, ajuste fino o aprender características invariantes de dominio.",
                  "de": "Domänenanpassung adressiert die Herausforderung wenn Trainings- und Deployment-Daten aus verschiedenen Verteilungen (Domänen) kommen. Zum Beispiel muss ein auf Produktfotos trainiertes Modell auf von Benutzern hochgeladenen Bildern funktionieren. Techniken umfassen domänen-adversariales Training, Feinabstimmung oder Lernen domänen-invarianter Merkmale.",
                  "nl": "Domeinaanpassing pakt de uitdaging aan wanneer trainings- en deployment data uit verschillende verdelingen (domeinen) komen. Bijvoorbeeld, een model getraind op productfoto's moet werken op door gebruikers geüploade afbeeldingen. Technieken omvatten domein-adversariaal trainen, fine-tuning of leren van domein-invariante kenmerken."
        }
      },
      {
        question: {
                  "en": "What is model calibration?",
                  "es": "¿Qué es la calibración del modelo?",
                  "de": "Was ist Modellkalibrierung?",
                  "nl": "Wat is modelkalibratie?"
        },
        options: [
        {
                  "en": "Calibrating hardware for optimal performance",
                  "es": "Calibrar hardware para rendimiento óptimo",
                  "de": "Hardware für optimale Leistung kalibrieren",
                  "nl": "Hardware kalibreren voor optimale prestaties"
        },
        {
                  "en": "Adjusting model predictions to accurately reflect true probabilities and confidence levels",
                  "es": "Ajustar predicciones modelo para reflejar con precisión probabilidades verdaderas y niveles confianza",
                  "de": "Modellvorhersagen anpassen um wahre Wahrscheinlichkeiten und Konfidenzniveaus genau widerzuspiegeln",
                  "nl": "Modelvoorspellingen aanpassen om echte waarschijnlijkheden en betrouwbaarheidsniveaus nauwkeurig weer te geven"
        },
        {
                  "en": "Normalizing input features",
                  "es": "Normalizar características entrada",
                  "de": "Eingabemerkmale normalisieren",
                  "nl": "Invoerkenmerken normaliseren"
        },
        {
                  "en": "Setting model hyperparameters",
                  "es": "Establecer hiperparámetros modelo",
                  "de": "Modell-Hyperparameter einstellen",
                  "nl": "Model hyperparameters instellen"
        }
        ],
        correct: 1,
        explanation: {
                  "en": "Model calibration ensures predicted probabilities match empirical frequencies. A well-calibrated model that predicts 80% confidence should be correct 80% of the time. Neural networks often produce overconfident predictions, requiring calibration techniques like temperature scaling or Platt scaling for reliable uncertainty estimates.",
                  "es": "La calibración del modelo asegura que probabilidades predichas coincidan con frecuencias empíricas. Un modelo bien calibrado que predice 80% de confianza debería ser correcto 80% del tiempo. Las redes neuronales a menudo producen predicciones sobre-confiadas, requiriendo técnicas de calibración como escalado de temperatura o escalado de Platt para estimaciones de incertidumbre confiables.",
                  "de": "Modellkalibrierung stellt sicher dass vorhergesagte Wahrscheinlichkeiten empirischen Häufigkeiten entsprechen. Ein gut kalibriertes Modell das 80% Konfidenz vorhersagt sollte 80% der Zeit korrekt sein. Neuronale Netzwerke produzieren oft übervertraute Vorhersagen, erfordern Kalibrierungstechniken wie Temperatur-Skalierung oder Platt-Skalierung für zuverlässige Unsicherheitsschätzungen.",
                  "nl": "Modelkalibratie zorgt ervoor dat voorspelde waarschijnlijkheden overeenkomen met empirische frequenties. Een goed gekalibreerd model dat 80% vertrouwen voorspelt zou 80% van de tijd correct moeten zijn. Neurale netwerken produceren vaak overmoedige voorspellingen, vereisen kalibratietechnieken zoals temperatuurschaling of Platt schaling voor betrouwbare onzekerheidsschattingen."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  }
})();