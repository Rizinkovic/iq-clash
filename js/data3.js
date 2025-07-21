const questions = {
    "Mathematics": [
        {
            question: "Solve the system of equations: 2x + y = 7 and x - y = 1.",
            options: ["x = 2, y = 3", "x = 3, y = 1", "x = 2, y = 1", "x = 4, y = 3"],
            answer: "x = 2, y = 3"
        },
        {
            question: "What is the value of tan(45°)?",
            options: ["0", "1", "√2", "√3"],
            answer: "1"
        },
        {
            question: "If log₂(x) = 3, what is the value of x?",
            options: ["6", "8", "10", "12"],
            answer: "8"
        },
        {
            question: "What is the volume of a cylinder with radius 3 cm and height 5 cm? (Use π ≈ 3.14)",
            options: ["47.1 cm³", "94.2 cm³", "141.3 cm³", "188.4 cm³"],
            answer: "141.3 cm³"
        },
        {
            question: "What is the probability of rolling a 4 on a standard six-sided die?",
            options: ["1/6", "1/4", "1/3", "1/2"],
            answer: "1/6"
        },
        {
            question: "What is the sum of the first 10 positive integers?",
            options: ["45", "50", "55", "60"],
            answer: "55"
        },
        {
            question: "If x^2 + 4x + 4 = 0, what are the roots of the equation?",
            options: ["x = 2", "x = -2", "x = 2, -2", "x = -2, -2"],
            answer: "x = -2, -2"
        },
        {
            question: "What is the distance between points (1, 2) and (4, 6) in a coordinate plane?",
            options: ["4", "5", "6", "7"],
            answer: "5"
        },
        {
            question: "What is the value of 4! + 3! ?",
            options: ["24", "30", "48", "60"],
            answer: "30"
        },
        {
            question: "If a triangle has sides 3 cm, 4 cm, and 5 cm, what type of triangle is it?",
            options: ["Equilateral", "Isosceles", "Scalene", "Right"],
            answer: "Right"
        }
    ],
    "HumanBiology": [
        {
            question: "Which organelle is known as the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
            answer: "Mitochondria"
        },
        {
            question: "What is the primary function of platelets in the blood?",
            options: ["Carry oxygen", "Fight infections", "Clot blood", "Transport nutrients"],
            answer: "Clot blood"
        },
        {
            question: "Which hormone is responsible for regulating sleep cycles?",
            options: ["Insulin", "Adrenaline", "Melatonin", "Cortisol"],
            answer: "Melatonin"
        },
        {
            question: "What is the name of the process by which gametes are produced?",
            options: ["Mitosis", "Meiosis", "Binary Fission", "Apoptosis"],
            answer: "Meiosis"
        },
        {
            question: "Which type of tissue connects bones to muscles?",
            options: ["Cartilage", "Tendon", "Ligament", "Adipose"],
            answer: "Tendon"
        },
        {
            question: "What is the primary function of the pancreas in digestion?",
            options: ["Produce bile", "Release digestive enzymes", "Absorb nutrients", "Store glycogen"],
            answer: "Release digestive enzymes"
        },
        {
            question: "Which vitamin is produced by the skin when exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
            answer: "Vitamin D"
        },
        {
            question: "What is the name of the structure that connects the brain to the spinal cord?",
            options: ["Cerebellum", "Medulla Oblongata", "Hypothalamus", "Thalamus"],
            answer: "Medulla Oblongata"
        },
        {
            question: "Which part of the eye controls the amount of light entering?",
            options: ["Cornea", "Pupil", "Retina", "Lens"],
            answer: "Pupil"
        },
        {
            question: "What is the primary source of energy for ATP production in cells?",
            options: ["Glucose", "Proteins", "Lipids", "Nucleotides"],
            answer: "Glucose"
        }
    ],
    "History": [
        {
            question: "Which war was fought between the Allied Powers and the Central Powers from 1914 to 1918?",
            options: ["World War I", "World War II", "Cold War", "Napoleonic Wars"],
            answer: "World War I"
        },
        {
            question: "Who was the leader of the French Revolution’s Reign of Terror?",
            options: ["Napoleon Bonaparte", "Maximilien Robespierre", "Louis XVI", "Marie Antoinette"],
            answer: "Maximilien Robespierre"
        },
        {
            question: "In which year did the United States declare independence from Britain?",
            options: ["1776", "1783", "1791", "1800"],
            answer: "1776"
        },
        {
            question: "Which ancient civilization developed cuneiform writing?",
            options: ["Egyptian", "Mesopotamian", "Greek", "Roman"],
            answer: "Mesopotamian"
        },
        {
            question: "What was the primary purpose of the League of Nations, established in 1920?",
            options: ["Promote trade", "Prevent future wars", "Colonize territories", "Regulate economies"],
            answer: "Prevent future wars"
        },
        {
            question: "Who was the first African-American woman to serve as U.S. Secretary of State?",
            options: ["Hillary Clinton", "Condoleezza Rice", "Madeleine Albright", "Susan Rice"],
            answer: "Condoleezza Rice"
        },
        {
            question: "Which event led to Japan’s surrender in World War II?",
            options: ["Battle of Midway", "D-Day", "Atomic bombings of Hiroshima and Nagasaki", "Battle of Iwo Jima"],
            answer: "Atomic bombings of Hiroshima and Nagasaki"
        },
        {
            question: "Which explorer is credited with circumnavigating the globe in the 16th century?",
            options: ["Christopher Columbus", "Ferdinand Magellan", "Marco Polo", "Vasco da Gama"],
            answer: "Ferdinand Magellan"
        },
        {
            question: "What was the primary goal of the suffragette movement?",
            options: ["End slavery", "Women’s voting rights", "Economic equality", "Prohibition"],
            answer: "Women’s voting rights"
        },
        {
            question: "Which empire ruled much of the Middle East and North Africa in the 16th century?",
            options: ["Ottoman Empire", "Safavid Empire", "Mughal Empire", "Byzantine Empire"],
            answer: "Ottoman Empire"
        }
    ],
    "Geography": [
        {
            question: "Which river is the longest in South America?",
            options: ["Amazon", "Paraná", "Orinoco", "Madeira"],
            answer: "Amazon"
        },
        {
            question: "What is the capital city of Canada?",
            options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            answer: "Ottawa"
        },
        {
            question: "Which desert is located in northern Chile?",
            options: ["Sahara", "Atacama", "Gobi", "Kalahari"],
            answer: "Atacama"
        },
        {
            question: "What is the name of the strait that separates Europe and Africa?",
            options: ["Strait of Gibraltar", "Strait of Hormuz", "Bering Strait", "English Channel"],
            answer: "Strait of Gibraltar"
        },
        {
            question: "Which country has the most deserts in the world?",
            options: ["Australia", "Antarctica", "Saudi Arabia", "Egypt"],
            answer: "Antarctica"
        },
        {
            question: "What is the term for the boundary between two tectonic plates?",
            options: ["Fault line", "Rift valley", "Plate margin", "Subduction zone"],
            answer: "Plate margin"
        },
        {
            question: "Which mountain range separates Europe from Asia?",
            options: ["Alps", "Ural Mountains", "Himalayas", "Andes"],
            answer: "Ural Mountains"
        },
        {
            question: "Which country is known for its fjords, narrow inlets with steep cliffs?",
            options: ["Sweden", "Norway", "Finland", "Denmark"],
            answer: "Norway"
        },
        {
            question: "What is the largest lake in Africa?",
            options: ["Lake Victoria", "Lake Tanganyika", "Lake Malawi", "Lake Chad"],
            answer: "Lake Victoria"
        },
        {
            question: "Which ocean lies between Australia and Africa?",
            options: ["Pacific", "Atlantic", "Indian", "Southern"],
            answer: "Indian"
        }
    ],
    "ComputerScience": [
        {
            question: "What is the worst-case time complexity of a bubble sort algorithm?",
            options: ["O(n)", "O(n log n)", "O(n²)", "O(1)"],
            answer: "O(n²)"
        },
        {
            question: "Which programming paradigm emphasizes functions without side effects?",
            options: ["Object-Oriented", "Functional", "Procedural", "Event-Driven"],
            answer: "Functional"
        },
        {
            question: "What does HTML stand for?",
            options: ["HyperText Markup Language", "High-Level Text Language", "HyperTransfer Markup Language", "Home Text Markup Language"],
            answer: "HyperText Markup Language"
        },
        {
            question: "Which data structure is used to implement a recursive function call stack?",
            options: ["Queue", "Stack", "Heap", "Tree"],
            answer: "Stack"
        },
        {
            question: "What is the purpose of a database index?",
            options: ["Store data", "Improve query performance", "Encrypt data", "Backup data"],
            answer: "Improve query performance"
        },
        {
            question: "Which protocol is used for sending emails?",
            options: ["HTTP", "FTP", "SMTP", "TCP"],
            answer: "SMTP"
        },
        {
            question: "What is the primary function of a linker in the compilation process?",
            options: ["Translate code", "Combine object files", "Debug code", "Optimize code"],
            answer: "Combine object files"
        },
        {
            question: "Which language is primarily used for styling web pages?",
            options: ["HTML", "CSS", "JavaScript", "Python"],
            answer: "CSS"
        },
        {
            question: "What is the purpose of a hash table?",
            options: ["Sort data", "Store key-value pairs", "Execute code", "Display graphics"],
            answer: "Store key-value pairs"
        },
        {
            question: "What does IP stand for in networking?",
            options: ["Internet Protocol", "Internal Processor", "Integrated Port", "Information Packet"],
            answer: "Internet Protocol"
        }
    ],
    "Finance": [
        {
            question: "What is the future value of $2,000 invested at 4% annual interest compounded annually for 3 years?",
            options: ["$2,240", "$2,249.73", "$2,300", "$2,400"],
            answer: "2,249.73"
        },
        {
            question: "What is a mutual fund?",
            options: ["A single stock", "A pool of investors’ money managed to buy assets", "A government bond", "A savings account"],
            answer: "A pool of investors’ money managed to buy assets"
        },
        {
            question: "What is the term for the difference between a company’s assets and liabilities?",
            options: ["Revenue", "Profit", "Equity", "Cash flow"],
            answer: "Equity"
        },
        {
            question: "If a company’s stock price drops from $50 to $45, what is the percentage decrease?",
            options: ["5%", "10%", "15%", "20%"],
            answer: "10%"
        },
        {
            question: "What is the primary purpose of a balance sheet?",
            options: ["Show revenue", "Track cash flow", "Display financial position", "Calculate taxes"],
            answer: "Display financial position"
        },
        {
            question: "What is the term for borrowing money to invest in securities?",
            options: ["Hedging", "Margin", "Diversification", "Arbitrage"],
            answer: "Margin"
        },
        {
            question: "Which economic indicator measures the rate of price increases in an economy?",
            options: ["GDP", "Inflation", "Unemployment rate", "Trade balance"],
            answer: "Inflation"
        },
        {
            question: "What is the primary benefit of a 401(k) plan in the U.S.?",
            options: ["Tax-free income", "Retirement savings with tax benefits", "Free stocks", "Guaranteed returns"],
            answer: "Retirement savings with tax benefits"
        },
        {
            question: "What is the term for a financial security that derives its value from an underlying asset?",
            options: ["Stock", "Bond", "Derivative", "Mutual fund"],
            answer: "Derivative"
        },
        {
            question: "What does EBITDA stand for?",
            options: ["Earnings Before Interest, Taxes, Depreciation, and Amortization", "Estimated Business Income and Total Assets", "Earnings Before Investment and Taxes", "Economic Balance of Income and Taxes"],
            answer: "Earnings Before Interest, Taxes, Depreciation, and Amortization"
        }
    ],
    "Chemistry": [
        {
            question: "What is the molar mass of carbon dioxide (CO₂)?",
            options: ["32 g/mol", "44 g/mol", "48 g/mol", "56 g/mol"],
            answer: "44 g/mol"
        },
        {
            question: "Which gas is responsible for the greenhouse effect in the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
            answer: "Carbon Dioxide"
        },
        {
            question: "What type of bond involves the transfer of electrons between atoms?",
            options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
            answer: "Ionic"
        },
        {
            question: "What is the name of the process where a liquid turns into a gas at its surface?",
            options: ["Sublimation", "Evaporation", "Condensation", "Deposition"],
            answer: "Evaporation"
        },
        {
            question: "Which element has the chemical symbol Ag?",
            options: ["Silver", "Gold", "Aluminum", "Argon"],
            answer: "Silver"
        },
        {
            question: "What is the pH of a solution with a hydroxide ion concentration of 10⁻⁴ M at 25°C?",
            options: ["4", "8", "10", "12"],
            answer: "10"
        },
        {
            question: "Which type of reaction involves one element replacing another in a compound?",
            options: ["Synthesis", "Decomposition", "Single Replacement", "Double Replacement"],
            answer: "Single Replacement"
        },
        {
            question: "What is the primary component of natural gas?",
            options: ["Ethane", "Propane", "Methane", "Butane"],
            answer: "Methane"
        },
        {
            question: "Which element is a noble gas used in lighting?",
            options: ["Helium", "Neon", "Argon", "Krypton"],
            answer: "Neon"
        },
        {
            question: "What is the oxidation state of chlorine in NaCl?",
            options: ["-1", "0", "+1", "+2"],
            answer: "-1"
        }
    ],
    "Logic": [
        {
            question: "What is the next number in the sequence: 5, 10, 20, 40, __?",
            options: ["60", "80", "100", "120"],
            answer: "80"
        },
        {
            question: "If some A are B, all B are C, and no C are D, what is the relationship between A and D?",
            options: ["All A are D", "Some A are D", "No A are D", "Cannot be determined"],
            answer: "No A are D"
        },
        {
            question: "What is the missing term in the sequence: 3, 8, 18, 38, __?",
            options: ["68", "78", "88", "98"],
            answer: "78"
        },
        {
            question: "If today is Friday, what day will it be in 20 days?",
            options: ["Wednesday", "Thursday", "Friday", "Saturday"],
            answer: "Thursday"
        },
        {
            question: "Which shape completes the pattern: Circle, Triangle, Square, Circle, __?",
            options: ["Triangle", "Square", "Circle", "Pentagon"],
            answer: "Triangle"
        },
        {
            question: "If no X are Y and some Y are Z, can some X be Z?",
            options: ["Yes", "No", "Maybe", "Definitely"],
            answer: "Maybe"
        },
        {
            question: "What is the next term in the sequence: 2, 5, 11, 23, __?",
            options: ["38", "44", "47", "50"],
            answer: "44"
        },
        {
            question: "Which number does not belong: 8, 15, 24, 35, 48?",
            options: ["8", "15", "24", "48"],
            answer: "48"
        },
        {
            question: "If A is faster than B, B is faster than C, and D is faster than A, who is the fastest?",
            options: ["A", "B", "C", "D"],
            answer: "D"
        },
        {
            question: "What is the next term in the sequence: 1, 3, 6, 10, 15, __?",
            options: ["21", "22", "23", "24"],
            answer: "21"
        }
    ],
    "English": [
        {
            question: "What is the synonym of 'ubiquitous'?",
            options: ["Rare", "Common", "Hidden", "Unique"],
            answer: "Common"
        },
        {
            question: "Which sentence is grammatically correct?",
            options: ["Neither of the boys are here.", "Neither of the boys is here.", "Neither of the boys were here.", "Neither of the boys be here."],
            answer: "Neither of the boys is here."
        },
        {
            question: "What is the antonym of 'mitigate'?",
            options: ["Reduce", "Worsen", "Maintain", "Ignore"],
            answer: "Worsen"
        },
        {
            question: "What is the literary term for an extreme exaggeration used for effect?",
            options: ["Metaphor", "Simile", "Hyperbole", "Personification"],
            answer: "Hyperbole"
        },
        {
            question: "Which word is an adverb?",
            options: ["Fast", "Quickly", "Speed", "Rapid"],
            answer: "Quickly"
        },
        {
            question: "What is the past participle of the verb 'write'?",
            options: ["Wrote", "Written", "Writing", "Writed"],
            answer: "Written"
        },
        {
            question: "What is the meaning of the idiom 'spill the beans'?",
            options: ["Make a mess", "Reveal a secret", "Start a fight", "Waste money"],
            answer: "Reveal a secret"
        },
        {
            question: "Which part of speech is the word 'democracy'?",
            options: ["Adjective", "Adverb", "Noun", "Verb"],
            answer: "Noun"
        },
        {
            question: "What is the plural form of 'datum'?",
            options: ["Data", "Datums", "Dates", "Dati"],
            answer: "Data"
        },
        {
            question: "What is the term for repeating the same sound at the beginning of words?",
            options: ["Onomatopoeia", "Alliteration", "Assonance", "Consonance"],
            answer: "Alliteration"
        }
    ],
    "GeneralKnowledge": [
        {
            question: "Which country is known for the Taj Mahal?",
            options: ["India", "China", "Egypt", "Turkey"],
            answer: "India"
        },
        {
            question: "Who developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            answer: "Albert Einstein"
        },
        {
            question: "What is the currency of Russia?",
            options: ["Ruble", "Rupee", "Yuan", "Peso"],
            answer: "Ruble"
        },
        {
            question: "Which animal is the fastest land mammal?",
            options: ["Lion", "Cheetah", "Horse", "Antelope"],
            answer: "Cheetah"
        },
        {
            question: "What is the chemical formula for ammonia?",
            options: ["NH₃", "NO₂", "N₂O", "NH₄"],
            answer: "NH₃"
        },
        {
            question: "Which city hosted the 2008 Summer Olympics?",
            options: ["Sydney", "Beijing", "Athens", "London"],
            answer: "Beijing"
        },
        {
            question: "What is the smallest bone in the human body?",
            options: ["Stapes", "Femur", "Radius", "Clavicle"],
            answer: "Stapes"
        },
        {
            question: "Which element is the second most abundant in Earth’s crust?",
            options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
            answer: "Silicon"
        },
        {
            question: "Who wrote the novel '1984'?",
            options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "J.K. Rowling"],
            answer: "George Orwell"
        },
        {
            question: "What is the approximate circumference of the Earth at the equator?",
            options: ["20,000 km", "30,000 km", "40,000 km", "50,000 km"],
            answer: "40,000 km"
        }
    ]
};