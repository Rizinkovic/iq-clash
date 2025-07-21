const questions = {
    "Mathematics": [
        {
            question: "Solve the system of equations: 2x + y - z = 1, x - 2y + 3z = 6, 3x + y + z = 4.",
            options: ["x = 1, y = 2, z = 1", "x = 2, y = -1, z = 1", "x = 1, y = 1, z = 2", "x = 0, y = 1, z = 3"],
            answer: "x = 1, y = 2, z = 1"
        },
        {
            question: "What is the value of sin²(π/4) + cos²(π/4)?",
            options: ["0", "0.5", "1", "2"],
            answer: "1"
        },
        {
            question: "If log₂(x) + log₂(x/4) = 5, what is the value of x?",
            options: ["8", "16", "32", "64"],
            answer: "16"
        },
        {
            question: "What is the surface area of a cylinder with radius 3 cm and height 8 cm, including both bases? (Use π ≈ 3.14)",
            options: ["150.72 cm²", "188.4 cm²", "226.08 cm²", "263.76 cm²"],
            answer: "188.4 cm²"
        },
        {
            question: "What is the probability of getting at least 4 heads in 6 flips of a fair coin?",
            options: ["7/64", "11/64", "15/64", "22/64"],
            answer: "22/64"
        },
        {
            question: "What is the sum of the first 6 terms of the arithmetic sequence with first term 5 and common difference 3?",
            options: ["90", "93", "96", "99"],
            answer: "93"
        },
        {
            question: "Solve the equation: x^4 - 5x² + 4 = 0.",
            options: ["x = ±1, ±2", "x = ±2, ±3", "x = ±1, ±4", "x = ±2"],
            answer: "x = ±1, ±2"
        },
        {
            question: "What is the eigenvalues of the matrix [[2, 1], [1, 2]]?",
            options: ["1, 3", "2, 4", "0, 2", "-1, 3"],
            answer: "1, 3"
        },
        {
            question: "What is the area of a triangle with vertices at (0,0), (3,0), and (0,4)?",
            options: ["6 units²", "8 units²", "10 units²", "12 units²"],
            answer: "6 units²"
        },
        {
            question: "What is the value of the integral ∫(0 to π/2) sin(x) dx?",
            options: ["0", "0.5", "1", "2"],
            answer: "1"
        }
    ],
    "HumanBiology": [
        {
            question: "Which enzyme transcribes DNA into mRNA during protein synthesis?",
            options: ["DNA Polymerase", "RNA Polymerase", "Helicase", "Ligase"],
            answer: "RNA Polymerase"
        },
        {
            question: "What is the primary function of the Golgi apparatus in a cell?",
            options: ["Synthesize proteins", "Modify and package proteins", "Generate ATP", "Store genetic material"],
            answer: "Modify and package proteins"
        },
        {
            question: "Which hormone regulates calcium levels in the blood?",
            options: ["Insulin", "Parathyroid hormone", "Adrenaline", "Melatonin"],
            answer: "Parathyroid hormone"
        },
        {
            question: "What is the name of the process by which cells programmed to die self-destruct?",
            options: ["Necrosis", "Apoptosis", "Mitosis", "Meiosis"],
            answer: "Apoptosis"
        },
        {
            question: "Which part of the brain is primarily responsible for memory formation?",
            options: ["Cerebellum", "Hippocampus", "Amygdala", "Thalamus"],
            answer: "Hippocampus"
        },
        {
            question: "What is the primary function of the lysosome in a cell?",
            options: ["Synthesize lipids", "Break down waste materials", "Transport proteins", "Store energy"],
            answer: "Break down waste materials"
        },
        {
            question: "Which vitamin deficiency causes beriberi?",
            options: ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
            answer: "Vitamin B1"
        },
        {
            question: "What is the name of the structure that separates the left and right sides of the heart?",
            options: ["Atrium", "Ventricle", "Septum", "Valve"],
            answer: "Septum"
        },
        {
            question: "Which part of the eye is responsible for focusing light onto the retina?",
            options: ["Cornea", "Lens", "Iris", "Pupil"],
            answer: "Lens"
        },
        {
            question: "What molecule is the final electron acceptor in the electron transport chain?",
            options: ["Glucose", "Oxygen", "NADH", "Carbon dioxide"],
            answer: "Oxygen"
        }
    ],
    "History": [
        {
            question: "Which battle in 480 BCE saw the Spartans face the Persians at a narrow pass?",
            options: ["Battle of Marathon", "Battle of Thermopylae", "Battle of Salamis", "Battle of Plataea"],
            answer: "Battle of Thermopylae"
        },
        {
            question: "Who was the founder of the Achaemenid Empire?",
            options: ["Darius I", "Cyrus the Great", "Xerxes I", "Cambyses II"],
            answer: "Cyrus the Great"
        },
        {
            question: "In which year did the fall of the Bastille occur, marking the start of the French Revolution?",
            options: ["1787", "1789", "1791", "1793"],
            answer: "1789"
        },
        {
            question: "Which ancient civilization developed the cuneiform script for the Epic of Gilgamesh?",
            options: ["Sumerian", "Akkadian", "Assyrian", "Babylonian"],
            answer: "Sumerian"
        },
        {
            question: "What was the primary goal of the Bretton Woods Conference in 1944?",
            options: ["End World War II", "Establish global financial systems", "Promote decolonization", "Create the United Nations"],
            answer: "Establish global financial systems"
        },
        {
            question: "Who was the first woman to win two Nobel Prizes in different fields?",
            options: ["Marie Curie", "Irène Joliot-Curie", "Dorothy Hodgkin", "Ada Yonath"],
            answer: "Marie Curie"
        },
        {
            question: "Which treaty ended the War of the Spanish Succession in 1713?",
            options: ["Treaty of Paris", "Treaty of Utrecht", "Treaty of Versailles", "Treaty of Westphalia"],
            answer: "Treaty of Utrecht"
        },
        {
            question: "Who led the Bolsheviks during the October Revolution of 1917?",
            options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikolai Bukharin"],
            answer: "Vladimir Lenin"
        },
        {
            question: "Which event marked the beginning of the Hundred Years’ War between England and France?",
            options: ["Battle of Agincourt", "Battle of Crécy", "Edward III’s claim to French throne", "Joan of Arc’s campaign"],
            answer: "Edward III’s claim to French throne"
        },
        {
            question: "Which empire was known for its capital at Cuzco?",
            options: ["Inca", "Aztec", "Maya", "Olmec"],
            answer: "Inca"
        }
    ],
    "Geography": [
        {
            question: "Which river is the longest in Asia?",
            options: ["Yangtze", "Yellow", "Mekong", "Ganges"],
            answer: "Yangtze"
        },
        {
            question: "What is the capital city of Bhutan?",
            options: ["Thimphu", "Paro", "Punakha", "Jakar"],
            answer: "Thimphu"
        },
        {
            question: "Which desert is located in central Australia?",
            options: ["Simpson Desert", "Great Victoria Desert", "Gibson Desert", "Tanami Desert"],
            answer: "Great Victoria Desert"
        },
        {
            question: "What is the name of the strait separating the Arabian Peninsula and Iran?",
            options: ["Strait of Hormuz", "Bering Strait", "Strait of Malacca", "Bab-el-Mandeb"],
            answer: "Strait of Hormuz"
        },
        {
            question: "Which country has the highest number of glaciers?",
            options: ["Canada", "Iceland", "Norway", "Antarctica"],
            answer: "Antarctica"
        },
        {
            question: "What is the term for the point on Earth’s surface directly above an earthquake’s origin?",
            options: ["Focus", "Epicenter", "Fault", "Hypocenter"],
            answer: "Epicenter"
        },
        {
            question: "Which mountain range is home to Aconcagua, the highest peak in the Southern and Western Hemispheres?",
            options: ["Himalayas", "Andes", "Rockies", "Alps"],
            answer: "Andes"
        },
        {
            question: "Which African country is divided by the Great Rift Valley?",
            options: ["Ethiopia", "Kenya", "Uganda", "Tanzania"],
            answer: "Ethiopia"
        },
        {
            question: "What is the smallest island nation in the world by land area?",
            options: ["Maldives", "Nauru", "Tuvalu", "Monaco"],
            answer: "Nauru"
        },
        {
            question: "Which ocean is home to the Challenger Deep?",
            options: ["Pacific", "Atlantic", "Indian", "Southern"],
            answer: "Pacific"
        }
    ],
    "ComputerScience": [
        {
            question: "What is the worst-case time complexity of the Floyd-Warshall algorithm?",
            options: ["O(n log n)", "O(n²)", "O(n³)", "O(n^4)"],
            answer: "O(n³)"
        },
        {
            question: "Which programming language is known for its use in functional programming and was developed at INRIA?",
            options: ["Haskell", "OCaml", "Erlang", "Lisp"],
            answer: "OCaml"
        },
        {
            question: "What does YAML stand for?",
            options: ["Yet Another Markup Language", "YAML Ain’t Markup Language", "Yielded Abstract Markup Language", "Yellow Abstract Modeling Language"],
            answer: "YAML Ain’t Markup Language"
        },
        {
            question: "Which data structure is used to implement a minimum spanning tree algorithm like Kruskal’s?",
            options: ["Stack", "Queue", "Union-Find", "Heap"],
            answer: "Union-Find"
        },
        {
            question: "What is the primary purpose of a container in software development?",
            options: ["Store data", "Isolate applications with dependencies", "Optimize code", "Encrypt data"],
            answer: "Isolate applications with dependencies"
        },
        {
            question: "Which protocol is used for real-time communication in VoIP?",
            options: ["HTTP", "SIP", "FTP", "SMTP"],
            answer: "SIP"
        },
        {
            question: "What is the purpose of a deadlock in concurrent programming?",
            options: ["Increase speed", "Prevent race conditions", "Cause processes to wait indefinitely", "Optimize memory"],
            answer: "Cause processes to wait indefinitely"
        },
        {
            question: "Which language is primarily used for blockchain smart contracts on Ethereum?",
            options: ["Solidity", "Rust", "Go", "Python"],
            answer: "Solidity"
        },
        {
            question: "What is the purpose of a red-black tree?",
            options: ["Sort data", "Maintain balanced binary search", "Execute code", "Compress data"],
            answer: "Maintain balanced binary search"
        },
        {
            question: "What does SNMP stand for in networking?",
            options: ["Simple Network Management Protocol", "Secure Network Monitoring Protocol", "System Network Management Protocol", "Standard Network Mapping Protocol"],
            answer: "Simple Network Management Protocol"
        }
    ],
    "Finance": [
        {
            question: "What is the present value of $10,000 received 5 years from now at a 7% discount rate, compounded annually?",
            options: ["$7,129.86", "$7,500.00", "$7,898.34", "$8,250.00"],
            answer: "$7,129.86"
        },
        {
            question: "What is a futures contract?",
            options: ["A stock purchase", "An agreement to buy/sell at a future date", "A type of bond", "A savings account"],
            answer: "An agreement to buy/sell at a future date"
        },
        {
            question: "What is the term for the ratio of a company’s debt to its equity?",
            options: ["Current ratio", "Debt-to-equity ratio", "Profit margin", "Return on assets"],
            answer: "Debt-to-equity ratio"
        },
        {
            question: "If a stock’s price drops from $200 to $160, what is the percentage decrease?",
            options: ["10%", "15%", "20%", "25%"],
            answer: "20%"
        },
        {
            question: "What is the primary purpose of a statement of cash flows?",
            options: ["Show profitability", "Track cash inflows/outflows", "Display assets", "Calculate taxes"],
            answer: "Track cash inflows/outflows"
        },
        {
            question: "What is the term for profiting from price differences in different markets?",
            options: ["Hedging", "Arbitrage", "Diversification", "Leverage"],
            answer: "Arbitrage"
        },
        {
            question: "Which economic indicator measures the cost of goods at the wholesale level?",
            options: ["CPI", "GDP", "PPI", "Trade balance"],
            answer: "PPI"
        },
        {
            question: "What is the primary benefit of a 529 plan in the U.S.?",
            options: ["Tax-free retirement savings", "Tax-advantaged education savings", "Guaranteed returns", "Free stocks"],
            answer: "Tax-advantaged education savings"
        },
        {
            question: "What is the term for a rapid decline in a company’s stock price due to bad news?",
            options: ["Rally", "Crash", "Correction", "Bear market"],
            answer: "Correction"
        },
        {
            question: "What does CAPM stand for in financial modeling?",
            options: ["Capital Asset Pricing Model", "Cost Analysis Pricing Model", "Capital Allocation Profit Model", "Current Asset Performance Model"],
            answer: "Capital Asset Pricing Model"
        }
    ],
    "Chemistry": [
        {
            question: "What is the molar mass of aspirin (C₉H₈O₄)?",
            options: ["160 g/mol", "180 g/mol", "200 g/mol", "220 g/mol"],
            answer: "180 g/mol"
        },
        {
            question: "Which gas is primarily responsible for photochemical smog?",
            options: ["Carbon Monoxide", "Ozone", "Sulfur Dioxide", "Nitrogen Dioxide"],
            answer: "Ozone"
        },
        {
            question: "What type of bond is present in a benzene ring (C₆H₆)?",
            options: ["Single covalent", "Double covalent", "Delocalized π bonds", "Ionic"],
            answer: "Delocalized π bonds"
        },
        {
            question: "What is the name of the process where a liquid turns into a solid?",
            options: ["Freezing", "Melting", "Sublimation", "Evaporation"],
            answer: "Freezing"
        },
        {
            question: "Which element has the chemical symbol Rn?",
            options: ["Radium", "Radon", "Ruthenium", "Rubidium"],
            answer: "Radon"
        },
        {
            question: "What is the pH of a solution with a hydrogen ion concentration of 10⁻⁸ M at 25°C?",
            options: ["6", "7", "8", "9"],
            answer: "8"
        },
        {
            question: "Which type of reaction involves the combination of hydrogen and oxygen to form water?",
            options: ["Synthesis", "Decomposition", "Single Replacement", "Double Replacement"],
            answer: "Synthesis"
        },
        {
            question: "What is the primary component of vinegar?",
            options: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Sulfuric acid"],
            answer: "Acetic acid"
        },
        {
            question: "Which element is used in smoke detectors and has the symbol Am?",
            options: ["Actinium", "Americium", "Antimony", "Astatine"],
            answer: "Americium"
        },
        {
            question: "What is the oxidation state of sulfur in SO₄²⁻?",
            options: ["+2", "+4", "+6", "+8"],
            answer: "+6"
        }
    ],
    "Logic": [
        {
            question: "What is the next number in the sequence: 10, 20, 40, 80, __?",
            options: ["120", "160", "200", "240"],
            answer: "160"
        },
        {
            question: "If no A are B, all B are C, and some C are D, what is the relationship between A and D?",
            options: ["All A are D", "Some A are D", "No A are D", "Cannot be determined"],
            answer: "Cannot be determined"
        },
        {
            question: "What is the missing term in the sequence: 6, 14, 30, 62, __?",
            options: ["126", "128", "130", "132"],
            answer: "126"
        },
        {
            question: "If today is Monday, what day will it be in 100 days?",
            options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
            answer: "Sunday"
        },
        {
            question: "Which shape completes the pattern: Hexagon, Square, Triangle, Hexagon, __?",
            options: ["Square", "Triangle", "Hexagon", "Pentagon"],
            answer: "Square"
        },
        {
            question: "If all X are Y, no Y are Z, and some Z are W, can some X be W?",
            options: ["Yes", "No", "Maybe", "Definitely"],
            answer: "No"
        },
        {
            question: "What is the next term in the sequence: 5, 11, 23, 47, __?",
            options: ["95", "96", "97", "98"],
            answer: "95"
        },
        {
            question: "Which number does not belong: 25, 36, 49, 64, 80?",
            options: ["25", "36", "49", "80"],
            answer: "80"
        },
        {
            question: "If A is taller than B, C is shorter than D, and D is taller than A, who is the shortest?",
            options: ["A", "B", "C", "D"],
            answer: "B or C"
        },
        {
            question: "What is the next term in the sequence: 2, 6, 15, 31, 56, __?",
            options: ["90", "92", "94", "96"],
            answer: "92"
        }
    ],
    "English": [
        {
            question: "What is the synonym of 'sesquipedalian'?",
            options: ["Concise", "Wordy", "Clear", "Simple"],
            answer: "Wordy"
        },
        {
            question: "Which sentence is grammatically correct?",
            options: ["Whom did you see at the party?", "Who did you see at the party?", "Whom you saw at the party?", "Who you saw at the party?"],
            answer: "Whom did you see at the party?"
        },
        {
            question: "What is the antonym of 'ameliorate'?",
            options: ["Improve", "Worsen", "Maintain", "Simplify"],
            answer: "Worsen"
        },
        {
            question: "What is the literary term for a story that represents abstract ideas through symbols?",
            options: ["Allusion", "Allegory", "Analogy", "Apostrophe"],
            answer: "Allegory"
        },
        {
            question: "Which word is a correlative conjunction?",
            options: ["And", "Or", "Either…or", "But"],
            answer: "Either…or"
        },
        {
            question: "What is the past participle of the verb 'stride'?",
            options: ["Strode", "Stridden", "Strid", "Striding"],
            answer: "Stridden"
        },
        {
            question: "What is the meaning of the idiom 'throw in the towel'?",
            options: ["Start a fight", "Give up", "Celebrate victory", "Work harder"],
            answer: "Give up"
        },
        {
            question: "Which part of speech is the word 'epiphany'?",
            options: ["Adjective", "Adverb", "Noun", "Verb"],
            answer: "Noun"
        },
        {
            question: "What is the plural form of 'phenomenon'?",
            options: ["Phenomena", "Phenomenons", "Phenomenum", "Phenomeni"],
            answer: "Phenomena"
        },
        {
            question: "What is the term for the repetition of consonant sounds in nearby words?",
            options: ["Alliteration", "Assonance", "Consonance", "Onomatopoeia"],
            answer: "Consonance"
        }
    ],
    "GeneralKnowledge": [
        {
            question: "Which country is home to the ancient city of Timbuktu?",
            options: ["Mali", "Morocco", "Algeria", "Tunisia"],
            answer: "Mali"
        },
        {
            question: "Who proposed the theory of evolution by natural selection alongside Charles Darwin?",
            options: ["Gregor Mendel", "Alfred Russel Wallace", "Thomas Huxley", "Jean-Baptiste Lamarck"],
            answer: "Alfred Russel Wallace"
        },
        {
            question: "What is the currency of South Africa?",
            options: ["Rand", "Naira", "Cedi", "Shilling"],
            answer: "Rand"
        },
        {
            question: "Which animal is the only mammal capable of sustained flight?",
            options: ["Bat", "Flying squirrel", "Colugo", "Pterosaur"],
            answer: "Bat"
        },
        {
            question: "What is the chemical formula for nitric acid?",
            options: ["HCl", "H₂SO₄", "HNO₃", "H₃PO₄"],
            answer: "HNO₃"
        },
        {
            question: "Which city hosted the 1996 Summer Olympics?",
            options: ["Sydney", "Atlanta", "Barcelona", "Seoul"],
            answer: "Atlanta"
        },
        {
            question: "What is the smallest organ in the human body?",
            options: ["Pineal gland", "Thyroid", "Pancreas", "Adrenal gland"],
            answer: "Pineal gland"
        },
        {
            question: "Which element is used in solar cells and has the symbol Ge?",
            options: ["Gallium", "Germanium", "Gadolinium", "Gold"],
            answer: "Germanium"
        },
        {
            question: "Who wrote the novel 'Ulysses'?",
            options: ["James Joyce", "Virginia Woolf", "D.H. Lawrence", "F. Scott Fitzgerald"],
            answer: "James Joyce"
        },
        {
            question: "What is the approximate diameter of the Milky Way galaxy?",
            options: ["10,000 light-years", "50,000 light-years", "100,000 light-years", "200,000 light-years"],
            answer: "100,000 light-years"
        }
    ]
};