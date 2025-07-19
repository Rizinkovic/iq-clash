const questions = {
    "Mathematics": [
        {
            question: "What is the value of x in the equation 3x - 7 = 11?",
            options: ["4", "6", "8", "10"],
            answer: "6"
        },
        {
            question: "If 2^x = 16, what is the value of x?",
            options: ["2", "3", "4", "5"],
            answer: "4"
        },
        {
            question: "What is the square root of 169?",
            options: ["11", "12", "13", "14"],
            answer: "13"
        },
        {
            question: "Solve for y: 2y + 5 = 3y - 2",
            options: ["3", "5", "7", "9"],
            answer: "7"
        },
        {
            question: "What is the value of 5! (5 factorial)?",
            options: ["60", "100", "120", "150"],
            answer: "120"
        },
        {
            question: "If a triangle has angles 30° and 60°, what is the third angle?",
            options: ["90°", "60°", "45°", "30°"],
            answer: "90°"
        },
        {
            question: "What is the result of (3^2) * (2^3)?",
            options: ["54", "72", "81", "96"],
            answer: "72"
        },
        {
            question: "If x^2 = 25, what are the possible values of x?",
            options: ["5", "-5", "5 and -5", "25"],
            answer: "5 and -5"
        },
        {
            question: "What is the slope of the line y = 2x + 3?",
            options: ["1", "2", "3", "4"],
            answer: "2"
        },
        {
            question: "What is the value of log₂(8)?",
            options: ["2", "3", "4", "8"],
            answer: "3"
        }
    ],
    "HumanBiology": [
        {
            question: "Which organ is primarily responsible for filtering blood and producing urine?",
            options: ["Liver", "Kidney", "Spleen", "Pancreas"],
            answer: "Kidney"
        },
        {
            question: "What type of blood vessels carry blood away from the heart?",
            options: ["Veins", "Arteries", "Capillaries", "Venules"],
            answer: "Arteries"
        },
        {
            question: "Which part of the brain controls balance and coordination?",
            options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
            answer: "Cerebellum"
        },
        {
            question: "What is the primary source of energy for human cells?",
            options: ["Glucose", "Protein", "Lipids", "Vitamins"],
            answer: "Glucose"
        },
        {
            question: "Which bone is the longest in the human body?",
            options: ["Humerus", "Femur", "Tibia", "Radius"],
            answer: "Femur"
        },
        {
            question: "What is the function of red blood cells?",
            options: ["Fight infections", "Carry oxygen", "Clot blood", "Digest food"],
            answer: "Carry oxygen"
        },
        {
            question: "Which hormone regulates blood sugar levels?",
            options: ["Adrenaline", "Insulin", "Thyroxine", "Cortisol"],
            answer: "Insulin"
        },
        {
            question: "What is the name of the muscle that contracts to allow breathing?",
            options: ["Diaphragm", "Pectoralis", "Quadriceps", "Biceps"],
            answer: "Diaphragm"
        },
        {
            question: "Which system is responsible for coordinating voluntary movements?",
            options: ["Nervous system", "Endocrine system", "Immune system", "Digestive system"],
            answer: "Nervous system"
        },
        {
            question: "What is the primary component of the human skeleton?",
            options: ["Cartilage", "Bone", "Ligaments", "Tendons"],
            answer: "Bone"
        }
    ],
    "History": [
        {
            question: "In which year did World War II end?",
            options: ["1942", "1943", "1944", "1945"],
            answer: "1945"
        },
        {
            question: "Who was the first Emperor of the Roman Empire?",
            options: ["Julius Caesar", "Augustus", "Nero", "Constantine"],
            answer: "Augustus"
        },
        {
            question: "Which event sparked the beginning of World War I?",
            options: ["Sinking of the Titanic", "Assassination of Archduke Franz Ferdinand", "Russian Revolution", "Battle of Waterloo"],
            answer: "Assassination of Archduke Franz Ferdinand"
        },
        {
            question: "Who led the Indian independence movement against British rule?",
            options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Bhagat Singh"],
            answer: "Mahatma Gandhi"
        },
        {
            question: "In which century did the Renaissance begin?",
            options: ["12th", "13th", "14th", "15th"],
            answer: "14th"
        },
        {
            question: "Which ancient civilization built the Pyramids of Giza?",
            options: ["Mesopotamian", "Egyptian", "Mayan", "Incan"],
            answer: "Egyptian"
        },
        {
            question: "Who was the first woman to win a Nobel Prize?",
            options: ["Marie Curie", "Mother Teresa", "Jane Addams", "Pearl Buck"],
            answer: "Marie Curie"
        },
        {
            question: "What was the primary cause of the French Revolution?",
            options: ["Economic inequality", "Religious conflicts", "Colonial wars", "Technological advancements"],
            answer: "Economic inequality"
        },
        {
            question: "Which treaty ended World War I?",
            options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Tordesillas", "Treaty of Ghent"],
            answer: "Treaty of Versailles"
        },
        {
            question: "Who was the leader of the Soviet Union during World War II?",
            options: ["Vladimir Lenin", "Joseph Stalin", "Leon Trotsky", "Nikita Khrushchev"],
            answer: "Joseph Stalin"
        }
    ],
    "Geography": [
        {
            question: "What is the capital city of Brazil?",
            options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
            answer: "Brasília"
        },
        {
            question: "Which is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            answer: "Nile"
        },
        {
            question: "Which desert is the largest in the world?",
            options: ["Sahara", "Gobi", "Antarctic", "Kalahari"],
            answer: "Antarctic"
        },
        {
            question: "What is the highest mountain peak in the world?",
            options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
            answer: "Mount Everest"
        },
        {
            question: "Which country has the largest population?",
            options: ["India", "China", "United States", "Indonesia"],
            answer: "India"
        },
        {
            question: "What type of climate is characterized by hot, dry summers and mild, wet winters?",
            options: ["Tropical", "Mediterranean", "Polar", "Temperate"],
            answer: "Mediterranean"
        },
        {
            question: "Which ocean is the largest by surface area?",
            options: ["Atlantic", "Indian", "Pacific", "Arctic"],
            answer: "Pacific"
        },
        {
            question: "What is the smallest country in the world by land area?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            answer: "Vatican City"
        },
        {
            question: "Which continent is known for its savanna biome, home to large mammals like elephants and lions?",
            options: ["South America", "Africa", "Australia", "Asia"],
            answer: "Africa"
        },
        {
            question: "What is the primary vegetation type in the Amazon Basin?",
            options: ["Grassland", "Tundra", "Rainforest", "Desert"],
            answer: "Rainforest"
        }
    ],
    "ComputerScience": [
        {
            question: "What does CPU stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Core Processing Unit", "Central Program Unit"],
            answer: "Central Processing Unit"
        },
        {
            question: "Which protocol is used to transfer web pages over the internet?",
            options: ["FTP", "HTTP", "SMTP", "TCP"],
            answer: "HTTP"
        },
        {
            question: "What is the main function of an operating system?",
            options: ["Run applications", "Manage hardware resources", "Store data", "Connect to the internet"],
            answer: "Manage hardware resources"
        },
        {
            question: "Which data structure follows the Last In, First Out (LIFO) principle?",
            options: ["Queue", "Stack", "Array", "Linked List"],
            answer: "Stack"
        },
        {
            question: "What does RAM stand for?",
            options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Rapid Access Memory"],
            answer: "Random Access Memory"
        },
        {
            question: "Which network topology connects all devices to a central hub?",
            options: ["Bus", "Star", "Ring", "Mesh"],
            answer: "Star"
        },
        {
            question: "What is the primary purpose of a firewall?",
            options: ["Speed up internet", "Block unauthorized access", "Store data", "Run software"],
            answer: "Block unauthorized access"
        },
        {
            question: "Which programming language is known for its use in web development and is executed client-side?",
            options: ["Python", "Java", "JavaScript", "C++"],
            answer: "JavaScript"
        },
        {
            question: "What does URL stand for?",
            options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Locator", "Unique Resource Link"],
            answer: "Uniform Resource Locator"
        },
        {
            question: "Which component stores data permanently in a computer?",
            options: ["RAM", "CPU", "Hard Drive", "GPU"],
            answer: "Hard Drive"
        }
    ],
    "Finance": [
        {
            question: "What is the formula for calculating profit?",
            options: ["Revenue - Cost", "Cost - Revenue", "Revenue + Cost", "Cost / Revenue"],
            answer: "Revenue - Cost"
        },
        {
            question: "If the cost price of an item is $50 and the selling price is $80, what is the profit?",
            options: ["$20", "$30", "$40", "$50"],
            answer: "$30"
        },
        {
            question: "What does ROI stand for?",
            options: ["Return on Investment", "Rate of Interest", "Revenue on Investment", "Risk of Investment"],
            answer: "Return on Investment"
        },
        {
            question: "Which term describes the interest earned on both the principal and accumulated interest?",
            options: ["Simple interest", "Compound interest", "Fixed interest", "Variable interest"],
            answer: "Compound interest"
        },
        {
            question: "What is a stock?",
            options: ["A loan to a company", "A share of ownership in a company", "A type of bond", "A savings account"],
            answer: "A share of ownership in a company"
        },
        {
            question: "If you sell an item for $120 that was bought for $100, what is the profit percentage?",
            options: ["10%", "15%", "20%", "25%"],
            answer: "20%"
        },
        {
            question: "What is the primary purpose of a budget?",
            options: ["Increase debt", "Plan income and expenses", "Invest in stocks", "Calculate taxes"],
            answer: "Plan income and expenses"
        },
        {
            question: "Which financial statement shows a company’s revenues and expenses over a period?",
            options: ["Balance Sheet", "Income Statement", "Cash Flow Statement", "Statement of Equity"],
            answer: "Income Statement"
        },
        {
            question: "What is depreciation?",
            options: ["Increase in asset value", "Decrease in asset value over time", "Loan repayment", "Tax calculation"],
            answer: "Decrease in asset value over time"
        },
        {
            question: "What does APR stand for in the context of loans?",
            options: ["Annual Percentage Rate", "Average Profit Rate", "Annual Profit Ratio", "Average Payment Rate"],
            answer: "Annual Percentage Rate"
        }
    ],
    "Chemistry": [
        {
            question: "What is the chemical symbol for gold?",
            options: ["Au", "Ag", "Fe", "Cu"],
            answer: "Au"
        },
        {
            question: "What gas, discovered on the sun before Earth, is the second most abundant element in the universe?",
            options: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
            answer: "Helium"
        },
        {
            question: "What is the pH of a neutral solution at 25°C?",
            options: ["5", "6", "7", "8"],
            answer: "7"
        },
        {
            question: "Which type of bond involves the sharing of electrons?",
            options: ["Ionic", "Covalent", "Metallic", "Hydrogen"],
            answer: "Covalent"
        },
        {
            question: "What is the atomic number of carbon?",
            options: ["4", "6", "8", "12"],
            answer: "6"
        },
        {
            question: "Which gas is the primary component of Earth’s atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
            answer: "Nitrogen"
        },
        {
            question: "What is the process of splitting a nucleus into smaller fragments called?",
            options: ["Fusion", "Fission", "Combustion", "Oxidation"],
            answer: "Fission"
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            answer: "H2O"
        },
        {
            question: "Which element is essential for organic compounds?",
            options: ["Nitrogen", "Carbon", "Oxygen", "Sulfur"],
            answer: "Carbon"
        },
        {
            question: "What is the name of the reaction that releases energy as heat?",
            options: ["Endothermic", "Exothermic", "Neutralization", "Redox"],
            answer: "Exothermic"
        }
    ],
    "Logic": [
        {
            question: "If all cats are mammals and some mammals are black, can we conclude that some cats are black?",
            options: ["Yes", "No", "Maybe", "Definitely"],
            answer: "Maybe"
        },
        {
            question: "What is the next number in the sequence: 2, 4, 8, 16?",
            options: ["24", "28", "32", "36"],
            answer: "32"
        },
        {
            question: "If A implies B, and B implies C, what can we conclude about A and C?",
            options: ["A implies C", "C implies A", "A equals C", "No relation"],
            answer: "A implies C"
        },
        {
            question: "Which shape completes the pattern: Circle, Square, Circle, Square, __?",
            options: ["Triangle", "Circle", "Square", "Pentagon"],
            answer: "Circle"
        },
        {
            question: "If all roses are flowers and some flowers are red, are all roses red?",
            options: ["Yes", "No", "Maybe", "Definitely"],
            answer: "Maybe"
        },
        {
            question: "What is the missing term in the sequence: 1, 3, 6, 10, __?",
            options: ["12", "15", "18", "21"],
            answer: "15"
        },
        {
            question: "If today is Wednesday, what day is it in 10 days?",
            options: ["Monday", "Tuesday", "Wednesday", "Saturday"],
            answer: "Saturday"
        },
        {
            question: "Which number does not belong: 4, 9, 16, 25, 28?",
            options: ["4", "9", "16", "28"],
            answer: "28"
        },
        {
            question: "If all birds can fly and penguins are birds, can penguins fly?",
            options: ["Yes", "No", "Maybe", "Definitely"],
            answer: "No"
        },
        {
            question: "What is the next term in the sequence: 1, 4, 9, 16, 25?",
            options: ["30", "36", "42", "49"],
            answer: "36"
        }
    ],
    "English": [
        {
            question: "What is the synonym of 'ameliorate'?",
            options: ["Worsen", "Improve", "Stagnate", "Ignore"],
            answer: "Improve"
        },
        {
            question: "Which sentence is grammatically correct?",
            options: ["She don’t like to read.", "She doesn’t like to read.", "She not like to read.", "She doesn’t likes to read."],
            answer: "She doesn’t like to read."
        },
        {
            question: "What is the antonym of 'benevolent'?",
            options: ["Kind", "Cruel", "Generous", "Friendly"],
            answer: "Cruel"
        },
        {
            question: "What is the literary term for comparing two things using 'like' or 'as'?",
            options: ["Metaphor", "Simile", "Personification", "Alliteration"],
            answer: "Simile"
        },
        {
            question: "Which word is a conjunction?",
            options: ["Big", "And", "Run", "Happy"],
            answer: "And"
        },
        {
            question: "What is the past participle of the verb 'drink'?",
            options: ["Drank", "Drunk", "Drinking", "Drink"],
            answer: "Drunk"
        },
        {
            question: "What is the meaning of the idiom 'kick the bucket'?",
            options: ["To start a project", "To die", "To celebrate", "To fail"],
            answer: "To die"
        },
        {
            question: "Which part of speech is the word 'quickly'?",
            options: ["Adjective", "Adverb", "Noun", "Verb"],
            answer: "Adverb"
        },
        {
            question: "What is the plural form of 'child'?",
            options: ["Childs", "Children", "Childes", "Child"],
            answer: "Children"
        },
        {
            question: "What is the term for a word that sounds like the noise it describes?",
            options: ["Onomatopoeia", "Alliteration", "Assonance", "Consonance"],
            answer: "Onomatopoeia"
        }
    ],
    "GeneralKnowledge": [
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the currency of Japan?",
            options: ["Yuan", "Yen", "Won", "Ringgit"],
            answer: "Yen"
        },
        {
            question: "Which animal is the largest land mammal?",
            options: ["Elephant", "Rhinoceros", "Blue Whale", "African Elephant"],
            answer: "Elephant"
        },
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "CO2", "O2", "NaCl"],
            answer: "H2O"
        },
        {
            question: "Which country hosted the 2016 Summer Olympics?",
            options: ["China", "Brazil", "United Kingdom", "Japan"],
            answer: "Brazil"
        },
        {
            question: "What is the largest organ in the human body?",
            options: ["Liver", "Skin", "Heart", "Lung"],
            answer: "Skin"
        },
        {
            question: "Which gas is most abundant in the Earth's atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
            answer: "Nitrogen"
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            options: ["William Shakespeare", "George Bernard Shaw", "Tennessee Williams", "Arthur Miller"],
            answer: "William Shakespeare"
        },
        {
            question: "What is the speed of light in a vacuum?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            answer: "300,000 km/s"
        }
    ]
};

