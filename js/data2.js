const questions = {
    "Mathematics": [
        {
            question: "Solve the quadratic equation x^2 - 5x + 6 = 0.",
            options: ["x = 2, 3", "x = 1, 4", "x = -2, -3", "x = 5, 6"],
            answer: "x = 2, 3"
        },
        {
            question: "What is the value of sin(30°) + cos(60°)?",
            options: ["0.5", "1", "1.5", "2"],
            answer: "1"
        },
        {
            question: "If log₃(x) = 2, what is the value of x?",
            options: ["6", "9", "12", "27"],
            answer: "9"
        },
        {
            question: "What is the area of a circle with a diameter of 10 cm? (Use π ≈ 3.14)",
            options: ["31.4 cm²", "78.5 cm²", "100 cm²", "314 cm²"],
            answer: "78.5 cm²"
        },
        {
            question: "Solve for x: 4x - 3 = 2x + 9.",
            options: ["3", "4", "5", "6"],
            answer: "6"
        },
        {
            question: "What is the sum of the interior angles of a pentagon?",
            options: ["360°", "540°", "720°", "900°"],
            answer: "540°"
        },
        {
            question: "If a^3 = 64, what is the value of a?",
            options: ["2", "4", "6", "8"],
            answer: "4"
        },
        {
            question: "What is the slope of the line passing through points (2, 3) and (4, 7)?",
            options: ["1", "2", "3", "4"],
            answer: "2"
        },
        {
            question: "What is the value of 2^3 * 3^2?",
            options: ["36", "54", "72", "81"],
            answer: "72"
        },
        {
            question: "If a rectangle has a length of 12 cm and a perimeter of 40 cm, what is its width?",
            options: ["6 cm", "8 cm", "10 cm", "12 cm"],
            answer: "8 cm"
        }
    ],
    "HumanBiology": [
        {
            question: "Which part of the cell contains genetic material?",
            options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi Apparatus"],
            answer: "Nucleus"
        },
        {
            question: "What is the primary function of white blood cells?",
            options: ["Transport oxygen", "Fight infections", "Clot blood", "Digest nutrients"],
            answer: "Fight infections"
        },
        {
            question: "Which gland regulates metabolism in the human body?",
            options: ["Pituitary", "Thyroid", "Adrenal", "Pancreas"],
            answer: "Thyroid"
        },
        {
            question: "What is the name of the process by which cells divide to produce two identical daughter cells?",
            options: ["Meiosis", "Mitosis", "Binary Fission", "Apoptosis"],
            answer: "Mitosis"
        },
        {
            question: "Which type of muscle is found in the heart?",
            options: ["Skeletal", "Smooth", "Cardiac", "Voluntary"],
            answer: "Cardiac"
        },
        {
            question: "What is the primary function of the alveoli in the lungs?",
            options: ["Filter air", "Gas exchange", "Produce mucus", "Transport blood"],
            answer: "Gas exchange"
        },
        {
            question: "Which vitamin is essential for blood clotting?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
            answer: "Vitamin K"
        },
        {
            question: "What is the name of the fluid that lubricates joints?",
            options: ["Blood plasma", "Lymph", "Synovial fluid", "Cerebrospinal fluid"],
            answer: "Synovial fluid"
        },
        {
            question: "Which part of the nervous system controls involuntary actions like heartbeat?",
            options: ["Central", "Peripheral", "Autonomic", "Somatic"],
            answer: "Autonomic"
        },
        {
            question: "What molecule carries genetic information in most organisms?",
            options: ["RNA", "DNA", "Protein", "Lipid"],
            answer: "DNA"
        }
    ],
    "History": [
        {
            question: "Which battle marked the turning point of the American Civil War?",
            options: ["Battle of Antietam", "Battle of Gettysburg", "Battle of Shiloh", "Battle of Vicksburg"],
            answer: "Battle of Gettysburg"
        },
        {
            question: "Who was the first female pharaoh of ancient Egypt?",
            options: ["Cleopatra", "Nefertiti", "Hatshepsut", "Sobekneferu"],
            answer: "Hatshepsut"
        },
        {
            question: "In which year did the Berlin Wall fall?",
            options: ["1987", "1989", "1991", "1993"],
            answer: "1989"
        },
        {
            question: "Which empire was known for its extensive road system, including the Royal Road?",
            options: ["Roman Empire", "Persian Empire", "Ottoman Empire", "Byzantine Empire"],
            answer: "Persian Empire"
        },
        {
            question: "Who was the primary author of the U.S. Declaration of Independence?",
            options: ["George Washington", "Thomas Jefferson", "Benjamin Franklin", "John Adams"],
            answer: "Thomas Jefferson"
        },
        {
            question: "What was the name of the ship that carried the Pilgrims to America in 1620?",
            options: ["Santa Maria", "Mayflower", "Nina", "Pinta"],
            answer: "Mayflower"
        },
        {
            question: "Which event marked the beginning of the Great Depression?",
            options: ["World War I", "Stock Market Crash of 1929", "Dust Bowl", "New Deal"],
            answer: "Stock Market Crash of 1929"
        },
        {
            question: "Who was the leader of the Bolshevik Revolution in Russia?",
            options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"],
            answer: "Vladimir Lenin"
        },
        {
            question: "Which ancient city was famous for its Hanging Gardens, one of the Seven Wonders?",
            options: ["Rome", "Athens", "Babylon", "Alexandria"],
            answer: "Babylon"
        },
        {
            question: "What was the main purpose of the Magna Carta signed in 1215?",
            options: ["Establish a republic", "Limit the king’s power", "Declare war", "Promote trade"],
            answer: "Limit the king’s power"
        }
    ],
    "Geography": [
        {
            question: "Which country is home to the Great Barrier Reef?",
            options: ["Brazil", "Australia", "Indonesia", "Philippines"],
            answer: "Australia"
        },
        {
            question: "What is the longest mountain range in the world?",
            options: ["Himalayas", "Andes", "Rockies", "Alps"],
            answer: "Andes"
        },
        {
            question: "Which river flows through the Grand Canyon?",
            options: ["Mississippi", "Colorado", "Amazon", "Nile"],
            answer: "Colorado"
        },
        {
            question: "What is the capital city of South Korea?",
            options: ["Busan", "Incheon", "Seoul", "Daegu"],
            answer: "Seoul"
        },
        {
            question: "Which country is the largest by land area?",
            options: ["Canada", "China", "Russia", "United States"],
            answer: "Russia"
        },
        {
            question: "What is the term for a narrow strip of land connecting two larger landmasses?",
            options: ["Peninsula", "Isthmus", "Archipelago", "Delta"],
            answer: "Isthmus"
        },
        {
            question: "Which African country is known for its Serengeti National Park?",
            options: ["Kenya", "South Africa", "Tanzania", "Uganda"],
            answer: "Tanzania"
        },
        {
            question: "What is the deepest point in the world’s oceans?",
            options: ["Puerto Rico Trench", "Mariana Trench", "Tonga Trench", "Java Trench"],
            answer: "Mariana Trench"
        },
        {
            question: "Which continent has no permanent human population?",
            options: ["Antarctica", "Australia", "South America", "Africa"],
            answer: "Antarctica"
        },
        {
            question: "What is the primary source of the Nile River?",
            options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
            answer: "Lake Victoria"
        }
    ],
    "ComputerScience": [
        {
            question: "What is the time complexity of a binary search algorithm?",
            options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
            answer: "O(log n)"
        },
        {
            question: "Which programming language was created first?",
            options: ["Python", "C", "Java", "JavaScript"],
            answer: "C"
        },
        {
            question: "What does SQL stand for?",
            options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "System Query Language"],
            answer: "Structured Query Language"
        },
        {
            question: "Which data structure is used to implement a priority queue efficiently?",
            options: ["Array", "Linked List", "Heap", "Stack"],
            answer: "Heap"
        },
        {
            question: "What is the primary function of a compiler?",
            options: ["Execute code", "Translate code to machine language", "Debug code", "Store data"],
            answer: "Translate code to machine language"
        },
        {
            question: "Which protocol is used for secure communication over the internet?",
            options: ["HTTP", "FTP", "HTTPS", "SMTP"],
            answer: "HTTPS"
        },
        {
            question: "What is the purpose of a 'for' loop in programming?",
            options: ["Store data", "Repeat a block of code", "Define a function", "Handle errors"],
            answer: "Repeat a block of code"
        },
        {
            question: "Which sorting algorithm has an average time complexity of O(n log n)?",
            options: ["Bubble Sort", "Quick Sort", "Selection Sort", "Insertion Sort"],
            answer: "Quick Sort"
        },
        {
            question: "What does DNS stand for in networking?",
            options: ["Domain Name System", "Dynamic Network Service", "Data Network Standard", "Digital Name Server"],
            answer: "Domain Name System"
        },
        {
            question: "What is the primary role of an API?",
            options: ["Store data", "Run programs", "Facilitate communication between systems", "Display graphics"],
            answer: "Facilitate communication between systems"
        }
    ],
    "Finance": [
        {
            question: "What is the formula for compound interest?",
            options: ["A = P(1 + r/n)^(nt)", "A = P + rt", "A = P(1 + rt)", "A = Prt"],
            answer: "A = P(1 + r/n)^(nt)"
        },
        {
            question: "If you invest $1,000 at 5% annual interest compounded yearly, what is the balance after 2 years?",
            options: ["$1,050", "$1,100", "$1,102.50", "$1,105"],
            answer: "$1,102.50"
        },
        {
            question: "What is a bond?",
            options: ["A share of company ownership", "A loan to a company or government", "A type of stock", "A savings account"],
            answer: "A loan to a company or government"
        },
        {
            question: "What is the term for the market value of a company’s outstanding shares?",
            options: ["Net worth", "Market capitalization", "Revenue", "Equity"],
            answer: "Market capitalization"
        },
        {
            question: "If a company’s revenue is $200,000 and expenses are $150,000, what is the net income?",
            options: ["$25,000", "$50,000", "$75,000", "$100,000"],
            answer: "$50,000"
        },
        {
            question: "What is the purpose of diversification in investing?",
            options: ["Increase risk", "Reduce risk", "Guarantee profits", "Simplify taxes"],
            answer: "Reduce risk"
        },
        {
            question: "Which financial metric measures a company’s ability to pay short-term obligations?",
            options: ["Debt-to-equity ratio", "Current ratio", "Profit margin", "Return on assets"],
            answer: "Current ratio"
        },
        {
            question: "What is the term for a sudden drop in stock market prices?",
            options: ["Bull market", "Bear market", "Crash", "Rally"],
            answer: "Crash"
        },
        {
            question: "What does GDP stand for in economics?",
            options: ["Gross Domestic Product", "General Domestic Profit", "Global Development Plan", "Gross Development Product"],
            answer: "Gross Domestic Product"
        },
        {
            question: "What is the primary source of income for a bank?",
            options: ["Deposits", "Interest on loans", "Stock investments", "Government grants"],
            answer: "Interest on loans"
        }
    ],
    "Chemistry": [
        {
            question: "What is the molar mass of water (H₂O)?",
            options: ["16 g/mol", "18 g/mol", "20 g/mol", "22 g/mol"],
            answer: "18 g/mol"
        },
        {
            question: "Which gas is produced during photosynthesis?",
            options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
            answer: "Oxygen"
        },
        {
            question: "What type of bond holds sodium chloride (NaCl) together?",
            options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
            answer: "Ionic"
        },
        {
            question: "What is the name of the process where a solid turns directly into a gas?",
            options: ["Evaporation", "Sublimation", "Condensation", "Deposition"],
            answer: "Sublimation"
        },
        {
            question: "Which element has the chemical symbol Fe?",
            options: ["Fluorine", "Iron", "Francium", "Fermium"],
            answer: "Iron"
        },
        {
            question: "What is the pH of a solution with a hydrogen ion concentration of 10⁻³ M?",
            options: ["3", "4", "5", "6"],
            answer: "3"
        },
        {
            question: "Which type of reaction involves the combination of two elements to form a compound?",
            options: ["Decomposition", "Synthesis", "Single Replacement", "Double Replacement"],
            answer: "Synthesis"
        },
        {
            question: "What is the primary source of energy for Earth’s climate system?",
            options: ["Geothermal heat", "Solar radiation", "Nuclear fission", "Tidal forces"],
            answer: "Solar radiation"
        },
        {
            question: "Which gas, discovered on Jupiter, is the third most abundant element in the universe?",
            options: ["Helium", "Hydrogen", "Neon", "Argon"],
            answer: "Neon"
        },
        {
            question: "What is the oxidation state of oxygen in H₂O₂?",
            options: ["-2", "-1", "0", "+1"],
            answer: "-1"
        }
    ],
    "Logic": [
        {
            question: "What is the next number in the sequence: 3, 6, 12, 24, __?",
            options: ["36", "48", "60", "72"],
            answer: "48"
        },
        {
            question: "If all A are B, some B are C, and no C are D, what is the relationship between A and D?",
            options: ["All A are D", "Some A are D", "No A are D", "Cannot be determined"],
            answer: "Cannot be determined"
        },
        {
            question: "What is the missing term in the sequence: 2, 5, 11, 20, __?",
            options: ["28", "32", "36", "40"],
            answer: "32"
        },
        {
            question: "If today is Monday, what day will it be in 15 days?",
            options: ["Sunday", "Monday", "Tuesday", "Wednesday"],
            answer: "Tuesday"
        },
        {
            question: "Which shape completes the pattern: Triangle, Square, Pentagon, Square, __?",
            options: ["Triangle", "Square", "Pentagon", "Circle"],
            answer: "Triangle"
        },
        {
            question: "If no cats are dogs and some dogs are pets, can some cats be pets?",
            options: ["Yes", "No", "Maybe", "Definitely"],
            answer: "Maybe"
        },
        {
            question: "What is the next term in the sequence: 1, 2, 4, 7, 11, __?",
            options: ["15", "16", "18", "20"],
            answer: "16"
        },
        {
            question: "Which number does not belong: 7, 13, 19, 23, 28?",
            options: ["7", "13", "19", "28"],
            answer: "28"
        },
        {
            question: "If A is taller than B, B is taller than C, and C is taller than D, who is the tallest?",
            options: ["A", "B", "C", "D"],
            answer: "A"
        },
        {
            question: "What is the next term in the Fibonacci-like sequence: 1, 1, 2, 3, 5, 8, __?",
            options: ["10", "12", "13", "14"],
            answer: "13"
        }
    ],
    "English": [
        {
            question: "What is the synonym of 'ephemeral'?",
            options: ["Permanent", "Temporary", "Vivid", "Complex"],
            answer: "Temporary"
        },
        {
            question: "Which sentence is grammatically correct?",
            options: ["She has went to the store.", "She have gone to the store.", "She has gone to the store.", "She gone to the store."],
            answer: "She has gone to the store."
        },
        {
            question: "What is the antonym of 'verbose'?",
            options: ["Wordy", "Concise", "Eloquent", "Vague"],
            answer: "Concise"
        },
        {
            question: "What is the literary term for giving human traits to non-human objects?",
            options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
            answer: "Personification"
        },
        {
            question: "Which word is a preposition?",
            options: ["Run", "Quickly", "Under", "Happy"],
            answer: "Under"
        },
        {
            question: "What is the past participle of the verb 'swim'?",
            options: ["Swam", "Swum", "Swimming", "Swimmed"],
            answer: "Swum"
        },
        {
            question: "What is the meaning of the idiom 'barking up the wrong tree'?",
            options: ["Making a loud noise", "Mistaking the target", "Climbing a tree", "Being successful"],
            answer: "Mistaking the target"
        },
        {
            question: "Which part of speech is the word 'beautifully'?",
            options: ["Adjective", "Adverb", "Noun", "Verb"],
            answer: "Adverb"
        },
        {
            question: "What is the plural form of 'mouse' (referring to the animal)?",
            options: ["Mouses", "Mice", "Mouse", "Mices"],
            answer: "Mice"
        },
        {
            question: "What is the term for a play on words using similar-sounding words?",
            options: ["Pun", "Metaphor", "Alliteration", "Oxymoron"],
            answer: "Pun"
        }
    ],
    "GeneralKnowledge": [
        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "Thailand", "South Korea"],
            answer: "Japan"
        },
        {
            question: "Who discovered penicillin?",
            options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Jonas Salk"],
            answer: "Alexander Fleming"
        },
        {
            question: "What is the currency of the European Union?",
            options: ["Dollar", "Pound", "Euro", "Franc"],
            answer: "Euro"
        },
        {
            question: "Which animal is known for its black and white stripes?",
            options: ["Tiger", "Zebra", "Panda", "Cheetah"],
            answer: "Zebra"
        },
        {
            question: "What is the chemical formula for table salt?",
            options: ["HCl", "NaCl", "KCl", "CaCl₂"],
            answer: "NaCl"
        },
        {
            question: "Which city hosted the 2012 Summer Olympics?",
            options: ["Beijing", "London", "Rio de Janeiro", "Tokyo"],
            answer: "London"
        },
        {
            question: "What is the largest bone in the human body?",
            options: ["Skull", "Femur", "Spine", "Humerus"],
            answer: "Femur"
        },
        {
            question: "Which element is the most abundant in Earth’s crust?",
            options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
            answer: "Oxygen"
        },
        {
            question: "Who wrote the novel 'Pride and Prejudice'?",
            options: ["Jane Austen", "Charlotte Brontë", "Emily Dickinson", "Virginia Woolf"],
            answer: "Jane Austen"
        },
        {
            question: "What is the approximate distance from Earth to the Moon?",
            options: ["384,000 km", "150,000 km", "500,000 km", "1,000,000 km"],
            answer: "384,000 km"
        }
    ]
};