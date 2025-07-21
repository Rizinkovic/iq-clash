const questions = {
    "Mathematics": [
        {
            question: "Solve the system of equations: x + 2y - z = 3, 2x - y + 2z = 7, x + y + z = 6.",
            options: ["x = 1, y = 2, z = 3", "x = 2, y = 1, z = 3", "x = 3, y = 1, z = 2", "x = 2, y = 2, z = 2"],
            answer: "x = 2, y = 1, z = 3"
        },
        {
            question: "What is the value of sin(π/3) * cos(π/6)?",
            options: ["0.25", "0.433", "0.75", "0.866"],
            answer: "0.75"
        },
        {
            question: "If log₄(x) + log₄(16) = 3, what is the value of x?",
            options: ["4", "8", "16", "64"],
            answer: "4"
        },
        {
            question: "What is the volume of a cone with radius 5 cm and height 12 cm? (Use π ≈ 3.14)",
            options: ["314 cm³", "628 cm³", "942 cm³", "1256 cm³"],
            answer: "314 cm³"
        },
        {
            question: "What is the probability of getting exactly 3 heads in 5 flips of a fair coin?",
            options: ["5/32", "10/32", "15/32", "20/32"],
            answer: "10/32"
        },
        {
            question: "What is the sum of the infinite geometric series: 3 + 1.5 + 0.75 + 0.375 + ...?",
            options: ["4", "5", "6", "7"],
            answer: "6"
        },
        {
            question: "Solve the equation: x^3 - 8 = 0.",
            options: ["x = 2", "x = -2", "x = 2, -2", "x = 4"],
            answer: "x = 2"
        },
        {
            question: "What is the determinant of the matrix [[1, 2], [3, 4]]?",
            options: ["-2", "2", "10", "-10"],
            answer: "-2"
        },
        {
            question: "If a triangle has sides 7 cm, 24 cm, and 25 cm, what is its area?",
            options: ["84 cm²", "168 cm²", "252 cm²", "336 cm²"],
            answer: "84 cm²"
        },
        {
            question: "What is the value of the integral ∫(0 to 1) x^2 dx?",
            options: ["1/3", "1/2", "1", "2/3"],
            answer: "1/3"
        }
    ],
    "HumanBiology": [
        {
            question: "Which enzyme initiates DNA replication by unwinding the double helix?",
            options: ["DNA Polymerase", "Helicase", "Ligase", "Topoisomerase"],
            answer: "Helicase"
        },
        {
            question: "What is the primary function of the complement system in immunity?",
            options: ["Produce antibodies", "Enhance immune response", "Regulate blood pressure", "Transport nutrients"],
            answer: "Enhance immune response"
        },
        {
            question: "Which hormone is secreted by the pineal gland?",
            options: ["Melatonin", "Insulin", "Cortisol", "Oxytocin"],
            answer: "Melatonin"
        },
        {
            question: "What is the name of the process by which white blood cells move toward a chemical signal?",
            options: ["Phagocytosis", "Chemotaxis", "Pinocytosis", "Exocytosis"],
            answer: "Chemotaxis"
        },
        {
            question: "Which part of the brain regulates the autonomic nervous system?",
            options: ["Cerebellum", "Hypothalamus", "Amygdala", "Hippocampus"],
            answer: "Hypothalamus"
        },
        {
            question: "What is the primary role of transfer RNA (tRNA) in protein synthesis?",
            options: ["Carry amino acids", "Transcribe DNA", "Catalyze reactions", "Store genetic information"],
            answer: "Carry amino acids"
        },
        {
            question: "Which vitamin deficiency causes rickets?",
            options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
            answer: "Vitamin D"
        },
        {
            question: "What is the name of the fluid-filled sac surrounding a joint?",
            options: ["Synovial sac", "Bursa", "Meniscus", "Capsule"],
            answer: "Bursa"
        },
        {
            question: "Which part of the heart receives oxygenated blood from the lungs?",
            options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
            answer: "Left atrium"
        },
        {
            question: "What is the primary source of energy for mitochondria during ATP production?",
            options: ["Glucose", "Fatty acids", "Amino acids", "Pyruvate"],
            answer: "Pyruvate"
        }
    ],
    "History": [
        {
            question: "Which battle in 1066 marked the Norman conquest of England?",
            options: ["Battle of Agincourt", "Battle of Hastings", "Battle of Bannockburn", "Battle of Bosworth"],
            answer: "Battle of Hastings"
        },
        {
            question: "Who was the founder of the Maurya Empire in ancient India?",
            options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Kautilya"],
            answer: "Chandragupta Maurya"
        },
        {
            question: "In which year did the Rwandan Genocide occur?",
            options: ["1990", "1992", "1994", "1996"],
            answer: "1994"
        },
        {
            question: "Which ancient civilization developed the concept of zero?",
            options: ["Egyptian", "Mesopotamian", "Indian", "Chinese"],
            answer: "Indian"
        },
        {
            question: "What was the primary goal of the Non-Aligned Movement during the Cold War?",
            options: ["Promote capitalism", "Avoid alignment with superpowers", "Support communism", "Expand colonialism"],
            answer: "Avoid alignment with superpowers"
        },
        {
            question: "Who was the first African-American to win the Nobel Peace Prize?",
            options: ["Martin Luther King Jr.", "Ralph Bunche", "Barack Obama", "W.E.B. Du Bois"],
            answer: "Ralph Bunche"
        },
        {
            question: "Which treaty ended the Spanish-American War in 1898?",
            options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Guadalupe Hidalgo", "Treaty of Tordesillas"],
            answer: "Treaty of Paris"
        },
        {
            question: "Who led the Taiping Rebellion in 19th-century China?",
            options: ["Hong Xiuquan", "Sun Yat-sen", "Mao Zedong", "Chiang Kai-shek"],
            answer: "Hong Xiuquan"
        },
        {
            question: "Which event sparked the English Civil War in the 1640s?",
            options: ["Magna Carta", "Execution of Charles I", "Parliament’s dispute with Charles I", "Glorious Revolution"],
            answer: "Parliament’s dispute with Charles I"
        },
        {
            question: "Which empire was known for its capital at Tenochtitlán?",
            options: ["Inca", "Aztec", "Maya", "Olmec"],
            answer: "Aztec"
        }
    ],
    "Geography": [
        {
            question: "Which river is the longest in Europe?",
            options: ["Danube", "Volga", "Rhine", "Seine"],
            answer: "Volga"
        },
        {
            question: "What is the capital city of Mongolia?",
            options: ["Ulaanbaatar", "Astana", "Tashkent", "Bishkek"],
            answer: "Ulaanbaatar"
        },
        {
            question: "Which desert is located in southern Africa?",
            options: ["Sahara", "Kalahari", "Namib", "Gobi"],
            answer: "Kalahari"
        },
        {
            question: "What is the name of the strait separating Iceland and Greenland?",
            options: ["Denmark Strait", "Bering Strait", "Strait of Gibraltar", "Davis Strait"],
            answer: "Denmark Strait"
        },
        {
            question: "Which country has the most freshwater resources per capita?",
            options: ["Canada", "Brazil", "Russia", "Iceland"],
            answer: "Iceland"
        },
        {
            question: "What is the term for the region where a river deposits sediment at its mouth?",
            options: ["Estuary", "Delta", "Floodplain", "Tributary"],
            answer: "Delta"
        },
        {
            question: "Which mountain range is home to Mount Elbrus, the highest peak in Europe?",
            options: ["Alps", "Caucasus", "Pyrenees", "Ural"],
            answer: "Caucasus"
        },
        {
            question: "Which South American country is landlocked?",
            options: ["Bolivia", "Chile", "Peru", "Ecuador"],
            answer: "Bolivia"
        },
        {
            question: "What is the largest island in the Mediterranean Sea?",
            options: ["Cyprus", "Crete", "Sicily", "Sardinia"],
            answer: "Sicily"
        },
        {
            question: "Which ocean is home to the Great Barrier Reef?",
            options: ["Pacific", "Atlantic", "Indian", "Southern"],
            answer: "Pacific"
        }
    ],
    "ComputerScience": [
        {
            question: "What is the worst-case time complexity of Dijkstra’s algorithm with a priority queue?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(n³)"],
            answer: "O(n log n)"
        },
        {
            question: "Which programming language is known for its use in systems programming and was developed at Bell Labs?",
            options: ["C", "Python", "Java", "Rust"],
            answer: "C"
        },
        {
            question: "What does JSON stand for?",
            options: ["JavaScript Object Notation", "Java Source Object Notation", "JavaScript Online Notation", "Java Structured Object Notation"],
            answer: "JavaScript Object Notation"
        },
        {
            question: "Which data structure is used to implement a depth-first search?",
            options: ["Queue", "Stack", "Heap", "Array"],
            answer: "Stack"
        },
        {
            question: "What is the primary purpose of a load balancer in a network?",
            options: ["Encrypt data", "Distribute network traffic", "Store data", "Optimize code"],
            answer: "Distribute network traffic"
        },
        {
            question: "Which protocol is used for secure remote access to servers?",
            options: ["FTP", "SSH", "HTTP", "SMTP"],
            answer: "SSH"
        },
        {
            question: "What is the purpose of a semaphore in concurrent programming?",
            options: ["Increase speed", "Manage resource access", "Store data", "Optimize memory"],
            answer: "Manage resource access"
        },
        {
            question: "Which language is primarily used for Android app development?",
            options: ["Swift", "Kotlin", "C#", "Python"],
            answer: "Kotlin"
        },
        {
            question: "What is the purpose of a trie data structure?",
            options: ["Sort data", "Store strings efficiently", "Execute code", "Compress data"],
            answer: "Store strings efficiently"
        },
        {
            question: "What does UDP stand for in networking?",
            options: ["User Datagram Protocol", "Unified Data Protocol", "User Data Program", "Universal Datagram Protocol"],
            answer: "User Datagram Protocol"
        }
    ],
    "Finance": [
        {
            question: "What is the future value of $10,000 invested at 5% annual interest compounded quarterly for 4 years?",
            options: ["$12,155.06", "$12,201.90", "$12,250.00", "$12,310.13"],
            answer: "$12,201.90"
        },
        {
            question: "What is a derivative in financial markets?",
            options: ["A stock index", "A contract based on an underlying asset", "A type of bond", "A savings account"],
            answer: "A contract based on an underlying asset"
        },
        {
            question: "What is the term for the total value of a company’s assets minus its liabilities?",
            options: ["Net worth", "Market capitalization", "Revenue", "Cash flow"],
            answer: "Net worth"
        },
        {
            question: "If a bond’s price rises from $1,000 to $1,100, what is the percentage increase?",
            options: ["5%", "10%", "15%", "20%"],
            answer: "10%"
        },
        {
            question: "What is the primary purpose of a statement of retained earnings?",
            options: ["Show cash flow", "Track changes in equity", "Display assets", "Calculate taxes"],
            answer: "Track changes in equity"
        },
        {
            question: "What is the term for a strategy to reduce risk by investing in varied assets?",
            options: ["Hedging", "Arbitrage", "Diversification", "Leverage"],
            answer: "Diversification"
        },
        {
            question: "Which economic indicator measures the average change in consumer prices?",
            options: ["GDP", "CPI", "PPI", "Trade balance"],
            answer: "CPI"
        },
        {
            question: "What is the primary benefit of a traditional IRA in the U.S.?",
            options: ["Tax-free withdrawals", "Tax-deductible contributions", "Guaranteed returns", "Free stocks"],
            answer: "Tax-deductible contributions"
        },
        {
            question: "What is the term for a sudden increase in stock market prices?",
            options: ["Crash", "Rally", "Bear market", "Correction"],
            answer: "Rally"
        },
        {
            question: "What does ROE stand for in financial analysis?",
            options: ["Return on Equity", "Revenue on Expenditure", "Return on Earnings", "Ratio of Equity"],
            answer: "Return on Equity"
        }
    ],
    "Chemistry": [
        {
            question: "What is the molar mass of ethanol (C₂H₅OH)?",
            options: ["44 g/mol", "46 g/mol", "48 g/mol", "50 g/mol"],
            answer: "46 g/mol"
        },
        {
            question: "Which gas is the primary contributor to acid rain?",
            options: ["Carbon Dioxide", "Sulfur Dioxide", "Methane", "Ozone"],
            answer: "Sulfur Dioxide"
        },
        {
            question: "What type of bond is present in a nitrogen molecule (N₂)?",
            options: ["Single covalent", "Double covalent", "Triple covalent", "Ionic"],
            answer: "Triple covalent"
        },
        {
            question: "What is the name of the process where a solid turns into a liquid?",
            options: ["Sublimation", "Melting", "Condensation", "Evaporation"],
            answer: "Melting"
        },
        {
            question: "Which element has the chemical symbol Pb?",
            options: ["Phosphorus", "Lead", "Platinum", "Palladium"],
            answer: "Lead"
        },
        {
            question: "What is the pH of a solution with a hydroxide ion concentration of 10⁻³ M at 25°C?",
            options: ["3", "7", "11", "14"],
            answer: "11"
        },
        {
            question: "Which type of reaction involves the breakdown of a compound into simpler substances?",
            options: ["Synthesis", "Decomposition", "Single Replacement", "Double Replacement"],
            answer: "Decomposition"
        },
        {
            question: "What is the primary component of baking soda?",
            options: ["Sodium Chloride", "Sodium Bicarbonate", "Calcium Carbonate", "Potassium Hydroxide"],
            answer: "Sodium Bicarbonate"
        },
        {
            question: "Which element is used in nuclear reactors and has the symbol Pu?",
            options: ["Platinum", "Plutonium", "Palladium", "Promethium"],
            answer: "Plutonium"
        },
        {
            question: "What is the oxidation state of carbon in CO₂?",
            options: ["-2", "0", "+2", "+4"],
            answer: "+4"
        }
    ],
    "Logic": [
        {
            question: "What is the next number in the sequence: 9, 18, 36, 72, __?",
            options: ["108", "144", "216", "288"],
            answer: "144"
        },
        {
            question: "If no A are B, some B are C, and all C are D, what is the relationship between A and D?",
            options: ["All A are D", "Some A are D", "No A are D", "Cannot be determined"],
            answer: "No A are D"
        },
        {
            question: "What is the missing term in the sequence: 5, 12, 26, 54, __?",
            options: ["108", "110", "112", "114"],
            answer: "110"
        },
        {
            question: "If today is Sunday, what day will it be in 30 days?",
            options: ["Tuesday", "Wednesday", "Thursday", "Friday"],
            answer: "Tuesday"
        },
        {
            question: "Which shape completes the pattern: Pentagon, Hexagon, Square, Pentagon, __?",
            options: ["Hexagon", "Square", "Pentagon", "Triangle"],
            answer: "Hexagon"
        },
        {
            question: "If some X are Y, no Y are Z, and all Z are W, can some X be W?",
            options: ["Yes", "No", "Maybe", "Definitely"],
            answer: "No"
        },
        {
            question: "What is the next term in the sequence: 4, 9, 19, 39, __?",
            options: ["79", "80", "81", "82"],
            answer: "79"
        },
        {
            question: "Which number does not belong: 16, 25, 36, 49, 60?",
            options: ["16", "25", "36", "60"],
            answer: "60"
        },
        {
            question: "If A is older than B, C is younger than D, and B is older than C, who is the oldest?",
            options: ["A", "B", "C", "D"],
            answer: "A or D"
        },
        {
            question: "What is the next term in the sequence: 1, 5, 14, 30, 56, __?",
            options: ["86", "90", "92", "94"],
            answer: "92"
        }
    ],
    "English": [
        {
            question: "What is the synonym of 'perspicuous'?",
            options: ["Obscure", "Clear", "Vague", "Complex"],
            answer: "Clear"
        },
        {
            question: "Which sentence is grammatically correct?",
            options: ["The data is reliable.", "The data are reliable.", "The data was reliable.", "The data were reliable."],
            answer: "The data are reliable."
        },
        {
            question: "What is the antonym of 'euphemism'?",
            options: ["Exaggeration", "Dysphemism", "Metaphor", "Simile"],
            answer: "Dysphemism"
        },
        {
            question: "What is the literary term for a reference to another work of literature or art?",
            options: ["Allusion", "Allegory", "Analogy", "Apostrophe"],
            answer: "Allusion"
        },
        {
            question: "Which word is a subordinating conjunction?",
            options: ["And", "Or", "Although", "But"],
            answer: "Although"
        },
        {
            question: "What is the past participle of the verb 'bear' (to carry)?",
            options: ["Bore", "Borne", "Born", "Bearing"],
            answer: "Borne"
        },
        {
            question: "What is the meaning of the idiom 'take it with a grain of salt'?",
            options: ["Be skeptical", "Act quickly", "Celebrate success", "Ignore completely"],
            answer: "Be skeptical"
        },
        {
            question: "Which part of speech is the word 'ubiquity'?",
            options: ["Adjective", "Adverb", "Noun", "Verb"],
            answer: "Noun"
        },
        {
            question: "What is the plural form of 'criterion'?",
            options: ["Criterions", "Criteria", "Criterium", "Criterias"],
            answer: "Criteria"
        },
        {
            question: "What is the term for the repetition of vowel sounds in nearby words?",
            options: ["Alliteration", "Assonance", "Consonance", "Onomatopoeia"],
            answer: "Assonance"
        }
    ],
    "GeneralKnowledge": [
        {
            question: "Which country is home to the ancient ruins of Angkor Wat?",
            options: ["Thailand", "Cambodia", "Vietnam", "Laos"],
            answer: "Cambodia"
        },
        {
            question: "Who discovered the structure of DNA’s double helix?",
            options: ["Gregor Mendel", "Rosalind Franklin", "Watson and Crick", "Linus Pauling"],
            answer: "Watson and Crick"
        },
        {
            question: "What is the currency of Switzerland?",
            options: ["Euro", "Franc", "Krone", "Pound"],
            answer: "Franc"
        },
        {
            question: "Which animal is the only marsupial native to North America?",
            options: ["Kangaroo", "Opossum", "Koala", "Wombat"],
            answer: "Opossum"
        },
        {
            question: "What is the chemical formula for hydrochloric acid?",
            options: ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
            answer: "HCl"
        },
        {
            question: "Which city hosted the 2000 Summer Olympics?",
            options: ["Sydney", "Athens", "Beijing", "Atlanta"],
            answer: "Sydney"
        },
        {
            question: "What is the largest gland in the human body?",
            options: ["Thyroid", "Pancreas", "Liver", "Adrenal"],
            answer: "Liver"
        },
        {
            question: "Which element is used in semiconductors and has the symbol Si?",
            options: ["Silicon", "Sulfur", "Selenium", "Silver"],
            answer: "Silicon"
        },
        {
            question: "Who wrote the novel 'War and Peace'?",
            options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov", "Vladimir Nabokov"],
            answer: "Leo Tolstoy"
        },
        {
            question: "What is the approximate distance from the Earth to the Sun?",
            options: ["93 million miles", "63 million miles", "123 million miles", "153 million miles"],
            answer: "93 million miles"
        }
    ]
};