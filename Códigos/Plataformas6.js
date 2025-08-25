namespace SpriteKind {
    export const Enemy_unaware = SpriteKind.create()
    export const camera = SpriteKind.create()
    export const cutscene = SpriteKind.create()
    export const oof = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile28`, function (sprite, location) {
    end_game()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (armed == 1) {
        if (horizontal == 1) {
            mySprite.setImage(img`
                . . . 4 5 5 5 . . . 
                . . 4 5 5 1 1 5 . . 
                . . 4 5 5 1 1 5 . . 
                . 4 5 5 e e e 5 5 . 
                . . e 4 f d f 4 . . 
                . . e 4 d d d 4 . . 
                . . . e 4 4 4 b 4 2 
                . . . 4 2 2 d d . . 
                . . . 4 4 5 4 . . . 
                . . . 6 . . 6 . . . 
                `)
        } else {
            mySprite.setImage(img`
                . . . 5 5 5 4 . . . 
                . . 5 1 1 5 5 4 . . 
                . . 5 1 1 5 5 4 . . 
                . 5 5 e e e 5 5 4 . 
                . . 4 f d f 4 e . . 
                . . 4 d d d 4 e . . 
                2 4 b 4 4 4 e . . . 
                . . d d 2 2 4 . . . 
                . . . 4 5 4 4 . . . 
                . . . 6 . . 6 . . . 
                `)
        }
        atacking = 1
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            4 4 4 4 4 4 4 4 
            2 2 2 2 2 2 2 2 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            `, mySprite, horizontal * 300, 0)
        projectile.startEffect(effects.fire)
        music.pewPew.play()
        pause(200)
        atacking = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (start_game == 1) {
        if (mySprite.vy == 0) {
            music.playTone(659, music.beat(BeatFraction.Sixteenth))
            mySprite.vy = -160
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile25`, function (sprite, location) {
    info.setLife(0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    shoots += 1
    scene.cameraShake(4, 100)
    sprite.destroy(effects.disintegrate, 100)
    otherSprite.destroy()
    music.playTone(494, music.beat(BeatFraction.Sixteenth))
    music.playTone(587, music.beat(BeatFraction.Sixteenth))
    music.playTone(784, music.beat(BeatFraction.Sixteenth))
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile27`, function (sprite, location) {
    end_game()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile26`, function (sprite, location) {
    end_game()
})
function end_game () {
    info.setScore(shoots * 10)
    info.changeScoreBy(info.life() * 0)
    game.over(true)
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile29`, function (sprite, location) {
    end_game()
})
info.onLifeZero(function () {
    music.powerDown.play()
    pause(2000)
    if (game.ask("continue?")) {
        start()
    } else {
        game.over(false, effects.dissolve)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile23`, function (sprite, location) {
    scene.cameraShake(2, 100)
    tiles.setTilemap(tilemap`level3`)
    // bat
    for (let value of tiles.getTilesByType(assets.tile`tile24`)) {
        bat = sprites.create(img`
            . . . . . c c c c c c . . . . . 
            . . . . c b b b b b b c . . . . 
            . . . c b c b b b b b b c . . . 
            . . . c b b c b b b b b c . . . 
            . . . c b b b c b b b b c . . . 
            . . . f c c b b c b b b c . . . 
            . . . f b b c c c b b b f . . . 
            . . . f b c c b b c c f f . . . 
            . . . . f b b b b b b f . . . . 
            . . . . . b 3 b c 3 b f . . . . 
            . . . . . f 3 f f 3 f f . . . . 
            . . . . . . f f . f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(bat, value)
        animation.runImageAnimation(
        bat,
        [img`
            ....................
            ......cc....cc......
            ......c3c..c3c......
            .ccc..c3bccb3c..ccc.
            cbbbc.cbbbbbbc.cbbbc
            .cccbccb1bb1bccbccc.
            ..cbbccbbbbbbccbbc..
            ..cbfccb1221bccfbc..
            ..ffccfccccccfccff..
            ....ff.fccccf.ff....
            ........fccf........
            .........ff.........
            ....................
            ....................
            ....................
            ....................
            `,img`
            ....................
            ....................
            ......cc....cc......
            ......c3c..c3c......
            cc....c3bccb3c....cc
            cbc...cbbbbbbc...cbc
            cbcccccb1bb1bcccccbc
            .cbbfccbbbbbbccfbbc.
            ..ffffcb1221bcffff..
            ......fccccccf......
            .......fccccf.......
            ........fccf........
            .........ff.........
            ....................
            ....................
            ....................
            `,img`
            ....................
            ....................
            ....................
            ......cc....cc......
            ......c3c..c3c......
            ......c3bccb3c......
            ....cccbbbbbbccc....
            ...cbbcb1bb1bcbbc...
            ..ccbccbbbbbbccbcc..
            .cbbc.cb1221bc.cbbc.
            cbff..fccccccf..ffbc
            fcccff.fccccf.ffcbbf
            .ffcfcf.fccf.fcfcff.
            ...ffff..ff..ffff...
            ....................
            ....................
            `],
        100,
        true
        )
        bat.follow(mySprite, 25)
    }
    music.playMelody("E E G - G G B C5 ", 480)
    game.setDialogTextColor(11)
    game.showLongText("Conseguiste una pistola!!!", DialogLayout.Bottom)
    game.showLongText("Presiona \"B\" para disparar", DialogLayout.Bottom)
    armed = 1
    shoots = 0
})
function start () {
    if (start_game == 1) {
        scene.setBackgroundColor(15)
        for (let value22 of sprites.allOfKind(SpriteKind.Player)) {
            value22.destroy()
        }
        for (let value32 of sprites.allOfKind(SpriteKind.Enemy)) {
            value32.destroy()
        }
        info.setLife(4)
        horizontal = 1
        atacking = 0
        armed = 0
        mySprite = sprites.create(img`
            . . . 4 5 5 5 . . . 
            . . 4 5 5 1 1 5 . . 
            . . 4 5 5 1 1 5 . . 
            . 4 5 5 e e e 5 5 . 
            . . e 4 f d f 4 . . 
            . . e 4 d d d 4 . . 
            . . . e 4 4 4 . . . 
            . . d 4 2 2 2 d . . 
            . . . 4 4 5 4 . . . 
            . . . 6 . . 6 . . . 
            `, SpriteKind.Player)
        controller.moveSprite(mySprite, 70, 0)
        mySprite.ay = 350
        tiles.setTilemap(tilemap`level1`)
        tiles.placeOnRandomTile(mySprite, assets.tile`tile9`)
        mySprite.y += 3
        scene.cameraFollowSprite(mySprite)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (unhurtable == 0) {
        unhurtable = 1
        info.changeLifeBy(-1)
        music.playTone(262, music.beat(BeatFraction.Sixteenth))
        pause(2000)
        unhurtable = 0
    }
})
let bat: Sprite = null
let shoots = 0
let start_game = 0
let projectile: Sprite = null
let atacking = 0
let mySprite: Sprite = null
let horizontal = 0
let unhurtable = 0
let armed = 0
info.setLife(5)
tiles.setTilemap(tilemap`level2`)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 4 4 5 5 . . . . 
    . . . . . . . 4 5 1 5 5 5 . . . 
    . . 6 4 4 4 4 5 1 5 5 5 5 5 . . 
    . . . 4 2 2 d d 5 5 5 5 5 5 d . 
    . . . 5 2 2 d d 5 5 5 5 5 5 d . 
    . . 6 4 2 2 2 5 5 5 5 5 5 . . . 
    `, SpriteKind.oof)
mySprite2.setFlag(SpriteFlag.ShowPhysics, false)
mySprite2.setPosition(40, 0)
mySprite2.vy = 350
armed = 0
unhurtable = 0
game.onUpdate(function () {
    if (start_game == 1) {
        mySprite.setFlag(SpriteFlag.ShowPhysics, false)
        if (atacking == 0) {
            if (mySprite.vx > 0) {
                horizontal = 1
            }
            if (mySprite.vx < 0) {
                horizontal = -1
            }
            if (mySprite.vy > 0) {
                if (horizontal == 1) {
                    mySprite.setImage(img`
                        . . . 4 5 5 5 . . . 
                        . . 4 5 5 1 1 5 . . 
                        . . 4 5 5 1 1 5 . . 
                        . 4 5 5 e e e 5 5 . 
                        . . e e f e f e . . 
                        . . e 4 f d f 4 . . 
                        . d . e d d d . d . 
                        . . . 4 2 2 2 . . . 
                        . . . 6 4 5 4 . . . 
                        . . . . . . 6 . . . 
                        `)
                } else {
                    mySprite.setImage(img`
                        . . . 5 5 5 4 . . . 
                        . . 5 1 1 5 5 4 . . 
                        . . 5 1 1 5 5 4 . . 
                        . 5 5 e e e 5 5 4 . 
                        . . e f e f e e . . 
                        . . 4 f d f 4 e . . 
                        . d . d d d e . d . 
                        . . . 2 2 2 4 . . . 
                        . . . 4 5 4 6 . . . 
                        . . . 6 . . . . . . 
                        `)
                }
            } else if (mySprite.vy < 0) {
                if (horizontal == 1) {
                    mySprite.setImage(img`
                        . . . 4 5 1 1 . . . 
                        . . 4 5 5 1 1 5 . . 
                        . . 4 5 e e e 5 . . 
                        . . 5 e f e f 5 . . 
                        . 4 e 4 f d f 4 5 . 
                        . . e 4 d d d 4 . . 
                        . . . e 4 4 4 . . . 
                        . . . 4 2 2 2 . . . 
                        . . d 4 4 5 6 d . . 
                        . . . 6 . . . . . . 
                        `)
                } else {
                    mySprite.setImage(img`
                        . . . 1 1 5 5 . . . 
                        . . 5 1 1 5 5 4 . . 
                        . . 5 e e e e 4 . . 
                        . . 5 f e f 4 5 . . 
                        . 5 4 f d f 4 e 4 . 
                        . . 4 d d d e e . . 
                        . . . 4 4 4 4 . . . 
                        . . . 2 2 2 4 . . . 
                        . . d 6 5 4 4 d . . 
                        . . . . . . 6 . . . 
                        `)
                }
            } else {
                if (0 == mySprite.x % 8) {
                    if (horizontal == 1) {
                        mySprite.setImage(img`
                            . . . 4 5 5 5 . . . 
                            . . 4 5 5 1 1 5 . . 
                            . . 4 5 5 1 1 5 . . 
                            . 4 5 5 e e e 5 5 . 
                            . . e 4 f d f 4 . . 
                            . . e 4 d d d 4 . . 
                            . . . e 4 4 4 . . . 
                            . . . d 2 2 2 . . . 
                            . . . 4 4 5 4 . . . 
                            . . . . 6 6 . . . . 
                            `)
                    } else {
                        mySprite.setImage(img`
                            . . . 5 5 5 4 . . . 
                            . . 5 1 1 5 5 4 . . 
                            . . 5 1 1 5 5 4 . . 
                            . 5 5 e e e 5 5 4 . 
                            . . 4 f d f 4 e . . 
                            . . 4 d d d 4 e . . 
                            . . . 4 4 4 e . . . 
                            . . . 2 2 2 d . . . 
                            . . . 4 5 4 4 . . . 
                            . . . . 6 6 . . . . 
                            `)
                    }
                } else {
                    if (horizontal == 1) {
                        mySprite.setImage(img`
                            . . . 4 5 5 5 . . . 
                            . . 4 5 5 1 1 5 . . 
                            . . 4 5 5 1 1 5 . . 
                            . 4 5 5 e e e 5 5 . 
                            . . e 4 f d f 4 . . 
                            . . e 4 d d d 4 . . 
                            . . . e 4 4 4 . . . 
                            . . d 4 2 2 2 d . . 
                            . . . 4 4 5 4 . . . 
                            . . . 6 . . 6 . . . 
                            `)
                    } else {
                        mySprite.setImage(img`
                            . . . 5 5 5 4 . . . 
                            . . 5 1 1 5 5 4 . . 
                            . . 5 1 1 5 5 4 . . 
                            . 5 5 e e e 5 5 4 . 
                            . . 4 f d f 4 e . . 
                            . . 4 d d d 4 e . . 
                            . . . 4 4 4 e . . . 
                            . . d 2 2 2 4 d . . 
                            . . . 4 5 4 4 . . . 
                            . . . 6 . . 6 . . . 
                            `)
                    }
                }
            }
        }
    }
})
forever(function () {
    if (start_game == 0) {
        if (mySprite2.y == 104) {
            scene.cameraShake(4, 200)
            info.changeLifeBy(-1)
            pause(2000)
            mySprite2.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 5 5 5 . . . . . 
                . . . . . . 4 5 5 1 1 5 . . . . 
                . . . . . . 4 5 5 1 1 5 . . . . 
                . . . 4 4 4 5 5 5 5 5 5 5 . . . 
                . . . 4 2 2 e 4 f d f 4 . . . . 
                . . 6 5 2 d d 4 d d d 4 d . . . 
                . . 6 4 2 d d e 4 4 4 d d . . . 
                `)
            pause(1000)
            mySprite2.destroy()
            start_game = 1
            start()
        }
    }
})
