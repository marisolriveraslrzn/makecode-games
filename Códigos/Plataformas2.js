enum ActionKind {
    RunningLeft,
    RunningRight,
    Idle,
    IdleLeft,
    IdleRight,
    JumpingLeft,
    JumpingRight,
    CrouchLeft,
    CrouchRight,
    Flying,
    Walking,
    Jumping
}
namespace SpriteKind {
    export const Bumper = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Flier = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bumper, function (sprite, otherSprite) {
    if (sprite.vy > 0 && !(sprite.isHittingTile(CollisionDirection.Bottom)) || sprite.y < otherSprite.top) {
        otherSprite.destroy(effects.ashes, 250)
        otherSprite.vy = -50
        sprite.vy = -2 * pixelsToMeters
        info.changeScoreBy(1)
        music.powerUp.play()
    } else {
        info.changeLifeBy(-1)
        sprite.say("Ow!", invincibilityPeriod)
        music.powerDown.play()
    }
    pause(invincibilityPeriod)
})
function initializeAnimations () {
    initializeHeroAnimations()
    initializeCoinAnimation()
    initializeFlierAnimations()
}
function giveIntroduction () {
    game.setDialogFrame(img`
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 . 
        2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 . 
        2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 1 1 1 1 1 1 1 1 1 2 1 2 . 
        2 1 2 2 1 1 1 1 1 1 1 2 2 1 2 . 
        2 1 1 2 2 2 2 2 2 2 2 2 1 1 2 . 
        2 2 1 1 1 1 1 1 1 1 1 1 1 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f 5 f . . . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 5 5 f . . . 
        . . . . . f 5 5 5 5 5 f . . . . 
        . . . . . f 5 5 5 5 f . . . . . 
        . . . . . f 5 5 5 f . . . . . . 
        . . . . . f 5 5 f . . . . . . . 
        . . . . . f 5 f . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    showInstruction("Muevete con las teclas(izquierda y derecha).")
    showInstruction("Salta con botón arriba o \"A\".")
    showInstruction("Doble salto presionando saltar nuevamente.")
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function initializeCoinAnimation () {
    coinAnimation = animation.createAnimation(ActionKind.Walking, 200)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . f 5 5 5 4 4 5 5 5 f . . . 
        . . . . f 5 5 5 5 5 5 f . . . . 
        . . . . f f 5 5 5 5 f f . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f f 5 f 5 5 5 f . . . . . 
        . . . f 5 f 5 5 5 5 5 f . . . . 
        . . f 5 f 5 5 5 4 5 5 f . . . . 
        . . f 5 f 5 5 5 4 4 5 5 f . . . 
        . . f 5 f 5 5 5 4 4 5 5 f . . . 
        . . f 5 f 5 5 5 4 5 5 f . . . . 
        . . . f 5 f 5 5 5 5 5 f . . . . 
        . . . . f 5 f 5 5 5 f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f f 5 f 5 f f . . . . . 
        . . . f f 5 f 5 5 5 f . . . . . 
        . . . f 5 f 5 5 5 5 f f . . . . 
        . . . f 5 f 5 5 4 5 5 f . . . . 
        . . . f 5 f 5 5 4 5 5 f . . . . 
        . . . f 5 f 5 5 5 5 f f . . . . 
        . . . f f 5 f 5 5 5 f . . . . . 
        . . . . f f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 5 f . . . . . 
        . . . . . f 5 f 5 f f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f . . . . . 
        . . . . . f 5 5 f 5 f . . . . . 
        . . . . . f 5 5 f 5 f . . . . . 
        . . . . . f 5 5 f 5 f . . . . . 
        . . . . . f 5 5 f 5 f . . . . . 
        . . . . . f f 5 f 5 f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . f 5 5 5 f 5 f f . . . 
        . . . . f f 5 5 5 5 f 5 f . . . 
        . . . . f 5 5 4 5 5 f 5 f . . . 
        . . . . f 5 5 4 5 5 f 5 f . . . 
        . . . . f f 5 5 5 5 f 5 f . . . 
        . . . . . f 5 5 5 f 5 f f . . . 
        . . . . . f f 5 f 5 f f . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    coinAnimation.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . f 5 5 5 f 5 f f . . . 
        . . . . f 5 5 5 5 5 f 5 f . . . 
        . . . . f 5 5 4 5 5 5 f 5 f . . 
        . . . f 5 5 4 4 5 5 5 f 5 f . . 
        . . . f 5 5 4 4 5 5 5 f 5 f . . 
        . . . . f 5 5 4 5 5 5 f 5 f . . 
        . . . . f 5 5 5 5 5 f 5 f . . . 
        . . . . . f 5 5 5 f 5 f . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy(effects.trail, 250)
    otherSprite.x += -3
    info.changeScoreBy(3)
    music.baDing.play()
})
function attemptJump () {
    // else if: either fell off a ledge, or double jumping
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        hero.vy = -4 * pixelsToMeters
    } else if (canDoubleJump) {
        doubleJumpSpeed = -3 * pixelsToMeters
        // Good double jump
        if (hero.vy >= -40) {
            doubleJumpSpeed = -4.5 * pixelsToMeters
            hero.startEffect(effects.trail, 500)
            scene.cameraShake(2, 250)
        }
        hero.vy = doubleJumpSpeed
        canDoubleJump = false
    }
}
function animateIdle () {
    mainIdleLeft = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, mainIdleLeft)
    mainIdleLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d d d d d d d d d e e d f . 
        . f d d f d d d d f d d e d f . 
        . f d d f d d d d f d d d e f . 
        . f d d f d d d d f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f a c c c c c c c c a b f . . 
        . f d d c c c c c c d d d f . . 
        . f d f f f b b f f f d d f . . 
        . . f a a a a a a a a a b f . . 
        . . . f a a b f f a a b f . . . 
        . . . f a a b f f a a b f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    mainIdleRight = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, mainIdleRight)
    mainIdleRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d e e d d d d d d d d d f . 
        . f d e d d f d d d d f d d f . 
        . f e d d d f d d d d f d d f . 
        . . f d d d f d d d d f d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b a c c c c c c c c a f . 
        . . f d d d c c c c c c d d f . 
        . . f d d f f f b b f f f d f . 
        . . f b a a a a a a a a a f . . 
        . . . f b a a f f b a a f . . . 
        . . . f b a a f f b a a f . . . 
        . . . . f f f . . f f f . . . . 
        `)
}
function setLevelTileMap (level: number) {
    clearGame()
    if (level == 0) {
        tiles.setTilemap(tilemap`level`)
    } else if (level == 1) {
        tiles.setTilemap(tilemap`level_0`)
    } else if (level == 2) {
        tiles.setTilemap(tilemap`level_1`)
    } else if (level == 3) {
        tiles.setTilemap(tilemap`level_2`)
    } else if (level == 4) {
        tiles.setTilemap(tilemap`level_3`)
    } else if (level == 5) {
        tiles.setTilemap(tilemap`level_4`)
    } else if (level == 6) {
        tiles.setTilemap(tilemap`level_5`)
    } else if (level == 7) {
        tiles.setTilemap(tilemap`level_6`)
    }
    initializeLevel(level)
}
function initializeFlierAnimations () {
    flierFlying = animation.createAnimation(ActionKind.Walking, 100)
    flierFlying.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111ffff.....
        ......fffcdb1bc111cf....
        ....fc111cbfbf1b1b1f....
        ....f1b1b1ffffbfbfbf....
        ....fbfbfffffff.........
        .........fffff..........
        ..........fff...........
        ........................
        ........................
        ........................
        ........................
        `)
    flierFlying.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `)
    flierFlying.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .....ffff111111bf.......
        ....fc111cdb1bdfff......
        ....f1b1bcbfbfc111cf....
        ....fbfbfbffff1b1b1f....
        .........fffffffbfbf....
        ..........fffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `)
    flierIdle = animation.createAnimation(ActionKind.Walking, 100)
    flierIdle.addAnimationFrame(img`
        ........................
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .....fffc1111111f.......
        ...fc111cd1111111f......
        ...f1b1b1b1111dddf......
        ...fbfbffcf11fcddf......
        ......fcf111111bbf......
        .......ccbdb1b1fcf......
        .......fffbfbfdff.......
        ........ffffffff........
        ........fffffffffff.....
        .........fffffc111cf....
        .........fffff1b1b1f....
        ..........ffffbfbfbf....
        ...........ffff.........
        ........................
        ........................
        ........................
        `)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attemptJump()
})
function animateRun () {
    mainRunLeft = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, mainRunLeft)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . f e e e e e e e e e f . . . . 
        . f d d d d e d d e e f . . . . 
        . f d d f d d e d e e f . . . . 
        . f d d f d d d e e e f . . . . 
        . f d d f d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c c c a a c c b f . . . . 
        . . f c c d d d c c b f . . . . 
        . . f b f f d d f f f f . . . . 
        . . f a a a a a a a b f . . . . 
        . . . f a a a a b f f . . . . . 
        . . . f a a a a b f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . f e e e e e e e e e f . . . . 
        . f d d d d e d d e e f . . . . 
        . f d d f d d e d e e f . . . . 
        . f d d f d d d e e e f . . . . 
        . f d d f d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c c c c a a c b f . . . . 
        . . f c c c c d d c b f . . . . 
        . . f b f f d d d f f f f . . . 
        . . f a a a a a a a a b f f . . 
        . . . f a a b f f a a a f f . . 
        . . . . f f f . f f f f f . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . f e e e e e e e e e f . . . . 
        . f d d d d e d d e e f . . . . 
        . f d d f d d e d e e f . . . . 
        . f d d f d d d e e e f . . . . 
        . f d d f d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c c c a a c c b f . . . . 
        . . f c c d d d c c b f . . . . 
        . . f b f f d d f f f f . . . . 
        . . f a a a a a a a b f . . . . 
        . . . f a a a a b f f . . . . . 
        . . . f a a a a b f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `)
    mainRunLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . f e e e e e e e e e f . . . . 
        . f d d d d e d d e e f . . . . 
        . f d d f d d e d e e f . . . . 
        . f d d f d d d e e e f . . . . 
        . f d d f d d d d d d f . . . . 
        . f d d d d d d d d d f . . . . 
        . . f c a a c c c c b f . . . . 
        . f d d d b c c c c b f . . . . 
        f f f d d f f f f f f f . . . . 
        f f f a a a a a a a b f . . . . 
        . f a a b f a a b f f . . . . . 
        . f f f f . f f f . . . . . . . 
        `)
    mainRunRight = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, mainRunRight)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f e e e e e e e f . . 
        . . . . f e e e e e e e e e f . 
        . . . . f e e d d e d d d d f . 
        . . . . f e e d e d d f d d f . 
        . . . . f e e e d d d f d d f . 
        . . . . f d d d d d d f d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c c a a c c c f . . 
        . . . . f b c c d d d c c f . . 
        . . . . f f f f d d f f b f . . 
        . . . . f b a a a a a a a f . . 
        . . . . . f f b a a a a f . . . 
        . . . . . . f b a a a a f . . . 
        . . . . . . . f f f f f . . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f e e e e e e e f . . 
        . . . . f e e e e e e e e e f . 
        . . . . f e e d d e d d d d f . 
        . . . . f e e d e d d f d d f . 
        . . . . f e e e d d d f d d f . 
        . . . . f d d d d d d f d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c a a c c c c f . . 
        . . . . f b c d d c c c c f . . 
        . . . f f f f d d d f f b f . . 
        . . f f b a a a a a a a a f . . 
        . . f f a a a f f b a a f . . . 
        . . . f f f f . . f f f . . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f e e e e e e e f . . 
        . . . . f e e e e e e e e e f . 
        . . . . f e e d d e d d d d f . 
        . . . . f e e d e d d f d d f . 
        . . . . f e e e d d d f d d f . 
        . . . . f d d d d d d f d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c c a a c c c f . . 
        . . . . f b c c d d d c c f . . 
        . . . . f f f f d d f f b f . . 
        . . . . f b a a a a a a a f . . 
        . . . . . f f b a a a a f . . . 
        . . . . . . f b a a a a f . . . 
        . . . . . . . f f f f f . . . . 
        `)
    mainRunRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f . . . 
        . . . . . f e e e e e e e f . . 
        . . . . f e e e e e e e e e f . 
        . . . . f e e d d e d d d d f . 
        . . . . f e e d e d d f d d f . 
        . . . . f e e e d d d f d d f . 
        . . . . f d d d d d d f d d f . 
        . . . . f d d d d d d d d d f . 
        . . . . f b c c c c a a c f . . 
        . . . . f b c c c c b d d d f . 
        . . . . f f f f f f f d d f f f 
        . . . . f b a a a a a a a f f f 
        . . . . . f f b a a f b a a f . 
        . . . . . . . f f f . f f f . . 
        `)
}
function animateJumps () {
    // Because there isn't currently an easy way to say "play this animation a single time
    // and stop at the end", this just adds a bunch of the same frame at the end to accomplish
    // the same behavior
    mainJumpLeft = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, mainJumpLeft)
    mainJumpLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d d d d d d d d d e e d f . 
        . f d d f d d d d f d d e d f . 
        . f d d f d d d d f d d d e f . 
        . f d d f d d d d f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f a c c c c c c c c a b f . . 
        . f d d c c c c c c d d d f . . 
        . f d f f f b b f f f d d f . . 
        . . f a a a a a a a a a b f . . 
        . . . f a a b f f a a b f . . . 
        . . . f a a b f f a a b f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    mainJumpLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d d d d d d d d d e e d f . 
        . f d d f d d d d f d d e d f . 
        . f d d f d d d d f d d d e f . 
        . f d d f d d d d f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f a c c c c c c c c a b f . . 
        . f d d c c c c c c d d d f . . 
        . f d f f f b b f f f d d f . . 
        . . f a a a a a a a a a b f . . 
        . . . f a a b f f a a b f . . . 
        . . . . f f f . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    for (let index = 0; index < 30; index++) {
        mainJumpLeft.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f e e e e e e e e e e f . . 
            . f e e e e e e e e e e e e f . 
            . f d d d d d d d d d e e d f . 
            . f d d f d d d d f d d e d f . 
            . f d d f d d d d f d d d e f . 
            . f d d f d d d d f d d d f . . 
            . f d d d d d d d d d d d f f . 
            . d a b c c c c c c c c b a d . 
            . d a c c c c c c c c c c a d . 
            . f f f f f b b f f f f f f f . 
            . . f a a a a a a a a a b f . . 
            . . . f a a b f f a a b f . . . 
            . . . . f f f . . f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    mainJumpRight = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, mainJumpRight)
    mainJumpRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d e e d d d d d d d d d f . 
        . f d e d d f d d d d f d d f . 
        . f e d d d f d d d d f d d f . 
        . . f d d d f d d d d f d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b a c c c c c c c c a f . 
        . . f d d d c c c c c c d d f . 
        . . f d d f f f b b f f f d f . 
        . . f b a a a a a a a a a f . . 
        . . . f b a a f f b a a f . . . 
        . . . f b a a f f b a a f . . . 
        . . . . f f f . . f f f . . . . 
        `)
    mainJumpRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d e e d d d d d d d d d f . 
        . f d e d d f d d d d f d d f . 
        . f e d d d f d d d d f d d f . 
        . . f d d d f d d d d f d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b a c c c c c c c c a f . 
        . . f d d d c c c c c c d d f . 
        . . f d d f f f b b f f f d f . 
        . . f b a a a a a a a a a f . . 
        . . . f b a a f f b a a f . . . 
        . . . . f f f . . f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    for (let index = 0; index < 30; index++) {
        mainJumpRight.addAnimationFrame(img`
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f . . . 
            . . f e e e e e e e e e e f . . 
            . f e e e e e e e e e e e e f . 
            . f d e e d d d d d d d d d f . 
            . f d e d d f d d d d f d d f . 
            . f e d d d f d d d d f d d f . 
            . . f d d d f d d d d f d d f . 
            . f f d d d d d d d d d d d f . 
            . d a b c c c c c c c c b a d . 
            . d a c c c c c c c c c c a d . 
            . f f f f f f f b b f f f f f . 
            . . f b a a a a a a a a a f . . 
            . . . f b a a f f b a a f . . . 
            . . . . f f f . . f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
}
function animateCrouch () {
    mainCrouchLeft = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, mainCrouchLeft)
    mainCrouchLeft.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d d d d d d d d d e e d f . 
        . f d d f d d d d f d d e d f . 
        . f d d f d d d d f d d d e f . 
        . f d d f d d d d f d d d f . . 
        . f d d d d d d d d d d d f . . 
        . f a c c c c c c c c a b f . . 
        . f d c c c c c c c c c d d f . 
        f d d f f f b b f f f f d d f . 
        . f f a a a a a a a a a b f . . 
        . . . f f f f . f f f f f . . . 
        `)
    mainCrouchRight = animation.createAnimation(ActionKind.Walking, 100)
    animation.attachAnimation(hero, mainCrouchRight)
    mainCrouchRight.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f e e e e e e e e e e f . . 
        . f e e e e e e e e e e e e f . 
        . f d e e d d d d d d d d d f . 
        . f d e d d f d d d d f d d f . 
        . f e d d d f d d d d f d d f . 
        . . f d d d f d d d d f d d f . 
        . . f d d d d d d d d d d d f . 
        . . f b a c c c c c c c c a f . 
        . f d d c c c c c c c c c d f . 
        . f d d f f f f b b f f f d d f 
        . . f b a a a a a a a a a f f . 
        . . . f f f f f . f f f f . . . 
        `)
}
function clearGame () {
    for (let value of sprites.allOfKind(SpriteKind.Bumper)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Coin)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.Goal)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Flier)) {
        value4.destroy()
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    info.changeLifeBy(1)
    currentLevel += 1
    if (hasNextLevel()) {
        game.splash("¡Siguiente nivel desbloqueado!")
        setLevelTileMap(currentLevel)
    } else {
        game.over(true, effects.confetti)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Flier, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.say("Ow!", invincibilityPeriod * 1.5)
    music.powerDown.play()
    pause(invincibilityPeriod * 1.5)
})
function createEnemies () {
    // enemy that moves back and forth
    for (let value5 of tiles.getTilesByType(assets.tile`tile4`)) {
        bumper = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . c c . c c . . . . . . . . 
            . . f 3 c c 3 c c c . . . . . . 
            . f c 3 b c 3 b c c c . . . . . 
            f c b b b b b b b b f f . . . . 
            c c 1 b b b 1 b b b f f . . . . 
            c b b b b b b b b c f f f . . . 
            c b 1 f f 1 c b b f f f f . . . 
            f f 1 f f 1 f b c c b b b . . . 
            f f f f f f f b f c c c c . . . 
            f f 2 2 2 2 f b f b b c c c . . 
            . f 2 2 2 2 2 b c c b b c . . . 
            . . f 2 2 2 b f f c c b b c . . 
            . . . f f f f f f f c c c c c . 
            . . . . . . . . . . . . c c c c 
            `, SpriteKind.Bumper)
        tiles.placeOnTile(bumper, value5)
        tiles.setTileAt(value5, assets.tile`transparency16`)
        bumper.ay = gravity
        if (Math.percentChance(50)) {
            bumper.vx = Math.randomRange(30, 60)
        } else {
            bumper.vx = Math.randomRange(-60, -30)
        }
    }
    // enemy that flies at player
    for (let value6 of tiles.getTilesByType(assets.tile`tile7`)) {
        flier = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .......fb111111bf.......
            ......fffcdb1bdffff.....
            ....fc111cbfbfc111cf....
            ....f1b1b1ffff1b1b1f....
            ....fbfbffffffbfbfbf....
            .........ffffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Flier)
        tiles.placeOnTile(flier, value6)
        tiles.setTileAt(value6, assets.tile`transparency16`)
        animation.attachAnimation(flier, flierFlying)
        animation.attachAnimation(flier, flierIdle)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(hero.isHittingTile(CollisionDirection.Bottom))) {
        hero.x += 80
    }
})
function showInstruction (text: string) {
    game.showLongText(text, DialogLayout.Bottom)
    music.baDing.play()
    info.changeScoreBy(1)
}
function initializeHeroAnimations () {
    animateRun()
    animateIdle()
    animateCrouch()
    animateJumps()
}
function createPlayer (player2: Sprite) {
    player2.ay = gravity
    scene.cameraFollowSprite(player2)
    controller.moveSprite(player2, 100, 0)
    player2.z = 5
    info.setLife(3)
    info.setScore(0)
}
function initializeLevel (level: number) {
    effects.clouds.startScreenEffect()
    playerStartLocation = tiles.getTilesByType(assets.tile`tile6`)[0]
    tiles.placeOnTile(hero, playerStartLocation)
    tiles.setTileAt(playerStartLocation, assets.tile`transparency16`)
    createEnemies()
    spawnGoals()
}
function hasNextLevel () {
    return currentLevel != levelCount
}
function spawnGoals () {
    for (let value7 of tiles.getTilesByType(assets.tile`tile5`)) {
        coin = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f 5 5 5 5 f f . . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . f 5 5 5 4 4 5 5 5 f . . . 
            . . . . f 5 5 5 5 5 5 f . . . . 
            . . . . f f 5 5 5 5 f f . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Coin)
        tiles.placeOnTile(coin, value7)
        animation.attachAnimation(coin, coinAnimation)
        animation.setAction(coin, ActionKind.Walking)
        tiles.setTileAt(value7, assets.tile`transparency16`)
    }
}
let heroFacingLeft = false
let coin: Sprite = null
let playerStartLocation: tiles.Location = null
let flier: Sprite = null
let bumper: Sprite = null
let mainCrouchRight: animation.Animation = null
let mainCrouchLeft: animation.Animation = null
let mainJumpRight: animation.Animation = null
let mainJumpLeft: animation.Animation = null
let mainRunRight: animation.Animation = null
let mainRunLeft: animation.Animation = null
let flierIdle: animation.Animation = null
let flierFlying: animation.Animation = null
let mainIdleRight: animation.Animation = null
let mainIdleLeft: animation.Animation = null
let doubleJumpSpeed = 0
let canDoubleJump = false
let coinAnimation: animation.Animation = null
let currentLevel = 0
let levelCount = 0
let gravity = 0
let pixelsToMeters = 0
let invincibilityPeriod = 0
let hero: Sprite = null
hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f e e e e e e e e e e f . . 
    . f e e e e e e e e e e e e f . 
    . f d e e d d d d d d d d d f . 
    . f d e d d f d d d d f d d f . 
    . f e d d d f d d d d f d d f . 
    . . f d d d f d d d d f d d f . 
    . . f d d d d d d d d d d d f . 
    . . f b a c c c c c c c c a f . 
    . . f d d d c c c c c c d d f . 
    . . f d d f f f b b f f f d f . 
    . . f b a a a a a a a a a f . . 
    . . . f b a a f f b a a f . . . 
    . . . f b a a f f b a a f . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Player)
