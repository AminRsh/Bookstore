
const bookDatabase =
    [
        {
            "Rating": "1",
            "id": 1,
            "Image_URL": "http://ecx.images-amazon.com/images/I/51l6XIoa3rL.jpg",
            "Author": "Gus Lee",
            "Image": "1588345297.jpg",
            "Category": "Biographies & Memoirs",
            "Price": "$15.99",
            "Title": "With Schwarzkopf: Life Lessons of The Bear"
        },
        {
            "Rating": "4",
            "id": 2,
            "Image_URL": "http://ecx.images-amazon.com/images/I/51UJnL3Tx6L.jpg",
            "Author": "Natalie M. Rosinsky",
            "Image": "1404803335.jpg",
            "Category": "Children's Books",
            "Price": "$12.99",
            "Title": "Magnets: Pulling Together, Pushing Apart (Amazing Science)"
        },
        {
            "Rating": "10",
            "id": 3,
            "Image_URL": "http://ecx.images-amazon.com/images/I/51MGUKhkyhL.jpg",
            "Author": "",
            "Image": "1446276082.jpg",
            "Category": "Engineering & Transportation",
            "Price": "$18.99",
            "Title": "Energy Security (SAGE Library of International Security)"
        },
        {
            "Rating": "9",
            "id": 4,
            "Image_URL": "http://ecx.images-amazon.com/images/I/51qKvjsi3ML.jpg",
            "Author": "Beth Wiseman",
            "Image": "1491522666.jpg",
            "Category": "Christian Books & Bibles",
            "Price": "$14.99",
            "Title": "An Amish Gathering: Life in Lancaster County"
        },
        {
            "Rating": "26",
            "id": 5,
            "Image_URL": "http://ecx.images-amazon.com/images/I/51qoUENb1CL.jpg",
            "Author": "Dave Bingham",
            "Image": "0970096410.jpg",
            "Category": "Sports & Outdoors",
            "Price": "$21.99",
            "Title": "City of Rocks Idaho: A Climber's Guide (Regional Rock Climbing Series)"
        },
        {
            "Rating": "11",
            "id": 6,
            "Image_URL": "http://ecx.images-amazon.com/images/I/41aDW5pzZBL.jpg",
            "Author": "Choliz Montanes",
            "Image": "8436808053.jpg",
            "Category": "Health, Fitness & Dieting",
            "Price": "$17.99",
            "Title": "Como vencer el insomnio. Tecnicas, reglas y consejos practicos para dormir mejor (BIBLIOTECA PRACTICA) (Spanish Edition)"
        },
        {
            "Rating": "16",
            "id": 7,
            "Image_URL": "http://ecx.images-amazon.com/images/I/51Lpg7xmrBL.jpg",
            "Author": "John O'Brien",
            "Image": "1848291388.jpg",
            "Category": "Medical Books",
            "Price": "$19.99",
            "Title": "John Martin Littlejohn: An Enigma of Osteopathy"
        },
        {
            "Rating": "23",
            "id": 8,
            "Image_URL": "http://ecx.images-amazon.com/images/I/51WccSzFUrL.jpg",
            "Author": "Martin Silberberg",
            "Image": "0073402656.jpg",
            "Category": "Science & Math",
            "Price": "$22.99",
            "Title": "Chemistry: The Molecular Nature of Matter and Change"
        },
        {
            "Rating": "16",
            "id": 9,
            "Image_URL": "http://ecx.images-amazon.com/images/I/51rJir5EpnL.jpg",
            "Author": "Susan Newton MS  RN  AOCN  AOCNS",
            "Image": "0323045979.jpg",
            "Category": "Medical Books",
            "Price": "$24.99",
            "Title": "Mosby's Oncology Nursing Advisor: A Comprehensive Guide to Clinical Practice, 1e"
        },
        {
            "Rating": "29",
            "id": 10,
            "Image_URL": "http://ecx.images-amazon.com/images/I/61KoC743OzL.jpg",
            "Author": "Carsten Krieger",
            "Image": "1847176968.jpg",
            "Category": "Travel",
            "Price": "$28.99",
            "Title": "Ireland's Wild Atlantic Way"
        },
        {
            "Rating": "29",
            "id": 11,
            "Image_URL": "http://ecx.images-amazon.com/images/I/515LqScy63L.jpg",
            "Author": "Lonely Planet",
            "Image": "1760342769.jpg",
            "Category": "Travel",
            "Price": "$29.99",
            "Title": "Lonely Planet Israel & the Palestinian Territories (Travel Guide)"
        },
        {
            "Rating": "2",
            "id": 12,
            "Image_URL": "http://ecx.images-amazon.com/images/I/51T6dO1XxfL.jpg",
            "Author": "Jeff Augen",
            "Image": "0137029039.jpg",
            "Category": "Business & Money",
            "Price": "$16.99",
            "Title": "Day Trading Options: Profiting from Price Distortions in Very Brief Time Frames"
        },
        {
            "Rating": "7",
            "id": 13,
            "Image_URL": "http://ecx.images-amazon.com/images/I/71SDZJBGFWL.gif",
            "Author": "Rob Wanless",
            "Image": "0806965339.jpg",
            "Category": "Cookbooks, Food & Wine",
            "Price": "$11.99",
            "Title": "Breads, Cakes, Rolls & More from Your Bread Machine"
        },
        {
            "Rating": "19",
            "id": 14,
            "Image_URL": "http://ecx.images-amazon.com/images/I/41giXSUi1TL.jpg",
            "Author": "",
            "Image": "1405167971.jpg",
            "Category": "Politics & Social Sciences",
            "Price": "$18.99",
            "Title": "Running and Philosophy: A Marathon for the Mind"
        },
        {
            "Rating": "8",
            "id": 15,
            "Image_URL": "http://ecx.images-amazon.com/images/I/6124u5dAX0L.jpg",
            "Author": "Lora S. Irish",
            "Image": "1565238567.jpg",
            "Category": "Crafts, Hobbies & Home",
            "Price": "$14.99",
            "Title": "Wood Spirits and Green Men: A Design Sourcebook for Woodcarvers and Other Artists"
        },
        {
            "Rating": "13",
            "id": 16,
            "Image_URL": "http://ecx.images-amazon.com/images/I/61JkH6IoBVL.jpg",
            "Author": "Janice VanCleave",
            "Image": "0471310115.jpg",
            "Category": "Science & Math",
            "Price": "$13.99",
            "Title": "Janice VanCleave's Guide to the Best Science Fair Projects"
        },
        {
            "id": 17,
            "Image": "044310073X.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/41kSLEoswsL.jpg",
            "Title": "Oral and Maxillofacial Surgery: An Objective-Based Textbook, 2e",
            "Author": "",
            "Rating": "16",
            "Category": "Medical Books"
        },
        {
            "id": 18,
            "Image": "1438005687.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/510l0qhi01L.jpg",
            "Title": "Barron's GRE, 21st Edition",
            "Author": "Sharon Weiner Green M.A.",
            "Rating": "28",
            "Category": "Test Preparation"
        },
        {
            "id": 19,
            "Image": "0060750715.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51p5aUY%2BOKL.jpg",
            "Title": "George Balanchine: The Ballet Maker (Eminent Lives)",
            "Author": "Robert Gottlieb",
            "Rating": "1",
            "Category": "Biographies & Memoirs"
        },
        {
            "id": 20,
            "Image": "1580237959.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51pum0eWe4L.jpg",
            "Title": "A Partner in Holiness: Deepening Mindfulness, Practicing Compassion and Enriching Our Lives Through the Wisdom of R. Levi Yitzhak of Berdichev's, Vol. 2  (Institute for Jewish Spirituality)",
            "Author": "Rabbi Jonathan P. Slater DMin",
            "Rating": "21",
            "Category": "Religion & Spirituality"
        },
        {
            "id": 21,
            "Image": "0135137829.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51PuTPPCxaL.jpg",
            "Title": "Construction Scheduling: Principles and Practices (2nd Edition)",
            "Author": "Jay S. Newitt",
            "Rating": "0",
            "Category": "Arts & Photography"
        },
        {
            "id": 22,
            "Image": "0312556411.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51uNnIlIwrL.jpg",
            "Title": "Literature and Its Writers: A Compact Introduction to Fiction, Poetry, and Drama",
            "Author": "Ann Charters",
            "Rating": "15",
            "Category": "Literature & Fiction"
        },
        {
            "id": 23,
            "Image": "0393339157.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51VIlqRy-VL.jpg",
            "Title": "Straight on Till Morning: The Life of Beryl Markham",
            "Author": "Mary S. Lovell",
            "Rating": "10",
            "Category": "Engineering & Transportation"
        },
        {
            "id": 24,
            "Image": "0521456924.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/41n7iZq-0jL.jpg",
            "Title": "Diagrammatica: The Path to Feynman Diagrams (Cambridge Lecture Notes in Physics)",
            "Author": "Martinus Veltman",
            "Rating": "23",
            "Category": "Science & Math"
        },
        {
            "id": 25,
            "Image": "0898699223.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/41xLYt-v6nL.jpg",
            "Title": "Book of Common Prayer 1979: Large Print edition",
            "Author": "",
            "Rating": "9",
            "Category": "Christian Books & Bibles"
        },
        {
            "id": 26,
            "Image": "0545700272.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51KyLXczCqL.jpg",
            "Title": "A Handful of Stars",
            "Author": "Cynthia Lord",
            "Rating": "4",
            "Category": "Children's Books"
        },
        {
            "id": 27,
            "Image": "1616494441.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51Jku59B9CL.jpg",
            "Title": "Almost Anorexic: Is My (or My Loved One's) Relationship with Food a Problem? (The Almost Effect)",
            "Author": "Ph.D. Jennifer J Thomas",
            "Rating": "25",
            "Category": "Self-Help"
        },
        {
            "id": 28,
            "Image": "1627227318.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/41LkijoCvuL.jpg",
            "Title": "Pre-ANDA Litigation: Strategies and Tactics for Developing a Drug Product and Patent Portfolio",
            "Author": "",
            "Rating": "14",
            "Category": "Law"
        },
        {
            "id": 29,
            "Image": "1849056536.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51Tjv23guEL.jpg",
            "Title": "Creative, Successful, Dyslexic: 23 High Achievers Share Their Stories",
            "Author": "",
            "Rating": "19",
            "Category": "Politics & Social Sciences"
        },
        {
            "id": 30,
            "Image": "0313335427.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51C16779N8L.jpg",
            "Title": "Organ Transplantation (Health and Medical Issues Today)",
            "Author": "David Petechuk",
            "Rating": "11",
            "Category": "Health, Fitness & Dieting"
        },
        {
            "id": 31,
            "Image": "0316185434.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51JFeqcU96L.jpg",
            "Title": "The Age of Acquiescence: The Life and Death of American Resistance to Organized Wealth and Power",
            "Author": "Steve Fraser",
            "Rating": "2",
            "Category": "Business & Money"
        },
        {
            "id": 32,
            "Image": "0972467637.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51kOYa-LHML.jpg",
            "Title": "The Multiples Manual: Preparing and Caring for Twins or Triplets",
            "Author": "Lynn Lorenz",
            "Rating": "18",
            "Category": "Parenting & Relationships"
        },
        {
            "id": 33,
            "Image": "0962904201.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51bWdcsbX0L.jpg",
            "Title": "Oregon High: A Climbing Guide to Nine Cascade Volcanoes",
            "Author": "Jeff Thomas",
            "Rating": "26",
            "Category": "Sports & Outdoors"
        },
        {
            "id": 34,
            "Image": "0596527322.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/5159f7hqJjL.jpg",
            "Title": "HTML & XHTML: The Definitive Guide (6th Edition)",
            "Author": "Chuck Musciano",
            "Rating": "6",
            "Category": "Computers & Technology"
        },
        {
            "id": 35,
            "Image": "1514196239.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/5178fq2DV3L.jpg",
            "Title": "Anti Inflammatory Cookbook - 50 Slow Cooker Recipes With Anti - Inflammatory Ingredients: Great For Gout! (Slow Cooker Cookbooks)",
            "Author": "Kate Marsh",
            "Rating": "7",
            "Category": "Cookbooks, Food & Wine"
        },
        {
            "id": 36,
            "Image": "079382883X.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51zi2q5JfbL.jpg",
            "Title": "Leopard Geckos (Complete Herp Care)",
            "Author": "Gerald Merker",
            "Rating": "8",
            "Category": "Crafts, Hobbies & Home"
        },
        {
            "id": 37,
            "Image": "1907732837.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51AdbQZwDuL.jpg",
            "Title": "Botswana & Its National Heritage",
            "Author": "Sandy Grant",
            "Rating": "29",
            "Category": "Travel"
        },
        {
            "id": 38,
            "Image": "0871137607.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51EdPM0rHkL.jpg",
            "Title": "Eat the Rich: A Treatise on Economics",
            "Author": "P.  J. O'Rourke",
            "Rating": "13",
            "Category": "Humor & Entertainment"
        },
        {
            "id": 39,
            "Image": "0553508784.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51V7y865BxL.jpg",
            "Title": "Paw Patrol Phonics Box Set (PAW Patrol) (Step into Reading)",
            "Author": "Jennifer Liberts",
            "Rating": "20",
            "Category": "Reference"
        },
        {
            "id": 40,
            "Image": "1780548273.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/61Yudxp-yeL.jpg",
            "Title": "The Official Doctor Who2016 Square Calendar",
            "Author": "",
            "Rating": "3",
            "Category": "Calendars"
        },
        {
            "id": 41,
            "Image": "1888216468.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51t0aUEe0tL.jpg",
            "Title": "Battlefields of the Civil War Map",
            "Author": "National Geographic Society",
            "Rating": "12",
            "Category": "History"
        },
        {
            "id": 42,
            "Image": "1932234969.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51IybjClfrL.jpg",
            "Title": "5 Centimeters per Second",
            "Author": "",
            "Rating": "5",
            "Category": "Comics & Graphic Novels"
        },
        {
            "id": 43,
            "Image": "1583419543.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51AiMilDWpL.jpg",
            "Title": "The Story of the New Orleans Hornets (The NBA: a History of Hoops)",
            "Author": "Tyler Omoth",
            "Rating": "27",
            "Category": "Teen & Young Adult"
        },
        {
            "id": 44,
            "Image": "0871272407.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51t2uBEMp3L.jpg",
            "Title": "Love in Provence: Romantic Adventures in the South of France",
            "Author": "Yvone Lenard",
            "Rating": "22",
            "Category": "Romance"
        },
        {
            "id": 45,
            "Image": "0471041386.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/41aVeVvefKL.jpg",
            "Title": "Polymeric Multicomponent Materials: An Introduction",
            "Author": "L. H. Sperling",
            "Rating": "23",
            "Category": "Science & Math"
        },
        {
            "id": 46,
            "Image": "0147514940.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51TI3FwVa%2BL.jpg",
            "Title": "Fantasy League",
            "Author": "Mike Lupica",
            "Rating": "4",
            "Category": "Children's Books"
        },
        {
            "id": 47,
            "Image": "0976326817.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/31VJtBTmfvL.jpg",
            "Title": "Be the Ultimate Assistant: A celebrity assistant's secrets to working with any high-powered employer",
            "Author": "Bonnie Low-Kramen",
            "Rating": "2",
            "Category": "Business & Money"
        },
        {
            "id": 48,
            "Image": "0830830375.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51pnw9xXOtL.jpg",
            "Title": "Parables: The Greatest Stories Ever Told (Lifeguide Bible Studies)",
            "Author": "John White",
            "Rating": "9",
            "Category": "Christian Books & Bibles"
        },
        {
            "id": 49,
            "Image": "4041673410.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51pqgSj8YoL.jpg",
            "Title": "Bali Travels Maldives [Japanese Edition]",
            "Author": "Giniro Natsuo",
            "Rating": "29",
            "Category": "Travel"
        },
        {
            "id": 50,
            "Image": "111801684X.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/518VXqYR27L.jpg",
            "Title": "Microsoft Windows Security Essentials",
            "Author": "Darril Gibson",
            "Rating": "6",
            "Category": "Computers & Technology"
        },
        {
            "id": 51,
            "Image": "1932564462.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51TLjyIjU%2BL.jpg",
            "Title": "Shadowrun: Third Edition (FPR25000)",
            "Author": "FanPro",
            "Rating": "24",
            "Category": "Science Fiction & Fantasy"
        },
        {
            "id": 52,
            "Image": "0982565062.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51uJz4Jd-hL.jpg",
            "Title": "The Crime Wave: Collected Nonfiction (The Ace Performer Collection series)",
            "Author": "Dashiell Hammett",
            "Rating": "17",
            "Category": "Mystery, Thriller & Suspense"
        },
        {
            "id": 53,
            "Image": "0711232997.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/61c4EZtdtNL.jpg",
            "Title": "The English Country House Garden",
            "Author": "Marcus Harpur",
            "Rating": "8",
            "Category": "Crafts, Hobbies & Home"
        },
        {
            "id": 54,
            "Image": "0153003804.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/51JXp76wG1L.jpg",
            "Title": "Diary of Anne Frank",
            "Author": "Frances Goodrich",
            "Rating": "12",
            "Category": "History"
        },
        {
            "id": 55,
            "Image": "1622020758.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/41uPslzVRgL.jpg",
            "Title": "ICD-10-CM 2015: The Complete Official Codebook",
            "Author": "",
            "Rating": "16",
            "Category": "Medical Books"
        },
        {
            "id": 56,
            "Image": "1557044686.jpg",
            "Image_URL": "http://ecx.images-amazon.com/images/I/410oYwwjssL.jpg",
            "Title": "The Words of Gandhi (Newmarket Words Of Series)",
            "Author": "Mahatma Gandhi",
            "Rating": "21",
            "Category": "Religion & Spirituality"
        }
    ]

export default bookDatabase