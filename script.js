var world = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,1,2],
    [2,1,1,2,2,1,2,2,1,2,2,1,2,2,1,2,2,1,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,2,1,2,2,2,2,2,1,2,2,2,2,2,1,1,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,1,1,2,2,2,1,1,2,2,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,2,1,1,1,1,1,1,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,1,1,1,1,1,1,1,1,1,1,2,2,1,2],
    [2,1,2,2,1,1,2,1,1,1,1,1,1,2,1,1,2,2,1,2],
    [2,1,2,2,1,1,2,2,2,1,1,2,2,2,1,1,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2],
    [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
    [2,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
    [2,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
]
var score = 0
var score2 = 0
var lives = 1
var lives2 = 1
var pacman = {
    x: 1,
    y: 1,
    name: 'pacman'
}
var pacman2 = {
    x: 2,
    y: 2,
    name: 'pacman2' 
}
var ghost = {
    x: 18,
    y: 16
}
function displayWorld() {
    var output = ''

    for(var i = 0; i < world.length; i++){
        output += '<div class="row">'
        for(var j=0; j < world[i].length; j++) {
            if(world[i][j] == 2){
                output += '<div class="brick"></div>'
            }
            if(world[i][j] == 1){
                output += '<div class="coin"></div>'
            }
            if(world[i][j] == 0){
                output += '<div class="empty"></div>'
            }
            if(world[i][j] == 3){
                output += '<div class="cherry"></div>'
            }
        }
        output += '</div>'
    }
    // console.log(output)
    document.getElementById('world').innerHTML = output
}

function displayPacman(dir) {
    const codes = {
        'ArrowDown': `rotate(90deg)`,
        'ArrowUp': `rotate(-90deg)`,
        'ArrowRight': `rotate(0deg)`,
        'ArrowLeft': `rotate(180deg)`,
    }
    if(document.getElementById('pacman')){
        document.getElementById('pacman').style.left = `${pacman.x*20}px`
        document.getElementById('pacman').style.top = `${pacman.y*20}px`
        document.getElementById('pacman').style.transform = ``
        document.getElementById('pacman').style.transform = `${codes[dir]}`
    }
}
function displayPacman2(dir) {
    const codes = {
        'KeyS': `rotate(90deg)`,
        'KeyW': `rotate(-90deg)`,
        'KeyA': `scalex(-1)`,
        'KeyD': `rotate(0deg)`,
    }
     if(document.getElementById('pacman2')){
         document.getElementById('pacman2').style.left = `${pacman2.x*20}px`
         document.getElementById('pacman2').style.top = `${pacman2.y*20}px`
         document.getElementById('pacman2').style.transform = ``
         document.getElementById('pacman2').style.transform = `${codes[dir]}`
     }
}
function displayGhost() {
    document.getElementById('aqua-ghost').style.left = `${ghost.x*20}px`
    document.getElementById('aqua-ghost').style.top = `${ghost.y*20}px`
}
displayWorld()
displayPacman()
displayPacman2()
displayGhost()

document.onkeydown = function(e) {
    if(document.getElementById('pacman')) {
        if(e.code === 'ArrowDown' && world[pacman.y+1][pacman.x] !== 2){
            pacman.y += 1
    
        }
        if(e.code === 'ArrowUp' && world[pacman.y-1][pacman.x] !== 2){
            pacman.y -= 1
        }
        if(e.code === 'ArrowRight' && world[pacman.y][pacman.x + 1] !== 2){
            pacman.x += 1
        }
        if(e.code === 'ArrowLeft' && world[pacman.y][pacman.x - 1] !== 2){
            pacman.x -= 1
        }
        if(world[pacman.y][pacman.x] == 1) {
            world[pacman.y][pacman.x] = 0
            score++
            document.getElementById('score').innerHTML = score
        }
        if(world[pacman.y][pacman.x] == 3) {
            world[pacman.y][pacman.x] = 0
            score += 50
            document.getElementById('score').innerHTML = score
        }

    }
    if(document.getElementById('pacman2')) {
        if(e.code === 'KeyS' && world[pacman2.y+1][pacman2.x] !== 2){
            pacman2.y += 1
    
        }
        if(e.code === 'KeyW' && world[pacman2.y-1][pacman2.x] !== 2){
            pacman2.y -= 1
        }
        if(e.code === 'KeyD' && world[pacman2.y][pacman2.x + 1] !== 2){
            pacman2.x += 1
        }
        if(e.code === 'KeyA' && world[pacman2.y][pacman2.x - 1] !== 2){
            pacman2.x -= 1
        }
        if(world[pacman2.y][pacman2.x] == 1) {
            world[pacman2.y][pacman2.x] = 0
            score2++
            document.getElementById('score2').innerHTML = score2
        }
        if(world[pacman2.y][pacman2.x] == 3) {
            world[pacman2.y][pacman2.x] = 0
            score += 50
            document.getElementById('score2').innerHTML = score2
        }

    }
    displayWorld()
    displayPacman(e.code)
    displayPacman2(e.code)
}

//randomly convert a coin into a cherry
setInterval(function() {
    //get coords of all empty spaces and place them in an array
    let emptySpaces = []
    for(var i = 0; i < world.length; i++) {
        for(var j = 0; j < world[i].length; j++){
            if(world[i][j] == 1) {
                emptySpaces.push([i,j])
            }
        }
    }
    // console.log('empty spaces', emptySpaces)
    //randomly select one of them
    if(emptySpaces.length > 1){
        const randomIndex = Math.floor(Math.random() * emptySpaces.length)
        //change value of coords to 3
        world[emptySpaces[randomIndex][0]][emptySpaces[randomIndex][1]] = 3
        //redraw world
        setTimeout(function() {
            world[emptySpaces[randomIndex][0]][emptySpaces[randomIndex][1]] = 0
            displayWorld()
        }, 7000)
        displayWorld()
    }
}, 10000)

function bfs (pacman,ghost) {
    if(!document.getElementById(pacman.name)) {
        return false
    }
    var queue = [ghost]
    var parentCell = {}

    // while queue not empty
    while(queue.length > 0) {
        const {x, y} = queue.shift()
        let current = {y,x}
        let currentKey = `${y}x${x}`
        
        if(currentKey ==`${pacman.y}x${pacman.x}`) {
            break
            //execute death function to kill pacman?
        }

        const neighbors = [
            {y: y - 1, x},
            {y, x: x + 1},
            {y: y + 1, x},
            {y, x: x - 1}
        ]

        for(var i = 0; i < neighbors.length; i++) {
            const nRow = neighbors[i].y
            const nCol = neighbors[i].x

            if(nRow < 0 || nRow > world.length - 1) {
                continue
            }
            if(nCol < 0 || nCol > world[nRow].length - 1) {
                continue
            }
            if(world[nRow][nCol] == 2) {
                continue
            }

            const key = `${nRow}x${nCol}`
            if(parentCell[key]) {
                continue
            }

            parentCell[key] = {
                key: currentKey,
                cell: current
            }

            queue.push(neighbors[i])
        }

    }
    const path = []
    let currentKey = `${pacman.y}x${pacman.x}`
    let current = {
        y: pacman.y,
        x: pacman.x
    }

    while(currentKey !== `${ghost.y}x${ghost.x}`) {
        path.push(current)
        const {key,cell} = parentCell[currentKey]

        current = cell
        currentKey = key
    }
    //console.log(path.pop())
    // ghost = path.pop()
    // displayGhost()
    return path
}

var ghostTimer = setInterval(function() {
    try{
        let pathTo = (pacman) => {
            let path = bfs(pacman,ghost)
            if(!path) {
                return {
                    path: 0,
                    length: 999
                }
            } else {
                return {
                    path: path,
                    length: path.length
                }
            }
        }
        
        let pathToPacman = pathTo(pacman)
        let pathToPacman2 = pathTo(pacman2)
        // console.log(pathToPacman,pathToPacman2)
        
        let moveTo = (pathToPacman.length <= pathToPacman2.length) ? pathToPacman.path.pop() : pathToPacman2.path.pop()
        ghost = moveTo
        displayGhost()
        if(ghost.x == pacman.x && ghost.y == pacman.y) {
            lives--
            document.getElementById('pacman').remove()
            console.log('pacman died')
        }
        if(ghost.x == pacman2.x && ghost.y == pacman2.y) {
            lives2--
            document.getElementById('pacman2').remove()
            console.log('pacman2 died')
        }
        
    } catch(e) {
        console.log('all characters have died')
        clearTimer()
    }
    
},200)

function clearTimer() {
    clearInterval(ghostTimer)
}