// how long to pause between each contact with a
// single enemy
invincibilityPeriod = 600
pixelsToMeters = 30
gravity = 9.81 * pixelsToMeters
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd111111111111111111111111111111111111dddd1111111111111111111
    11111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd11111111111111111111111111111ddddddddddd111111111111111111
    11111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd11111111111111111111111111dddddddddddddd111111111111111111
    111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111111111dddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    11111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd11111111111111111111111ddddddddddddddddd111111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    1111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd111111111111111111111ddddddddddddddddddd11111111111111111
    111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111111dddddddddddddddddddd111111ddd11111111
    111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111111dddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd111111111ddddddddddddddddddddd11111ddddd1111111
    11ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd11111111ddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd1111111dddddddddddddddddddddd11111dddddd111111
    1dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd1111111dddddddddddddddddddddd1111ddddddd111111
    ddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111ddddddddddddddddd6ddddddd1111ddddddd1111dd
    dddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddddddddddddddddd66ddddddd1111ddddddd11dddd
    dddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddddddddddddddddd66ddddddd1111dddddddd1dddd
    ddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111dddddddddddddddddddddddddd6666dddddd1111ddddddddddddd
    ddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666ddddddddddddddddddddddddddddddddddd66666dddddddddddddddddddddddd
    ddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999ddddddddddddddd666ddddddddddddddd9999999dd
    dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999dddddddddddd66666dddddddddddd99999999999
    9ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd9999999999999ddddddddddd6666666ddddddddd999999999999
    999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999999dddddddd666666ddddddddd99999999999999
    9999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd9999999999999999999ddddd666666666ddddddd999999999999999
    99999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd999999999999999999999dddddd66666666ddddd9999999999999999
    999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999999999dd996666666dddddd99999999999999999
    999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999999999999999666666dddd996999999999999999
    9999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd99969999999999999999999999999666666666dd9996999999999999999
    9999999996666666666699966999999999999999999999999666666666669996699999999999999999999999966666666666999669999999999999999999999996666666666699966999999999999999
    9999999666666666669999996699999999999999999999966666666666999999669999999999999999999996666666666699999966999999999999999999999666666666669999996699999999999999
    9999999996666666669999966999999999999999999999999666666666999996699999999999999999999999966666666699999669999999999999999999999996666666669999966999999999999999
    9999999996666666999999666699999999999999999999999666666699999966669999999999999999999999966666669999996666999999999999999999999996666666999999666699999999999999
    9999999966966666666996666669999999999999999999996696666666699666666999999999999999999999669666666669966666699999999999999999999966966666666996666669999999999999
    9999999999666666666699966999999999996999999999999966666666669996699999999999699999999999996666666666999669999999999969999999999999666666666699966999999999996999
    9999999966666666666996666669999999996999999999996666666666699666666999999999699999999999666666666669966666699999999969999999999966666666666996666669999999996999
    9996999666666666666966666666999999966699999699966666666666696666666699999996669999969996666666666669666666669999999666999996999666666666666966666666999999966699
    9996699999666666666666666699999999996699999669999966666666666666669999999999669999966999996666666666666666999999999966999996699999666666666666666699999999996699
    9966999966666666666666666666999999966999996699996666666666666666666699999996699999669999666666666666666666669999999669999966999966666666666666666666999999966999
    9996699666666666666666666666699999666699999669966666666666666666666669999966669999966996666666666666666666666999996666999996699666666666666666666666699999666699
    9966666666666666666666666669999999966669996666666666666666666666666999999996666999666666666666666666666666699999999666699966666666666666666666666669999999966669
    9996666666666666666666666666699999666699999666666666666666666666666669999966669999966666666666666666666666666999996666999996666666666666666666666666699999666699
    9996666666666666666666666666669996666669999666666666666666666666666666999666666999966666666666666666666666666699966666699996666666666666666666666666669996666669
    9966666666666666666666666666999999666699996666666666666666666666666699999966669999666666666666666666666666669999996666999966666666666666666666666666999999666699
    9666666666666666666666666666669966666669966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669
    9966666666666666666666666666666996666666996666666666666666666666666666699666666699666666666666666666666666666669966666669966666666666666666666666666666996666666
    9966666666666666666666666666669966666666996666666666666666666666666666996666666699666666666666666666666666666699666666669966666666666666666666666666669966666666
    6666666666666666666666666666666966666666666666666666666666666666666666696666666666666666666666666666666666666669666666666666666666666666666666666666666966666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `)
initializeAnimations()
createPlayer(hero)
levelCount = 8
currentLevel = 0
setLevelTileMap(currentLevel)
giveIntroduction()
// set up hero animations
game.onUpdate(function () {
    if (hero.vx < 0) {
        heroFacingLeft = true
    } else if (hero.vx > 0) {
        heroFacingLeft = false
    }
    if (hero.isHittingTile(CollisionDirection.Top)) {
        hero.vy = 0
    }
    if (controller.down.isPressed()) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.Walking)
        } else {
            animation.setAction(hero, ActionKind.Walking)
        }
    } else if (hero.vy < 20 && !(hero.isHittingTile(CollisionDirection.Bottom))) {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.Walking)
        } else {
            animation.setAction(hero, ActionKind.Walking)
        }
    } else if (hero.vx < 0) {
        animation.setAction(hero, ActionKind.Walking)
    } else if (hero.vx > 0) {
        animation.setAction(hero, ActionKind.Walking)
    } else {
        if (heroFacingLeft) {
            animation.setAction(hero, ActionKind.Walking)
        } else {
            animation.setAction(hero, ActionKind.Walking)
        }
    }
})
// Flier movement
game.onUpdate(function () {
    for (let value8 of sprites.allOfKind(SpriteKind.Flier)) {
        if (Math.abs(value8.x - hero.x) < 60) {
            if (value8.x - hero.x < -5) {
                value8.vx = 25
            } else if (value8.x - hero.x > 5) {
                value8.vx = -25
            }
            if (value8.y - hero.y < -5) {
                value8.vy = 25
            } else if (value8.y - hero.y > 5) {
                value8.vy = -25
            }
            animation.setAction(value8, ActionKind.Walking)
        } else {
            value8.vy = -20
            value8.vx = 0
            animation.setAction(value8, ActionKind.Walking)
        }
    }
})
// Reset double jump when standing on wall
game.onUpdate(function () {
    if (hero.isHittingTile(CollisionDirection.Bottom)) {
        canDoubleJump = true
    }
})
// bumper movement
game.onUpdate(function () {
    for (let value9 of sprites.allOfKind(SpriteKind.Bumper)) {
        if (value9.isHittingTile(CollisionDirection.Left)) {
            value9.vx = Math.randomRange(30, 60)
        } else if (value9.isHittingTile(CollisionDirection.Right)) {
            value9.vx = Math.randomRange(-60, -30)
        }
    }
})
