const quizData = {
    gk: {
        easy: [
            { q: "What is the capital of India?", q_hi: "भारत की राजधानी क्या है?", options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"], options_hi: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"], answer: 1 },
            { q: "Which animal is known as the 'King of the Jungle'?", q_hi: "'जंगल का राजा' किस जानवर को कहा जाता है?", options: ["Tiger", "Elephant", "Lion", "Bear"], options_hi: ["बाघ", "हाथी", "शेर", "भालू"], answer: 2 },
            { q: "How many days are there in a week?", q_hi: "एक सप्ताह में कितने दिन होते हैं?", options: ["5", "6", "7", "8"], options_hi: ["5", "6", "7", "8"], answer: 2 },
            { q: "What do we breathe in?", q_hi: "हम क्या सांस लेते हैं?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"], answer: 0 },
            { q: "Which fruit is yellow and curved?", q_hi: "कौन सा फल पीला और घुमावदार होता है?", options: ["Apple", "Banana", "Grape", "Orange"], options_hi: ["सेब", "केला", "अंगूर", "संतरा"], answer: 1 },
            { q: "What is the color of the sky on a clear day?", q_hi: "साफ दिन में आसमान का रंग क्या होता है?", options: ["Green", "Blue", "Red", "Yellow"], options_hi: ["हरा", "नीला", "लाल", "पीला"], answer: 1 },
            { q: "Which planet do we live on?", q_hi: "हम किस ग्रह पर रहते हैं?", options: ["Mars", "Earth", "Venus", "Jupiter"], options_hi: ["मंगल", "पृथ्वी", "शुक्र", "बृहस्पति"], answer: 1 },
            { q: "How many fingers do humans have on one hand?", q_hi: "मनुष्यों के एक हाथ में कितनी उंगलियां होती हैं?", options: ["4", "5", "6", "10"], options_hi: ["4", "5", "6", "10"], answer: 1 },
            { q: "What is 2 + 2?", q_hi: "2 + 2 क्या है?", options: ["3", "4", "5", "6"], options_hi: ["3", "4", "5", "6"], answer: 1 },
            { q: "Which season is the hottest?", q_hi: "कौन सा मौसम सबसे गर्म होता है?", options: ["Winter", "Summer", "Spring", "Autumn"], options_hi: ["सर्दी", "गर्मी", "वसंत", "पतझड़"], answer: 1 }
        ],
        medium: [
            { q: "Who wrote the Indian National Anthem?", q_hi: "भारतीय राष्ट्रगान किसने लिखा था?", options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Chandra Bose"], options_hi: ["बंकिम चंद्र चटर्जी", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "सुभाष चंद्र बोस"], answer: 1 },
            { q: "Which is the largest ocean in the world?", q_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], options_hi: ["अटलांटिक", "हिंद", "प्रशांत", "आर्कटिक"], answer: 2 },
            { q: "Who invented the telephone?", q_hi: "टेलीफोन का आविष्कार किसने किया?", options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Albert Einstein"], options_hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "अल्बर्ट आइंस्टीन"], answer: 1 },
            { q: "Which country is known as the Land of the Rising Sun?", q_hi: "किस देश को उगते सूरज की भूमि के रूप में जाना जाता है?", options: ["China", "Japan", "Thailand", "South Korea"], options_hi: ["चीन", "जापान", "थाईलैंड", "दक्षिण कोरिया"], answer: 1 },
            { q: "What is the currency of the USA?", q_hi: "संयुक्त राज्य अमेरिका की मुद्रा क्या है?", options: ["Euro", "Pound", "Dollar", "Yen"], options_hi: ["यूरो", "पाउंड", "डॉलर", "येन"], answer: 2 },
            { q: "Which is the smallest continent?", q_hi: "सबसे छोटा महाद्वीप कौन सा है?", options: ["Europe", "Australia", "Antarctica", "South America"], options_hi: ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"], answer: 1 },
            { q: "Who was the first Prime Minister of India?", q_hi: "भारत के पहले प्रधान मंत्री कौन थे?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Sardar Patel"], options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "इंदिरा गांधी", "सरदार पटेल"], answer: 1 },
            { q: "Which gas is most abundant in the Earth's atmosphere?", q_hi: "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक प्रचुर मात्रा में है?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"], options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"], answer: 1 },
            { q: "What is the hardest natural substance on Earth?", q_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?", options: ["Gold", "Iron", "Diamond", "Platinum"], options_hi: ["सोना", "लोहा", "हीरा", "प्लैटिनम"], answer: 2 },
            { q: "Which planet is known as the Red Planet?", q_hi: "किस ग्रह को लाल ग्रह के रूप में जाना जाता है?", options: ["Venus", "Mars", "Jupiter", "Saturn"], options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"], answer: 1 }
        ],
        hard: [
            { q: "In which year did the Titanic sink?", q_hi: "टाइटेनिक किस वर्ष डूबा था?", options: ["1910", "1912", "1914", "1916"], options_hi: ["1910", "1912", "1914", "1916"], answer: 1 },
            { q: "Who painted 'The Starry Night'?", q_hi: "'द स्टाररी नाइट' किसने चित्रित की?", options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"], options_hi: ["पाब्लो पिकासो", "विंसेंट वैन गॉग", "क्लाउड मोनेट", "लियोनार्डो दा विंची"], answer: 1 },
            { q: "What is the capital of Canada?", q_hi: "कनाडा की राजधानी क्या है?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], options_hi: ["टोरंटो", "वैंकूवर", "ओटावा", "मॉन्ट्रियल"], answer: 2 },
            { q: "Which element has the chemical symbol 'Fe'?", q_hi: "किस तत्व का रासायनिक प्रतीक 'Fe' है?", options: ["Iron", "Gold", "Silver", "Copper"], options_hi: ["लोहा", "सोना", "चांदी", "तांबा"], answer: 0 },
            { q: "Who wrote 'Romeo and Juliet'?", q_hi: "'रोमेओ और जूलियट' किसने लिखा था?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], options_hi: ["चार्ल्स डिकेंस", "विलियम शेक्सपियर", "जेन ऑस्टेन", "मार्क ट्वेन"], answer: 1 },
            { q: "What is the longest river in the world?", q_hi: "विश्व की सबसे लंबी नदी कौन सी है?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], options_hi: ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"], answer: 1 },
            { q: "Which year did World War II end?", q_hi: "द्वितीय विश्व युद्ध किस वर्ष समाप्त हुआ?", options: ["1943", "1945", "1947", "1950"], options_hi: ["1943", "1945", "1947", "1950"], answer: 1 },
            { q: "What is the smallest country in the world?", q_hi: "विश्व का सबसे छोटा देश कौन सा है?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], options_hi: ["मोनाको", "वेटिकन सिटी", "सैन मैरिनो", "लिकटेंस्टीन"], answer: 1 },
            { q: "Who discovered Penicillin?", q_hi: "पेनिसिलिन की खोज किसने की?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Isaac Newton"], options_hi: ["मैरी क्यूरी", "अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "आइजैक न्यूटन"], answer: 1 },
            { q: "Which planet has the most moons?", q_hi: "किस ग्रह के सबसे अधिक चंद्रमा हैं?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], options_hi: ["बृहस्पति", "शनि", "यूरेनस", "नेपच्यून"], answer: 1 }
        ]
    },
    math: {
        easy: [
            { q: "5 + 3 = ?", q_hi: "5 + 3 = ?", options: ["7", "8", "9", "10"], options_hi: ["7", "8", "9", "10"], answer: 1 },
            { q: "10 - 4 = ?", q_hi: "10 - 4 = ?", options: ["5", "6", "7", "8"], options_hi: ["5", "6", "7", "8"], answer: 1 },
            { q: "2 * 3 = ?", q_hi: "2 * 3 = ?", options: ["5", "6", "7", "8"], options_hi: ["5", "6", "7", "8"], answer: 1 },
            { q: "8 / 2 = ?", q_hi: "8 / 2 = ?", options: ["2", "3", "4", "5"], options_hi: ["2", "3", "4", "5"], answer: 2 },
            { q: "What shape has 3 sides?", q_hi: "किस आकार की 3 भुजाएँ होती हैं?", options: ["Square", "Triangle", "Circle", "Rectangle"], options_hi: ["वर्ग", "त्रिकोण", "वृत्त", "आयत"], answer: 1 },
            { q: "What comes after 9?", q_hi: "9 के बाद क्या आता है?", options: ["8", "10", "11", "12"], options_hi: ["8", "10", "11", "12"], answer: 1 },
            { q: "How many sides does a square have?", q_hi: "एक वर्ग की कितनी भुजाएँ होती हैं?", options: ["3", "4", "5", "6"], options_hi: ["3", "4", "5", "6"], answer: 1 },
            { q: "15 + 5 = ?", q_hi: "15 + 5 = ?", options: ["10", "15", "20", "25"], options_hi: ["10", "15", "20", "25"], answer: 2 },
            { q: "Which number is even?", q_hi: "कौन सी संख्या सम है?", options: ["1", "2", "3", "5"], options_hi: ["1", "2", "3", "5"], answer: 1 },
            { q: "Which number is odd?", q_hi: "कौन सी संख्या विषम है?", options: ["2", "4", "5", "6"], options_hi: ["2", "4", "5", "6"], answer: 2 }
        ],
        medium: [
            { q: "12 * 12 = ?", q_hi: "12 * 12 = ?", options: ["124", "144", "164", "184"], options_hi: ["124", "144", "164", "184"], answer: 1 },
            { q: "Square root of 81?", q_hi: "81 का वर्गमूल?", options: ["7", "8", "9", "10"], options_hi: ["7", "8", "9", "10"], answer: 2 },
            { q: "What is 15% of 200?", q_hi: "200 का 15% क्या है?", options: ["20", "25", "30", "35"], options_hi: ["20", "25", "30", "35"], answer: 2 },
            { q: "Solve for x: 2x + 4 = 10", q_hi: "x के लिए हल करें: 2x + 4 = 10", options: ["2", "3", "4", "5"], options_hi: ["2", "3", "4", "5"], answer: 1 },
            { q: "Area of a rectangle with length 5 and width 4?", q_hi: "लंबाई 5 और चौड़ाई 4 वाले आयत का क्षेत्रफल?", options: ["9", "18", "20", "25"], options_hi: ["9", "18", "20", "25"], answer: 2 },
            { q: "What is the value of Pi (approx)?", q_hi: "पाई का मान (लगभग) क्या है?", options: ["3.12", "3.14", "3.16", "3.18"], options_hi: ["3.12", "3.14", "3.16", "3.18"], answer: 1 },
            { q: "5 cubed is?", q_hi: "5 का घन है?", options: ["25", "100", "125", "150"], options_hi: ["25", "100", "125", "150"], answer: 2 },
            { q: "Sum of angles in a triangle?", q_hi: "त्रिभुज के कोणों का योग?", options: ["90", "180", "270", "360"], options_hi: ["90", "180", "270", "360"], answer: 1 },
            { q: "Next prime number after 7?", q_hi: "7 के बाद अगली अभाज्य संख्या?", options: ["9", "10", "11", "13"], options_hi: ["9", "10", "11", "13"], answer: 2 },
            { q: "250 / 5 = ?", q_hi: "250 / 5 = ?", options: ["40", "50", "60", "70"], options_hi: ["40", "50", "60", "70"], answer: 1 }
        ],
        hard: [
            { q: "Derivative of x^2?", q_hi: "x^2 का अवकलज?", options: ["x", "2x", "x^2", "2"], options_hi: ["x", "2x", "x^2", "2"], answer: 1 },
            { q: "Value of sin(90°)?", q_hi: "sin(90°) का मान?", options: ["0", "0.5", "1", "-1"], options_hi: ["0", "0.5", "1", "-1"], answer: 2 },
            { q: "Log base 10 of 1000?", q_hi: "1000 का लॉग बेस 10?", options: ["2", "3", "4", "10"], options_hi: ["2", "3", "4", "10"], answer: 1 },
            { q: "Solve: 3x - 7 = 2x + 5", q_hi: "हल करें: 3x - 7 = 2x + 5", options: ["10", "11", "12", "13"], options_hi: ["10", "11", "12", "13"], answer: 2 },
            { q: "Volume of a sphere with radius r?", q_hi: "त्रिज्या r वाले गोले का आयतन?", options: ["4/3 πr^3", "πr^2", "2πr", "4πr^2"], options_hi: ["4/3 πr^3", "πr^2", "2πr", "4πr^2"], answer: 0 },
            { q: "What is the factorial of 5?", q_hi: "5 का फैक्टोरियल क्या है?", options: ["60", "100", "120", "150"], options_hi: ["60", "100", "120", "150"], answer: 2 },
            { q: "Binary representation of 10?", q_hi: "10 का बाइनरी प्रतिनिधित्व?", options: ["1001", "1010", "1100", "1110"], options_hi: ["1001", "1010", "1100", "1110"], answer: 1 },
            { q: "Roots of x^2 - 5x + 6 = 0?", q_hi: "x^2 - 5x + 6 = 0 के मूल?", options: ["2, 3", "1, 6", "-2, -3", "-1, -6"], options_hi: ["2, 3", "1, 6", "-2, -3", "-1, -6"], answer: 0 },
            { q: "Value of e (Euler's number) approx?", q_hi: "e (यूलर संख्या) का मान लगभग?", options: ["2.51", "2.71", "2.91", "3.14"], options_hi: ["2.51", "2.71", "2.91", "3.14"], answer: 1 },
            { q: "Sum of infinite geometric series 1 + 1/2 + 1/4...?", q_hi: "अनंत ज्यामितीय श्रेणी 1 + 1/2 + 1/4... का योग?", options: ["1.5", "2", "2.5", "Infinity"], options_hi: ["1.5", "2", "2.5", "अनंत"], answer: 1 }
        ]
    },
    science: {
        easy: [
            { q: "What does ice turn into when it melts?", q_hi: "बर्फ पिघलने पर क्या बनती है?", options: ["Steam", "Water", "Gas", "Solid"], options_hi: ["भाप", "पानी", "गैस", "ठोस"], answer: 1 },
            { q: "Which planet is closest to the Sun?", q_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?", options: ["Venus", "Mercury", "Earth", "Mars"], options_hi: ["शुक्र", "बुध", "पृथ्वी", "मंगल"], answer: 1 },
            { q: "What do bees make?", q_hi: "मधुमक्खियाँ क्या बनाती हैं?", options: ["Milk", "Honey", "Silk", "Wool"], options_hi: ["दूध", "शहद", "रेशम", "ऊन"], answer: 1 },
            { q: "How many legs does a spider have?", q_hi: "मकड़ी के कितने पैर होते हैं?", options: ["6", "8", "10", "12"], options_hi: ["6", "8", "10", "12"], answer: 1 },
            { q: "What is the main source of light for Earth?", q_hi: "पृथ्वी के लिए प्रकाश का मुख्य स्रोत क्या है?", options: ["Moon", "Sun", "Stars", "Fire"], options_hi: ["चांद", "सूरज", "तारे", "आग"], answer: 1 },
            { q: "Which animal gives us milk?", q_hi: "कौन सा जानवर हमें दूध देता है?", options: ["Dog", "Cat", "Cow", "Lion"], options_hi: ["कुत्ता", "बिल्ली", "गाय", "शेर"], answer: 2 },
            { q: "What color are leaves usually?", q_hi: "पत्तियां आमतौर पर किस रंग की होती हैं?", options: ["Blue", "Red", "Green", "Yellow"], options_hi: ["नीला", "लाल", "हरा", "पीला"], answer: 2 },
            { q: "Which organ pumps blood?", q_hi: "कौन सा अंग रक्त पंप करता है?", options: ["Brain", "Lungs", "Heart", "Stomach"], options_hi: ["मस्तिष्क", "फेफड़े", "हृदय", "पेट"], answer: 2 },
            { q: "Water boils at what temperature (Celsius)?", q_hi: "पानी किस तापमान (सेल्सियस) पर उबलता है?", options: ["50", "90", "100", "120"], options_hi: ["50", "90", "100", "120"], answer: 2 },
            { q: "What do you use to see?", q_hi: "आप देखने के लिए किसका उपयोग करते हैं?", options: ["Ears", "Nose", "Eyes", "Hands"], options_hi: ["कान", "नाक", "आंखें", "हाथ"], answer: 2 }
        ],
        medium: [
            { q: "Chemical symbol for Water?", q_hi: "पानी का रासायनिक प्रतीक?", options: ["HO", "H2O", "O2", "CO2"], options_hi: ["HO", "H2O", "O2", "CO2"], answer: 1 },
            { q: "Which gas do plants absorb?", q_hi: "पौधे कौन सी गैस अवशोषित करते हैं?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"], options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"], answer: 2 },
            { q: "What is the center of an atom called?", q_hi: "परमाणु के केंद्र को क्या कहते हैं?", options: ["Electron", "Proton", "Nucleus", "Neutron"], options_hi: ["इलेक्ट्रॉन", "प्रोटॉन", "नाभिक", "न्यूट्रॉन"], answer: 2 },
            { q: "Speed of light is faster than sound?", q_hi: "क्या प्रकाश की गति ध्वनि से तेज है?", options: ["True", "False", "Equal", "Unknown"], options_hi: ["सत्य", "असत्य", "बराबर", "अज्ञात"], answer: 0 },
            { q: "Which planet has rings?", q_hi: "किस ग्रह के छल्ले हैं?", options: ["Mars", "Venus", "Saturn", "Mercury"], options_hi: ["मंगल", "शुक्र", "शनि", "बुध"], answer: 2 },
            { q: "What is the hardest natural material?", q_hi: "सबसे कठोर प्राकृतिक पदार्थ क्या है?", options: ["Steel", "Iron", "Diamond", "Rock"], options_hi: ["स्टील", "लोहा", "हीरा", "चट्टान"], answer: 2 },
            { q: "How many bones in an adult human?", q_hi: "एक वयस्क मानव में कितनी हड्डियां होती हैं?", options: ["200", "206", "212", "220"], options_hi: ["200", "206", "212", "220"], answer: 1 },
            { q: "Which vitamin do we get from the sun?", q_hi: "हमें सूर्य से कौन सा विटामिन मिलता है?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"], answer: 3 },
            { q: "What is the largest mammal?", q_hi: "सबसे बड़ा स्तनधारी कौन सा है?", options: ["Elephant", "Blue Whale", "Giraffe", "Rhino"], options_hi: ["हाथी", "ब्लू व्हेल", "जिराफ", "गेंडा"], answer: 1 },
            { q: "What force keeps us on the ground?", q_hi: "कौन सा बल हमें जमीन पर रखता है?", options: ["Magnetism", "Friction", "Gravity", "Tension"], options_hi: ["चुंबकत्व", "घर्षण", "गुरुत्वाकर्षण", "तनाव"], answer: 2 }
        ],
        hard: [
            { q: "What is the atomic number of Carbon?", q_hi: "कार्बन की परमाणु संख्या क्या है?", options: ["4", "6", "8", "12"], options_hi: ["4", "6", "8", "12"], answer: 1 },
            { q: "Who proposed the Theory of Relativity?", q_hi: "सापेक्षता का सिद्धांत किसने प्रतिपादित किया?", options: ["Newton", "Einstein", "Tesla", "Hawking"], options_hi: ["न्यूटन", "आइंस्टीन", "टेस्ला", "हॉकिंग"], answer: 1 },
            { q: "What is the powerhouse of the cell?", q_hi: "कोशिका का पावरहाउस क्या है?", options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"], options_hi: ["नाभिक", "राइबोसोम", "माइटोकॉन्ड्रिया", "लाइसोसोम"], answer: 2 },
            { q: "Which element is a noble gas?", q_hi: "कौन सा तत्व एक नोबल गैस है?", options: ["Oxygen", "Nitrogen", "Neon", "Chlorine"], options_hi: ["ऑक्सीजन", "नाइट्रोजन", "नियॉन", "क्लोरीन"], answer: 2 },
            { q: "What is the speed of light (approx)?", q_hi: "प्रकाश की गति (लगभग) क्या है?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "3,000 km/s"], options_hi: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "3,000 km/s"], answer: 0 },
            { q: "What is the pH of pure water?", q_hi: "शुद्ध पानी का पीएच क्या है?", options: ["5", "6", "7", "8"], options_hi: ["5", "6", "7", "8"], answer: 2 },
            { q: "Which planet is the hottest?", q_hi: "कौन सा ग्रह सबसे गर्म है?", options: ["Mercury", "Venus", "Mars", "Jupiter"], options_hi: ["बुध", "शुक्र", "मंगल", "बृहस्पति"], answer: 1 },
            { q: "What is the most abundant element in the universe?", q_hi: "ब्रह्मांड में सबसे प्रचुर तत्व कौन सा है?", options: ["Oxygen", "Carbon", "Hydrogen", "Helium"], options_hi: ["ऑक्सीजन", "कार्बन", "हाइड्रोजन", "हीलियम"], answer: 2 },
            { q: "How many chambers does the human heart have?", q_hi: "मानव हृदय में कितने कक्ष होते हैं?", options: ["2", "3", "4", "5"], options_hi: ["2", "3", "4", "5"], answer: 2 },
            { q: "What is the chemical symbol for Gold?", q_hi: "सोने का रासायनिक प्रतीक क्या है?", options: ["Ag", "Au", "Fe", "Cu"], options_hi: ["Ag", "Au", "Fe", "Cu"], answer: 1 }
        ]
    },
    cs: {
        easy: [
            { q: "What does PC stand for?", q_hi: "PC का मतलब क्या है?", options: ["Personal Computer", "Private Computer", "Public Computer", "Power Computer"], options_hi: ["पर्सनल कंप्यूटर", "प्राइवेट कंप्यूटर", "पब्लिक कंप्यूटर", "पावर कंप्यूटर"], answer: 0 },
            { q: "Which is an input device?", q_hi: "इनपुट डिवाइस कौन सा है?", options: ["Monitor", "Speaker", "Mouse", "Printer"], options_hi: ["मॉनिटर", "स्पीकर", "माउस", "प्रिंटर"], answer: 2 },
            { q: "What is the brain of the computer?", q_hi: "कंप्यूटर का दिमाग क्या है?", options: ["RAM", "CPU", "HDD", "GPU"], options_hi: ["RAM", "CPU", "HDD", "GPU"], answer: 1 },
            { q: "What do you use to type?", q_hi: "आप टाइप करने के लिए किसका उपयोग करते हैं?", options: ["Mouse", "Screen", "Keyboard", "Speaker"], options_hi: ["माउस", "स्क्रीन", "कीबोर्ड", "स्पीकर"], answer: 2 },
            { q: "Which is a web browser?", q_hi: "वेब ब्राउज़र कौन सा है?", options: ["Word", "Excel", "Chrome", "Photoshop"], options_hi: ["वर्ड", "एक्सेल", "क्रोम", "फोटोशॉप"], answer: 2 },
            { q: "What does OS stand for?", q_hi: "OS का मतलब क्या है?", options: ["Open Source", "Operating System", "Optical Sensor", "Output System"], options_hi: ["ओपन सोर्स", "ऑपरेटिंग सिस्टम", "ऑप्टिकल सेंसर", "आउटपुट सिस्टम"], answer: 1 },
            { q: "Which key deletes text?", q_hi: "कौन सी कुंजी टेक्स्ट हटाती है?", options: ["Shift", "Ctrl", "Backspace", "Alt"], options_hi: ["Shift", "Ctrl", "Backspace", "Alt"], answer: 2 },
            { q: "What is a mouse used for?", q_hi: "माउस का उपयोग किसके लिए किया जाता है?", options: ["Typing", "Clicking", "Listening", "Printing"], options_hi: ["टाइपिंग", "क्लिकिंग", "सुनना", "प्रिंटिंग"], answer: 1 },
            { q: "Which is a storage device?", q_hi: "स्टोरेज डिवाइस कौन सा है?", options: ["Monitor", "USB Drive", "Keyboard", "Mouse"], options_hi: ["मॉनिटर", "USB ड्राइव", "कीबोर्ड", "माउस"], answer: 1 },
            { q: "What connects a computer to the internet?", q_hi: "कंप्यूटर को इंटरनेट से क्या जोड़ता है?", options: ["Modem", "Printer", "Scanner", "Speaker"], options_hi: ["मॉडेम", "प्रिंटर", "स्कैनर", "स्पीकर"], answer: 0 }
        ],
        medium: [
            { q: "What does RAM stand for?", q_hi: "RAM का मतलब क्या है?", options: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Real Access Memory"], options_hi: ["Read Access Memory", "Random Access Memory", "Run Access Memory", "Real Access Memory"], answer: 1 },
            { q: "Which language is used for web pages?", q_hi: "वेब पेजों के लिए किस भाषा का उपयोग किया जाता है?", options: ["C++", "Python", "HTML", "Java"], options_hi: ["C++", "Python", "HTML", "Java"], answer: 2 },
            { q: "What is 1024 bytes equal to?", q_hi: "1024 बाइट्स किसके बराबर है?", options: ["1 KB", "1 MB", "1 GB", "1 TB"], options_hi: ["1 KB", "1 MB", "1 GB", "1 TB"], answer: 0 },
            { q: "Who founded Microsoft?", q_hi: "माइक्रोसॉफ्ट की स्थापना किसने की?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], options_hi: ["स्टीव जॉब्स", "बिल गेट्स", "मार्क जुकरबर्ग", "एलोन मस्क"], answer: 1 },
            { q: "What is the main circuit board called?", q_hi: "मुख्य सर्किट बोर्ड को क्या कहा जाता है?", options: ["Fatherboard", "Motherboard", "Sisterboard", "Brotherboard"], options_hi: ["फादरबोर्ड", "मदरबोर्ड", "सिस्टरबोर्ड", "ब्रदरबोर्ड"], answer: 1 },
            { q: "Which is a volatile memory?", q_hi: "अस्थिर मेमोरी कौन सी है?", options: ["ROM", "HDD", "SSD", "RAM"], options_hi: ["ROM", "HDD", "SSD", "RAM"], answer: 3 },
            { q: "What does URL stand for?", q_hi: "URL का मतलब क्या है?", options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Link", "Universal Reference Locator"], options_hi: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Reference Link", "Universal Reference Locator"], answer: 0 },
            { q: "Which is an example of software?", q_hi: "सॉफ्टवेयर का उदाहरण कौन सा है?", options: ["Monitor", "Keyboard", "Windows", "Mouse"], options_hi: ["मॉनिटर", "कीबोर्ड", "विंडोज", "माउस"], answer: 2 },
            { q: "What does 'www' stand for?", q_hi: "'www' का मतलब क्या है?", options: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"], options_hi: ["World Wide Web", "World Web Wide", "Web World Wide", "Wide World Web"], answer: 0 },
            { q: "Which company makes the iPhone?", q_hi: "iPhone कौन सी कंपनी बनाती है?", options: ["Samsung", "Google", "Apple", "Nokia"], options_hi: ["सैमसंग", "गूगल", "एप्पल", "नोकिया"], answer: 2 }
        ],
        hard: [
            { q: "What does HTTP stand for?", q_hi: "HTTP का मतलब क्या है?", options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transfer Program", "HyperText Transmission Program"], options_hi: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transfer Program", "HyperText Transmission Program"], answer: 0 },
            { q: "Which data structure uses LIFO?", q_hi: "LIFO का उपयोग कौन सा डेटा स्ट्रक्चर करता है?", options: ["Queue", "Stack", "Array", "Tree"], options_hi: ["Queue", "Stack", "Array", "Tree"], answer: 1 },
            { q: "Who is known as the father of computers?", q_hi: "कंप्यूटर का जनक किसे कहा जाता है?", options: ["Alan Turing", "Charles Babbage", "Ada Lovelace", "John von Neumann"], options_hi: ["एलन ट्यूरिंग", "चार्ल्स बैबेज", "एदा लवलेस", "जॉन वॉन न्यूमैन"], answer: 1 },
            { q: "What is the binary for 15?", q_hi: "15 के लिए बाइनरी क्या है?", options: ["1010", "1100", "1110", "1111"], options_hi: ["1010", "1100", "1110", "1111"], answer: 3 },
            { q: "Which port is used for HTTP?", q_hi: "HTTP के लिए किस पोर्ट का उपयोग किया जाता है?", options: ["21", "25", "80", "443"], options_hi: ["21", "25", "80", "443"], answer: 2 },
            { q: "What does SQL stand for?", q_hi: "SQL का मतलब क्या है?", options: ["Structured Question Language", "Structured Query Language", "Simple Query Language", "System Query Language"], options_hi: ["Structured Question Language", "Structured Query Language", "Simple Query Language", "System Query Language"], answer: 1 },
            { q: "Which is a NoSQL database?", q_hi: "NoSQL डेटाबेस कौन सा है?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], options_hi: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], answer: 2 },
            { q: "What is the time complexity of binary search?", q_hi: "बाइनरी सर्च की समय जटिलता क्या है?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], options_hi: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: 1 },
            { q: "Which layer is IP in OSI model?", q_hi: "OSI मॉडल में IP किस परत में है?", options: ["Physical", "Data Link", "Network", "Transport"], options_hi: ["Physical", "Data Link", "Network", "Transport"], answer: 2 },
            { q: "What does API stand for?", q_hi: "API का मतलब क्या है?", options: ["Application Programming Interface", "Application Program Interface", "Applied Programming Interface", "Applied Program Interface"], options_hi: ["Application Programming Interface", "Application Program Interface", "Applied Programming Interface", "Applied Program Interface"], answer: 0 }
        ]
    },
    english: {
        easy: [
            { q: "Opposite of 'Hot'?", q_hi: "'Hot' (गर्म) का उल्टा?", options: ["Cold", "Warm", "Dry", "Wet"], options_hi: ["ठंडा", "गर्म", "सूखा", "गीला"], answer: 0 },
            { q: "Plural of 'Cat'?", q_hi: "'Cat' (बिल्ली) का बहुवचन?", options: ["Cats", "Cates", "Caties", "Cat"], options_hi: ["Cats", "Cates", "Caties", "Cat"], answer: 0 },
            { q: "Which is a vowel?", q_hi: "स्वर कौन सा है?", options: ["B", "C", "A", "D"], options_hi: ["B", "C", "A", "D"], answer: 2 },
            { q: "Past tense of 'Go'?", q_hi: "'Go' (जाना) का भूतकाल?", options: ["Goed", "Gone", "Went", "Going"], options_hi: ["Goed", "Gone", "Went", "Going"], answer: 2 },
            { q: "Synonym for 'Happy'?", q_hi: "'Happy' (खुश) का पर्यायवाची?", options: ["Sad", "Joyful", "Angry", "Cry"], options_hi: ["उदास", "आनंदित", "गुस्सा", "रोना"], answer: 1 },
            { q: "Rhymes with 'Bat'?", q_hi: "'Bat' (बल्ला) के साथ तुकबंदी?", options: ["Cat", "Dog", "Pig", "Cow"], options_hi: ["Cat", "Dog", "Pig", "Cow"], answer: 0 },
            { q: "First letter of alphabet?", q_hi: "वर्णमाला का पहला अक्षर?", options: ["Z", "M", "A", "B"], options_hi: ["Z", "M", "A", "B"], answer: 2 },
            { q: "Which word is a noun?", q_hi: "संज्ञा शब्द कौन सा है?", options: ["Run", "Blue", "Table", "Quickly"], options_hi: ["दौड़ना", "नीला", "मेज़", "जल्दी से"], answer: 2 },
            { q: "Opposite of 'Up'?", q_hi: "'Up' (ऊपर) का उल्टा?", options: ["Down", "Left", "Right", "Over"], options_hi: ["नीचे", "बाएं", "दाएं", "ऊपर"], answer: 0 },
            { q: "Correct spelling?", q_hi: "सही वर्तनी?", options: ["Aplle", "Apple", "Apel", "Appel"], options_hi: ["Aplle", "Apple", "Apel", "Appel"], answer: 1 }
        ],
        medium: [
            { q: "Synonym for 'Difficult'?", q_hi: "'Difficult' (कठिन) का पर्यायवाची?", options: ["Easy", "Hard", "Soft", "Simple"], options_hi: ["आसान", "कठिन", "मुलायम", "सरल"], answer: 1 },
            { q: "Antonym of 'Brave'?", q_hi: "'Brave' (बहादुर) का विलोम?", options: ["Cowardly", "Strong", "Bold", "Fearless"], options_hi: ["कायर", "मजबूत", "साहसी", "निडर"], answer: 0 },
            { q: "Which is an adjective?", q_hi: "विशेषण कौन सा है?", options: ["Run", "Beauty", "Beautiful", "Swim"], options_hi: ["दौड़ना", "सुंदरता", "सुंदर", "तैरना"], answer: 2 },
            { q: "Past participle of 'Write'?", q_hi: "'Write' (लिखना) का भूतकालिक कृदंत?", options: ["Wrote", "Written", "Writed", "Writing"], options_hi: ["Wrote", "Written", "Writed", "Writing"], answer: 1 },
            { q: "Plural of 'Child'?", q_hi: "'Child' (बच्चा) का बहुवचन?", options: ["Childs", "Children", "Childrens", "Childes"], options_hi: ["Childs", "Children", "Childrens", "Childes"], answer: 1 },
            { q: "Identify the adverb: 'She runs fast.'", q_hi: "क्रियाविशेषण पहचानें: 'She runs fast.'", options: ["She", "Runs", "Fast", "None"], options_hi: ["वह", "दौड़ती है", "तेज", "कोई नहीं"], answer: 2 },
            { q: "Correct spelling?", q_hi: "सही वर्तनी?", options: ["Neccessary", "Necessary", "Necesary", "Neccesary"], options_hi: ["Neccessary", "Necessary", "Necesary", "Neccesary"], answer: 1 },
            { q: "Homophone for 'See'?", q_hi: "'See' (देखना) का समध्वनि शब्द?", options: ["Sea", "Saw", "Seen", "Scene"], options_hi: ["Sea", "Saw", "Seen", "Scene"], answer: 0 },
            { q: "Comparative form of 'Good'?", q_hi: "'Good' (अच्छा) का तुलनात्मक रूप?", options: ["Gooder", "Better", "Best", "More Good"], options_hi: ["Gooder", "Better", "Best", "More Good"], answer: 1 },
            { q: "Which sentence is correct?", q_hi: "कौन सा वाक्य सही है?", options: ["He don't know.", "He doesn't know.", "He not know.", "He no know."], options_hi: ["He don't know.", "He doesn't know.", "He not know.", "He no know."], answer: 1 }
        ],
        hard: [
            { q: "Meaning of 'Ephemeral'?", q_hi: "'Ephemeral' (क्षणिक) का अर्थ?", options: ["Lasting forever", "Short-lived", "Important", "Dangerous"], options_hi: ["हमेशा रहने वाला", "अल्पकालिक", "महत्वपूर्ण", "खतरनाक"], answer: 1 },
            { q: "Antonym of 'Benevolent'?", q_hi: "'Benevolent' (परोपकारी) का विलोम?", options: ["Kind", "Malevolent", "Generous", "Helpful"], options_hi: ["दयालु", "द्वेषपूर्ण", "उदार", "मददगार"], answer: 1 },
            { q: "Which is a palindrome?", q_hi: "पैलिंड्रोम कौन सा है?", options: ["Hello", "World", "Radar", "Level"], options_hi: ["Hello", "World", "Radar", "Level"], answer: 2 },
            { q: "Past tense of 'Lie' (to recline)?", q_hi: "'Lie' (लेटना) का भूतकाल?", options: ["Lied", "Lay", "Laid", "Lain"], options_hi: ["Lied", "Lay", "Laid", "Lain"], answer: 1 },
            { q: "Correct spelling?", q_hi: "सही वर्तनी?", options: ["Accomodate", "Accommodate", "Acommodate", "Acomodate"], options_hi: ["Accomodate", "Accommodate", "Acommodate", "Acomodate"], answer: 1 },
            { q: "Meaning of 'Ubiquitous'?", q_hi: "'Ubiquitous' (सर्वव्यापी) का अर्थ?", options: ["Rare", "Everywhere", "Unique", "Hidden"], options_hi: ["दुर्लभ", "हर जगह", "अद्वितीय", "छिपा हुआ"], answer: 1 },
            { q: "Identify the conjunction: 'I want tea and coffee.'", q_hi: "संयोजक पहचानें: 'I want tea and coffee.'", options: ["Want", "Tea", "And", "Coffee"], options_hi: ["चाहता हूँ", "चाय", "और", "कॉफी"], answer: 2 },
            { q: "Plural of 'Cactus'?", q_hi: "'Cactus' (कैक्टस) का बहुवचन?", options: ["Cactuses", "Cacti", "Cactis", "Cactoes"], options_hi: ["Cactuses", "Cacti", "Cactis", "Cactoes"], answer: 1 },
            { q: "Synonym for 'Loquacious'?", q_hi: "'Loquacious' (बातूनी) का पर्यायवाची?", options: ["Silent", "Talkative", "Shy", "Angry"], options_hi: ["चुप", "बातूनी", "शर्मीला", "गुस्सा"], answer: 1 },
            { q: "Which is a metaphor?", q_hi: "रूपक कौन सा है?", options: ["As brave as a lion", "Time is money", "Like a boss", "Run fast"], options_hi: ["शेर जैसा बहादुर", "समय पैसा है", "बॉस की तरह", "तेज दौड़ो"], answer: 1 }
        ]
    },
    geography: {
        easy: [
            { q: "Largest continent?", q_hi: "सबसे बड़ा महाद्वीप?", options: ["Africa", "Asia", "Europe", "North America"], options_hi: ["अफ्रीका", "एशिया", "यूरोप", "उत्तरी अमेरिका"], answer: 1 },
            { q: "Capital of France?", q_hi: "फ्रांस की राजधानी?", options: ["Rome", "Berlin", "Paris", "Madrid"], options_hi: ["रोम", "बर्लिन", "पेरिस", "मैड्रिड"], answer: 2 },
            { q: "Which is an ocean?", q_hi: "महासागर कौन सा है?", options: ["Nile", "Amazon", "Pacific", "Sahara"], options_hi: ["नील", "अमेज़न", "प्रशांत", "सहारा"], answer: 2 },
            { q: "Country with most people?", q_hi: "सबसे अधिक लोगों वाला देश?", options: ["India", "China", "USA", "Russia"], options_hi: ["भारत", "चीन", "अमेरिका", "रूस"], answer: 0 },
            { q: "Shape of Earth?", q_hi: "पृथ्वी का आकार?", options: ["Flat", "Square", "Round (Sphere)", "Triangle"], options_hi: ["समतल", "वर्ग", "गोल (गोला)", "त्रिकोण"], answer: 2 },
            { q: "Where are the Pyramids?", q_hi: "पिरामिड कहाँ हैं?", options: ["India", "Egypt", "China", "Mexico"], options_hi: ["भारत", "मिस्र", "चीन", "मेक्सिको"], answer: 1 },
            { q: "Coldest place on Earth?", q_hi: "पृथ्वी पर सबसे ठंडी जगह?", options: ["Africa", "Antarctica", "Australia", "Asia"], options_hi: ["अफ्रीका", "अंटार्कटिका", "ऑस्ट्रेलिया", "एशिया"], answer: 1 },
            { q: "Longest river in the world?", q_hi: "विश्व की सबसे लंबी नदी?", options: ["Nile", "Amazon", "Ganga", "Mississippi"], options_hi: ["नील", "अमेज़न", "गंगा", "मिसिसिपी"], answer: 0 },
            { q: "Capital of Japan?", q_hi: "जापान की राजधानी?", options: ["Seoul", "Beijing", "Tokyo", "Bangkok"], options_hi: ["सियोल", "बीजिंग", "टोक्यो", "बैंकॉक"], answer: 2 },
            { q: "Which country is the USA?", q_hi: "USA कौन सा देश है?", options: ["United Kingdom", "United States", "United Arab Emirates", "Uganda"], options_hi: ["यूनाइटेड किंगडम", "संयुक्त राज्य अमेरिका", "संयुक्त अरब अमीरात", "युगांडा"], answer: 1 }
        ],
        medium: [
            { q: "Largest desert?", q_hi: "सबसे बड़ा मरुस्थल?", options: ["Gobi", "Sahara", "Kalahari", "Arabian"], options_hi: ["गोबी", "सहारा", "कालाहारी", "अरब"], answer: 1 },
            { q: "Capital of Australia?", q_hi: "ऑस्ट्रेलिया की राजधानी?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], options_hi: ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"], answer: 2 },
            { q: "Which river flows through London?", q_hi: "लंदन से कौन सी नदी बहती है?", options: ["Seine", "Thames", "Danube", "Rhine"], options_hi: ["सीन", "टेम्स", "डेक्यूब", "राइन"], answer: 1 },
            { q: "Highest mountain peak?", q_hi: "सबसे ऊंची पर्वत चोटी?", options: ["K2", "Everest", "Kilimanjaro", "Fuji"], options_hi: ["K2", "एवरेस्ट", "किलिमंजारो", "फ़ूजी"], answer: 1 },
            { q: "Smallest country?", q_hi: "सबसे छोटा देश?", options: ["Monaco", "Vatican City", "Malta", "Nauru"], options_hi: ["मोनाको", "वेटिकन सिटी", "माल्टा", "नाउरू"], answer: 1 },
            { q: "Which country has the most islands?", q_hi: "किस देश में सबसे अधिक द्वीप हैं?", options: ["Indonesia", "Sweden", "Philippines", "Canada"], options_hi: ["इंडोनेशिया", "स्वीडन", "फिलीपींस", "कनाडा"], answer: 1 },
            { q: "Capital of Brazil?", q_hi: "ब्राजील की राजधानी?", options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Buenos Aires"], options_hi: ["रियो डी जनेरियो", "साओ पाउलो", "ब्रासीलिया", "ब्यूनस आयर्स"], answer: 2 },
            { q: "Which continent has no deserts?", q_hi: "किस महाद्वीप में कोई मरुस्थल नहीं है?", options: ["Europe", "North America", "Asia", "Australia"], options_hi: ["यूरोप", "उत्तरी अमेरिका", "एशिया", "ऑस्ट्रेलिया"], answer: 0 },
            { q: "Longest river in India?", q_hi: "भारत की सबसे लंबी नदी?", options: ["Yamuna", "Ganga", "Godavari", "Narmada"], options_hi: ["यमुना", "गंगा", "गोदावरी", "नर्मदा"], answer: 1 },
            { q: "City of Canals?", q_hi: "नहरों का शहर?", options: ["Venice", "Paris", "Amsterdam", "London"], options_hi: ["वेनिस", "पेरिस", "एम्स्टर्डम", "लंदन"], answer: 0 }
        ],
        hard: [
            { q: "Capital of Canada?", q_hi: "कनाडा की राजधानी?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], options_hi: ["टोरंटो", "वैंकूवर", "ओटावा", "मॉन्ट्रियल"], answer: 2 },
            { q: "Which country has the most lakes?", q_hi: "किस देश में सबसे अधिक झीलें हैं?", options: ["USA", "Canada", "Russia", "Brazil"], options_hi: ["अमेरिका", "कनाडा", "रूस", "ब्राजील"], answer: 1 },
            { q: "Deepest point in the ocean?", q_hi: "महासागर में सबसे गहरा बिंदु?", options: ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"], options_hi: ["मारियाना ट्रेंच", "प्यूर्टो रिको ट्रेंच", "जावा ट्रेंच", "टोंगा ट्रेंच"], answer: 0 },
            { q: "Capital of Mongolia?", q_hi: "मंगोलिया की राजधानी?", options: ["Astana", "Ulaanbaatar", "Tashkent", "Bishkek"], options_hi: ["अस्ताना", "उलानबटार", "ताशकेंट", "बिश्केक"], answer: 1 },
            { q: "Which African country was never colonized?", q_hi: "कौन सा अफ्रीकी देश कभी उपनिवेश नहीं बना?", options: ["Nigeria", "Ethiopia", "Kenya", "Egypt"], options_hi: ["नाइजीरिया", "इथियोपिया", "केन्या", "मिस्र"], answer: 1 },
            { q: "Largest island in the world?", q_hi: "विश्व का सबसे बड़ा द्वीप?", options: ["Greenland", "New Guinea", "Borneo", "Madagascar"], options_hi: ["ग्रीनलैंड", "न्यू गिनी", "बोर्नियो", "मेडागास्कर"], answer: 0 },
            { q: "Which country has the most time zones?", q_hi: "किस देश में सबसे अधिक समय क्षेत्र हैं?", options: ["Russia", "USA", "France", "China"], options_hi: ["रूस", "अमेरिका", "फ्रांस", "चीन"], answer: 2 },
            { q: "Capital of Turkey?", q_hi: "तुर्की की राजधानी?", options: ["Istanbul", "Ankara", "Izmir", "Antalya"], options_hi: ["इस्तांबुल", "अंकारा", "इजमिर", "अंताल्या"], answer: 1 },
            { q: "Which river crosses the equator twice?", q_hi: "कौन सी नदी भूमध्य रेखा को दो बार पार करती है?", options: ["Nile", "Amazon", "Congo", "Mekong"], options_hi: ["नील", "अमेज़न", "कांगो", "मेकांग"], answer: 2 },
            { q: "Smallest continent by land area?", q_hi: "क्षेत्रफल की दृष्टि से सबसे छोटा महाद्वीप?", options: ["Europe", "Australia", "Antarctica", "South America"], options_hi: ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"], answer: 1 }
        ]
    },
    biology: {
        easy: [
            { q: "What pumps blood?", q_hi: "रक्त कौन पंप करता है?", options: ["Brain", "Heart", "Lungs", "Stomach"], options_hi: ["मस्तिष्क", "हृदय", "फेफड़े", "पेट"], answer: 1 },
            { q: "What do we use to breathe?", q_hi: "हम सांस लेने के लिए किसका उपयोग करते हैं?", options: ["Lungs", "Heart", "Liver", "Kidney"], options_hi: ["फेफड़े", "हृदय", "यकृत", "गुर्दे"], answer: 0 },
            { q: "Largest animal?", q_hi: "सबसे बड़ा जानवर?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], options_hi: ["हाथी", "ब्लू व्हेल", "जिराफ", "शार्क"], answer: 1 },
            { q: "What do plants need to grow?", q_hi: "पौधों को बढ़ने के लिए क्या चाहिए?", options: ["Candy", "Sunlight", "Milk", "Juice"], options_hi: ["कैंडी", "धूप", "दूध", "रस"], answer: 1 },
            { q: "How many legs does a dog have?", q_hi: "कुत्ते के कितने पैर होते हैं?", options: ["2", "4", "6", "8"], options_hi: ["2", "4", "6", "8"], answer: 1 },
            { q: "Which is a fruit?", q_hi: "फल कौन सा है?", options: ["Carrot", "Potato", "Apple", "Onion"], options_hi: ["गाजर", "आलू", "सेब", "प्याज"], answer: 2 },
            { q: "What covers our body?", q_hi: "हमारे शरीर को क्या ढकता है?", options: ["Bones", "Skin", "Muscles", "Blood"], options_hi: ["हड्डियाँ", "त्वचा", "मांसपेशियाँ", "रक्त"], answer: 1 },
            { q: "Green part of a plant?", q_hi: "पौधे का हरा भाग?", options: ["Root", "Stem", "Leaf", "Flower"], options_hi: ["जड़", "तना", "पत्ता", "फूल"], answer: 2 },
            { q: "What do cows eat?", q_hi: "गायें क्या खाती हैं?", options: ["Meat", "Grass", "Fish", "Eggs"], options_hi: ["मांस", "घास", "मछली", "अंडे"], answer: 1 },
            { q: "Baby cat is called?", q_hi: "बिल्ली के बच्चे को क्या कहते हैं?", options: ["Puppy", "Kitten", "Cub", "Calf"], options_hi: ["पिल्ला", "बिल्ली का बच्चा", "शावक", "बछड़ा"], answer: 1 }
        ],
        medium: [
            { q: "Powerhouse of the cell?", q_hi: "कोशिका का पावरहाउस?", options: ["Nucleus", "Mitochondria", "Ribosome", "DNA"], options_hi: ["नाभिक", "माइटोकॉन्ड्रिया", "राइबोसोम", "डीएनए"], answer: 1 },
            { q: "Universal donor blood type?", q_hi: "सार्वभौमिक दाता रक्त समूह?", options: ["A", "B", "AB", "O"], options_hi: ["A", "B", "AB", "O"], answer: 3 },
            { q: "Largest organ in human body?", q_hi: "मानव शरीर का सबसे बड़ा अंग?", options: ["Liver", "Skin", "Brain", "Heart"], options_hi: ["यकृत", "त्वचा", "मस्तिष्क", "हृदय"], answer: 1 },
            { q: "Process plants use to make food?", q_hi: "पौधे भोजन बनाने के लिए किस प्रक्रिया का उपयोग करते हैं?", options: ["Respiration", "Digestion", "Photosynthesis", "Excretion"], options_hi: ["श्वसन", "पाचन", "प्रकाश संश्लेषण", "उत्सर्जन"], answer: 2 },
            { q: "How many bones in adult human?", q_hi: "वयस्क मानव में कितनी हड्डियां?", options: ["206", "208", "210", "212"], options_hi: ["206", "208", "210", "212"], answer: 0 },
            { q: "Which vitamin from sunlight?", q_hi: "धूप से कौन सा विटामिन?", options: ["A", "B", "C", "D"], options_hi: ["A", "B", "C", "D"], answer: 3 },
            { q: "Study of plants?", q_hi: "पौधों का अध्ययन?", options: ["Zoology", "Botany", "Geology", "Chemistry"], options_hi: ["प्राणीशास्त्र", "वनस्पति विज्ञान", "भूविज्ञान", "रसायन विज्ञान"], answer: 1 },
            { q: "What carries oxygen in blood?", q_hi: "रक्त में ऑक्सीजन कौन ले जाता है?", options: ["White Blood Cells", "Red Blood Cells", "Platelets", "Plasma"], options_hi: ["श्वेत रक्त कोशिकाएं", "लाल रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"], answer: 1 },
            { q: "Hardest substance in human body?", q_hi: "मानव शरीर में सबसे कठोर पदार्थ?", options: ["Bone", "Enamel", "Nail", "Skull"], options_hi: ["हड्डी", "तामचीनी", "नाखून", "खोपड़ी"], answer: 1 },
            { q: "Which animal lays eggs?", q_hi: "कौन सा जानवर अंडे देता है?", options: ["Dog", "Cat", "Duck", "Cow"], options_hi: ["कुत्ता", "बिल्ली", "बतख", "गाय"], answer: 2 }
        ],
        hard: [
            { q: "Basic unit of life?", q_hi: "जीवन की मूल इकाई?", options: ["Atom", "Molecule", "Cell", "Tissue"], options_hi: ["परमाणु", "अणु", "कोशिका", "ऊतक"], answer: 2 },
            { q: "Which part of brain controls balance?", q_hi: "मस्तिष्क का कौन सा भाग संतुलन को नियंत्रित करता है?", options: ["Cerebrum", "Cerebellum", "Medulla", "Pons"], options_hi: ["सेरेब्रम", "सेरेबेलम", "मेडुला", "पन्स"], answer: 1 },
            { q: "DNA stands for?", q_hi: "DNA का मतलब?", options: ["Deoxyribonucleic Acid", "Deoxyribogenetic Acid", "Dinucleic Acid", "Double Nucleic Acid"], options_hi: ["Deoxyribonucleic Acid", "Deoxyribogenetic Acid", "Dinucleic Acid", "Double Nucleic Acid"], answer: 0 },
            { q: "Which gland is the master gland?", q_hi: "कौन सी ग्रंथि मास्टर ग्रंथि है?", options: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"], options_hi: ["थायराइड", "पिट्यूटरी", "अधिवृक्क", "अग्न्याशय"], answer: 1 },
            { q: "Number of chromosomes in humans?", q_hi: "मनुष्यों में गुणसूत्रों की संख्या?", options: ["23", "46", "48", "50"], options_hi: ["23", "46", "48", "50"], answer: 1 },
            { q: "Which blood cells fight infection?", q_hi: "कौन सी रक्त कोशिकाएं संक्रमण से लड़ती हैं?", options: ["RBC", "WBC", "Platelets", "Plasma"], options_hi: ["RBC", "WBC", "Platelets", "Plasma"], answer: 1 },
            { q: "Smallest bone in human body?", q_hi: "मानव शरीर की सबसे छोटी हड्डी?", options: ["Femur", "Stapes", "Tibia", "Radius"], options_hi: ["फीमर", "स्टेपेज़", "टिबिया", "रेडियस"], answer: 1 },
            { q: "Which organ produces insulin?", q_hi: "कौन सा अंग इंसुलिन का उत्पादन करता है?", options: ["Liver", "Pancreas", "Kidney", "Stomach"], options_hi: ["यकृत", "अग्न्याशय", "गुर्दे", "पेट"], answer: 1 },
            { q: "Protein factory of the cell?", q_hi: "कोशिका की प्रोटीन फैक्ट्री?", options: ["Lysosome", "Ribosome", "Vacuole", "Golgi"], options_hi: ["लाइसोसोम", "राइबोसोम", "वैक्युओल", "गोल्गी"], answer: 1 },
            { q: "Largest artery in the body?", q_hi: "शरीर की सबसे बड़ी धमनी?", options: ["Aorta", "Vena Cava", "Carotid", "Femoral"], options_hi: ["महाधमनी", "वेना कावा", "कैरोटिड", "फीमर"], answer: 0 }
        ]
    },
    physics: {
        easy: [
            { q: "What falls from the sky?", q_hi: "आसमान से क्या गिरता है?", options: ["Rocks", "Rain", "Cars", "Trees"], options_hi: ["चट्टानें", "बारिश", "कारें", "पेड़"], answer: 1 },
            { q: "What gives us heat?", q_hi: "हमें गर्मी कौन देता है?", options: ["Ice", "Sun", "Moon", "Water"], options_hi: ["बर्फ", "सूरज", "चांद", "पानी"], answer: 1 },
            { q: "Opposite of Up?", q_hi: "ऊपर का उल्टा?", options: ["Down", "Left", "Right", "In"], options_hi: ["नीचे", "बाएं", "दाएं", "अंदर"], answer: 0 },
            { q: "What do magnets attract?", q_hi: "चुंबक किसे आकर्षित करते हैं?", options: ["Wood", "Plastic", "Iron", "Glass"], options_hi: ["लकड़ी", "प्लास्टिक", "लोहा", "कांच"], answer: 2 },
            { q: "Fastest thing in the universe?", q_hi: "ब्रह्मांड में सबसे तेज चीज?", options: ["Sound", "Light", "Rocket", "Cheetah"], options_hi: ["ध्वनि", "प्रकाश", "रॉकेट", "चीता"], answer: 1 },
            { q: "What makes things fall?", q_hi: "चीजों को क्या गिराता है?", options: ["Magic", "Gravity", "Wind", "Push"], options_hi: ["जादू", "गुरुत्वाकर्षण", "हवा", "धक्का"], answer: 1 },
            { q: "Water freezes into?", q_hi: "पानी जमकर क्या बनता है?", options: ["Gas", "Ice", "Steam", "Liquid"], options_hi: ["गैस", "बर्फ", "भाप", "तरल"], answer: 1 },
            { q: "Unit of time?", q_hi: "समय की इकाई?", options: ["Meter", "Second", "Gram", "Liter"], options_hi: ["मीटर", "सेकंड", "ग्राम", "लीटर"], answer: 1 },
            { q: "What do you use to measure length?", q_hi: "लंबाई मापने के लिए आप किसका उपयोग करते हैं?", options: ["Scale (Ruler)", "Clock", "Thermometer", "Cup"], options_hi: ["स्केल (रूलर)", "घड़ी", "थर्मामीटर", "कप"], answer: 0 },
            { q: "Does sound travel in space?", q_hi: "क्या ध्वनि अंतरिक्ष में यात्रा करती है?", options: ["Yes", "No", "Sometimes", "Maybe"], options_hi: ["हाँ", "नहीं", "कभी-कभी", "शायद"], answer: 1 }
        ],
        medium: [
            { q: "Unit of Force?", q_hi: "बल की इकाई?", options: ["Joule", "Newton", "Watt", "Volt"], options_hi: ["जूल", "न्यूटन", "वाट", "वोल्ट"], answer: 1 },
            { q: "Speed of light?", q_hi: "प्रकाश की गति?", options: ["3x10^8 m/s", "300 m/s", "3000 km/h", "Infinite"], options_hi: ["3x10^8 m/s", "300 m/s", "3000 km/h", "अनंत"], answer: 0 },
            { q: "Who discovered gravity?", q_hi: "गुरुत्वाकर्षण की खोज किसने की?", options: ["Einstein", "Newton", "Galileo", "Tesla"], options_hi: ["आइंस्टीन", "न्यूटन", "गैलिलियो", "टेस्ला"], answer: 1 },
            { q: "E = mc^2 is by?", q_hi: "E = mc^2 किसके द्वारा है?", options: ["Newton", "Einstein", "Bohr", "Curie"], options_hi: ["न्यूटन", "आइंस्टीन", "बोर", "क्यूरी"], answer: 1 },
            { q: "Unit of Power?", q_hi: "शक्ति की इकाई?", options: ["Joule", "Watt", "Newton", "Ampere"], options_hi: ["जूल", "वाट", "न्यूटन", "एम्पीयर"], answer: 1 },
            { q: "Sound needs a medium?", q_hi: "ध्वनि को माध्यम की आवश्यकता होती है?", options: ["True", "False", "Sometimes", "Unknown"], options_hi: ["सत्य", "असत्य", "कभी-कभी", "अज्ञात"], answer: 0 },
            { q: "What measures temperature?", q_hi: "तापमान क्या मापता है?", options: ["Barometer", "Thermometer", "Speedometer", "Voltmeter"], options_hi: ["बैरोमीटर", "थर्मामीटर", "स्पीडोमीटर", "वोल्टमीटर"], answer: 1 },
            { q: "Electrons have what charge?", q_hi: "इलेक्ट्रॉनों पर क्या आवेश होता है?", options: ["Positive", "Negative", "Neutral", "None"], options_hi: ["धनात्मक", "ऋणात्मक", "तटस्थ", "कोई नहीं"], answer: 1 },
            { q: "Unit of Resistance?", q_hi: "प्रतिरोध की इकाई?", options: ["Volt", "Ampere", "Ohm", "Watt"], options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वाट"], answer: 2 },
            { q: "Which color absorbs most heat?", q_hi: "कौन सा रंग सबसे अधिक गर्मी अवशोषित करता है?", options: ["White", "Black", "Red", "Blue"], options_hi: ["सफेद", "काला", "लाल", "नीला"], answer: 1 }
        ],
        hard: [
            { q: "First Law of Motion?", q_hi: "गति का पहला नियम?", options: ["Inertia", "F=ma", "Action-Reaction", "Gravity"], options_hi: ["जड़त्व", "F=ma", "क्रिया-प्रतिक्रिया", "गुरुत्वाकर्षण"], answer: 0 },
            { q: "Value of 'g' on Earth?", q_hi: "पृथ्वी पर 'g' का मान?", options: ["9.8 m/s^2", "10 m/s^2", "8.9 m/s^2", "9.2 m/s^2"], options_hi: ["9.8 m/s^2", "10 m/s^2", "8.9 m/s^2", "9.2 m/s^2"], answer: 0 },
            { q: "Unit of Frequency?", q_hi: "आवृत्ति की इकाई?", options: ["Hertz", "Second", "Meter", "Joule"], options_hi: ["हर्ट्ज", "सेकंड", "मीटर", "जूल"], answer: 0 },
            { q: "What is a vector quantity?", q_hi: "सदिश राशि क्या है?", options: ["Speed", "Mass", "Velocity", "Time"], options_hi: ["गति", "द्रव्यमान", "वेग", "समय"], answer: 2 },
            { q: "Boiling point of water in Kelvin?", q_hi: "केल्विन में पानी का क्वथनांक?", options: ["100 K", "273 K", "373 K", "0 K"], options_hi: ["100 K", "273 K", "373 K", "0 K"], answer: 2 },
            { q: "Who invented the light bulb?", q_hi: "लाइट बल्ब का आविष्कार किसने किया?", options: ["Tesla", "Edison", "Bell", "Marconi"], options_hi: ["टेस्ला", "एडिसन", "बेल", "मार्कोनी"], answer: 1 },
            { q: "What is the speed of sound in air?", q_hi: "हवा में ध्वनि की गति क्या है?", options: ["343 m/s", "3x10^8 m/s", "1000 m/s", "0 m/s"], options_hi: ["343 m/s", "3x10^8 m/s", "1000 m/s", "0 m/s"], answer: 0 },
            { q: "Which particle has no charge?", q_hi: "किस कण पर कोई आवेश नहीं होता है?", options: ["Proton", "Electron", "Neutron", "Ion"], options_hi: ["प्रोटॉन", "इलेक्ट्रॉन", "न्यूट्रॉन", "आयन"], answer: 2 },
            { q: "Law of Conservation of Energy?", q_hi: "ऊर्जा संरक्षण का नियम?", options: ["Energy created", "Energy destroyed", "Energy constant", "Energy lost"], options_hi: ["ऊर्जा निर्मित", "ऊर्जा नष्ट", "ऊर्जा स्थिर", "ऊर्जा खो गई"], answer: 2 },
            { q: "What is the unit of Charge?", q_hi: "आवेश की इकाई क्या है?", options: ["Ampere", "Coulomb", "Volt", "Ohm"], options_hi: ["एम्पीयर", "कूलम्ब", "वोल्ट", "ओम"], answer: 1 }
        ]
    }
};
