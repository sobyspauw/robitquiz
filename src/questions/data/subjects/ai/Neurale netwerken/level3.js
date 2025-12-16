// Neural Networks Quiz - Level 3: Learning Process
(function() {
  const level3 = {
    name: {
      en: "Learning Process",
      es: "Proceso de Aprendizaje",
      de: "Lernprozess",
      nl: "Leerproces"
    },
    questions: [
      {
        question: {
          en: "What is the main difference between supervised and unsupervised learning?",
          es: "¿Cuál es la principal diferencia entre aprendizaje supervisado y no supervisado?",
          de: "Was ist der Hauptunterschied zwischen überwachtem und unüberwachtem Lernen?",
          nl: "Wat is het hoofdverschil tussen supervised en unsupervised learning?"
        },
        options: [
          { en: "Supervised learning uses labeled data while unsupervised learning finds patterns in unlabeled data", es: "El aprendizaje supervisado usa datos etiquetados mientras que el no supervisado encuentra patrones en datos no etiquetados", de: "Überwachtes Lernen verwendet beschriftete Daten während unüberwachtes Lernen Muster in unbeschrifteten Daten findet", nl: "Supervised learning gebruikt gelabelde data terwijl unsupervised learning patronen vindt in ongelabelde data" },
          { en: "Supervised learning is faster than unsupervised learning", es: "El aprendizaje supervisado es más rápido que el no supervisado", de: "Überwachtes Lernen ist schneller als unüberwachtes Lernen", nl: "Supervised learning is sneller dan unsupervised learning" },
          { en: "Supervised learning requires more computational power", es: "El aprendizaje supervisado requiere más poder computacional", de: "Überwachtes Lernen erfordert mehr Rechenleistung", nl: "Supervised learning vereist meer rekenkracht" },
          { en: "Supervised learning only works with images", es: "El aprendizaje supervisado solo funciona con imágenes", de: "Überwachtes Lernen funktioniert nur mit Bildern", nl: "Supervised learning werkt alleen met afbeeldingen" }
        ],
        correct: 0,
        explanation: {
          en: "Supervised learning trains on labeled examples where both input and desired output are known, like image classification with labeled categories. Unsupervised learning discovers hidden patterns in data without labels, such as clustering or dimensionality reduction.",
          es: "El aprendizaje supervisado entrena con ejemplos etiquetados donde tanto la entrada como la salida deseada son conocidas, como clasificación de imágenes con categorías etiquetadas. El aprendizaje no supervisado descubre patrones ocultos en datos sin etiquetas, como agrupamiento o reducción de dimensionalidad.",
          de: "Überwachtes Lernen trainiert auf beschrifteten Beispielen wo sowohl Eingabe als auch gewünschte Ausgabe bekannt sind, wie Bildklassifikation mit beschrifteten Kategorien. Unüberwachtes Lernen entdeckt versteckte Muster in Daten ohne Beschriftungen, wie Clustering oder Dimensionalitätsreduktion.",
          nl: "Supervised learning traint op gelabelde voorbeelden waar zowel invoer als gewenste uitvoer bekend zijn, zoals beeldclassificatie met gelabelde categorieën. Unsupervised learning ontdekt verborgen patronen in data zonder labels, zoals clustering of dimensionaliteitsreductie."
        }
      },
      {
        question: {
          en: "What is overfitting in neural networks?",
          es: "¿Qué es el sobreajuste en las redes neuronales?",
          de: "Was ist Überanpassung in neuronalen Netzwerken?",
          nl: "Wat is overfitting in neurale netwerken?"
        },
        options: [
          { en: "When a model learns the training data too well and performs poorly on new data", es: "Cuando un modelo aprende los datos de entrenamiento demasiado bien y funciona mal en datos nuevos", de: "Wenn ein Modell die Trainingsdaten zu gut lernt und schlecht bei neuen Daten abschneidet", nl: "Wanneer een model de trainingsdata te goed leert en slecht presteert op nieuwe data" },
          { en: "When a model is too simple to capture patterns", es: "Cuando un modelo es demasiado simple para capturar patrones", de: "Wenn ein Modell zu einfach ist um Muster zu erfassen", nl: "Wanneer een model te simpel is om patronen vast te leggen" },
          { en: "When training takes too much time", es: "Cuando el entrenamiento toma demasiado tiempo", de: "Wenn das Training zu viel Zeit braucht", nl: "Wanneer training te veel tijd kost" },
          { en: "When the network has too few parameters", es: "Cuando la red tiene muy pocos parámetros", de: "Wenn das Netzwerk zu wenige Parameter hat", nl: "Wanneer het netwerk te weinig parameters heeft" }
        ],
        correct: 0,
        explanation: {
          en: "Overfitting occurs when a neural network memorizes the training data rather than learning generalizable patterns. The model performs excellently on training data but poorly on validation or test data because it hasn't learned to generalize to new, unseen examples.",
          es: "El sobreajuste ocurre cuando una red neuronal memoriza los datos de entrenamiento en lugar de aprender patrones generalizables. El modelo funciona excelentemente en datos de entrenamiento pero mal en datos de validación o prueba porque no ha aprendido a generalizar a ejemplos nuevos no vistos.",
          de: "Überanpassung tritt auf wenn ein neuronales Netzwerk die Trainingsdaten auswendig lernt statt verallgemeinerbare Muster zu lernen. Das Modell funktioniert hervorragend bei Trainingsdaten aber schlecht bei Validierungs- oder Testdaten weil es nicht gelernt hat auf neue ungesehene Beispiele zu verallgemeinern.",
          nl: "Overfitting treedt op wanneer een neuraal netwerk de trainingsdata uit het hoofd leert in plaats van generaliseerbare patronen te leren. Het model presteert uitstekend op trainingsdata maar slecht op validatie- of testdata omdat het niet heeft geleerd te generaliseren naar nieuwe, ongeziene voorbeelden."
        }
      },
      {
        question: {
          en: "What is the purpose of a validation set?",
          es: "¿Cuál es el propósito de un conjunto de validación?",
          de: "Was ist der Zweck eines Validierungssatzes?",
          nl: "Wat is het doel van een validatieset?"
        },
        options: [
          { en: "To evaluate model performance during training and tune hyperparameters without using test data", es: "Para evaluar el rendimiento del modelo durante el entrenamiento y ajustar hiperparámetros sin usar datos de prueba", de: "Um Modellleistung während des Trainings zu bewerten und Hyperparameter zu optimieren ohne Testdaten zu verwenden", nl: "Om modelprestaties tijdens training te evalueren en hyperparameters af te stellen zonder testdata te gebruiken" },
          { en: "To store backup copies of training data", es: "Para almacenar copias de respaldo de los datos de entrenamiento", de: "Um Sicherungskopien der Trainingsdaten zu speichern", nl: "Om back-upkopieën van trainingsdata op te slaan" },
          { en: "To speed up the training process", es: "Para acelerar el proceso de entrenamiento", de: "Um den Trainingsprozess zu beschleunigen", nl: "Om het trainingsproces te versnellen" },
          { en: "To replace the test set entirely", es: "Para reemplazar completamente el conjunto de prueba", de: "Um den Testsatz vollständig zu ersetzen", nl: "Om de testset volledig te vervangen" }
        ],
        correct: 0,
        explanation: {
          en: "A validation set is used to monitor training progress and make decisions about hyperparameters, model architecture, and when to stop training. It helps detect overfitting and ensures the test set remains unbiased for final performance evaluation.",
          es: "Un conjunto de validación se usa para monitorear el progreso del entrenamiento y tomar decisiones sobre hiperparámetros, arquitectura del modelo y cuándo detener el entrenamiento. Ayuda a detectar sobreajuste y asegura que el conjunto de prueba permanezca imparcial para la evaluación final del rendimiento.",
          de: "Ein Validierungssatz wird verwendet um Trainingsfortschritt zu überwachen und Entscheidungen über Hyperparameter, Modellarchitektur und wann das Training zu stoppen ist zu treffen. Er hilft Überanpassung zu erkennen und stellt sicher dass der Testsatz für die finale Leistungsbewertung unvoreingenommen bleibt.",
          nl: "Een validatieset wordt gebruikt om trainingsvoortgang te monitoren en beslissingen te nemen over hyperparameters, modelarchitectuur en wanneer training te stoppen. Het helpt overfitting te detecteren en zorgt ervoor dat de testset onbevooroordeeld blijft voor finale prestatie-evaluatie."
        }
      },
      {
        question: {
          en: "What is underfitting in machine learning?",
          es: "¿Qué es el subajuste en el aprendizaje automático?",
          de: "Was ist Unteranpassung im maschinellen Lernen?",
          nl: "Wat is underfitting in machine learning?"
        },
        options: [
          { en: "When a model is too simple to capture the underlying patterns in the data", es: "Cuando un modelo es demasiado simple para capturar los patrones subyacentes en los datos", de: "Wenn ein Modell zu einfach ist um die zugrundeliegenden Muster in den Daten zu erfassen", nl: "Wanneer een model te simpel is om de onderliggende patronen in de data vast te leggen" },
          { en: "When a model performs too well on training data", es: "Cuando un modelo funciona demasiado bien en los datos de entrenamiento", de: "Wenn ein Modell zu gut bei Trainingsdaten abschneidet", nl: "Wanneer een model te goed presteert op trainingsdata" },
          { en: "When training data is insufficient", es: "Cuando los datos de entrenamiento son insuficientes", de: "Wenn Trainingsdaten unzureichend sind", nl: "Wanneer trainingsdata onvoldoende is" },
          { en: "When the model has too many parameters", es: "Cuando el modelo tiene demasiados parámetros", de: "Wenn das Modell zu viele Parameter hat", nl: "Wanneer het model te veel parameters heeft" }
        ],
        correct: 0,
        explanation: {
          en: "Underfitting occurs when a model is too simple or lacks sufficient capacity to learn the underlying patterns in the data. Both training and validation performance are poor because the model cannot capture the complexity of the relationship between inputs and outputs.",
          es: "El subajuste ocurre cuando un modelo es demasiado simple o carece de capacidad suficiente para aprender los patrones subyacentes en los datos. Tanto el rendimiento de entrenamiento como el de validación son pobres porque el modelo no puede capturar la complejidad de la relación entre entradas y salidas.",
          de: "Unteranpassung tritt auf wenn ein Modell zu einfach ist oder nicht genügend Kapazität hat um die zugrundeliegenden Muster in den Daten zu lernen. Sowohl Trainings- als auch Validierungsleistung sind schlecht weil das Modell die Komplexität der Beziehung zwischen Eingaben und Ausgaben nicht erfassen kann.",
          nl: "Underfitting treedt op wanneer een model te simpel is of onvoldoende capaciteit heeft om de onderliggende patronen in de data te leren. Zowel trainings- als validatieprestaties zijn slecht omdat het model de complexiteit van de relatie tussen invoer en uitvoer niet kan vastleggen."
        }
      },
      {
        question: {
          en: "What is cross-validation in machine learning?",
          es: "¿Qué es la validación cruzada en el aprendizaje automático?",
          de: "Was ist Kreuzvalidierung im maschinellen Lernen?",
          nl: "Wat is cross-validatie in machine learning?"
        },
        options: [
          { en: "A technique that divides data into multiple folds to get more robust performance estimates", es: "Una técnica que divide los datos en múltiples pliegues para obtener estimaciones de rendimiento más robustas", de: "Eine Technik die Daten in mehrere Falten teilt um robustere Leistungsschätzungen zu erhalten", nl: "Een techniek die data opdeelt in meerdere vouwen om robuustere prestatieschattingen te krijgen" },
          { en: "A method to validate user inputs", es: "Un método para validar entradas de usuario", de: "Eine Methode um Benutzereingaben zu validieren", nl: "Een methode om gebruikersinvoer te valideren" },
          { en: "A way to cross-reference different datasets", es: "Una forma de hacer referencias cruzadas entre diferentes conjuntos de datos", de: "Eine Art verschiedene Datensätze zu verkreuzen", nl: "Een manier om verschillende datasets kruislings te refereren" },
          { en: "A technique to combine multiple models", es: "Una técnica para combinar múltiples modelos", de: "Eine Technik um mehrere Modelle zu kombinieren", nl: "Een techniek om meerdere modellen te combineren" }
        ],
        correct: 0,
        explanation: {
          en: "Cross-validation divides the dataset into k folds, trains on k-1 folds and validates on the remaining fold, repeating this process k times. This provides a more reliable estimate of model performance and reduces dependence on a particular train-validation split.",
          es: "La validación cruzada divide el conjunto de datos en k pliegues, entrena en k-1 pliegues y valida en el pliegue restante, repitiendo este proceso k veces. Esto proporciona una estimación más confiable del rendimiento del modelo y reduce la dependencia de una división particular de entrenamiento-validación.",
          de: "Kreuzvalidierung teilt den Datensatz in k Falten, trainiert auf k-1 Falten und validiert auf der verbleibenden Falte, wiederholt diesen Prozess k mal. Dies bietet eine zuverlässigere Schätzung der Modellleistung und reduziert Abhängigkeit von einer bestimmten Training-Validierung-Aufteilung.",
          nl: "Cross-validatie verdeelt de dataset in k vouwen, traint op k-1 vouwen en valideert op de resterende vouw, herhaalt dit proces k keer. Dit biedt een betrouwbaardere schatting van modelprestaties en vermindert afhankelijkheid van een bepaalde train-validatie verdeling."
        }
      },
      {
        question: {
          en: "What is reinforcement learning?",
          es: "¿Qué es el aprendizaje por refuerzo?",
          de: "Was ist Reinforcement Learning?",
          nl: "Wat is reinforcement learning?"
        },
        options: [
          { en: "A learning paradigm where an agent learns through trial and error by receiving rewards or penalties", es: "Un paradigma de aprendizaje donde un agente aprende a través de prueba y error al recibir recompensas o penalizaciones", de: "Ein Lernparadigma wo ein Agent durch Versuch und Irrtum lernt indem er Belohnungen oder Strafen erhält", nl: "Een leerparadigma waarbij een agent leert door trial-and-error door beloningen of straffen te ontvangen" },
          { en: "A method to strengthen neural network connections", es: "Un método para fortalecer las conexiones de la red neuronal", de: "Eine Methode um neuronale Netzwerkverbindungen zu stärken", nl: "Een methode om neurale netwerkverbindingen te versterken" },
          { en: "A technique to reinforce training data", es: "Una técnica para reforzar los datos de entrenamiento", de: "Eine Technik um Trainingsdaten zu verstärken", nl: "Een techniek om trainingsdata te versterken" },
          { en: "A way to add more layers to the network", es: "Una forma de agregar más capas a la red", de: "Eine Art mehr Schichten zum Netzwerk hinzuzufügen", nl: "Een manier om meer lagen aan het netwerk toe te voegen" }
        ],
        correct: 0,
        explanation: {
          en: "Reinforcement learning is a machine learning paradigm where an agent learns to make decisions by interacting with an environment. The agent receives rewards for good actions and penalties for bad ones, gradually learning optimal behavior through experience.",
          es: "El aprendizaje por refuerzo es un paradigma de aprendizaje automático donde un agente aprende a tomar decisiones interactuando con un entorno. El agente recibe recompensas por buenas acciones y penalizaciones por las malas, aprendiendo gradualmente el comportamiento óptimo a través de la experiencia.",
          de: "Reinforcement Learning ist ein maschinelles Lernparadigma wo ein Agent lernt Entscheidungen zu treffen durch Interaktion mit einer Umgebung. Der Agent erhält Belohnungen für gute Aktionen und Strafen für schlechte, lernt allmählich optimales Verhalten durch Erfahrung.",
          nl: "Reinforcement learning is een machine learning paradigma waarbij een agent leert beslissingen te nemen door interactie met een omgeving. De agent ontvangt beloningen voor goede acties en straffen voor slechte, leert geleidelijk optimaal gedrag door ervaring."
        }
      },
      {
        question: {
          en: "What is the difference between online and offline learning?",
          es: "¿Cuál es la diferencia entre aprendizaje en línea y fuera de línea?",
          de: "Was ist der Unterschied zwischen Online- und Offline-Lernen?",
          nl: "Wat is het verschil tussen online en offline learning?"
        },
        options: [
          { en: "Online learning updates the model continuously with new data, while offline learning trains on a fixed dataset", es: "Aprendizaje en línea actualiza modelo continuamente con nuevos datos, mientras aprendizaje fuera línea entrena en conjunto datos fijo", de: "Online-Lernen aktualisiert das Modell kontinuierlich mit neuen Daten, während Offline-Lernen auf einem festen Datensatz trainiert", nl: "Online learning werkt het model continu bij met nieuwe data, terwijl offline learning traint op een vaste dataset" },
          { en: "Online learning requires internet connection, offline learning doesn't", es: "El aprendizaje en línea requiere conexión a internet, el fuera de línea no", de: "Online-Lernen erfordert Internetverbindung, Offline-Lernen nicht", nl: "Online learning vereist internetverbinding, offline learning niet" },
          { en: "Online learning is faster than offline learning", es: "El aprendizaje en línea es más rápido que el fuera de línea", de: "Online-Lernen ist schneller als Offline-Lernen", nl: "Online learning is sneller dan offline learning" },
          { en: "There is no difference between them", es: "No hay diferencia entre ellos", de: "Es gibt keinen Unterschied zwischen ihnen", nl: "Er is geen verschil tussen hen" }
        ],
        correct: 0,
        explanation: {
          en: "Online learning (incremental learning) continuously updates the model as new data arrives, making it suitable for streaming data and changing environments. Offline learning (batch learning) trains on a complete, fixed dataset and doesn't update until retrained on a new dataset.",
          es: "El aprendizaje en línea (aprendizaje incremental) actualiza continuamente el modelo cuando llegan nuevos datos, haciéndolo adecuado para datos de transmisión y entornos cambiantes. El aprendizaje fuera de línea (aprendizaje por lotes) entrena en un conjunto de datos completo y fijo y no se actualiza hasta ser reentrenado en un nuevo conjunto de datos.",
          de: "Online-Lernen (inkrementelles Lernen) aktualisiert kontinuierlich das Modell wenn neue Daten ankommen, macht es geeignet für Streaming-Daten und sich ändernde Umgebungen. Offline-Lernen (Batch-Lernen) trainiert auf einem vollständigen, festen Datensatz und aktualisiert nicht bis es auf einem neuen Datensatz neu trainiert wird.",
          nl: "Online learning (incrementeel leren) werkt het model continu bij wanneer nieuwe data arriveert, waardoor het geschikt is voor streaming data en veranderende omgevingen. Offline learning (batch learning) traint op een complete, vaste dataset en werkt niet bij tot het opnieuw getraind wordt op een nieuwe dataset."
        }
      },
      {
        question: {
          en: "What is transfer learning?",
          es: "¿Qué es el aprendizaje por transferencia?",
          de: "Was ist Transfer Learning?",
          nl: "Wat is transfer learning?"
        },
        options: [
          { en: "Using knowledge from a pre-trained model on one task to improve learning on a related task", es: "Usar conocimiento de un modelo preentrenado en una tarea para mejorar el aprendizaje en una tarea relacionada", de: "Verwendung von Wissen aus einem vortrainierten Modell bei einer Aufgabe um das Lernen bei einer verwandten Aufgabe zu verbessern", nl: "Het gebruik van kennis van een voorgetraind model op één taak om het leren op een gerelateerde taak te verbeteren" },
          { en: "Moving data from one computer to another", es: "Mover datos de una computadora a otra", de: "Daten von einem Computer auf einen anderen übertragen", nl: "Data verplaatsen van de ene computer naar de andere" },
          { en: "Converting one file format to another", es: "Convertir un formato de archivo a otro", de: "Ein Dateiformat in ein anderes umwandeln", nl: "Het converteren van één bestandsformaat naar een ander" },
          { en: "Transferring weights between identical networks", es: "Transferir pesos entre redes idénticas", de: "Gewichte zwischen identischen Netzwerken übertragen", nl: "Gewichten overdragen tussen identieke netwerken" }
        ],
        correct: 0,
        explanation: {
          en: "Transfer learning leverages knowledge gained from training a model on one task to improve performance on a different but related task. This is particularly useful when you have limited training data for the target task, as you can build upon features learned from a larger dataset.",
          es: "El aprendizaje por transferencia aprovecha el conocimiento obtenido del entrenamiento de un modelo en una tarea para mejorar el rendimiento en una tarea diferente pero relacionada. Esto es particularmente útil cuando tienes datos de entrenamiento limitados para la tarea objetivo, ya que puedes construir sobre características aprendidas de un conjunto de datos más grande.",
          de: "Transfer Learning nutzt Wissen das beim Training eines Modells für eine Aufgabe gewonnen wurde um die Leistung bei einer anderen aber verwandten Aufgabe zu verbessern. Dies ist besonders nützlich wenn Sie begrenzte Trainingsdaten für die Zielaufgabe haben, da Sie auf Merkmalen aufbauen können die aus einem größeren Datensatz gelernt wurden.",
          nl: "Transfer learning maakt gebruik van kennis verkregen uit het trainen van een model op één taak om prestaties op een andere maar gerelateerde taak te verbeteren. Dit is bijzonder nuttig wanneer je beperkte trainingsdata hebt voor de doeltaak, omdat je kunt voortbouwen op kenmerken geleerd van een grotere dataset."
        }
      },
      {
        question: {
          en: "What is early stopping in neural network training?",
          es: "¿Qué es la parada temprana en el entrenamiento de redes neuronales?",
          de: "Was ist Early Stopping beim Training neuronaler Netzwerke?",
          nl: "Wat is early stopping bij het trainen van neurale netwerken?"
        },
        options: [
          { en: "A technique that stops training when validation performance stops improving to prevent overfitting", es: "Una técnica que detiene el entrenamiento cuando el rendimiento de validación deja de mejorar para prevenir el sobreajuste", de: "Eine Technik die das Training stoppt wenn die Validierungsleistung aufhört sich zu verbessern um Überanpassung zu verhindern", nl: "Een techniek die training stopt wanneer validatieprestaties stoppen met verbeteren om overfitting te voorkomen" },
          { en: "Stopping training after a fixed number of epochs", es: "Detener el entrenamiento después de un número fijo de épocas", de: "Training nach einer festen Anzahl von Epochen stoppen", nl: "Training stoppen na een vast aantal epochs" },
          { en: "Terminating training when loss reaches zero", es: "Terminar el entrenamiento cuando la pérdida llega a cero", de: "Training beenden wenn der Verlust null erreicht", nl: "Training beëindigen wanneer verlies nul bereikt" },
          { en: "Stopping training due to computational limits", es: "Detener el entrenamiento debido a límites computacionales", de: "Training aufgrund von Rechengrenzen stoppen", nl: "Training stoppen vanwege computationele beperkingen" }
        ],
        correct: 0,
        explanation: {
          en: "Early stopping monitors validation performance during training and stops when it begins to degrade, even if training loss continues to decrease. This prevents overfitting by stopping before the model memorizes the training data too well.",
          es: "La parada temprana monitorea el rendimiento de validación durante el entrenamiento y se detiene cuando comienza a degradarse, incluso si la pérdida de entrenamiento continúa disminuyendo. Esto previene el sobreajuste deteniéndose antes de que el modelo memorice demasiado bien los datos de entrenamiento.",
          de: "Early Stopping überwacht die Validierungsleistung während des Trainings und stoppt wenn sie sich zu verschlechtern beginnt, auch wenn der Trainingsverlust weiter abnimmt. Dies verhindert Überanpassung durch Stoppen bevor das Modell die Trainingsdaten zu gut auswendig lernt.",
          nl: "Early stopping monitort validatieprestaties tijdens training en stopt wanneer deze beginnen te verslechteren, zelfs als trainingsverlies blijft afnemen. Dit voorkomt overfitting door te stoppen voordat het model de trainingsdata te goed uit het hoofd leert."
        }
      },
      {
        question: {
          en: "What is regularization in neural networks?",
          es: "¿Qué es la regularización en las redes neuronales?",
          de: "Was ist Regularisierung in neuronalen Netzwerken?",
          nl: "Wat is regularisatie in neurale netwerken?"
        },
        options: [
          { en: "Techniques to prevent overfitting by adding constraints or penalties to the model", es: "Técnicas para prevenir el sobreajuste agregando restricciones o penalizaciones al modelo", de: "Techniken um Überanpassung zu verhindern durch Hinzufügen von Beschränkungen oder Strafen zum Modell", nl: "Technieken om overfitting te voorkomen door beperkingen of straffen aan het model toe te voegen" },
          { en: "Making the network structure more regular", es: "Hacer que la estructura de la red sea más regular", de: "Die Netzwerkstruktur regelmäßiger machen", nl: "De netwerkstructuur regelmatiger maken" },
          { en: "Standardizing input data", es: "Estandarizar datos de entrada", de: "Eingabedaten standardisieren", nl: "Invoerdata standaardiseren" },
          { en: "Setting all weights to regular intervals", es: "Establecer todos los pesos en intervalos regulares", de: "Alle Gewichte auf regelmäßige Intervalle setzen", nl: "Alle gewichten op regelmatige intervallen instellen" }
        ],
        correct: 0,
        explanation: {
          en: "Regularization encompasses various techniques like L1/L2 penalties, dropout, and weight decay that constrain the model's complexity to prevent overfitting. These methods help the model generalize better to unseen data by discouraging overly complex patterns.",
          es: "La regularización abarca varias técnicas como penalizaciones L1/L2, dropout y decay de pesos que restringen la complejidad del modelo para prevenir el sobreajuste. Estos métodos ayudan al modelo a generalizar mejor a datos no vistos desalentando patrones excesivamente complejos.",
          de: "Regularisierung umfasst verschiedene Techniken wie L1/L2-Strafen, Dropout und Weight Decay die die Komplexität des Modells beschränken um Überanpassung zu verhindern. Diese Methoden helfen dem Modell besser auf ungesehene Daten zu generalisieren durch Entmutigung übermäßig komplexer Muster.",
          nl: "Regularisatie omvat verschillende technieken zoals L1/L2-straffen, dropout en weight decay die de complexiteit van het model beperken om overfitting te voorkomen. Deze methoden helpen het model beter te generaliseren naar ongeziene data door het ontmoedigen van overly complexe patronen."
        }
      },
      {
        question: {
          en: "What is the vanishing gradient problem?",
          es: "¿Qué es el problema del gradiente que se desvanece?",
          de: "Was ist das Problem des verschwindenden Gradienten?",
          nl: "Wat is het probleem van verdwijnende gradiënten?"
        },
        options: [
          { en: "When gradients become very small in deep networks, making it difficult to train early layers", es: "Cuando los gradientes se vuelven muy pequeños en redes profundas, dificultando el entrenamiento de las primeras capas", de: "Wenn Gradienten in tiefen Netzwerken sehr klein werden und es schwierig machen frühe Schichten zu trainieren", nl: "Wanneer gradiënten zeer klein worden in diepe netwerken, waardoor het moeilijk wordt om vroege lagen te trainen" },
          { en: "When the network loses gradient information permanently", es: "Cuando la red pierde información de gradiente permanentemente", de: "Wenn das Netzwerk Gradienteninformation dauerhaft verliert", nl: "Wanneer het netwerk gradiëntinformatie permanent verliest" },
          { en: "When gradients disappear due to computational errors", es: "Cuando los gradientes desaparecen debido a errores computacionales", de: "Wenn Gradienten aufgrund von Rechenfehlern verschwinden", nl: "Wanneer gradiënten verdwijnen door computationele fouten" },
          { en: "When the learning rate is set too high", es: "Cuando la tasa de aprendizaje se establece demasiado alta", de: "Wenn die Lernrate zu hoch eingestellt ist", nl: "Wanneer de leersnelheid te hoog is ingesteld" }
        ],
        correct: 0,
        explanation: {
          en: "The vanishing gradient problem occurs in deep neural networks where gradients become exponentially smaller as they propagate backward through layers. This makes it extremely difficult to update weights in early layers, effectively preventing them from learning meaningful representations.",
          es: "El problema del gradiente que se desvanece ocurre en redes neuronales profundas donde los gradientes se vuelven exponencialmente más pequeños al propagarse hacia atrás a través de las capas. Esto hace extremadamente difícil actualizar pesos en las primeras capas, evitando efectivamente que aprendan representaciones significativas.",
          de: "Das Problem des verschwindenden Gradienten tritt in tiefen neuronalen Netzwerken auf wo Gradienten exponentiell kleiner werden wenn sie rückwärts durch Schichten propagieren. Dies macht es extrem schwierig Gewichte in frühen Schichten zu aktualisieren, verhindert effektiv dass sie bedeutungsvolle Darstellungen lernen.",
          nl: "Het probleem van verdwijnende gradiënten treedt op in diepe neurale netwerken waar gradiënten exponentieel kleiner worden als ze achterwaarts door lagen propageren. Dit maakt het extreem moeilijk om gewichten in vroege lagen bij te werken, waardoor ze effectief worden verhinderd betekenisvolle representaties te leren."
        }
      },
      {
        question: {
          en: "What is the exploding gradient problem?",
          es: "¿Qué es el problema del gradiente explosivo?",
          de: "Was ist das Problem explodierender Gradienten?",
          nl: "Wat is het probleem van exploderende gradiënten?"
        },
        options: [
          { en: "When gradients become extremely large, causing unstable training and weight updates", es: "Cuando los gradientes se vuelven extremadamente grandes, causando entrenamiento inestable y actualizaciones de pesos", de: "Wenn Gradienten extrem groß werden und instabiles Training und Gewichtsaktualisierungen verursachen", nl: "Wanneer gradiënten extreem groot worden, wat instabiele training en gewichtupdates veroorzaakt" },
          { en: "When the network architecture explodes in size", es: "Cuando la arquitectura de la red explota en tamaño", de: "Wenn die Netzwerkarchitektur in der Größe explodiert", nl: "Wanneer de netwerkarchitectuur in grootte explodeert" },
          { en: "When computational resources are exceeded", es: "Cuando se exceden los recursos computacionales", de: "Wenn Rechenressourcen überschritten werden", nl: "Wanneer computationele bronnen worden overschreden" },
          { en: "When the training data becomes too large", es: "Cuando los datos de entrenamiento se vuelven demasiado grandes", de: "Wenn die Trainingsdaten zu groß werden", nl: "Wanneer de trainingsdata te groot wordt" }
        ],
        correct: 0,
        explanation: {
          en: "The exploding gradient problem occurs when gradients become extremely large during backpropagation, leading to unstable training where weights change drastically. This can cause the model to diverge and fail to converge to a solution.",
          es: "El problema del gradiente explosivo ocurre cuando los gradientes se vuelven extremadamente grandes durante la retropropagación, llevando a entrenamiento inestable donde los pesos cambian drásticamente. Esto puede causar que el modelo diverja y falle en converger a una solución.",
          de: "Das Problem explodierender Gradienten tritt auf wenn Gradienten während der Rückpropagation extrem groß werden, was zu instabilem Training führt wo sich Gewichte drastisch ändern. Dies kann dazu führen dass das Modell divergiert und nicht zu einer Lösung konvergiert.",
          nl: "Het probleem van exploderende gradiënten treedt op wanneer gradiënten extreem groot worden tijdens backpropagation, wat leidt tot instabiele training waarbij gewichten drastisch veranderen. Dit kan ervoor zorgen dat het model divergeert en er niet in slaagt te convergeren naar een oplossing."
        }
      },
      {
        question: {
          en: "What is gradient clipping?",
          es: "¿Qué es el recorte de gradiente?",
          de: "Was ist Gradient Clipping?",
          nl: "Wat is gradient clipping?"
        },
        options: [
          { en: "A technique to limit gradient values to prevent the exploding gradient problem", es: "Una técnica para limitar los valores de gradiente para prevenir el problema del gradiente explosivo", de: "Eine Technik um Gradientenwerte zu begrenzen um das Problem explodierender Gradienten zu verhindern", nl: "Een techniek om gradiëntwaarden te begrenzen om het probleem van exploderende gradiënten te voorkomen" },
          { en: "Removing unnecessary gradients from the network", es: "Eliminar gradientes innecesarios de la red", de: "Unnötige Gradienten aus dem Netzwerk entfernen", nl: "Onnodige gradiënten uit het netwerk verwijderen" },
          { en: "Cutting connections between layers", es: "Cortar conexiones entre capas", de: "Verbindungen zwischen Schichten schneiden", nl: "Verbindingen tussen lagen doorsnijden" },
          { en: "Reducing the number of training samples", es: "Reducir el número de muestras de entrenamiento", de: "Die Anzahl der Trainingsproben reduzieren", nl: "Het aantal trainingssteekproeven verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "Gradient clipping is a technique that caps gradient values at a predefined threshold during training. When gradients exceed this threshold, they are scaled down to prevent the exploding gradient problem and maintain training stability.",
          es: "El recorte de gradiente es una técnica que limita los valores de gradiente en un umbral predefinido durante el entrenamiento. Cuando los gradientes exceden este umbral, se escalan hacia abajo para prevenir el problema del gradiente explosivo y mantener la estabilidad del entrenamiento.",
          de: "Gradient Clipping ist eine Technik die Gradientenwerte bei einem vordefinierten Schwellenwert während des Trainings begrenzt. Wenn Gradienten diesen Schwellenwert überschreiten, werden sie herunterskaliert um das Problem explodierender Gradienten zu verhindern und Trainingsstabilität zu erhalten.",
          nl: "Gradient clipping is een techniek die gradiëntwaarden beperkt tot een voorgedefinieerde drempelwaarde tijdens training. Wanneer gradiënten deze drempel overschrijden, worden ze naar beneden geschaald om het probleem van exploderende gradiënten te voorkomen en trainingsstabiliteit te behouden."
        }
      },
      {
        question: {
          en: "What is curriculum learning?",
          es: "¿Qué es el aprendizaje curricular?",
          de: "Was ist Curriculum Learning?",
          nl: "Wat is curriculum learning?"
        },
        options: [
          { en: "A training strategy that presents examples from easy to difficult, mimicking human learning", es: "Una estrategia de entrenamiento que presenta ejemplos de fácil a difícil, imitando el aprendizaje humano", de: "Eine Trainingsstrategie die Beispiele von einfach zu schwierig präsentiert, menschliches Lernen nachahmend", nl: "Een trainingsstrategie die voorbeelden van gemakkelijk naar moeilijk presenteert, menselijk leren nabootsend" },
          { en: "Learning about school curricula", es: "Aprender sobre planes de estudio escolares", de: "Über Schulcurricula lernen", nl: "Leren over schoolcurricula" },
          { en: "A method to organize training data alphabetically", es: "Un método para organizar datos de entrenamiento alfabéticamente", de: "Eine Methode um Trainingsdaten alphabetisch zu organisieren", nl: "Een methode om trainingsdata alfabetisch te organiseren" },
          { en: "Training multiple models simultaneously", es: "Entrenar múltiples modelos simultáneamente", de: "Mehrere Modelle gleichzeitig trainieren", nl: "Meerdere modellen tegelijkertijd trainen" }
        ],
        correct: 0,
        explanation: {
          en: "Curriculum learning is inspired by how humans learn - starting with simple concepts and gradually moving to more complex ones. By training neural networks on easier examples first, then progressively introducing harder ones, models often achieve better performance and faster convergence.",
          es: "El aprendizaje curricular se inspira en cómo aprenden los humanos - comenzando con conceptos simples y moviéndose gradualmente a otros más complejos. Al entrenar redes neuronales en ejemplos más fáciles primero, luego introducir progresivamente los más difíciles, los modelos a menudo logran mejor rendimiento y convergencia más rápida.",
          de: "Curriculum Learning ist inspiriert davon wie Menschen lernen - beginnend mit einfachen Konzepten und sich allmählich zu komplexeren bewegend. Durch Training neuronaler Netzwerke auf einfacheren Beispielen zuerst, dann progressives Einführen schwierigerer, erreichen Modelle oft bessere Leistung und schnellere Konvergenz.",
          nl: "Curriculum learning is geïnspireerd door hoe mensen leren - beginnend met eenvoudige concepten en geleidelijk overgaand naar complexere. Door neurale netwerken eerst te trainen op gemakkelijkere voorbeelden, en dan progressief moeilijkere te introduceren, bereiken modellen vaak betere prestaties en snellere convergentie."
        }
      },
      {
        question: {
          en: "What is data augmentation in machine learning?",
          es: "¿Qué es la aumentación de datos en el aprendizaje automático?",
          de: "Was ist Datenaugmentation im maschinellen Lernen?",
          nl: "Wat is data-augmentatie in machine learning?"
        },
        options: [
          { en: "Creating additional training examples by applying transformations to existing data", es: "Crear ejemplos de entrenamiento adicionales aplicando transformaciones a datos existentes", de: "Zusätzliche Trainingsbeispiele erstellen durch Anwendung von Transformationen auf bestehende Daten", nl: "Het creëren van aanvullende trainingsvoorbeelden door transformaties toe te passen op bestaande data" },
          { en: "Increasing the size of the neural network", es: "Aumentar el tamaño de la red neuronal", de: "Die Größe des neuronalen Netzwerks erhöhen", nl: "De grootte van het neurale netwerk vergroten" },
          { en: "Adding more layers to the model", es: "Agregar más capas al modelo", de: "Mehr Schichten zum Modell hinzufügen", nl: "Meer lagen aan het model toevoegen" },
          { en: "Collecting more real-world data", es: "Recopilar más datos del mundo real", de: "Mehr reale Daten sammeln", nl: "Meer echte data verzamelen" }
        ],
        correct: 0,
        explanation: {
          en: "Data augmentation artificially increases the training dataset size by creating modified versions of existing examples. Common techniques include rotation, scaling, cropping, and adding noise. This helps prevent overfitting and improves model generalization.",
          es: "La aumentación de datos aumenta artificialmente el tamaño del conjunto de datos de entrenamiento creando versiones modificadas de ejemplos existentes. Las técnicas comunes incluyen rotación, escalado, recorte y agregar ruido. Esto ayuda a prevenir el sobreajuste y mejora la generalización del modelo.",
          de: "Datenaugmentation erhöht künstlich die Größe des Trainingsdatensatzes durch Erstellen modifizierter Versionen bestehender Beispiele. Häufige Techniken umfassen Rotation, Skalierung, Zuschneiden und Hinzufügen von Rauschen. Dies hilft Überanpassung zu verhindern und verbessert Modellgeneralisierung.",
          nl: "Data-augmentatie verhoogt kunstmatig de grootte van de trainingsdataset door gemodificeerde versies van bestaande voorbeelden te creëren. Veelvoorkomende technieken zijn rotatie, schaling, bijsnijden en ruis toevoegen. Dit helpt overfitting te voorkomen en verbetert modelgeneralisatie."
        }
      },
      {
        question: {
          en: "What is ensemble learning?",
          es: "¿Qué es el aprendizaje en conjunto?",
          de: "Was ist Ensemble Learning?",
          nl: "Wat is ensemble learning?"
        },
        options: [
          { en: "Combining multiple models to make better predictions than any individual model", es: "Combinar múltiples modelos para hacer mejores predicciones que cualquier modelo individual", de: "Mehrere Modelle kombinieren um bessere Vorhersagen zu machen als jedes einzelne Modell", nl: "Het combineren van meerdere modellen om betere voorspellingen te maken dan elk individueel model" },
          { en: "Training models to play music together", es: "Entrenar modelos para tocar música juntos", de: "Modelle trainieren um zusammen Musik zu spielen", nl: "Modellen trainen om samen muziek te maken" },
          { en: "Using the same model multiple times", es: "Usar el mismo modelo múltiples veces", de: "Dasselbe Modell mehrmals verwenden", nl: "Hetzelfde model meerdere keren gebruiken" },
          { en: "Training one large model instead of many small ones", es: "Entrenar un modelo grande en lugar de muchos pequeños", de: "Ein großes Modell trainieren statt vieler kleiner", nl: "Één groot model trainen in plaats van veel kleine" }
        ],
        correct: 0,
        explanation: {
          en: "Ensemble learning combines predictions from multiple models to achieve better performance than individual models. Common techniques include bagging (like Random Forest), boosting (like XGBoost), and stacking. The idea is that different models make different types of errors, so combining them reduces overall error.",
          es: "El aprendizaje en conjunto combina predicciones de múltiples modelos para lograr mejor rendimiento que modelos individuales. Las técnicas comunes incluyen bagging (como Random Forest), boosting (como XGBoost) y stacking. La idea es que diferentes modelos cometen diferentes tipos de errores, así que combinarlos reduce el error general.",
          de: "Ensemble Learning kombiniert Vorhersagen von mehreren Modellen um bessere Leistung als einzelne Modelle zu erreichen. Häufige Techniken umfassen Bagging (wie Random Forest), Boosting (wie XGBoost) und Stacking. Die Idee ist dass verschiedene Modelle verschiedene Arten von Fehlern machen, also reduziert sie zu kombinieren den Gesamtfehler.",
          nl: "Ensemble learning combineert voorspellingen van meerdere modellen om betere prestaties te bereiken dan individuele modellen. Veelvoorkomende technieken zijn bagging (zoals Random Forest), boosting (zoals XGBoost) en stacking. Het idee is dat verschillende modellen verschillende soorten fouten maken, dus het combineren ervan vermindert de totale fout."
        }
      },
      {
        question: {
          en: "What is the bias-variance tradeoff?",
          es: "¿Qué es el compromiso sesgo-varianza?",
          de: "Was ist der Bias-Varianz-Tradeoff?",
          nl: "Wat is de bias-variantie afweging?"
        },
        options: [
          { en: "The fundamental tradeoff between a model's ability to fit training data and generalize to new data", es: "Compromiso fundamental entre capacidad modelo ajustarse a datos entrenamiento y generalizar a nuevos datos", de: "Der grundlegende Kompromiss zwischen der Fähigkeit eines Modells Trainingsdaten anzupassen und auf neue Daten zu generalisieren", nl: "De fundamentele afweging tussen het vermogen van een model om trainingsdata te fitten en te generaliseren naar nieuwe data" },
          { en: "A method to balance positive and negative examples", es: "Un método para equilibrar ejemplos positivos y negativos", de: "Eine Methode um positive und negative Beispiele auszugleichen", nl: "Een methode om positieve en negatieve voorbeelden in evenwicht te brengen" },
          { en: "The difference between training and testing accuracy", es: "La diferencia entre precisión de entrenamiento y prueba", de: "Der Unterschied zwischen Training und Test-Genauigkeit", nl: "Het verschil tussen trainings- en testnauwkeurigheid" },
          { en: "A technique to reduce computational complexity", es: "Una técnica para reducir la complejidad computacional", de: "Eine Technik um Rechenkomplexität zu reduzieren", nl: "Een techniek om computationele complexiteit te verminderen" }
        ],
        correct: 0,
        explanation: {
          en: "The bias-variance tradeoff describes the fundamental tension in machine learning: high bias models (underfitting) are too simple and miss patterns, while high variance models (overfitting) are too complex and don't generalize. The goal is finding the sweet spot that minimizes total error.",
          es: "El compromiso sesgo-varianza describe la tensión fundamental en el aprendizaje automático: modelos de alto sesgo (subajuste) son demasiado simples y pierden patrones, mientras que modelos de alta varianza (sobreajuste) son demasiado complejos y no generalizan. El objetivo es encontrar el punto óptimo que minimiza el error total.",
          de: "Der Bias-Varianz-Tradeoff beschreibt die grundlegende Spannung im maschinellen Lernen: Modelle mit hohem Bias (Unteranpassung) sind zu einfach und verpassen Muster, während Modelle mit hoher Varianz (Überanpassung) zu komplex sind und nicht generalisieren. Das Ziel ist den optimalen Punkt zu finden der den Gesamtfehler minimiert.",
          nl: "De bias-variantie afweging beschrijft de fundamentele spanning in machine learning: hoge bias modellen (underfitting) zijn te simpel en missen patronen, terwijl hoge variantie modellen (overfitting) te complex zijn en niet generaliseren. Het doel is het vinden van het optimale punt dat de totale fout minimaliseert."
        }
      },
      {
        question: {
          en: "What is dropout and how does it prevent overfitting?",
          es: "¿Qué es dropout y cómo previene el sobreajuste?",
          de: "Was ist Dropout und wie verhindert es Überanpassung?",
          nl: "Wat is dropout en hoe voorkomt het overfitting?"
        },
        options: [
          { en: "A regularization technique that randomly deactivates neurons during training to prevent co-adaptation", es: "Una técnica de regularización que desactiva aleatoriamente neuronas durante el entrenamiento para prevenir la co-adaptación", de: "Eine Regularisierungstechnik die zufällig Neuronen während des Trainings deaktiviert um Co-Adaptation zu verhindern", nl: "Een regularisatietechniek die willekeurig neuronen deactiveert tijdens training om co-adaptatie te voorkomen" },
          { en: "Removing students from training programs", es: "Eliminar estudiantes de programas de entrenamiento", de: "Studenten aus Trainingsprogrammen entfernen", nl: "Studenten uit trainingsprogramma's verwijderen" },
          { en: "Deleting unnecessary training data", es: "Eliminar datos de entrenamiento innecesarios", de: "Unnötige Trainingsdaten löschen", nl: "Onnodige trainingsdata verwijderen" },
          { en: "Stopping training early", es: "Detener el entrenamiento temprano", de: "Training früh stoppen", nl: "Training vroeg stoppen" }
        ],
        correct: 0,
        explanation: {
          en: "Dropout randomly sets a fraction of neurons to zero during each training step, forcing the network to not rely on specific neurons and preventing co-adaptation. This creates a more robust model that generalizes better to new data by reducing overfitting.",
          es: "Dropout establece aleatoriamente una fracción de neuronas a cero durante cada paso de entrenamiento, forzando a la red a no depender de neuronas específicas y previniendo la co-adaptación. Esto crea un modelo más robusto que generaliza mejor a nuevos datos reduciendo el sobreajuste.",
          de: "Dropout setzt zufällig einen Bruchteil von Neuronen auf null während jedem Trainingsschritt, zwingt das Netzwerk nicht auf spezifische Neuronen zu verlassen und verhindert Co-Adaptation. Dies erstellt ein robusteres Modell das besser auf neue Daten generalisiert durch Reduzierung von Überanpassung.",
          nl: "Dropout stelt willekeurig een fractie van neuronen in op nul tijdens elke trainingsstap, waardoor het netwerk gedwongen wordt niet te vertrouwen op specifieke neuronen en co-adaptatie wordt voorkomen. Dit creëert een robuuster model dat beter generaliseert naar nieuwe data door overfitting te verminderen."
        }
      },
      {
        question: {
          en: "What is the difference between generative and discriminative models?",
          es: "¿Cuál es la diferencia entre modelos generativos y discriminativos?",
          de: "Was ist der Unterschied zwischen generativen und diskriminativen Modellen?",
          nl: "Wat is het verschil tussen generatieve en discriminatieve modellen?"
        },
        options: [
          { en: "Generative models learn the joint probability distribution while discriminative models learn decision boundaries", es: "Los modelos generativos aprenden la distribución de probabilidad conjunta mientras que los modelos discriminativos aprenden fronteras de decisión", de: "Generative Modelle lernen die gemeinsame Wahrscheinlichkeitsverteilung während diskriminative Modelle Entscheidungsgrenzen lernen", nl: "Generatieve modellen leren de gezamenlijke waarschijnlijkheidsverdeling terwijl discriminatieve modellen beslissingsgrenzen leren" },
          { en: "Generative models are faster than discriminative models", es: "Los modelos generativos son más rápidos que los modelos discriminativos", de: "Generative Modelle sind schneller als diskriminative Modelle", nl: "Generatieve modellen zijn sneller dan discriminatieve modellen" },
          { en: "Generative models only work with images", es: "Los modelos generativos solo funcionan con imágenes", de: "Generative Modelle funktionieren nur mit Bildern", nl: "Generatieve modellen werken alleen met afbeeldingen" },
          { en: "There is no significant difference", es: "No hay diferencia significativa", de: "Es gibt keinen signifikanten Unterschied", nl: "Er is geen significant verschil" }
        ],
        correct: 0,
        explanation: {
          en: "Generative models learn P(X,Y) - the full joint distribution of data and labels, allowing them to generate new samples. Discriminative models learn P(Y|X) - the conditional probability, focusing on decision boundaries for classification. Examples: GANs are generative, while most classifiers are discriminative.",
          es: "Los modelos generativos aprenden P(X,Y) - la distribución conjunta completa de datos y etiquetas, permitiéndoles generar nuevas muestras. Los modelos discriminativos aprenden P(Y|X) - la probabilidad condicional, enfocándose en fronteras de decisión para clasificación. Ejemplos: las GAN son generativas, mientras que la mayoría de clasificadores son discriminativos.",
          de: "Generative Modelle lernen P(X,Y) - die vollständige gemeinsame Verteilung von Daten und Labels, ermöglichen ihnen neue Proben zu generieren. Diskriminative Modelle lernen P(Y|X) - die bedingte Wahrscheinlichkeit, fokussieren auf Entscheidungsgrenzen für Klassifikation. Beispiele: GANs sind generativ, während die meisten Klassifikatoren diskriminativ sind.",
          nl: "Generatieve modellen leren P(X,Y) - de volledige gezamenlijke verdeling van data en labels, waardoor ze nieuwe steekproeven kunnen genereren. Discriminatieve modellen leren P(Y|X) - de conditionele waarschijnlijkheid, gericht op beslissingsgrenzen voor classificatie. Voorbeelden: GANs zijn generatief, terwijl de meeste classificeerders discriminatief zijn."
        }
      },
      {
        question: {
          en: "What is the purpose of mini-batch gradient descent in neural network training?",
          es: "¿Cuál es el propósito del descenso de gradiente en mini-lotes en el entrenamiento de redes neuronales?",
          de: "Was ist der Zweck des Mini-Batch-Gradientenabstiegs beim Training neuronaler Netzwerke?",
          nl: "Wat is het doel van mini-batch gradient descent bij het trainen van neurale netwerken?"
        },
        options: [
          { en: "Balance between computational efficiency and gradient stability", es: "Equilibrar entre eficiencia computacional y estabilidad del gradiente", de: "Ausgleich zwischen rechnerischer Effizienz und Gradientenstabilität", nl: "Balans tussen computationele efficiëntie en gradiëntstabiliteit" },
          { en: "Reduce the size of neural networks", es: "Reducir el tamaño de las redes neuronales", de: "Die Größe neuronaler Netzwerke reduzieren", nl: "De grootte van neurale netwerken verkleinen" },
          { en: "Create smaller training datasets", es: "Crear conjuntos de datos de entrenamiento más pequeños", de: "Kleinere Trainingsdatensätze erstellen", nl: "Kleinere trainingsdatasets creëren" },
          { en: "Minimize the number of training epochs", es: "Minimizar el número de épocas de entrenamiento", de: "Die Anzahl der Trainingsepochen minimieren", nl: "Het aantal trainingsepochs minimaliseren" }
        ],
        correct: 0,
        explanation: {
          en: "Mini-batch gradient descent processes a small subset of training data at each iteration, providing a balance between the noise reduction of batch gradient descent and the computational efficiency of stochastic gradient descent.",
          es: "El descenso de gradiente en mini-lotes procesa un pequeño subconjunto de datos de entrenamiento en cada iteración, proporcionando un equilibrio entre la reducción de ruido del descenso de gradiente por lotes y la eficiencia computacional del descenso de gradiente estocástico.",
          de: "Mini-Batch-Gradientenabstieg verarbeitet eine kleine Teilmenge der Trainingsdaten bei jeder Iteration und bietet ein Gleichgewicht zwischen der Rauschreduzierung des Batch-Gradientenabstiegs und der rechnerischen Effizienz des stochastischen Gradientenabstiegs.",
          nl: "Mini-batch gradient descent verwerkt een kleine subset van trainingsdata bij elke iteratie, wat een balans biedt tussen de ruisvermindering van batch gradient descent en de computationele efficiëntie van stochastic gradient descent."
        }
      }
    ]
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = level3;
  } else if (typeof window !== 'undefined') {
    window.level3 = level3;
  }
})();