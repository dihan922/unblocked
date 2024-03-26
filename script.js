// Lists
    // Genres (art forms)
const hip_hop = ["Indian-step", "Monestary","Bart Simpson", "Smurf", "Roger Rabbit", "2-step", "Wutang", "Walk It Out", "Steve Martin", "Biz Markie", "Grape Vine", "Bankhead Bounce", "Dougie", "Fila", "Happy Feet", "Wop", "Cabbage Patch", "Reebok", "MJ (Michael Jackson)", "James Brown", "BK Bounce", "Benetton", "Bobby Brown", "Humpty Dance", "Guitar", "Cat Daddy", "Prep", "Kansas City Shake", "Snake", "Bogle", "Ticking", "Nae Nae", "Chest Pump(s)", "Vertical Wave", "Horizontal Wave", "Heel Toe", "Hop Twist", "Heel Toe Twist", "Apple Jack", "Outlaw", "Skate", "ATL Stomp", "Harlem Shake", "Tone Wop", "Rev Up", "Spongebob", "Running Man", "Reject"]
const party_dances = ["Swagg Bouncee","Floss/Backpack Kid", "Cosby Walk", "CitiRokk", "Smeeze", "Heel Pivot Step", "Cross Open Scoop", "Kangsta Wok", "Bust Down", "3 step Challenge", "Throw It Back", "Milly Rock", "Woah", "Shoot", "Billy Bounce"]
const litefeet = ["Rev Up (side to side)", "Rev Up (back and forth)", "Tone Wop (open close)", "Tone Wop (twist)", "Badone", "Lock In", "Chicken Noodle Soup", "King Step", "Tic Tac Toe Skip", "Tic Tac Toe", "Twist and Wop", "Swiss Bop", "Friendship Wop", "Lock On", "Jump Rope", "Aunt Jackie", "Kiss of Death", "Shoe Trick"]
const jazz = ["Tuck Jump", "Double Tuck Jump", "Hitch Kick", "Soutenu", "Paddle Turns", "Touch Half Turn Step", "Full Turn Step", "Chasse",  "3 Step Turn", "Charleston", "Pony", "Jazz Roll", "Jazz Split Roll", "Tuck Roll", "Ball Change", "Kick Ball Change", "Jazz Square", "Jazz Turn"]
const house = ["Pas de Bouree", "Train", "Swivel", "Tap Kick", "Baracho", "Disco Step", "Tip Tap Toe", "4 step", "Farmers", "Mountain Climber", "Salsa Step", "Wiz", "Skate + Train", "Eights", "Heel Toe", "Shuffle Step", "Sidewalk", "Chase + Loose Leg", "House Roger Rabbit", "Bossa Nova", "Hurdlers", "Reverse Hurdlers", "Box Step", "Loose Leg", "2 Step Loose Leg", "3 Step Loose Leg", "4 Step Loose Leg", "The Train", "The Skate", "The Juggle"]
const breaking_basics = ["Pin Drop", "1 Step/Coffee Grinder", "2 Step", "3 Step", "4 Step", "5 Step", "6 Step", "7 Step", "10 Step", "12 Step", "Cc", "Baby Freeze", "Chair Freeze", "Head Freeze", "Hook", "Air Hook", "Foot Thread", "Knee Thread","Arm Thread", "Floor Thread", "Corkscrew Spin Down", "Sideways Worm", "Reverse Coffee Grinder", "Swipes", "Handstand Freeze"]
const breaking_advanced = ["Air Baby", "90", "Windmill", "Flares", "One-Handed Handstand", "Transfer Freeze", "Halo", "Halo Freeze", "Gremlin/Ground 90", "Airflare", "Airchair", "Jackhammers", "Crickets", "UFOS", "Hand Glide", "Suicide Move", "Any Flip"]
const ballet = ["Coupe Turn", "Ron de Jambe", "Assemble", "Pirouette", "Pique Turn", "Soutenu", "Reverence", "Allonge", "Arebesque", "Passe", "1st Position", "2nd Position", "5th Position", "Glissade Changee", "Jete", "Pas de Chat", "Tendu", "Degage", "Fondu", "Frappe", "Developpe", "Grand Battement", "Releve"]
const popping = ["Trace Wave", "Shuffle Step", "Step-Glide", "Bopping Step", "Over Under Glide", "Neck Iso", "Head Iso", "Arm Iso", "Fixed Point", "In-Place Glide", "Leg Iso", "Ticking", "4 Point Tick Walk", "Strobbing", "Dime Stop", "Mannequin Walk", "Fresno", "Twist-o-Flex", "Neck-o-Flex", "Master Flex", "ScareCrow", "Crazy Legs", "Boogaloo Rolls", "Romeo Twist", "Toyman", "King Kobra", "4 Corners", "Side Glide", "Frantick Salsa Glide", "Pushing Slide Glide", "Over Under Under Over Side Glide", "Over Under Over Under Side Glide", "Air Walk", "Back Slide", "Front Slide", "Heel Toes", "Rock Wave", "Segmented Arm Wave", "Continuous Arm Wave", "Segmented Body Wave", "Continuous Body Wave", "Segmented Side Body Wave", "Continuous Body Wave", "Shoulder Chest Shoulder Wave", "Full Body Pop", "Torso Pop", "Neck Pop", "Leg Pop", "Forearm/Wrist Pop", "Bicep/Tricep Pop"]
const heels = ["Sexy Walk", "Booty Dip", "Open Knees", "Leg Hike Up", "Hip Rolls", "Stepping Out", "Bevel Drag", "Box Step", "Arm Reach to Hip", "Hip Dip", "Hip Rotation", "Side to Side Walk", "Pose", "Arch", "Upper Back Layout", "Lower Back Layout", "Body Roll", "Hair Whip", "Figure 8 Whip", "Drag Turn", "Slide and Bop", "Walking Head Whip", "Walking Head Whip with Drop Up Arch"]
const locking = ["Wrist Rolls", "Wrist Rolls + Point", "Lock", "Double Lock", "Up Lock Up Cross", "Sideways Step Kick", "Knees", "Walk: Up Dig Down Lock", "Scoo B Doo Walk", "Scoo-bot", "Skeeter Rabbit", "Toe Tap", "Whichaway", "Quickie (Stop and Go)", "Points", "Snapping Fingers", "Giving Yourself 5", "Giving the Floor 5"]
const dancehall = ["Bogle", "Signal di Plane", "Willi Bounce", "Shelly Belly", "Shampoo", "Summer Bounce", "Havoc", "Flirt", "Inna Mi Feelings", "One Pop", "Shoota", "Dizzy Gun", "Tun Up", "Pyro Pree", "Free Flow", "Good Chemistry", "Thunda Clap", "Stay Clear", "Cho Blow Wow", "Wave", "Splice", "Oh Dam", "Summa Jam", "Zip it Up", "Stookie", "Round da World", "Walk", "Yardie", "Adjust", "Equa Flow", "Bop Bop", "Chap Dem", "Calm Dem Down", "Side Flow", "Playground", "New York New York", "Cut Dem Off", "Gimme Space", "Pull Up", "Move Dem Up", "Sesame Street", "Tour Di City", "New Rave", "Congrats", "Saucy", "MVP", "Row the Boat", "White Glide", "Ocean Flow", "Snappin", "Ruku", "Business", "Punk Rock", "Top 10"]
const salsa = ["Basic Step", "Side Basic Step", "Cumbia", "Front Double Cross", "Susie Q", "Side Cross", "Shuffle", "Hook Step", "Step Tap", "Flares", "Grapevine", "Mambo V", "Pivot Turn", "Right Turn", "Left Turn"]
const whacking = ["Vertical Left Arm Roll", "Vertical Right Arm Roll", "Vertical Both Arms Roll", "Horizontal Left Arm Roll", "Horizontal Right Arm Roll", "Horizontal Both Arms Roll", "Around Left Arm Roll", "Around Right Arm Roll", "Around Both Arms Roll", "Back Left Arm Roll", "Back Right Arm Roll", "Back Both Arms Roll", "Lines Single Up", "Lines Single Down", "Lines Single Side", "Lines Double Up", "Lines Double Down", "Lines Double Side", "Lines Single Diagonal", "Lines Double Diagonal", "Front Overhead Right Arm", "Front Overhead Left Arm", "Front Overhead Both Arms", "Sideways Overhead Right Arm", "Sideways Overhead Left Arm", "Sideways Overhead Both Arms"]
const krump = ["Bounce", "Wobble", "Woah", "Rocks", "Bang", "Tight Eyez Stomp", "Big Mijo Stomp", "Ball Foot Twist", "Heel Twist", "Ball/Heel Twist", "Stiff Legs", "Quiet Stomp", "Gallop", "K-Wang", "Buck Hop", "Turn Around Buck Hop", "Traveling Buck Hop", "Leg Wobble", "Big Mijo Chest", "Tight Eyez Chest", "Chest Hit", "Chest Bang", "Arm Swing", "Jab", "Arm Bang", "'No' Arm Swing (Controlled)", "'No' Arm Swing (Free Way)", "'Swatting a Fly' Arm Swing (Controlled)", "'Swatting a Fly' Arm Swing (Free Way)", "'Throwing an Object' Arm Swing (Controlled)", "'Throwing an Object' Arm Swing (Free Way)", "'Ripping' Arm Swing (Controlled)", "'Ripping' Arm Swing (Free Way)"]
const other = ["Step on Heel", "Step on Toe", "Slide", "Head Flick", "Collapse Knees", "Hop Together", "Spin", "Zipper Up", "Jump", "Snap", "Clap"]

    // Permanent Genre Lists
