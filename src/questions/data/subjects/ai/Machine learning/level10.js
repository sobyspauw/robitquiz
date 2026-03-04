// Machine learning - level10
// Total questions: 100
// Quality issues fixed: 2026-03-03T10:17:56.094Z

module.exports = {
    questions: [
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            },
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            },
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            },
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            },
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            },
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            },
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            },
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            },
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            },
            {
                    "question": {
                            "en": "What is L1 Regularization used for?",
                            "es": "¿Para qué se usa L1 Regularization?",
                            "de": "Wofür wird L1 Regularization verwendet?",
                            "nl": "Waarvoor wordt L1 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds absolute value penalty: promotes sparsity",
                                    "es": "adds absolute value penalty: promotes sparsity",
                                    "de": "adds absolute value penalty: promotes sparsity",
                                    "nl": "adds absolute value penalty: promotes sparsity"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "es": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "de": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection",
                            "nl": "L1 Regularization (Lasso): adds absolute value penalty. promotes sparsity. feature selection"
                    }
            },
            {
                    "question": {
                            "en": "What is L2 Regularization used for?",
                            "es": "¿Para qué se usa L2 Regularization?",
                            "de": "Wofür wird L2 Regularization verwendet?",
                            "nl": "Waarvoor wordt L2 Regularization gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "adds squared penalty: shrinks weights",
                                    "es": "adds squared penalty: shrinks weights",
                                    "de": "adds squared penalty: shrinks weights",
                                    "nl": "adds squared penalty: shrinks weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "es": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "de": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights",
                            "nl": "L2 Regularization (Ridge): adds squared penalty. shrinks weights. prevents large weights"
                    }
            },
            {
                    "question": {
                            "en": "What is Elastic Net used for?",
                            "es": "¿Para qué se usa Elastic Net?",
                            "de": "Wofür wird Elastic Net verwendet?",
                            "nl": "Waarvoor wordt Elastic Net gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "best of both: alpha parameter",
                                    "es": "best of both: alpha parameter",
                                    "de": "best of both: alpha parameter",
                                    "nl": "best of both: alpha parameter"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "es": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "de": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features",
                            "nl": "Elastic Net (combines L1 and L2): best of both. alpha parameter. useful for correlated features"
                    }
            },
            {
                    "question": {
                            "en": "What is Transfer Learning used for?",
                            "es": "¿Para qué se usa Transfer Learning?",
                            "de": "Wofür wird Transfer Learning verwendet?",
                            "nl": "Waarvoor wordt Transfer Learning gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "fine-tune for new task: saves time and data",
                                    "es": "fine-tune for new task: saves time and data",
                                    "de": "fine-tune for new task: saves time and data",
                                    "nl": "fine-tune for new task: saves time and data"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "es": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "de": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models",
                            "nl": "Transfer Learning (reuse pretrained model): fine-tune for new task. saves time and data. ImageNet models"
                    }
            },
            {
                    "question": {
                            "en": "What is Data Augmentation used for?",
                            "es": "¿Para qué se usa Data Augmentation?",
                            "de": "Wofür wird Data Augmentation verwendet?",
                            "nl": "Waarvoor wordt Data Augmentation gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "rotations, flips, crops: reduces overfitting",
                                    "es": "rotations, flips, crops: reduces overfitting",
                                    "de": "rotations, flips, crops: reduces overfitting",
                                    "nl": "rotations, flips, crops: reduces overfitting"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "es": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "de": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization",
                            "nl": "Data Augmentation (artificially expand dataset): rotations, flips, crops. reduces overfitting. improves generalization"
                    }
            },
            {
                    "question": {
                            "en": "What is Attention Mechanism used for?",
                            "es": "¿Para qué se usa Attention Mechanism?",
                            "de": "Wofür wird Attention Mechanism verwendet?",
                            "nl": "Waarvoor wordt Attention Mechanism gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "used in Transformers: Vaswani et al 2017",
                                    "es": "used in Transformers: Vaswani et al 2017",
                                    "de": "used in Transformers: Vaswani et al 2017",
                                    "nl": "used in Transformers: Vaswani et al 2017"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "es": "Attention Mechanism (focus on important parts): used en Transformers. Vaswani et al 2017. revolutionized NLP",
                            "de": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP",
                            "nl": "Attention Mechanism (focus on important parts): used in Transformers. Vaswani et al 2017. revolutionized NLP"
                    }
            },
            {
                    "question": {
                            "en": "What is Residual Networks used for?",
                            "es": "¿Para qué se usa Residual Networks?",
                            "de": "Wofür wird Residual Networks verwendet?",
                            "nl": "Waarvoor wordt Residual Networks gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "skip connections: trains very deep networks",
                                    "es": "skip connections: trains very deep networks",
                                    "de": "skip connections: trains very deep networks",
                                    "nl": "skip connections: trains very deep networks"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "es": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "de": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015",
                            "nl": "Residual Networks (ResNet): skip connections. trains very deep networks. He et al 2015"
                    }
            },
            {
                    "question": {
                            "en": "What is Convolutional Layer used for?",
                            "es": "¿Para qué se usa Convolutional Layer?",
                            "de": "Wofür wird Convolutional Layer verwendet?",
                            "nl": "Waarvoor wordt Convolutional Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "learns spatial features: shares weights",
                                    "es": "learns spatial features: shares weights",
                                    "de": "learns spatial features: shares weights",
                                    "nl": "learns spatial features: shares weights"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "es": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "de": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant",
                            "nl": "Convolutional Layer (CNN building block): learns spatial features. shares weights. translation invariant"
                    }
            },
            {
                    "question": {
                            "en": "What is Recurrent Layer used for?",
                            "es": "¿Para qué se usa Recurrent Layer?",
                            "de": "Wofür wird Recurrent Layer verwendet?",
                            "nl": "Waarvoor wordt Recurrent Layer gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "processes sequences: has memory",
                                    "es": "processes sequences: has memory",
                                    "de": "processes sequences: has memory",
                                    "nl": "processes sequences: has memory"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "es": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "de": "Recurrent Layer (RNN): processes sequences. has memory. time series and text",
                            "nl": "Recurrent Layer (RNN): processes sequences. has memory. time series and text"
                    }
            },
            {
                    "question": {
                            "en": "What is Autoencoder used for?",
                            "es": "¿Para qué se usa Autoencoder?",
                            "de": "Wofür wird Autoencoder verwendet?",
                            "nl": "Waarvoor wordt Autoencoder gebruikt?"
                    },
                    "options": [
                            {
                                    "en": "encoder-decoder: dimensionality reduction",
                                    "es": "encoder-decoder: dimensionality reduction",
                                    "de": "encoder-decoder: dimensionality reduction",
                                    "nl": "encoder-decoder: dimensionality reduction"
                            },
                            {
                                    "en": "Nothing useful",
                                    "es": "Nada útil",
                                    "de": "Nichts Nützliches",
                                    "nl": "Niets nuttigs"
                            },
                            {
                                    "en": "Only research",
                                    "es": "Solo investigación",
                                    "de": "Nur Forschung",
                                    "nl": "Alleen onderzoek"
                            },
                            {
                                    "en": "Deprecated technique",
                                    "es": "Técnica obsoleta",
                                    "de": "Veraltete Technik",
                                    "nl": "Verouderde techniek"
                            }
                    ],
                    "correct": 0,
                    "explanation": {
                            "en": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "es": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "de": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection",
                            "nl": "Autoencoder (unsupervised learning): encoder-decoder. dimensionality reduction. anomaly detection"
                    }
            }
    ]
};
