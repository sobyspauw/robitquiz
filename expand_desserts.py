import os
import re

base_path = r'c:\Users\rbosch\OneDrive - A.S. Watson Europe\prive\RobitQuiz\src\questions\data\subjects\desserts'

categories = {
    "Cakes": [
        ("What is the main ingredient in sponge cake?", "Eggs", "Butter", "Flour", "Sugar", "Eggs are the key ingredient that gives sponge cake its light, airy texture through whipped air incorporation."),
        ("What country is the Black Forest cake from?", "Germany", "France", "Austria", "Switzerland", "Black Forest cake (Schwarzwälder Kirschtorte) originated in the Black Forest region of Germany."),
        ("What is a bundt cake?", "Cake baked in a ring-shaped pan", "Layered cake", "Sheet cake", "Cupcake", "A bundt cake is baked in a distinctive ring-shaped bundt pan with decorative fluting."),
        ("What is angel food cake known for?", "Being light and fat-free", "Rich chocolate flavor", "Heavy texture", "Cream cheese frosting", "Angel food cake is light, fluffy, and contains no fat - made primarily from egg whites, sugar, and flour."),
        ("What is the traditional frosting for red velvet cake?", "Cream cheese frosting", "Buttercream", "Ganache", "Whipped cream", "Traditional red velvet cake is topped with cream cheese frosting, complementing its subtle cocoa flavor."),
        ("What makes a pound cake?", "Equal weights of butter, sugar, eggs, flour", "It weighs one pound", "Contains a pound of chocolate", "Served by the pound", "Traditional pound cake uses equal weights (originally one pound each) of butter, sugar, eggs, and flour."),
        ("What is tres leches cake soaked in?", "Three types of milk", "Coffee", "Rum", "Fruit syrup", "Tres leches cake is soaked in three milks: evaporated milk, condensed milk, and heavy cream."),
        ("What is a chiffon cake?", "Light cake made with oil", "Dense butter cake", "Flourless cake", "Frozen cake", "Chiffon cake is a light, airy cake made with vegetable oil instead of butter."),
        ("What is genoise?", "Italian sponge cake", "French chocolate cake", "German fruit cake", "Austrian nut cake", "Genoise is a light Italian sponge cake made with whole eggs whipped with sugar."),
        ("What is upside-down cake?", "Fruit on bottom, flipped when baked", "Cake with holes", "Inverted layers", "Cake served upside down", "Upside-down cake has fruit and caramel on the pan bottom, then flipped after baking so fruit is on top."),
        ("What is a flourless cake made with?", "Ground nuts or chocolate", "Rice flour", "Cornmeal", "Potato starch", "Flourless cakes typically use ground almonds, hazelnuts, or pure chocolate as the structure instead of wheat flour."),
        ("What is Battenberg cake?", "Pink and yellow checkered cake", "Chocolate layer cake", "Fruit cake", "Sponge roll", "Battenberg is a light sponge cake with pink and yellow squares arranged in a checkered pattern, wrapped in marzipan."),
        ("What is a sheet cake?", "Flat cake baked in a sheet pan", "Layered cake", "Ring-shaped cake", "Individual cake", "Sheet cake is a flat, single-layer cake baked in a large, shallow rectangular pan."),
        ("What is the difference between cake and torte?", "Torte uses less flour, more eggs/nuts", "Torte has frosting", "Cake is denser", "No difference", "Tortes typically use ground nuts or breadcrumbs instead of much flour, and contain more eggs than traditional cakes."),
        ("What is opera cake?", "French almond sponge with coffee buttercream", "Italian cream cake", "German chocolate cake", "Austrian apple cake", "Opera cake is a French cake with layers of almond sponge soaked in coffee syrup, layered with coffee buttercream and chocolate ganache."),
        ("What is devil's food cake?", "Rich chocolate cake", "Spicy cake", "Dark fruit cake", "Red cake", "Devil's food cake is a rich, moist chocolate cake, often considered the chocolate counterpart to angel food cake."),
        ("What is a marble cake?", "Vanilla and chocolate swirled together", "Cake with nuts", "Layered cake", "Glazed cake", "Marble cake features vanilla and chocolate batters swirled together to create a marbled pattern."),
        ("What is a dump cake?", "Cake made by dumping ingredients in pan", "Failed cake", "Upside down cake", "Layered cake", "Dump cake is made by dumping ingredients directly into the baking pan without mixing - typically fruit, cake mix, and butter."),
        ("What is Baumkuchen?", "German tree ring cake", "French sponge cake", "Italian nut cake", "Austrian chocolate cake", "Baumkuchen is a German cake baked in thin layers on a rotating spit, creating rings that resemble tree rings when sliced."),
        ("What is the purpose of creaming butter and sugar?", "Incorporate air for lightness", "Add flavor", "Dissolve sugar", "Melt butter", "Creaming butter and sugar together incorporates air into the mixture, creating a lighter cake texture.")
    ],
    "Chocolate Desserts": [
        ("What is ganache made from?", "Chocolate and cream", "Chocolate and butter", "Chocolate and milk", "Chocolate and eggs", "Ganache is made from chocolate and heavy cream, used for glazes, fillings, and truffles."),
        ("What is tempering chocolate?", "Heating and cooling for shine and snap", "Mixing chocolate flavors", "Adding sugar", "Melting chocolate", "Tempering chocolate involves carefully heating and cooling it to create stable crystals for a shiny appearance and crisp snap."),
        ("What is a chocolate truffle?", "Ganache ball coated in cocoa or chocolate", "Chocolate mushroom", "Chocolate cake", "Chocolate cookie", "A chocolate truffle is a ball of chocolate ganache, often coated in cocoa powder, nuts, or tempered chocolate."),
        ("What is the difference between cocoa powder and cacao powder?", "Processing temperature", "Sugar content", "Country of origin", "Color", "Cacao powder is raw and processed at low temperatures, while cocoa powder is roasted at higher temperatures."),
        ("What is Dutch-process cocoa?", "Cocoa treated with alkali", "Cocoa from the Netherlands", "Natural cocoa", "White cocoa", "Dutch-process cocoa is treated with an alkalizing agent to neutralize acidity, creating a darker, milder flavor."),
        ("What is chocolate bloom?", "Fat or sugar crystals on surface", "Chocolate flower decoration", "Melting chocolate", "Chocolate mold", "Bloom appears as white or gray streaks on chocolate caused by fat or sugar crystals separating and rising to the surface."),
        ("What is couverture chocolate?", "High cocoa butter content chocolate for coating", "White chocolate", "Milk chocolate", "Dark chocolate", "Couverture chocolate contains a higher percentage of cocoa butter, making it ideal for coating and dipping due to its fluidity when melted."),
        ("What is a chocolate soufflé?", "Light, airy baked chocolate dessert", "Chocolate mousse", "Chocolate cake", "Chocolate pudding", "A chocolate soufflé is a light, airy baked dessert made with egg yolks, chocolate, and whipped egg whites that rise during baking."),
        ("What are cacao nibs?", "Crushed cacao beans", "Chocolate chips", "Cocoa powder", "Chocolate shavings", "Cacao nibs are pieces of crushed, roasted cacao beans before they're processed into chocolate."),
        ("What is gianduja?", "Chocolate hazelnut mixture", "Italian chocolate cake", "Chocolate syrup", "Chocolate cookie", "Gianduja is a sweet chocolate mixture containing about 30% hazelnut paste, originating in Italy."),
        ("What percentage of cacao makes chocolate 'dark'?", "Typically 70% or higher", "50% or higher", "90% or higher", "Any percentage", "Dark chocolate typically contains 70% or more cacao solids, though some classify 60% and above as dark."),
        ("What is chocolate mousse made with?", "Chocolate and whipped cream or egg whites", "Chocolate and gelatin", "Chocolate and flour", "Chocolate and milk", "Chocolate mousse is made by folding melted chocolate into whipped cream or beaten egg whites for a light, airy texture."),
        ("What is the conching process in chocolate making?", "Prolonged mixing to refine texture and flavor", "Shaping chocolate", "Wrapping chocolate", "Storing chocolate", "Conching is the prolonged mixing and aerating of chocolate to develop flavor and create a smooth texture."),
        ("What is white chocolate made from?", "Cocoa butter, sugar, and milk solids", "White cocoa powder", "Milk chocolate with vanilla", "Bleached chocolate", "White chocolate contains cocoa butter, sugar, and milk solids, but no cocoa solids (the brown part of chocolate)."),
        ("What is a chocolate lava cake?", "Cake with molten chocolate center", "Chocolate cake with icing", "Frozen chocolate dessert", "Chocolate layer cake", "Chocolate lava cake has an intentionally undercooked center that flows out like lava when cut."),
        ("What is chocolate seizing?", "Chocolate becoming grainy and clumpy", "Chocolate hardening", "Chocolate melting", "Chocolate burning", "Seizing occurs when a small amount of water contacts melted chocolate, causing it to become grainy, clumpy, and unusable."),
        ("What is cocoa butter?", "Fat extracted from cacao beans", "Butter flavored with cocoa", "Chocolate spread", "Cocoa powder mixed with butter", "Cocoa butter is the natural fat extracted from cacao beans, giving chocolate its smooth, melt-in-mouth quality."),
        ("What is a flourless chocolate cake?", "Dense cake made primarily with chocolate and eggs", "Chocolate cake without gluten", "Chocolate mousse cake", "Chocolate cheesecake", "Flourless chocolate cake is dense and fudgy, made primarily from chocolate, butter, eggs, and sugar with no flour."),
        ("What is the Maillard reaction in chocolate?", "Browning reaction during roasting", "Melting process", "Crystallization", "Fermentation", "The Maillard reaction occurs when cacao beans are roasted, creating complex flavors through reactions between amino acids and sugars."),
        ("What is ruby chocolate?", "Naturally pink chocolate from ruby cacao beans", "Chocolate with raspberry", "Chocolate with food coloring", "White chocolate dyed pink", "Ruby chocolate is made from ruby cacao beans and has a naturally pink color and berry-like flavor without added colors or flavors.")
    ],
    "Cookies": [
        ("What makes cookies crispy vs. chewy?", "Fat type and baking time", "Sugar amount", "Flour type", "Egg amount", "Butter creates crispy cookies while shortening makes them chewy; longer baking also increases crispness."),
        ("What is a snickerdoodle?", "Cinnamon sugar cookie", "Chocolate chip cookie", "Peanut butter cookie", "Oatmeal cookie", "Snickerdoodles are sugar cookies rolled in cinnamon-sugar before baking, creating a distinctive crackled surface."),
        ("What is the key ingredient in macarons?", "Almond flour", "Coconut", "Hazelnuts", "Walnuts", "Macarons are made with almond flour (ground almonds), egg whites, and sugar, creating their distinctive texture."),
        ("What are biscotti?", "Twice-baked Italian cookies", "Chocolate cookies", "Butter cookies", "Iced cookies", "Biscotti are Italian cookies baked twice - first as a loaf, then sliced and baked again until crispy."),
        ("What cookie is shaped with a cookie press?", "Spritz cookies", "Sugar cookies", "Gingerbread cookies", "Shortbread", "Spritz cookies are made from dough pressed through a cookie press or pastry bag to create decorative shapes."),
        ("What is the difference between cookies and biscuits?", "Regional terminology; biscuits are drier in UK", "Size difference", "Ingredient difference", "No difference", "In the UK, 'biscuits' are typically drier and harder; in the US, 'cookies' can be soft or crispy while 'biscuits' are bread-like."),
        ("What are thumbprint cookies?", "Cookies with jam-filled indentation", "Chocolate cookies", "Sandwich cookies", "Giant cookies", "Thumbprint cookies have an indentation (traditionally made with a thumb) filled with jam, chocolate, or other fillings."),
        ("What is shortbread?", "Scottish butter cookie with 3 ingredients", "Fruit cookie", "Chocolate cookie", "Coconut cookie", "Shortbread is a traditional Scottish cookie made simply from butter, sugar, and flour in a 1:2:3 ratio."),
        ("What are pfeffernüsse?", "German spiced cookies", "Italian nut cookies", "French butter cookies", "American chocolate cookies", "Pfeffernüsse are traditional German spiced cookies, often made during Christmas with pepper, cinnamon, and other spices."),
        ("What makes oatmeal cookies chewy?", "Brown sugar and slightly underbaking", "White sugar", "Overbaking", "Extra flour", "Brown sugar's moisture and slight underbaking keep oatmeal cookies chewy; the oats also contribute to texture."),
        ("What is a florentine cookie?", "Thin cookie with nuts and dried fruit, often chocolate-backed", "Chocolate chip cookie", "Sugar cookie", "Gingerbread cookie", "Florentines are thin, crispy Italian cookies made with nuts and candied fruit, traditionally with chocolate on one side."),
        ("What are Russian tea cakes?", "Buttery nut cookies rolled in powdered sugar", "Tea-flavored cookies", "Layered cookies", "Fruit cookies", "Russian tea cakes (or Mexican wedding cookies) are buttery cookies with finely chopped nuts, rolled in powdered sugar."),
        ("What is a linzer cookie?", "Sandwich cookie with jam filling and cutout top", "Chocolate cookie", "Iced cookie", "Bar cookie", "Linzer cookies are sandwich cookies filled with jam, with a cutout in the top cookie revealing the jam filling."),
        ("What are meringue cookies?", "Cookies made from whipped egg whites and sugar", "Butter cookies", "Chocolate cookies", "Oatmeal cookies", "Meringue cookies are light, crispy cookies made primarily from whipped egg whites and sugar, baked at low temperature."),
        ("What is the purpose of chilling cookie dough?", "Prevent spreading and enhance flavor", "Make it easier to mix", "Add moisture", "Speed up baking", "Chilling cookie dough prevents excessive spreading during baking and allows flavors to develop."),
        ("What are Anzac biscuits?", "Australian/New Zealand oat cookies", "British digestive biscuits", "American graham crackers", "Scottish shortbread", "Anzac biscuits are crispy oat cookies from Australia and New Zealand, traditionally made with golden syrup and coconut."),
        ("What is a whoopie pie?", "Two cake-like cookies with cream filling", "Chocolate chip cookie", "Pie-shaped cookie", "Fruit-filled cookie", "Whoopie pies consist of two soft, cake-like cookies with a creamy filling sandwiched between them."),
        ("What makes gingersnaps 'snap'?", "High molasses content and baking until crisp", "Ginger amount", "Flour type", "Size", "Gingersnaps are crispy due to molasses and baking until fully crisp, creating their distinctive 'snap' when broken."),
        ("What is a Moravian cookie?", "Very thin, crispy spiced cookie", "Thick soft cookie", "Sandwich cookie", "No-bake cookie", "Moravian cookies are paper-thin, crispy spiced cookies traditional to the Moravian communities of North Carolina."),
        ("What are ladyfingers?", "Light, finger-shaped sponge cookies", "Cookies shaped like hands", "Almond cookies", "Chocolate cookies", "Ladyfingers are light, dry, finger-shaped sponge cookies often used in tiramisu and charlottes.")
    ],
    "Custards": [
        ("What is the main thickening agent in custard?", "Eggs", "Flour", "Cornstarch", "Gelatin", "Eggs are the primary thickening agent in custard, as the proteins coagulate when heated."),
        ("What is crème brûlée?", "Custard with caramelized sugar top", "Chocolate custard", "Frozen custard", "Custard pie", "Crème brûlée is a rich custard dessert topped with a hard layer of caramelized sugar."),
        ("What temperature should custard reach to thicken?", "170-180°F (77-82°C)", "212°F (100°C)", "140°F (60°C)", "200°F (93°C)", "Custard thickens when eggs coagulate at 170-180°F; higher temperatures risk curdling."),
        ("What is flan?", "Caramel-topped custard dessert", "Chocolate pudding", "Cream pie", "Frozen dessert", "Flan is a baked custard dessert with a layer of soft caramel on top, popular in Latin American and European cuisines."),
        ("What is the difference between custard and pudding?", "Custard uses eggs as thickener; pudding often uses starch", "No difference", "Custard is frozen", "Pudding is baked", "Custard is thickened primarily with eggs, while pudding often uses cornstarch or other starches as thickeners."),
        ("What is pastry cream?", "Thick custard with cornstarch for stability", "Whipped cream", "Cream cheese frosting", "Buttercream", "Pastry cream (crème pâtissière) is custard stabilized with cornstarch or flour, used as filling for pastries and desserts."),
        ("What causes custard to curdle?", "Too high heat or overcooking", "Too much sugar", "Not enough eggs", "Cold temperature", "Custard curdles when heated too quickly or to too high a temperature, causing egg proteins to separate."),
        ("What is a water bath (bain-marie) used for in custard baking?", "Gentle, even heat to prevent curdling", "Speed up cooking", "Add moisture", "Cool down custard", "A water bath provides gentle, even heat that prevents custard from overheating and curdling."),
        ("What is pot de crème?", "French baked custard dessert", "Chocolate mousse", "Whipped cream", "Ice cream", "Pot de crème is a French dessert of rich, creamy baked custard served in small pots or ramekins."),
        ("What is zabaglione?", "Italian custard made with egg yolks, sugar, and wine", "French custard", "Chocolate pudding", "Frozen custard", "Zabaglione (sabayon in French) is a light Italian custard made by whisking egg yolks, sugar, and sweet wine over heat."),
        ("What is the purpose of tempering eggs when making custard?", "Gradually raise temperature to prevent curdling", "Add flavor", "Thicken faster", "Change color", "Tempering involves slowly adding hot liquid to eggs while whisking to gradually raise their temperature without cooking them into scrambled eggs."),
        ("What is crème anglaise?", "Pourable vanilla custard sauce", "Thick custard", "Whipped cream", "Pudding", "Crème anglaise is a light, pourable custard sauce flavored with vanilla, often served with desserts."),
        ("What is the ideal consistency of properly cooked custard?", "Coats the back of a spoon", "Very thick and stiff", "Completely liquid", "Lumpy", "Properly cooked custard should be thick enough to coat the back of a spoon and hold a line when you draw your finger through it."),
        ("What is diplomat cream?", "Pastry cream lightened with whipped cream", "Custard with alcohol", "Chocolate custard", "Frozen custard", "Diplomat cream is pastry cream folded with whipped cream, creating a lighter filling for pastries."),
        ("What is the French name for caramel custard?", "Crème caramel", "Crème brûlée", "Crème anglaise", "Pot de crème", "Crème caramel is the French term for custard with liquid caramel sauce, similar to flan."),
        ("What is chiboust cream?", "Pastry cream lightened with meringue", "Whipped cream", "Chocolate custard", "Butter cream", "Chiboust cream is pastry cream lightened with Italian meringue, used in desserts like Saint-Honoré cake."),
        ("What milk fat percentage is best for rich custard?", "Whole milk or cream (3.5%+)", "Skim milk", "1% milk", "2% milk", "Whole milk (3.5% fat) or cream creates the richest, creamiest custard texture."),
        ("What is a stirred custard vs. baked custard?", "Stirred is made on stovetop; baked in oven", "Stirred has more eggs", "Baked uses starch", "No difference", "Stirred custard is cooked on the stovetop with constant stirring; baked custard is cooked in the oven without stirring."),
        ("What is the purpose of straining custard?", "Remove any cooked egg bits for smooth texture", "Add air", "Cool it down", "Thicken it", "Straining custard removes any bits of cooked egg or other lumps, ensuring a perfectly smooth, silky texture."),
        ("What is frozen custard?", "Ice cream-like dessert with eggs", "Custard stored in freezer", "Ice cream without eggs", "Frozen pudding", "Frozen custard is similar to ice cream but contains egg yolks and is churned at a higher temperature, creating a denser, creamier texture.")
    ],
    "Donuts": [
        ("What is a raised donut?", "Yeast-leavened donut", "Baked donut", "Cake donut", "Filled donut", "Raised donuts are light and airy because they're leavened with yeast rather than baking powder."),
        ("What is a cake donut?", "Donut leavened with baking powder", "Donut shaped like a cake", "Donut with frosting", "Yeast donut", "Cake donuts are denser than raised donuts because they're leavened with baking powder or baking soda instead of yeast."),
        ("What is a cruller?", "Twisted or braided fried donut", "Filled donut", "Glazed donut", "Cake donut", "A cruller is a twisted or braided donut, often made from choux pastry, with a light, crispy texture."),
        ("What temperature should oil be for frying donuts?", "350-375°F (175-190°C)", "400°F (200°C)", "300°F (150°C)", "425°F (220°C)", "Donuts should be fried at 350-375°F for proper cooking - lower causes greasiness, higher causes burning."),
        ("What is a beignet?", "French fried dough covered in powdered sugar", "French cake donut", "Filled donut", "Glazed donut", "Beignets are squares of fried dough generously covered with powdered sugar, traditional to New Orleans."),
        ("What causes donuts to be greasy?", "Oil temperature too low", "Oil temperature too high", "Too much sugar", "Too much flour", "If frying oil is too cool, donuts absorb excess oil and become greasy instead of crispy."),
        ("What is a Long John donut?", "Rectangular filled donut", "Round glazed donut", "Twisted donut", "Donut hole", "A Long John is an elongated, rectangular donut, usually filled with cream or custard and topped with icing."),
        ("What are donut holes?", "Small round donuts from center cutouts", "Failed donuts", "Donut-shaped holes", "Mini filled donuts", "Donut holes are small, round pieces of fried dough, originally made from the centers cut out of ring donuts."),
        ("What is a Boston cream donut?", "Round donut filled with custard, topped with chocolate", "Donut from Boston", "Cream-filled long john", "Glazed donut", "A Boston cream donut is round, filled with custard or cream, and topped with chocolate icing."),
        ("What is the origin of the donut hole in the center?", "Allows even cooking throughout", "Saves dough", "Traditional decoration", "Easier to hold", "The hole in the center allows the donut to cook evenly throughout - the center would be raw without it."),
        ("What is a French cruller made from?", "Choux pastry", "Yeast dough", "Cake batter", "Bread dough", "French crullers are made from choux pastry (same as cream puffs), piped into rings and fried."),
        ("What glaze is traditionally used on donuts?", "Powdered sugar and milk/water", "Chocolate ganache", "Caramel", "Buttercream", "Traditional donut glaze is made from powdered sugar mixed with milk or water, sometimes with vanilla added."),
        ("What is a jelly donut?", "Round donut filled with jam or jelly", "Donut topped with jelly", "Ring donut", "Glazed donut", "Jelly donuts are round, filled donuts injected with fruit jam or jelly, often dusted with powdered sugar."),
        ("What is proofing in donut making?", "Letting yeast dough rise", "Testing oil temperature", "Checking for doneness", "Glazing donuts", "Proofing is the process of letting yeast-raised donut dough rise before frying, allowing the yeast to create air pockets."),
        ("What is an old-fashioned donut?", "Crackly-surfaced cake donut", "Yeast donut", "Filled donut", "Glazed donut", "Old-fashioned donuts are cake donuts with a distinctive crackly, craggy surface texture."),
        ("What is a buttermilk donut?", "Cake donut made with buttermilk", "Donut filled with buttermilk", "Yeast donut", "Glazed donut", "Buttermilk donuts are cake-style donuts made with buttermilk, which creates a tender crumb and slight tang."),
        ("What is the difference between a donut and a doughnut?", "Just spelling; same thing", "Different shapes", "Different ingredients", "Donut is baked, doughnut is fried", "Donut and doughnut are simply different spellings of the same food; 'donut' is a simplified American spelling."),
        ("What is a bar donut?", "Rectangular or bar-shaped donut", "Donut with chocolate bar pieces", "Donut sold in bars", "Extra-large donut", "Bar donuts are rectangular or bar-shaped, similar to Long Johns, often topped with glaze or icing."),
        ("What causes donuts to be tough?", "Overmixing the dough", "Undermixing", "Oil too hot", "Too much sugar", "Overmixing donut dough develops too much gluten, resulting in tough, chewy donuts instead of tender ones."),
        ("What is a maple bar?", "Bar donut with maple frosting", "Donut with maple filling", "Canadian donut", "Round donut with maple glaze", "A maple bar is a rectangular bar donut topped with maple-flavored frosting or glaze.")
    ],
    "Fruit Desserts": [
        ("What is a cobbler?", "Fruit with biscuit-like topping", "Fruit pie with two crusts", "Layered fruit dessert", "Fruit with ice cream", "Cobbler consists of fruit topped with a biscuit-like dough that resembles a cobblestone street when baked."),
        ("What is a crisp (or crumble)?", "Fruit with streusel topping", "Fruit with pastry crust", "Fruit with meringue", "Fruit with cake", "A crisp or crumble features fruit topped with a streusel-like mixture of butter, sugar, flour, and sometimes oats."),
        ("What is a fruit fool?", "Pureed fruit mixed with whipped cream", "Fruit pie", "Fruit tart", "Fruit cake", "A fruit fool is a traditional British dessert of pureed or stewed fruit folded into whipped cream."),
        ("What is poached fruit?", "Fruit gently simmered in liquid", "Grilled fruit", "Baked fruit", "Raw fruit", "Poached fruit is gently cooked by simmering in liquid such as wine, syrup, or juice until tender."),
        ("What is a clafoutis?", "French baked fruit dessert with custard", "Fruit tart", "Fruit compote", "Fruit pie", "Clafoutis is a French dessert with fruit (traditionally cherries) covered with a thick custard-like batter and baked."),
        ("What is a fruit compote?", "Fruit stewed in sugar syrup", "Raw fruit salad", "Fruit pie", "Dried fruit", "Compote is fruit slowly cooked in sugar syrup, creating a chunky, syrupy fruit mixture."),
        ("What is Pavlova?", "Meringue dessert topped with fruit and cream", "Fruit cake", "Fruit tart", "Fruit ice cream", "Pavlova is a meringue-based dessert with a crisp crust and soft inside, topped with whipped cream and fresh fruit."),
        ("What is a fruit tart?", "Pastry shell filled with custard and fruit", "Fruit pie", "Fruit cake", "Fruit pudding", "A fruit tart has a pastry shell filled with pastry cream or custard and topped with fresh fruit, often glazed."),
        ("What is bananas Foster?", "Bananas in caramel rum sauce, often flambéed", "Banana bread", "Banana cream pie", "Banana split", "Bananas Foster features bananas cooked in butter, brown sugar, cinnamon, and rum sauce, often flambéed tableside."),
        ("What is a buckle?", "Cake with fruit mixed in, streusel topping", "Fruit pie", "Fruit tart", "Fruit cobbler", "A buckle is a cake with fruit mixed into the batter and a streusel topping that 'buckles' as it bakes."),
        ("What is a grunt or slump?", "Fruit stewed with dumpling topping", "Fruit pie", "Fruit tart", "Fruit cake", "A grunt (or slump) is fruit stewed on the stovetop with biscuit-like dumplings steamed on top."),
        ("What is Eton mess?", "Meringue, cream, and berries mixed together", "Fruit tart", "Fruit cake", "Fruit pie", "Eton mess is a British dessert of crushed meringue, whipped cream, and strawberries mixed together."),
        ("What is a fruit galette?", "Free-form rustic fruit tart", "Layered fruit cake", "Fruit pudding", "Fruit pie", "A galette is a free-form tart with fruit in the center and pastry edges folded over, more rustic than a traditional tart."),
        ("What is flambé?", "Setting alcohol-soaked dessert on fire", "Grilling fruit", "Caramelizing sugar", "Freezing dessert", "Flambé involves pouring liquor over a dessert and igniting it, creating dramatic flames and enhancing flavor."),
        ("What is a brown Betty?", "Fruit dessert with buttered breadcrumb layers", "Fruit pie", "Fruit tart", "Fruit cake", "Brown Betty is a fruit dessert made with layers of spiced fruit and buttered breadcrumbs."),
        ("What is macerated fruit?", "Fruit soaked in liquid and sugar", "Grilled fruit", "Pureed fruit", "Dried fruit", "Macerated fruit is soaked in liquid (wine, liqueur, juice) with sugar, which draws out juices and creates a syrup."),
        ("What is the best way to prevent fruit pies from becoming soggy?", "Blind bake crust and use thickener", "Use less fruit", "Bake at low temperature", "Add extra sugar", "Blind baking the bottom crust and using proper thickener (cornstarch, tapioca) prevents soggy fruit pie bottoms."),
        ("What is a summer pudding?", "Bread-lined mold filled with stewed berries", "Fruit pie", "Fruit tart", "Fruit ice cream", "Summer pudding is a British dessert of bread slices lining a mold, filled with stewed summer berries, then weighted and chilled."),
        ("What is a fruit charlotte?", "Dessert with bread/ladyfingers lining mold, filled with fruit", "Fruit tart", "Fruit pie", "Fruit cake", "A charlotte features bread slices or ladyfingers lining a mold, filled with fruit and custard or mousse."),
        ("What is ambrosia?", "Fruit salad with coconut and marshmallows", "Fruit pie", "Fruit tart", "Fruit cake", "Ambrosia is an American fruit salad typically made with oranges, pineapple, coconut, marshmallows, and sometimes whipped cream.")
    ],
    "Ice Cream Desserts": [
        ("What is the difference between ice cream and gelato?", "Gelato has less air and fat, served warmer", "No difference", "Gelato is frozen custard", "Ice cream has no eggs", "Gelato contains less air (churned slower) and fat than ice cream, and is served at a slightly warmer temperature for creamier texture."),
        ("What is a baked Alaska?", "Ice cream and cake covered with meringue, baked briefly", "Frozen cake", "Ice cream pie", "Layered ice cream", "Baked Alaska features ice cream and cake covered with meringue, briefly baked so meringue browns while ice cream stays frozen."),
        ("What is a sundae?", "Ice cream with toppings and sauce", "Frozen yogurt", "Ice cream cake", "Milkshake", "A sundae is ice cream served with toppings like sauce, whipped cream, nuts, and a cherry."),
        ("What is a parfait?", "Layered ice cream or yogurt dessert", "Ice cream sandwich", "Milkshake", "Ice cream cone", "A parfait is a dessert with layers of ice cream, yogurt, or mousse alternated with fruit, granola, or other ingredients."),
        ("What is gelato's origin?", "Italy", "France", "United States", "Switzerland", "Gelato originated in Italy and remains an important part of Italian culinary culture."),
        ("What is sorbet?", "Frozen dessert made from fruit and sugar, no dairy", "Ice cream", "Frozen yogurt", "Gelato", "Sorbet is a frozen dessert made from fruit puree and sugar with no dairy products."),
        ("What is an ice cream sandwich?", "Ice cream between two cookies or wafers", "Ice cream in a cone", "Ice cream sundae", "Ice cream cake", "An ice cream sandwich consists of ice cream layered between two cookies, wafers, or cake layers."),
        ("What is spumoni?", "Italian molded ice cream with layers and nuts/fruit", "Ice cream sundae", "Gelato", "Sorbet", "Spumoni is a molded Italian ice cream with layers of different flavors and colors, typically containing nuts and candied fruit."),
        ("What is the purpose of churning ice cream?", "Incorporate air for smooth texture", "Freeze it faster", "Add flavor", "Change color", "Churning incorporates air into ice cream while freezing, preventing large ice crystals and creating smooth, scoopable texture."),
        ("What is sherbet?", "Frozen dessert with fruit and small amount of dairy", "Ice cream", "Sorbet", "Gelato", "Sherbet contains fruit and a small amount of dairy (1-2% milk fat), making it creamier than sorbet but lighter than ice cream."),
        ("What is a banana split?", "Banana with scoops of ice cream, toppings, and sauces", "Banana ice cream", "Ice cream sundae", "Milkshake", "A banana split features a banana cut lengthwise with three scoops of ice cream, toppings, sauces, whipped cream, and a cherry."),
        ("What is an affogato?", "Gelato or ice cream with hot espresso poured over", "Iced coffee", "Coffee ice cream", "Frozen coffee", "Affogato is Italian for 'drowned' - vanilla gelato or ice cream 'drowned' with a shot of hot espresso poured over it."),
        ("What causes ice crystals in homemade ice cream?", "Slow freezing or temperature fluctuations", "Too much sugar", "Not enough cream", "Overchurning", "Ice crystals form when ice cream freezes too slowly or experiences temperature fluctuations, causing water to form large crystals."),
        ("What is soft serve ice cream?", "Ice cream served at warmer temperature, directly from machine", "Regular ice cream", "Frozen yogurt", "Gelato", "Soft serve is ice cream served immediately from the freezing machine at a warmer temperature, giving it a soft, creamy texture."),
        ("What is a semifreddo?", "Partially frozen Italian dessert", "Ice cream", "Gelato", "Sorbet", "Semifreddo means 'half-frozen' in Italian - a partially frozen dessert similar to frozen mousse, lighter than ice cream."),
        ("What is the ideal fat content for creamy ice cream?", "10-16% milk fat", "5% milk fat", "20% milk fat", "No fat needed", "Premium ice cream typically contains 10-16% milk fat, which contributes to creamy texture and flavor."),
        ("What is a float?", "Ice cream in soda or beverage", "Ice cream on cake", "Milkshake", "Ice cream sundae", "A float (or ice cream soda) is ice cream served in soda, root beer, or other carbonated beverage."),
        ("What is granita?", "Italian semi-frozen dessert with granular texture", "Ice cream", "Gelato", "Smooth sorbet", "Granita is a semi-frozen Italian dessert made from sugar, water, and flavorings, with a grainy, crystalline texture."),
        ("What is the overrun in ice cream?", "Amount of air incorporated during churning", "Amount of sugar", "Freezing time", "Melting rate", "Overrun refers to the amount of air incorporated into ice cream during churning, expressed as a percentage of volume increase."),
        ("What is a Neapolitan ice cream?", "Three-flavor layered ice cream (vanilla, chocolate, strawberry)", "Italian ice cream", "Ice cream from Naples", "Molded ice cream", "Neapolitan ice cream features three distinct flavors in layers - traditionally vanilla, chocolate, and strawberry.")
    ],
    "International Desserts": [
        ("What is baklava?", "Middle Eastern pastry with nuts and honey syrup", "Greek cake", "Turkish cookie", "Indian sweet", "Baklava is a Middle Eastern dessert made of layers of phyllo dough filled with chopped nuts and sweetened with honey or syrup."),
        ("What is tiramisu?", "Italian dessert with coffee-soaked ladyfingers and mascarpone", "French pastry", "Spanish custard", "German cake", "Tiramisu is an Italian dessert made with layers of coffee-soaked ladyfingers and a mascarpone cream mixture, dusted with cocoa."),
        ("What is mochi?", "Japanese rice cake", "Chinese cookie", "Korean pastry", "Thai dessert", "Mochi is a Japanese dessert made from glutinous rice pounded into a paste and molded into shape, often filled with sweet bean paste."),
        ("What is gulab jamun?", "Indian fried milk-solid balls in syrup", "Pakistani rice pudding", "Bangladeshi cookie", "Sri Lankan cake", "Gulab jamun consists of fried balls made from milk solids, soaked in rose-flavored sugar syrup."),
        ("What is churros?", "Spanish fried dough pastry", "Mexican cake", "Portuguese cookie", "Italian donut", "Churros are Spanish fried dough pastries, typically dusted with cinnamon sugar and often served with chocolate for dipping."),
        ("What is panna cotta?", "Italian cooked cream dessert", "French custard", "Spanish flan", "Greek yogurt dessert", "Panna cotta is an Italian dessert of sweetened cream thickened with gelatin and molded."),
        ("What is tres leches cake from?", "Latin America", "Spain", "Italy", "France", "Tres leches cake originated in Latin America and is popular throughout Mexico, Central, and South America."),
        ("What is a pavlova?", "Meringue dessert from Australia/New Zealand", "French tart", "Italian cake", "British pudding", "Pavlova is a meringue-based dessert from Australia/New Zealand, with a crisp crust, soft inside, topped with fruit and cream."),
        ("What is knafeh?", "Middle Eastern cheese pastry with syrup", "Greek phyllo dessert", "Turkish delight", "Lebanese cookie", "Knafeh is a Middle Eastern dessert made with cheese or cream, layered with shredded phyllo, and soaked in sweet syrup."),
        ("What is a sufganiyah?", "Israeli jelly-filled donut", "French pastry", "German cookie", "Polish cake", "Sufganiyah is an Israeli jelly-filled donut traditionally eaten during Hanukkah."),
        ("What is mille-feuille?", "French layered pastry with cream", "Italian cake", "Spanish cookie", "German tart", "Mille-feuille (thousand leaves) is a French pastry with layers of puff pastry and pastry cream, topped with icing."),
        ("What is kulfi?", "Indian frozen dessert similar to ice cream", "Pakistani cake", "Bangladeshi pudding", "Sri Lankan cookie", "Kulfi is a dense, creamy frozen Indian dessert made from reduced milk, similar to but denser than ice cream."),
        ("What is sticky toffee pudding from?", "Britain", "France", "United States", "Australia", "Sticky toffee pudding is a British dessert of moist sponge cake made with dates, covered in toffee sauce."),
        ("What is a flan?", "Caramel custard dessert from Spain/Latin America", "French tart", "Italian pudding", "Portuguese cake", "Flan is a baked custard dessert with caramel sauce, popular in Spain and Latin America."),
        ("What is daifuku?", "Japanese mochi with sweet filling", "Chinese dumpling", "Korean rice cake", "Thai dessert", "Daifuku is Japanese mochi stuffed with sweet filling, typically red bean paste."),
        ("What is a Queen of Puddings?", "British dessert with jam and meringue", "French tart", "American cake", "Italian pudding", "Queen of Puddings is a British dessert made with breadcrumbs, milk, eggs, jam, and topped with meringue."),
        ("What is a cannoli?", "Italian pastry tube filled with sweet ricotta", "French cream puff", "Spanish churro", "Greek cookie", "Cannoli is a Sicilian pastry consisting of a tube-shaped fried pastry shell filled with sweetened ricotta cheese."),
        ("What is rasgulla?", "Indian syrup-soaked cheese balls", "Pakistani rice pudding", "Bangladeshi cake", "Sri Lankan cookie", "Rasgulla consists of cheese balls made from chhena (cottage cheese) cooked in sugar syrup."),
        ("What is alfajores?", "South American sandwich cookie with dulce de leche", "Spanish tart", "Portuguese cake", "Mexican pastry", "Alfajores are South American sandwich cookies filled with dulce de leche and often coated in chocolate or powdered sugar."),
        ("What is a tarte Tatin?", "French upside-down caramelized apple tart", "Italian pie", "British pudding", "German cake", "Tarte Tatin is a French upside-down tart where apples are caramelized in butter and sugar before the pastry is placed on top.")
    ],
    "Pastries": [
        ("What is puff pastry?", "Laminated dough with many butter layers", "Sweet cookie dough", "Bread dough", "Pie crust", "Puff pastry is made by folding butter into dough multiple times, creating hundreds of thin layers that puff up when baked."),
        ("What is choux pastry?", "Cooked dough that puffs into hollow shells", "Flaky dough", "Sweet dough", "Bread dough", "Choux pastry is made by cooking flour, water, and butter, then beating in eggs; it puffs into hollow shells when baked."),
        ("What is a croissant?", "French crescent-shaped laminated pastry", "Danish pastry", "Sweet roll", "Pie crust", "Croissants are French crescent-shaped pastries made from laminated yeast dough with multiple butter layers."),
        ("What is phyllo dough?", "Paper-thin unleavened dough", "Puff pastry", "Pie dough", "Bread dough", "Phyllo (or filo) is unleavened dough rolled into paper-thin sheets, used in Middle Eastern and Mediterranean pastries."),
        ("What is the difference between puff pastry and phyllo?", "Puff pastry is laminated with butter; phyllo is rolled thin", "No difference", "Phyllo contains yeast", "Puff pastry is sweeter", "Puff pastry achieves layers through lamination with butter; phyllo is rolled extremely thin and brushed with butter between sheets."),
        ("What is an éclair?", "Choux pastry filled with cream, topped with icing", "Croissant", "Danish pastry", "Tart", "An éclair is an elongated choux pastry filled with cream and topped with icing, typically chocolate."),
        ("What is a palmier?", "Puff pastry cookie shaped like palm leaf", "Croissant", "Danish", "Éclair", "Palmiers are cookies made from puff pastry rolled in sugar and shaped to resemble palm leaves or elephant ears."),
        ("What is a Danish pastry?", "Sweet laminated pastry often with filling", "Croissant", "Puff pastry", "Choux pastry", "Danish pastries are sweet laminated yeast doughs, often filled with fruit, cream cheese, or custard."),
        ("What is a profiterole?", "Choux pastry puff filled with cream", "Éclair", "Croissant", "Tart", "Profiteroles are small choux pastry puffs filled with cream or ice cream, often served with chocolate sauce."),
        ("What is lamination in pastry making?", "Folding butter into dough to create layers", "Rolling dough thin", "Adding yeast", "Baking at high temperature", "Lamination involves repeatedly folding butter into dough, creating hundreds of distinct layers that separate during baking."),
        ("What is a vol-au-vent?", "Round puff pastry case for savory or sweet fillings", "Croissant", "Danish", "Éclair", "Vol-au-vent is a round puff pastry case with a hollow center, used for both savory and sweet fillings."),
        ("What is the ideal temperature for baking puff pastry?", "400-425°F (200-220°C)", "325°F (160°C)", "475°F (245°C)", "350°F (175°C)", "Puff pastry needs high heat (400-425°F) to create steam quickly, which separates the layers and makes it puff."),
        ("What is a Paris-Brest?", "Choux pastry ring filled with praline cream", "Croissant", "Danish", "Tart", "Paris-Brest is a choux pastry ring topped with sliced almonds and filled with praline-flavored cream."),
        ("What is a strudel?", "Rolled pastry with sweet or savory filling", "Danish pastry", "Croissant", "Éclair", "Strudel is a pastry made with very thin dough rolled around a filling, most famously apple strudel."),
        ("What causes puff pastry to be tough instead of flaky?", "Overworking the dough or warm butter", "Too much butter", "Baking too hot", "Not enough layers", "Overworking the dough or using warm butter can develop gluten and blend the layers, resulting in tough rather than flaky pastry."),
        ("What is a religieuse?", "Pastry resembling a nun, made from choux", "Croissant", "Danish", "Tart", "Religieuse (French for 'nun') is made from two choux pastry puffs stacked and decorated to resemble a nun."),
        ("What is the purpose of docking pastry?", "Prevent puffing by pricking holes", "Add decoration", "Let steam escape", "Speed up baking", "Docking (pricking holes) prevents pastry from puffing in areas where you want it to stay flat, like tart bottoms."),
        ("What is a mille-feuille made from?", "Layers of puff pastry and cream", "Choux pastry", "Phyllo dough", "Shortcrust pastry", "Mille-feuille (thousand sheets) is made from layers of puff pastry with pastry cream between them."),
        ("What is blind baking?", "Pre-baking pastry shell without filling", "Baking without looking", "Baking in dark oven", "Baking covered", "Blind baking means pre-baking a pastry shell (often with weights) before adding filling, to prevent sogginess."),
        ("What is a croquembouche?", "French dessert tower of cream puffs", "Croissant", "Danish pastry", "Tart", "Croquembouche is a French dessert consisting of choux pastry cream puffs stacked into a cone and bound with caramel.")
    ],
    "Puddings": [
        ("What is the British definition of pudding?", "Any dessert or sweet course", "Only custard-based desserts", "Only steamed desserts", "Only chocolate desserts", "In British English, 'pudding' refers broadly to any dessert or the dessert course of a meal."),
        ("What is bread pudding?", "Dessert made from stale bread, milk, eggs, and sugar", "Bread-shaped pudding", "Pudding with bread topping", "Bread-flavored pudding", "Bread pudding is made by baking stale bread soaked in a mixture of milk, eggs, sugar, and often spices."),
        ("What is rice pudding?", "Rice cooked in milk and sugar", "Rice-shaped pudding", "Pudding with rice topping", "Rice-flavored gelatin", "Rice pudding is made by slowly cooking rice in milk with sugar, creating a creamy dessert."),
        ("What is a steamed pudding?", "Pudding cooked by steaming rather than baking", "Pudding made with steam", "Hot pudding", "Pudding served with steam", "Steamed pudding is cooked by steaming in a covered mold rather than baking, creating a moist, dense texture."),
        ("What is tapioca pudding?", "Pudding made with tapioca pearls", "Tropical fruit pudding", "Tea-flavored pudding", "Rice pudding", "Tapioca pudding is made by cooking tapioca pearls in milk with sugar, creating a pudding with distinctive chewy pearls."),
        ("What is Christmas pudding?", "British steamed fruit pudding", "Chocolate pudding", "Vanilla pudding", "Ice cream pudding", "Christmas pudding is a traditional British steamed pudding made with dried fruits, spices, and often alcohol."),
        ("What is figgy pudding?", "Steamed pudding with figs or dried fruit", "Fig-shaped pudding", "Pudding topped with figs", "Fig-flavored ice cream", "Figgy pudding is a steamed British pudding traditionally made with figs or other dried fruits."),
        ("What is semolina pudding?", "Pudding made from semolina flour cooked in milk", "Pudding with semolina topping", "Chocolate pudding", "Rice pudding", "Semolina pudding is made by cooking semolina flour in milk with sugar until thick and creamy."),
        ("What is hasty pudding?", "Quick-cooked porridge-like pudding", "Rushed dessert", "Instant pudding", "Fast-setting gelatin", "Hasty pudding is a simple, quick-cooked pudding made from grain (cornmeal or flour) cooked in milk or water."),
        ("What is syllabub?", "British whipped cream and wine dessert", "Bread pudding", "Rice pudding", "Chocolate pudding", "Syllabub is a traditional British dessert made from whipped cream mixed with wine or cider and sugar."),
        ("What is spotted dick?", "British steamed pudding with currants", "Chocolate chip pudding", "Fruit-topped pudding", "Pudding with sauce", "Spotted dick is a traditional British steamed pudding made with suet and dried currants, which appear as 'spots'."),
        ("What is Indian pudding?", "American cornmeal and molasses pudding", "Pudding from India", "Spiced rice pudding", "Tapioca pudding", "Indian pudding is a traditional New England dessert made from cornmeal, molasses, and milk, baked slowly."),
        ("What is butterscotch pudding?", "Pudding flavored with brown sugar and butter", "Scotch whisky pudding", "Pudding with butterscotch topping", "Caramel pudding", "Butterscotch pudding is flavored with brown sugar and butter, creating a rich, caramel-like flavor distinct from caramel."),
        ("What is the difference between pudding and custard?", "Pudding often uses starch; custard uses eggs", "No difference", "Pudding is frozen", "Custard is baked", "American pudding typically uses cornstarch as thickener, while custard is thickened primarily with eggs."),
        ("What is plum pudding?", "Steamed fruit pudding (often no plums)", "Pudding made with plums", "Plum-shaped dessert", "Plum-flavored gelatin", "Plum pudding (now often called Christmas pudding) is a steamed fruit pudding that rarely contains actual plums - 'plum' referred to any dried fruit."),
        ("What is sago pudding?", "Pudding made with sago pearls", "Sage-flavored pudding", "Pudding from sago palm", "Tapioca pudding", "Sago pudding is made with sago pearls (from sago palm starch) cooked in milk, similar to tapioca pudding."),
        ("What is blancmange?", "Almond-flavored molded pudding", "White chocolate pudding", "French vanilla pudding", "Coconut pudding", "Blancmange is a sweet dessert made with milk, sugar, and gelatin or cornstarch, traditionally flavored with almonds."),
        ("What is a trifle?", "Layered dessert with cake, custard, fruit, and cream", "Chocolate pudding", "Rice pudding", "Bread pudding", "Trifle is a British layered dessert typically made with sponge cake, fruit, custard, and whipped cream in a glass bowl."),
        ("What is pease pudding?", "Savory split pea pudding (not a dessert)", "Sweet pea pudding", "Green pudding", "Pea-shaped dessert", "Pease pudding is actually a savory dish made from boiled split peas, traditionally served with ham - not a dessert."),
        ("What causes skin on top of pudding?", "Milk proteins drying on surface", "Too much sugar", "Overcooking", "Wrong temperature", "Skin forms when milk proteins dry on the pudding's surface; prevent it by covering with plastic wrap touching the surface.")
    ]
}

for category, questions in categories.items():
    category_path = os.path.join(base_path, category)

    for level in range(1, 11):
        filepath = os.path.join(category_path, f'level{level}.js')

        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        additions = ""
        for q_en, opt1_en, opt2_en, opt3_en, opt4_en, exp_en in questions:
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

        print(f"{category} level{level}: added 20 questions (20->40)")

print("\nDesserts expansion complete!")