const genreList = [hip_hop, party_dances, litefeet, jazz, house, breaking_basics, breaking_advanced, ballet, popping, heels, locking, dancehall, salsa, whacking, krump, other]
const genreListNames = ["hip hop", "party dances", "litefeet", "jazz", "house", "breaking - basics", "breaking - advanced", "ballet", "popping", "heels", "locking", "dancehall", "salsa", "whacking", "krump", "other"]

    // Mutable Genre Lists
let chosenGenres = []

    // Extra Features
const textures = ["Initiation", "Stick", "Tension", "Soft", "Rebound", "Release"]
const levels = ["Air", "Standing", "Standing Mid-Level", "Squatting", "On the Floor"]
const directions = ["Forward", "Left", "Right", "Back", "Left Forward Diagonal", "Right Forward Diagonal", "Left Back Diagonal", "Right Back Diagonal"]
const speeds = ["Slow", "Regular", "Fast"]
const modifier_list = [textures, levels, directions, speeds]
const modifier_labels = ["Texture", "Level", "Direction", "Speed"]

const concepts = ["Throw","Protect", "Agree", "Balance", "Bite", "Break", "Build", "Chop", "Collect", "Embody an Animal", "Point", "Heartbreak", "Look", "Smell", "Clap", "Replicate Your Favorite Hobby", "Swim", "Cook", "Hunt", "Stomp", "Maze", "Hide", "Shy", "Chase", "Angry", "Embody Anime Character", "Embody Your Favorite Superhero", "Embody Your Favorite Supervillain", "Face to the Left", "Face to the Right", "Face Backwards", "Repeat", "Single Single Double", "Embody Your Favorite Dancer"]
const body_parts = ["Head","Back","Waist","Buttocks", "Leg", "Face", "Chest", "Stomach", "Hip", "Hand", "Foot", "Eye", "Eyebrow", "Nose", "Mouth", "Chin", "Hair", "Ear", "Lips", "Neck", "Thumb", "Finger", "Wrist", "Shoulder", "Elbow"]
const shapes_list = ["Circles", "Angles", "Lines", "Curves", "Triangles", "Squares", "Rectangles", "Pentagons", "Stars", "Hearts", "Ovals"]
const affirmations = ["Your style is amazing!", "Be you!", "I am worthy of rest and relaxation.", "I am patient and persistent.", "My body is meant to dance.", "I am strong enough to keep going even when I am disappointed.", "I am capable."]

