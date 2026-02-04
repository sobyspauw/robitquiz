import os
import re

base_path = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\drinks'

# Define 20 questions for each category (to add to all levels)
categories = {
    "Beer": [
        ("What grain is beer primarily made from?", "Barley", "Wheat", "Corn", "Rice", "Beer is primarily made from malted barley, though other grains can be used."),
        ("What ingredient gives beer its bitter flavor?", "Hops", "Barley", "Yeast", "Water", "Hops provide bitterness to balance the sweetness of malt and add aroma."),
        ("What is ale?", "Beer fermented with top-fermenting yeast", "Beer without hops", "Light-colored beer", "Non-alcoholic beer", "Ale is beer fermented with top-fermenting yeast at warmer temperatures."),
        ("What is lager?", "Beer fermented with bottom-fermenting yeast", "Dark beer", "Strong beer", "Wheat beer", "Lager is beer fermented with bottom-fermenting yeast at cooler temperatures."),
        ("What is an IPA?", "India Pale Ale", "Irish Pale Ale", "International Pale Ale", "Italian Pale Ale", "IPA stands for India Pale Ale, originally brewed stronger and hoppier for transport to India."),
        ("What is a stout?", "Dark beer made with roasted malt or barley", "Light beer", "Wheat beer", "Sour beer", "Stout is a dark beer made using roasted malt or roasted barley, hops, water and yeast."),
        ("What country produces Guinness?", "Ireland", "England", "Scotland", "Germany", "Guinness is a famous Irish stout produced in Dublin since 1759."),
        ("What is a pilsner?", "Type of pale lager", "Dark ale", "Wheat beer", "Sour beer", "Pilsner is a type of pale lager that originated in Plzeň, Czech Republic."),
        ("What is the main purpose of yeast in brewing?", "Convert sugars to alcohol", "Add flavor", "Add color", "Preserve beer", "Yeast ferments the sugars from malted grains, producing alcohol and carbon dioxide."),
        ("What is a wheat beer?", "Beer made with high proportion of wheat", "Beer flavored with wheat grass", "Beer from wheat regions", "Whole grain beer", "Wheat beer uses a high proportion of wheat relative to barley malt."),
        ("What is Oktoberfest?", "German beer festival", "Beer style", "Brewing method", "Beer glass type", "Oktoberfest is the world's largest beer festival, held annually in Munich, Germany."),
        ("What does ABV stand for?", "Alcohol By Volume", "Alcohol Beer Value", "American Beer Variety", "Aged Beer Vintage", "ABV indicates the percentage of alcohol content in beer by volume."),
        ("What is a porter?", "Dark beer style, lighter than stout", "Light beer", "Wheat beer", "Sour beer", "Porter is a dark beer style made from brown malt, lighter than stout."),
        ("What is lambic?", "Belgian beer spontaneously fermented", "German lager", "Irish stout", "American pale ale", "Lambic is a Belgian beer style spontaneously fermented using wild yeasts and bacteria."),
        ("What are the four main ingredients in beer?", "Water, malt, hops, yeast", "Water, wheat, sugar, yeast", "Barley, corn, hops, sugar", "Water, barley, wheat, rice", "The four essential ingredients in beer are water, malted grain (usually barley), hops, and yeast."),
        ("What is a bock?", "Strong German lager", "Light ale", "Sour beer", "Wheat beer", "Bock is a strong lager of German origin, traditionally brewed in winter for consumption in spring."),
        ("What temperature should lager be fermented at?", "Cool temperatures (45-55°F)", "Room temperature", "Warm temperatures (70-75°F)", "Freezing temperature", "Lager is fermented at cool temperatures, typically 45-55°F, for a clean, crisp flavor."),
        ("What is the foam on top of beer called?", "Head", "Crown", "Foam cap", "Beer top", "The foam on top of beer is called the head, formed by proteins and carbon dioxide."),
        ("What is a session beer?", "Lower alcohol beer for extended drinking", "Morning beer", "Beer served in sessions", "Aged beer", "Session beer has lower alcohol content, allowing consumption over a longer 'session' without excessive intoxication."),
        ("What is dry hopping?", "Adding hops after fermentation for aroma", "Removing moisture from hops", "Using dried hops only", "Brewing without water", "Dry hopping involves adding hops after fermentation to enhance aroma without adding bitterness.")
    ],
    "Cocktails": [
        ("What is a cocktail?", "Mixed drink with alcohol", "Non-alcoholic drink", "Hot beverage", "Beer-based drink", "A cocktail is a mixed drink typically containing one or more types of alcohol mixed with other ingredients."),
        ("What is a martini made with?", "Gin and vermouth", "Vodka and cranberry", "Rum and cola", "Whiskey and soda", "A classic martini is made with gin and dry vermouth, garnished with an olive or lemon twist."),
        ("What is a mojito?", "Rum, mint, lime, sugar, soda water", "Tequila and lime", "Vodka and orange juice", "Gin and tonic", "A mojito is a Cuban cocktail made with white rum, mint, lime juice, sugar, and soda water."),
        ("What spirit is in a margarita?", "Tequila", "Vodka", "Rum", "Gin", "A margarita is made with tequila, lime juice, and orange liqueur (like Cointreau or Triple Sec)."),
        ("What is a cosmopolitan?", "Vodka, cranberry, lime, triple sec", "Gin and vermouth", "Rum and cola", "Whiskey sour", "A cosmopolitan is made with vodka, cranberry juice, lime juice, and triple sec."),
        ("What is a bartender's tool for mixing called?", "Cocktail shaker", "Muddler", "Jigger", "Strainer", "A cocktail shaker is used to mix ingredients by shaking with ice."),
        ("What is a daiquiri made with?", "Rum, lime juice, simple syrup", "Vodka and strawberry", "Tequila and lime", "Gin and tonic", "A classic daiquiri is made with white rum, lime juice, and simple syrup."),
        ("What is a Manhattan cocktail?", "Whiskey, sweet vermouth, bitters", "Vodka and cranberry", "Gin and dry vermouth", "Rum and cola", "A Manhattan is made with whiskey, sweet vermouth, and aromatic bitters."),
        ("What garnish is traditional for a martini?", "Olive or lemon twist", "Cherry", "Orange slice", "Mint", "A classic martini is garnished with either an olive or a lemon twist."),
        ("What is muddling in cocktail making?", "Crushing ingredients to release flavors", "Mixing with ice", "Shaking vigorously", "Straining liquid", "Muddling involves pressing and crushing ingredients like mint or fruit to release their flavors."),
        ("What is a piña colada made with?", "Rum, coconut cream, pineapple", "Vodka and orange juice", "Tequila and lime", "Gin and tonic", "A piña colada is made with rum, coconut cream, and pineapple juice, often blended with ice."),
        ("What is the base spirit in an Old Fashioned?", "Whiskey", "Vodka", "Gin", "Rum", "An Old Fashioned is made with whiskey, sugar, bitters, and a twist of citrus."),
        ("What is a jigger?", "Measuring tool for cocktails", "Type of cocktail", "Mixing spoon", "Ice crusher", "A jigger is a measuring device used to ensure accurate proportions in cocktail mixing."),
        ("What makes a cocktail 'on the rocks'?", "Served over ice", "Blended with ice", "No ice", "Shaken with ice then strained", "A drink served 'on the rocks' is poured over ice cubes in the glass."),
        ("What is a Bloody Mary made with?", "Vodka and tomato juice", "Rum and cola", "Gin and tonic", "Tequila and orange juice", "A Bloody Mary is made with vodka, tomato juice, and various spices and flavorings."),
        ("What is simple syrup?", "Sugar dissolved in water", "Lemon juice", "Fruit syrup", "Alcohol mixture", "Simple syrup is equal parts sugar and water, heated until sugar dissolves, used to sweeten cocktails."),
        ("What is a Tom Collins?", "Gin, lemon, sugar, soda water", "Vodka and cranberry", "Rum and cola", "Whiskey sour", "A Tom Collins is made with gin, lemon juice, simple syrup, and soda water."),
        ("What does 'neat' mean for serving spirits?", "Straight, no ice or mixers", "Over ice", "With water", "Mixed with soda", "A spirit served 'neat' is poured straight from the bottle with no ice or mixers."),
        ("What is a mai tai made with?", "Rum, lime, orgeat, orange liqueur", "Vodka and pineapple", "Tequila and lime", "Gin and tonic", "A mai tai is made with rum, lime juice, orgeat syrup, and orange liqueur."),
        ("What is the difference between shaken and stirred?", "Shaken is more vigorous; stirred is gentle", "No difference", "Shaken uses ice; stirred doesn't", "Stirred is faster", "Shaken cocktails are vigorously shaken with ice for dilution and aeration; stirred cocktails are gently mixed.")
    ],
    "Coffee": [
        ("What plant does coffee come from?", "Coffee plant (Coffea)", "Tea plant", "Cocoa plant", "Bean plant", "Coffee is made from roasted seeds (beans) of the Coffea plant."),
        ("What are the two main species of coffee?", "Arabica and Robusta", "Colombian and Brazilian", "Dark and Light", "Bean and Ground", "Arabica and Robusta are the two primary commercially grown coffee species."),
        ("What is espresso?", "Concentrated coffee brewed under pressure", "Diluted coffee", "Iced coffee", "Instant coffee", "Espresso is concentrated coffee brewed by forcing hot water under pressure through finely-ground coffee."),
        ("What is a cappuccino?", "Espresso with steamed milk and foam", "Black coffee", "Iced coffee", "Coffee with cream", "A cappuccino is made with equal parts espresso, steamed milk, and milk foam."),
        ("What is a latte?", "Espresso with steamed milk", "Black coffee", "Iced coffee with milk", "Instant coffee", "A latte (caffè latte) is made with espresso and a larger proportion of steamed milk."),
        ("Where did coffee originate?", "Ethiopia", "Colombia", "Italy", "Brazil", "Coffee is believed to have originated in Ethiopia, where it was discovered growing wild."),
        ("What is the process of removing caffeine called?", "Decaffeination", "Roasting", "Grinding", "Brewing", "Decaffeination is the process of removing caffeine from coffee beans."),
        ("What is a macchiato?", "Espresso with small amount of milk", "Coffee with lots of milk", "Iced coffee", "Black coffee", "A macchiato is espresso 'marked' or 'stained' with a small amount of milk or foam."),
        ("What is the Coffee Belt?", "Region between Tropics where coffee grows", "Coffee grinder part", "Brewing method", "Coffee brand", "The Coffee Belt is the region between the Tropics of Cancer and Capricorn where coffee plants grow best."),
        ("What is an Americano?", "Espresso with hot water added", "American-style drip coffee", "Iced coffee", "Coffee with milk", "An Americano is made by adding hot water to espresso, similar in strength to drip coffee."),
        ("What is cold brew coffee?", "Coffee steeped in cold water for hours", "Iced hot coffee", "Frozen coffee", "Coffee with ice cubes", "Cold brew is made by steeping coarsely ground coffee in cold water for 12-24 hours."),
        ("What country produces the most coffee?", "Brazil", "Colombia", "Ethiopia", "Vietnam", "Brazil is the world's largest coffee producer, accounting for about a third of global production."),
        ("What is coffee roasting?", "Heating beans to develop flavor", "Grinding beans", "Brewing coffee", "Storing beans", "Roasting is the process of heating green coffee beans to develop their flavor, aroma, and color."),
        ("What is a French press?", "Coffee brewing device with plunger", "Coffee roasting method", "Type of espresso", "Coffee grinder", "A French press brews coffee by steeping grounds in hot water, then pressing them down with a plunger."),
        ("What is the crema on espresso?", "Golden foam layer on top", "Coffee grounds", "Milk foam", "Sugar coating", "Crema is the golden-brown foam that forms on top of properly brewed espresso."),
        ("What is a flat white?", "Espresso with microfoam milk", "Black coffee", "Iced coffee", "Coffee without foam", "A flat white is espresso with steamed milk that has a velvety microfoam texture."),
        ("What is the ideal water temperature for brewing coffee?", "195-205°F (90-96°C)", "Boiling (212°F/100°C)", "Room temperature", "150°F (65°C)", "The ideal brewing temperature for coffee is 195-205°F, just below boiling."),
        ("What is Turkish coffee?", "Finely ground coffee boiled in pot", "Coffee from Turkey only", "Iced coffee", "Instant coffee", "Turkish coffee is made by boiling very finely ground coffee in a special pot called a cezve or ibrik."),
        ("What does 'single origin' mean?", "Coffee from one geographic region", "One coffee bean", "First harvest", "Original roast", "Single origin coffee comes from beans sourced from one specific geographic region or farm."),
        ("What is a mocha?", "Espresso with chocolate and steamed milk", "Black coffee", "Iced coffee", "Coffee beans from Mocha, Yemen", "A mocha (or caffè mocha) is espresso with chocolate syrup or powder and steamed milk.")
    ],
    "Juices": [
        ("What is orange juice made from?", "Pressed oranges", "Orange flavoring", "Tang powder", "Orange concentrate only", "Orange juice is made by pressing or extracting the liquid from fresh oranges."),
        ("What vitamin is orange juice famous for?", "Vitamin C", "Vitamin A", "Vitamin D", "Vitamin B12", "Orange juice is particularly high in Vitamin C (ascorbic acid)."),
        ("What is pulp in juice?", "Fruit fibers and tissue", "Seeds", "Sugar", "Water content", "Pulp consists of the fibrous fruit tissues that remain suspended in juice after pressing."),
        ("What is apple cider?", "Unfiltered apple juice", "Filtered apple juice", "Fermented apple drink", "Apple-flavored soda", "Apple cider is unfiltered, unsweetened apple juice (in North America; in UK, cider refers to alcoholic version)."),
        ("What is concentrate?", "Juice with water removed, then re-added", "Fresh-squeezed juice", "Artificial juice", "Juice with extra fruit", "Juice concentrate has water removed for storage/transport, then water is added back before sale."),
        ("What fruit is cranberry juice made from?", "Cranberries", "Cherries", "Strawberries", "Raspberries", "Cranberry juice is made from cranberries, tart red berries native to North America."),
        ("What is pasteurization?", "Heating to kill bacteria", "Adding preservatives", "Removing pulp", "Adding vitamins", "Pasteurization heats juice briefly to kill harmful bacteria and extend shelf life."),
        ("What is tomato juice?", "Juice from tomatoes", "Vegetable blend", "Spiced juice", "Tomato sauce diluted", "Tomato juice is the liquid extracted from tomatoes, often seasoned with salt and spices."),
        ("What is 'not from concentrate' mean?", "Water never removed from juice", "No artificial ingredients", "Fresh-squeezed only", "No added sugar", "'Not from concentrate' means the juice wasn't concentrated and reconstituted; water was never removed."),
        ("What is grapefruit juice?", "Juice from grapefruits", "Blend of grape and fruit juices", "Artificially flavored juice", "Sweetened grape juice", "Grapefruit juice is extracted from grapefruits, with a tart, slightly bitter flavor."),
        ("What fruit is prune juice made from?", "Dried plums", "Prunes (fresh fruit)", "Grapes", "Plums", "Prune juice is made from dried plums, known for digestive benefits."),
        ("What is pomegranate juice?", "Juice from pomegranate seeds", "Pomegranate-flavored juice", "Red fruit blend", "Juice from pomegranate skin", "Pomegranate juice is extracted from the juicy seeds (arils) inside pomegranates."),
        ("What makes juice 'cold-pressed'?", "Extracted without heat", "Served cold", "Refrigerated immediately", "Made from frozen fruit", "Cold-pressed juice is extracted using hydraulic pressure without heat, preserving nutrients."),
        ("What is the difference between juice and nectar?", "Nectar has added water and sugar", "No difference", "Nectar is thicker", "Juice is artificial", "Fruit nectar contains fruit juice or purée plus added water and sugar; juice is just fruit liquid."),
        ("What is grape juice?", "Juice from grapes", "Wine without alcohol", "Purple-colored juice", "Fruit punch", "Grape juice is the liquid extracted from crushing grapes, available in purple or white varieties."),
        ("What nutrients are lost in most commercial juicing?", "Fiber", "Vitamins", "Sugars", "Water", "Most commercial juicing removes fiber; fresh whole fruit contains more fiber than juice."),
        ("What is pineapple juice?", "Juice from pineapples", "Tropical fruit blend", "Yellow-colored juice", "Pine-flavored juice", "Pineapple juice is extracted from fresh pineapples, high in vitamin C and bromelain enzyme."),
        ("What is lemon juice used for?", "Flavoring and vitamin C", "Sweetener", "Coloring", "Preservative only", "Lemon juice is used for its tart flavor and high vitamin C content."),
        ("What does '100% juice' mean?", "No added water or sugar", "Fresh-squeezed", "Organic only", "Not from concentrate", "'100% juice' means the product contains only juice from fruit, with no water or sugar added."),
        ("What is carrot juice?", "Juice from carrots", "Orange-colored juice", "Vegetable blend", "Carrot-flavored drink", "Carrot juice is extracted from fresh carrots, rich in beta-carotene (vitamin A).")
    ],
    "Soft Drinks": [
        ("What is a soft drink?", "Non-alcoholic carbonated beverage", "Alcoholic drink", "Juice", "Milk-based drink", "A soft drink is a non-alcoholic beverage, typically carbonated and sweetened."),
        ("What company makes Coca-Cola?", "The Coca-Cola Company", "PepsiCo", "Dr Pepper Snapple", "Nestle", "Coca-Cola is produced by The Coca-Cola Company, founded in 1886."),
        ("What flavor is Sprite?", "Lemon-lime", "Orange", "Cola", "Grape", "Sprite is a lemon-lime flavored carbonated soft drink."),
        ("What gives soda its fizz?", "Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen", "Carbon dioxide dissolved under pressure gives soda its characteristic fizz and bubbles."),
        ("What company makes Pepsi?", "PepsiCo", "Coca-Cola Company", "Dr Pepper", "Nestle", "Pepsi is produced by PepsiCo, a major competitor to Coca-Cola."),
        ("What is root beer?", "Sweet soft drink flavored with sassafras", "Alcoholic beer", "Cola variant", "Coffee-based drink", "Root beer is a sweet North American soft drink traditionally flavored with sassafras root."),
        ("What is ginger ale?", "Ginger-flavored carbonated drink", "Alcoholic ginger beer", "Beer made with ginger", "Ale with ginger flavor", "Ginger ale is a non-alcoholic carbonated soft drink flavored with ginger."),
        ("What soft drink is known for its 23 flavors?", "Dr Pepper", "Coca-Cola", "Pepsi", "7-Up", "Dr Pepper is marketed as having a unique blend of 23 flavors."),
        ("What is Mountain Dew?", "Citrus-flavored caffeinated soft drink", "Energy drink", "Juice", "Tea-based drink", "Mountain Dew is a citrus-flavored carbonated soft drink with caffeine."),
        ("What is tonic water?", "Carbonated water with quinine", "Plain carbonated water", "Sweet soda", "Flavored water", "Tonic water is carbonated water flavored with quinine, originally used to prevent malaria."),
        ("What is club soda?", "Carbonated water with minerals", "Alcoholic soda", "Sweet soda", "Fruit-flavored soda", "Club soda is carbonated water with added minerals like sodium bicarbonate or potassium sulfate."),
        ("What color is original Coca-Cola?", "Caramel brown", "Clear", "Red", "Black", "Coca-Cola has a distinctive caramel brown color from caramel coloring."),
        ("What is Fanta?", "Orange-flavored soft drink", "Cola drink", "Lemon-lime soda", "Root beer", "Fanta is a fruit-flavored carbonated soft drink, most commonly orange-flavored."),
        ("What does 'diet' or 'zero' soda mean?", "Sweetened with artificial sweeteners, no sugar", "Less carbonation", "No caffeine", "Organic ingredients", "Diet or zero sodas use artificial sweeteners instead of sugar, reducing calories."),
        ("What is cream soda?", "Vanilla-flavored carbonated drink", "Soda with cream", "Chocolate soda", "Coffee soda", "Cream soda is a sweet carbonated beverage flavored with vanilla."),
        ("What is energy drink classified as?", "Soft drink with added stimulants", "Sports drink", "Juice", "Tea", "Energy drinks are soft drinks containing caffeine and other stimulants like taurine."),
        ("What is 7-Up?", "Lemon-lime flavored soft drink", "Cola", "Orange soda", "Root beer", "7-Up is a lemon-lime flavored non-caffeinated soft drink."),
        ("What is the sweetener in regular soda?", "Sugar or high-fructose corn syrup", "Honey", "Artificial sweetener", "Fruit juice", "Regular sodas are typically sweetened with sugar or high-fructose corn syrup."),
        ("What is seltzer water?", "Plain carbonated water", "Flavored soda", "Mineral water", "Tonic water", "Seltzer water is simply water that has been carbonated, with no added minerals or flavoring."),
        ("What soft drink was originally a mixer for whiskey?", "Ginger ale", "Coca-Cola", "Sprite", "Root beer", "Ginger ale was originally created in the 1850s and often used as a mixer for whiskey.")
    ],
    "Spirits": [
        ("What is whiskey made from?", "Fermented grain mash", "Grapes", "Potatoes", "Sugarcane", "Whiskey is distilled from fermented grain mash, including barley, corn, rye, or wheat."),
        ("What is vodka traditionally made from?", "Grains or potatoes", "Grapes", "Sugarcane", "Corn only", "Vodka is traditionally distilled from fermented grains or potatoes."),
        ("What is rum made from?", "Sugarcane or molasses", "Grain", "Grapes", "Agave", "Rum is distilled from fermented sugarcane juice or molasses."),
        ("What plant is tequila made from?", "Blue agave", "Sugarcane", "Cactus", "Corn", "Tequila is made from the fermented juice of the blue agave plant."),
        ("What is gin flavored with?", "Juniper berries", "Orange peel", "Vanilla", "Oak", "Gin is a spirit flavored primarily with juniper berries."),
        ("What country is scotch from?", "Scotland", "Ireland", "United States", "Canada", "Scotch whisky must be produced in Scotland to be called scotch."),
        ("What is bourbon?", "American whiskey made primarily from corn", "French brandy", "Scottish whisky", "Irish whiskey", "Bourbon is American whiskey made from at least 51% corn and aged in new charred oak barrels."),
        ("What is brandy made from?", "Distilled wine or fermented fruit", "Grain", "Sugarcane", "Potatoes", "Brandy is distilled from wine or other fermented fruit juice."),
        ("What is the difference between whiskey and whisky?", "Spelling: whiskey (Irish/American), whisky (Scottish/Canadian)", "Age difference", "Alcohol content", "Production method", "'Whiskey' is used in Ireland and America; 'whisky' is used in Scotland and Canada."),
        ("What is proof in alcohol?", "Measure of alcohol content (double ABV in US)", "Quality grade", "Age of spirit", "Purity level", "In the US, proof is twice the ABV percentage; 80 proof = 40% ABV."),
        ("What is single malt scotch?", "Whisky from one distillery, made from malted barley", "Whisky from one barrel", "Whisky with one ingredient", "Unblended whisky", "Single malt scotch is made at one distillery from 100% malted barley."),
        ("What is añejo tequila?", "Tequila aged 1-3 years", "Unaged tequila", "Tequila aged less than 2 months", "Tequila aged over 3 years", "Añejo tequila is aged in oak barrels for 1-3 years."),
        ("What is cognac?", "Brandy from Cognac region of France", "Any French brandy", "Grape-flavored vodka", "Sweet liqueur", "Cognac is brandy that must be produced in the Cognac region of France."),
        ("What gives whiskey its amber color?", "Aging in wooden barrels", "Added caramel", "Natural grain color", "Filtering process", "Whiskey gets its color from aging in wooden barrels, which impart color and flavor."),
        ("What is moonshine?", "Illegally distilled or unaged whiskey", "Vodka variant", "Rum type", "Flavored spirit", "Moonshine refers to illegally distilled spirits or unaged whiskey."),
        ("What is absinthe?", "High-proof spirit with anise and wormwood", "Green liqueur", "Herbal wine", "Vodka variant", "Absinthe is a high-proof anise-flavored spirit made with wormwood and other herbs."),
        ("What is the 'angel's share'?", "Alcohol lost to evaporation during aging", "Portion given to workers", "First distillation", "Weakest part of spirit", "The angel's share is the portion of alcohol that evaporates from barrels during aging."),
        ("What is mezcal?", "Spirit made from agave (broader than tequila)", "Type of tequila", "Mexican beer", "Rum variant", "Mezcal is made from various agave species; tequila is a specific type of mezcal made only from blue agave."),
        ("What does 'neat' mean?", "Spirit served straight, no ice or mixers", "With ice", "With water", "Mixed drink", "A spirit served neat is poured straight from the bottle with no ice or mixers."),
        ("What is distillation?", "Heating liquid to separate alcohol from water", "Fermentation process", "Aging process", "Filtering process", "Distillation heats fermented liquid to vaporize and collect alcohol, separating it from water.")
    ],
    "Tea": [
        ("What plant does tea come from?", "Camellia sinensis", "Tea tree", "Mint plant", "Jasmine plant", "All true tea comes from the Camellia sinensis plant."),
        ("What are the main types of tea?", "Black, green, white, oolong, pu-erh", "Herbal, fruit, spice", "Hot and iced", "Chinese and Indian", "The main types of true tea are black, green, white, oolong, and pu-erh, all from the same plant."),
        ("What is the difference between black and green tea?", "Level of oxidation", "Different plants", "Caffeine content", "Growing region", "The difference is oxidation: black tea is fully oxidized, green tea is minimally oxidized."),
        ("What country produces the most tea?", "China", "India", "Japan", "Sri Lanka", "China is the world's largest tea producer."),
        ("What is Earl Grey tea?", "Black tea flavored with bergamot", "Green tea", "White tea", "Herbal tea", "Earl Grey is black tea flavored with oil from the bergamot orange."),
        ("What is matcha?", "Powdered green tea", "Fermented tea", "Black tea", "Herbal tea", "Matcha is a fine powder made from specially grown and processed green tea leaves."),
        ("What is oolong tea?", "Partially oxidized tea", "Fully oxidized tea", "Unoxidized tea", "Herbal tea", "Oolong tea is partially oxidized, falling between green and black tea in processing."),
        ("What is herbal tea technically called?", "Tisane or herbal infusion", "False tea", "Plant tea", "Herbal blend", "Herbal 'tea' is technically called a tisane, as it doesn't come from the tea plant."),
        ("What is white tea?", "Minimally processed tea from young leaves", "Tea with milk", "Bleached tea", "Caffeine-free tea", "White tea is made from young leaves and buds with minimal processing and oxidation."),
        ("What is chai?", "Spiced tea, often with milk", "Chinese tea", "Iced tea", "Green tea", "Chai (or masala chai) is black tea brewed with spices and usually milk and sweetener."),
        ("What temperature should green tea be brewed at?", "160-180°F (70-80°C)", "Boiling (212°F/100°C)", "Room temperature", "140°F (60°C)", "Green tea should be brewed at cooler temperatures than black tea to avoid bitterness."),
        ("What is Darjeeling tea?", "Black tea from Darjeeling, India", "Green tea", "Chinese tea", "Herbal tea", "Darjeeling is a premium black tea grown in the Darjeeling region of India."),
        ("What is pu-erh tea?", "Fermented and aged tea", "Fresh green tea", "Instant tea", "Iced tea", "Pu-erh is a fermented tea that can be aged for years, from Yunnan, China."),
        ("What is rooibos?", "South African herbal tea (not true tea)", "Black tea", "Green tea", "White tea", "Rooibos is an herbal infusion from South Africa, not from the tea plant."),
        ("What is the purpose of a tea infuser?", "Hold loose tea leaves while brewing", "Sweeten tea", "Cool tea", "Filter water", "A tea infuser holds loose tea leaves while they steep, keeping them contained for easy removal."),
        ("What is bubble tea?", "Tea with tapioca pearls", "Sparkling tea", "Foamy tea", "Carbonated tea", "Bubble tea (boba tea) is tea mixed with milk or fruit and chewy tapioca pearls."),
        ("What is the caffeine content of tea vs coffee?", "Tea typically has less caffeine than coffee", "Tea has more caffeine", "Same amount", "Tea has no caffeine", "Tea generally contains less caffeine than coffee, though amounts vary by type and brewing."),
        ("What is jasmine tea?", "Tea scented with jasmine flowers", "Tea from jasmine plant", "Sweet tea", "Herbal tea", "Jasmine tea is typically green tea scented with jasmine flowers."),
        ("What is English Breakfast tea?", "Blend of black teas", "Tea served at breakfast only", "White tea", "Herbal tea", "English Breakfast is a traditional blend of black teas, typically served with milk."),
        ("What are tea bags made of?", "Filter paper or silk with tea inside", "Plastic", "Cotton", "Metal mesh", "Tea bags are typically made of filter paper, silk, or other porous material filled with tea leaves.")
    ],
    "Traditional Drinks": [
        ("What is sake?", "Japanese rice wine", "Japanese beer", "Green tea", "Soy sauce drink", "Sake is a traditional Japanese alcoholic beverage made from fermented rice."),
        ("What is kefir?", "Fermented milk drink", "Fruit juice", "Herbal tea", "Coffee drink", "Kefir is a fermented milk drink similar to thin yogurt, originating from the Caucasus region."),
        ("What is horchata?", "Sweet rice or nut milk drink", "Coffee drink", "Alcoholic beverage", "Hot chocolate", "Horchata is a sweet drink made from rice, almonds, or other nuts, popular in Spain and Latin America."),
        ("What is lassi?", "Indian yogurt-based drink", "Indian tea", "Fruit juice", "Rice drink", "Lassi is a traditional Indian yogurt-based drink, often flavored with fruit or spices."),
        ("What is mate (yerba mate)?", "South American caffeinated herbal drink", "Type of coffee", "Alcoholic drink", "Fruit juice", "Yerba mate is a caffeinated herbal drink traditional to South America, drunk from a gourd through a metal straw."),
        ("What is kvass?", "Fermented Slavic beverage from rye bread", "Russian beer", "Vodka mixer", "Tea variant", "Kvass is a traditional Slavic fermented beverage made from rye bread."),
        ("What is kombucha?", "Fermented sweetened tea", "Japanese tea", "Fruit juice", "Energy drink", "Kombucha is a fermented, lightly effervescent sweetened tea drink."),
        ("What is mead?", "Honey wine", "Beer", "Fruit wine", "Whiskey", "Mead is an alcoholic beverage made by fermenting honey with water."),
        ("What is agua fresca?", "Mexican fresh fruit drink", "Sparkling water", "Alcoholic punch", "Coconut water", "Agua fresca is a Mexican drink made from fresh fruit, water, and sugar."),
        ("What is airag (kumis)?", "Fermented mare's milk", "Fermented grain drink", "Fruit wine", "Rice drink", "Airag or kumis is fermented mare's milk, traditional to Central Asian nomadic cultures."),
        ("What is Turkish ayran?", "Yogurt drink with water and salt", "Turkish coffee", "Fruit juice", "Alcoholic beverage", "Ayran is a Turkish drink made from yogurt, water, and salt."),
        ("What is masala chai?", "Spiced Indian milk tea", "Herbal infusion", "Fruit drink", "Coffee drink", "Masala chai is Indian black tea brewed with spices, milk, and sweetener."),
        ("What is cider (traditional British)?", "Fermented apple beverage", "Non-alcoholic apple juice", "Beer with apples", "Apple soda", "Traditional British cider is an alcoholic beverage made from fermented apple juice."),
        ("What is chicha?", "Latin American fermented corn or fruit drink", "Chocolate drink", "Coffee", "Coconut water", "Chicha is a traditional Latin American fermented beverage, historically made from corn."),
        ("What is tamarind juice?", "Drink from tamarind fruit", "Tea variant", "Alcoholic drink", "Tomato juice", "Tamarind juice is made from the tamarind fruit, popular in tropical regions."),
        ("What is ginger beer?", "Fermented ginger drink", "Beer with ginger flavor", "Non-fermented ginger ale", "Alcoholic beer", "Traditional ginger beer is a fermented, lightly alcoholic drink made from ginger, sugar, and water."),
        ("What is ouzo?", "Greek anise-flavored spirit", "Greek wine", "Greek coffee", "Greek yogurt drink", "Ouzo is a Greek anise-flavored alcoholic drink, traditionally served with water."),
        ("What is calpico (Calpis)?", "Japanese non-carbonated soft drink", "Japanese tea", "Rice wine", "Sake variant", "Calpico is a Japanese uncarbonated soft drink with a light, sweet yogurt-like flavor."),
        ("What is switchel?", "Vinegar and ginger drink", "Alcoholic cider", "Lemonade variant", "Herbal tea", "Switchel is a traditional drink made with water, vinegar, ginger, and a sweetener."),
        ("What is sherbet (sharbat)?", "Middle Eastern fruit drink", "Frozen dessert", "Tea", "Alcoholic punch", "Sherbet or sharbat is a Middle Eastern and South Asian sweet fruit drink.")
    ],
    "Water": [
        ("What percentage of Earth's surface is water?", "About 71%", "About 50%", "About 90%", "About 30%", "Water covers approximately 71% of Earth's surface."),
        ("What percentage of Earth's water is freshwater?", "About 2.5%", "About 50%", "About 10%", "About 75%", "Only about 2.5% of Earth's water is freshwater; the rest is saltwater."),
        ("What is mineral water?", "Water containing dissolved minerals", "Artificially flavored water", "Distilled water", "Tap water", "Mineral water comes from underground sources and contains naturally dissolved minerals."),
        ("What is distilled water?", "Water purified by boiling and condensation", "Tap water", "Mineral water", "Sparkling water", "Distilled water is purified by boiling and condensing the steam, removing impurities and minerals."),
        ("What is the chemical formula for water?", "H₂O", "H₂O₂", "HO", "H₃O", "Water's chemical formula is H₂O - two hydrogen atoms and one oxygen atom."),
        ("What is hard water?", "Water with high mineral content", "Frozen water", "Purified water", "Saltwater", "Hard water contains high levels of dissolved minerals, particularly calcium and magnesium."),
        ("What is the process of removing salt from water called?", "Desalination", "Purification", "Filtration", "Distillation", "Desalination is the process of removing salt and other minerals from seawater to make it drinkable."),
        ("What is the recommended daily water intake for adults?", "About 8 cups (2 liters)", "About 2 cups", "About 20 cups", "About 4 cups", "Health guidelines generally recommend about 8 cups (2 liters) of water daily, though needs vary."),
        ("What is spring water?", "Water from natural springs", "Tap water", "Artificially carbonated water", "Filtered rainwater", "Spring water comes from natural underground sources where water flows to the surface."),
        ("What is sparkling water?", "Carbonated water", "Mineral water", "Filtered water", "Flavored water", "Sparkling water is water that has been carbonated with carbon dioxide gas."),
        ("At what temperature does water freeze?", "32°F or 0°C", "20°F or -7°C", "40°F or 4°C", "0°F or -18°C", "Water freezes at 32°F (0°C) at sea level."),
        ("At what temperature does water boil?", "212°F or 100°C at sea level", "180°F or 82°C", "250°F or 121°C", "200°F or 93°C", "Water boils at 212°F (100°C) at sea level; temperature varies with altitude."),
        ("What is alkaline water?", "Water with pH above 7", "Acidic water", "Distilled water", "Mineral-free water", "Alkaline water has a pH level above 7, higher than regular drinking water."),
        ("What is the water cycle?", "Continuous movement of water on Earth", "Water treatment process", "Ocean currents", "River systems", "The water cycle describes the continuous movement of water through evaporation, condensation, and precipitation."),
        ("What is aquifer water?", "Underground layer of water-bearing rock", "Surface water", "Rainwater", "Ocean water", "An aquifer is an underground layer of permeable rock that holds groundwater."),
        ("What is fluoridated water?", "Water with added fluoride", "Filtered water", "Mineral water", "Distilled water", "Fluoridated water has fluoride added to help prevent tooth decay."),
        ("What is the most common contaminant in drinking water?", "Bacteria and microorganisms", "Salt", "Sugar", "Oxygen", "Bacteria and microorganisms are among the most common contaminants requiring water treatment."),
        ("What is reverse osmosis?", "Water purification using membrane filtration", "Water carbonation", "Water distillation", "Water freezing", "Reverse osmosis purifies water by forcing it through a semipermeable membrane."),
        ("What is dehydration?", "Excessive loss of body water", "Water poisoning", "Water filtration", "Water storage", "Dehydration occurs when the body loses more water than it takes in."),
        ("What percentage of the human body is water?", "About 60%", "About 30%", "About 90%", "About 10%", "The adult human body is approximately 60% water by weight.")
    ],
    "Wine": [
        ("What is wine made from?", "Fermented grapes", "Fermented grain", "Distilled grapes", "Grape juice with alcohol added", "Wine is made from fermented grape juice."),
        ("What are the two main categories of wine?", "Red and white", "Sweet and dry", "Old and new", "French and Italian", "The two main categories are red wine and white wine, differentiated by grape type and production method."),
        ("What is a sommelier?", "Wine expert and steward", "Winemaker", "Grape grower", "Wine seller", "A sommelier is a trained wine professional specializing in wine service and pairing."),
        ("What does 'dry' wine mean?", "Low residual sugar", "Low alcohol", "Aged wine", "Red wine", "Dry wine has low residual sugar content, opposite of sweet wine."),
        ("What is Champagne?", "Sparkling wine from Champagne, France", "Any sparkling wine", "Sweet white wine", "Fortified wine", "True Champagne must be produced in the Champagne region of France using specific methods."),
        ("What does 'tannin' in wine mean?", "Compound from grape skins causing dryness", "Sweetness level", "Alcohol content", "Aging time", "Tannins are compounds from grape skins and seeds that create a dry, puckering sensation."),
        ("What is rosé wine?", "Pink wine with limited skin contact", "Blend of red and white wine", "Sweet red wine", "Fortified wine", "Rosé gets its pink color from limited contact with red grape skins during fermentation."),
        ("What is the ideal temperature for storing wine?", "55°F (13°C)", "Room temperature (70°F)", "Refrigerator temperature (40°F)", "Freezing temperature", "Wine should ideally be stored at a consistent 55°F (13°C)."),
        ("What is a vintage wine?", "Wine from grapes of a single year", "Old wine", "Expensive wine", "First wine produced", "Vintage wine is made from grapes harvested in a specific year, which appears on the label."),
        ("What is fortified wine?", "Wine with added spirits", "Extra-strong wine", "Double-fermented wine", "Aged wine", "Fortified wine has distilled spirits (usually brandy) added, increasing alcohol content."),
        ("What is Cabernet Sauvignon?", "Red wine grape variety", "White wine grape", "Wine region", "Winemaking technique", "Cabernet Sauvignon is one of the world's most popular red wine grape varieties."),
        ("What is Chardonnay?", "White wine grape variety", "Red wine grape", "Sparkling wine", "Wine region", "Chardonnay is a green-skinned grape variety used to produce white wine."),
        ("What does 'bouquet' mean in wine?", "Complex aromas from aging", "Flower garnish", "Wine presentation", "Initial taste", "Bouquet refers to the complex aromas that develop in wine as it ages."),
        ("What is Pinot Noir?", "Red wine grape variety", "White wine grape", "Rosé wine", "Sparkling wine only", "Pinot Noir is a red wine grape variety known for its delicate flavor."),
        ("What is decanting?", "Pouring wine to aerate or separate sediment", "Opening the bottle", "Aging wine", "Chilling wine", "Decanting involves pouring wine into another container to aerate it or separate sediment."),
        ("What is Port wine?", "Fortified wine from Portugal", "French red wine", "Sparkling wine", "Light white wine", "Port is a fortified wine from the Douro Valley in Portugal."),
        ("What is an appellation?", "Designated wine-growing region", "Wine aging process", "Type of grape", "Wine bottle size", "An appellation is an officially defined wine-producing region with specific regulations."),
        ("What is the cork in wine bottles made from?", "Bark of cork oak tree", "Plastic", "Rubber", "Compressed grapes", "Traditional wine corks are made from the bark of the cork oak tree."),
        ("What is Merlot?", "Red wine grape variety", "White wine grape", "Wine region", "Serving temperature", "Merlot is a popular red wine grape variety known for its soft, fruity character."),
        ("What does 'body' mean in wine terminology?", "Weight and fullness in the mouth", "Alcohol content", "Color intensity", "Bottle size", "Body refers to how heavy or light a wine feels in the mouth, from light-bodied to full-bodied.")
    ]
}

