const quizData = {
    gk: [
        {
            q: "Which planet is known as the Red Planet?",
            q_hi: "किस ग्रह को लाल ग्रह के रूप में जाना जाता है?",
            options: ["Venus", "Jupiter", "Mars", "Saturn"],
            options_hi: ["शुक्र", "बृहस्पति", "मंगल", "शनि"],
            answer: 2
        },
        {
            q: "Who is considered the Father of the Nation in India?",
            q_hi: "भारत में राष्ट्रपिता किसे माना जाता है?",
            options: ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Mahatma Gandhi", "Dr. B.R. Ambedkar"],
            options_hi: ["जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "महात्मा गांधी", "डॉ. बी.आर. अंबेडकर"],
            answer: 2
        },
        {
            q: "What is the chemical formula for water?",
            q_hi: "पानी का रासायनिक सूत्र क्या है?",
            options: ["O2", "CO2", "H2O", "NaCl"],
            options_hi: ["O2", "CO2", "H2O", "NaCl"],
            answer: 2
        },
        {
            q: "Which is the largest mammal on Earth?",
            q_hi: "पृथ्वी पर सबसे बड़ा स्तनधारी कौन सा है?",
            options: ["African Elephant", "Blue Whale", "Hippopotamus", "Giraffe"],
            options_hi: ["अफ्रीकी हाथी", "ब्लू व्हेल", "दरियाई घोड़ा", "जिराफ"],
            answer: 1
        },
        {
            q: "In which year did India gain independence?",
            q_hi: "भारत को किस वर्ष स्वतंत्रता मिली?",
            options: ["1950", "1947", "1949", "1945"],
            options_hi: ["1950", "1947", "1949", "1945"],
            answer: 1
        },
        {
            q: "Which is the largest planet in our solar system?",
            q_hi: "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
            options: ["Earth", "Saturn", "Jupiter", "Mars"],
            options_hi: ["पृथ्वी", "शनि", "बृहस्पति", "मंगल"],
            answer: 2
        },
        {
            q: "What is the capital of France?",
            q_hi: "फ्रांस की राजधानी क्या है?",
            options: ["Rome", "London", "Berlin", "Paris"],
            options_hi: ["रोम", "लंदन", "बर्लिन", "पेरिस"],
            answer: 3
        },
        {
            q: "Who painted the Mona Lisa?",
            q_hi: "मोना लिसा को किसने चित्रित किया?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            options_hi: ["विंसेंट वैन गॉग", "पाब्लो पिकासो", "लियोनार्डो दा विंची", "माइकल एंजेलो"],
            answer: 2
        },
        {
            q: "Which country is the largest by land area?",
            q_hi: "क्षेत्रफल की दृष्टि से सबसे बड़ा देश कौन सा है?",
            options: ["China", "Canada", "United States", "Russia"],
            options_hi: ["चीन", "कनाडा", "संयुक्त राज्य अमेरिका", "रूस"],
            answer: 3
        },
        {
            q: "Which is the longest river in the world?",
            q_hi: "विश्व की सबसे लंबी नदी कौन सी है?",
            options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
            options_hi: ["अमेज़न नदी", "नील नदी", "मिसिसिपी नदी", "यांग्त्ज़ी नदी"],
            answer: 1
        }
    ],
    math: [
        {
            q: "Algebra: What is the value of x if 2x + 3 = 11?",
            q_hi: "बीजगणित: यदि 2x + 3 = 11 है, तो x का मान क्या है?",
            options: ["2", "4", "7", "11"],
            options_hi: ["2", "4", "7", "11"],
            answer: 1
        },
        {
            q: "Geometry: A decagon has how many sides?",
            q_hi: "ज्यामिति: एक दशभुज की कितनी भुजाएँ होती हैं?",
            options: ["8", "9", "10", "12"],
            options_hi: ["8", "9", "10", "12"],
            answer: 2
        },
        {
            q: "Number Properties: The sum of a rational number and an irrational number is always...",
            q_hi: "संख्या गुण: एक परिमेय संख्या और एक अपरिमेय संख्या का योग हमेशा होता है...",
            options: ["Rational", "Irrational", "0", "12"],
            options_hi: ["परिमेय", "अपरिमेय", "0", "12"],
            answer: 1
        },
        {
            q: "Algebra: If a+b:b+c:c+a=6:7:8 and a+b+c=14, what is the value of c?",
            q_hi: "बीजगणित: यदि a+b:b+c:c+a=6:7:8 और a+b+c=14 है, तो c का मान क्या है?",
            options: ["4", "5", "6", "14"],
            options_hi: ["4", "5", "6", "14"],
            answer: 2
        },
        {
            q: "Algebra: If the discriminant of a quadratic equation is zero, the roots are?",
            q_hi: "बीजगणित: यदि द्विघात समीकरण का विविक्तकर (discriminant) शून्य है, तो मूल कैसे होंगे?",
            options: ["Real and unequal", "Complex", "Real and equal", "None of these"],
            options_hi: ["वास्तविक और असमान", "सम्मिश्र", "वास्तविक और समान", "इनमें से कोई नहीं"],
            answer: 2
        },
        {
            q: "The decimal expansion of 17/8 will terminate after how many places of decimals?",
            q_hi: "17/8 का दशमलव प्रसार कितने दशमलव स्थानों के बाद समाप्त होगा?",
            options: ["1", "2", "3", "4"],
            options_hi: ["1", "2", "3", "4"],
            answer: 2
        },
        {
            q: "What is the common difference of the arithmetic progression 3, 7, 11, 15, 19...?",
            q_hi: "अंकगणितीय श्रेणी 3, 7, 11, 15, 19... का सार्व अंतर (common difference) क्या है?",
            options: ["3", "4", "5", "6"],
            options_hi: ["3", "4", "5", "6"],
            answer: 1
        },
        {
            q: "What is the Pythagorean Theorem?",
            q_hi: "पाइथागोरस प्रमेय क्या है?",
            options: ["a² + b² = c", "a + b = c²", "c² = a² - b²", "c² = a² + b²"],
            options_hi: ["a² + b² = c", "a + b = c²", "c² = a² - b²", "c² = a² + b²"],
            answer: 3
        },
        {
            q: "What is the solution to the system of equations 2x - y = 1 and x + y = 5?",
            q_hi: "समीकरणों के निकाय 2x - y = 1 और x + y = 5 का हल क्या है?",
            options: ["x=2, y=3", "x=3, y=2", "x=1, y=4", "x=4, y=1"],
            options_hi: ["x=2, y=3", "x=3, y=2", "x=1, y=4", "x=4, y=1"],
            answer: 0
        },
        {
            q: "What is the value of sin(60°)?",
            q_hi: "sin(60°) का मान क्या है?",
            options: ["1/2", "√3/2", "1/√2", "√2/2"],
            options_hi: ["1/2", "√3/2", "1/√2", "√2/2"],
            answer: 1
        }
    ],
    science: [
        {
            q: "What is the chemical symbol for gold?",
            q_hi: "सोने का रासायनिक प्रतीक क्या है?",
            options: ["Ag", "Go", "Au", "Gd"],
            options_hi: ["Ag", "Go", "Au", "Gd"],
            answer: 2
        },
        {
            q: "What gas do plants absorb from the air for photosynthesis?",
            q_hi: "प्रकाश संश्लेषण के लिए पौधे हवा से कौन सी गैस अवशोषित करते हैं?",
            options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
            options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
            answer: 2
        },
        {
            q: "What is the SI unit of temperature?",
            q_hi: "तापमान की SI इकाई क्या है?",
            options: ["Celsius", "Fahrenheit", "Kelvin", "Joule"],
            options_hi: ["सेल्सियस", "फारेनहाइट", "केल्विन", "जूल"],
            answer: 2
        },
        {
            q: "Which part of the human body is the largest organ?",
            q_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
            options: ["Liver", "Brain", "Lungs", "Skin"],
            options_hi: ["यकृत", "मस्तिष्क", "फेफड़े", "त्वचा"],
            answer: 3
        },
        {
            q: "Which type of energy is stored in food?",
            q_hi: "भोजन में किस प्रकार की ऊर्जा संग्रहित होती है?",
            options: ["Kinetic energy", "Chemical energy", "Thermal energy", "Nuclear energy"],
            options_hi: ["गतिज ऊर्जा", "रासायनिक ऊर्जा", "तापीय ऊर्जा", "परमाणु ऊर्जा"],
            answer: 1
        },
        {
            q: "What is the main organ responsible for pumping blood throughout the body?",
            q_hi: "शरीर भर में रक्त पंप करने के लिए मुख्य अंग कौन सा है?",
            options: ["Lungs", "Brain", "Kidneys", "Heart"],
            options_hi: ["फेफड़े", "मस्तिष्क", "गुर्दे", "हृदय"],
            answer: 3
        },
        {
            q: "Which of the following is a non-renewable source of energy?",
            q_hi: "निम्नलिखित में से कौन ऊर्जा का गैर-नवीकरणीय स्रोत है?",
            options: ["Solar energy", "Wind energy", "Coal", "Biomass"],
            options_hi: ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "बायोमास"],
            answer: 2
        },
        {
            q: "Which of the following is NOT a characteristic of an acid?",
            q_hi: "निम्नलिखित में से कौन अम्ल की विशेषता नहीं है?",
            options: ["Tastes sour", "Feels slippery", "Turns blue litmus paper red", "Can be corrosive"],
            options_hi: ["खट्टा स्वाद", "फिसलन महसूस होना", "नीले लिटमस को लाल करना", "संक्षारक हो सकता है"],
            answer: 1
        },
        {
            q: "Which layer of the atmosphere is closest to the Earth's surface?",
            q_hi: "वायुमंडल की कौन सी परत पृथ्वी की सतह के सबसे करीब है?",
            options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"],
            options_hi: ["समताप मंडल", "मध्यमंडल", "क्षोभमंडल", "तापमंडल"],
            answer: 2
        },
        {
            q: "What is the SI unit of force?",
            q_hi: "बल की SI इकाई क्या है?",
            options: ["Pascal", "Joule", "Watt", "Newton"],
            options_hi: ["पास्कल", "जूल", "वाट", "न्यूटन"],
            answer: 3
        }
    ],
    cs: [
        {
            q: "What does the acronym CPU stand for?",
            q_hi: "CPU का पूर्ण रूप क्या है?",
            options: ["Computer Processing Unit", "Central Processing Unit", "Central Program Unit", "Computer Program Unit"],
            options_hi: ["कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
            answer: 1
        },
        {
            q: "Which of the following is an input device?",
            q_hi: "निम्नलिखित में से कौन सा इनपुट डिवाइस है?",
            options: ["Monitor", "Printer", "Speaker", "Mouse"],
            options_hi: ["मॉनिटर", "प्रिंटर", "स्पीकर", "माउस"],
            answer: 3
        },
        {
            q: "What is the smallest unit of data in computing?",
            q_hi: "कंप्यूटिंग में डेटा की सबसे छोटी इकाई क्या है?",
            options: ["Byte", "Kilobyte", "Bit", "Megabyte"],
            options_hi: ["बाइट", "किलोबाइट", "बिट", "मेगाबाइट"],
            answer: 2
        },
        {
            q: "Which of these is an example of system software?",
            q_hi: "इनमें से कौन सिस्टम सॉफ्टवेयर का उदाहरण है?",
            options: ["Microsoft Excel", "Google Chrome", "Windows 10", "Adobe Reader"],
            options_hi: ["माइक्रोसॉफ्ट एक्सेल", "गूगल क्रोम", "विंडोज 10", "एडोब रीडर"],
            answer: 2
        },
        {
            q: "What does RAM stand for?",
            q_hi: "RAM का पूर्ण रूप क्या है?",
            options: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Readable Access Memory"],
            options_hi: ["रीड एक्सेस मेमोरी", "रैंडम एक्सेस मेमोरी", "रैपिड एक्सेस मेमोरी", "रीडेबल एक्सेस मेमोरी"],
            answer: 1
        },
        {
            q: "What is the smallest unit of data in a computer?",
            q_hi: "कंप्यूटर में डेटा की सबसे छोटी इकाई क्या है?",
            options: ["Byte", "Bit", "Kilobyte", "Gigabyte"],
            options_hi: ["बाइट", "बिट", "किलोबाइट", "गीगाबाइट"],
            answer: 1
        },
        {
            q: "Which of the following is an example of system software?",
            q_hi: "निम्नलिखित में से कौन सिस्टम सॉफ्टवेयर का उदाहरण है?",
            options: ["Microsoft Word", "Google Chrome", "A virus scanner", "Adobe Photoshop"],
            options_hi: ["माइक्रोसॉफ्ट वर्ड", "गूगल क्रोम", "वायरस स्कैनर", "एडोब फोटोशॉप"],
            answer: 2
        },
        {
            q: "Which device is primarily used for printing hard copies of documents?",
            q_hi: "दस्तावेजों की हार्ड कॉपी प्रिंट करने के लिए मुख्य रूप से किस डिवाइस का उपयोग किया जाता है?",
            options: ["Scanner", "Monitor", "Printer", "Speaker"],
            options_hi: ["स्कैनर", "मॉनिटर", "प्रिंटर", "स्पीकर"],
            answer: 2
        },
        {
            q: "Which of the following is a computer programming language?",
            q_hi: "निम्नलिखित में से कौन सी कंप्यूटर प्रोग्रामिंग भाषा है?",
            options: ["HTML", "JPEG", "RAM", "None of the above"],
            options_hi: ["HTML", "JPEG", "RAM", "इनमें से कोई नहीं"],
            answer: 0
        },
        {
            q: "Which component of the computer is often referred to as its brain?",
            q_hi: "कंप्यूटर के किस घटक को अक्सर उसका मस्तिष्क कहा जाता है?",
            options: ["Hard Disk Drive", "Motherboard", "CPU", "Graphics Card"],
            options_hi: ["हार्ड डिस्क ड्राइव", "मदरबोर्ड", "CPU", "ग्राफिक्स कार्ड"],
            answer: 2
        }
    ],
    english: [
        {
            q: "Which is the synonym of 'Happy'?",
            q_hi: "'Happy' (खुश) का पर्यायवाची क्या है?",
            options: ["Sad", "Joyful", "Angry", "Tired"],
            options_hi: ["उदास", "आनंदित", "गुस्सा", "थका हुआ"],
            answer: 1
        },
        {
            q: "What is the antonym of 'Cold'?",
            q_hi: "'Cold' (ठंडा) का विलोम क्या है?",
            options: ["Hot", "Freezing", "Icy", "Cool"],
            options_hi: ["गर्म", "जमाना", "बर्फीला", "ठंडा"],
            answer: 0
        },
        {
            q: "Identify the noun: 'The cat sleeps.'",
            q_hi: "संज्ञा पहचानें: 'The cat sleeps.'",
            options: ["Sleeps", "The", "Cat", "None"],
            options_hi: ["सोता है", "वह", "बिल्ली", "कोई नहीं"],
            answer: 2
        },
        {
            q: "Which word is a verb?",
            q_hi: "कौन सा शब्द क्रिया है?",
            options: ["Run", "Blue", "Table", "Slowly"],
            options_hi: ["दौड़ना", "नीला", "मेज़", "धीरे"],
            answer: 0
        },
        {
            q: "Complete the sentence: She ___ to the market.",
            q_hi: "वाक्य पूरा करें: She ___ to the market.",
            options: ["Go", "Gone", "Went", "Going"],
            options_hi: ["जाना", "गया", "गई", "जा रहा"],
            answer: 2
        },
        {
            q: "Which word is an adjective?",
            q_hi: "कौन सा शब्द विशेषण है?",
            options: ["Run", "Beautiful", "Quickly", "Dog"],
            options_hi: ["दौड़ना", "सुंदर", "जल्दी से", "कुत्ता"],
            answer: 1
        },
        {
            q: "What is the plural of 'Child'?",
            q_hi: "'Child' (बच्चा) का बहुवचन क्या है?",
            options: ["Childs", "Children", "Childrens", "Childes"],
            options_hi: ["Childs", "Children", "Childrens", "Childes"],
            answer: 1
        },
        {
            q: "Identify the pronoun: 'He is playing.'",
            q_hi: "सर्वनाम पहचानें: 'He is playing.'",
            options: ["He", "Is", "Playing", "None"],
            options_hi: ["वह", "है", "खेल रहा", "कोई नहीं"],
            answer: 0
        },
        {
            q: "Which is the correct spelling?",
            q_hi: "सही वर्तनी कौन सी है?",
            options: ["Recieve", "Receive", "Receve", "Riceive"],
            options_hi: ["Recieve", "Receive", "Receve", "Riceive"],
            answer: 1
        },
        {
            q: "What is the past tense of 'Eat'?",
            q_hi: "'Eat' (खाना) का भूतकाल क्या है?",
            options: ["Eated", "Ate", "Eaten", "Eating"],
            options_hi: ["Eated", "Ate", "Eaten", "Eating"],
            answer: 1
        }
    ],
    geography: [
        {
            q: "Which is the largest continent?",
            q_hi: "सबसे बड़ा महाद्वीप कौन सा है?",
            options: ["Africa", "Asia", "Europe", "Antarctica"],
            options_hi: ["अफ्रीका", "एशिया", "यूरोप", "अंटार्कटिका"],
            answer: 1
        },
        {
            q: "Which country has the most population?",
            q_hi: "किस देश की जनसंख्या सबसे अधिक है?",
            options: ["India", "China", "USA", "Russia"],
            options_hi: ["भारत", "चीन", "अमेरिका", "रूस"],
            answer: 0
        },
        {
            q: "What is the capital of Japan?",
            q_hi: "जापान की राजधानी क्या है?",
            options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            options_hi: ["सियोल", "बीजिंग", "टोक्यो", "बैंकॉक"],
            answer: 2
        },
        {
            q: "Which river is the longest in India?",
            q_hi: "भारत की सबसे लंबी नदी कौन सी है?",
            options: ["Yamuna", "Ganga", "Godavari", "Narmada"],
            options_hi: ["यमुना", "गंगा", "गोदावरी", "नर्मदा"],
            answer: 1
        },
        {
            q: "Which desert is the largest in the world?",
            q_hi: "विश्व का सबसे बड़ा मरुस्थल कौन सा है?",
            options: ["Sahara", "Gobi", "Kalahari", "Thar"],
            options_hi: ["सहारा", "गोबी", "कालाहारी", "थार"],
            answer: 0
        },
        {
            q: "Which is the smallest continent?",
            q_hi: "सबसे छोटा महाद्वीप कौन सा है?",
            options: ["Europe", "Australia", "Antarctica", "South America"],
            options_hi: ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"],
            answer: 1
        },
        {
            q: "Which country is known as the Land of the Rising Sun?",
            q_hi: "किस देश को उगते सूरज की भूमि के रूप में जाना जाता है?",
            options: ["China", "Japan", "Thailand", "Vietnam"],
            options_hi: ["चीन", "जापान", "थाईलैंड", "वियतनाम"],
            answer: 1
        },
        {
            q: "What is the capital of Australia?",
            q_hi: "ऑस्ट्रेलिया की राजधानी क्या है?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            options_hi: ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"],
            answer: 2
        },
        {
            q: "Which ocean is the largest?",
            q_hi: "सबसे बड़ा महासागर कौन सा है?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            options_hi: ["अटलांटिक", "हिंद", "आर्कटिक", "प्रशांत"],
            answer: 3
        },
        {
            q: "Mount Everest is located in which country?",
            q_hi: "माउंट एवरेस्ट किस देश में स्थित है?",
            options: ["India", "Nepal", "China", "Bhutan"],
            options_hi: ["भारत", "नेपाल", "चीन", "भूटान"],
            answer: 1
        }
    ],
    biology: [
        {
            q: "What is the basic unit of life?",
            q_hi: "जीवन की मूल इकाई क्या है?",
            options: ["Tissue", "Organ", "Cell", "Atom"],
            options_hi: ["ऊतक", "अंग", "कोशिका", "परमाणु"],
            answer: 2
        },
        {
            q: "Which gas do humans exhale?",
            q_hi: "मनुष्य कौन सी गैस छोड़ते हैं?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
            answer: 1
        },
        {
            q: "What is the powerhouse of the cell?",
            q_hi: "कोशिका का पावरहाउस क्या है?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Cytoplasm"],
            options_hi: ["केंद्रक", " माइटोकॉन्ड्रिया", "राइबोसोम", "साइटोप्लाज्म"],
            answer: 1
        },
        {
            q: "How many bones are in the adult human body?",
            q_hi: "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
            options: ["206", "208", "210", "200"],
            options_hi: ["206", "208", "210", "200"],
            answer: 0
        },
        {
            q: "Which part of the plant conducts photosynthesis?",
            q_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
            options: ["Root", "Stem", "Leaf", "Flower"],
            options_hi: ["जड़", "तना", "पत्ता", "फूल"],
            answer: 2
        },
        {
            q: "What is the largest organ in the human body?",
            q_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
            options: ["Heart", "Liver", "Skin", "Lungs"],
            options_hi: ["हृदय", "यकृत", "त्वचा", "फेफड़े"],
            answer: 2
        },
        {
            q: "Which blood group is known as the universal donor?",
            q_hi: "किस रक्त समूह को सार्वभौमिक दाता के रूप में जाना जाता है?",
            options: ["A", "B", "AB", "O"],
            options_hi: ["A", "B", "AB", "O"],
            answer: 3
        },
        {
            q: "What is the study of plants called?",
            q_hi: "पौधों के अध्ययन को क्या कहा जाता है?",
            options: ["Zoology", "Botany", "Geology", "Ecology"],
            options_hi: ["प्राणीशास्त्र", "वनस्पति विज्ञान", "भूविज्ञान", "पारिस्थितिकी"],
            answer: 1
        },
        {
            q: "Which vitamin is produced by the body when exposed to sunlight?",
            q_hi: "सूर्य के प्रकाश के संपर्क में आने पर शरीर द्वारा कौन सा विटामिन निर्मित होता है?",
            options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin B"],
            options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन B"],
            answer: 2
        },
        {
            q: "What is the main function of red blood cells?",
            q_hi: "लाल रक्त कोशिकाओं का मुख्य कार्य क्या है?",
            options: ["Fight infection", "Transport oxygen", "Clot blood", "Digest food"],
            options_hi: ["संक्रमण से लड़ना", "ऑक्सीजन परिवहन", "रक्त का थक्का जमाना", "भोजन पचाना"],
            answer: 1
        }
    ],
    physics: [
        {
            q: "What is the unit of resistance?",
            q_hi: "प्रतिरोध की इकाई क्या है?",
            options: ["Ampere", "Volt", "Ohm", "Watt"],
            options_hi: ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
            answer: 2
        },
        {
            q: "Who discovered gravity?",
            q_hi: "गुरुत्वाकर्षण की खोज किसने की?",
            options: ["Einstein", "Newton", "Galileo", "Tesla"],
            options_hi: ["आइंस्टीन", "न्यूटन", "गैलिलियो", "टेस्ला"],
            answer: 1
        },
        {
            q: "What is the speed of light?",
            q_hi: "प्रकाश की गति क्या है?",
            options: ["3x10^8 m/s", "3x10^6 m/s", "3x10^5 m/s", "300 km/h"],
            options_hi: ["3x10^8 m/s", "3x10^6 m/s", "3x10^5 m/s", "300 km/h"],
            answer: 0
        },
        {
            q: "Which particle has a negative charge?",
            q_hi: "किस कण पर ऋणात्मक आवेश होता है?",
            options: ["Proton", "Neutron", "Electron", "Photon"],
            options_hi: ["प्रोटॉन", "न्यूट्रॉन", "इलेक्ट्रॉन", "फोटॉन"],
            answer: 2
        },
        {
            q: "What is the formula for Force?",
            q_hi: "बल का सूत्र क्या है?",
            options: ["F=ma", "E=mc^2", "V=IR", "P=VI"],
            options_hi: ["F=ma", "E=mc^2", "V=IR", "P=VI"],
            answer: 0
        },
        {
            q: "What is the unit of power?",
            q_hi: "शक्ति की इकाई क्या है?",
            options: ["Joule", "Watt", "Newton", "Pascal"],
            options_hi: ["जूल", "वाट", "न्यूटन", "पास्कल"],
            answer: 1
        },
        {
            q: "Which law states that for every action, there is an equal and opposite reaction?",
            q_hi: "कौन सा नियम कहता है कि प्रत्येक क्रिया के लिए समान और विपरीत प्रतिक्रिया होती है?",
            options: ["Newton's 1st Law", "Newton's 2nd Law", "Newton's 3rd Law", "Ohm's Law"],
            options_hi: ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "ओम का नियम"],
            answer: 2
        },
        {
            q: "What is the device used to measure electric current?",
            q_hi: "विद्युत धारा को मापने के लिए किस उपकरण का उपयोग किया जाता है?",
            options: ["Voltmeter", "Ammeter", "Thermometer", "Barometer"],
            options_hi: ["वोल्टमीटर", "एमीटर", "थर्मामीटर", "बैरोमीटर"],
            answer: 1
        },
        {
            q: "Sound travels fastest in which medium?",
            q_hi: "ध्वनि किस माध्यम में सबसे तेज यात्रा करती है?",
            options: ["Air", "Water", "Vacuum", "Solid"],
            options_hi: ["हवा", "पानी", "निर्वात", "ठोस"],
            answer: 3
        },
        {
            q: "What is the energy possessed by a body due to its motion?",
            q_hi: "किसी पिंड में उसकी गति के कारण कौन सी ऊर्जा होती है?",
            options: ["Potential Energy", "Kinetic Energy", "Thermal Energy", "Chemical Energy"],
            options_hi: ["स्थितिज ऊर्जा", "गतिज ऊर्जा", "तापीय ऊर्जा", "रासायनिक ऊर्जा"],
            answer: 1
        }
    ]
};