// Buttons
const move = document.getElementById("move");
const pathway = document.getElementById("pathway");
const texture = document.getElementById("texture");
const story_concept = document.getElementById("concept");
const isolate_body = document.getElementById("isolate");
const shape = document.getElementById("shape");
const affirmation = document.getElementById("affirmation");
const help = document.getElementById("help");
const filter_form = document.getElementById("filter");

// Initialization
let just_help_me_clicked = false
let genreCheckList = Array.from({length: genreListNames.length}, () => 0)
filter()

let checkboxes = document.querySelectorAll('input[type=checkbox]')
checkboxes.forEach(checkbox => {checkbox.addEventListener('input', update_filter_list)})

// Correcting Textbox Display
function reset_textbox() {
    document.getElementById('num-input-container').style.display = "none"
    document.getElementById('filter-checklist').style.display = "none"
    if (!just_help_me_clicked) {
        document.getElementById("textbox").innerHTML = ""
    }
}

// New Move Function
function new_move() {
    if (chosenGenres.length == 0) {alert("Press filter to choose which art form(s) you would like to use."); return}
    reset_textbox()
    let randomGenre = chosenGenres[Math.floor(Math.random() * chosenGenres.length)]
    let randomMove = `${genreList[randomGenre][Math.floor(Math.random() * (genreList[randomGenre]).length)]} (${genreListNames[randomGenre]})`
    document.getElementById("textbox").innerHTML += `Move: ${randomMove}`
}