# Count existing questions per level and add accordingly to reach 40
for category in categories.keys():
    category_path = os.path.join(base_path, category)

    for level in range(1, 11):
        filepath = os.path.join(category_path, f'level{level}.js')

        if not os.path.exists(filepath):
            print(f"Warning: {filepath} does not exist, skipping")
            continue

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        # Count existing questions
        existing_count = content.count('question:')

        if existing_count >= 40:
            print(f"{category} level{level}: already has {existing_count} questions, skipping")
            continue

        # Calculate how many to add
        to_add = 40 - existing_count

        if to_add > 20:
            to_add = 20  # Max 20 from our question bank

        additions = ""
        for q_en, opt1_en, opt2_en, opt3_en, opt4_en, exp_en in categories[category][:to_add]:
            additions += f"""    }},
    {{
      question: {{
        en: "{q_en}",
        es: "{q_en}",
        de: "{q_en}",
        nl: "{q_en}"
      }},
      options: [
        {{ en: "{opt1_en}", es: "{opt1_en}", de: "{opt1_en}", nl: "{opt1_en}" }},
        {{ en: "{opt2_en}", es: "{opt2_en}", de: "{opt2_en}", nl: "{opt2_en}" }},
        {{ en: "{opt3_en}", es: "{opt3_en}", de: "{opt3_en}", nl: "{opt3_en}" }},
        {{ en: "{opt4_en}", es: "{opt4_en}", de: "{opt4_en}", nl: "{opt4_en}" }}
      ],
      correct: 0,
      explanation: {{
        en: "{exp_en}",
        es: "{exp_en}",
        de: "{exp_en}",
        nl: "{exp_en}"
      }}
"""

        content = re.sub(r'(\s+}\s+)\](\s+};)', additions + '\n      }\n    ]\n  };', content)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

        print(f"{category} level{level}: added {to_add} questions ({existing_count}->{existing_count + to_add})")

print("\nDrinks expansion complete!")