let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let currentQuestions = [];

// DOM Elements
const menuView = document.getElementById('menu-view');
const quizView = document.getElementById('quiz-view');
const resultsView = document.getElementById('results-view');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackMessage = document.getElementById('feedback-message');
const progressFill = document.getElementById('progress-fill');
const scoreDisplay = document.getElementById('score-display');
const currentScoreSpan = document.getElementById('current-score');
const finalScoreValue = document.getElementById('final-score-value');
const percentageDisplay = document.getElementById('percentage-display');
const resultMessage = document.getElementById('result-message');
const restartBtn = document.getElementById('restart-btn');
const backToMenuBtn = document.getElementById('back-to-menu-btn');

// Event Listeners
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        startQuiz(card.dataset.category);
    });
});

restartBtn.addEventListener('click', showMenu);
backToMenuBtn.addEventListener('click', showMenu);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;

    // Shuffle questions for the selected category
    // Create a shallow copy to avoid modifying the original array permanently if needed, 
    // though here we just want a randomized session.
    currentQuestions = shuffleArray([...quizData[currentCategory]]);

    menuView.classList.remove('active');
    resultsView.classList.remove('active');
    quizView.classList.add('active');
    scoreDisplay.style.display = 'block';
    updateScore();

    loadQuestion();
}

