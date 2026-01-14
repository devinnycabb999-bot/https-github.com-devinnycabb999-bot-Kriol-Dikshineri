
export interface VisualDictionaryEntry {
    kriol: string;
    english: string;
    meaning: string;
    englishForPrompt: string;
    kriolExample: string;
    englishExample: string;
}

// A curated list of visual nouns with culturally-specific prompts for Belize.
// This list has been updated and expanded for accuracy and comprehensiveness.
const visualDictionary: VisualDictionaryEntry[] = [
    {
        kriol: 'aal',
        english: 'all',
        meaning: 'Used to refer to the whole quantity or extent of a particular group or thing.',
        englishForPrompt: 'a wide-angle photograph of a diverse group of Belizean people of all ages smiling together, representing unity',
        kriolExample: 'Aal a wi da wan big fambli.',
        englishExample: 'All of us are one big family.'
    },
    {
        kriol: 'aalwayz',
        english: 'always',
        meaning: 'On all occasions; at all times; continuously.',
        englishForPrompt: 'an infinity symbol elegantly drawn in the sand on a Belizean beach, with the sun setting in the background',
        kriolExample: 'Shee aalwayz wear a smile.',
        englishExample: 'She always wears a smile.'
    },
    {
        kriol: 'aakid',
        english: 'orchid',
        meaning: 'A flowering plant with complex, often vibrant blooms, with the Black Orchid being the national flower of Belize.',
        englishForPrompt: 'the Belizean black orchid, the national flower of Belize, growing on a tree branch',
        kriolExample: 'Di blak aakid da di nashanal flowaz a Bileez.',
        englishExample: 'The black orchid is the national flower of Belize.'
    },
    {
        kriol: 'aan',
        english: 'on',
        meaning: 'Physically in contact with and supported by (a surface).',
        englishForPrompt: 'a ripe red mango resting on top of a rustic wooden table',
        kriolExample: 'Put di buk pahn di taybl.',
        englishExample: 'Put the book on the table.'
    },
    {
        kriol: 'aans',
        english: 'ant',
        meaning: 'A small insect typically living in a complex social colony.',
        englishForPrompt: 'a macro photograph of a single black ant carrying a crumb of food across a green leaf',
        kriolExample: 'Di aans dehn di march eena wahn lain.',
        englishExample: 'The ants are marching in a line.'
    },
    {
        kriol: 'aansbyaa',
        english: 'anteater',
        meaning: 'A mammal that feeds on ants and termites, characterized by a long snout and a sticky tongue.',
        englishForPrompt: 'a vested anteater (Tamandua mexicana) climbing a tree in the Belizean jungle',
        kriolExample: 'Wi si di aansbyaa lang owt ih tong ahn lik op lat a aans.',
        englishExample: 'We saw the anteater stick out his tongue and lick up a lot of ants.'
    },
    {
        kriol: 'aanti',
        english: 'aunt',
        meaning: 'The sister of one\'s father or mother or the wife of one\'s uncle.',
        englishForPrompt: 'a friendly, middle-aged Belizean woman giving her young niece or nephew a warm hug',
        kriolExample: 'Mai aanti com vizit wi evri Krismus.',
        englishExample: 'My aunt comes to visit us every Christmas.'
    },
    {
        kriol: 'aata',
        english: 'otter',
        meaning: 'A semiaquatic fish-eating mammal of the weasel family, with an elongated body, dense fur, and webbed feet.',
        englishForPrompt: 'a neotropical river otter playing playfully in the clear water of a Belizean river',
        kriolExample: 'Di aata di swim ahn kech fish.',
        englishExample: 'The otter is swimming and catching fish.'
    },
    {
        kriol: 'afta',
        english: 'after',
        meaning: 'In the time following (an event or another period of time).',
        englishForPrompt: 'footprints in the sand with the tide coming in to wash them away, symbolizing a moment after someone has passed',
        kriolExample: 'Afta di rayn, di son com owt.',
        englishExample: 'After the rain, the sun came out.'
    },
    {
        kriol: 'afrij',
        english: 'refrigerator',
        meaning: 'An appliance for keeping food and drinks cold, commonly called a fridge.',
        englishForPrompt: 'a simple, white refrigerator in a Belizean kitchen, with colorful magnets on the door',
        kriolExample: 'Put di milk bak eena di afrij.',
        englishExample: 'Put the milk back in the refrigerator.'
    },
    {
        kriol: ' agen',
        english: 'again',
        meaning: 'Another time; once more.',
        englishForPrompt: 'a rewind symbol, like one on a music player, drawn in the sand on a beach',
        kriolExample: 'Mek wi sing da sang agen.',
        englishExample: 'Let\'s sing that song again.'
    },
    {
        kriol: 'agoti',
        english: 'agouti',
        meaning: 'A small, brown rodent with a pig-like appearance, often found foraging on the forest floor in Belize.',
        englishForPrompt: 'a Belizean agouti, a small brown rodent, foraging for fallen fruit on the leafy floor of a lush rainforest',
        kriolExample: 'Di agoti dehn skeri, dehn ron faas wen dehn si yu.',
        englishExample: 'The agoutis are skittish, they run fast when they see you.'
    },
    {
        kriol: 'aiel',
        english: 'oil',
        meaning: 'A viscous liquid derived from petroleum, especially for use as a fuel or lubricant. Also refers to cooking oil.',
        englishForPrompt: 'clear cooking oil being poured from a bottle into a hot cast-iron frying pan',
        kriolExample: 'Yu need lee bit a aiel fi fry di fish.',
        englishExample: 'You need a little bit of oil to fry the fish.'
    },
    {
        kriol: 'aiy',
        english: 'eye',
        meaning: 'The globular organ of sight in the head.',
        englishForPrompt: 'a close-up photograph of a person\'s beautiful brown eye, reflecting a tropical Belizean scene',
        kriolExample: 'Shee ga priti bloo aiy.',
        englishExample: 'She has pretty blue eyes.'
    },
    {
        kriol: 'ais',
        english: 'ice',
        meaning: 'Frozen water, a brittle transparent crystalline solid.',
        englishForPrompt: 'a handful of clear ice cubes in a glass, with condensation on the outside',
        kriolExample: 'Di wata need sohn ais, ih get hat.',
        englishExample: 'The water needs some ice, it got warm.'
    },
    {
        kriol: 'ais-bak',
        english: 'icebox / cooler',
        meaning: 'An insulated container used to keep food and drinks cool, also known as a cooler.',
        englishForPrompt: 'a red and white Coleman icebox cooler sitting on a sandy beach, filled with bottles of Belikin beer',
        kriolExample: 'Pack di ais-bak wid drinks fi di beech.',
        englishExample: 'Pack the cooler with drinks for the beach.'
    },
    {
        kriol: 'akaadyan',
        english: 'accordion',
        meaning: 'A portable, box-shaped musical instrument played by stretching and squeezing, prominent in Brukdown music.',
        englishForPrompt: 'a red accordion, the lead instrument in traditional Belizean Brukdown music',
        kriolExample: 'Misa Peetaz seh ih ponish wen ih noh ga ih akaadyan wid ahn?',
        englishExample: "Mr. Peters says he suffers when he doesn’t have his accordion with him."
    },
    {
        kriol: 'aks',
        english: 'axe',
        meaning: 'A tool used for chopping wood, consisting of a heavy-bladed head mounted on a handle.',
        englishForPrompt: 'a well-worn felling axe used for chopping wood in the Belizean bush',
        kriolExample: 'Bwai, tek di aks ahn kot sohn ud.',
        englishExample: 'Boy, take the axe and chop some wood.'
    },
    {
        kriol: 'aksbil',
        english: 'hawksbill turtle',
        meaning: 'A critically endangered sea turtle with a beautifully patterned shell, found along the Belize Barrier Reef.',
        englishForPrompt: 'a hawksbill sea turtle swimming gracefully over the colorful Belize Barrier Reef',
        kriolExample: 'Dehn mek priti banglz owt a aksbil shel.',
        englishExample: 'They make pretty bracelets out of the hawksbill shell.'
    },
    {
        kriol: 'ali-gayta',
        english: 'alligator',
        meaning: 'A large reptile with a broad snout, found in freshwater habitats in Belize, such as rivers and lagoons. Often refers to the American crocodile as well.',
        englishForPrompt: 'an American crocodile, known locally as an alligator, lurking in the dark waters of a Belizean river, with only its eyes and snout visible above the surface',
        kriolExample: 'Di ali-gayta dehn lov fi laydon pahn di riva bank.',
        englishExample: 'The alligators love to lie on the river bank.'
    },
    {
        kriol: 'ambrala',
        english: 'umbrella',
        meaning: 'A device consisting of a circular canopy of cloth on a folding metal frame supported by a central rod, used as protection against rain or sun.',
        englishForPrompt: 'a large, colorful beach umbrella providing shade on a sunny day in Belize',
        kriolExample: 'Tek di ambrala, ih look laik ih gweyn rayn.',
        englishExample: 'Take the umbrella, it looks like it is going to rain.'
    },
    {
        kriol: 'anansi',
        english: 'Anansi the spider',
        meaning: 'A trickster figure from West African and Caribbean folklore, often depicted as a spider, who triumphs over larger foes through cunning.',
        englishForPrompt: 'a clever-looking spider weaving an intricate web, representing the folklore hero Anansi',
        kriolExample: 'Di stori a Anansi di taiga da wahn klasic.',
        englishExample: 'The story of Anansi and the tiger is a classic.'
    },
    {
        kriol: 'arans',
        english: 'orange',
        meaning: 'A round juicy citrus fruit with a tough bright reddish-yellow rind.',
        englishForPrompt: 'a pile of bright, ripe oranges, with one peeled to show its juicy segments, on a market stall in Belize',
        kriolExample: 'Ah wahn wahn poun a sweet arans.',
        englishExample: 'I want a pound of sweet oranges.'
    },
    {
        kriol: 'aroun',
        english: 'around',
        meaning: 'Located or situated on every side.',
        englishForPrompt: 'children holding hands and dancing in a circle around a maypole with colorful ribbons in a Belizean village',
        kriolExample: 'Di pikni dehn di dans aroun di may-pol.',
        englishExample: 'The children are dancing around the maypole.'
    },
    {
        kriol: 'at',
        english: 'at',
        meaning: 'Expressing location or arrival in a particular place or position.',
        englishForPrompt: 'a map of Belize with a big red pin dropped on the location of Belize City',
        kriolExample: 'Ah de at di maakit.',
        englishExample: 'I am at the market.'
    },
    {
        kriol: 'ay-glaas',
        english: 'eyeglasses',
        meaning: 'A pair of lenses set in a frame resting on the nose and ears, used to correct or assist defective eyesight.',
        englishForPrompt: 'a pair of reading glasses resting on top of an open book on a wooden table',
        kriolExample: 'Ah kyaahn see widout mai ay-glaas.',
        englishExample: 'I can\'t see without my eyeglasses.'
    },
    {
        kriol: 'baafu',
        english: 'bathroom / outhouse',
        meaning: 'A room containing a toilet and sink. Can also refer to a simple outdoor toilet, or outhouse.',
        englishForPrompt: 'a rustic wooden outhouse, known as a "baafu," in the backyard of a rural Belizean home',
        kriolExample: 'Di baafu de da di bak a di yaad.',
        englishExample: 'The outhouse is at the back of the yard.'
    },
    {
        kriol: 'baal',
        english: 'ball',
        meaning: 'A solid or hollow spherical or ovoid object that is kicked, thrown, or hit in a game.',
        englishForPrompt: 'a slightly worn soccer ball resting on a grassy field in a Belizean village',
        kriolExample: 'Di pikni dehn di play baal da di paak.',
        englishExample: 'The children are playing ball at the park.'
    },
    {
        kriol: 'baark',
        english: 'bark (dog)',
        meaning: 'The sharp explosive cry of a dog, fox, or seal.',
        englishForPrompt: 'a potlicker dog in mid-bark, with its mouth open and head tilted up, creating soundwave graphics emanating from its mouth',
        kriolExample: 'Di daag staat baark wen di strangja com.',
        englishExample: 'The dog started to bark when the stranger arrived.'
    },
    {
        kriol: 'baaskit',
        english: 'basket',
        meaning: 'A container made from interwoven strips of cane or wire, used to carry things.',
        englishForPrompt: 'a woven straw basket, a common Belizean craft, filled with colorful tropical fruits',
        kriolExample: 'Shee put all di mango eena wahn big baaskit.',
        englishExample: 'She put all the mangoes into one big basket.'
    },
    {
        kriol: 'bad',
        english: 'bad',
        meaning: 'Of poor quality; inferior or defective.',
        englishForPrompt: 'a thumbs-down hand gesture painted in a bold, graphic style',
        kriolExample: 'Da mango tes bad.',
        englishExample: 'That mango tastes bad.'
    },
    {
        kriol: 'bai',
        english: 'buy',
        meaning: 'To obtain in exchange for payment.',
        englishForPrompt: 'a hand exchanging a Belizean dollar bill for a fresh coconut from a street vendor',
        kriolExample: 'Ah gweyn da maakit fi bai sohn tamaytiz.',
        englishExample: 'I am going to the market to buy some tomatoes.'
    },
    {
        kriol: 'bail',
        english: 'bucket',
        meaning: 'A cylindrical open container with a handle, used to carry liquids or other materials.',
        englishForPrompt: 'a simple galvanized metal bucket, a common household item in Belize, being used to collect rainwater from a zinc roof',
        kriolExample: 'Go ful di bail wid wata fram di vat.',
        englishExample: 'Go fill the bucket with water from the vat.'
    },
    {
        kriol: 'baisikl',
        english: 'bicycle',
        meaning: 'A vehicle composed of two wheels held in a frame one behind the other, propelled by pedals and steered with handlebars.',
        englishForPrompt: 'a classic beach cruiser bicycle with a basket, leaning against a coconut palm tree on a sandy path in a Belizean village like Caye Caulker',
        kriolExample: 'Pahn di cay, evrybady raid baisikl.',
        englishExample: 'On the caye, everybody rides a bicycle.'
    },
    {
        kriol: 'bak',
        english: 'back',
        meaning: 'The rear surface of the human body from the shoulders to the hips.',
        englishForPrompt: 'a rear view of a person wearing a backpack, walking down a jungle trail in Belize',
        kriolExample: 'Mi bak di hot mi.',
        englishExample: 'My back is hurting me.'
    },
    {
        kriol: 'bak-a-tong',
        english: 'outskirts of town',
        meaning: 'The outer parts of a town or city; the residential areas far from the center.',
        englishForPrompt: 'the edge of a Belizean town where the houses become more sparse and the lush green bush begins',
        kriolExample: 'Dehn liv way da bak-a-tong, weh ih quiet.',
        englishExample: 'They live way on the outskirts of town, where it\'s quiet.'
    },
    {
        kriol: 'bakl',
        english: 'buckle',
        meaning: 'A flat, typically rectangular frame with a hinged pin, used for joining the ends of a belt or strap.',
        englishForPrompt: 'a close-up of a shiny silver belt buckle on a brown leather belt',
        kriolExample: 'Fik yu bakl, yu shurt di kom owt.',
        englishExample: 'Fix your buckle, your shirt is coming out.'
    },
    {
        kriol: 'bambu',
        english: 'bamboo',
        meaning: 'A tall, fast-growing plant of the grass family, with hollow, jointed stems, often found near rivers in Belize.',
        englishForPrompt: 'a dense thicket of green bamboo growing on the banks of a Belizean river',
        kriolExample: 'Dehn bild wahn lee haus owta bambu.',
        englishExample: 'They built a small house out of bamboo.'
    },
    {
        kriol: 'banaana',
        english: 'banana',
        meaning: 'A long curved fruit which grows in bunches and has soft pulpy flesh and yellow skin when ripe.',
        englishForPrompt: 'a bunch of ripe yellow bananas hanging from a banana plant in a Belizean farm',
        kriolExample: 'Ah laik eet banaana wid mai bred in di mawnin.',
        englishExample: 'I like to eat a banana with my bread in the morning.'
    },
    {
        kriol: 'bandaana',
        english: 'bandana',
        meaning: 'A square of cloth, typically with a colorful pattern, tied around the head or neck.',
        englishForPrompt: 'a red bandana with a classic paisley pattern, folded neatly on a wooden surface',
        kriolExample: 'Ih tai wahn red bandaana rown ih hed.',
        englishExample: 'He tied a red bandana around his head.'
    },
    {
        kriol: 'bangl',
        english: 'bracelet',
        meaning: 'An ornamental band, hoop, or chain worn on the wrist or arm.',
        englishForPrompt: 'a simple bracelet made from polished black coral, a traditional Belizean craft',
        kriolExample: 'Shee ga wahn priti bangl mek owt a seeweed.',
        englishExample: 'She has a pretty bracelet made out of seaweed.'
    },
    {
        kriol: 'bank',
        english: 'bench',
        meaning: 'A long seat for several people, typically made of wood or stone. Can also refer to a financial institution.',
        englishForPrompt: 'a weathered wooden park bench under a large flamboyant tree in a town square in Belize',
        kriolExample: 'Mek wi sidown pahn da bank unda di chree.',
        englishExample: 'Let\'s sit down on that bench under the tree.'
    },
    {
        kriol: 'battl',
        english: 'bottle',
        meaning: 'A glass or plastic container with a narrow neck, used for holding drinks or other liquids.',
        englishForPrompt: 'an old-fashioned glass soda bottle, like a Fanta or Coke, with a colorful paper label, common in Belize',
        kriolExample: 'Ah wahn wahn battl a kool wata.',
        englishExample: 'I want a bottle of cold water.'
    },
    {
        kriol: 'bee',
        english: 'bee',
        meaning: 'A stinging winged insect which collects nectar and pollen, produces wax and honey.',
        englishForPrompt: 'a close-up macro photo of a honeybee collecting nectar from a vibrant tropical flower in Belize',
        kriolExample: 'Di bee di bos roun di flawa.',
        englishExample: 'The bee is buzzing around the flower.'
    },
    {
        kriol: 'beebi',
        english: 'baby',
        meaning: 'A very young child, especially one newly born or in infancy.',
        englishForPrompt: 'a happy Belizean baby with curly dark hair, smiling and sitting on a colorful blanket',
        kriolExample: 'Di beebi di krai fi ih battl.',
        englishExample: 'The baby is crying for its bottle.'
    },
    {
        kriol: 'bed',
        english: 'bed',
        meaning: 'A piece of furniture used for sleep or rest, typically a framework with a mattress.',
        englishForPrompt: 'a simple wooden bed with a colorful quilt in a cozy bedroom with open windows',
        kriolExample: 'Ah gweyn da bed, ah tayad.',
        englishExample: 'I am going to bed, I am tired.'
    },
    {
        kriol: 'beeskit',
        english: 'biscuit / cookie',
        meaning: 'A small baked unleavened cake, typically crisp, flat, and sweet.',
        englishForPrompt: 'a plate of Belizean shortbread biscuits, known as "Creole biscuits," dusted with sugar',
        kriolExample: 'Ah lov fi dip mai beeskit eena mi tee.',
        englishExample: 'I love to dip my biscuit in my tea.'
    },
    {
        kriol: 'befo',
        english: 'before',
        meaning: 'During the period of time preceding (a particular event or time).',
        englishForPrompt: 'a sequence of two images: the first showing a seed, the second showing a small sprout, illustrating the "before" and "after" of planting',
        kriolExample: 'Wash yu han befo yu eet.',
        englishExample: 'Wash your hands before you eat.'
    },
    {
        kriol: 'beg',
        english: 'beg',
        meaning: 'To ask someone earnestly or humbly for something.',
        englishForPrompt: 'a person with their hands clasped together in a pleading gesture',
        kriolExample: 'Di lee bwai di beg fi wahn pees a kendi.',
        englishExample: 'The little boy is begging for a piece of candy.'
    },
    {
        kriol: 'bekl',
        english: 'belt',
        meaning: 'A strip of leather or other material worn around the waist, used to support trousers or a skirt.',
        englishForPrompt: 'a simple brown leather belt coiled up on a wooden surface',
        kriolExample: 'Yuh need wahn bekl fi dehn pans.',
        englishExample: 'You need a belt for those pants.'
    },
    {
        kriol: 'bel',
        english: 'bell',
        meaning: 'A hollow object, typically of metal and bell-shaped, that makes a ringing sound when struck.',
        englishForPrompt: 'a classic brass handbell with a wooden handle',
        kriolExample: 'Di skul bel di ring.',
        englishExample: 'The school bell is ringing.'
    },
    {
        kriol: 'bex',
        english: 'angry / vexed',
        meaning: 'Feeling or showing strong annoyance, displeasure, or hostility.',
        englishForPrompt: 'an illustrated character with a red face, steam coming out of their ears, and a grumpy expression, to represent being "bex"',
        kriolExample: 'No mek I get bex wid yu!',
        englishExample: 'Don\'t make me get angry with you!'
    },
    {
        kriol: 'bi',
        english: 'be',
        meaning: 'To exist or live.',
        englishForPrompt: 'a philosophical image of a person sitting peacefully under a giant Ceiba tree, contemplating existence',
        kriolExample: 'Jos bi yuself.',
        englishExample: 'Just be yourself.'
    },
    {
        kriol: 'bifo',
        english: 'before',
        meaning: 'During the period of time preceding a particular event or time.',
        englishForPrompt: 'a visual timeline showing a clock with the hand pointing to 8 AM, labeled "bifo skul" (before school)',
        kriolExample: 'Bifo wi go, mek shoar yu gat evryting.',
        englishExample: 'Before we go, make sure you have everything.'
    },
    {
        kriol: 'big',
        english: 'big',
        meaning: 'Of considerable size, extent, or intensity.',
        englishForPrompt: 'a tiny boat next to a giant cruise ship in the Belize harbor, showing a strong contrast in size',
        kriolExample: 'Dat da wahn big chikin!',
        englishExample: 'That is a big chicken!'
    },
    {
        kriol: 'bila',
        english: 'sea turtle',
        meaning: 'A large marine reptile with a bony or leathery shell, such as the green turtles that nest on Belizean beaches.',
        englishForPrompt: 'a green sea turtle gliding through the clear blue water of the Caribbean Sea in Belize',
        kriolExample: 'Di bila dehn com op pahn di beech fi lai dehn ayg.',
        englishExample: 'The sea turtles come up on the beach to lay their eggs.'
    },
    {
        kriol: 'bileez flahg',
        english: 'Belize flag',
        meaning: 'The national flag of Belize, a royal blue field with two red stripes and the coat of arms in the center. It is the only country flag to feature human beings.',
        englishForPrompt: 'the national flag of Belize waving proudly in the wind against a clear blue sky, with its detailed coat of arms featuring two men and a mahogany tree clearly visible',
        kriolExample: 'Di bileez flahg di flai hai pahn Independence Day.',
        englishExample: 'The Belize flag is flying high on Independence Day.'
    },
    {
        kriol: 'bilikin',
        english: 'Belikin beer',
        meaning: 'The national beer of Belize, a popular lager easily identified by its label featuring a drawing of a Maya temple.',
        englishForPrompt: 'a cold bottle of Belizean Belikin beer with condensation, its iconic Maya temple label clearly visible, resting on a wooden table at a beach bar with the Caribbean Sea in the background',
        kriolExample: 'Ah feel fi wahn aiskol Bilikin afta wahn lang day.',
        englishExample: "I'm in the mood for an ice-cold Belikin after a long day."
    },
    {
        kriol: 'bilo',
        english: 'below',
        meaning: 'At a lower level or layer than.',
        englishForPrompt: 'a diver\'s view looking up at the surface of the water, with the bottom of a boat visible above and colorful fish swimming below',
        kriolExample: 'Di fish di swim bilo di buot.',
        englishExample: 'The fish are swimming below the boat.'
    },
    {
        kriol: 'bit',
        english: 'bite',
        meaning: 'To use the teeth to cut into something.',
        englishForPrompt: 'a close-up of a person taking a big bite out of a juicy slice of watermelon',
        kriolExample: 'Di daag bit di man pahn ih leg.',
        englishExample: 'The dog bit the man on his leg.'
    },
    {
        kriol: 'blainda',
        english: 'window blind',
        meaning: 'A screen for a window, especially one made of parallel slats that can be adjusted to admit, exclude, or redirect light.',
        englishForPrompt: 'sunlight streaming through the slats of a simple wooden window blind into a rustic room',
        kriolExample: 'Open di blainda, mek sohn lait kom een.',
        englishExample: 'Open the blinds, let some light come in.'
    },
    {
        kriol: 'blak',
        english: 'black',
        meaning: 'Of the very darkest color owing to the absence of or complete absorption of light.',
        englishForPrompt: 'a sleek, black jaguar, a powerful and iconic animal of Belize, resting on a branch in the jungle',
        kriolExample: 'Di puss da blak laik coal.',
        englishExample: 'The cat is black like coal.'
    },
    {
        kriol: 'blangkit',
        english: 'blanket',
        meaning: 'A large piece of woolen or similar material used as a covering on a bed or for warmth.',
        englishForPrompt: 'a cozy, colorful woven blanket draped over the back of a rocking chair',
        kriolExample: 'Kova op wid di blangkit, di nait kool.',
        englishExample: 'Cover up with the blanket, the night is cool.'
    },
    {
        kriol: 'blo',
        english: 'blow',
        meaning: 'To move creating an air current.',
        englishForPrompt: 'a person blowing out the candles on a birthday cake, with smoke trailing from the wicks',
        kriolExample: 'Di weend di blo haad.',
        englishExample: 'The wind is blowing hard.'
    },
    {
        kriol: 'blofoto',
        english: 'puffed up / bloated',
        meaning: 'Swollen or puffed up, often used to describe someone or something looking overweight or bloated.',
        englishForPrompt: 'a large, puffed-up toad, looking comically bloated, sitting by a puddle in the Belizean jungle at night',
        kriolExample: 'Afta di paaty, ah mi feel reeli blofoto.',
        englishExample: 'After the party, I felt really bloated.'
    },
    {
        kriol: 'bloo',
        english: 'blue',
        meaning: 'Of a color intermediate between green and violet, as of the sky or sea on a sunny day.',
        englishForPrompt: 'the stunningly clear, turquoise blue water of the Caribbean Sea off the coast of a Belizean caye',
        kriolExample: 'Di skai da wahn priti bloo tideh.',
        englishExample: 'The sky is a pretty blue today.'
    },
    {
        kriol: 'blue hoal',
        english: 'Blue Hole',
        meaning: 'The Great Blue Hole, a giant marine sinkhole off the coast of Belize, famous as a world-class destination for scuba divers.',
        englishForPrompt: 'an awe-inspiring aerial view of the Great Blue Hole of Belize, a giant, perfectly circular dark blue sinkhole surrounded by the turquoise water of the Lighthouse Reef atoll',
        kriolExample: 'Di blue hoal da wahn a di seven wanda a di worl.',
        englishExample: 'The Blue Hole is one of the seven wonders of the world.'
    },
    {
        kriol: 'bod',
        english: 'bird',
        meaning: 'A warm-blooded, egg-laying vertebrate distinguished by the possession of feathers, wings, and a beak.',
        englishForPrompt: 'a small, common brown bird, like a sparrow, perched on a wire against a clear blue sky',
        kriolExample: 'Evri maanin, wahn lee bodl com sing pahn mi winda.',
        englishExample: 'Every morning, a little bird comes to sing at my window.'
    },
    {
        kriol: 'boil',
        english: 'boil',
        meaning: 'To reach the temperature at which a liquid bubbles and turns to vapor.',
        englishForPrompt: 'a pot of water on a stove with large bubbles rising to the surface, indicating a vigorous boil',
        kriolExample: 'Put di ayg eena di pot wen di wata staat boil.',
        englishExample: 'Put the eggs in the pot when the water starts to boil.'
    },
    {
        kriol: 'boil-op',
        english: 'boil up',
        meaning: 'A traditional Belizean Kriol dish consisting of boiled eggs, fish, and/or pig tail, with various ground foods like cassava, yams, and plantains.',
        englishForPrompt: 'a rich, savory Belizean boil-up stew in a large pot, with pigtail, fish, eggs, and ground foods visible',
        kriolExample: 'Sande da di perfet day fi mek wahn big pot a boil-op.',
        englishExample: 'Sunday is the perfect day to make a big pot of boil-up.'
    },
    {
        kriol: 'boops',
        english: 'boots',
        meaning: 'A sturdy item of footwear covering the foot and ankle, and sometimes also the lower leg.',
        englishForPrompt: 'a pair of sturdy, mud-covered work boots resting by a doorway',
        kriolExample: 'Tek aff yu boops bifo yu kom eena di haus.',
        englishExample: 'Take off your boots before you come in the house.'
    },
    {
        kriol: 'bot',
        english: 'but',
        meaning: 'Used to introduce a phrase or clause contrasting with what has already been mentioned.',
        englishForPrompt: 'a split image, with a sunny beach on one side and a rainy cityscape on the other, connected by the word "bot"',
        kriolExample: 'Ah wahn go, bot ah noh gat no moni.',
        englishExample: 'I want to go, but I don\'t have any money.'
    },
    {
        kriol: 'botl',
        english: 'bottle',
        meaning: 'A container, typically made of glass or plastic and with a narrow neck, used for holding drinks or other liquids.',
        englishForPrompt: 'a classic glass bottle of Belikin beer with condensation on the outside',
        kriolExample: 'Pass mi wahn botl a wata, pleez.',
        englishExample: 'Pass me a bottle of water, please.'
    },
    {
        kriol: 'braa',
        english: 'brother',
        meaning: 'A man or boy with one or more parents in common with another person.',
        englishForPrompt: 'two Belizean brothers, one slightly older, with their arms around each other, smiling warmly',
        kriolExample: 'Me and mi braa go fishin evri weeken.',
        englishExample: 'Me and my brother go fishing every weekend.'
    },
    {
        kriol: 'bred',
        english: 'bread',
        meaning: 'Food made of flour, water, and yeast mixed together and baked. "Creole bread" in Belize is a slightly sweet, hearty white bread.',
        englishForPrompt: 'a freshly baked loaf of Belizean Creole bread, with a golden-brown crust, sliced to show its soft white interior, on a wooden board',
        kriolExample: 'Nothn biit wahn slais a haat Kriol bred wid botta.',
        englishExample: 'Nothing beats a slice of hot Creole bread with butter.'
    },
    {
        kriol: 'bred-froolt',
        english: 'breadfruit',
        meaning: 'A large, round, starchy fruit of a tropical tree, which is used as a vegetable and is a staple food in many tropical regions.',
        englishForPrompt: 'a large, round, green breadfruit on a tree branch, a staple food in the Caribbean',
        kriolExample: 'Yu ku fry, boil, or roas di bred-froolt.',
        englishExample: 'You can fry, boil, or roast the breadfruit.'
    },
    {
        kriol: 'brayk',
        english: 'break',
        meaning: 'To separate into pieces as a result of a blow, shock, or strain.',
        englishForPrompt: 'a terracotta pot dropped on the ground, captured at the moment it shatters into pieces',
        kriolExample: 'Bee kyaaful no brayk di glaas.',
        englishExample: 'Be careful not to break the glass.'
    },
    {
        kriol: 'brekfas',
        english: 'breakfast',
        meaning: 'A meal eaten in the morning, the first of the day.',
        englishForPrompt: 'a classic Belizean breakfast plate with fry jacks, refried beans, scrambled eggs, and a slice of cheese',
        kriolExample: 'Ah di eet fry-jak fi mi brekfas.',
        englishExample: 'I am eating fry jacks for my breakfast.'
    },
    {
        kriol: 'brij',
        english: 'bridge',
        meaning: 'A structure carrying a road, path, or railway across a river, road, or other obstacle. A famous example is the Belize City Swing Bridge.',
        englishForPrompt: 'the historic Belize City Swing Bridge, a manually operated swing bridge painted white and red, spanning the Haulover Creek with small boats nearby',
        kriolExample: 'Dehn hafu swing di brij fi mek di big buot paas.',
        englishExample: 'They have to swing the bridge to let the big boat pass.'
    },
    {
        kriol: 'bring',
        english: 'bring',
        meaning: 'To take or go with (someone or something) to a place.',
        englishForPrompt: 'a person\'s hands holding out a gift box tied with a ribbon, offering it to the viewer',
        kriolExample: 'No forget fi bring di salaad.',
        englishExample: 'Don\'t forget to bring the salad.'
    },
    {
        kriol: 'brok',
        english: 'broke / broken',
        meaning: 'Having completely run out of money. Also, damaged and no longer in one piece or working order.',
        englishForPrompt: 'a person holding their empty pockets inside out with a sad expression. Also a broken plate.',
        kriolExample: 'Ah kyaahn go owt, ah brok.',
        englishExample: 'I can\'t go out, I\'m broke.'
    },
    {
        kriol: 'brokdong',
        english: 'Brukdown (music)',
        meaning: 'A uniquely Belizean genre of music, characterized by its lively rhythm using banjo, guitar, drums, accordion, and a donkey\'s jawbone.',
        englishForPrompt: 'a lively band playing Belizean Brukdown music, featuring a musician playing a donkey\'s jawbone with a bottle',
        kriolExample: 'Wen di brokdong myoozik staat, nobady ku sidong.',
        englishExample: 'When the Brukdown music starts, nobody can sit down.'
    },
    {
        kriol: 'brong',
        english: 'brown',
        meaning: 'Of a color produced by mixing red, yellow, and blue, as of dark wood or rich soil.',
        englishForPrompt: 'a rich, brown Belizean cacao pod, the source of chocolate, resting on a banana leaf',
        kriolExample: 'Ih aiy dehn da wahn deep brong.',
        englishExample: 'His eyes are a deep brown.'
    },
    {
        kriol: 'broosh',
        english: 'brush',
        meaning: 'An implement with a handle, consisting of bristles, hair, or wire set into a block, used for cleaning, grooming, or painting.',
        englishForPrompt: 'a simple wooden hairbrush with natural bristles resting on a dressing table',
        kriolExample: 'Ah need fi broosh mi hayr bifo wi go.',
        englishExample: 'I need to brush my hair before we go.'
    },
    {
        kriol: 'buk',
        english: 'book',
        meaning: 'A written or printed work consisting of pages glued or sewn together along one side and bound in covers.',
        englishForPrompt: 'an open book resting on a wooden table, its pages gently ruffled by a breeze from an open window',
        kriolExample: 'Ah lov fi reed wahn gud buk.',
        englishExample: 'I love to read a good book.'
    },
    {
        kriol: 'bulit chree',
        english: 'bullet tree',
        meaning: 'A large tropical tree with very hard, dense wood. Its reddish sap, known as chicle, was the original base for chewing gum.',
        englishForPrompt: 'the bark of a bullet tree with its distinctive reddish sap, known as "chicle," dripping out, which was historically used for chewing gum',
        kriolExample: 'Di oal taim chicle man dehn mi get chicle fram di bulit chree.',
        englishExample: 'The old time chicle men used to get chicle from the bullet tree.'
    },
    {
        kriol: 'buot',
        english: 'boat',
        meaning: 'A vessel for travel on water, propelled by oars, sails, or an engine. In Belize, skiffs are common for island travel.',
        englishForPrompt: 'a typical Belizean water taxi, a motor skiff, cruising across the turquoise Caribbean Sea on a sunny day, heading towards an island',
        kriolExample: 'Wi tek di buot fi go da San Pedro.',
        englishExample: 'We took the boat to go to San Pedro.'
    },
    {
        kriol: 'bwai',
        english: 'boy',
        meaning: 'A male child or young man.',
        englishForPrompt: 'a young Belizean boy wearing a school uniform, smiling happily at the camera',
        kriolExample: 'Dat lee bwai smaat fi ih ayj.',
        englishExample: 'That little boy is smart for his age.'
    },
    {
        kriol: 'chaini-bam',
        english: 'Chinese fried bun',
        meaning: 'A popular Belizean street food, a savory deep-fried bun often filled with seasoned meat or beans, adapted from Chinese cuisine.',
        englishForPrompt: 'a golden-brown, deep-fried Chinese bun with a savory filling, a popular Belizean snack sold at street food stalls',
        kriolExample: 'Ah wahn buy wahn chaini-bam fi brekfas.',
        englishExample: 'I want to buy a Chinese fried bun for breakfast.'
    },
    {
        kriol: 'chach',
        english: 'church',
        meaning: 'A building used for public Christian worship. Many in Belize are historic wooden structures.',
        englishForPrompt: 'an old colonial-style wooden church with a steeple, painted white, standing in a small Belizean town surrounded by lush greenery',
        kriolExample: 'Di hoal vilij go da chach pahn Sande.',
        englishExample: 'The whole village goes to church on Sunday.'
    },
    {
        kriol: 'chaklis',
        english: 'flip-flops / slippers',
        meaning: 'A light sandal, typically of plastic or rubber, with a thong between the big and second toe.',
        englishForPrompt: 'a pair of simple rubber flip-flops, or "chaklis," left on the sand at the edge of the turquoise Caribbean water',
        kriolExample: 'No bada wear shooz, jos bring yu chaklis.',
        englishExample: 'Don\'t bother wearing shoes, just bring your flip-flops.'
    },
    {
        kriol: 'chaynj',
        english: 'change / coins',
        meaning: 'Money in the form of coins rather than notes.',
        englishForPrompt: 'a small pile of Belizean coins of different denominations, showing the local currency, on a wooden surface',
        kriolExample: 'Yu ga eni chaynj fi di paakin meeta?',
        englishExample: 'Do you have any change for the parking meter?'
    },
    {
        kriol: 'cheez',
        english: 'cheese',
        meaning: 'A food made from the pressed curds of milk. In Belize, processed cheese is very popular.',
        englishForPrompt: 'a wedge of processed "Dutch" cheese, a popular type in Belize, with a few slices cut from it on a plate',
        kriolExample: 'Ah laik cheez wid mi fry-jak.',
        englishExample: 'I like cheese with my fry jacks.'
    },
    {
        kriol: 'cheyr',
        english: 'chair',
        meaning: 'A separate seat for one person, typically with a back and four legs.',
        englishForPrompt: 'a simple wooden chair with a woven seat, a common style in Belize, resting on a porch overlooking a lush garden',
        kriolExample: 'Pull op wahn cheyr ahn sidown.',
        englishExample: 'Pull up a chair and sit down.'
    },
    {
        kriol: 'chikin',
        english: 'chicken',
        meaning: 'A domestic fowl kept for its eggs or meat. Stew chicken is a cornerstone of Belizean cuisine.',
        englishForPrompt: 'a close-up shot of rich, brown Belizean stewed chicken with gravy, served on a plate with rice and beans',
        kriolExample: 'Ah wahn wahn plays a stu chikin wid rays-ahn-beenz.',
        englishExample: 'I want a plate of stew chicken with rice and beans.'
    },
    {
        kriol: 'chikin fut',
        english: 'chicken foot (snack)',
        meaning: 'A popular Belizean snack made from pickled or seasoned and boiled chicken feet.',
        englishForPrompt: 'a close-up of the Belizean snack "chicken foot," seasoned and served in a small plastic bag with spicy onion sauce',
        kriolExample: 'Ih di sell hat chikin fut pahn di kaana.',
        englishExample: 'He is selling hot chicken foot on the corner.'
    },
    {
        kriol: 'choklit',
        english: 'chocolate',
        meaning: 'A food preparation in the form of a paste or solid block made from roasted and ground cacao seeds, typically sweetened.',
        englishForPrompt: 'a rustic bar of dark Belizean chocolate made from local cacao, resting on a banana leaf next to some roasted cacao beans',
        kriolExample: 'Di hoal haas smel laik hat choklit.',
        englishExample: 'The whole house smells like hot chocolate.'
    },
    {
        kriol: 'choch-beel',
        english: 'church bell',
        meaning: 'A bell housed in the belfry or steeple of a church, rung to announce services or other events.',
        englishForPrompt: 'a large, old bronze church bell in the belfry of a historic Belizean church, against a blue sky',
        kriolExample: 'Wi hehr di choch-beel di ring fi di wedin.',
        englishExample: 'We heard the church bell ringing for the wedding.'
    },
    {
        kriol: 'chook',
        english: 'poke / stab',
        meaning: 'To jab or prod someone or something with a finger or a sharp object.',
        englishForPrompt: 'a close-up of a finger gently poking a soft piece of dough',
        kriolExample: 'No chook di daag wid da stik!',
        englishExample: 'Don\'t poke the dog with that stick!'
    },
    {
        kriol: 'choo',
        english: 'through',
        meaning: 'Moving in one side and out of the other side of (an opening, channel, or location).',
        englishForPrompt: 'a person walking through a beautifully carved wooden doorway into a sunlit tropical garden',
        kriolExample: 'Di buot go choo di brij.',
        englishExample: 'The boat went through the bridge.'
    },
    {
        kriol: 'da',
        english: 'is / am / are (the)',
        meaning: 'A versatile verb of being, and also used as the definite article "the".',
        englishForPrompt: 'a simple equals sign (=) drawn in the sand, representing the concept of "is"',
        kriolExample: 'Dat da mi breda.',
        englishExample: 'That is my brother.'
    },
    {
        kriol: 'daag',
        english: 'dog',
        meaning: 'A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, and a barking, howling, or whining voice.',
        englishForPrompt: 'a friendly potlicker dog, a common mixed-breed dog in Belize, resting in the shade on a sunny day',
        kriolExample: 'Di daag di baak at di posman.',
        englishExample: 'The dog is barking at the postman.'
    },
    {
        kriol: 'daala',
        english: 'dollar',
        meaning: 'The basic monetary unit of Belize and other countries.',
        englishForPrompt: 'a crisp Belizean two-dollar bill, featuring the Queen\'s portrait, next to some Belizean coins',
        kriolExample: 'Dat wahn kaas yu faiv daala.',
        englishExample: 'That will cost you five dollars.'
    },
    {
        kriol: 'daans',
        english: 'dance',
        meaning: 'To move rhythmically to music, typically following a set sequence of steps.',
        englishForPrompt: 'a couple dancing energetically to Belizean Punta music at a lively outdoor celebration at night',
        kriolExample: 'Evrybady get op ahn daans wen di drom staat play.',
        englishExample: 'Everybody got up and danced when the drums started to play.'
    },
    {
        kriol: 'daata',
        english: 'daughter',
        meaning: 'A girl or woman in relation to her parents.',
        englishForPrompt: 'a Belizean mother and her young daughter sitting together, reading a book on a porch',
        kriolExample: 'Shee prowd a ih daata.',
        englishExample: 'She is proud of her daughter.'
    },
    {
        kriol: 'de',
        english: 'is / are / there',
        meaning: 'A word indicating existence or location, similar to "is there" or "are there".',
        englishForPrompt: 'a hand pointing with an index finger towards a beautiful keel-billed toucan sitting on a branch, as if to say "it is there!"',
        kriolExample: 'Wahn big gwin de pahn di chree.',
        englishExample: 'There is a big iguana on the tree.'
    },
    {
        kriol: 'dehn',
        english: 'they / them (plural marker)',
        meaning: 'Used to refer to two or more people or things previously mentioned or easily identified. Also used after a noun to make it plural.',
        englishForPrompt: 'an illustration of three diverse cartoon people standing together, with a bracket around them labeled "dehn"',
        kriolExample: 'Di pikni dehn di play.',
        englishExample: 'The children are playing.'
    },
    {
        kriol: 'dencha',
        english: 'dentures',
        meaning: 'A removable plate or frame holding one or more artificial teeth.',
        englishForPrompt: 'a set of dentures resting in a glass of water on a nightstand',
        kriolExample: 'Mai grani tek owt ih dencha evri nait.',
        englishExample: 'My granny takes out her dentures every night.'
    },
    {
        kriol: 'di',
        english: 'the / (progressive marker)',
        meaning: 'The definite article. Also used before a verb to indicate a continuous or ongoing action (like "-ing" in English).',
        englishForPrompt: 'an animated-style image of a person running, with motion lines to show the action is in progress',
        kriolExample: 'Ih di eet ih food.',
        englishExample: 'He is eating his food.'
    },
    {
        kriol: 'did',
        english: '(past tense marker)',
        meaning: 'A word used before a verb to indicate that the action happened in the past.',
        englishForPrompt: 'a calendar page from a previous month, circled and marked with a checkmark, symbolizing a completed past action',
        kriolExample: 'Ah did go da tong yestideh.',
        englishExample: 'I went to town yesterday.'
    },
    {
        kriol: 'dinna',
        english: 'dinner',
        meaning: 'The main meal of the day, taken either around midday or in the evening.',
        englishForPrompt: 'a family sitting around a dinner table in Belize, sharing a meal of stew chicken with rice and beans in the evening',
        kriolExample: 'Wat wi di eat fi dinna tudeh?',
        englishExample: 'What are we eating for dinner today?'
    },
    {
        kriol: 'dis',
        english: 'this',
        meaning: 'Used to identify a specific person or thing close at hand or being indicated or experienced.',
        englishForPrompt: 'a hand pointing directly at a vibrant hibiscus flower, highlighting "this" specific one',
        kriolExample: 'Dis da di bes mango.',
        englishExample: 'This is the best mango.'
    },
    {
        kriol: 'dong',
        english: 'down',
        meaning: 'Toward or in a lower place or position.',
        englishForPrompt: 'a vibrant blue arrow pointing downwards against a rustic wooden background',
        kriolExample: 'Sidong pahn di cheyr.',
        englishExample: 'Sit down on the chair.'
    },
    {
        kriol: 'dopi',
        english: 'ghost / spirit',
        meaning: 'A ghost or supernatural spirit, often malevolent, in Belizean folklore.',
        englishForPrompt: 'a spooky, ethereal, translucent figure floating in a dark, misty jungle setting, representing a Belizean "dopi"',
        kriolExample: 'Dehn seh wahn dopi hant da oal haus.',
        englishExample: 'They say a ghost haunts that old house.'
    },
    {
        kriol: 'dori',
        english: 'dory',
        meaning: 'A small, flat-bottomed boat, traditionally hand-carved from a single log, used for fishing in rivers and close to the shore in Belize.',
        englishForPrompt: 'a traditional wooden dory boat, hand-carved from a single log, resting in the calm, clear waters near a Belizean fishing village',
        kriolExample: 'Di fishaman gaan owt da say eena ih dori.',
        englishExample: 'The fisherman went out to sea in his dory.'
    },
    {
        kriol: 'dray',
        english: 'dry',
        meaning: 'Free from moisture or liquid; not wet or moist.',
        englishForPrompt: 'a landscape of cracked, dry earth under a hot sun, showing a lack of water',
        kriolExample: 'Di kloaz dehn dray now.',
        englishExample: 'The clothes are dry now.'
    },
    {
        kriol: 'dray-fish',
        english: 'dried fish',
        meaning: 'Fish that has been preserved by salt-curing and drying in the sun, a traditional practice in Belizean coastal communities.',
        englishForPrompt: 'salted and dried fish hanging on a line to dry in the sun in a Belizean fishing village like Hopkins or Placencia',
        kriolExample: 'Dray-fish an praanti go gud tugeda.',
        englishExample: 'Dried fish and plantain go well together.'
    },
    {
        kriol: 'drink',
        english: 'drink',
        meaning: 'To take (a liquid) into the mouth and swallow.',
        englishForPrompt: 'a person drinking fresh coconut water directly from a green coconut with a straw',
        kriolExample: 'Ah need fi drink sohn wata.',
        englishExample: 'I need to drink some water.'
    },
    {
        kriol: 'droga',
        english: 'pharmacist / druggist',
        meaning: 'A person who is professionally qualified to prepare and dispense medicinal drugs.',
        englishForPrompt: 'a friendly pharmacist in a white coat standing behind the counter in a small Belizean pharmacy',
        kriolExample: 'Ah gweyn da di droga fi get sohn medsin.',
        englishExample: 'I am going to the pharmacist to get some medicine.'
    },
    {
        kriol: 'drom',
        english: 'drum',
        meaning: 'A percussion instrument sounded by being struck with sticks or the hands. Garifuna drums are central to their culture.',
        englishForPrompt: 'a Garifuna musician passionately playing a traditional hand-carved wooden "primero" drum',
        kriolExample: 'Yu ku feel di beet a di drom eena yu ches.',
        englishExample: 'You can feel the beat of the drum in your chest.'
    },
    {
        kriol: 'du',
        english: 'do',
        meaning: 'To perform (an action, the precise nature of which is often unspecified).',
        englishForPrompt: 'a simple, bold checkmark symbol, representing a task that has been done',
        kriolExample: 'Wat yu di du?',
        englishExample: 'What are you doing?'
    },
    {
        kriol: 'dukuny',
        english: 'ducunu',
        meaning: 'A traditional Belizean sweet tamale made from grated green corn, coconut milk, and spices, wrapped in a corn husk and boiled.',
        englishForPrompt: 'a traditional Belizean ducunu, a sweet corn tamale wrapped in a corn husk, steaming on a plate, with one partially unwrapped to show the soft, pudding-like texture inside',
        kriolExample: 'Mai grama mek di bes dukunu fi Krismus.',
        englishExample: 'My grandma makes the best ducunu for Christmas.'
    },
    {
        kriol: 'eena',
        english: 'in / into',
        meaning: 'Expressing the situation of something that is or appears to be enclosed or surrounded by something else.',
        englishForPrompt: 'a hand dropping colorful marbles into a clear glass jar',
        kriolExample: 'Di moni de eena di bag.',
        englishExample: 'The money is in the bag.'
    },
    {
        kriol: 'eet',
        english: 'eat',
        meaning: 'To put (food) into the mouth and chew and swallow it.',
        englishForPrompt: 'a person taking a satisfying bite of a Belizean meat pie, with a happy expression',
        kriolExample: 'Ah hungry, mek wi go eet.',
        englishExample: 'I am hungry, let\'s go eat.'
    },
    {
        kriol: 'en',
        english: 'end',
        meaning: 'The final part of something, especially a period of time, an activity, or a story.',
        englishForPrompt: 'a finish line tape at a racetrack, being broken by a runner, symbolizing the end of the race',
        kriolExample: 'Dat da di en a di stori.',
        englishExample: 'That is the end of the story.'
    },
    {
        kriol: 'eni',
        english: 'any',
        meaning: 'Used to refer to one or some of a thing or number of things, no matter how much or how many.',
        englishForPrompt: 'a question mark made out of various colorful Belizean fruits on a market stall',
        kriolExample: 'Yu gat eni mango?',
        englishExample: 'Do you have any mangoes?'
    },
    {
        kriol: 'ereba',
        english: 'cassava bread',
        meaning: 'A large, thin, crispy flatbread made from grated cassava, a traditional staple of the Garifuna people.',
        englishForPrompt: 'a large, round, crispy piece of Garifuna cassava bread (ereba) on a woven mat, with a piece broken off to show its texture',
        kriolExample: 'Ereba go gud wid fish soop.',
        englishExample: 'Cassava bread goes well with fish soup.'
    },
    {
        kriol: 'eskuayl',
        english: 'squirrel',
        meaning: 'An agile, typically tree-dwelling rodent with a bushy tail.',
        englishForPrompt: 'a small, bushy-tailed squirrel sitting on a tree branch in Belize, eating a nut',
        kriolExample: 'Di eskuayl di ron op ahn dong di koknat chree.',
        englishExample: 'The squirrel is running up and down the coconut tree.'
    },
    {
        kriol: 'evri',
        english: 'every',
        meaning: 'Used to refer to all the individual members of a set without exception.',
        englishForPrompt: 'a calendar page with every single day crossed off, representing the completion of "every" day',
        kriolExample: 'Evri day di son com op.',
        englishExample: 'Every day the sun comes up.'
    },
    {
        kriol: 'fa',
        english: 'for / to',
        meaning: 'Indicating the purpose or recipient of an action.',
        englishForPrompt: 'a gift tag with the word "Fa:" written on it, attached to a present wrapped in colorful paper',
        kriolExample: 'Dis da fa yu.',
        englishExample: 'This is for you.'
    },
    {
        kriol: 'faal',
        english: 'fall',
        meaning: 'To move downward, typically rapidly and freely without control, from a higher to a lower level.',
        englishForPrompt: 'a single autumn-colored leaf falling gracefully from a tree branch',
        kriolExample: 'Di koknat faal fram di chree.',
        englishExample: 'The coconut fell from the tree.'
    },
    {
        kriol: 'faama',
        english: 'farmer',
        meaning: 'A person who owns or manages a farm.',
        englishForPrompt: 'a Belizean farmer in a straw hat, holding a machete and standing proudly in a field of corn under the sun',
        kriolExample: 'Di faama get op erli fi go da ih plaantayshan.',
        englishExample: 'The farmer gets up early to go to his farm.'
    },
    {
        kriol: 'faas',
        english: 'fast',
        meaning: 'Moving or capable of moving at high speed.',
        englishForPrompt: 'a hummingbird hovering in mid-air, its wings blurred with motion to show its speed',
        kriolExample: 'Dat gari di go tu faas.',
        englishExample: 'That car is going too fast.'
    },
    {
        kriol: 'faayastik',
        english: 'matchstick',
        meaning: 'A short, slender piece of wood or cardboard with a combustible tip, used for lighting fires.',
        englishForPrompt: 'a single wooden matchstick with a red tip, about to be struck against the side of a matchbox',
        kriolExample: 'Yu ga wahn faayastik so ah ku lait di kandl?',
        englishExample: 'Do you have a matchstick so I can light the candle?'
    },
    {
        kriol: 'fain',
        english: 'find',
        meaning: 'To discover or perceive by chance or unexpectedly.',
        englishForPrompt: 'a person discovering a beautiful conch shell half-buried in the sand on a Belizean beach',
        kriolExample: 'Ah fain wahn daala pahn di groon.',
        englishExample: 'I found a dollar on the ground.'
    },
    {
        kriol: 'fambli',
        english: 'family',
        meaning: 'A group consisting of parents and children living together as a unit.',
        englishForPrompt: 'a smiling, multi-generational Belizean family with grandparents, parents, and children, posing together for a portrait in their yard',
        kriolExample: 'Ih lov fi spen taim wid ih fambli.',
        englishExample: 'He loves to spend time with his family.'
    },
    {
        kriol: 'fans',
        english: 'fence',
        meaning: 'A barrier, railing, or other upright structure, typically of wood or wire, enclosing an area of ground to mark a boundary, control access, or prevent escape.',
        englishForPrompt: 'a simple wooden picket fence with peeling paint, enclosing a yard with tropical plants in a Belizean village',
        kriolExample: 'Wi need fi men di fans bifo di kaaf get owt.',
        englishExample: 'We need to mend the fence before the calf gets out.'
    },
    {
        kriol: 'faya-haat',
        english: 'fire hearth',
        meaning: 'A traditional outdoor cooking stove, often made of bricks or clay, used for cooking over a wood fire.',
        englishForPrompt: 'a rustic, traditional Belizean fire hearth with a cast-iron pot cooking over a wood fire',
        kriolExample: 'Mai grama stil cook pahn faya-haat.',
        englishExample: 'My grandmother still cooks on a fire hearth.'
    },
    {
        kriol: 'feda',
        english: 'feather',
        meaning: 'Any of the flat appendages growing from a bird\'s skin to form its plumage, consisting of a partly hollow quill, a shaft, and a vane.',
        englishForPrompt: 'a single, colorful parrot feather with green, blue, and yellow hues, lying on the jungle floor',
        kriolExample: 'Ah fain wahn priti bloo feda fram wahn paarat.',
        englishExample: 'I found a pretty blue feather from a parrot.'
    },
    {
        kriol: 'feel',
        english: 'feel',
        meaning: 'To experience an emotion or sensation.',
        englishForPrompt: 'a heart icon with a hand gently touching it, symbolizing emotion and feeling',
        kriolExample: 'Ah feel hapi tudeh.',
        englishExample: 'I feel happy today.'
    },
    {
        kriol: 'fi',
        english: 'for / to / of (possessive)',
        meaning: 'A multi-purpose preposition indicating possession, purpose, or direction.',
        englishForPrompt: 'a stylized drawing of a key, representing possession ("the key of the house")',
        kriolExample: 'Dat da fi mi buk.',
        englishExample: 'That is my book.'
    },
    {
        kriol: 'figet',
        english: 'forget',
        meaning: 'To fail to remember.',
        englishForPrompt: 'an illustration of a person\'s head with a thought bubble that is empty and fading away',
        kriolExample: 'Ah figet weh ah put mi keez.',
        englishExample: 'I forgot where I put my keys.'
    },
    {
        kriol: 'fish',
        english: 'fish',
        meaning: 'A limbless cold-blooded vertebrate animal with gills and fins and living wholly in water.',
        englishForPrompt: 'a vibrant red snapper, a common fish in Belize, being grilled whole over charcoal',
        kriolExample: 'Mek wi go kech sohn fish da di riva.',
        englishExample: 'Let\'s go catch some fish at the river.'
    },
    {
        kriol: 'fishaman',
        english: 'fisherman',
        meaning: 'A person who catches fish for a living or as a sport.',
        englishForPrompt: 'a Belizean fisherman wearing a wide-brimmed hat, casting a handline from a small wooden dory boat at sunrise',
        kriolExample: 'Di fishaman bring een wahn big snapa dis maanin.',
        englishExample: 'The fisherman brought in a big snapper this morning.'
    },
    {
        kriol: 'flai',
        english: 'fly (action)',
        meaning: 'To move through the air using wings.',
        englishForPrompt: 'a magnificent frigatebird with its wings spread wide, soaring high in the blue sky over the Belizean coast',
        kriolExample: 'Di bod dehn di flai sowt fi di winta.',
        englishExample: 'The birds are flying south for the winter.'
    },
    {
        kriol: 'flai',
        english: 'fly (insect)',
        meaning: 'A flying insect of a large order characterized by a single pair of transparent wings and sucking or piercing mouthparts.',
        englishForPrompt: 'a common housefly resting on a slice of sweet mango, shown in a macro close-up view',
        kriolExample: 'Shoo da flai weh fram di food!',
        englishExample: 'Shoo that fly away from the food!'
    },
    {
        kriol: 'flawa',
        english: 'flour',
        meaning: 'A powder obtained by grinding grain, typically wheat, and used to make bread, cakes, and pastry.',
        englishForPrompt: 'a mound of white all-purpose flour on a wooden surface with a rolling pin, ready for making tortillas or fry jacks',
        kriolExample: 'Wi need flawa fi mek di fry-jak.',
        englishExample: 'We need flour to make the fry jacks.'
    },
    {
        kriol: 'flowaz',
        english: 'flower',
        meaning: 'The seed-bearing part of a plant, consisting of reproductive organs that are typically surrounded by a brightly colored corolla.',
        englishForPrompt: 'a vibrant red hibiscus flower, a common sight in Belize, in full bloom with a droplet of dew on its petal',
        kriolExample: 'Di gyaadn ful a priti flowaz.',
        englishExample: 'The garden is full of pretty flowers.'
    },
    {
        kriol: 'fos',
        english: 'first',
        meaning: 'Coming before all others in time or order.',
        englishForPrompt: 'a gold medal with a "1st" engraved on it, hanging from a red, white, and blue ribbon',
        kriolExample: 'Shee com een fos eena di race.',
        englishExample: 'She came in first in the race.'
    },
    {
        kriol: 'fram',
        english: 'from',
        meaning: 'Indicating the point in space at which a journey, motion, or action starts.',
        englishForPrompt: 'an arrow pointing away from a small icon of a traditional Belizean house, indicating a journey starting "from" home',
        kriolExample: 'Ah jos com fram werk.',
        englishExample: 'I just came from work.'
    },
    {
        kriol: 'fren',
        english: 'friend',
        meaning: 'A person whom one knows and with whom one has a bond of mutual affection.',
        englishForPrompt: 'two diverse Belizean friends, a man and a woman, laughing together on a sunny beach',
        kriolExample: 'Shee da mi bes fren.',
        englishExample: 'She is my best friend.'
    },
    {
        kriol: 'fresh',
        english: 'fresh',
        meaning: '(of food) recently made or obtained; not canned, frozen, or otherwise preserved.',
        englishForPrompt: 'a splash of clear water on a crisp green lettuce leaf, symbolizing freshness',
        kriolExample: 'Ah lov fresh mango jroos.',
        englishExample: 'I love fresh mango juice.'
    },
    {
        kriol: 'fry',
        english: 'fry',
        meaning: 'To cook (food) in hot fat or oil, typically in a shallow pan.',
        englishForPrompt: 'golden brown slices of plantain sizzling in a hot pan of oil',
        kriolExample: 'Mek wi fry sohn fish fi dinna.',
        englishExample: 'Let\'s fry some fish for dinner.'
    },
    {
        kriol: 'fry-jak',
        english: 'fry jack',
        meaning: 'A traditional Belizean breakfast food, consisting of deep-fried dough pieces, often served with beans, eggs, and cheese.',
        englishForPrompt: 'a plate of golden brown, puffy Belizean fry jacks, served for breakfast with refried beans and scrambled eggs',
        kriolExample: 'Ah want wah plate a fry-jak wid refritos dis maanin.',
        englishExample: 'I want a plate of fry jacks with refried beans this morning.'
    },
    {
        kriol: 'ful',
        english: 'full',
        meaning: 'Containing or holding as much or as many as possible; having no empty space.',
        englishForPrompt: 'a woven basket filled to the brim with colorful, ripe tropical fruits from a Belizean market',
        kriolExample: 'Di baaskit ful a mango.',
        englishExample: 'The basket is full of mangoes.'
    },
    {
        kriol: 'fulish',
        english: 'foolish',
        meaning: 'Lacking good sense or judgment; unwise.',
        englishForPrompt: 'a person making a silly, comical face with crossed eyes and their tongue sticking out, representing foolishness',
        kriolExample: 'No bee soh fulish, tink bifo yu ak.',
        englishExample: 'Don\'t be so foolish, think before you act.'
    },
    {
        kriol: 'fut',
        english: 'foot',
        meaning: 'The lower extremity of the leg below the ankle, on which a person stands or walks.',
        englishForPrompt: 'a pair of bare feet walking on the white sand of a Belizean beach, leaving prints behind',
        kriolExample: 'Tek aff yu shooz ahn feel di san pahn yu fut.',
        englishExample: 'Take off your shoes and feel the sand on your feet.'
    },
    {
        kriol: 'ga',
        english: 'have / has / got',
        meaning: 'Possess, own, or hold.',
        englishForPrompt: 'a hand holding a set of house keys, symbolizing ownership',
        kriolExample: 'Ah ga chree sista.',
        englishExample: 'I have three sisters.'
    },
    {
        kriol: 'gaan',
        english: 'gone',
        meaning: 'No longer present; departed.',
        englishForPrompt: 'empty footprints leading away into the distance on a sandy beach, with the person no longer visible',
        kriolExample: 'Wen ah get deh, ih mi aredi gaan.',
        englishExample: 'When I got there, he was already gone.'
    },
    {
        kriol: 'gaaldin',
        english: 'oriole',
        meaning: 'A songbird with striking yellow or orange and black plumage, such as the yellow-tailed oriole common in Belize.',
        englishForPrompt: 'a yellow-tailed oriole, a vibrant yellow and black bird known as a "gaaldin" in Belize, perched on a leafy branch singing',
        kriolExample: 'Di gaaldin di sing so sweet dis mawnin.',
        englishExample: 'The oriole is singing so sweetly this morning.'
    },
    {
        kriol: 'gari',
        english: 'car',
        meaning: 'A road vehicle, typically with four wheels, powered by an internal combustion engine or electric motor and able to carry a small number of people.',
        englishForPrompt: 'a slightly old but well-maintained sedan, like a Toyota Corolla, driving down a street in a Belizean town',
        kriolExample: 'Wi tek di gari go da tong.',
        englishExample: 'We took the car to go to town.'
    },
    {
        kriol: 'gat',
        english: 'have / has / got',
        meaning: 'To possess, own, or hold.',
        englishForPrompt: 'a stylized drawing of a hand holding a Belizean dollar coin, symbolizing possession',
        kriolExample: 'Shee gat wahn nyoo jres.',
        englishExample: 'She has a new dress.'
    },
    {
        kriol: 'gaym',
        english: 'game',
        meaning: 'An activity that one engages in for amusement or fun.',
        englishForPrompt: 'children\'s hands shooting colorful glass marbles on the dirt ground, a classic Belizean pastime',
        kriolExample: 'Di pikni dehn di play wahn gaym a maabl.',
        englishExample: 'The children are playing a game of marbles.'
    },
    {
        kriol: 'get',
        english: 'get',
        meaning: 'To come to have (something); receive.',
        englishForPrompt: 'a person receiving a wrapped gift with a happy expression on their face',
        kriolExample: 'Ah get wahn presant fi mi bortday.',
        englishExample: 'I got a present for my birthday.'
    },
    {
        kriol: 'gi',
        english: 'give',
        meaning: 'To freely transfer the possession of something to someone.',
        englishForPrompt: 'one hand giving a ripe red mango to another hand',
        kriolExample: 'Gi mi wahn glaas a wata, pleez.',
        englishExample: 'Give me a glass of water, please.'
    },
    {
        kriol: 'gibnat',
        english: 'paca',
        meaning: 'A large rodent known as the "royal rat" in Belize, considered a local delicacy.',
        englishForPrompt: 'a gibnut, also known as the royal rat, foraging on the floor of the Belizean rainforest at dusk',
        kriolExample: 'Wen di Queen mi vizit, dehn giv ahn gibnat fi eet.',
        englishExample: 'When the Queen visited, they gave her gibnut to eat.'
    },
    {
        kriol: 'gitaa',
        english: 'guitar',
        meaning: 'A stringed musical instrument with a fretted fingerboard, typically incurved sides, and six or twelve strings, played by plucking or strumming.',
        englishForPrompt: 'an acoustic guitar leaning against a wall on a wooden veranda in Belize',
        kriolExample: 'Ih di play wahn sweet melodi pahn ih gitaa.',
        englishExample: 'He is playing a sweet melody on his guitar.'
    },
    {
        kriol: 'glaas',
        english: 'glass',
        meaning: 'A transparent solid substance used to make windows, bottles, and other objects. Also, a drinking container made from glass.',
        englishForPrompt: 'a clear drinking glass filled with ice and water, with condensation on the outside',
        kriolExample: 'Ful di glaas wid wata.',
        englishExample: 'Fill the glass with water.'
    },
    {
        kriol: 'glova',
        english: 'glove',
        meaning: 'A covering for the hand worn for protection against cold or dirt and typically having separate parts for each finger and the thumb.',
        englishForPrompt: 'a pair of simple cotton gardening gloves resting on a bag of soil',
        kriolExample: 'Put aan yu glova bifo yu staat werk eena di gyaadn.',
        englishExample: 'Put on your gloves before you start working in the garden.'
    },
    {
        kriol: 'go',
        english: 'go',
        meaning: 'To move from one place to another; travel.',
        englishForPrompt: 'a stylized green arrow pointing forward, indicating movement and direction',
        kriolExample: 'Mek wi go da di reeva.',
        englishExample: 'Let\'s go to the river.'
    },
    {
        kriol: 'gool',
        english: 'goal / goalpost',
        meaning: 'A pair of posts linked by a crossbar and typically netted, forming a space into or over which the ball has to be sent in order to score.',
        englishForPrompt: 'a makeshift soccer goal made of wooden posts on a dusty field in a Belizean village, with children playing nearby',
        kriolExample: 'Di bwai kik di baal strait intu di gool.',
        englishExample: 'The boy kicked the ball straight into the goal.'
    },
    {
        kriol: 'gooma',
        english: 'calabash',
        meaning: 'A large, hard-shelled fruit of a tropical American tree, whose dried shell is used to make bowls, cups, and rattles.',
        englishForPrompt: 'a dried and hollowed-out calabash gourd, used traditionally in Belize as a bowl or water container',
        kriolExample: 'Grani drink ih bittaz owt a wahn gooma evri maanin.',
        englishExample: 'Granny drinks her bitters out of a calabash every morning.'
    },
    {
        kriol: 'graas',
        english: 'grass',
        meaning: 'Vegetation consisting of typically short plants with long, narrow leaves, growing wild or cultivated on lawns and pasture.',
        englishForPrompt: 'a patch of lush, green grass with dew drops sparkling in the morning sun',
        kriolExample: 'Di kaaf dehn di eet graas eena di paascha.',
        englishExample: 'The calves are eating grass in the pasture.'
    },
    {
        kriol: 'grampa',
        english: 'grandfather',
        meaning: 'The father of one\'s father or mother.',
        englishForPrompt: 'a kind, elderly Belizean man with a warm smile and a straw hat, representing a grandfather',
        kriolExample: 'Mi grampa tel wi stori bout di oal days.',
        englishExample: 'My grandpa tells us stories about the old days.'
    },
    {
        kriol: 'grani',
        english: 'grandmother',
        meaning: 'The mother of one\'s father or mother.',
        englishForPrompt: 'a kind, elderly Belizean grandmother with a warm smile and wrinkles, sitting in a rocking chair on her porch',
        kriolExample: 'Mai grani mek di bes rays-ahn-beenz.',
        englishExample: 'My grandmother makes the best rice and beans.'
    },
    {
        kriol: 'grayp-froolt',
        english: 'grapefruit',
        meaning: 'A large round yellow citrus fruit with an acid juicy pulp.',
        englishForPrompt: 'a ripe yellow grapefruit, cut in half to show its juicy pink segments',
        kriolExample: 'Ah like fi eet grayp-froolt fi brekfas.',
        englishExample: 'I like to eat grapefruit for breakfast.'
    },
    {
        kriol: 'grayta',
        english: 'grater',
        meaning: 'A kitchen utensil with a rough surface used for grating foods, especially for grating coconuts to make coconut milk in Belize.',
        englishForPrompt: 'a traditional Belizean standing box grater being used to grate fresh white coconut flesh into a bowl',
        kriolExample: 'Yooz di grayta fi grayt di koknat fi di rays-ahn-beenz.',
        englishExample: 'Use the grater to grate the coconut for the rice and beans.'
    },
    {
        kriol: 'green',
        english: 'green',
        meaning: 'Of the color between blue and yellow in the spectrum; colored like grass or emeralds.',
        englishForPrompt: 'a large, vibrant green leaf from a Belizean jungle plant, covered in morning dew',
        kriolExample: 'Di jongl green an ful a laif.',
        englishExample: 'The jungle is green and full of life.'
    },
    {
        kriol: 'grin-pepa',
        english: 'green bell pepper',
        meaning: 'A large, mild, bell-shaped variety of pepper that is green when unripe.',
        englishForPrompt: 'a shiny, vibrant green bell pepper on a cutting board, being sliced with a knife',
        kriolExample: 'Ah need wahn grin-pepa fi di stu.',
        englishExample: 'I need a green bell pepper for the stew.'
    },
    {
        kriol: 'groo',
        english: 'grow',
        meaning: 'To undergo natural development by increasing in size and changing physically.',
        englishForPrompt: 'a time-lapse style sequence of images showing a small seed sprouting and growing into a leafy plant',
        kriolExample: 'Di koaan di groo taal.',
        englishExample: 'The corn is growing tall.'
    },
    {
        kriol: 'groon',
        english: 'ground / earth',
        meaning: 'The solid surface of the earth; soil.',
        englishForPrompt: 'rich, dark soil being tilled by a hand hoe, ready for planting seeds',
        kriolExample: 'Wi plaant di koaan seed eena di groon.',
        englishExample: 'We planted the corn seeds in the ground.'
    },
    {
        kriol: 'gud',
        english: 'good',
        meaning: 'Of a high standard; of high quality.',
        englishForPrompt: 'a thumbs-up hand gesture painted in a bold, graphic style',
        kriolExample: 'Dis food tes gud!',
        englishExample: 'This food tastes good!'
    },
    {
        kriol: 'gwayava',
        english: 'guava',
        meaning: 'A sweet tropical fruit with pink or white flesh and hard seeds.',
        englishForPrompt: 'a ripe guava fruit from Belize, cut in half to show its sweet pink pulp and small seeds',
        kriolExample: 'Di gwayava chree eena di yaad ful a froolt.',
        englishExample: 'The guava tree in the yard is full of fruit.'
    },
    {
        kriol: 'gweyn',
        english: 'going (future tense marker)',
        meaning: 'Used before a verb to indicate a future action or intention.',
        englishForPrompt: 'a road stretching into the horizon with a sign that says "Future Ahead", symbolizing "going to"',
        kriolExample: 'Ah gweyn da di stoa layta.',
        englishExample: 'I am going to the store later.'
    },
    {
        kriol: 'gwin',
        english: 'iguana',
        meaning: 'A large lizard, often found in trees near rivers in Belize. The green iguana is locally known as "bamboo chicken".',
        englishForPrompt: 'a large green iguana, known locally as a "bamboo chicken", resting on a tree branch over a Belizean river',
        kriolExample: 'Di gwin dehn lov fi son dehnself pahn di chree branch.',
        englishExample: 'The iguanas love to sun themselves on the tree branches.'
    },
    {
        kriol: 'gyaadn',
        english: 'garden',
        meaning: 'A piece of ground, often near a house, used for growing flowers, fruit, or vegetables.',
        englishForPrompt: 'a lush vegetable garden in a Belizean backyard, with tomato plants, pepper bushes, and cilantro growing',
        kriolExample: 'Wi get fresh tamaytiz fram wi gyaadn.',
        englishExample: 'We get fresh tomatoes from our garden.'
    },
    {
        kriol: 'gyal',
        english: 'girl',
        meaning: 'A female child or young woman.',
        englishForPrompt: 'a young Belizean girl with braided hair, smiling brightly for the camera',
        kriolExample: 'Dat lee gyal ga wahn priti jres.',
        englishExample: 'That little girl has a pretty dress.'
    },
    {
        kriol: 'haad',
        english: 'hard',
        meaning: 'Solid, firm, and rigid; not easily broken, bent, or pierced.',
        englishForPrompt: 'a close-up of the rough, textured bark of a mahogany tree, symbolizing something hard',
        kriolExample: 'Dis koknat haad fi brayk.',
        englishExample: 'This coconut is hard to break.'
    },
    {
        kriol: 'haas',
        english: 'horse',
        meaning: 'A large domesticated mammal with solid hoofs, used for riding or pulling loads. Common in rural Belize.',
        englishForPrompt: 'a strong horse grazing in a green pasture in the Belizean countryside',
        kriolExample: 'Ih raid di haas gaa vilij.',
        englishExample: 'He rode the horse to the village.'
    },
    {
        kriol: 'haat',
        english: 'heart',
        meaning: 'A hollow muscular organ that pumps the blood through the circulatory system by contraction and dilation. Also a symbol of love.',
        englishForPrompt: 'a simple, stylized drawing of a red heart on a piece of paper',
        kriolExample: 'Shee gi ahn wahn kaad wid wahn big red haat.',
        englishExample: 'She gave him a card with a big red heart.'
    },
    {
        kriol: 'hag',
        english: 'hog / pig',
        meaning: 'A domesticated pig, especially one over 120 lbs. (54 kg) and reared for meat.',
        englishForPrompt: 'a domestic pig with a pink snout, lying contentedly in the mud on a Belizean farm',
        kriolExample: 'Dehn di roas wahn hoal hag fi di paaty.',
        englishExample: 'They are roasting a whole hog for the party.'
    },
    {
        kriol: 'hama',
        english: 'hammer',
        meaning: 'A tool with a heavy metal head mounted at the end of a handle, used for jobs such as breaking things and driving in nails.',
        englishForPrompt: 'a classic claw hammer with a wooden handle resting on a workbench next to some nails',
        kriolExample: 'Ah need di hama fi nail op dis boad.',
        englishExample: 'I need the hammer to nail up this board.'
    },
    {
        kriol: 'hamak',
        english: 'hammock',
        meaning: 'A sling made of fabric, rope, or netting, suspended between two points, used for swinging, sleeping, or resting.',
        englishForPrompt: 'a colorful woven hammock strung between two coconut palm trees on a white sandy beach in Belize, overlooking the turquoise Caribbean Sea',
        kriolExample: 'Nothn sweeta dan fi relax eena wahn hamak anda wahn koknat chree.',
        englishExample: 'Nothing is sweeter than relaxing in a hammock under a coconut tree.'
    },
    {
        kriol: 'han',
        english: 'hand',
        meaning: 'The end part of a person\'s arm beyond the wrist, including the palm, fingers, and thumb.',
        englishForPrompt: 'the open palm of a person\'s hand, showing the lines and details of the skin',
        kriolExample: 'Wash yu han bifo yu eet.',
        englishExample: 'Wash your hands before you eat.'
    },
    {
        kriol: 'hapi',
        english: 'happy',
        meaning: 'Feeling or showing pleasure or contentment.',
        englishForPrompt: 'a close-up portrait of a Belizean child with a wide, joyful smile, eyes sparkling with happiness',
        kriolExample: 'Di pikni dehn hapi wen dehn di play.',
        englishExample: 'The children are happy when they are playing.'
    },
    {
        kriol: 'hat',
        english: 'hot',
        meaning: 'Having a high degree of heat or a high temperature.',
        englishForPrompt: 'the sun shining brightly in a clear blue Belizean sky, with visible heat waves rising from the ground',
        kriolExample: 'Di son reeli hat tideh.',
        englishExample: 'The sun is really hot today.'
    },
    {
        kriol: 'hat',
        english: 'hat',
        meaning: 'A shaped covering for the head worn for warmth, as a fashion item, or as part of a uniform.',
        englishForPrompt: 'a wide-brimmed straw hat, perfect for protection from the tropical sun, hanging on a hook on a wooden wall',
        kriolExample: 'Ih mi wear wahn big hat fi kip di son owt a ih aiy.',
        englishExample: 'He was wearing a big hat to keep the sun out of his eyes.'
    },
    {
        kriol: 'haus',
        english: 'house',
        meaning: 'A building for human habitation. In Belize, many traditional houses are wooden and built on stilts.',
        englishForPrompt: 'a traditional wooden house in Belize, painted in bright colors like blue and yellow, elevated on stilts, with a zinc roof and a front porch',
        kriolExample: 'Dehn bild dehn haus pahn stilts fi stap di flod.',
        englishExample: 'They built their house on stilts to prevent flooding.'
    },
    {
        kriol: 'hed',
        english: 'head',
        meaning: 'The upper part of the human body, or the front or upper part of the body of an animal, typically separated from the rest of the body by a neck, and containing the brain, mouth, and sense organs.',
        englishForPrompt: 'a profile silhouette of a person\'s head, with lines indicating thoughts or ideas inside',
        kriolExample: 'Mi hed di hot mi.',
        englishExample: 'My head is hurting me.'
    },
    {
        kriol: 'hehr',
        english: 'hear',
        meaning: 'To perceive with the ear the sound made by (someone or something).',
        englishForPrompt: 'a person cupping their ear with their hand, with musical notes and bird icons floating towards them, symbolizing hearing',
        kriolExample: 'Ah ku hehr di bod dehn di sing.',
        englishExample: 'I can hear the birds singing.'
    },
    {
        kriol: 'hen',
        english: 'hen',
        meaning: 'A female bird, especially of a domestic fowl.',
        englishForPrompt: 'a brown hen pecking for food in a grassy yard, with her small, fluffy chicks nearby',
        kriolExample: 'Di hen jos lai wahn fresh ayg.',
        englishExample: 'The hen just laid a fresh egg.'
    },
    {
        kriol: 'hep',
        english: 'help',
        meaning: 'To make it easier for (someone) to do something by offering one\'s services or resources.',
        englishForPrompt: 'one hand reaching down to pull another hand up, symbolizing help and support',
        kriolExample: 'Ku yu hep mi wid dis?',
        englishExample: 'Can you help me with this?'
    },
    {
        kriol: 'hoag-plom',
        english: 'hog plum',
        meaning: 'A small, tart, yellow or red fruit that grows wild in Belize. It is often eaten with salt and pepper.',
        englishForPrompt: 'a small pile of ripe yellow hog plums, a tart Belizean fruit, in a bowl with a side of salt and pepper',
        kriolExample: 'Di pikni dehn di eet hoag-plom wid saal.',
        englishExample: 'The children are eating hog plums with salt.'
    },
    {
        kriol: 'hoal',
        english: 'hold',
        meaning: 'To grasp, carry, or support with one\'s hands.',
        englishForPrompt: 'a pair of hands carefully holding a small, fragile bird\'s nest containing tiny blue eggs',
        kriolExample: 'Hoal dis fi mi, pleez.',
        englishExample: 'Hold this for me, please.'
    },
    {
        kriol: 'how',
        english: 'how',
        meaning: 'In what way or manner; by what means.',
        englishForPrompt: 'a large, stylized question mark with intricate gears and cogs inside it, representing the mechanics of "how" something works',
        kriolExample: 'How yu mek dis rays-ahn-beenz so gud?',
        englishExample: 'How do you make this rice and beans so good?'
    },
    {
        kriol: 'howla mongki',
        english: 'howler monkey',
        meaning: 'A loud primate found in the jungles of Belize, known locally as a "baboon," famous for its deep, guttural howl.',
        englishForPrompt: 'a black howler monkey, known as a "baboon" in Belize, sitting high in a tree and calling out',
        kriolExample: 'If yu go da di Baboon Sanctuary, yu wahn hehr di howla mongki dehn.',
        englishExample: 'If you go to the Baboon Sanctuary, you will hear the howler monkeys.'
    },
    {
        kriol: 'hudut',
        english: 'hudut',
        meaning: 'A traditional Garifuna dish made from mashed plantains (both green and ripe) served with a savory fish stew cooked in coconut milk.',
        englishForPrompt: 'a traditional Garifuna meal of hudut, featuring a bowl of rich coconut fish stew next to a ball of mashed plantain, served in a rustic bowl',
        kriolExample: 'Hudut da wahn speshality a di Garifuna peepl.',
        englishExample: 'Hudut is a specialty of the Garifuna people.'
    },
    {
        kriol: 'hungry',
        english: 'hungry',
        meaning: 'Feeling or displaying the need for food.',
        englishForPrompt: 'an illustration of a person with a thought bubble above their head containing a delicious plate of Belizean food',
        kriolExample: 'Ah feel hungry, mek wi go eet.',
        englishExample: 'I feel hungry, let\'s go eat.'
    },
    {
        kriol: 'if',
        english: 'if',
        meaning: 'Introducing a conditional clause.',
        englishForPrompt: 'a crossroads with two paths, one sunny and one rainy, with a large question mark standing at the intersection, symbolizing a choice or condition',
        kriolExample: 'If ih rayn, wi kyaahn go da di beech.',
        englishExample: 'If it rains, we can\'t go to the beach.'
    },
    {
        kriol: 'ih',
        english: 'he / she / it / his / her / its',
        meaning: 'A gender-neutral third-person pronoun for subject and possession.',
        englishForPrompt: 'a simple, elegant silhouette of a person that is gender-neutral',
        kriolExample: 'Ih daata priti.',
        englishExample: 'His/Her daughter is pretty.'
    },
    {
        kriol: 'in',
        english: 'in',
        meaning: 'Expressing the situation of something that is or appears to be enclosed or surrounded by something else.',
        englishForPrompt: 'a colorful fish swimming inside a simple, clear glass fishbowl',
        kriolExample: 'Di milk de in di afrij.',
        englishExample: 'The milk is in the refrigerator.'
    },
    {
        kriol: 'intu',
        english: 'into',
        meaning: 'Expressing movement or action with the result that someone or something becomes enclosed or surrounded by something else.',
        englishForPrompt: 'a hand dropping a coin into a piggy bank slot',
        kriolExample: 'Di bwai jomp intu di riva.',
        englishExample: 'The boy jumped into the river.'
    },
    {
        kriol: 'it',
        english: 'it',
        meaning: 'Used to refer to a thing previously mentioned or easily identified.',
        englishForPrompt: 'an arrow pointing to a simple object like an apple on a table',
        kriolExample: 'It da wahn priti day.',
        englishExample: 'It is a pretty day.'
    },
    {
        kriol: 'iz',
        english: 'is',
        meaning: 'Third person singular present of be.',
        englishForPrompt: 'a mathematical equals sign (=) made of two sticks on the ground',
        kriolExample: 'Shee iz mi sista.',
        englishExample: 'She is my sister.'
    },
    {
        kriol: 'jagwa',
        english: 'jaguar',
        meaning: 'A large cat of tropical America, that has a tawny-yellow coat with black spots. The Cockscomb Basin in Belize is a jaguar preserve.',
        englishForPrompt: 'a powerful jaguar silently stalking through the dense, green undergrowth of the Belizean rainforest at night',
        kriolExample: 'Di jagwa da di king a di jongl.',
        englishExample: 'The jaguar is the king of the jungle.'
    },
    {
        kriol: 'jelifiish',
        english: 'jellyfish',
        meaning: 'A free-swimming marine animal with a gelatinous, umbrella-shaped bell and trailing tentacles.',
        englishForPrompt: 'a translucent jellyfish pulsing through the clear waters of the Belize Barrier Reef',
        kriolExample: 'Bee kyaaful, di jelifiish wahn sting yu.',
        englishExample: 'Be careful, the jellyfish will sting you.'
    },
    {
        kriol: 'jelos',
        english: 'jealous',
        meaning: 'Feeling or showing envy of someone or their achievements and advantages.',
        englishForPrompt: 'a person looking with envy at what another person has, representing the feeling of jealousy',
        kriolExample: 'Ih get jelos wen ih see ih fren nyoo gari.',
        englishExample: 'He got jealous when he saw his friend\'s new car.'
    },
    {
        kriol: 'jok',
        english: 'choke',
        meaning: 'To have severe difficulty in breathing because of a constricted or obstructed throat or a lack of air.',
        englishForPrompt: 'a person clutching their throat with a distressed expression, indicating they are choking',
        kriolExample: 'Di food go dong di rang way an mek ah jok.',
        englishExample: 'The food went down the wrong way and made me choke.'
    },
    {
        kriol: 'jomp',
        english: 'jump',
        meaning: 'To push oneself off a surface and into the air by using the muscles in one\'s legs and feet.',
        englishForPrompt: 'a joyful child captured in mid-air, jumping off a wooden dock into the clear blue water of a Belizean river',
        kriolExample: 'Di lee bwai jomp wid jai.',
        englishExample: 'The little boy jumped with joy.'
    },
    {
        kriol: 'jonga',
        english: 'crayfish / shrimp',
        meaning: 'A small freshwater crustacean resembling a small lobster. Also used to refer to shrimp.',
        englishForPrompt: 'a small pile of fresh pink shrimp on a bed of ice at a fish market in Belize',
        kriolExample: 'Wi ketch sohn jonga da di krik.',
        englishExample: 'We caught some crayfish at the creek.'
    },
    {
        kriol: 'jon-di-konu',
        english: 'John Canoe',
        meaning: 'A traditional Kriol Christmas celebration with costumed dancers and musicians who go from house to house performing.',
        englishForPrompt: 'a vibrant John Canoe dancer in Belize wearing a colorful costume with a tall headdress, a wire-mesh mask, and rattling shells tied to their knees, dancing in the street during Christmas',
        kriolExample: 'Evry Krismus, di jon-di-konu dehn com dans da wi yaad.',
        englishExample: 'Every Christmas, the John Canoe dancers come and dance in our yard.'
    },
    {
        kriol: 'jos',
        english: 'just',
        meaning: 'Exactly. Or, very recently; in the immediate past.',
        englishForPrompt: 'a clock face with the minute hand having just ticked past the hour, with a small "sparkle" to indicate the recent moment',
        kriolExample: 'Ah jos don eet.',
        englishExample: 'I just finished eating.'
    },
    {
        kriol: 'jres',
        english: 'dress',
        meaning: 'A one-piece garment for a woman or girl that covers the body and extends down over the legs.',
        englishForPrompt: 'a simple, colorful summer dress with a floral pattern hanging on a clothesline to dry in the Belizean breeze',
        kriolExample: 'Shee buy wahn nyoo jres fi di paaty.',
        englishExample: 'She bought a new dress for the party.'
    },
    {
        kriol: 'jroog',
        english: 'jug',
        meaning: 'A large container with a handle and a lip, used for holding and pouring liquids.',
        englishForPrompt: 'a large glass jug filled with cool water and slices of lime, with condensation on the outside',
        kriolExample: 'Ful op di jroog wid kool wata.',
        englishExample: 'Fill up the jug with cool water.'
    },
    {
        kriol: 'jrool',
        english: 'jewel / jewelry',
        meaning: 'A personal ornament, such as a necklace, ring, or bracelet, that is typically made from or contains jewels and precious metal.',
        englishForPrompt: 'a simple piece of jewelry, like a necklace with a jade pendant, a stone significant in Maya culture, resting on a dark surface',
        kriolExample: 'Dat nekless da wahn priti pees a jrool.',
        englishExample: 'That necklace is a pretty piece of jewelry.'
    },
    {
        kriol: 'kaaf',
        english: 'calf',
        meaning: 'A young bovine animal.',
        englishForPrompt: 'a young calf with big brown eyes, standing next to its mother cow in a green pasture in Belize',
        kriolExample: 'Di mama kau di protek ih lee kaaf.',
        englishExample: 'The mother cow is protecting her little calf.'
    },
    {
        kriol: 'kaakroch',
        english: 'cockroach',
        meaning: 'A beetle-like insect with long antennae and a flattened body, some species of which are common household pests.',
        englishForPrompt: 'a large tropical cockroach on a wooden surface in a dimly lit room',
        kriolExample: 'Ah si wahn big kaakroch di ron unda di afrij.',
        englishExample: 'I saw a big cockroach run under the refrigerator.'
    },
    {
        kriol: 'kaal',
        english: 'call',
        meaning: 'To cry out (a word or words); shout.',
        englishForPrompt: 'a person with their hands cupped around their mouth, shouting out into a Belizean valley',
        kriolExample: 'Kaal mi wen yu get hoam.',
        englishExample: 'Call me when you get home.'
    },
    {
        kriol: 'kaan',
        english: 'can\'t / cannot',
        meaning: 'Contraction of cannot.',
        englishForPrompt: 'a large red "X" superimposed over an image of a person trying to lift an impossibly heavy rock',
        kriolExample: 'Ah kaan hyaa yu.',
        englishExample: 'I can\'t hear you.'
    },
    {
        kriol: 'kaas',
        english: 'cost',
        meaning: 'An amount that has to be paid or spent to buy or obtain something.',
        englishForPrompt: 'a price tag with a Belize dollar sign ($) and a question mark on it, attached to a basket of fruit',
        kriolExample: 'How much dis kaas?',
        englishExample: 'How much does this cost?'
    },
    {
        kriol: 'kaat',
        english: 'cart',
        meaning: 'A strong open vehicle with two or four wheels, typically used for carrying goods.',
        englishForPrompt: 'a rustic wooden handcart, used for selling fruit or snacks on the street in a Belizean town',
        kriolExample: 'Di man push ih kaat ful a koknat dong di street.',
        englishExample: 'The man pushed his cart full of coconuts down the street.'
    },
    {
        kriol: 'kain',
        english: 'cane / sugarcane',
        meaning: 'The tall, perennial grass that is a major source of sugar.',
        englishForPrompt: 'a tall field of sugar cane in northern Belize, with a close-up of a cut stalk showing its fibrous interior',
        kriolExample: 'Dehn kot di kain fi mek shuga.',
        englishExample: 'They cut the cane to make sugar.'
    },
    {
        kriol: 'kandl',
        english: 'candle',
        meaning: 'A cylinder of wax with a central wick which is lit to produce light as it burns.',
        englishForPrompt: 'a simple white candle burning with a steady, warm yellow flame in a dark room, dripping wax down its side',
        kriolExample: 'Di blakout hapm, so wi hafu lait wahn kandl.',
        englishExample: 'The blackout happened, so we had to light a candle.'
    },
    {
        kriol: 'karembowla',
        english: 'starfruit',
        meaning: 'A waxy, yellow-green fruit that is shaped like a five-pointed star when cut across the middle.',
        englishForPrompt: 'a ripe yellow starfruit from Belize, with one fruit sliced open to clearly show its distinctive star shape, resting on a wooden table',
        kriolExample: 'Di karembowla jroos sweet an refreshin.',
        englishExample: 'The starfruit juice is sweet and refreshing.'
    },
    {
        kriol: 'kasava',
        english: 'cassava',
        meaning: 'A starchy root vegetable, also known as yucca, which is a staple food in Belize. It is used to make dishes like cassava bread (ereba).',
        englishForPrompt: 'a pile of freshly harvested cassava roots with their dark brown bark and white flesh, alongside a piece of traditional Garifuna cassava bread (ereba)',
        kriolExample: 'Wi mek ereba fram di kasava root.',
        englishExample: 'We make cassava bread from the cassava root.'
    },
    {
        kriol: 'kasko',
        english: 'cashew',
        meaning: 'A tropical evergreen tree that produces the cashew seed and the cashew apple, widely grown in Belize.',
        englishForPrompt: 'a ripe, red and yellow cashew fruit (cashew apple) with the grey cashew nut attached, growing on a tree in Belize',
        kriolExample: 'Wi roas di kasko not ahn mek wayn fram di kasko froolt.',
        englishExample: 'We roast the cashew nuts and make wine from the cashew fruit.'
    },
    {
        kriol: 'ketch',
        english: 'catch',
        meaning: 'To intercept and hold (something which has been thrown, propelled, or dropped).',
        englishForPrompt: 'a Belizean fisherman successfully catching a fish on a handline, pulling it out of the water',
        kriolExample: 'Ah ketch wahn big fish dis maanin.',
        englishExample: 'I caught a big fish this morning.'
    },
    {
        kriol: 'kech',
        english: 'catch',
        meaning: 'To intercept and hold something that has been thrown, propelled, or is falling.',
        englishForPrompt: 'a pair of hands catching a baseball in a leather glove',
        kriolExample: 'Try kech di baal!',
        englishExample: 'Try to catch the ball!'
    },
    {
        kriol: 'kip',
        english: 'keep',
        meaning: 'To have or retain possession of.',
        englishForPrompt: 'a person carefully placing a treasured seashell into a wooden keepsake box',
        kriolExample: 'Yu ku kip di chaynj.',
        englishExample: 'You can keep the change.'
    },
    {
        kriol: 'klaim',
        english: 'climb',
        meaning: 'To go up or come up (a slope, incline, or staircase), especially by using the feet and sometimes the hands.',
        englishForPrompt: 'a person climbing the steep stone steps of a Maya temple like Xunantunich in Belize',
        kriolExample: 'Di lee bwai di klaim di mango chree.',
        englishExample: 'The little boy is climbing the mango tree.'
    },
    {
        kriol: 'klas',
        english: 'class',
        meaning: 'A course of instruction.',
        englishForPrompt: 'a Belizean classroom with a teacher pointing to a blackboard and students sitting at desks',
        kriolExample: 'Ah gat klas dis aaftanoon.',
        englishExample: 'I have class this afternoon.'
    },
    {
        kriol: 'kleen',
        english: 'clean',
        meaning: 'Free from dirt, marks, or stains.',
        englishForPrompt: 'a sparkling clean glass plate, so clean it reflects the light',
        kriolExample: 'Mek shoar yu han dehn kleen.',
        englishExample: 'Make sure your hands are clean.'
    },
    {
        kriol: 'kloaz',
        english: 'close',
        meaning: 'To move (a door, window, or lid) so as to cover an opening.',
        englishForPrompt: 'a hand gently closing a rustic wooden window with shutters',
        kriolExample: 'Kloaz di doa, pleez.',
        englishExample: 'Close the door, please.'
    },
    {
        kriol: 'koaan',
        english: 'corn',
        meaning: 'A tall cereal grass that yields large grains, or kernels, on a cob. A staple food in Belize.',
        englishForPrompt: 'a fresh ear of yellow corn, partially shucked, resting on a traditional Maya grinding stone (metate)',
        kriolExample: 'Mek wi mek sohn hat koaan tatya.',
        englishExample: "Let's make some hot corn tortillas."
    },
    {
        kriol: 'koakoa',
        english: 'cacao',
        meaning: 'The dried seeds from which cocoa and chocolate are made. Cacao farming is a tradition in southern Belize.',
        englishForPrompt: 'a ripe yellow cacao pod hanging from a tree on a farm in southern Belize, with dried cacao beans nearby',
        kriolExample: 'Dehn mek di bes chaklit fram Bileez koakoa.',
        englishExample: 'They make the best chocolate from Belize cacao.'
    },
    {
        kriol: 'koal',
        english: 'cold',
        meaning: 'Of or at a low or relatively low temperature, especially when compared with the human body.',
        englishForPrompt: 'a tall glass of water filled with ice cubes, with heavy condensation on the outside',
        kriolExample: 'Di wata feel koal.',
        englishExample: 'The water feels cold.'
    },
    {
        kriol: 'kohoon',
        english: 'cohune palm',
        meaning: 'A palm tree native to Belize, known for its large fronds used for thatching roofs and its nuts which produce a valuable oil.',
        englishForPrompt: 'a tall cohune palm tree with its large, feathery fronds, growing in the Belizean jungle, with a pile of cohune nuts at its base',
        kriolExample: 'Dehn yooz di kohoon leef fi thatch di rosh-haus.',
        englishExample: 'They use the cohune leaves to thatch the bush-house.'
    },
    {
        kriol: 'koknat',
        english: 'coconut',
        meaning: 'The large, oval, brown seed of a tropical palm, consisting of a hard shell lined with edible white flesh.',
        englishForPrompt: 'a brown coconut, split open to show the white flesh, resting on a sandy Belizean beach',
        kriolExample: 'Ah wahn chree green koknat fi mek wata.',
        englishExample: 'I want three green coconuts to make coconut water.'
    },
    {
        kriol: 'koknat aiel',
        english: 'coconut oil',
        meaning: 'An edible oil extracted from the kernel or meat of mature coconuts.',
        englishForPrompt: 'a clear glass jar of pure, white coconut oil, with a spoon resting beside it on a rustic wooden table',
        kriolExample: 'Shee yooz koknat aiel fi cook an fi ih skin.',
        englishExample: 'She uses coconut oil for cooking and for her skin.'
    },
    {
        kriol: 'kom',
        english: 'come',
        meaning: 'To move or travel toward or into a place thought of as near or familiar to the speaker.',
        englishForPrompt: 'an open doorway with a welcome mat, inviting someone to "come" inside',
        kriolExample: 'Kom ya, mek ah tel yu sohnting.',
        englishExample: 'Come here, let me tell you something.'
    },
    {
        kriol: 'kongk',
        english: 'conch',
        meaning: 'A large sea snail with a beautiful, spiral shell. The meat is a popular delicacy in Belize, used in ceviche, fritters, and soup.',
        englishForPrompt: 'a vibrant pink and orange queen conch shell resting on the white sand of a Belizean beach, with the clear turquoise Caribbean Sea in the background',
        kriolExample: 'Nothn biit fresh kongk ceviche pahn wahn hat day.',
        englishExample: 'Nothing beats fresh conch ceviche on a hot day.'
    },
    {
        kriol: 'kot',
        english: 'cut',
        meaning: 'To make an opening, incision, or wound in (something) with a sharp-edged tool or object.',
        englishForPrompt: 'a chef\'s knife cleanly slicing through a ripe red tomato on a wooden cutting board',
        kriolExample: 'Kot di aniyan eena lee pees.',
        englishExample: 'Cut the onion into little pieces.'
    },
    {
        kriol: 'kotal',
        english: 'coatimundi',
        meaning: 'A mammal related to the raccoon, with a long snout and a long tail it often holds erect. They are often seen in groups in the Belizean jungle.',
        englishForPrompt: 'a curious white-nosed coatimundi (kotal) with its long snout and ringed tail, foraging for food on the floor of the Belizean rainforest',
        kriolExample: 'Wahn hoal gruup a kotal jos kohn chroo di yaad.',
        englishExample: 'A whole group of coatimundis just came through the yard.'
    },
    {
        kriol: 'kraab',
        english: 'crab',
        meaning: 'A crustacean with a broad carapace and five pairs of legs. Blue crabs are common in Belize.',
        englishForPrompt: 'a Belizean blue crab walking sideways on a sandy beach near mangrove roots',
        kriolExample: 'Wi go ketch kraab da nait.',
        englishExample: 'We are going to catch crabs at night.'
    },
    {
        kriol: 'kraabu',
        english: 'craboo',
        meaning: 'A small, yellow, pungent fruit that grows on a tree, often eaten stewed or used in wine.',
        englishForPrompt: 'a bowl of small, yellow craboo fruit, a unique and pungent Belizean delicacy',
        kriolExample: 'Di kraabu dehn raip ahn redi fi mek wayn.',
        englishExample: 'The craboo fruits are ripe and ready for making wine.'
    },
    {
        kriol: 'krai',
        english: 'cry',
        meaning: 'To shed tears, typically as an expression of distress, pain, or sorrow.',
        englishForPrompt: 'a close-up of an eye with a single tear rolling down the cheek',
        kriolExample: 'Di beebi di krai fi ih mama.',
        englishExample: 'The baby is crying for its mother.'
    },
    {
        kriol: 'krik',
        english: 'creek',
        meaning: 'A small stream or narrow river, often a cool and refreshing place to swim in the Belizean countryside.',
        englishForPrompt: 'a clear, cool creek flowing over smooth stones in the middle of a lush Belizean jungle, with sunlight filtering through the trees',
        kriolExample: 'Let’s go swim in the creek to cool off.',
        englishExample: 'Mek wi go swim da di krik fi kool aff.'
    },
    {
        kriol: 'kriol aawa',
        english: 'Creole hour',
        meaning: 'A humorous cultural term referring to the tendency to be fashionably late or for events to start later than scheduled.',
        englishForPrompt: 'a wall clock with its hands moving slowly, representing the relaxed concept of time known as "Kriol hour" or being late',
        kriolExample: 'Di paaty staat at 8, bot yu noa, Kriol aawa, so wi reech roun 9.',
        englishExample: 'The party starts at 8, but you know, Creole hour, so we\'ll arrive around 9.'
    },
    {
        kriol: 'krofi',
        english: 'croaker (fish)',
        meaning: 'A type of fish known for the drumming or croaking sound it makes. It is a common fish caught and eaten in Belize.',
        englishForPrompt: 'a freshly caught croaker fish, with silvery scales, lying on a wooden dock next to a fishing line',
        kriolExample: 'Wi fry op di krofi wid sohn onyan ahn pepa.',
        englishExample: 'We fried up the croaker fish with some onion and pepper.'
    },
    {
        kriol: 'ku',
        english: 'can / could',
        meaning: 'To be able to.',
        englishForPrompt: 'a graphic of a muscular arm flexing, symbolizing ability and power ("can do it")',
        kriolExample: 'Ah ku hep yu wid dat.',
        englishExample: 'I can help you with that.'
    },
    {
        kriol: 'kunu',
        english: 'canoe',
        meaning: 'A narrow boat with pointed ends, propelled by a paddle. Often used for river travel in Belize.',
        englishForPrompt: 'a traditional dugout canoe, known as a kunu, gliding silently on a calm, jungle-lined river in Belize at dawn',
        kriolExample: 'Dehn padl di kunu op di Makal Riva.',
        englishExample: 'They paddled the canoe up the Macal River.'
    },
    {
        kriol: 'kworel',
        english: 'quarrel / argue',
        meaning: 'To have an angry argument or disagreement.',
        englishForPrompt: 'two illustrated characters facing away from each other with their arms crossed and angry expressions',
        kriolExample: 'Di tuu a dehn di kworel oava nothn.',
        englishExample: 'The two of them are quarreling over nothing.'
    },
    {
        kriol: 'laaf',
        english: 'laugh',
        meaning: 'To make the spontaneous sounds and movements of the face and body that are the instinctive expressions of lively amusement.',
        englishForPrompt: 'a close-up portrait of a person with their head tilted back, laughing heartily and joyfully',
        kriolExample: 'Ih tel wahn jook an mek evrybady laaf.',
        englishExample: 'He told a joke and made everybody laugh.'
    },
    {
        kriol: 'laas',
        english: 'lost',
        meaning: 'Unable to find one\'s way; not knowing one\'s whereabouts.',
        englishForPrompt: 'a person standing at a crossroads with multiple confusing signs, looking puzzled and lost',
        kriolExample: 'Ah tink wi laas.',
        englishExample: 'I think we are lost.'
    },
    {
        kriol: 'laayn',
        english: 'lion',
        meaning: 'A large carnivorous feline of Africa and India, having a tawny coat with a shaggy mane in the male. Used in folklore, though not native to Belize.',
        englishForPrompt: 'a majestic lion with a full mane, as depicted in a storybook or folklore',
        kriolExample: 'Eena di stori, di laayn da di king a di jongl.',
        englishExample: 'In the story, the lion is the king of the jungle.'
    },
    {
        kriol: 'laik',
        english: 'like / as',
        meaning: 'To find agreeable, enjoyable, or satisfactory. Also used for comparison.',
        englishForPrompt: 'a large heart symbol with a thumbs-up icon inside it, representing the feeling of liking something',
        kriolExample: 'Ah laik how yu sing.',
        englishExample: 'I like how you sing.'
    },
    {
        kriol: 'lait',
        english: 'light',
        meaning: 'The natural agent that stimulates sight and makes things visible.',
        englishForPrompt: 'a single lightbulb brightly illuminated against a dark background',
        kriolExample: 'Ton aan di lait, pleez.',
        englishExample: 'Turn on the light, please.'
    },
    {
        kriol: 'laithaus',
        english: 'lighthouse',
        meaning: 'A tower containing a beacon light to warn or guide ships at sea, like the Baron Bliss Lighthouse in Belize City.',
        englishForPrompt: 'the iconic Baron Bliss Lighthouse in Belize City, a small white and red lighthouse standing at the edge of the sea against a sunset sky',
        kriolExample: 'Di laithaus de fi gaid di ship dehn intu di haaba.',
        englishExample: 'The lighthouse is there to guide the ships into the harbor.'
    },
    {
        kriol: 'lamp',
        english: 'lamp',
        meaning: 'A device for giving light, either one consisting of an electric bulb together with its holder and shade, or one burning gas or oil.',
        englishForPrompt: 'an old-fashioned kerosene lamp with a glass chimney, providing a warm, flickering glow in a dark room',
        kriolExample: 'Wen di lait go owt, wi yooz di lamp.',
        englishExample: 'When the lights go out, we use the lamp.'
    },
    {
        kriol: 'lan',
        english: 'land',
        meaning: 'The part of the earth\'s surface that is not covered by water.',
        englishForPrompt: 'a beautiful landscape shot of the green, rolling hills of the Cayo District in Belize',
        kriolExample: 'Dis da fi wi lan.',
        englishExample: 'This is our land.'
    },
    {
        kriol: 'lang',
        english: 'long',
        meaning: 'Measuring a great distance from end to end.',
        englishForPrompt: 'a very long, straight road stretching to the horizon in the Belizean countryside',
        kriolExample: 'Dat da wahn lang riva.',
        englishExample: 'That is a long river.'
    },
    {
        kriol: 'layda',
        english: 'ladder',
        meaning: 'A piece of equipment consisting of a series of bars or steps between two upright lengths of wood, metal, or rope, used for climbing up or down something.',
        englishForPrompt: 'a simple wooden ladder leaning against the side of a traditional Belizean house',
        kriolExample: 'Ih yooz di layda fi get pahn tap a di roof.',
        englishExample: 'He used the ladder to get on top of the roof.'
    },
    {
        kriol: 'layn',
        english: 'line / rope',
        meaning: 'A length of cord, rope, wire, or other material serving a particular purpose.',
        englishForPrompt: 'a taut clothesline strung between two posts in a Belizean yard, with colorful clothes held by clothespins',
        kriolExample: 'Hang op di wet kloaz pahn di layn.',
        englishExample: 'Hang up the wet clothes on the line.'
    },
    {
        kriol: 'layta',
        english: 'lighter',
        meaning: 'A small portable device for producing a flame, used for lighting cigarettes, candles, or fires.',
        englishForPrompt: 'a simple disposable plastic lighter creating a small flame',
        kriolExample: 'Yu ga wahn layta ah ku bara?',
        englishExample: 'Do you have a lighter I can borrow?'
    },
    {
        kriol: 'leef',
        english: 'leaf',
        meaning: 'A flattened structure of a higher plant, typically green and blade-like, that is attached to a stem directly or via a stalk.',
        englishForPrompt: 'a large, vibrant green tropical leaf with prominent veins, with a few drops of water on its surface',
        kriolExample: 'Di leef dehn di faal affa di chree.',
        englishExample: 'The leaves are falling off the tree.'
    },
    {
        kriol: 'lefa',
        english: 'leftover food',
        meaning: 'Food remaining after the rest has been eaten.',
        englishForPrompt: 'a plate of leftover Belizean rice and beans and stew chicken, covered with plastic wrap in a refrigerator',
        kriolExample: 'Ah wahn eet di lefa fi mi dinna.',
        englishExample: 'I will eat the leftovers for my dinner.'
    },
    {
        kriol: 'len',
        english: 'lend',
        meaning: 'To grant to (someone) the use of (something) on the understanding that it shall be returned.',
        englishForPrompt: 'one hand offering a book to another hand, which is ready to receive it, symbolizing the act of lending',
        kriolExample: 'Ku yu len mi faiv daala?',
        englishExample: 'Can you lend me five dollars?'
    },
    {
        kriol: 'let',
        english: 'let',
        meaning: 'To not prevent or forbid; allow.',
        englishForPrompt: 'a hand opening a birdcage, allowing a colorful bird to fly free',
        kriolExample: 'Let mi shoa yu sohnting.',
        englishExample: 'Let me show you something.'
    },
    {
        kriol: 'lik',
        english: 'lick',
        meaning: 'To pass the tongue over (something) in order to taste, moisten, or clean it.',
        englishForPrompt: 'a child happily licking a brightly colored ice cream cone on a hot day in Belize',
        kriolExample: 'Di daag di lik di plaita kleen.',
        englishExample: 'The dog is licking the plate clean.'
    },
    {
        kriol: 'likl',
        english: 'little / small',
        meaning: 'Small in size, amount, or degree.',
        englishForPrompt: 'a very small object, like a tiny, colorful seashell, held in the palm of a person\'s hand to show its scale',
        kriolExample: 'Dat da jos wahn likl problem.',
        englishExample: 'That is just a little problem.'
    },
    {
        kriol: 'liv',
        english: 'live',
        meaning: 'To remain alive. Also, to make one\'s home in a particular place or with a particular person.',
        englishForPrompt: 'a small, cozy wooden house in a Belizean village with smoke gently rising from the chimney, symbolizing a home where people live',
        kriolExample: 'Ah liv da Bileez.',
        englishExample: 'I live in Belize.'
    },
    {
        kriol: 'lizar',
        english: 'lizard',
        meaning: 'A reptile that typically has a long body and tail, four legs, movable eyelids, and a rough, scaly, or spiny skin.',
        englishForPrompt: 'a common Belizean house gecko, known as a "woodslave," clinging to a brightly painted wall',
        kriolExample: 'Wahn lizar jos ron kraas diซีlin.',
        englishExample: 'A lizard just ran across the ceiling.'
    },
    {
        kriol: 'look',
        english: 'look',
        meaning: 'To direct one\'s gaze toward someone or something or in a specified direction.',
        englishForPrompt: 'a pair of eyes looking through a pair of binoculars at a distant tropical bird',
        kriolExample: 'Look at dat priti bod!',
        englishExample: 'Look at that pretty bird!'
    },
    {
        kriol: 'lov',
        english: 'love',
        meaning: 'An intense feeling of deep affection.',
        englishForPrompt: 'an elderly Belizean couple sitting on a bench, holding hands and smiling at each other, representing enduring love',
        kriolExample: 'Ah lov mi fambli.',
        englishExample: 'I love my family.'
    },
    {
        kriol: 'maabl',
        english: 'marble',
        meaning: 'A small ball of colored glass or similar material used as a toy.',
        englishForPrompt: 'a collection of colorful glass marbles scattered on a wooden floor, with sunlight catching their patterns',
        kriolExample: 'Di pikni dehn lov fi play maabl da skul.',
        englishExample: 'The children love to play marbles at school.'
    },
    {
        kriol: 'maachet',
        english: 'machete',
        meaning: 'A large, heavy knife with a broad blade, used as a tool for cutting through undergrowth and for agricultural purposes.',
        englishForPrompt: 'a sharp, well-used machete with a wooden handle, an essential tool for farmers in Belize, resting on a log in the jungle',
        kriolExample: 'Ih tek ih maachet ahn staat fi chop di bush.',
        englishExample: 'He took his machete and started to chop the bush.'
    },
    {
        kriol: 'maanin',
        english: 'morning',
        meaning: 'The period of time between midnight and noon, especially from sunrise to noon.',
        englishForPrompt: 'a beautiful sunrise over the Caribbean Sea in Belize, with orange and pink clouds reflecting on the calm water',
        kriolExample: 'Gud maanin! How yu du dis maanin?',
        englishExample: 'Good morning! How are you doing this morning?'
    },
    {
        kriol: 'maaya rooinz',
        english: 'Maya ruins',
        meaning: 'Ancient archaeological sites of the Maya civilization, such as Xunantunich or Caracol, featuring stone temples and pyramids.',
        englishForPrompt: 'the ancient stone temple of Xunantunich, a famous Maya ruin in Belize, rising above the jungle canopy under a clear blue sky',
        kriolExample: 'Wi klaim to di tap a di maaya rooinz da Xunantunich.',
        englishExample: 'We climbed to the top of the Maya ruins at Xunantunich.'
    },
    {
        kriol: 'macheel',
        english: 'nail (for wood)',
        meaning: 'A small metal spike with a broadened flat head, driven into wood to join things together or to serve as a hook.',
        englishForPrompt: 'a shiny, new metal nail next to a hammer on a piece of wood',
        kriolExample: 'Ah need wahn neks macheel fi finish di job.',
        englishExample: 'I need another nail to finish the job.'
    },
    {
        kriol: 'madl',
        english: 'model / example',
        meaning: 'A three-dimensional representation of a person or thing or of a proposed structure, typically on a smaller scale than the original.',
        englishForPrompt: 'a miniature, hand-carved wooden dory boat, a model of the real thing, displayed on a shelf',
        kriolExample: 'Ih mek wahn madl a di oal chach owt a machstik.',
        englishExample: 'He made a model of the old church out of matchsticks.'
    },
    {
        kriol: 'mahogani chree',
        english: 'mahogany tree',
        meaning: 'The national tree of Belize, a large tropical tree with hard, reddish-brown wood that is highly valued for furniture.',
        englishForPrompt: 'a towering mahogany tree, the national tree of Belize, in a lush rainforest setting',
        kriolExample: 'Di mahogani chree da wahn saykrid chree fi Bileez.',
        englishExample: 'The mahogany tree is a sacred tree for Belize.'
    },
    {
        kriol: 'mai',
        english: 'my',
        meaning: 'Belonging to or associated with the speaker.',
        englishForPrompt: 'a name tag sticker with "Hello, My Name Is:" written on it, with a blank space for a name',
        kriolExample: 'Dat da mai daag.',
        englishExample: 'That is my dog.'
    },
    {
        kriol: 'maakit',
        english: 'market',
        meaning: 'An open-air space or a large building where goods, especially fresh fruit, vegetables, and local crafts, are sold.',
        englishForPrompt: 'a vibrant, bustling outdoor market in a Belizean town like San Ignacio, with stalls full of colorful tropical fruits, vegetables, and local people shopping',
        kriolExample: 'Evri Satideh wi go da di maakit fi bai fresh vejtabl.',
        englishExample: 'Every Saturday we go to the market to buy fresh vegetables.'
    },
    {
        kriol: 'malanti',
        english: 'manatee',
        meaning: 'A large, gentle aquatic mammal, also known as a sea cow. A less common but also used term for "si-kau".',
        englishForPrompt: 'a gentle West Indian manatee, also known as a malanti or sea cow, grazing on seagrass in the clear, shallow turquoise waters of a Belizean cay',
        kriolExample: 'Wi si wahn big malanti swim sloali bai.',
        englishExample: 'We saw a big manatee swim slowly by.'
    },
    {
        kriol: 'man',
        english: 'man',
        meaning: 'An adult male human being.',
        englishForPrompt: 'a portrait of a middle-aged Belizean man with a friendly expression and a straw hat',
        kriolExample: 'Dat man da wahn haad werka.',
        englishExample: 'That man is a hard worker.'
    },
    {
        kriol: 'mango',
        english: 'mango',
        meaning: 'A fleshy, oval, yellowish-red tropical fruit with a large seed, which is eaten ripe or used green for pickles or chutneys.',
        englishForPrompt: 'several ripe, colorful Belizean mangoes, showing shades of red, green, and yellow, with one sliced open to reveal its bright orange flesh',
        kriolExample: 'Dis da di taim a di yehr fi sweet mango.',
        englishExample: 'This is the time of year for sweet mangoes.'
    },
    {
        kriol: 'maskita',
        english: 'mosquito',
        meaning: 'A slender long-legged fly with aquatic larvae. The bite of the bloodsucking female can transmit diseases like malaria and dengue fever.',
        englishForPrompt: 'a mosquito resting on a person\'s skin, shown in a macro view, about to bite',
        kriolExample: 'Di maskita dehn bad da nait.',
        englishExample: 'The mosquitoes are bad at night.'
    },
    {
        kriol: 'matras',
        english: 'mattress',
        meaning: 'A fabric case filled with soft, firm, or resilient material, used for sleeping on.',
        englishForPrompt: 'a simple mattress with a clean sheet on it, in a humble but tidy bedroom',
        kriolExample: 'Wi need fi bai wahn nyoo matras.',
        englishExample: 'We need to buy a new mattress.'
    },
    {
        kriol: 'may',
        english: 'may',
        meaning: 'Expressing possibility.',
        englishForPrompt: 'a weather forecast showing a symbol with both a sun and a rain cloud, indicating a possibility of either',
        kriolExample: 'Ih may rayn layta.',
        englishExample: 'It may rain later.'
    },
    {
        kriol: 'may-pol',
        english: 'maypole',
        meaning: 'A tall wooden pole adorned with ribbons, which are woven into a pattern by dancers. This tradition is part of Kriol culture in Belize, especially during May celebrations.',
        englishForPrompt: 'a festive maypole celebration in a Belizean village, with colorfully dressed dancers weaving long, bright ribbons around a tall wooden pole',
        kriolExample: 'Di pikni dehn lov fi dans rown di may-pol.',
        englishExample: 'The children love to dance around the maypole.'
    },
    {
        kriol: 'mayflawa',
        english: 'mayflower',
        meaning: 'A tree that produces beautiful pink flowers during the dry season in Belize, often around May.',
        englishForPrompt: 'a mayflower tree in full bloom with vibrant pink flowers against a clear blue Belizean sky',
        kriolExample: 'Di mayflawa chree dehn luk so priti wen dehn bloom.',
        englishExample: 'The mayflower trees look so pretty when they bloom.'
    },
    {
        kriol: 'me',
        english: 'me',
        meaning: 'Used by a speaker to refer to himself or herself as the object of a verb or preposition.',
        englishForPrompt: 'a person pointing to their own chest with their thumb, in a self-referential gesture',
        kriolExample: 'Gi dat to me.',
        englishExample: 'Give that to me.'
    },
    {
        kriol: 'mek',
        english: 'make',
        meaning: 'To form (something) by putting parts together or combining substances; create.',
        englishForPrompt: 'a pair of hands skillfully kneading dough on a floured wooden board, in the process of making Belizean fry jacks or tortillas',
        kriolExample: 'Shee di mek wahn keyk.',
        englishExample: 'She is making a cake.'
    },
    {
        kriol: 'memba',
        english: 'remember',
        meaning: 'To have in or be able to bring to one\'s mind an awareness of (someone or something that one has seen, known, or experienced in the past).',
        englishForPrompt: 'an illustration of a person\'s head with a bright lightbulb glowing inside, symbolizing a memory or idea',
        kriolExample: 'Ah kyaahn memba ih naym.',
        englishExample: 'I can\'t remember his name.'
    },
    {
        kriol: 'mi',
        english: 'me / my',
        meaning: 'Used by a speaker to refer to himself or herself as the object of a verb or preposition. Also used for possession.',
        englishForPrompt: 'a hand-drawn heart with the word "MI" written inside, symbolizing personal feeling or possession',
        kriolExample: 'Dat da mi buk.',
        englishExample: 'That is my book.'
    },
    {
        kriol: 'miit',
        english: 'meat',
        meaning: 'The flesh of an animal, typically a mammal or bird, as food.',
        englishForPrompt: 'a fresh cut of raw beef on a butcher\'s block, ready to be cooked',
        kriolExample: 'Ah gweyn da di butcher shop fi bai sohn miit.',
        englishExample: 'I am going to the butcher shop to buy some meat.'
    },
    {
        kriol: 'milk',
        english: 'milk',
        meaning: 'An opaque white fluid rich in fat and protein, secreted by female mammals for the nourishment of their young.',
        englishForPrompt: 'a tall glass of fresh, cold white milk on a wooden table',
        kriolExample: 'Di beebi need ih milk.',
        englishExample: 'The baby needs its milk.'
    },
    {
        kriol: 'moa',
        english: 'more',
        meaning: 'A greater or additional amount or degree.',
        englishForPrompt: 'a glass half full of water next to another glass completely full, with a plus sign (+) pointing to the fuller glass',
        kriolExample: 'Ah wahn moa rays-ahn-beenz, pleez.',
        englishExample: 'I want more rice and beans, please.'
    },
    {
        kriol: 'moal',
        english: 'mole / beauty mark',
        meaning: 'A small, dark, congenital spot or blemish on the skin.',
        englishForPrompt: 'a close-up of a person\'s skin showing a small, dark beauty mark or mole',
        kriolExample: 'Shee ga wahn lee moal jos saida ih mout.',
        englishExample: 'She has a little mole just beside her mouth.'
    },
    {
        kriol: 'moni',
        english: 'money',
        meaning: 'A current medium of exchange in the form of coins and banknotes.',
        englishForPrompt: 'a hand holding a few Belizean dollar bills of different denominations',
        kriolExample: 'Ah need fi werk fi mek sohn moni.',
        englishExample: 'I need to work to make some money.'
    },
    {
        kriol: 'mos-melon',
        english: 'muskmelon / cantaloupe',
        meaning: 'A type of melon with a sweet, orange flesh and a netted skin.',
        englishForPrompt: 'a ripe cantaloupe, cut open to reveal its sweet, orange flesh and seeds, on a kitchen counter',
        kriolExample: 'Wahn slais a kool mos-melon sweet pahn wahn hat day.',
        englishExample: 'A slice of cool cantaloupe is sweet on a hot day.'
    },
    {
        kriol: 'mout',
        english: 'mouth',
        meaning: 'The opening in the lower part of the human face, surrounded by the lips, through which food is taken in and from which speech and other sounds are emitted.',
        englishForPrompt: 'a close-up of a person\'s smiling mouth, showing clean teeth and lips',
        kriolExample: 'Open yu mout ahn seh "ah".',
        englishExample: 'Open your mouth and say "ah".'
    },
    {
        kriol: 'naif',
        english: 'knife',
        meaning: 'An instrument composed of a blade fixed into a handle, used for cutting.',
        englishForPrompt: 'a well-used kitchen knife with a wooden handle resting on a wooden cutting board next to a freshly chopped onion',
        kriolExample: 'Bee kyaaful wid dat naif, ih shaap.',
        englishExample: 'Be careful with that knife, it\'s sharp.'
    },
    {
        kriol: 'nait',
        english: 'night',
        meaning: 'The period from sunset to sunrise in each twenty-four hours.',
        englishForPrompt: 'a clear night sky over the Belizean jungle, filled with stars and a bright crescent moon',
        kriolExample: 'Da nait, yu ku hehr di kriket dehn.',
        englishExample: 'At night, you can hear the crickets.'
    },
    {
        kriol: 'nansi-stori',
        english: 'Anansi story / folktale',
        meaning: 'A folktale, especially one from the tradition of Anansi the spider, a trickster hero. Used to refer to any tall tale.',
        englishForPrompt: 'an elder Belizean storyteller sitting with a group of children, animatedly telling a folktale in the evening',
        kriolExample: 'Grani, tel wi wahn nansi-stori bifo bed.',
        englishExample: 'Granny, tell us a folktale before bed.'
    },
    {
        kriol: 'needl',
        english: 'needle',
        meaning: 'A very fine slender piece of polished metal with a point at one end and a hole or eye for thread at the other, used in sewing.',
        englishForPrompt: 'a sewing needle with a white thread passed through its eye, held between two fingers',
        kriolExample: 'Ah need wahn needl fi fix di hoal eena mi shurt.',
        englishExample: 'I need a needle to fix the hole in my shirt.'
    },
    {
        kriol: 'neva',
        english: 'never',
        meaning: 'At no time in the past or future; on no occasion; not ever.',
        englishForPrompt: 'a traffic sign showing a circle with a red line through it, over an image of a person texting and driving, symbolizing "never do this"',
        kriolExample: 'Ah neva been da Spayn.',
        englishExample: 'I have never been to Spain.'
    },
    {
        kriol: 'no',
        english: 'no / not',
        meaning: 'Used to give a negative response. Also used as a negating word.',
        englishForPrompt: 'a bold, red stop sign with the word "NO" written across it in white letters',
        kriolExample: 'No, ah noh wahn non.',
        englishExample: 'No, I don\'t want any.'
    },
    {
        kriol: 'noa',
        english: 'know',
        meaning: 'To have knowledge or understanding of (something).',
        englishForPrompt: 'a stylized human head in profile with a glowing lightbulb inside, symbolizing knowledge and ideas',
        kriolExample: 'Ah noa di ansa.',
        englishExample: 'I know the answer.'
    },
    {
        kriol: 'noaz',
        english: 'nose',
        meaning: 'The part of the face which contains the nostrils and is involved in breathing and smelling.',
        englishForPrompt: 'a close-up profile view of a person\'s nose, with a fragrant flower nearby to suggest the sense of smell',
        kriolExample: 'Mi noaz di ron.',
        englishExample: 'My nose is running.'
    },
    {
        kriol: 'noh',
        english: 'not',
        meaning: 'Used to form the negative of verbs.',
        englishForPrompt: 'a large red X symbol over a picture of a cigarette to signify "do not smoke"',
        kriolExample: 'Ah noh feel gud.',
        englishExample: 'I do not feel good.'
    },
    {
        kriol: 'now',
        english: 'now',
        meaning: 'At the present time or moment.',
        englishForPrompt: 'a clock with an arrow pointing directly to the current time, with the word "NOW" highlighted',
        kriolExample: 'Wi hafu go now.',
        englishExample: 'We have to go now.'
    },
    {
        kriol: 'oal',
        english: 'old',
        meaning: 'Having lived for a long time; no longer young.',
        englishForPrompt: 'a beautifully detailed photograph of an elderly Belizean person\'s hands, showing wrinkles and life experience',
        kriolExample: 'Dat da wahn oal chree.',
        englishExample: 'That is an old tree.'
    },
    {
        kriol: 'oal-wich',
        english: 'old witch',
        meaning: 'A figure in Belizean folklore, often a malevolent character in scary stories told to children.',
        englishForPrompt: 'a shadowy, mysterious old woman in a dark cloak, representing the "oal-wich" from Belizean folklore, in a spooky forest setting',
        kriolExample: 'Dehn seh di oal-wich liv eena da krokid haus.',
        englishExample: 'They say the old witch lives in that crooked house.'
    },
    {
        kriol: 'oava',
        english: 'over',
        meaning: 'Extending directly upward from.',
        englishForPrompt: 'a colorful rainbow arching over a small Belizean village after a rain shower',
        kriolExample: 'Di bod flai oava di haus.',
        englishExample: 'The bird flew over the house.'
    },
    {
        kriol: 'okro',
        english: 'okra',
        meaning: 'A tall plant of the mallow family with long ridged seed pods, eaten as a vegetable.',
        englishForPrompt: 'a pile of fresh green okra pods on a wooden table, with one pod sliced to show its slimy texture and seeds',
        kriolExample: 'Ah no laik how di okro feel slaymi.',
        englishExample: 'I don\'t like how the okra feels slimy.'
    },
    {
        kriol: 'onklo',
        english: 'uncle',
        meaning: 'The brother of one\'s father or mother or the husband of one\'s aunt.',
        englishForPrompt: 'a friendly, middle-aged Belizean man, representing an uncle, showing a young child how to fish by a river',
        kriolExample: 'Mai onklo da wahn fishaman.',
        englishExample: 'My uncle is a fisherman.'
    },
    {
        kriol: 'only',
        english: 'only',
        meaning: 'And no one or nothing more besides; solely or exclusively.',
        englishForPrompt: 'a single, perfect red rose standing alone in a vase, highlighted by a spotlight',
        kriolExample: 'Only wan lee pees a keyk lef.',
        englishExample: 'Only one little piece of cake is left.'
    },
    {
        kriol: 'onyan',
        english: 'onion',
        meaning: 'A swollen edible bulb used as a vegetable, having a pungent taste and smell and composed of several concentric layers.',
        englishForPrompt: 'a yellow onion with its papery skin, with one half cut to show the layers, on a cutting board',
        kriolExample: 'Kot op di onyan fi di soop.',
        englishExample: 'Cut up the onion for the soup.'
    },
    {
        kriol: 'op',
        english: 'up',
        meaning: 'Toward a higher place or position.',
        englishForPrompt: 'a vibrant red arrow pointing upwards against a clear blue sky',
        kriolExample: 'Look op at di skai.',
        englishExample: 'Look up at the sky.'
    },
    {
        kriol: 'open',
        english: 'open',
        meaning: 'To move (a door or window) so as to leave a space allowing access and vision.',
        englishForPrompt: 'a pair of hands opening a rustic wooden window to let in the bright morning sunlight',
        kriolExample: 'Open di winda, pleez.',
        englishExample: 'Open the window, please.'
    },
    {
        kriol: 'or',
        english: 'or',
        meaning: 'Used to link alternatives.',
        englishForPrompt: 'a forked road sign, with one arrow pointing left to a beach and the other arrow pointing right to a jungle, with "OR" in the middle',
        kriolExample: 'Yu wahn tee or kaafi?',
        englishExample: 'Do you want tea or coffee?'
    },
    {
        kriol: 'owt',
        english: 'out',
        meaning: 'Moving or appearing to move away from a particular place, especially one that is enclosed or hidden.',
        englishForPrompt: 'a colorful parrot flying out of an open, empty birdcage',
        kriolExample: 'Mek wi go owt fi dinna.',
        englishExample: 'Let\'s go out for dinner.'
    },
    {
        kriol: 'paak',
        english: 'park',
        meaning: 'A large public garden or area of land used for recreation.',
        englishForPrompt: 'a small town park in Belize with benches, a playground with children playing, and large shade trees',
        kriolExample: 'Let\'s go for a walk in the park.',
        englishExample: 'Mek wi go faa wahn waak da di paak.'
    },
    {
        kriol: 'paas',
        english: 'path / trail',
        meaning: 'A way or track laid down for walking or made by continual treading.',
        englishForPrompt: 'a narrow dirt path winding through the lush, green Belizean jungle with sunlight filtering through the canopy',
        kriolExample: 'Falla di paas chroo di bush.',
        englishExample: 'Follow the path through the bush.'
    },
    {
        kriol: 'paaya',
        english: 'papaya',
        meaning: 'A large, oval, tropical fruit with a sweet, orange-yellow flesh and numerous small black seeds.',
        englishForPrompt: 'a large ripe papaya from Belize, cut in half to show its vibrant orange flesh and a cluster of black seeds',
        kriolExample: 'A fresh slais a paaya gud fi brekfas.',
        englishExample: 'A fresh slice of papaya is good for breakfast.'
    },
    {
        kriol: 'pain',
        english: 'pine tree',
        meaning: 'A coniferous tree, particularly the Caribbean Pine, which dominates the landscape of the Mountain Pine Ridge in Belize.',
        englishForPrompt: 'a Caribbean pine tree standing tall in the grassy landscape of the Mountain Pine Ridge in Belize',
        kriolExample: 'Di hol ayrya kova wid pain chree.',
        englishExample: 'The whole area is covered with pine trees.'
    },
    {
        kriol: 'paip',
        english: 'pipe (for smoking)',
        meaning: 'A tube with a bowl at one end, used for smoking tobacco.',
        englishForPrompt: 'an old-fashioned wooden smoking pipe with a curved stem, resting in an ashtray',
        kriolExample: 'Mai grampa yooz tu smok ih paip pahn di varanda.',
        englishExample: 'My grandpa used to smoke his pipe on the veranda.'
    },
    {
        kriol: 'palas',
        english: 'palace / fancy house',
        meaning: 'The official residence of a sovereign, chief of state, or other exalted person. Used colloquially for any large, impressive house.',
        englishForPrompt: 'a large, well-maintained colonial-style wooden building in Belize City, looking like a palace',
        kriolExample: 'Dat haus so big, ih look laik wahn palas.',
        englishExample: 'That house is so big, it looks like a palace.'
    },
    {
        kriol: 'pamkin',
        english: 'pumpkin',
        meaning: 'A large round yellow-to-orange fruit with thick skin, edible flesh, and many seeds. In Belize, this often refers to the calabaza or West Indian pumpkin.',
        englishForPrompt: 'a round, green and tan West Indian pumpkin, a common ingredient in Belizean soups, sitting on a wooden table',
        kriolExample: 'Wi put pamkin eena di soop fi mek it tik.',
        englishExample: 'We put pumpkin in the soup to make it thick.'
    },
    {
        kriol: 'panades',
        english: 'panades',
        meaning: 'A popular Belizean street food; a deep-fried masa (corn dough) patty filled with seasoned fish, beans, or cheese, served with a pickled onion sauce.',
        englishForPrompt: 'a close-up of crispy, golden-brown Belizean panades filled with fish, served on a plate with a side of spicy onion and habanero sauce',
        kriolExample: 'Gimme chree dala panades wid lotta pepa saas.',
        englishExample: 'Give me three dollars of panades with a lot of pepper sauce.'
    },
    {
        kriol: 'payl',
        english: 'pile',
        meaning: 'A heap of things laid or lying one on top of another.',
        englishForPrompt: 'a large pile of white sand on a construction site, with a shovel stuck in it',
        kriolExample: 'Dehn lef wahn big payl a sand fronta di yaad.',
        englishExample: 'They left a big pile of sand in front of the yard.'
    },
    {
        kriol: 'peewee',
        english: 'peewee (bird)',
        meaning: 'A small, insect-eating bird, a type of flycatcher, known for its simple, whistling call.',
        englishForPrompt: 'a small, greyish-brown Tropical Pewee bird perched on a thin branch in a Belizean forest',
        kriolExample: 'Dat lee peewee di mek lotta naiz.',
        englishExample: 'That little pewee is making a lot of noise.'
    },
    {
        kriol: 'pen',
        english: 'pen',
        meaning: 'An instrument for writing or drawing with ink, typically consisting of a metal nib or ballpoint held in a plastic or metal holder.',
        englishForPrompt: 'a simple blue ballpoint pen writing on a lined piece of paper',
        kriolExample: 'Ah need wahn pen fi sain dis paypa.',
        englishExample: 'I need a pen to sign this paper.'
    },
    {
        kriol: 'pensl',
        english: 'pencil',
        meaning: 'An instrument for writing or drawing, consisting of a thin stick of graphite or a similar solid pigment enclosed in a cylindrical wooden case.',
        englishForPrompt: 'a yellow wooden pencil with an eraser on top, with some shavings next to it',
        kriolExample: 'Di lee bwai di shaapn ih pensl.',
        englishExample: 'The little boy is sharpening his pencil.'
    },
    {
        kriol: 'pepa',
        english: 'pepper',
        meaning: 'Often referring to the habanero pepper in Belize, a very hot chili pepper used to make sauces and season food.',
        englishForPrompt: 'a small bowl of fiery orange and red habanero peppers, a staple ingredient in Belizean cooking, on a rustic wooden table',
        kriolExample: 'Put lee bit a pepa saas pahn mai rays-ahn-beenz.',
        englishExample: 'Put a little bit of pepper sauce on my rice and beans.'
    },
    {
        kriol: 'picha',
        english: 'picture / photo',
        meaning: 'A painting, drawing, or photograph.',
        englishForPrompt: 'an old, faded black-and-white photograph of a Belizean family in a simple wooden frame',
        kriolExample: 'Dat da wahn oal picha a mi grani.',
        englishExample: 'That is an old picture of my grandmother.'
    },
    {
        kriol: 'pik',
        english: 'pick',
        meaning: 'To detach and remove (a flower, fruit, or vegetable) from where it is growing.',
        englishForPrompt: 'a hand gently picking a ripe, red tomato from the vine in a sunny Belizean garden',
        kriolExample: 'Mek wi go pik sohn mango.',
        englishExample: 'Let\'s go pick some mangoes.'
    },
    {
        kriol: 'pikni',
        english: 'children',
        meaning: 'A plural term for young human beings below the age of puberty or below the legal age of majority. A common Kriol term.',
        englishForPrompt: 'a group of happy, diverse Belizean children in school uniforms, playing together in a schoolyard',
        kriolExample: 'Di pikni dehn di mek lotta naiz.',
        englishExample: 'The children are making a lot of noise.'
    },
    {
        kriol: 'pilo',
        english: 'pillow',
        meaning: 'A rectangular cloth bag stuffed with feathers, foam rubber, or other soft materials, used to support the head when lying down.',
        englishForPrompt: 'a soft, white pillow with a clean pillowcase on a neatly made bed',
        kriolExample: 'Ah need wahn sof pilo fi sleep gud.',
        englishExample: 'I need a soft pillow to sleep well.'
    },
    {
        kriol: 'plaita',
        english: 'plate',
        meaning: 'A flat dish, typically circular, from which food is eaten or served.',
        englishForPrompt: 'a classic enamel plate, white with a blue rim, a durable and common type of dinnerware in Belize',
        kriolExample: 'Put di food pahn wahn kleen plaita.',
        englishExample: 'Put the food on a clean plate.'
    },
    {
        kriol: 'play',
        english: 'play',
        meaning: 'To engage in activity for enjoyment and recreation rather than a serious or practical purpose.',
        englishForPrompt: 'a group of Belizean children joyfully playing a game of soccer on a dusty field in their village',
        kriolExample: 'Di pikni dehn di play eena di yaad.',
        englishExample: 'The children are playing in the yard.'
    },
    {
        kriol: 'playn',
        english: 'airplane',
        meaning: 'A powered flying vehicle with fixed wings and a weight greater than that of the air it displaces, driven forward by propellers or jet engines.',
        englishForPrompt: 'a small propeller plane, like a Tropic Air plane used for domestic flights in Belize, on a runway with palm trees in the background',
        kriolExample: 'Di playn jos lan da di airstrip.',
        englishExample: 'The airplane just landed at the airstrip.'
    },
    {
        kriol: 'pleez',
        english: 'please',
        meaning: 'Used in polite requests or questions.',
        englishForPrompt: 'a person\'s hands held together in a polite, prayer-like gesture, asking for something nicely',
        kriolExample: 'Pas di saal, pleez.',
        englishExample: 'Pass the salt, please.'
    },
    {
        kriol: 'plet',
        english: 'braid / plait',
        meaning: 'A single length of hair or other flexible material made up of three or more interlaced strands.',
        englishForPrompt: 'a close-up of a person\'s dark hair being neatly braided into a tight plait',
        kriolExample: 'Shee plet di lee gyal hayr fi skul.',
        englishExample: 'She plaited the little girl\'s hair for school.'
    },
    {
        kriol: 'powda',
        english: 'powder',
        meaning: 'A dry, fine, soft substance, such as flour, dust, or certain cosmetics.',
        englishForPrompt: 'a mound of white baking powder on a wooden spoon, ready to be used in a recipe',
        kriolExample: 'Put wahn teeleespoon a powda eena di miks.',
        englishExample: 'Put one teaspoon of powder in the mix.'
    },
    {
        kriol: 'praanti',
        english: 'plantain',
        meaning: 'A type of cooking banana, which is a staple food in Belize. It can be fried when green (tostones) or ripe (maduros), boiled, or baked.',
        englishForPrompt: 'golden brown, sweet fried ripe plantain slices sizzling in a pan, a classic side dish in Belize',
        kriolExample: 'Fried praanti go gud wid rays-ahn-beenz.',
        englishExample: 'Fried plantain goes well with rice and beans.'
    },
    {
        kriol: 'preza',
        english: 'iron (for clothes)',
        meaning: 'A handheld implement with a flat, heated base, used to smooth clothes, sheets, etc.',
        englishForPrompt: 'an old-fashioned, heavy clothes iron, not electric, resting on an ironing board',
        kriolExample: 'Di preza neva hat enuf.',
        englishExample: 'The iron wasn\'t hot enough.'
    },
    {
        kriol: 'prista',
        english: 'priest',
        meaning: 'An ordained minister of the Catholic, Orthodox, or Anglican Church having the authority to perform certain rites and administer certain sacraments.',
        englishForPrompt: 'a priest in white vestments standing at the altar of a simple wooden church in Belize',
        kriolExample: 'Di prista gi wahn gud serman dis Sande.',
        englishExample: 'The priest gave a good sermon this Sunday.'
    },
    {
        kriol: 'problim',
        english: 'problem',
        meaning: 'A matter or situation regarded as unwelcome or harmful and needing to be dealt with and overcome.',
        englishForPrompt: 'a tangled knot of rope, representing a complex and difficult problem',
        kriolExample: 'Wi gat wahn lee problim ya.',
        englishExample: 'We have a little problem here.'
    },
    {
        kriol: 'pul',
        english: 'pull',
        meaning: 'To exert force on (someone or something), so as to move them toward oneself or the origin of the force.',
        englishForPrompt: 'a person pulling a heavy rope in a game of tug-of-war on a Belizean beach',
        kriolExample: 'Hep mi pul dis tebl.',
        englishExample: 'Help me pull this table.'
    },
    {
        kriol: 'pump',
        english: 'pump (water pump)',
        meaning: 'A mechanical device using suction or pressure to raise or move liquids.',
        englishForPrompt: 'an old-fashioned manual water pump in a rural Belizean village yard, with water flowing from its spout',
        kriolExample: 'Wi hafu get wata fram di pump da di yaad.',
        englishExample: 'We have to get water from the pump in the yard.'
    },
    {
        kriol: 'pupalik',
        english: 'somersault',
        meaning: 'An acrobatic movement in which a person turns head over heels in the air or on the ground and lands on their feet.',
        englishForPrompt: 'a joyful Belizean child doing a perfect somersault on a grassy lawn under a sunny sky',
        kriolExample: 'Di pikni dehn di du pupalik pahn di gras.',
        englishExample: 'The children are doing somersaults on the grass.'
    },
    {
        kriol: 'push',
        english: 'push',
        meaning: 'To exert force on (someone or something), typically with one\'s hand, in order to move them away from oneself or from their previous position.',
        englishForPrompt: 'a pair of hands firmly pushing open a large, heavy wooden door',
        kriolExample: 'Push di doa open.',
        englishExample: 'Push the door open.'
    },
    {
        kriol: 'puss',
        english: 'cat',
        meaning: 'A small domesticated carnivorous mammal with soft fur, a short snout, and retractable claws.',
        englishForPrompt: 'a sleek black cat sitting on a wooden veranda of a Belizean house, attentively watching something',
        kriolExample: 'Di puss di ches wahn rat.',
        englishExample: 'The cat is chasing a rat.'
    },
    {
        kriol: 'put',
        english: 'put',
        meaning: 'To move to or place in a particular position.',
        englishForPrompt: 'a hand carefully placing a book onto a bookshelf',
        kriolExample: 'Put di plaita pahn di tebl.',
        englishExample: 'Put the plate on the table.'
    },
    {
        kriol: 'raat',
        english: 'rat',
        meaning: 'A rodent that resembles a large mouse, typically having a pointed snout and a long, sparsely haired tail.',
        englishForPrompt: 'a large rat peeking out from behind some sacks of grain in a dimly lit storeroom',
        kriolExample: 'Ah tink wahn raat de liv unda di haus.',
        englishExample: 'I think a rat is living under the house.'
    },
    {
        kriol: 'rabit',
        english: 'rabbit',
        meaning: 'A burrowing, plant-eating mammal with long ears, long hind legs, and a short tail.',
        englishForPrompt: 'a brown wild rabbit, or cottontail, nibbling on some grass in a field in Belize',
        kriolExample: 'Wahn rabit jos jomp owt a di bush.',
        englishExample: 'A rabbit just jumped out of the bush.'
    },
    {
        kriol: 'radio',
        english: 'radio',
        meaning: 'The transmission and reception of electromagnetic waves of radio frequency, especially those carrying sound messages.',
        englishForPrompt: 'a vintage portable radio with an antenna, playing music on a table in a Belizean home',
        kriolExample: 'Turn on di radio, mek wi hehr di nyooz.',
        englishExample: 'Turn on the radio, let\'s hear the news.'
    },
    {
        kriol: 'rait',
        english: 'right',
        meaning: 'On, toward, or relating to the side of a human body or of a thing which is to the east when the person or thing is facing north.',
        englishForPrompt: 'a road sign with a bold arrow pointing to the right',
        kriolExample: 'Ton rait at di neks koana.',
        englishExample: 'Turn right at the next corner.'
    },
    {
        kriol: 'rays-ahn-beenz',
        english: 'rice and beans',
        meaning: 'The national dish of Belize, consisting of rice and red beans cooked together in coconut milk.',
        englishForPrompt: 'a delicious plate of Belizean rice and beans, cooked with coconut milk, served with stewed chicken, potato salad, and fried plantain',
        kriolExample: 'Evry Sande da rays-ahn-beenz day.',
        englishExample: 'Every Sunday is rice and beans day.'
    },
    {
        kriol: 'red',
        english: 'red',
        meaning: 'Of a color at the end of the spectrum next to orange and opposite violet, as of blood, fire, or rubies.',
        englishForPrompt: 'a vibrant, fully bloomed red hibiscus flower, a common sight in Belizean gardens',
        kriolExample: 'Di flawa priti ahn red.',
        englishExample: 'The flower is pretty and red.'
    },
    {
        kriol: 'redi',
        english: 'ready',
        meaning: 'In a suitable state for an activity, action, or situation; fully prepared.',
        englishForPrompt: 'a runner at the starting line of a race, in the "ready, set, go" position',
        kriolExample: 'Ah redi fi go.',
        englishExample: 'I am ready to go.'
    },
    {
        kriol: 'redieta',
        english: 'radio',
        meaning: 'An older or more rustic term for a radio, often referring to a larger, stationary tabletop model.',
        englishForPrompt: 'an old, large wooden tabletop radio from the mid-20th century, with a glowing dial',
        kriolExample: 'Grani stil lisn to di redieta evri nait.',
        englishExample: 'Granny still listens to the radio every night.'
    },
    {
        kriol: 'reed',
        english: 'read',
        meaning: 'To look at and comprehend the meaning of (written or printed matter) by mentally interpreting the characters or symbols of which it is composed.',
        englishForPrompt: 'a person relaxing in a hammock under a coconut tree, deeply engrossed in reading a book',
        kriolExample: 'Ah laik fi reed wahn gud buk.',
        englishExample: 'I like to read a good book.'
    },
    {
        kriol: 'res',
        english: 'rest',
        meaning: 'To cease work or movement in order to relax, refresh oneself, or recover strength.',
        englishForPrompt: 'a person sleeping peacefully in a comfortable hammock strung between two palm trees on a Belizean beach',
        kriolExample: 'Tek wahn res, yu look tayad.',
        englishExample: 'Take a rest, you look tired.'
    },
    {
        kriol: 'ribon',
        english: 'ribbon',
        meaning: 'A long, narrow strip of fabric, used for tying something or for decoration.',
        englishForPrompt: 'a spool of bright red ribbon, with a length of it unfurled in a curl',
        kriolExample: 'Shee tai wahn priti ribon eena ih hayr.',
        englishExample: 'She tied a pretty ribbon in her hair.'
    },
    {
        kriol: 'ring',
        english: 'ring',
        meaning: 'A small circular band, typically of precious metal and often set with one or more gemstones, worn on a finger as an ornament or a token of marriage, engagement, or authority.',
        englishForPrompt: 'a simple gold ring worn on a person\'s finger',
        kriolExample: 'Ih gi shee wahn ring wen ih ask ah fi mari ahn.',
        englishExample: 'He gave her a ring when he asked her to marry him.'
    },
    {
        kriol: 'riva',
        english: 'river',
        meaning: 'A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.',
        englishForPrompt: 'a wide, calm river winding through the dense green jungle of Belize, with lush vegetation on its banks',
        kriolExample: 'Wi go swim da di riva evri Sande.',
        englishExample: 'We go swimming at the river every Sunday.'
    },
    {
        kriol: 'ron',
        english: 'run',
        meaning: 'To move at a speed faster than a walk, never having both or all the feet on the ground at the same time.',
        englishForPrompt: 'a person running along a sandy Belizean beach at sunrise, with their feet kicking up sand',
        kriolExample: 'Di daag di ron afta di puss.',
        englishExample: 'The dog is running after the cat.'
    },
    {
        kriol: 'rood',
        english: 'road',
        meaning: 'A wide way leading from one place to another, especially one with a specially prepared surface which vehicles can use.',
        englishForPrompt: 'a dusty, unpaved dirt road running through the Belizean countryside, lined with green bushes',
        kriolExample: 'Di rood get mody wen di rayn faal.',
        englishExample: 'The road gets muddy when the rain falls.'
    },
    {
        kriol: 'roos',
        english: 'rooster',
        meaning: 'A male domestic fowl; a cock.',
        englishForPrompt: 'a colorful rooster with bright red, green, and orange feathers, standing in a yard and crowing at sunrise',
        kriolExample: 'Di roos kroo an wayk mi op dis maanin.',
        englishExample: 'The rooster crowed and woke me up this morning.'
    },
    {
        kriol: 'saaf',
        english: 'soft',
        meaning: 'Easy to mold, cut, compress, or fold; not hard or firm to the touch.',
        englishForPrompt: 'a hand gently pressing into a soft, fluffy white pillow, leaving an indentation',
        kriolExample: 'Dis pilo reeli saaf an komfitabl.',
        englishExample: 'This pillow is really soft and comfortable.'
    },
    {
        kriol: 'saal',
        english: 'salt',
        meaning: 'A white crystalline substance that gives seawater its characteristic taste and is used for seasoning or preserving food.',
        englishForPrompt: 'a small wooden bowl filled with coarse white sea salt, with a few crystals spilled on the table',
        kriolExample: 'Di soop need lee bit moa saal.',
        englishExample: 'The soup needs a little bit more salt.'
    },
    {
        kriol: 'saal-fish',
        english: 'saltfish',
        meaning: 'Cod or other fish that has been preserved by salting and drying, a common ingredient in Belizean breakfast dishes.',
        englishForPrompt: 'a plate of Belizean breakfast with fluffy fry jacks served alongside scrambled eggs and savory sauteed saltfish with onions and tomatoes',
        kriolExample: 'Fry-jak ahn saal-fish da wahn perfet kombinayshan.',
        englishExample: 'Fry jacks and saltfish are a perfect combination.'
    },
    {
        kriol: 'sad',
        english: 'sad',
        meaning: 'Feeling or showing sorrow; unhappy.',
        englishForPrompt: 'a stylized illustration of a rain cloud crying large tears, representing sadness',
        kriolExample: 'Ih feel sad bikaaz ih fren moov weh.',
        englishExample: 'He feels sad because his friend moved away.'
    },
    {
        kriol: 'salbutes',
        english: 'salbutes',
        meaning: 'A popular Belizean food consisting of a puffy, deep-fried corn tortilla topped with shredded chicken, cabbage, tomato, and onion.',
        englishForPrompt: 'a delicious plate of Belizean salbutes, with puffy fried corn tortillas topped with shredded stewed chicken, cabbage slaw, and sliced tomatoes',
        kriolExample: 'Mek wi go buy sohn hat salbutes fram di laydi pahn di kaana.',
        englishExample: "Let's go buy some hot salbutes from the lady on the corner."
    },
    {
        kriol: 'san',
        english: 'sand',
        meaning: 'A loose granular substance, typically pale yellowish brown, resulting from the erosion of siliceous and other rocks and forming a major constituent of beaches, riverbeds, the seabed, and deserts.',
        englishForPrompt: 'fine, white sand on a Belizean beach, with gentle waves washing ashore',
        kriolExample: 'Di pikni dehn di bild wahn san kaasl.',
        englishExample: 'The children are building a sandcastle.'
    },
    {
        kriol: 'saym',
        english: 'same',
        meaning: 'Identical; not different.',
        englishForPrompt: 'two identical twin bananas sitting side-by-side, looking exactly alike',
        kriolExample: 'Wi wear di saym shurt.',
        englishExample: 'We are wearing the same shirt.'
    },
    {
        kriol: 'see',
        english: 'see',
        meaning: 'To perceive with the eyes; discern visually.',
        englishForPrompt: 'a stylized eye with a beam of light extending from it, illuminating a hidden object in the dark',
        kriolExample: 'Ah ku see di ailan fram ya.',
        englishExample: 'I can see the island from here.'
    },
    {
        kriol: 'seed',
        english: 'seed',
        meaning: 'A flowering plant\'s unit of reproduction, capable of developing into another such plant.',
        englishForPrompt: 'a handful of small, dark seeds, like watermelon seeds, resting in the palm of a hand',
        kriolExample: 'Plaant di seed an ih wahn groo intu wahn big chree.',
        englishExample: 'Plant the seed and it will grow into a big tree.'
    },
    {
        kriol: 'seh',
        english: 'say / that',
        meaning: 'To utter words so as to convey information, an opinion, a feeling or intention, or a question. Also used as a conjunction like "that".',
        englishForPrompt: 'a comic book style speech bubble with the word "Seh..." inside, coming from a person\'s mouth',
        kriolExample: 'Ih tel mi seh ih di com.',
        englishExample: 'He told me that he is coming.'
    },
    {
        kriol: 'sel',
        english: 'sell',
        meaning: 'To give or hand over (something) in exchange for money.',
        englishForPrompt: 'a street vendor at a Belizean market stall handing a customer a pineapple in exchange for money',
        kriolExample: 'Shee di sel fry-jak pahn di street.',
        englishExample: 'She is selling fry jacks on the street.'
    },
    {
        kriol: 'sen',
        english: 'send',
        meaning: 'To cause (a letter, package, or message) to go or be taken to a destination.',
        englishForPrompt: 'a paper airplane soaring through the air from one hand towards another distant hand',
        kriolExample: 'Ah wahn sen wahn leta to mi grani.',
        englishExample: 'I will send a letter to my granny.'
    },
    {
        kriol: 'set',
        english: 'set',
        meaning: 'To put, lay, or stand (something) in a specified place or position.',
        englishForPrompt: 'a person carefully setting a dinner table with plates and cutlery',
        kriolExample: 'Set di tebl fi dinna.',
        englishExample: 'Set the table for dinner.'
    },
    {
        kriol: 'shaak',
        english: 'shark',
        meaning: 'A long-bodied marine fish with a cartilaginous skeleton and a prominent dorsal fin. Nurse sharks are common in Shark Ray Alley, Belize.',
        englishForPrompt: 'a gentle nurse shark swimming gracefully over a sandy seabed in the clear turquoise waters of Hol Chan Marine Reserve in Belize',
        kriolExample: 'Wi go swim wid di shaak dehn da Shark Ray Alley.',
        englishExample: 'We went to swim with the sharks at Shark Ray Alley.'
    },
    {
        kriol: 'shaat',
        english: 'short',
        meaning: 'Measuring a small distance from end to end.',
        englishForPrompt: 'two pencils side-by-side, one long and new, and one very short and well-used, to show contrast',
        kriolExample: 'Dat da wahn shaat stik.',
        englishExample: 'That is a short stick.'
    },
    {
        kriol: 'sho',
        english: 'show',
        meaning: 'To allow or cause to be visible.',
        englishForPrompt: 'a person opening their hands to reveal a beautiful butterfly resting in their palms',
        kriolExample: 'Sho mi weh yu buy.',
        englishExample: 'Show me what you bought.'
    },
    {
        kriol: 'shuga',
        english: 'sugar',
        meaning: 'A sweet crystalline substance obtained from various plants, especially sugar cane and sugar beet, used as a sweetener in food and drink.',
        englishForPrompt: 'a stalk of raw sugar cane from Belize, with a few brown sugar crystals piled next to it',
        kriolExample: 'Put lee bit a shuga eena mai tee, pleez.',
        englishExample: 'Put a little bit of sugar in my tea, please.'
    },
    {
        kriol: 'si-kau',
        english: 'manatee',
        meaning: 'A large, gentle aquatic mammal, also known as a sea cow, that inhabits shallow coastal waters and rivers in Belize.',
        englishForPrompt: 'a gentle West Indian manatee, also known as a sea cow, grazing on seagrass in the clear, shallow turquoise waters of a Belizean cay',
        kriolExample: 'Yu ku si di si-kau dehn da Swallow Caye.',
        englishExample: 'You can see the manatees at Swallow Caye.'
    },
    {
        kriol: 'sidong',
        english: 'sit',
        meaning: 'To adopt or be in a position in which one\'s weight is supported by one\'s buttocks rather than one\'s feet and one\'s back is upright.',
        englishForPrompt: 'a person sitting comfortably in a rocking chair on the porch of a Belizean house, relaxing',
        kriolExample: 'Kom sidong an res wahn lee.',
        englishExample: 'Come sit down and rest a little.'
    },
    {
        kriol: 'sing',
        english: 'sing',
        meaning: 'To make musical sounds with the voice.',
        englishForPrompt: 'a person singing into a microphone, with colorful musical notes floating out of their mouth',
        kriolExample: 'Di bod dehn di sing eena di chree.',
        englishExample: 'The birds are singing in the trees.'
    },
    {
        kriol: 'sista',
        english: 'sister',
        meaning: 'A woman or girl who has one or more parents in common with another person.',
        englishForPrompt: 'two Belizean sisters, one older and one younger, walking hand-in-hand and smiling',
        kriolExample: 'Mi sista an me da bes fren.',
        englishExample: 'My sister and I are best friends.'
    },
    {
        kriol: 'skin',
        english: 'skin',
        meaning: 'The thin layer of tissue forming the natural outer covering of the body of a person or animal.',
        englishForPrompt: 'a close-up photograph of human skin, showing the fine details and texture',
        kriolExample: 'Di son wahn bon yu skin.',
        englishExample: 'The sun will burn your skin.'
    },
    {
        kriol: 'skul',
        english: 'school',
        meaning: 'An institution for educating children.',
        englishForPrompt: 'a simple wooden schoolhouse in a rural Belizean village, with children in uniforms playing outside during recess',
        kriolExample: 'Di pikni dehn gaan da skul.',
        englishExample: 'The children have gone to school.'
    },
    {
        kriol: 'skweel',
        english: 'squeal / scream',
        meaning: 'To make a long, high-pitched cry or noise.',
        englishForPrompt: 'a young child with a joyful and surprised expression, letting out a happy squeal at a birthday party',
        kriolExample: 'Di lee gyal skweel wen shee si di presant.',
        englishExample: 'The little girl squealed when she saw the present.'
    },
    {
        kriol: 'sleep',
        english: 'sleep',
        meaning: 'A condition of body and mind which typically recurs for several hours every night, in which the nervous system is inactive, the eyes closed, the postural muscles relaxed, and consciousness practically suspended.',
        englishForPrompt: 'a person sleeping peacefully in a bed, with "Zzz" floating above their head',
        kriolExample: 'Ah need fi go sleep, ah tayad.',
        englishExample: 'I need to go to sleep, I am tired.'
    },
    {
        kriol: 'slo',
        english: 'slow',
        meaning: 'Moving or operating, or designed to do so, only at a low speed; not quick or fast.',
        englishForPrompt: 'a snail slowly crawling along a branch, leaving a shiny trail behind it',
        kriolExample: 'Dis gari di go tu slo.',
        englishExample: 'This car is going too slow.'
    },
    {
        kriol: 'smaal',
        english: 'small',
        meaning: 'Of a size that is less than normal or usual.',
        englishForPrompt: 'a large hand holding a tiny, delicate seashell to show the contrast in size',
        kriolExample: 'Dat da wahn smaal hows.',
        englishExample: 'That is a small house.'
    },
    {
        kriol: 'smel',
        english: 'smell',
        meaning: 'To perceive or detect the odor or scent of (something).',
        englishForPrompt: 'a person with their eyes closed, smelling a fragrant tropical flower with a look of pleasure',
        kriolExample: 'Ah smel di stu chikin fram dong di street.',
        englishExample: 'I can smell the stew chicken from down the street.'
    },
    {
        kriol: 'smail',
        english: 'smile',
        meaning: 'A pleased, kind, or amused facial expression, typically with the corners of the mouth turned up and the front teeth exposed.',
        englishForPrompt: 'a close-up of a person\'s mouth in a wide, happy smile',
        kriolExample: 'Shee ga wahn priti smail.',
        englishExample: 'She has a pretty smile.'
    },
    {
        kriol: 'snek',
        english: 'snake',
        meaning: 'A limbless reptile. Belize is home to many species, including the non-venomous boa constrictor, known locally as a "wowla".',
        englishForPrompt: 'a large boa constrictor snake, known as a "wowla" in Belize, coiled on a thick branch in the jungle, its patterned skin camouflaging it perfectly',
        kriolExample: 'Dat da wahn big wowla snek pahn di rood!',
        englishExample: 'That is a big boa constrictor snake on the road!'
    },
    {
        kriol: 'so',
        english: 'so',
        meaning: 'And for this reason; therefore.',
        englishForPrompt: 'an arrow leading from a picture of a dark raincloud to a picture of a person opening an umbrella, with the word "SO" on the arrow',
        kriolExample: 'Ih mi di rayn, so ah bring mi ambrala.',
        englishExample: 'It was raining, so I brought my umbrella.'
    },
    {
        kriol: 'sohn',
        english: 'some',
        meaning: 'An unspecified amount or number of.',
        englishForPrompt: 'a hand taking a few cookies from a jar full of cookies',
        kriolExample: 'Ah wahn sohn wata, pleez.',
        englishExample: 'I want some water, please.'
    },
    {
        kriol: 'sohnting',
        english: 'something',
        meaning: 'A thing that is unspecified or unknown.',
        englishForPrompt: 'a gift box wrapped in colorful paper and tied with a bow, creating a sense of mystery about what is inside',
        kriolExample: 'Ah gat sohnting fi yu.',
        englishExample: 'I have something for you.'
    },
    {
        kriol: 'son',
        english: 'son',
        meaning: 'A boy or man in relation to his parents.',
        englishForPrompt: 'a Belizean father and his young son fishing together by a river, with the father teaching the son',
        kriolExample: 'Dat da mi son.',
        englishExample: 'That is my son.'
    },
    {
        kriol: 'soop',
        english: 'soup',
        meaning: 'A liquid dish, often made by boiling ingredients in stock. In Belize, popular soups include cow foot soup and conch soup.',
        englishForPrompt: 'a steaming bowl of traditional Belizean cow foot soup with vegetables like cassava, coco yam, and carrots, in a rich broth',
        kriolExample: 'Ah feel fi sohn gud kau fut soop.',
        englishExample: "I'm in the mood for some good cow foot soup."
    },
    {
        kriol: 'sorosi',
        english: 'cerasee',
        meaning: 'A bitter vine, also known as bitter melon, whose leaves and stem are boiled to make a popular medicinal tea in Belize.',
        englishForPrompt: 'a cup of steaming hot cerasee tea, a bitter medicinal drink from Belize, with green cerasee vines next to it',
        kriolExample: 'Mawnin time, mai grampa always jink ih kap a sorosi tee.',
        englishExample: 'In the morning, my grandpa always drinks his cup of cerasee tea.'
    },
    {
        kriol: 'sowa-sap',
        english: 'soursop',
        meaning: 'A large, spiny, green tropical fruit with a sweet, fleshy, white pulp, popular for drinks and ice cream in Belize.',
        englishForPrompt: 'a green, spiky soursop fruit, a popular fruit in Belize, with one section cut open to show the white pulp and black seeds',
        kriolExample: 'Ah lov sowa-sap aiskreem.',
        englishExample: 'I love soursop ice cream.'
    },
    {
        kriol: 'speek',
        english: 'speak',
        meaning: 'To say something in order to convey information, an opinion, or a feeling.',
        englishForPrompt: 'a person standing at a podium, speaking to an audience, with speech bubbles coming from their mouth',
        kriolExample: 'Yu ku speek Kriol?',
        englishExample: 'Can you speak Kriol?'
    },
    {
        kriol: 'spoon',
        english: 'spoon',
        meaning: 'An implement consisting of a small shallow bowl, oval or round, at the end of a handle, used for eating, stirring, and serving food.',
        englishForPrompt: 'a simple metal spoon scooping up a mouthful of Belizean rice and beans from a bowl',
        kriolExample: 'Yooz yuh spoon fi eet yuh soop.',
        englishExample: 'Use your spoon to eat your soup.'
    },
    {
        kriol: 'sta-apl',
        english: 'star apple',
        meaning: 'A sweet, tropical fruit with purple or green skin. When cut horizontally, the core reveals a star shape, giving it its name.',
        englishForPrompt: 'a purple star apple fruit from Belize, cut in half to show the beautiful star-shaped pattern of its seeds and its milky white flesh',
        kriolExample: 'Di sta-apl sweet an ful a milk.',
        englishExample: 'The star apple is sweet and full of milk.'
    },
    {
        kriol: 'staal',
        english: 'stall',
        meaning: 'A stand, booth, or compartment for the sale of goods in a market or large covered area.',
        englishForPrompt: 'a colorful market stall in Belize, laden with fresh fruits, vegetables, and bottles of homemade pepper sauce',
        kriolExample: 'Di laydi pan di kaana gat wahn lee staal.',
        englishExample: 'The lady on the corner has a little stall.'
    },
    {
        kriol: 'stan',
        english: 'stand',
        meaning: 'To have or maintain an upright position, supported by one\'s feet.',
        englishForPrompt: 'a person standing tall and straight on a beach, looking out at the ocean',
        kriolExample: 'Stan op strait.',
        englishExample: 'Stand up straight.'
    },
    {
        kriol: 'staat',
        english: 'start',
        meaning: 'To begin or be reckoned from a particular point in time or space; come into being.',
        englishForPrompt: 'a green "start" button, like one on a computer or machine, being pressed by a finger',
        kriolExample: 'Di race di staat now.',
        englishExample: 'The race is starting now.'
    },
    {
        kriol: 'steel pan',
        english: 'steel pan',
        meaning: 'A musical instrument originating from Trinidad and Tobago, made from an oil drum. It\'s a key part of Caribbean music, including in Belize.',
        englishForPrompt: 'a musician playing a chromatic steel pan drum in Belize, the polished metal surface reflecting the tropical surroundings, creating a joyful island sound',
        kriolExample: 'Di sownd a di steel pan always mek yu feel fi dans.',
        englishExample: 'The sound of the steel pan always makes you feel like dancing.'
    },
    {
        kriol: 'step',
        english: 'step',
        meaning: 'An act or movement of putting one foot in front of the other in walking or running.',
        englishForPrompt: 'a single footprint in the wet sand on a beach, representing one step',
        kriolExample: 'Tek wahn step faawod.',
        englishExample: 'Take one step forward.'
    },
    {
        kriol: 'stik',
        english: 'stick',
        meaning: 'A thin piece of wood that has fallen or been cut from a tree.',
        englishForPrompt: 'a simple, dry tree branch lying on the forest floor',
        kriolExample: 'Di daag bring bak di stik.',
        englishExample: 'The dog brought back the stick.'
    },
    {
        kriol: 'stil',
        english: 'still',
        meaning: 'Not moving or making a sound.',
        englishForPrompt: 'a perfectly calm lake reflecting the surrounding trees like a mirror, representing stillness',
        kriolExample: 'Sidong stil an wayt.',
        englishExample: 'Sit still and wait.'
    },
    {
        kriol: 'stoa',
        english: 'store',
        meaning: 'A place where things are sold; a shop.',
        englishForPrompt: 'the storefront of a small, colorful Belizean grocery store with an "Open" sign on the door',
        kriolExample: 'Ah gweyn da di stoa fi bai sohn bred.',
        englishExample: 'I am going to the store to buy some bread.'
    },
    {
        kriol: 'stoan',
        english: 'stone',
        meaning: 'Hard solid nonmetallic mineral matter of which rock is made.',
        englishForPrompt: 'a stack of smooth, grey river stones balanced on top of each other by a calm Belizean river',
        kriolExample: 'No chro stoan at di bod.',
        englishExample: 'Don\'t throw stones at the bird.'
    },
    {
        kriol: 'stap',
        english: 'stop',
        meaning: 'To cease moving, operating, or doing something.',
        englishForPrompt: 'a bright red octagonal stop sign at a dusty crossroads in a Belizean village',
        kriolExample: 'Stap di gari!',
        englishExample: 'Stop the car!'
    },
    {
        kriol: 'stori',
        english: 'story',
        meaning: 'An account of imaginary or real people and events told for entertainment.',
        englishForPrompt: 'an open storybook with illustrations of Anansi the spider, a classic Belizean folklore character',
        kriolExample: 'Tel mi wahn stori.',
        englishExample: 'Tell me a story.'
    },
    {
        kriol: 'street',
        english: 'street',
        meaning: 'A public road in a city, town, or village, typically with houses and buildings on one or both sides.',
        englishForPrompt: 'a typical street scene in a Belizean town like San Ignacio, with colorful buildings, people walking, and a few cars',
        kriolExample: 'Di pikni dehn di play pahn di street.',
        englishExample: 'The children are playing on the street.'
    },
    {
        kriol: 'swim',
        english: 'swim',
        meaning: 'To propel the body through water by using the limbs.',
        englishForPrompt: 'a person swimming in the crystal clear turquoise water of the Caribbean Sea in Belize',
        kriolExample: 'Mek wi go swim da di reeva.',
        englishExample: 'Let\'s go swim at the river.'
    },
    {
        kriol: 'taak',
        english: 'talk',
        meaning: 'To speak in order to give information or express ideas or feelings; converse or communicate by spoken words.',
        englishForPrompt: 'two people sitting on a porch, engaged in a friendly conversation with speech bubbles above their heads',
        kriolExample: 'Dehn di taak fi owaz.',
        englishExample: 'They have been talking for hours.'
    },
    {
        kriol: 'taal',
        english: 'tall',
        meaning: 'Of great or more than average height, especially (with reference to an object) relative to width.',
        englishForPrompt: 'a towering coconut palm tree on a Belizean beach, reaching high into the blue sky',
        kriolExample: 'Dat bildin reeli taal.',
        englishExample: 'That building is really tall.'
    },
    {
        kriol: 'tamales',
        english: 'tamales',
        meaning: 'A traditional Mesoamerican dish made of masa, which is steamed in a corn husk or banana leaf, filled with chicken, pork or beans.',
        englishForPrompt: 'a Belizean tamale wrapped in a green plantain leaf, steamed and served hot, with one unwrapped to show the corn masa and chicken filling inside',
        kriolExample: 'Fu Krismus, wi always mek a big pach a tamales.',
        englishExample: 'For Christmas, we always make a big batch of tamales.'
    },
    {
        kriol: 'tambrin',
        english: 'tamarind',
        meaning: 'A tropical tree that produces pod-like fruit, which are used in beverages and food for their sweet and sour taste.',
        englishForPrompt: 'a cluster of brittle brown tamarind pods on a tree, with one broken open to show the sticky brown pulp inside',
        kriolExample: 'Wi mek sweet tambrin jroos fram di froolt.',
        englishExample: 'We make sweet tamarind juice from the fruit.'
    },
    {
        kriol: 'tap',
        english: 'top',
        meaning: 'The highest or uppermost point, part, or surface of something.',
        englishForPrompt: 'a person standing victoriously on the very top of a Maya temple at Xunantunich, overlooking the jungle',
        kriolExample: 'Ih klaim to di tap a di chree.',
        englishExample: 'He climbed to the top of the tree.'
    },
    {
        kriol: 'tapir',
        english: 'tapir',
        meaning: 'The national animal of Belize, a large, herbivorous mammal with a short, prehensile snout. Locally known as a "mountain cow".',
        englishForPrompt: "a Baird's tapir, the national animal of Belize known as the mountain cow, grazing near a river in the Belizean jungle",
        kriolExample: 'Di tapir, or mountn kau, da wi nashanal animal.',
        englishExample: 'The tapir, or mountain cow, is our national animal.'
    },
    {
        kriol: 'tayad',
        english: 'tired',
        meaning: 'In need of sleep or rest; weary.',
        englishForPrompt: 'a person yawning widely, with their eyes half-closed, looking very sleepy',
        kriolExample: 'Ah feel soh tayad, ah gweyn da bed.',
        englishExample: 'I feel so tired, I am going to bed.'
    },
    {
        kriol: 'tebl',
        english: 'table',
        meaning: 'A piece of furniture with a flat top and one or more legs, providing a level surface on which objects may be placed.',
        englishForPrompt: 'a simple wooden dining table set with colorful plates and glasses in a Belizean home',
        kriolExample: 'Put di food pahn di tebl.',
        englishExample: 'Put the food on the table.'
    },
    {
        kriol: 'tee',
        english: 'tea',
        meaning: 'A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water.',
        englishForPrompt: 'a simple ceramic mug filled with steaming hot black tea on a wooden table',
        kriolExample: 'Ah like fi jink wahn kap a tee eena di maanin.',
        englishExample: 'I like to drink a cup of tea in the morning.'
    },
    {
        kriol: 'teef',
        english: 'thief / steal',
        meaning: 'A person who steals another person\'s property. Also used as a verb meaning "to steal".',
        englishForPrompt: 'a shadowy figure in a dark room, discreetly taking a wallet from a table, representing the act of stealing',
        kriolExample: 'Da bway wahn teef yu blain.',
        englishExample: 'That boy will steal from you without you noticing.'
    },
    {
        kriol: 'teet',
        english: 'tooth / teeth',
        meaning: 'Each of a set of hard, bony enamel-coated structures in the jaws of most vertebrates, used for biting and chewing.',
        englishForPrompt: 'a close-up of a person\'s bright, healthy smile showing their white teeth',
        kriolExample: 'Brosh yu teet bifo yu go da bed.',
        englishExample: 'Brush your teeth before you go to bed.'
    },
    {
        kriol: 'tek',
        english: 'take',
        meaning: 'To lay hold of (something) with one\'s hands; reach for and hold.',
        englishForPrompt: 'a hand reaching out and taking a ripe mango from a market stall display',
        kriolExample: 'Tek wahn pees a keyk.',
        englishExample: 'Take a piece of cake.'
    },
    {
        kriol: 'tel',
        english: 'tell',
        meaning: 'To communicate information, facts, or news to someone in spoken or written words.',
        englishForPrompt: 'one person whispering a secret into another person\'s ear',
        kriolExample: 'Tel mi weh yu di tink.',
        englishExample: 'Tell me what you are thinking.'
    },
    {
        kriol: 'tenk',
        english: 'thank',
        meaning: 'To express gratitude to (someone), especially by saying "Thank you".',
        englishForPrompt: 'a beautifully written "Tenk Yu" (Thank You) card decorated with tropical flowers',
        kriolExample: 'Tenk yu fi di hep.',
        englishExample: 'Thank you for the help.'
    },
    {
        kriol: 'tideh',
        english: 'today',
        meaning: 'On or in the course of this present day.',
        englishForPrompt: 'a calendar page showing the current date, circled with a bright red marker and labeled "TIDEH!"',
        kriolExample: 'Tideh da wahn byootiful day.',
        englishExample: 'Today is a beautiful day.'
    },
    {
        kriol: 'tikin-hed',
        english: 'tick-head (a bird)',
        meaning: 'Colloquial name for the Groove-billed Ani, a black bird with a large, grooved beak, often seen in small flocks.',
        englishForPrompt: 'a Groove-billed Ani, a black bird known in Belize as a "tikin-hed," with its distinctive large beak, perched on a fence post',
        kriolExample: 'Wahn hoal gruup a tikin-hed de eena di paascha.',
        englishExample: 'A whole group of anis are in the pasture.'
    },
    {
        kriol: 'tobl',
        english: 'tub / washtub',
        meaning: 'A large, open container with a flat bottom and sloping sides, typically used for washing clothes or other items.',
        englishForPrompt: 'a large, galvanized metal washtub filled with soapy water and clothes, a traditional sight in a Belizean yard',
        kriolExample: 'Shee di wash kloaz eena di tobl.',
        englishExample: 'She is washing clothes in the tub.'
    },
    {
        kriol: 'toch',
        english: 'touch',
        meaning: 'To come into or be in contact with.',
        englishForPrompt: 'a fingertip gently touching the surface of calm water, creating ripples',
        kriolExample: 'No toch di paynt, ih stil wet.',
        englishExample: 'Don\'t touch the paint, it is still wet.'
    },
    {
        kriol: 'toach-lait',
        english: 'flashlight',
        meaning: 'A battery-operated portable light, also known as a torch.',
        englishForPrompt: 'a flashlight emitting a bright beam of light in a dark room or jungle setting',
        kriolExample: 'Bring di toach-lait, ih daak owsaid.',
        englishExample: 'Bring the flashlight, it\'s dark outside.'
    },
    {
        kriol: 'toatiz',
        english: 'tortoise',
        meaning: 'A slow-moving terrestrial reptile with a domed shell into which it can retract its head and legs.',
        englishForPrompt: 'a land tortoise slowly walking through the grass in a Belizean garden',
        kriolExample: 'Di toatiz muuv reeli sloa.',
        englishExample: 'The tortoise moves really slowly.'
    },
    {
        kriol: 'ton',
        english: 'turn',
        meaning: 'To move in a circular direction wholly or partly around an axis or point.',
        englishForPrompt: 'a person turning a doorknob to open a door',
        kriolExample: 'Ton aff di lait wen yu leev.',
        englishExample: 'Turn off the light when you leave.'
    },
    {
        kriol: 'tong',
        english: 'town',
        meaning: 'A built-up area with a name, defined boundaries, and local government, that is larger than a village and generally smaller than a city.',
        englishForPrompt: 'a colorful street scene in a small Belizean town like San Ignacio or Dangriga, with wooden buildings and people walking around',
        kriolExample: 'Wi gweyn da tong fi go da di maakit.',
        englishExample: 'We are going to town to go to the market.'
    },
    {
        kriol: 'trai',
        english: 'try',
        meaning: 'To make an attempt or effort to do something.',
        englishForPrompt: 'a baby taking its first wobbly steps, illustrating the act of trying to walk',
        kriolExample: 'Jos trai yu bes.',
        englishExample: 'Just try your best.'
    },
    {
        kriol: 'trok',
        english: 'truck',
        meaning: 'A large, heavy motor vehicle used for transporting goods, materials, or troops.',
        englishForPrompt: 'an old, sturdy pickup truck loaded with oranges on a dusty road in the Belizean countryside',
        kriolExample: 'Di trok ful a shuga-kayn.',
        englishExample: 'The truck is full of sugarcane.'
    },
    {
        kriol: 'tu',
        english: 'to',
        meaning: 'Expressing motion in the direction of (a particular location).',
        englishForPrompt: 'a series of footprints leading from one point (home icon) to another point (school icon)',
        kriolExample: 'Ah gweyn tu skul.',
        englishExample: 'I am going to school.'
    },
    {
        kriol: 'tukn',
        english: 'toucan',
        meaning: 'The Keel-billed Toucan, the national bird of Belize, known for its huge, vibrantly colored beak.',
        englishForPrompt: 'a keel-billed toucan, the national bird of Belize, with its colorful rainbow beak, perched on a tropical branch',
        kriolExample: 'Di tukn ih beek luk laik wahn raynbow.',
        englishExample: "The toucan's beak looks like a rainbow."
    },
    {
        kriol: 'uma',
        english: 'woman',
        meaning: 'An adult female human being.',
        englishForPrompt: 'a portrait of a Belizean woman with a warm and friendly smile',
        kriolExample: 'Dat uma da wahn gud cook.',
        englishExample: 'That woman is a good cook.'
    },
    {
        kriol: 'unda',
        english: 'under',
        meaning: 'At a lower level than (something).',
        englishForPrompt: 'a cat sleeping peacefully under a chair',
        kriolExample: 'Di daag de unda di haus.',
        englishExample: 'The dog is under the house.'
    },
    {
        kriol: 'waak',
        english: 'walk',
        meaning: 'To move at a regular pace by lifting and setting down each foot in turn, never having both feet off the ground at once.',
        englishForPrompt: 'a pair of feet in sandals walking along a sandy path in Caye Caulker, Belize',
        kriolExample: 'Mek wi go faa wahn waak.',
        englishExample: 'Let\'s go for a walk.'
    },
    {
        kriol: 'wach',
        english: 'watch',
        meaning: 'To look at or observe attentively over a period of time.',
        englishForPrompt: 'a person looking through binoculars, watching birds in a tree',
        kriolExample: 'Ah di wach di son set.',
        englishExample: 'I am watching the sun set.'
    },
    {
        kriol: 'wachaman',
        english: 'watchman / security guard',
        meaning: 'A person who keeps watch, especially at night.',
        englishForPrompt: 'a security guard in uniform, sitting by a gate at night in Belize, holding a flashlight',
        kriolExample: 'Di wachaman di luk owt fi di bildin.',
        englishExample: 'The watchman is looking out for the building.'
    },
    {
        kriol: 'wahn',
        english: 'a / one',
        meaning: 'The indefinite article. Also used for the number one.',
        englishForPrompt: 'a single, perfect mango sitting on a table, representing "one" or "a" mango',
        kriolExample: 'Ah wahn wahn banaana.',
        englishExample: 'I want a/one banana.'
    },
    {
        kriol: 'wan',
        english: 'one',
        meaning: 'The lowest cardinal number; half of two; 1.',
        englishForPrompt: 'a hand holding up a single index finger to represent the number one',
        kriolExample: 'Gimmi wan daala.',
        englishExample: 'Give me one dollar.'
    },
    {
        kriol: 'wangla',
        english: 'wangla',
        meaning: 'A traditional Belizean candy made from toasted sesame seeds and melted brown sugar, forming a brittle, sweet treat.',
        englishForPrompt: 'a sheet of golden-brown Belizean wangla, a sesame seed brittle, broken into pieces on a wooden board, showing the texture of the toasted seeds',
        kriolExample: 'Ah mi lov wen mi grama mek wangla fi wi.',
        englishExample: 'I loved when my grandma made wangla for us.'
    },
    {
        kriol: 'wans',
        english: 'once',
        meaning: 'On one occasion or for one time only.',
        englishForPrompt: 'a calendar page with a single date circled, to signify an event happening only once',
        kriolExample: 'Wans opan a taim...',
        englishExample: 'Once upon a time...'
    },
    {
        kriol: 'want',
        english: 'want',
        meaning: 'To have a desire to possess or do (something); wish for.',
        englishForPrompt: 'an illustration of a person with a thought bubble showing a delicious-looking piece of chocolate cake, symbolizing desire',
        kriolExample: 'Ah want fi go da di beech.',
        englishExample: 'I want to go to the beach.'
    },
    {
        kriol: 'wash',
        english: 'wash',
        meaning: 'To clean with water and, typically, soap or detergent.',
        englishForPrompt: 'a pair of hands being washed with soap under running water, creating lots of bubbles',
        kriolExample: 'Go wash yu han.',
        englishExample: 'Go wash your hands.'
    },
    {
        kriol: 'wata',
        english: 'water',
        meaning: 'The clear liquid that is essential for life, often collected as rainwater in large vats in Belize.',
        englishForPrompt: 'a glass of clear, cool rainwater being poured from a tap connected to a large green rainwater vat, a common sight in Belize',
        kriolExample: 'Jos da-mi rayn wata wi mi yooz tu jrink.',
        englishExample: 'It was only rainwater we used to drink.'
    },
    {
        kriol: 'wayt',
        english: 'white',
        meaning: 'Of the color of milk or fresh snow, due to the reflection of all visible rays of light; the opposite of black.',
        englishForPrompt: 'a beautiful white egret standing gracefully in the shallow water of a Belizean lagoon',
        kriolExample: 'Ih wear wahn wayt jres.',
        englishExample: 'She wore a white dress.'
    },
    {
        kriol: 'wee-wee aant',
        english: 'leaf-cutter ant',
        meaning: 'An ant known for cutting and carrying leaf fragments back to its nest to grow a specific type of fungus, which they eat.',
        englishForPrompt: 'a long line of leaf-cutter ants marching across the jungle floor in Belize, each carrying a bright green piece of a leaf',
        kriolExample: 'Luk at di lang lain a wee-wee aant dehn, dehn di werk haad!',
        englishExample: 'Look at the long line of leaf-cutter ants, they are working hard!'
    },
    {
        kriol: 'weh',
        english: 'where / which / that',
        meaning: 'A multi-purpose relative pronoun used to ask questions about place or to connect clauses.',
        englishForPrompt: 'a treasure map of Belize with a large "X" marking a spot, and a question mark over the X, representing "where"',
        kriolExample: 'Weh yu gweyn?',
        englishExample: 'Where are you going?'
    },
    {
        kriol: 'wehn',
        english: '(past tense marker)',
        meaning: 'A word used to indicate that an action or state occurred in the past, often similar to "was" or "were".',
        englishForPrompt: 'an old, faded photograph of a Belizean family from the 1950s, evoking a sense of the past',
        kriolExample: 'Ah wehn tayad yestideh.',
        englishExample: 'I was tired yesterday.'
    },
    {
        kriol: 'wel',
        english: 'well',
        meaning: 'In a good or satisfactory way.',
        englishForPrompt: 'a checkmark inside a green circle, a universal symbol for "done well" or "correct"',
        kriolExample: 'Ih du di werk wel.',
        englishExample: 'He did the work well.'
    },
    {
        kriol: 'werk',
        english: 'work',
        meaning: 'Activity involving mental or physical effort done in order to achieve a purpose or result.',
        englishForPrompt: 'a Belizean construction worker wearing a hard hat, working on a building site in the sun',
        kriolExample: 'Ah hafu go da werk.',
        englishExample: 'I have to go to work.'
    },
    {
        kriol: 'wi',
        english: 'we',
        meaning: 'Used by a speaker to refer to himself or herself and one or more other people considered together.',
        englishForPrompt: 'a diverse group of friends with their arms around each other, looking at the camera, with a bracket enclosing them labeled "WI"',
        kriolExample: 'Wi da fren.',
        englishExample: 'We are friends.'
    },
    {
        kriol: 'wid',
        english: 'with',
        meaning: 'Accompanied by (another person or thing).',
        englishForPrompt: 'a plate of Belizean rice and beans with a piece of stew chicken on the side, showing two things together',
        kriolExample: 'Ah gweyn wid yu.',
        englishExample: 'I am going with you.'
    },
    {
        kriol: 'winda',
        english: 'window',
        meaning: 'An opening in the wall or roof of a building or vehicle, fitted with glass or other transparent material in a frame to admit light or air and allow people to see out.',
        englishForPrompt: 'an open wooden window with louvers, looking out from a Belizean home onto a lush, green garden',
        kriolExample: 'Open di winda fi let een sohn fresh ayr.',
        englishExample: 'Open the window to let in some fresh air.'
    },
    {
        kriol: 'wowla',
        english: 'boa constrictor',
        meaning: 'A large, non-venomous snake found in tropical Central and South America. It is the common name for a boa in Belize.',
        englishForPrompt: 'a large boa constrictor snake, known as a "wowla" in Belize, coiled on a thick branch in the jungle',
        kriolExample: 'No fraid a di wowla, ih noh puaizn.',
        englishExample: 'Don\'t be afraid of the boa constrictor, it is not poison.'
    },
    {
        kriol: 'yaad',
        english: 'yard / home',
        meaning: 'A piece of ground adjoining a house, typically covered with grass. It can also refer to one\'s home and property.',
        englishForPrompt: 'the grassy yard of a Belizean home, with a few chickens pecking around and a large mango tree providing shade',
        kriolExample: 'Ah gweyn da yaad.',
        englishExample: 'I am going home.'
    },
    {
        kriol: 'yala',
        english: 'yellow',
        meaning: 'Of the color between green and orange in the spectrum, as of ripe lemons or egg yolks.',
        englishForPrompt: 'a bunch of ripe, bright yellow bananas on a market stall in Belize',
        kriolExample: 'Di son yala laik gool.',
        englishExample: 'The sun is yellow like gold.'
    },
    {
        kriol: 'yelo-hed',
        english: 'yellow-headed parrot',
        meaning: 'A species of parrot with a distinctive yellow head, native to Belize and known for its ability to mimic human speech.',
        englishForPrompt: 'a yellow-headed parrot perched on a branch in the Belizean savanna, showing its vibrant green and yellow feathers',
        kriolExample: 'Dat yelo-hed paarat ku lan fi taak.',
        englishExample: 'That yellow-headed parrot can learn to talk.'
    },
    {
        kriol: 'yerisoh',
        english: 'yesterday',
        meaning: 'On the day before today.',
        englishForPrompt: 'a calendar page that has been torn off, showing yesterday\'s date',
        kriolExample: 'Ah mi si ahn yerisoh.',
        englishExample: 'I saw him yesterday.'
    },
    {
        kriol: 'yooz',
        english: 'use',
        meaning: 'To take, hold, or deploy (something) as a means of accomplishing a purpose or achieving a result; employ.',
        englishForPrompt: 'a hand using a hammer to drive a nail into a piece of wood',
        kriolExample: 'Yooz wahn naif fi kot di bred.',
        englishExample: 'Use a knife to cut the bread.'
    },
    {
        kriol: 'yu',
        english: 'you',
        meaning: 'Used to refer to the person or people that the speaker is addressing.',
        englishForPrompt: 'a hand pointing directly out of the image, at the viewer, symbolizing "you"',
        kriolExample: 'How yu du?',
        englishExample: 'How are you?'
    }
];

/**
 * Returns a shuffled copy of the entire visual dictionary.
 * This uses the Fisher-Yates (aka Knuth) shuffle algorithm for an unbiased shuffle.
 * @returns A new array containing all dictionary entries in a random order.
 */
export const getShuffledDictionary = (): VisualDictionaryEntry[] => {
    // Sort the dictionary alphabetically by the 'kriol' field before shuffling
    const sortedDictionary = [...visualDictionary].sort((a, b) => a.kriol.localeCompare(b.kriol));
    
    const array = sortedDictionary; // Use the sorted array
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
};

// A simple function to get the full, sorted dictionary if needed elsewhere.
export const getSortedDictionary = (): VisualDictionaryEntry[] => {
    return [...visualDictionary].sort((a, b) => a.kriol.localeCompare(b.kriol));
};