// New Pathway Functions
function new_pathway() {
    if (chosenGenres.length == 0) {alert("Press filter to choose which art form(s) you would like to use."); return}
    reset_textbox()
    document.getElementById("textbox").innerHTML += "Number of moves (2-7):"
    document.getElementById("num-input").previousElementSibling.value = document.getElementById("num-input").value
    document.getElementById("num-input-container").style.display = "flex"
}

function new_pathway_part2() {
    reset_textbox()
    let randomGenres = Array.from({length: document.getElementById("num-input").value}, () => chosenGenres[Math.floor(Math.random() * chosenGenres.length)]);
    let randomMoves = Array.from(randomGenres, x => `${genreList[x][Math.floor(Math.random() * genreList[x].length)]} (${genreListNames[x]})`)
    
    let output = "Move List:<br>"
    for (let i=0; i<randomMoves.length; i++) {
        output += `<div style='text-align: left;'>${i+1}. ${randomMoves[i]}</div>`
    }
    document.getElementById("textbox").innerHTML = output
}

// Modifiers Function
function new_modifiers() {
    reset_textbox()
    let modifier_type = Math.floor(Math.random() * 4)
    let modifier = modifier_list[modifier_type]
    document.getElementById("textbox").innerHTML += `${modifier_labels[modifier_type]}: ${modifier[Math.floor(Math.random() * modifier.length)]}`
}

// Storytelling Concepts Function
function story_concepts() {
    reset_textbox()
    document.getElementById("textbox").innerHTML += `Concept: ${concepts[Math.floor(Math.random() * concepts.length)]}`
}

// Isolate Body Parts Function
function isolate() {
    reset_textbox()
    document.getElementById("textbox").innerHTML += `Isolate your ${body_parts[Math.floor(Math.random() * body_parts.length)].toLowerCase()}`
}

// Shapes Function
function shapes() {
    reset_textbox()
    document.getElementById("textbox").innerHTML += `Shape: ${shapes_list[Math.floor(Math.random() * shapes_list.length)]}`
}

// Affirmations Function
function new_affirmations() {
    reset_textbox()
    document.getElementById("textbox").innerHTML += affirmations[Math.floor(Math.random() * affirmations.length)]
}

// Just Help Me Function
function just_help_me() {
    if (chosenGenres.length == 0) {alert("Press filter to choose which art form(s) you would like to use."); return}
    just_help_me_clicked = true
    reset_textbox()
    let functions = ["new_move()", "new_pathway()", "new_modifiers()"," story_concepts()", "isolate()", "shapes()", "new_affirmations()"]
    let functionNames = ["New Move", "New Combos/Pathways", "Modifiers", "Storytelling/Concepts", "Isolate Body Parts", "Shapes", "Affirmations"]
    let randomIndex = Math.floor(Math.random() * 7)
    document.getElementById("textbox").innerHTML = `"${functionNames[randomIndex]}" was selected<br>`
    eval(functions[randomIndex])
    just_help_me_clicked = false
}

// Filter Functions
function filter() {
    if (document.getElementById("textbox").innerHTML == "Filter") {
        document.getElementById("textbox").innerHTML = "~"
        document.getElementById('filter-checklist').style.display = "none"
        return
    }
    
    reset_textbox()
    document.getElementById("textbox").innerHTML = "Filter"
    document.getElementById("filter-checklist").innerHTML = ""
    document.getElementById('filter-checklist').style.display = "block"
    for (let i=0; i<genreListNames.length; i++) {
        document.getElementById("filter-checklist").innerHTML += `<li><input type="checkbox" name="${genreListNames[i]}" id="${i}" ${"checked".repeat(genreCheckList[i])}><label for="${genreListNames[i]}">${genreListNames[i]}</label></li>`
    }

    let checkboxes = document.querySelectorAll('input[type=checkbox]')
    checkboxes.forEach(checkbox => {checkbox.addEventListener('input', update_filter_list)})
}

function update_filter_list() {
    chosenGenres = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(x => Number(x.id))
    genreCheckList = Array.apply(null, {length: genreList.length}).map(Number.call, Number).map(x => Number(chosenGenres.includes(x)))
}
    
