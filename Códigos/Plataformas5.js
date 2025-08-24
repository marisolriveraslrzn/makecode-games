namespace SpriteKind {
    export const Trap = SpriteKind.create()
    export const Platform = SpriteKind.create()
    export const movingTrap = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Trap, function (sprite, otherSprite) {
    sprite.startEffect(effects.spray)
    info.changeLifeBy(-1)
    pause(2000)
    effects.clearParticles(sprite)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (heroDirection == "right") {
        hero.vx = 300
        pause(200)
        hero.vx = 0
    }
    if (heroDirection == "left") {
        hero.vx = -300
        pause(200)
        hero.vx = 0
    }
})
function animateHero () {
    if (heroState == "idle") {
        hero.setImage(img`
            ................
            ...77777........
            ..7499997.......
            .747449997......
            747.744997......
            .7.7774477777...
            ...7ddddddff7...
            ...7dd555555777.
            ...7dd5dddddff7.
            ...7dd5d5d5d5f7.
            ...7dd5d5d5d5f7.
            ...7dd5d5d5d5f7.
            ...7dd5dddddff7.
            ...7dd555555777.
            ...7dddddddf7...
            ...75555555d7...
            ...7dddddddf7...
            ...7dddddddf7...
            ...7557777557...
            ...777....777...
            `)
    }
    if (heroState == "jumping") {
        hero.setImage(img`
            ...77777........
            ..7999997.......
            .799449997......
            .744744997......
            .747774477777...
            .747ddddddff7...
            ..77dd5dddddff7.
            ...7dd5d5d5d5f7.
            ...7dd5d5d5d5f7.
            ...7dd5d5d5d5f7.
            ...7dd5dddddff7.
            ...7dd555555557.
            ...7dd555555777.
            ...7dddddddf7...
            ...75555555d7...
            ...7dddddddf7...
            ...7dddddddf7...
            ...7557777557...
            ...757...757....
            ...77....77.....
            `)
    }
    if (heroState == "falling") {
        hero.setImage(img`
            .7..............
            79777...........
            79999777........
            .77999997.......
            ...7449997......
            ....744997......
            ...7774477777...
            ...7ddddddff7...
            ...7dd555555777.
            ...7dd5dddddff7.
            ...7dd5d5d5d5f7.
            ...7dd5d5d5d5f7.
            ...7dd5d5d5d5f7.
            ...7dd5dddddff7.
            ...7dd555555777.
            ...7dddddddf7...
            ...75555555d7...
            ...7dddddddf7...
            ..755dddddd557..
            ..777777777777..
            `)
    }
    if (heroState == "running") {
        if (hero.x % 2 == 0) {
            hero.setImage(img`
                .7777777........
                744499997.......
                .777449997......
                ....744997......
                ...7774477777...
                ...7ddddddff7...
                ...7dd555555777.
                ...7dd5dddddff7.
                ...7dd5d5d5d5f7.
                ...7dd5d5d5d5f7.
                ...7dd5d5d5d5f7.
                ...7dd5dddddff7.
                ...7dd555555777.
                ...7dddddddf7...
                ...75555555d7...
                ...7dddddddf7...
                ..77dddddddf7...
                .755557777557...
                .77777...757....
                .........77.....
                `)
        } else {
            hero.setImage(img`
                .7777777........
                744499997.......
                .777449997......
                ....744997......
                ...7774477777...
                ...7ddddddff7...
                ...7dd555555777.
                ...7dd5dddddff7.
                ...7dd5d5d5d5f7.
                ...7dd5d5d5d5f7.
                ...7dd5d5d5d5f7.
                ...7dd5dddddff7.
                ...7dd555555777.
                ...7dddddddf7...
                ...75555555d7...
                ...7dddddddf7...
                ...7dddddddf7...
                ..755577777557..
                ..7577.....777..
                ..77............
                `)
        }
    }
    if (heroDirection == "left") {
        hero.image.flipX()
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.vy == 0) {
        hero.vy = -180
        jump = 0
    } else {
        if (jump == 0) {
            if (hero.vy > -60 && hero.vy < 60) {
                hero.vy = -120
                jump = 1
            }
        }
    }
})
function changeHeroState () {
    if (hero.vx == 0 && hero.vy == 0) {
        heroState = "idle"
    } else {
        if (hero.vx != 0) {
            heroState = "running"
        }
        if (hero.vy > 0) {
            heroState = "falling"
        }
        if (hero.vy < 0) {
            heroState = "jumping"
        }
        if ((hero.isHittingTile(CollisionDirection.Left) || hero.isHittingTile(CollisionDirection.Right)) && heroState == "falling") {
            hero.vy = 0
        }
        if (hero.vx > 0) {
            heroDirection = "right"
        } else {
            if (hero.vx < 0) {
                heroDirection = "left"
            }
        }
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile25`, function (sprite, location) {
    if (controller.up.isPressed()) {
        sprite.vy = -50
    }
})
function placeTraps () {
    for (let value of tiles.getTilesByType(assets.tile`tile20`)) {
        spikesUp = sprites.create(img`
            7 d a a a a a 5 7 d a a a a a 5 
            . 7 d a a a 5 7 . 7 d a a a 5 7 
            . 7 d a a a 5 7 . 7 d a a a 5 7 
            . . 7 d a 5 7 . . . 7 d a 5 7 . 
            . . 7 d a 5 7 . . . 7 d a 5 7 . 
            . . . 7 a 7 . . . . . 7 a 7 . . 
            . . . 7 a 7 . . . . . 7 a 7 . . 
            . . . . 7 . . . . . . . 7 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Trap)
        tiles.placeOnTile(spikesUp, value)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`tile22`)) {
        spikesRight = sprites.create(img`
            . . . . . . . . . . . . . . . 7 
            . . . . . . . . . . . . . 7 7 d 
            . . . . . . . . . . . 7 7 d d a 
            . . . . . . . . . 7 7 d d a a a 
            . . . . . . . . 7 a a a a a a a 
            . . . . . . . . . 7 7 5 5 a a a 
            . . . . . . . . . . . 7 7 5 5 a 
            . . . . . . . . . . . . . 7 7 5 
            . . . . . . . . . . . . . . . 7 
            . . . . . . . . . . . . . 7 7 d 
            . . . . . . . . . . . 7 7 d d a 
            . . . . . . . . . 7 7 d d a a a 
            . . . . . . . . 7 a a a a a a a 
            . . . . . . . . . 7 7 5 5 a a a 
            . . . . . . . . . . . 7 7 5 5 a 
            . . . . . . . . . . . . . 7 7 5 
            `, SpriteKind.Trap)
        tiles.placeOnTile(spikesRight, value2)
    }
    for (let value3 of tiles.getTilesByType(assets.tile`tile21`)) {
        spikesLeft = sprites.create(img`
            7 . . . . . . . . . . . . . . . 
            d 7 7 . . . . . . . . . . . . . 
            a d d 7 7 . . . . . . . . . . . 
            a a a d d 7 7 . . . . . . . . . 
            a a a a a a a 7 . . . . . . . . 
            a a a 5 5 7 7 . . . . . . . . . 
            a 5 5 7 7 . . . . . . . . . . . 
            5 7 7 . . . . . . . . . . . . . 
            7 . . . . . . . . . . . . . . . 
            d 7 7 . . . . . . . . . . . . . 
            a d d 7 7 . . . . . . . . . . . 
            a a a d d 7 7 . . . . . . . . . 
            a a a a a a a 7 . . . . . . . . 
            a a a 5 5 7 7 . . . . . . . . . 
            a 5 5 7 7 . . . . . . . . . . . 
            5 7 7 . . . . . . . . . . . . . 
            `, SpriteKind.Trap)
        tiles.placeOnTile(spikesLeft, value3)
    }
    for (let value4 of tiles.getTilesByType(assets.tile`tile19`)) {
        spikesDown = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 . . . . . . . 7 . . . 
            . . . 7 a 7 . . . . . 7 a 7 . . 
            . . . 7 a 7 . . . . . 7 a 7 . . 
            . . 7 d a 5 7 . . . 7 d a 5 7 . 
            . . 7 d a 5 7 . . . 7 d a 5 7 . 
            . 7 d a a a 5 7 . 7 d a a a 5 7 
            . 7 d a a a 5 7 . 7 d a a a 5 7 
            7 d a a a a a 5 7 d a a a a a 5 
            `, SpriteKind.Trap)
        tiles.placeOnTile(spikesDown, value4)
    }
}
function placePlatforms () {
    for (let value5 of tiles.getTilesByType(assets.tile`tile26`)) {
        if (hero.tileKindAt(TileDirection.Bottom, assets.tile`tile26`)) {
            tiles.setWallAt(value5, true)
        } else {
            tiles.setWallAt(value5, false)
        }
    }
    for (let value52 of tiles.getTilesByType(assets.tile`tile28`)) {
        if (hero.tileKindAt(TileDirection.Bottom, assets.tile`tile28`)) {
            tiles.setWallAt(value52, true)
        } else {
            tiles.setWallAt(value52, false)
        }
    }
    for (let value53 of tiles.getTilesByType(assets.tile`tile27`)) {
        if (hero.tileKindAt(TileDirection.Bottom, assets.tile`tile27`)) {
            tiles.setWallAt(value53, true)
        } else {
            tiles.setWallAt(value53, false)
        }
    }
}
let movingClock = 0
let spikesDown: Sprite = null
let spikesLeft: Sprite = null
let spikesRight: Sprite = null
let spikesUp: Sprite = null
let jump = 0
let heroDirection = ""
let heroState = ""
let hero: Sprite = null
// image.setPalette(palettes.Equpix15)
scene.setBackgroundColor(2)
tiles.setTilemap(tilemap`level1`)
info.setLife(3)
placeTraps()
hero = sprites.create(img`
    ................
    ...77777........
    ..79cccc7.......
    .79799ccc7......
    797.799cc7......
    .7.7779977777...
    ...7ddddddff7...
    ...7dd555555777.
    ...7dd5dddddff7.
    ...7dd5d5d5d5f7.
    ...7dd5d5d5d5f7.
    ...7dd5d5d5d5f7.
    ...7dd5dddddff7.
    ...7dd555555777.
    ...7dddddddf7...
    ...75555555d7...
    ...7dddddddf7...
    ...7dddddddf7...
    ...7557777557...
    ...777....777...
    `, SpriteKind.Player)
hero.ay = 400
tiles.placeOnTile(hero, tiles.getTileLocation(0, 3))
scene.cameraFollowSprite(hero)
controller.moveSprite(hero, 100, 0)
heroState = "idle"
heroDirection = "right"
let movingPlatf01 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 c c c c c c c c c c c c c c 7 
    7 c e e e e e e e e e e e e f 7 
    7 c e e e e e e e e e e e e f 7 
    7 c e e e e e e e e e e e e f 7 
    7 c f f f f f f f f f f f f f 7 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Platform)
tiles.placeOnTile(movingPlatf01, tiles.getTileLocation(5, 5))
let circSaw1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . 7 7 7 a d d 7 7 7 . . . . 
    . . 7 a d d a a d a a a 7 . . . 
    . . 7 a d a a a a a a d 7 7 7 . 
    . 7 7 a a a a a a a a a a a a 7 
    7 a d a a a a a a a a a a d d 7 
    7 a a a a a 5 7 7 5 a a a a d 7 
    7 a a a a 5 7 . . 7 5 a a a a 7 
    7 d a a a 7 . . . . 7 a a a a a 
    a a a a 5 7 . . . . 7 5 a a d a 
    `, SpriteKind.Trap)
circSaw1.setPosition(128, 26)
game.onUpdate(function () {
    if (hero.y >= 235) {
        game.over(false)
    }
    changeHeroState()
    animateHero()
    placePlatforms()
    if (hero.overlapsWith(movingPlatf01)) {
        hero.setVelocity(movingPlatf01.vx, movingPlatf01.vy - 5)
    }
})
game.onUpdateInterval(2000, function () {
    if (movingClock == 0) {
        movingPlatf01.vy = 10
        circSaw1.vx = 20
        movingClock = 1
    } else {
        movingPlatf01.vy = -10
        circSaw1.vx = -20
        movingClock = 0
    }
})