function loadQuestion() {
    const questionData = currentQuestions[currentQuestionIndex];

    // Display Question in English and Hindi
    questionText.innerHTML = `
        ${questionData.q}
        <span class="question-hindi">${questionData.q_hi}</span>
    `;

    optionsContainer.innerHTML = '';
    feedbackMessage.textContent = '';
    feedbackMessage.className = 'feedback-message';

    // Update progress bar
    const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;

    questionData.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';

        // Display Option in English and Hindi
        const hindiOption = questionData.options_hi[index];
        btn.innerHTML = `
            ${option}
            <span class="hindi">${hindiOption}</span>
        `;

        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}


// Audio Context
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(isCorrect) {
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (isCorrect) {
        // Correct sound: High pitched, pleasant
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        oscillator.frequency.exponentialRampToValueAtTime(1046.5, audioCtx.currentTime + 0.1); // C6
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    } else {
        // Wrong sound: Low pitched, buzzing
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        oscillator.frequency.linearRampToValueAtTime(100, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

function checkAnswer(selectedIndex, selectedBtn) {
    // Disable all buttons
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    const correctIndex = currentQuestions[currentQuestionIndex].answer;

    if (selectedIndex === correctIndex) {
        playSound(true);
        selectedBtn.classList.add('correct');
        feedbackMessage.textContent = "Correct Answer! / सही उत्तर!";
        feedbackMessage.style.color = 'var(--success-color)';
        score++;
        updateScore();
    } else {
        playSound(false);
        selectedBtn.classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
        const correctOption = currentQuestions[currentQuestionIndex].options[correctIndex];
        const correctOptionHi = currentQuestions[currentQuestionIndex].options_hi[correctIndex];
        feedbackMessage.textContent = `Wrong! Correct: ${correctOption} (${correctOptionHi})`;
        feedbackMessage.style.color = 'var(--error-color)';
    }

    // Wait and go to next question
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }, 2500); // Increased delay slightly to read feedback
}

function updateScore() {
    currentScoreSpan.textContent = score;
}

function showResults() {
    quizView.classList.remove('active');
    resultsView.classList.add('active');
    scoreDisplay.style.display = 'none';

    const total = currentQuestions.length;
    finalScoreValue.textContent = score;
    document.getElementById('total-questions').textContent = total;

    const percentage = (score / total) * 100;
    percentageDisplay.textContent = `${percentage.toFixed(0)}%`;

    if (percentage >= 80) {
        resultMessage.textContent = "Outstanding! You're a genius! 🌟 / बहुत बढ़िया! आप एक प्रतिभाशाली हैं!";
    } else if (percentage >= 60) {
        resultMessage.textContent = "Great job! Keep it up! 👍 / बहुत अच्छा! इसे जारी रखो!";
    } else {
        resultMessage.textContent = "Good effort! Try again to improve. 💪 / अच्छा प्रयास! सुधारने के लिए फिर से प्रयास करें।";
    }
}

function showMenu() {
    resultsView.classList.remove('active');
    quizView.classList.remove('active');
    menuView.classList.add('active');
    currentCategory = null;
}
