function aboutRandom() {
    var field = document.getElementById("opinion-text");
    var opinions = ["I use tabs instead of spaces", "I frankly don't mind pineapple on pizza", 
    "I favor neither Coke or Pepsi, Sprite reigns supreme", "Windows < Manjaro", "I've used camel casing for variable names", 
    "I rarely run unit tests on my projects", "I store ketchup in the fridge", "A hotdog is not a sandwich", 
    "It's pronounced GIF", "I put the milk in after the cereal", "No, cereal is not a soup", 
    "I use 4 instead of 2 spaces for indentations", "Comic sans looks awful", "Netflix is for millennials", 
    "I say GUI, not gooey", "Modern wireless mice have no latency disadvantage compared to wired ones", 
    "0 to 120 mph acceleration in cars is overrated", "Showers are better than baths", "I sleep face-first and on my side", 
    "Adobe is overrated", "The Hyperloop is impractical", "I add pass to close off indendations in Python", 
    "Screws > Single-Use Adhesive", "People who rip tape apart instead of using scissors are monsters", 
    "Mayo does not belong on anything", "Fanless cooling design is a weak mindset", "Java is verbose", 
    "Neuralink is three steps away from being used to create a corporate authoritarian dystopia", "KDE is better than GNOME", 
    "People who do their productivity on their mobile are psychopaths", "The Ender 3 is a decent 3D printer", 
    "People who support the Cloud can renounce their right to complain about monolithic tech companies holding monopolies", 
    "The Qt framework is the result of a front-end developer and a manager trying to replace the role of a backend developer", 
    "I commit directly to the main branch", 
    "JS frameworks are like technical debts, there's too many of them, and they're all very not helpful to project goals",
    "Wood screws are a menace to society", "Half of the people on HackerRank think copying answers is proportional to their genital size",
    "Tabs are better than spaces"];
    var opinions_display = opinions[Math.floor(Math.random() * opinions.length)];
    field.textContent = opinions_display + ", flame me through my email. Cheers.";
}