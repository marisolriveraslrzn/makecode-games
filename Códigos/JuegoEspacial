controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 5 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 180, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 500)
    music.magicWand.play()
    info.changeScoreBy(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.powerDown.play()
    info.changeLifeBy(-1)
    mySprite2.destroy()
})
let mySprite2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f f 9 9 f f . . . . . 
    . . . . f 9 9 9 1 1 9 f . . . . 
    . . f f f 9 9 9 9 1 9 f f f . . 
    . f b f 9 9 9 9 9 9 9 9 f b f . 
    f b b b f f f f f f f f b b b f 
    f f 5 2 1 5 2 1 5 2 1 5 2 1 f f 
    . f f f f b b b b b b f f f f . 
    . . . . f b b b b b b f . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 50, 50)
info.setLife(1)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
music.playMelody("D D D E F D E C ", 120)
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . c c c . . . . . . . 
        . . . . . a a a c c c . . . . . 
        . . . c a c f a a a a c . . . . 
        . . c a c f f f a f f a c . . . 
        . c c a c c f a a c f f a c . . 
        . a b a a c 6 a a c c f a c c c 
        . a b b b 6 a b b a a c a f f c 
        . . a b b a f f b b a a c f f c 
        c . a a a c c f c b a a c f a c 
        c c a a a c c a a a b b a c a c 
        a c a b b a a 6 a b b 6 b b c . 
        b a c b b b 6 b c . c c a c . . 
        b a c c a b b a c . . . . . . . 
        b b a c a b a a . . . . . . . . 
        a b 6 b b a c . . . . . . . . . 
        . a a b c . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(149, 111)
    mySprite2.follow(mySprite, 30)
})
game.onUpdateInterval(2000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c . . . . . . . 
        . . . . c a a a a . . . . . . . 
        . . . . a a f f b a . . . . . . 
        . . . c a b f f c b . . . . . . 
        . . . c b b b a f c b . . . . . 
        . . . c b a c a b b b . . . . . 
        . . . . b b f f a a c . . . . . 
        . . . . . a a b b c . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(0, 118)
    mySprite2.follow(mySprite, 30)
})
game.onUpdateInterval(4000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . c . . . . . . . . 
        . . . . c a a a c . . . . . . . 
        . . . c c f a b b c . . . . . . 
        . . . b f f b f a a . . . . . . 
        . . . b b a b f f a . . . . . . 
        . . . c b f b b a c . . . . . . 
        . . . . b a f c c . . . . . . . 
        . . . . . b b c . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(-2, 0)
    mySprite2.follow(mySprite, 30)
})
game.onUpdateInterval(3000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(152, 1)
    mySprite2.follow(mySprite, 30)
})
