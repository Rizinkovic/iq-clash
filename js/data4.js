const questions = {
    "Mathematics": [
        {
            question: "Solve the system of equations: 3x + 2y = 12 and 2x - y = 1.",
            options: ["x = 2, y = 3", "x = 3, y = 1.5", "x = 4, y = 0", "x = 1, y = 5"],
            answer: "x = 2, y = 3"
        },
        {
            question: "What is the value of cos(60°) * sin(30°)?",
            options: ["0.25", "0.5", "0.75", "1"],
            answer: "0.25"
        },
        {
            question: "If log₅(x) = 3, what is the value of x?",
            options: ["15", "25", "125", "625"],
            answer: "125"
        },
        {
            question: "What is the surface area of a sphere with radius 4 cm? (Use π ≈ 3.14)",
            options: ["50.24 cm²", "100.48 cm²", "200.96 cm²", "803.84 cm²"],
            answer: "200.96 cm²"
        },
        {
            question: "What is the probability of drawing two aces in a row from a standard deck without replacement?",
            options: ["1/169", "1/221", "1/2652", "1/1326"],
            answer: "1/221"
        },
        {
            question: "What is the sum of the first 5 terms of the geometric sequence: 2, 6, 18, 54, ...?",
            options: ["242", "245", "728", "1094"],
            answer: "242"
        },
        {
            question: "Solve the quadratic equation x^2 - 6x + 9 = 0.",
            options: ["x = 3", "x = -3", "x = 3, -3", "x = 6"],
            answer: "x = 3"
        },
        {
            question: "What is the angle between the vectors (1, 2) and (2, -1)?",
            options: ["0°", "45°", "90°", "180°"],
            answer: "90°"
        },
        {
            question: "What is the value of the infinite series 1 + 1/2 + 1/4 + 1/8 + ...?",
            options: ["1", "1.5", "2", "3"],
            answer: "2"
        },
        {
            question: "If a triangle has sides 5 cm, 12 cm, and 13 cm, what is the area?",
            options: ["24 cm²", "30 cm²", "60 cm²", "78 cm²"],
            answer: "30 cm²"
        }
    ],
    "HumanBiology": [
        {
            question: "Which enzyme in saliva begins the digestion of starches?",
            options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
            answer: "Amylase"
        },
        {
            question: "What is the primary function of the lymphatic system?",
            options: ["Transport oxygen", "Regulate temperature", "Fight infections and drain fluids", "Digest proteins"],
            answer: "Fight infections and drain fluids"
        },
        {
            question: "Which hormone stimulates red blood cell production?",
            options: ["Insulin", "Erythropoietin", "Adrenaline", "Thyroxine"],
            answer: "Erythropoietin"
        },
        {
            question: "What is the name of the process by which cells engulf large particles?",
            options: ["Phagocytosis", "Pinocytosis", "Exocytosis", "Osmosis"],
            answer: "Phagocytosis"
        },
        {
            question: "Which part of the brain is responsible for regulating body temperature?",
            options: ["Cerebellum", "Hypothalamus", "Medulla", "Thalamus"],
            answer: "Hypothalamus"
        },
        {
            question: "What is the primary function of hemoglobin in red blood cells?",
            options: ["Clot blood", "Transport oxygen", "Fight infections", "Store nutrients"],
            answer: "Transport oxygen"
        },
        {
            question: "Which vitamin deficiency causes scurvy?",
            options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
            answer: "Vitamin C"
        },
        {
            question: "What is the name of the structure that connects bones to bones?",
            options: ["Tendon", "Ligament", "Cartilage", "Synovium"],
            answer: "Ligament"
        },
        {
            question: "Which part of the neuron receives signals from other neurons?",
            options: ["Axon", "Dendrite", "Soma", "Myelin sheath"],
            answer: "Dendrite"
        },
        {
            question: "What is the primary source of energy for cellular respiration?",
            options: ["Fatty acids", "Glucose", "Amino acids", "Nucleotides"],
            answer: "Glucose"
        }
    ],
    "History": [
        {
            question: "Which battle ended Napoleon’s rule as French Emperor in 1815?",
            options: ["Battle of Trafalgar", "Battle of Austerlitz", "Battle of Waterloo", "Battle of Leipzig"],
            answer: "Battle of Waterloo"
        },
        {
            question: "Who was the first ruler of the Mongol Empire?",
            options: ["Kublai Khan", "Genghis Khan", "Ögedei Khan", "Batu Khan"],
            answer: "Genghis Khan"
        },
        {
            question: "In which year did the Cuban Missile Crisis occur?",
            options: ["1959", "1961", "1962", "1964"],
            answer: "1962"
        },
        {
            question: "Which ancient civilization built Machu Picchu?",
            options: ["Aztec", "Maya", "Inca", "Olmec"],
            answer: "Inca"
        },
        {
            question: "What was the primary purpose of the Marshall Plan after World War II?",
            options: ["Rebuild Europe", "Colonize Africa", "Promote trade", "Develop nuclear weapons"],
            answer: "Rebuild Europe"
        },
        {
            question: "Who was the first woman to fly solo across the Atlantic Ocean?",
            options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Jacqueline Cochran"],
            answer: "Amelia Earhart"
        },
        {
            question: "Which treaty ended the Thirty Years’ War in 1648?",
            options: ["Treaty of Paris", "Treaty of Westphalia", "Treaty of Versailles", "Treaty of Utrecht"],
            answer: "Treaty of Westphalia"
        },
        {
            question: "Who led the Haitian Revolution against French colonial rule?",
            options: ["Toussaint Louverture", "Jean-Jacques Dessalines", "Henri Christophe", "Alexandre Pétion"],
            answer: "Toussaint Louverture"
        },
        {
            question: "Which event marked the beginning of the Protestant Reformation?",
            options: ["Council of Trent", "Luther’s 95 Theses", "Edict of Nantes", "Peace of Augsburg"],
            answer: "Luther’s 95 Theses"
        },
        {
            question: "Which empire was known for its capital at Constantinople?",
            options: ["Ottoman Empire", "Byzantine Empire", "Roman Empire", "Safavid Empire"],
            answer: "Byzantine Empire"
        }
    ],
    "Geography": [
        {
            question: "Which river forms part of the border between the United States and Mexico?",
            options: ["Colorado", "Rio Grande", "Mississippi", "Columbia"],
            answer: "Rio Grande"
        },
        {
            question: "What is the capital city of Argentina?",
            options: ["Buenos Aires", "Santiago", "Lima", "Montevideo"],
            answer: "Buenos Aires"
        },
        {
            question: "Which desert is the driest in the world?",
            options: ["Sahara", "Atacama", "Kalahari", "Sonoran"],
            answer: "Atacama"
        },
        {
            question: "What is the name of the strait separating Asia and North America?",
            options: ["Strait of Gibraltar", "Bering Strait", "Strait of Hormuz", "Malacca Strait"],
            answer: "Bering Strait"
        },
        {
            question: "Which country has the most active volcanoes?",
            options: ["Japan", "Indonesia", "United States", "Italy"],
            answer: "Indonesia"
        },
        {
            question: "What is the term for a large, rotating storm with a calm center?",
            options: ["Tornado", "Hurricane", "Tsunami", "Monsoon"],
            answer: "Hurricane"
        },
        {
            question: "Which mountain range is the longest in Europe?",
            options: ["Alps", "Pyrenees", "Carpathians", "Scandinavian Mountains"],
            answer: "Alps"
        },
        {
            question: "Which African country is completely surrounded by South Africa?",
            options: ["Lesotho", "Swaziland", "Botswana", "Namibia"],
            answer: "Lesotho"
        },
        {
            question: "What is the deepest lake in the world?",
            options: ["Lake Superior", "Lake Baikal", "Lake Tanganyika", "Lake Michigan"],
            answer: "Lake Baikal"
        },
        {
            question: "Which ocean is home to the Mid-Atlantic Ridge?",
            options: ["Pacific", "Atlantic", "Indian", "Southern"],
            answer: "Atlantic"
        }
    ],
    "ComputerScience": [
        {
            question: "What is the worst-case time complexity of merge sort?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
            answer: "O(n log n)"
        },
        {
            question: "Which programming language is known for its use in machine learning and data analysis?",
            options: ["C++", "Java", "Python", "Ruby"],
            answer: "Python"
        },
        {
            question: "What does XML stand for?",
            options: ["Extensible Markup Language", "Extra Machine Language", "Extended Modeling Language", "External Markup Language"],
            answer: "Extensible Markup Language"
        },
        {
            question: "Which data structure is used to implement a breadth-first search?",
            options: ["Stack", "Queue", "Heap", "Tree"],
            answer: "Queue"
        },
        {
            question: "What is the primary purpose of a virtual machine?",
            options: ["Run multiple operating systems", "Store data", "Optimize code", "Encrypt data"],
            answer: "Run multiple operating systems"
        },
        {
            question: "Which protocol is used for secure file transfers?",
            options: ["FTP", "SFTP", "HTTP", "SMTP"],
            answer: "SFTP"
        },
        {
            question: "What is the purpose of a mutex in concurrent programming?",
            options: ["Increase speed", "Prevent race conditions", "Store data", "Optimize memory"],
            answer: "Prevent race conditions"
        },
        {
            question: "Which language is primarily used for iOS app development?",
            options: ["Java", "Swift", "C#", "Python"],
            answer: "Swift"
        },
        {
            question: "What is the purpose of a binary tree in data structures?",
            options: ["Sort data", "Store hierarchical data", "Execute code", "Compress data"],
            answer: "Store hierarchical data"
        },
        {
            question: "What does TCP stand for in networking?",
            options: ["Transmission Control Protocol", "Transfer Control Program", "Terminal Connection Protocol", "Transport Communication Protocol"],
            answer: "Transmission Control Protocol"
        }
    ],
    "Finance": [
        {
            question: "What is the present value of $5,000 received 3 years from now at a 6% discount rate?",
            options: ["$4,198.10", "$4,500.00", "$4,717.36", "$5,318.00"],
            answer: "$4,198.10"
        },
        {
            question: "What is a hedge fund?",
            options: ["A government-backed bond", "A pooled investment with aggressive strategies", "A savings account", "A type of stock"],
            answer: "A pooled investment with aggressive strategies"
        },
        {
            question: "What is the term for the excess of current assets over current liabilities?",
            options: ["Net income", "Working capital", "Equity", "Revenue"],
            answer: "Working capital"
        },
        {
            question: "If a stock’s price rises from $40 to $48, what is the percentage increase?",
            options: ["10%", "15%", "20%", "25%"],
            answer: "20%"
        },
        {
            question: "What is the primary purpose of a cash flow statement?",
            options: ["Show profitability", "Track cash movement", "Display assets", "Calculate taxes"],
            answer: "Track cash movement"
        },
        {
            question: "What is the term for buying and selling securities to profit from price differences?",
            options: ["Hedging", "Arbitrage", "Diversification", "Margin"],
            answer: "Arbitrage"
        },
        {
            question: "Which economic indicator measures the total value of goods and services produced?",
            options: ["CPI", "GDP", "PPI", "Trade balance"],
            answer: "GDP"
        },
        {
            question: "What is the primary benefit of a Roth IRA in the U.S.?",
            options: ["Tax-free withdrawals in retirement", "Guaranteed returns", "Low interest loans", "Free stocks"],
            answer: "Tax-free withdrawals in retirement"
        },
        {
            question: "What is the term for a financial instrument representing a loan made by an investor?",
            options: ["Stock", "Bond", "Option", "Mutual fund"],
            answer: "Bond"
        },
        {
            question: "What does P/E ratio stand for in stock valuation?",
            options: ["Price-to-Earnings ratio", "Profit-to-Equity ratio", "Price-to-Expense ratio", "Performance-to-Earnings ratio"],
            answer: "Price-to-Earnings ratio"
        }
    ],
    "Chemistry": [
        {
            question: "What is the molar mass of glucose (C₆H₁₂O₆)?",
            options: ["160 g/mol", "180 g/mol", "200 g/mol", "220 g/mol"],
            answer: "180 g/mol"
        },
        {
            question: "Which gas contributes most to the ozone layer depletion?",
            options: ["Carbon Dioxide", "Methane", "Chlorofluorocarbons", "Nitrogen Oxides"],
            answer: "Chlorofluorocarbons"
        },
        {
            question: "What type of bond is formed between two nonmetals with different electronegativities?",
            options: ["Ionic", "Polar covalent", "Nonpolar covalent", "Metallic"],
            answer: "Polar covalent"
        },
        {
            question: "What is the name of the process where a gas turns directly into a solid?",
            options: ["Sublimation", "Deposition", "Condensation", "Evaporation"],
            answer: "Deposition"
        },
        {
            question: "Which element has the chemical symbol Cu?",
            options: ["Cobalt", "Chromium", "Copper", "Cesium"],
            answer: "Copper"
        },
        {
            question: "What is the pH of a solution with a hydrogen ion concentration of 10⁻⁵ M?",
            options: ["3", "5", "7", "9"],
            answer: "5"
        },
        {
            question: "Which type of reaction involves two compounds exchanging ions?",
            options: ["Synthesis", "Decomposition", "Single Replacement", "Double Replacement"],
            answer: "Double Replacement"
        },
        {
            question: "What is the primary component of limestone?",
            options: ["Calcium Carbonate", "Calcium Oxide", "Calcium Sulfate", "Calcium Chloride"],
            answer: "Calcium Carbonate"
        },
        {
            question: "Which element is used in fluorescent lights and has the symbol Hg?",
            options: ["Helium", "Hydrogen", "Mercury", "Magnesium"],
            answer: "Mercury"
        },
        {
            question: "What is the oxidation state of nitrogen in NH₃?",
            options: ["-3", "-1", "+1", "+3"],
            answer: "-3"
        }
    ],
    "Logic": [
        {
            question: "What is the next number in the sequence: 7, 14, 28, 56, __?",
            options: ["84", "112", "128", "168"],
            answer: "112"
        },
        {
            question: "If all A are B, no B are C, and some C are D, what is the relationship between A and D?",
            options: ["All A are D", "Some A are D", "No A are D", "Cannot be determined"],
            answer: "No A are D"
        },
        {
            question: "What is the missing term in the sequence: 4, 10, 22, 46, __?",
            options: ["94", "98", "102", "108"],
            answer: "94"
        },
        {
            question: "If today is Tuesday, what day will it be in 25 days?",
            options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
            answer: "Wednesday"
        },
        {
            question: "Which shape completes the pattern: Square, Pentagon, Hexagon, Square, __?",
            options: ["Pentagon", "Hexagon", "Square", "Triangle"],
            answer: "Pentagon"
        },
        {
            question: "If no X are Y, some Y are Z, and all Z are W, can some X be W?",
            options: ["Yes", "No", "Maybe", "Definitely"],
            answer: "Maybe"
        },
        {
            question: "What is the next term in the sequence: 3, 7, 16, 34, __?",
            options: ["70", "72", "74", "76"],
            answer: "70"
        },
        {
            question: "Which number does not belong: 9, 16, 25, 36, 48?",
            options: ["9", "16", "25", "48"],
            answer: "48"
        },
        {
            question: "If A is heavier than B, C is heavier than D, and B is heavier than C, who is the heaviest?",
            options: ["A", "B", "C", "D"],
            answer: "A"
        },
        {
            question: "What is the next term in the sequence: 2, 4, 7, 11, 16, __?",
            options: ["20", "22", "24", "26"],
            answer: "22"
        }
    ],
    "English": [
        {
            question: "What is the synonym of 'ameliorate'?",
            options: ["Worsen", "Improve", "Stagnate", "Complicate"],
            answer: "Improve"
        },
        {
            question: "Which sentence is grammatically correct?",
            options: ["Each of the students have a book.", "Each of the students has a book.", "Each of the students have books.", "Each of the student has a book."],
            answer: "Each of the students has a book."
        },
        {
            question: "What is the antonym of 'obfuscate'?",
            options: ["Confuse", "Clarify", "Complicate", "Hide"],
            answer: "Clarify"
        },
        {
            question: "What is the literary term for a contradictory statement that reveals a truth?",
            options: ["Oxymoron", "Paradox", "Hyperbole", "Irony"],
            answer: "Paradox"
        },
        {
            question: "Which word is a conjunction?",
            options: ["Because", "Quick", "Table", "Bright"],
            answer: "Because"
        },
        {
            question: "What is the past participle of the verb 'lie' (to recline)?",
            options: ["Lay", "Lain", "Lied", "Lying"],
            answer: "Lain"
        },
        {
            question: "What is the meaning of the idiom 'burn the midnight oil'?",
            options: ["Waste money", "Work late into the night", "Start a fire", "Celebrate success"],
            answer: "Work late into the night"
        },
        {
            question: "Which part of speech is the word 'justice'?",
            options: ["Adjective", "Adverb", "Noun", "Verb"],
            answer: "Noun"
        },
        {
            question: "What is the plural form of 'analysis'?",
            options: ["Analyses", "Analysises", "Analyzes", "Analysies"],
            answer: "Analyses"
        },
        {
            question: "What is the term for a rhetorical question that implies its own answer?",
            options: ["Hypophora", "Epistrophe", "Anaphora", "Rhetorical question"],
            answer: "Hypophora"
        }
    ],
    "GeneralKnowledge": [
        {
            question: "Which country is known for the ancient city of Petra?",
            options: ["Egypt", "Jordan", "Syria", "Iraq"],
            answer: "Jordan"
        },
        {
            question: "Who developed the smallpox vaccine?",
            options: ["Louis Pasteur", "Edward Jenner", "Jonas Salk", "Alexander Fleming"],
            answer: "Edward Jenner"
        },
        {
            question: "What is the currency of Brazil?",
            options: ["Peso", "Real", "Dollar", "Euro"],
            answer: "Real"
        },
        {
            question: "Which animal is known for its ability to change color to blend into its surroundings?",
            options: ["Chameleon", "Octopus", "Cuttlefish", "All of the above"],
            answer: "All of the above"
        },
        {
            question: "What is the chemical formula for sulfuric acid?",
            options: ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
            answer: "H₂SO₄"
        },
        {
            question: "Which city hosted the 2004 Summer Olympics?",
            options: ["Sydney", "Athens", "Beijing", "London"],
            answer: "Athens"
        },
        {
            question: "What is the largest muscle in the human body?",
            options: ["Quadriceps", "Gluteus Maximus", "Latissimus Dorsi", "Sartorius"],
            answer: "Gluteus Maximus"
        },
        {
            question: "Which element is used in nuclear reactors and has the symbol U?",
            options: ["Uranium", "Ununbium", "Uranite", "Umbrium"],
            answer: "Uranium"
        },
        {
            question: "Who wrote the novel 'Moby-Dick'?",
            options: ["Herman Melville", "Nathaniel Hawthorne", "Mark Twain", "Ernest Hemingway"],
            answer: "Herman Melville"
        },
        {
            question: "What is the approximate age of the Earth?",
            options: ["12 years", "12,000 years", "4.6 billion years", "12 million years"],
            answer: "4.6 billion years"
        }
    ]
};