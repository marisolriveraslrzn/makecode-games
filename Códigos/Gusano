sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite2, otherSprite2) {
    info.changeScoreBy(1)
    sprite2.startEffect(effects.ashes, 200)
    otherSprite2.setPosition(Math.idiv(randint(6, 156), 6) * 6, Math.idiv(randint(6, 114), 6) * 6)
    list2.push(sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player))
    if (list2.length == 2) {
        if (dir2 == 0) {
            offsetX = -6
            offsetY = 0
        } else if (dir2 == 1) {
            offsetX = 6
            offsetY = 0
        } else if (dir2 == 2) {
            offsetX = 0
            offsetY = -6
        } else {
            offsetX = 0
            offsetY = 6
        }
    } else {
        offsetX = list2[list2.length - 2].x - list2[list2.length - 3].x
        offsetY = list2[list2.length - 2].y - list2[list2.length - 3].y
    }
    list2[list2.length - 1].x = list2[list2.length - 2].x + offsetX
    list2[list2.length - 1].y = list2[list2.length - 2].y + offsetY
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
let index = 0
let lastDir = 0
let offsetY = 0
let offsetX = 0
let dir2 = 0
let list2: Sprite[] = []
scene.setBackgroundColor(15)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . 5 3 3 3 3 5 . . . . . 
    . . . . . 5 3 3 3 3 5 . . . . . 
    . . . . . 5 3 3 3 3 5 . . . . . 
    . . . . . 5 3 3 3 3 5 . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
mySprite2.setPosition(132, 30)
mySprite.setPosition(84, 60)
list2 = [mySprite]
let delay = 200
info.setScore(0)
game.onUpdate(function () {
    if (controller.up.isPressed()) {
        if (lastDir != 2) {
            dir2 = 3
        }
    } else if (controller.down.isPressed()) {
        if (lastDir != 3) {
            dir2 = 2
        }
    } else if (controller.right.isPressed()) {
        if (lastDir != 1) {
            dir2 = 0
        }
    } else if (controller.left.isPressed()) {
        if (lastDir != 0) {
            dir2 = 1
        }
    }
    lastDir = dir2
})
game.onUpdate(function () {
    while (index <= list2.length - 1) {
        if (index < list2.length - 1) {
            list2[list2.length - (index + 1)].x = list2[list2.length - (index + 2)].x
            list2[list2.length - (index + 1)].y = list2[list2.length - (index + 2)].y
        }
        index += 1
    }
    if (dir2 == 0) {
        mySprite.x += 6
    } else if (dir2 == 1) {
        mySprite.x += -6
    } else if (dir2 == 2) {
        mySprite.y += 6
    } else {
        mySprite.y += -6
    }
    if (mySprite.x > 160) {
        mySprite.x = 0
    } else if (mySprite.x < 0) {
        mySprite.x = 156
    }
    if (mySprite.y > 120) {
        mySprite.y = 0
    } else if (mySprite.y < 0) {
        mySprite.y = 120
    }
    pause(delay)
})
game.onUpdateInterval(5000, function () {
    if (delay > 50) {
        delay += -10
    }
})
