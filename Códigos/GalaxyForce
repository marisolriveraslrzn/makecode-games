enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const Powerup1 = SpriteKind.create()
    export const Enemy1 = SpriteKind.create()
    export const enemyshotq = SpriteKind.create()
    export const PlayerShot = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const SheildKind = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const BossShot = SpriteKind.create()
    export const HeartHealth = SpriteKind.create()
    export const thumb = SpriteKind.create()
    export const Duck = SpriteKind.create()
    export const Astroid = SpriteKind.create()
}
/**
 * Enemies
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy1, function (sprite, otherSprite) {
    Herohealth.value += -10
    otherSprite.destroy()
    scene.cameraShake(3, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    Herohealth.value += -10
    otherSprite.destroy()
    scene.cameraShake(3, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`PulsarBlast`, Hero, 0, -150)
    projectile.setKind(SpriteKind.PlayerShot)
    if (Powerup12 && Powerup12.lifespan > 0) {
        projectile = sprites.createProjectileFromSprite(img`
            ....................
            ....................
            ............9.......
            ..9........999...9..
            .999...9..99199.999.
            99199.999..919.99199
            .919.99199..1...919.
            ..1...919...1....1..
            ..1....1....4....1..
            ..4....1.........4..
            .......4....4.......
            ..4..............4..
            .......4............
            ............2.......
            ..2..............2..
            .......2............
            `, Hero, 0, -150)
        projectile.setKind(SpriteKind.PlayerShot)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.HeartHealth, function (sprite, otherSprite) {
    Herohealth.value += 15
    otherSprite.destroy()
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.Enemy3, function (sprite, otherSprite) {
    sprite.destroy()
    animation.runImageAnimation(
    Enemy33,
    assets.animation`Explosion`,
    60,
    false
    )
    pause(300)
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray, 10)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    animation.runImageAnimation(
    Hero,
    assets.animation`Explosion`,
    200,
    false
    )
    pause(2000)
    game.over(false, effects.dissolve)
})
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.Boss, function (sprite, otherSprite) {
    BossmanHealth.value += -0.2
    sprite.destroy()
    otherSprite.startEffect(effects.spray, 50)
})
// Enemy Hit
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.Enemy1, function (sprite, otherSprite) {
    sprite.destroy()
    animation.runImageAnimation(
    Enemy12,
    assets.animation`Explosion`,
    60,
    false
    )
    pause(300)
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray, 10)
})
sprites.onOverlap(SpriteKind.PlayerShot, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    animation.runImageAnimation(
    Enemy2,
    assets.animation`Explosion`,
    60,
    false
    )
    pause(300)
    otherSprite.destroy()
    otherSprite.startEffect(effects.spray, 10)
})
sprites.onOverlap(SpriteKind.enemyshotq, SpriteKind.Player, function (sprite, otherSprite) {
    Herohealth.value += -10
    sprite.destroy()
    scene.cameraShake(3, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Powerup12 = sprites.create(img`
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
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Powerup1)
    otherSprite.destroy()
    Powerup12.lifespan = 8000
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Herohealth.value += -10
    otherSprite.destroy()
    scene.cameraShake(3, 200)
})
function bossman (mySprite: Sprite) {
    BossMan = sprites.create(assets.image`Boss`, SpriteKind.Boss)
    BossThumbnail = sprites.create(img`
        ........................................................................11111111111111
        ........................................................................177777777ffff1
        ........................................................................177777ffff8881
        ........................................................................1ffffffb888881
        1111111111111111111111111111111111111111111111111111111111111111111111111298888b888881
        1111111111111111111111111111111111111111111111111111111111111111111111111298888b888881
        1111111111111111111111111111111111111111111111111111111111111111111111111298888b111bb1
        1111111111111111111111111111111111111111111111111111111111111111111111111298888b111bd1
        11111111111111111111111111111111111111111111111111111111111111111111111112dddddbbbbbd1
        11111111111111111111111111111111111111111111111111111111111111111111111112111111111111
        ........................................................................1fff4cccccccc1
        ........................................................................177f4cccccccc1
        ........................................................................177f4cccccccc1
        ........................................................................11111111111111
        `, SpriteKind.thumb)
    BossThumbnail.setPosition(116, 7)
    characterAnimations.loopFrames(
    BossMan,
    [img`
        ..............................................4.....4...............................................
        .............................................444...444..............................................
        .............................................454...454..............................................
        ......................................ffff...525...525...ffff.......................................
        ......................................fccf...222...222...fccf.......................................
        ......................................fccf..fffff.fffff..fccf.......................................
        ......................................fccff.fcccf.fcccf.ffccf.......................................
        ......................................fccbf.fcccf.fcccf.fbccf.......................................
        ..............2...................fffffccbf.fcccf.fcccf.fbccfffff.....................2.............
        ............4....................ffc1bbccbffccccf.fccccffbccbb1cff..................4...............
        ...........2...4................ffcc1bbccbfcccccf.fcccccfbccbb1ccff................2...4............
        .............4..................f1bc1bbccbccccccf.fccccccbccbb1cb1f..................4..............
        ............444........fffff....f1bc1bbccbccccccfffccccccbccbb1cb1f....fffff........444.............
        ............454........fbccf.ffff1bc1bcccbccccccbbbccccccbcccb1cb1ffff.fccbf........454.............
        ............525.ffff..ffbccf.fbbf1bc1bcccbcccccbbbbbcccccbcccb1cb1fbbf.fccbff..ffff.525.............
        ............222fb11f.ffcbccfff1bc1bc1bcccbbccccbbbbbccccbbcccb1cb1cb1fffccbcff.f11bf222.............
        ...........faaaab11f.f1cbccfcc1bc1bc1bcccbbbbbbbbbbbbbbbbbcccb1cb1cb1ccfccbc1f.f11baaaaf............
        ...........fccccb11cff1cbccfcc1bc1bc1bccbbbb66666666666bbbbccb1cb1cb1ccfccbc1ffc11bccccf............
        ...........fbcccb11c111cbcc1cc1bc1bc1bccbbb6888888888886bbbccb1cb1cb1cc1ccbc111c11bcccbf............
        ...........fb1cbb11c111cbcc1cc1bc1bc1bccbb668888888888866bbccb1cb1cb1cc1ccbc111c11bbc1bf............
        .........fffb1cbb11c111cbcc1cc1bc1bc1bccb68888888888888886bccb1cb1cb1cc1ccbc111c11bbc1bfff..........
        ........ff1cb1cbb11c111cbcc1cc1bc1bc1bccb88888888888888888bccb1cb1cb1cc1ccbc111c11bbc1bc1ff.........
        ....fffffc1cb1cbb11c111cbcc1cc1bc1bc1bcbb88888888888888888bbcb1cb1cb1cc1ccbc111c11bbc1bc1cfffff.....
        ....f111fb1cb1cbb11c111cbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbc111c11bbc1bc1bf111f.....
        ...ff111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111ff....
        ...fb111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb99888811111888899bb3b1cb1cb1c11ccbcb11c11bbc1bc1bc111bf....
        ..ffb111cb1cb1cb111c11bcbcc11c1bc1bf1bcbb99988811111888999bbcb1fb1cb1c11ccbcb11c111bc1bc1bc111bff...
        ..fcb111cb1cbfcb111c11bcbcc11c1bfffffbcbbb199991111199991bbbcbfffffb1c11ccbcb11c111bcfbc1bc111bcf...
        ..fbb111cb1cbfcb111c11bcbc111c1bf...fbccbb111111111111111bbccbf...fb1c111cbcb11c111bcfbc1bc111bbf...
        ..fcb111b111ffcb111c11bcbc111c1bf...fffcbb1111bb111bb1111bbcfff...fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbc111c1bf.....ffbb11ccbbcccbbcc11bbff.....fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbf111c1bf......fff11ccccccccccc11fff......fb1c111fbcb11c111bcff111b111bcf...
        ..f4b111b111ffcb111f11bcbf111c1bf........ffcccccccccccccff........fb1c111fbcb11f111bcff111b111b4f...
        ..ffc111b111ffcb111f1111ff111c1bf.........fcccbbcccbbcccf.........fb1c111ff1111f111bcff111b111cff...
        ...ffb11b111ffcb111f1111ff111c1bf.........ffccbbcccbbccff.........fb1c111ff1111f111bcff111b11bff....
        ....fb111cbfffcb1cffc111ff111c11f..........fcccccccccccf..........f11c111ff111cffc1bcfffbc111bf.....
        ....fb111cbf.fcb1cf.ccccffc11c11f..........ffcccccccccff..........f11c11cffcccc.fc1bcf.fbc111bf.....
        ....fb111cff.fcb1cf.4222f.fccc4ff..........fb.88bbb88.bf..........ff4cccf.f2224.fc1bcf.ffc111bf.....
        ....fb111cf..fcb1cf.fffff.fcccf.........ffffb188bbb881bffff.........fcccf.fffff.fc1bcf..fc111bf.....
        ....fb111cf..f1111f.......f222f.....fffffccfb188bbb881bfccfffff.....f222f.......f1111f..fc111bf.....
        ....fb111cf..fc111f.......fffff.....fcccfccfb188bbb881bfccfcccf.....fffff.......f111cf..fc111bf.....
        ....fb1111f..fccccf.................fcccf11fb188bbb881bf11fcccf.................fccccf..f1111bf.....
        ....f4cccff..f2222f.................fcccf11bb188bbb881bb11fcccf.................f2222f..ffccc4f.....
        ....f2442f...ffffff.................fcccf11b1c88bbb88c1b11fcccf.................ffffff...f2442f.....
        ....ffffff..........................fccc111b1ccccccccc1b111cccf..........................ffffff.....
        ....................................fcccf11bb888888888bb11fcccf.....................................
        ....................................fcccff118888888888811ffcccf.....................................
        ....................................fcccf.bb88888888888bb.fcccf.....................................
        ....................................f442f.ff88888888888ff.f244f.....................................
        ....................................fffff..f66999999966f..fffff.....................................
        ...........................................ff122222221ff............................................
        ............................................f122222221f.............................................
        ............................................fbbbbbbbbbf.............................................
        ............................................fffffffffff.............................................
        ....................................................................................................
        `,img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ......................................ffff...............ffff.......................................
        ......................................fccf...............fccf.......................................
        ......................................fccf..fffff.fffff..fccf.......................................
        ......................................fccff.fcccf.fcccf.ffccf.......................................
        ......................................fccbf.fcccf.fcccf.fbccf.......................................
        ..................................fffffccbf.fcccf.fcccf.fbccfffff...................................
        .................................ffc1bbccbffccccf.fccccffbccbb1cff..................................
        ................................ffcc1bbccbfcccccf.fcccccfbccbb1ccff.................................
        ................................f1bc1bbccbccccccf.fccccccbccbb1cb1f.................................
        .......................fffff....f1bc1bbccbccccccfffccccccbccbb1cb1f....fffff........................
        .......................fbccf.ffff1bc1bcccbccccccbbbccccccbcccb1cb1ffff.fccbf........................
        ................ffff..ffbccf.fbbf1bc1bcccbcccccbbbbbcccccbcccb1cb1fbbf.fccbff..ffff.................
        ................b11f.ffcbccfff1bc1bc1bcccbbccccbbbbbccccbbcccb1cb1cb1fffccbcff.f11bf................
        ...........faaaab11f.f1cbccfcc1bc1bc1bcccbbbbbbbbbbbbbbbbbcccb1cb1cb1ccfccbc1f.f11baaaaf............
        ...........fccccb11cff1cbccfcc1bc1bc1bccbbbb66666666666bbbbccb1cb1cb1ccfccbc1ffc11bccccf............
        ...........fbcccb11c111cbcc1cc1bc1bc1bccbbb6888888888886bbbccb1cb1cb1cc1ccbc111c11bcccbf............
        ...........fb1cbb11c111cbcc1cc1bc1bc1bccbb668888888888866bbccb1cb1cb1cc1ccbc111c11bbc1bf............
        .........fffb1cbb11c111cbcc1cc1bc1bc1bccb68888888888888886bccb1cb1cb1cc1ccbc111c11bbc1bfff..........
        ........ff1cb1cbb11c111cbcc1cc1bc1bc1bccb88888888888888888bccb1cb1cb1cc1ccbc111c11bbc1bc1ff.........
        ....fffffc1cb1cbb11c111cbcc1cc1bc1bc1bcbb88888888888888888bbcb1cb1cb1cc1ccbc111c11bbc1bc1cfffff.....
        ....f111fb1cb1cbb11c111cbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbc111c11bbc1bc1bf111f.....
        ...ff111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111ff....
        ...fb111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb99888811111888899bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111bf....
        ..ffb111cb1cb1cb111c11bcbcc11c1bc1bf1bcbb99988811111888999bbcb1fb1cb1c11ccbcb11c111bc1bc1bc111bff...
        ..fcb111cb1cbfcb111c11bcbcc11c1bfffffbcbbb199991111199991bbbcbfffffb1c11ccbcb11c111bcfbc1bc111bcf...
        ..fbb111cb1cbfcb111c11bcbc111c1bf...fbccbb111111111111111bbccbf...fb1c111cbcb11c111bcfbc1bc111bbf...
        ..fcb111b111ffcb111c11bcbc111c1bf...fffcbb1111bb111bb1111bbcfff...fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbc111c1bf.....ffbb11ccbbcccbbcc11bbff.....fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbf111c1bf......fff11ccccccccccc11fff......fb1c111fbcb11c111bcff111b111bcf...
        ..f4b111b111ffcb111f11bcbf111c1bf........ffcccccccccccccff........fb1c111fbcb11f111bcff111b111b4f...
        ..ffc111b111ffcb111f1111ff111c1bf.........fcccbbcccbbcccf.........fb1c111ff1111f111bcff111b111cff...
        ...ffb11b111ffcb111f1111ff111c1bf.........ffccbbcccbbccff.........fb1c111ff1111f111bcff111b11bff....
        ....fb111cbfffcb1cffc111ff111c11f..........fcccccccccccf..........f11c111ff111cffc1bcfffbc111bf.....
        ....fb111cbf.fcb1cf.ccccffc11c11f..........ffcccccccccff..........f11c11cffcccc.fc1bcf.fbc111bf.....
        ....fb111cff.fcb1cf.4222f.fccc4ff..........fb.88bbb88.bf..........ff4cccf.f2224.fc1bcf.ffc111bf.....
        ....fb111cf..fcb1cf.fffff.fcccf.........ffffb188bbb881bffff.........fcccf.fffff.fc1bcf..fc111bf.....
        ....fb111cf..f1111f.......f222f.....fffffccfb188bbb881bfccfffff.....f222f.......f1111f..fc111bf.....
        ....fb111cf..fc111f.......fffff.....fcccfccfb188bbb881bfccfcccf.....fffff.......f111cf..fc111bf.....
        ....fb1111f..fccccf.................fcccf11fb188bbb881bf11fcccf.................fccccf..f1111bf.....
        ....f4cccff..f2222f.................fcccf11bb188bbb881bb11fcccf.................f2222f..ffccc4f.....
        ....f2442f...ffffff.................fcccf11b1c88bbb88c1b11fcccf.................ffffff...f2442f.....
        ....ffffff..........................fccc111b1ccccccccc1b111cccf..........................ffffff.....
        ....................................fcccf11bb888888888bb11fcccf.....................................
        ....................................fcccff118888888888811ffcccf.....................................
        ....................................fcccf.bb88888888888bb.fcccf.....................................
        ....................................f442f.ff88888888888ff.f244f.....................................
        ....................................fffff..f66999999966f..fffff.....................................
        ...........................................ff144444441ff............................................
        ............................................f144444441f.............................................
        ............................................fbbbbbbbbbf.............................................
        ............................................fffffffffff.............................................
        ....................................................................................................
        `],
    50,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    BossMan,
    [img`
        ...........................................4..4...4.4...4...........................................
        .............................................444.2.444.2............................................
        ...........................................2.454...454..............................................
        ......................................ffff...525...525...ffff.......................................
        ......................................fccf...222...222...fccf.......................................
        ......................................fccf..fffff.fffff..fccf.......................................
        ......................................fccff.fcccf.fcccf.ffccf.......................................
        ......................................fccbf.fcccf.fcccf.fbccf.......................................
        ...............2..................fffffccbf.fcccf.fcccf.fbccfffff...................4.2.............
        .............4...................ffc1bbccbffccccf.fccccffbccbb1cff..................................
        ...........2....................ffcc1bbccbfcccccf.fcccccfbccbb1ccff...............2....4............
        .............4..................f1bc1bbccbccccccf.fccccccbccbb1cb1f..................4..............
        ............444........fffff....f1bc1bbccbccccccfffccccccbccbb1cb1f....fffff........444.............
        ............454........fbccf.ffff1bc1bcccbccccccbbbccccccbcccb1cb1ffff.fccbf........454.............
        ............525.ffff..ffbccf.fbbf1bc1bcccbcccccbbbbbcccccbcccb1cb1fbbf.fccbff..ffff.525.............
        ............222fb11f.ffcbccfff1bc1bc1bcccbbccccbbbbbccccbbcccb1cb1cb1fffccbcff.f11bf222.............
        ...........faaaab11f.f1cbccfcc1bc1bc1bcccbbbbbbbbbbbbbbbbbcccb1cb1cb1ccfccbc1f.f11baaaaf............
        ...........fccccb11cff1cbccfcc1bc1bc1bccbbbb66666666666bbbbccb1cb1cb1ccfccbc1ffc11bccccf............
        ...........fbcccb11c111cbcc1cc1bc1bc1bccbbb6888888888886bbbccb1cb1cb1cc1ccbc111c11bcccbf............
        ...........fb1cbb11c111cbcc1cc1bc1bc1bccbb668888888888866bbccb1cb1cb1cc1ccbc111c11bbc1bf............
        .........fffb1cbb11c111cbcc1cc1bc1bc1bccb68888888888888886bccb1cb1cb1cc1ccbc111c11bbc1bfff..........
        ........ff1cb1cbb11c111cbcc1cc1bc1bc1bccb88888888888888888bccb1cb1cb1cc1ccbc111c11bbc1bc1ff.........
        ....fffffc1cb1cbb11c111cbcc1cc1bc1bc1bcbb88888888888888888bbcb1cb1cb1cc1ccbc111c11bbc1bc1cfffff.....
        ....f111fb1cb1cbb11c111cbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbc111c11bbc1bc1bf111f.....
        ...ff111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111ff....
        ...fb111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb99888811111888899bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111bf....
        ..ffb111cb1cb1cb111c11bcbcc11c1bc1bf1bcbb99988811111888999bbcb1fb1cb1c11ccbcb11c111bc1bc1bc111bff...
        ..fcb111cb1cbfcb111c11bcbcc11c1bfffffbcbbb199991111199991bbbcbfffffb1c11ccbcb11c111bcfbc1bc111bcf...
        ..fbb111cb1cbfcb111c11bcbc111c1bf...fbccbb111111111111111bbccbf...fb1c111cbcb11c111bcfbc1bc111bbf...
        ..fcb111b111ffcb111c11bcbc111c1bf...fffcbb1111bb111bb1111bbcfff...fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbc111c1bf.....ffbb11ccbbcccbbcc11bbff.....fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbf111c1bf......fff11ccccccccccc11fff......fb1c111fbcb11c111bcff111b111bcf...
        ..f4b111b111ffcb111f11bcbf111c1bf........ffcccccccccccccff........fb1c111fbcb11f111bcff111b111b4f...
        ..ffc111b111ffcb111f1111ff111c1bf.........fcccbbcccbbcccf.........fb1c111ff1111f111bcff111b111cff...
        ...ffb11b111ffcb111f1111ff111c1bf.........ffccbbcccbbccff.........fb1c111ff1111f111bcff111b11bff....
        ....fb111cbfffcb1cffc111ff111c11f..........fcccccccccccf..........f11c111ff111cffc1bcfffbc111bf.....
        ....fb111cbf.fcb1cf.ccccffc11c11f..........ffcccccccccff..........f11c11cffcccc.fc1bcf.fbc111bf.....
        ....fb111cff.fcb1cf.4222f.fccc4ff..........fb.88bbb88.bf..........ff4cccf.f2224.fc1bcf.ffc111bf.....
        ....fb111cf..fcb1cf.fffff.fcccf.........ffffb188bbb881bffff.........fcccf.fffff.fc1bcf..fc111bf.....
        ....fb111cf..f1111f.......f222f.....fffffccfb188bbb881bfccfffff.....f222f.......f1111f..fc111bf.....
        ....fb111cf..fc111f.......fffff.....fcccfccfb188bbb881bfccfcccf.....fffff.......f111cf..fc111bf.....
        ....fb1111f..fccccf.................fcccf11fb188bbb881bf11fcccf.................fccccf..f1111bf.....
        ....f4cccff..f2222f.................fcccf11bb188bbb881bb11fcccf.................f2222f..ffccc4f.....
        ....f2442f...ffffff.................fcccf11b1c88bbb88c1b11fcccf.................ffffff...f2442f.....
        ....ffffff..........................fccc111b1ccccccccc1b111cccf..........................ffffff.....
        ....................................fcccf11bb888888888bb11fcccf.....................................
        ....................................fcccff118888888888811ffcccf.....................................
        ....................................fcccf.bb88888888888bb.fcccf.....................................
        ....................................f442f.ff88888888888ff.f244f.....................................
        ....................................fffff..f66999999966f..fffff.....................................
        ...........................................ff122222221ff............................................
        ............................................f122222221f.............................................
        ............................................fbbbbbbbbbf.............................................
        ............................................fffffffffff.............................................
        ....................................................................................................
        `,img`
        ....................................................................................................
        ....................................................................................................
        ....................................................................................................
        ......................................ffff...............ffff.......................................
        ......................................fccf...............fccf.......................................
        ......................................fccf..fffff.fffff..fccf.......................................
        ......................................fccff.fcccf.fcccf.ffccf.......................................
        ......................................fccbf.fcccf.fcccf.fbccf.......................................
        ..................................fffffccbf.fcccf.fcccf.fbccfffff...................................
        .................................ffc1bbccbffccccf.fccccffbccbb1cff..................................
        ................................ffcc1bbccbfcccccf.fcccccfbccbb1ccff.................................
        ................................f1bc1bbccbccccccf.fccccccbccbb1cb1f.................................
        .......................fffff....f1bc1bbccbccccccfffccccccbccbb1cb1f....fffff........................
        .......................fbccf.ffff1bc1bcccbccccccbbbccccccbcccb1cb1ffff.fccbf........................
        ................ffff..ffbccf.fbbf1bc1bcccbcccccbbbbbcccccbcccb1cb1fbbf.fccbff..ffff.................
        ................b11f.ffcbccfff1bc1bc1bcccbbccccbbbbbccccbbcccb1cb1cb1fffccbcff.f11bf................
        ...........faaaab11f.f1cbccfcc1bc1bc1bcccbbbbbbbbbbbbbbbbbcccb1cb1cb1ccfccbc1f.f11baaaaf............
        ...........fccccb11cff1cbccfcc1bc1bc1bccbbbb66666666666bbbbccb1cb1cb1ccfccbc1ffc11bccccf............
        ...........fbcccb11c111cbcc1cc1bc1bc1bccbbb6888888888886bbbccb1cb1cb1cc1ccbc111c11bcccbf............
        ...........fb1cbb11c111cbcc1cc1bc1bc1bccbb668888888888866bbccb1cb1cb1cc1ccbc111c11bbc1bf............
        .........fffb1cbb11c111cbcc1cc1bc1bc1bccb68888888888888886bccb1cb1cb1cc1ccbc111c11bbc1bfff..........
        ........ff1cb1cbb11c111cbcc1cc1bc1bc1bccb88888888888888888bccb1cb1cb1cc1ccbc111c11bbc1bc1ff.........
        ....fffffc1cb1cbb11c111cbcc1cc1bc1bc1bcbb88888888888888888bbcb1cb1cb1cc1ccbc111c11bbc1bc1cfffff.....
        ....f111fb1cb1cbb11c111cbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbc111c11bbc1bc1bf111f.....
        ...ff111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb88888888888888888bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111ff....
        ...fb111cb1cb1cbb11c11bcbcc11c1bc1bc1bcbb99888811111888899bbcb1cb1cb1c11ccbcb11c11bbc1bc1bc111bf....
        ..ffb111cb1cb1cb111c11bcbcc11c1bc1bf1bcbb99988811111888999bbcb1fb1cb1c11ccbcb11c111bc1bc1bc111bff...
        ..fcb111cb1cbfcb111c11bcbcc11c1bfffffbcbbb199991111199991bbbcbfffffb1c11ccbcb11c111bcfbc1bc111bcf...
        ..fbb111cb1cbfcb111c11bcbc111c1bf...fbccbb111111111111111bbccbf...fb1c111cbcb11c111bcfbc1bc111bbf...
        ..fcb111b111ffcb111c11bcbc111c1bf...fffcbb1111bb111bb1111bbcfff...fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbc111c1bf.....ffbb11ccbbcccbbcc11bbff.....fb1c111cbcb11c111bcff111b111bcf...
        ..fcb111b111ffcb111c11bcbf111c1bf......fff11ccccccccccc11fff......fb1c111fbcb11c111bcff111b111bcf...
        ..f4b111b111ffcb111f11bcbf111c1bf........ffcccccccccccccff........fb1c111fbcb11f111bcff111b111b4f...
        ..ffc111b111ffcb111f1111ff111c1bf.........fcccbbcccbbcccf.........fb1c111ff1111f111bcff111b111cff...
        ...ffb11b111ffcb111f1111ff111c1bf.........ffccbbcccbbccff.........fb1c111ff1111f111bcff111b11bff....
        ....fb111cbfffcb1cffc111ff111c11f..........fcccccccccccf..........f11c111ff111cffc1bcfffbc111bf.....
        ....fb111cbf.fcb1cf.ccccffc11c11f..........ffcccccccccff..........f11c11cffcccc.fc1bcf.fbc111bf.....
        ....fb111cff.fcb1cf.4222f.fccc4ff..........fb.88bbb88.bf..........ff4cccf.f2224.fc1bcf.ffc111bf.....
        ....fb111cf..fcb1cf.fffff.fcccf.........ffffb188bbb881bffff.........fcccf.fffff.fc1bcf..fc111bf.....
        ....fb111cf..f1111f.......f222f.....fffffccfb188bbb881bfccfffff.....f222f.......f1111f..fc111bf.....
        ....fb111cf..fc111f.......fffff.....fcccfccfb188bbb881bfccfcccf.....fffff.......f111cf..fc111bf.....
        ....fb1111f..fccccf.................fcccf11fb188bbb881bf11fcccf.................fccccf..f1111bf.....
        ....f4cccff..f2222f.................fcccf11bb188bbb881bb11fcccf.................f2222f..ffccc4f.....
        ....f2442f...ffffff.................fcccf11b1c88bbb88c1b11fcccf.................ffffff...f2442f.....
        ....ffffff..........................fccc111b1ccccccccc1b111cccf..........................ffffff.....
        ....................................fcccf11bb888888888bb11fcccf.....................................
        ....................................fcccff118888888888811ffcccf.....................................
        ....................................fcccf.bb88888888888bb.fcccf.....................................
        ....................................f442f.ff88888888888ff.f244f.....................................
        ....................................fffff..f66999999966f..fffff.....................................
        ...........................................ff144444441ff............................................
        ............................................f144444441f.............................................
        ............................................fbbbbbbbbbf.............................................
        ............................................fffffffffff.............................................
        ....................................................................................................
        `],
    50,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    BossMan.setVelocity(25, 0)
    BossMan.setPosition(randint(0, scene.screenWidth()), 0)
    BossMan.setBounceOnWall(true)
    BossmanHealth = statusbars.create(70, 4, StatusBarKind.EnemyHealth)
    BossmanHealth.setColor(10, 13)
    BossmanHealth.setOffsetPadding(29, 5)
    BossmanHealth.positionDirection(CollisionDirection.Top)
    BossmanHealth.value = 900
}
let BossShot2: Sprite = null
let BossShot3Lazer: Sprite = null
let HealthUp: Sprite = null
let MachinePowerUp: Sprite = null
let EnemyShot: Sprite = null
let BossThumbnail: Sprite = null
let BossMan: Sprite = null
let Enemy2: Sprite = null
let Enemy12: Sprite = null
let BossmanHealth: StatusBarSprite = null
let Enemy33: Sprite = null
let Powerup12: Sprite = null
let projectile: Sprite = null
let Herohealth: StatusBarSprite = null
let Hero: Sprite = null
scene.setBackgroundImage(img`
    f77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff77ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    f77777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ff77ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ff77ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ff77ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ff77ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    77ff77ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7777777777fffffffffffffffffffffffffffffffffffffffffffffffffffff77777777ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffff7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7fffffffffff77777ff7ff77777ff7fffff7f7fffff7fffffffffffffffffff7fffffffffff777ffff777777ffff7777ff77777ffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7fffffffffffffff7ff7ffffff7ff7fffff7f7fffff7fffffffffffffffffff7ffffffffff7fff7fff7fff77fff7ffffff7ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7fffffffffffffff7ff7ffffff7fff7fff7fff7fff7ffffffffffffffffffff7fffffffff7fffff7ff7fff77ff77ffffff7ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7fff777777ff77777ff7ff77777ffff7f7ffff7fff7ffffffffffffffffffff777777ffff7fffff7ff777777ff77ffffff7ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffff7ff7fff7ff7ff7fff7ffff7f7fffff777fffffffffffffffffffff7fffffffff7fffff7ff777777ff77ffffff777ffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffff7ff7fff7ff7ff7fff7fffff7fffffff7ffffffffffffffffffffff7fffffffff7fffff7ff7f7fffff77ffffff7ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffff7ff7fff7ff7ff7fff7fffff7fffffff7ffffffffffffffffffffff7fffffffff7fffff7ff7ff7ffff77ffffff7ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffff7ff7fff7ff7ff7fff7ffff7f7ffffff7ffffffffffffffffffffff7fffffffff7fffff7ff7fff7fff77ffffff7ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffff7ff7fff7ff7ff7fff7fff7fff7fffff7ffffffffffffffffffffff7fffffffff7fffff7ff7ffff7ff77ffffff7ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7ffffffff7ff7fff7ff7ff7fff7ff77fff77ffff7ffffffffffffffffffffff7ffffffffff7fff7fff7ffff7fff7ffffff7ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffff7777777777ff77777ff7ff77777ff7fffff7ffff7ffffffffffffffffffffff7fffffffffff777ffff7ffff7ffff7777ff77777ffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
game.setDialogTextColor(15)
game.setDialogFrame(img`
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . 
    . . . . . . . . . . . . . . . 
    `)
game.showLongText("", DialogLayout.Bottom)
let Planet2 = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................................................................fff..........................................................................
    ..................................................................................ffcfccc.......................................................................
    .................................................................................ffcfffffcc.....................................................................
    .................................................................................ffcffccfcc.....................................................................
    ..................................................................................ffcccffccc....................................................................
    ..................................................................................ffcfcffccc....................................................................
    ..................................................................................ffffccfccc....................................................................
    .................................................................................ffcfcfccfcc....................................................................
    ..................................................................................fffcffffcc....................................................................
    .................................................................................ffcccfcccc.....................................................................
    ................................................................................fffffcfcccc.....................................................................
    ................................................................................fcffffffcc......................................................................
    ..............................................cccc..............................ffcffc..........................................................................
    ...........................................cccfccfc..............................ffffc..........................................................................
    ...........................................fcffffcc.............................................................................................................
    ...........................................fccfcccc.............................................................................................................
    ...........................................ffffffcc.............................................................................................................
    ............................................cfffcff.............................................................................................................
    .............................................fccccf.............................................................................................................
    .............................................fffccc.............................................................................................................
    .............................................cfffcc.............................................................................................................
    ..............................................fff...............................................................................................................
    ..............................................ccc...............................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................................................................cc................................................................
    .............................................................................................fccc...............................................................
    .............................................................................................fffccc.............................................................
    .............................................................................................fffcfcc............................................................
    ............................................................................................ffcffffcc...........................................................
    ...........................................................................................fffffffccc...........................................................
    ...........................................................................................ffffcfccfc...........................................................
    ..........................................................................................fffffffffc............................................................
    ..........................................................................................ffccfcffcc............................................................
    ..........................................................................................ffcfcfcffc............................................................
    ..........................................................................................fcfffffcfc............................................................
    ...........................................................................................ccfffcccc............................................................
    ...........................................................................................fffccc...............................................................
    ............................................................................................fff.................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................ff................................................................................................................
    ............................................ffffccc.............................................................................................................
    ...........................................fffffffccc...........................................................................................................
    ...........................................f.fcfffffc...........................................................................................................
    ...........................................fffcffcfcffcc........................................................................................................
    ............................................ffcfcccfcfcc........................................................................................................
    ...........................................fffffffffcccfc.......................................................................................................
    ...........................................ffffcffcfffffc.......................................................................................................
    ...........................................fffffcffcccc.........................................................................................................
    ...........................................fcffcfcf.............................................................................................................
    ...........................................ffffffff.............................................................................................................
    ............................................fffcffc.............................................................................................................
    .............................................ffff...............................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ............................................................................................................cc..................................................
    ...........................................................................................................cfccfc...............................................
    ..........................................................................................................cfffcccc..............................................
    .........................................................................................................fffffffccc.............................................
    .........................................................................................................ffffffcfcc.............................................
    .........................................................................................................ffffccfffccc...........................................
    .........................................................................................................fffffffccffc...........................................
    .........................................................................................................fffffcccfffc...........................................
    ..........................................................................................................fffffffcfcc...........................................
    ...........................................................................................................ffffcfffcc...........................................
    ...........................................................................................................fffcfcfcfcc..........................................
    ............................................................................................................fffffcccfc..........................................
    ............................................................................................................ffffffffcc..........................................
    ............................................................................................................fffffffffc..........................................
    .............................................................................................................ffffffff...........................................
    ..............................................................................................................fffffff...........................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..........................................................................cfcc..................................................................................
    ..........................................................................fffffc................................................................................
    ..........................................................................fcffcff...............................................................................
    ..........................................................................cfffffcc..............................................................................
    ..........................................................................ffffcccfc.............................................................................
    ..........................................................................ffffffccc.............................................................................
    ..........................................................................ffcffffcc.............................................................................
    ..........................................................................ffcffcfcc.............................................................................
    ...........................................................................fffffcfc.............................................................................
    ...........................................................................fffccfcc.............................................................................
    ...........................................................................cffccfc..............................................................................
    ..............................................................................ff................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................fff.............................................................................................................
    ...............................................fffccfc..........................................................................................................
    ...............................................ffffcccf...........................................fffc.ccc......................................................
    ...............................................ffcfffcc...........................................fcffffccc.....................................................
    ...............................................ffffffff...........................................fcfcfcfccccc..................................................
    ...............................................ffffcfcc..........................................fffccfcccfcccc.................................................
    ................................................ffffffcf.........................................fffffffcfccccc.................................................
    ................................................ffcfcccc........................................ffffffcfccccccc.................................................
    ................................................fffffcfc........................................fffffffffffcccc.................................................
    ................................................fffcffcc.........................................fffcfffffcccc..................................................
    .................................................ffcffc..........................................ffffcfcffccc...................................................
    ..................................................fcf.............................................fffffffffcc...................................................
    ...................................................c..............................................fffcffffffcc..................................................
    ..................................................................................................cfffffccfffc..................................................
    ....................................................................................................fffffccfff..................................................
    .....................................................................................................ffffffff...................................................
    .......................................................................................................fcccc....................................................
    .......................................................................................................fffcc....................................................
    ........................................................................................................ffff....................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .........................................................................................c......................................................................
    ...................................................................................cc...cc......................................................................
    ..................................................................................cfcffcccf.....................................................................
    ..................................................................................ffccffccf.....................................................................
    ..................................................................................cfffcfccfc....................................................................
    ..................................................................................ffcffcfcff....................................................................
    ..................................................................................ffcffffffccc..................................................................
    ...................................................................................fffffccccc...................................................................
    ...................................................................................ffffcfccc....................................................................
    ....................................................................................ffffcfff....................................................................
    .....................................................................................ffffccf....................................................................
    .....................................................................................fffffcc....................................................................
    .......................................................................................ffffc....................................................................
    ........................................................................................ffff....................................................................
    ..........................................................................................ff....................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ...................................................ccc..........................................................................................................
    ...................................................ccf..........................................................................................................
    .................................................f.cffc..f......................................................................................................
    ................................................ffffccccff......................................................................................................
    ................................................ffffffffccccc...................................................................................................
    ................................................ffffccccccffc...................................................................................................
    .................................................ffffffffcfcc...................................................................................................
    .................................................fffffccffccc...................................................................................................
    .................................................ffffffcccccc...................................................................................................
    ..................................................ffcfffffcc....................................................................................................
    ....................................................fcfcffff....................................................................................................
    .....................................................ffffcff....................................................................................................
    ......................................................cccc......................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .........................................................................................fcccc..................................................................
    ........................................................................................ffcfcc..................................................................
    .....................................................................................f.ffffcfcc.................................................................
    ..................................................................................fffffffffffccc................................................................
    .................................................................................fffcffcfffffffc................................................................
    .................................................................................fcffffcffcfffcc................................................................
    .................................................................................ffffffffcffcfcc................................................................
    .................................................................................fffffffffffccfc................................................................
    ................................................................................ff....fcfffcfccc................................................................
    ......................................................................................ffffffcffc................................................................
    ........................................................................................cfffccc.................................................................
    ........................................................................................ccfffcc.................................................................
    ..........................................................................................cccc..................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Astroid)
let Planet = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ......................................................................................cfcfc.....................................................................
    .....................................................................................cffcfccc...................................................................
    .....................................................................................cffcafaacc.................................................................
    .....................................................................................ffcfabbbbcc................................................................
    ....................................................................................ffffffaccbac................................................................
    .....................................................................................ffcfffccbac................................................................
    .....................................................................................ffcfacccbcc................................................................
    ......................................................................................fffaaaaccc................................................................
    ......................................................................................ffffbbaacbcc..............................................................
    ......................................................................................fffafffaacbc..............................................................
    ...................................................................................cfffffafcccaaba..............................................................
    ..................................................................................cfffffaffcccccbc..............................................................
    ..................................................................................cfffcffaaaacabbc..............................................................
    ..................................................................................fffffccffbaacaac..............................................................
    ..................................................................................fffcffccffbbccac..............................................................
    ..................................................................................ffffccfccffffcac..............................................................
    ..................................................................................ffcfffffaaccccac..............................................................
    ..................................................................................ffcffffafaaccaac..............................................................
    ..................................................................................cfffcfccbbaacccc..............................................................
    ...................................................................................ccfffcbbacccc................................................................
    ......................................................................................fffccffcc.................................................................
    .......................................................................................cfffcc...................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .............................................................ccccc..............................................................................................
    .............................................................cccbccccc..........................................................................................
    ...........................................................ffccbbbcccc..........................................................................................
    ..........................................................ffcacbcbbbccc.........................................................................................
    ..........................................................ffcaacaaccccc.........................................................................................
    ........................................................ffffcccccfaaabbc........................................................................................
    ........................................................fcfafcccccfaaabc........................................................................................
    ......................................................ffcffaafcccccaaabbcc......................................................................................
    ......................................................fffffcafffbcfaaaabccc.....................................................................................
    ......................................................ffffffffcfbfccaccccccc....................................................................................
    ......................................................ffcfccffffbbccccbccaac....................................................................................
    .......................................................fcffccfaffbbbafcbbcaa....................................................................................
    .......................................................ffffbbfcaaccccaffaacc....................................................................................
    .......................................................fffffffcffaafcaccfbac....................................................................................
    .......................................................fffffcfffccfacacfbacc....................................................................................
    .......................................................fffafffcfcffccacfbccc....................................................................................
    ........................................................ffcbffffffcccffabccb....................................................................................
    .........................................................ffbcfffffccabbbbbcb....................................................................................
    ..........................................................ffffcfffcfcccaaccbb...................................................................................
    ..........................................................fffffffffcaacacccc....................................................................................
    ..........................................................fffffcfffffaaccc......................................................................................
    ...........................................................cfffaaffffffffc......................................................................................
    ............................................................ffffaacffffffc......................................................................................
    ............................................................ffffcaaffcffc.......................................................................................
    ............................................................ffcffffffcfff.......................................................................................
    ............................................................ffffffccffcf........................................................................................
    ............................................................fffffffffff.........................................................................................
    ..............................................................fffffffff.........................................................................................
    ..................................................................fff...........................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..........................................................................aaaa..................................................................................
    ........................................................................fcfaaaaac...............................................................................
    .....................................................................ffcffaaaacaaac.............................................................................
    ....................................................................ffcccffcaaacaac.............................................................................
    ....................................................................fcffcffccaacac..............................................................................
    ....................................................................ffffffffaaccaa..............................................................................
    ....................................................................ffffcaafcfaccca.............................................................................
    .....................................................................fffcccafccaaca.............................................................................
    ....................................................................ffffccfaacacaa..............................................................................
    ....................................................................ffcfcfcfccfccac.............................................................................
    ....................................................................fffffffcaaffaac.............................................................................
    .....................................................................ffffcccccccaacc............................................................................
    .......................................................................fccffffcccccc............................................................................
    .......................................................................fffcfffcccacc............................................................................
    .......................................................................fcfcccccaaac.............................................................................
    .......................................................................ffffccfffaac.............................................................................
    .......................................................................cffffffcffcc.............................................................................
    ........................................................................fffffffccca.............................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    .................................................................ffccb..........................................................................................
    ........................................................ffffa....ffccbb.........................................................................................
    ......................................................ffffffccc..cffcaba........................................................................................
    .....................................................ffffffffaccfcfcaaba........................................................................................
    ....................................................fcffafcffacffcffcaab........................................................................................
    ...................................................ffcffffcfffffbccffcab........................................................................................
    ...................................................fffffffcfbffffccaffab........................................................................................
    ....................................................ffffccffffffffccacaaa.......................................................................................
    ....................................................ffffffaffffabfcabcaa........................................................................................
    .....................................................fffccffacacccacbcaa........................................................................................
    ....................................................fffcafffacccacaaccc.........................................................................................
    ....................................................fffffcfffffbbaaaca..........................................................................................
    ...................................................fffcffcaafccabccaba..........................................................................................
    ...................................................fffcfffffffccaaacb...........................................................................................
    ...................................................fffcfaffccaaabaaca...........................................................................................
    ...................................................ffffffcfccccbbccc............................................................................................
    ....................................................ffffffffcffaccca............................................................................................
    .....................................................fffffffffccacca............................................................................................
    ......................................................fffcfcaacbca..............................................................................................
    .......................................................fffcfcabba...............................................................................................
    .........................................................ffffcc.................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..............................................................................cccccccc..........................................................................
    ..............................................................................cccccbbaacc.......................................................................
    .............................................................................ccffaccbbcaabb.....................................................................
    .............................................................................cffabbfabcccabb....................................................................
    ............................................................................cfffffaaacacccabc...................................................................
    ............................................................................ffffffaaaccacccbc...................................................................
    ............................................................................fccfcffcaafaccacc...................................................................
    ............................................................................fffcfffacffcbcaccc..................................................................
    ............................................................................fffffffbbfcccbaafcc.................................................................
    ............................................................................ffcfffffcbcccbcfcca.................................................................
    ............................................................................ffffcfacfaaaccffcaa.................................................................
    .............................................................................fffcfaaffaaaccccaa.................................................................
    ..............................................................................ffcfcffcfafffccbac................................................................
    ..............................................................................fffffffcfcaafccbac................................................................
    ...............................................................................ffcffffcccbbfcbbcc...............................................................
    ................................................................................fcffccffccbaccbbc...............................................................
    ................................................................................ffffcaaffcabacfcc...............................................................
    .................................................................................fcfccfafcaaacfcc...............................................................
    .................................................................................fffffffccccabaf................................................................
    ..................................................................................ffffffcccccbfc................................................................
    ...................................................................................fffffcfcccbfc................................................................
    .....................................................................................fcffffcbacc................................................................
    .....................................................................................ffffccfffcc................................................................
    ......................................................................................fffcccaacc................................................................
    ........................................................................................cccccc..................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `, SpriteKind.Astroid)
Planet2.setVelocity(0, 15)
Planet.setVelocity(0, 25)
let HeroThumbNail = sprites.create(img`
    11111111111111...................................................
    1ffff666666661...................................................
    1accffff666661...................................................
    1ccccccffff661...................................................
    1ccccccbbbfff1111111111111111111111111111111111111111111111111111
    1bbccccbbbadb1111111111111111111111111111111111111111111111111111
    1bbbbbbbbadbc1111111111111111111111111111111111111111111111111111
    1aaabbbbadccc1111111111111111111111111111111111111111111111111111
    1ddaaffffffff1111111111111111111111111111111111111111111111111111
    1bddf666666661111111111111111111111111111111111111111111111111111
    1bbbf666666661...................................................
    1cfddddccf6661...................................................
    1ffddddccf6661...................................................
    11111111111111...................................................
    `, SpriteKind.thumb)
HeroThumbNail.setPosition(35, 7)
Hero = sprites.create(img`
    ..........ff..........
    ..........ff..........
    .........fccf.........
    ........fcddcf........
    ........fcaacf........
    ........fcbbcf........
    ...a....fcbbcf....a...
    ...d...fabccbaf...d...
    ...d..fdabccbadf..d...
    ...c.fccabccbaccf.c...
    .ffffaaaabccbaaaaffff.
    fbbdaddbbbaabbbddadbbf
    fbddaaabddddddbaaaddbf
    fbddababddddddbabaddbf
    fbddaaabbddddbbaaaddbf
    fbdcccccbdccdbcccccdbf
    fcccfffffccccfffffcccf
    fccf.....fccf.....fccf
    fff......ffff......fff
    ........425524........
    .........4224.........
    ..........55..........
    `, SpriteKind.Player)
Hero.setPosition(75, 105)
controller.moveSprite(Hero, 175, 0)
characterAnimations.loopFrames(
Hero,
assets.animation`myAnim0`,
100,
characterAnimations.rule(Predicate.NotMoving)
)
characterAnimations.loopFrames(
Hero,
assets.animation`RightBank0`,
100,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
Hero,
assets.animation`RightLeft`,
100,
characterAnimations.rule(Predicate.MovingLeft)
)
Hero.setStayInScreen(true)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    ffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
    ffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
    ffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbb
    fffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbb
    ffffccffffbffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbb
    ffffccffffcffffffbfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbf
    ffffcccfffbfffffbcffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffffcc
    ffffcccfffbfffffbcffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbfffffffffffcc
    ffffffffffbfffffbffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcbffffffbfffcc
    ffffffcfffbfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcbffffffcfffcc
    ffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcfbffffffcfffff
    ffffffffffcffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfbffffffcfffff
    fffffffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcffffffffbfffff
    fffffffffbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffccbfffffffbfffff
    fffffffffbfffffffcfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbfffffffbfffff
    fffffcfffffffffffcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffbfffff
    fffffffffffffffbbcfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffbbffff
    fffffcffffffffffbffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffcffff
    fffffccffffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbbfffffffffff
    fffffcbfffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbffffffffffff
    fffffcbfffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffff
    fffffcbfffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffffbcf
    fffffccbffffffffcfffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffccbffffffffffbcf
    ffffffccffffffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcbffffffffffbbcf
    ffffffccffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffbfcffffffffbccf
    ffffffccbfffffffffffcbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffbccff
    ffffccccbfffffffffffccfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffcffffffffbccff
    ffffbbcccfffffffffffcffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbfffccfffffffbccff
    ffffbbccbfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcbcfffccfffffffbcccc
    ffffcbccbfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbbfffffffffbffffccbb
    fffffbcccbffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffbffffccbb
    fffffccbccbffffffffffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffbbcffffcbc
    ffffffbbccbfffffffffffbccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffbcfffffcbf
    ffffffffbcbcffffffffffcbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffbbcfbfffccf
    ffffffffbcbcffffffffffcbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccbfffffffbccfbfffbff
    ffffffccbcbffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccbcffffffbbcccbffffff
    fffffffcccffcffffffffccfbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccbcfffffcbccfcbffffff
    fffffffffbcfbfffffffffcbffffbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbbfffffffbcfffbfffcff
    fffffffffbffbffffffffcfbffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbfccfffffbcfcffffffff
    fffffbfcfbffbffffffffcfbfffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfbcfffffffcfbfcffffff
    fffffffbffffbffffffffccbfffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfbfcfffffffcbffbfffff
    fffffffbbccfffffffffcfcffffbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfbfcffffffffbffbfffff
    ffffbbfbcfcfcfffffffcffffffbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbccfffffffcbffffffff
    ffffbbfbffcfbfffffffccffffcbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfcfffffffffccbffff
    fffffbfcffcbfffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcfffffffcfcfcfffb
    ffffffbffcfbfffffffffcfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfccfffffffffcffffff
    ffffffbffcfbfffffffffffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcffffff
    ffffffbcffcbfffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfffff
    ffffffbfffbcffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffffcffbff
    ffffffbffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffffffffffffffcbff
    ffffffffffcffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffbff
    fffffcffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbff
    fffffcffffffffffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffffff
    fffffccbffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffffcffffffcf
    ffffcccbfffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfcfffcffffffcf
    ffffcfcbfffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfffffccfffffff
    ffffcffcbffffffffffbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbcffffccffffffc
    ffffccfcbfffffffffbbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbbcfffffccfffffc
    ffffccfbbffffffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffffffffc
    ffffccfffffffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbfffffffffffffc
    ffffcfffffffffffcfcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfcfffffffbbfffc
    ffffcfcfffffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffbfbfcc
    ffffcffffffffffffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcfcffffffbfbffc
    ffffccfffffffffffcfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffbbccfc
    ffffccfffbfffffffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcfffffffbbcbfc
    fffffcfffbfffffffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfcfffffffbbbbcc
    fffffcfffbffffffffcfcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffbbbccc
    fffffcffffffffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffbbbccf
    ffffcffffffffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcffffffffbbcccf
    ffffcffffffffffffffccbfffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffbcccf
    ffffccfffbfffffffffccbbbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfbbccffffffffffbccfc
    fffffffffbffffffffcfcbbffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffbccffffffffffbccff
    fffffffffbfffffffffcccbbfffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffbbbccfffffffffbbcfff
    fffffffffbfffffffffffcbbffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffbbcfcffffffffbbcfff
    ffffffffbbfffffffffffccbfffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbbcccfffffffffbfffff
    ffffffffbbbfffffffbffccbfffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffbbcfffffffffffbbffff
    ffffffffcbbfffffffcbfccbfffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbccfffffffffffbbffff
    fffffffcbbbbffffffcbbbfbfffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffbccffbfffffffbbbffff
    fffffffcbbcbbffffffccbfffffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcfffbccffffffffffbbcffff
    ffffffccbbccbffffffccbffffffcccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffbfbbffffffffbbbfffff
    fffffffccbccbfffffffcffffffffccccfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffffffffbcffffffbbbcffffff
    fffffcfccbcccfffffffcbfffffffcfccfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffcffffffbcffffffbbcfffffff
    fffffffccbbccfffffffcbbffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffffffffffffcfffffbbbcfffffff
    ffffcfffccbcffffffffccbffffffccccfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcfffffffffffbcfffffbbccfffffff
    ffffffcfcbbcfffffffffcbfffffcffcbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffcffffffbbcffffffbcffffcfff
    fffffccfcbbcfffffffcccbfffffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffcffffffbccffffffccffffffff
    fffffccbcbcffffffffffcbfffffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffcfffffbcfffbfffccfffffcff
    fffffccbccfffffffbffccbfffffcffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfcfffffbcccfbfffcccbfffcff
    ffffffbbcfffffffffffccffffffccffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffbcfffbffffcccfffcff
    ffffffbcffffffffffffcffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffffbccffbffffcccffffff
    fffffcbcfffffffffffffffcbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffccffffffccffffffffccffffff
    fffffcbcfffcfffbfffffcfccbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffcfffffffffccfffff
    fffffcbbccbbfffffffffcffcbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcffffffffffffccfffff
    fffffccbbcfffffffffffcffcbcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfcfffffbbfffccfffff
    fffffccfbcfffffffffffffffbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbcffcffffffffffbffffff
    ffffbccfbcffffffffffffffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbcffcfffffffffffffffff
    ffffbfcfbfffffffffffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbfffffffffbfffffffffff
    ffffbfcfbfffffffffffffffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffffffffffbfffffffffff
    ffffbffbcfffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffffffffffbfbffffffffb
    fffffffbffffffffbffffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcffffffffffbbbffffffffb
    fffffffcfffffffbbfffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfffffffffbfccfcffffffb
    fffffffffffffffbfffffffbbffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffcffffffbfcccffffffff
    fffffffffffcfffbffffffffbfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbfccfffffffbbcccffffffff
    ffffffffffccfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffcbffbbfffffffbccfffffffff
    ffffffffffccfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcbffbffffffffbccffffffcff
    fffffffffcfcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffbcffffffcbff
    fffffffffbfcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffbcffffffbcff
    fffffffffbfcfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffbfff
    fffffffffffcffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffff
    fffffffffbfbffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffff
    fffffffffbbbcfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcfff
    fffffffffcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcfff
    fffffffffccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfcffffffffffbfcfff
    fffffffffccbbffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffffcfcfff
    fffffffffccbbffffffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffffcfccff
    fffffffffcbfbfffffffffffccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccffffffffffffcfffff
    ffffffffffbcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffffffffffffccffff
    ffffffffffbcbfffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccfffffffffffffccffff
    ffffffffffccbffffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccffffffffffffffcccfff
    ffffcffffffcbffffffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffffffffffffffbcffff
    fffffffffffcbfffffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfffffffffffffffbfffff
    fffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffbfcffc
    ffffffffcbcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffbfcfff
    ffffffcffbfccbfffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffffffffff
    ffffffcffbffcbffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcfffffffffffffffcffff
    ffffffcfffcfccffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccfffffffffffffffffcff
    fffffffcbccccbffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfbffffffffffffffffcff
    fffffffccbcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbffffffffffffffffcff
    fffffffccbbccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffcfff
    ffffffffccbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfff
    ffffffffccbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfff
    fffffffffccbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffff
    fffffffffffbffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffff
    fffffffffffbffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffff
    fffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffcffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffbbfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    ffffffffbbbcbffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
    fffffffccfbbbbffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
    fffffffccfbcbcffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcb
    fffffffcccccbbfffffbcfffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffbbbb
    fffffffccccccbfffffbcfffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffcbcb
    ffffffffffcccbfffffbffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbbcc
    fffffffffccccbfffffbffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffbccc
    ffffffffffccbbffffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffbccc
    ffffffffffccbcffffffbfffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffffffbccc
    ffffffffffccbfffffffbfffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffffffbbcc
    ffffffffffccbfffffffbfffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffbffffffcbcc
    fffffffffccbbfffffffcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbcc
    ffffffffcfccffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffbcc
    ffffffffffcfffffffbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffbbc
    ffffffffcccffffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffcc
    ffffffffccffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffffffffffc
    ffffffffcbffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffffffffffc
    ffffffffcbffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffff
    ffffffffcbbffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffff
    ffffffffccbffffffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccccfffffffffff
    fffffffffccbfffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbffffffffffb
    fffffffffccbbfffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccbffffffffffb
    fffffffffccbcbfffffccbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbfffffffffbc
    fffffffccccbcbbffffccbcfffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcfffffffbbc
    fffffffbbcccfcbbffffcbfffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffcbc
    fffffffbbccbfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffcbc
    fffffffcbccbffcbbffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffffcc
    ffffffffbcccbffcbfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbc
    ffffffffccbccbfcbbffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbc
    fffffffffbbccbfccbffffffffffbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffbcfffcc
    fffffffffffbcbcccbbfffffffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffbbcffffb
    fffffffffffbcbcfccbcffffffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffbccfffff
    fffffffffccbcbfffcbcffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffbbcccffff
    ffffffffffcccffcfcbcffffcfffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccfcbfff
    ffffffffffffbcfbfcbbfffffffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffcbcfffffff
    ffffffffffffbffbccbbffffcffffbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffcbcfcfffff
    ffffffffbfcfbffbfcbbffffcffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffffffffbbcfbfffff
    ffffffffffbffffbcfbcffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffbbccbfffff
    ffffffffffbbccffffbffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbbcffffffffbbcfbffffc
    fffffffbbfbcfcfccfbffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccfffffffcbfcfffffb
    fffffffbbfbffcfbfffffffccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcccffffffffbffffffbb
    ffffffffbfcffcbfffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbccccfffffffbfcffffcb
    fffffffffbffcfbbffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfccfffffffffffffffb
    fffffffffbffcfbbffffffffcfcfcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfcfffffffffffffffc
    fffffffffbcffcbbffffffffffcfffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffffffffffffffcff
    fffffffffbfffbcbfffffffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfcfffffffffffbfcff
    fffffffffbffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcfffffffffffbcffc
    fffffffffffffcccffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffbcbfff
    ffffffffcfffffccfffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccff
    ffffffffcffffffcfffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfff
    ffffffffccbfffccfffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffff
    fffffffcccbfffccffffcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffff
    fffffffcfcbffccfffffcbbccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffb
    fffffffcffcbffffffffffbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbfffffccfffb
    fffffffccfcbfffffffffbbfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbbffffffccffb
    fffffffccfbbbfffffffcfcfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbffffffffffbc
    fffffffccfbfbfffffffcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbbfffffffffbc
    fffffffcffbfbffffffcfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffbbb
    fffffffcfccbbffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffbfb
    fffffffcfbcbbfffffffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbcffffffffbfb
    fffffffccbbbbfffffffcfbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffbbc
    fffffffcccbbbfffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffbbc
    ffffffffccbbbfffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffbbb
    ffffffffcccbbffffffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffbbb
    ffffffffcccbfffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffbbb
    fffffffcfccbffffffffffccbfffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffbbc
    fffffffcfccbffffffffffccbfffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffbc
    fffffffccccbbfffffffffccbffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffcfffffffffffbc
    fffffffffccbbffffffffcfcbffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffcfffffffffffbc
    ffffffffffcfbfffffffffcccfffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffcffffffffffbbc
    fffffffffccbbfffffffffffcfffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffffcffffffffffbbc
    fffffffffccbbfffffffffffcfffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcffffffcffffffffffbfc
    ffffffffffcbbbfffffffbffffffffcfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffffffffbbc
    fffffffffcccbbfffffffcbfffffffcfcfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffbbc
    fffffffffccbbbbffffffcffffffffffcfffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffbbbc
    fffffffffccbbcbbbfffffffffffffffcfffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcffffffffffffffffffcc
    fffffffcfccbbccbbffffffffffffffccfffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbffffffffffbfffffffffffbc
    ffffffffffccbccbbbffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbffffffffffffffffffffffbc
    ffffffffcfcfffccbbbfffffbfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffffffffffffffffbc
    ffffffffffcfffccbcfffffcbbffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffcc
    fffffffcffffffccccfffffccbffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfcffffffffffffffffcfffcc
    fffffffffcffffccccffffffcbfffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffbfffffffffcfffcc
    ffffffffccfffffccbffffcccbfffffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcccffffffbcfffffffccfffcf
    ffffffffccbffffcfbffffffcbfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcffffffffbcfffffffccfffcf
    ffffffffccbcfffcfffffffccbffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffccfffffffbcccfffffccfffcf
    fffffffffbbcfffdcbfffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbcffffffffcfffcb
    fffffffffbccfffbcbfffffcffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffcfffcb
    ffffffffcbccfffbbbffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffcdfffcb
    ffffffffcbcffffbbbffffffcfccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffcffffffcbfffcc
    ffffffffcbbffffbbfffffffcffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcffffffffffbfffcc
    ffffffffccbfffbbffffffffcffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfcffffffffbfffcc
    ffffffffccffffdbffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbcffcffffffffbfffcb
    fffffffbccffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbcffcffffffffffffbb
    fffffffbfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbffffffffffffffffbf
    fffffffbfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffbf
    fffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffbf
    ffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbf
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffb
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffbbbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffb
    ffffffbbfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbb
    fffffffbbbcbffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbb
    ffffffccfbbbbffffffcfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbf
    ffffffccfbcbcffffffbfcbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffbcbb
    ffffffcccccbbfffffbcfcbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcffffffbbbbf
    ffffffccccccbfffffbcfcbcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbffffffcbcbf
    fffffffffcccbfffffbfccccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbfffffbbccc
    ffffffffccccbfffffbfcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcbfffffbcccc
    fffffffffccbbfffffffcbccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbfffffbcccf
    fffffffffccbcffffffbccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfbfffffbcccc
    fffffffffccbfffffffbccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffbbccf
    fffffffffccbfffffffbbfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffffcbccf
    ffffffffccbbfffffffcbfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffbccf
    fffffffcfccffffffffcbfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbfffffffbccf
    fffffffffcfffffffbbcbfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffbbcc
    fffffffcccffffffffbbcfcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffccf
    fffffffccffffffffffbcffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffbbfffffffcf
    fffffffcbffffffffffbcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffbffffffffcc
    fffffffcbffffffffffbccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffc
    fffffffcbbffffffffffbcccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffffb
    fffffffccbffffffffcfbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffffffb
    ffffffffccbfffffffffbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffbb
    ffffffffccbbfffffffcbcffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffffffbc
    ffffffffccbcbfffffccbcffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffffbcc
    ffffffccccbcbbffffccbffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcfffffffbbcc
    ffffffbbcccfcbbffffcbffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffbccffffffcbcc
    ffffffbbccbfccbfffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcbccffffffcbcc
    ffffffcbccbffcbbffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffccc
    fffffffbcccbffcbfffffffffcccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcc
    fffffffccbccbfcbbffffffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffbffffbcc
    ffffffffbbccbfccbffffffffccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbccc
    ffffffffffbcbcccbbffffffffccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffccbc
    ffffffffffbcbcfccbcfffffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffccbb
    ffffffffccbcbfffcbcfffffffbccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffcbff
    fffffffffcccffcfcbcffffffffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccfffcbff
    fffffffffffbcfbfcbbffffffffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcffffcbcc
    fffffffffffbffbccbbffffcfffcbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcbcffffcccf
    fffffffbfcfbffbfcbbffffcffffbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffbbcffffbfff
    fffffffffbffffbcfbcffffcffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffffbbccfffbfff
    fffffffffbbccffffbffffcfcfffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffffbbcffffbfcf
    ffffffbbfbcfcfccfbffffcfffffcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcffffcbfcfffffbf
    ffffffbbfbffcfbfffffffccffffcbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffbfffffcbbf
    fffffffbfcffcbfffffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffbffffffcbf
    ffffffffbffcfbbffffffffcfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccffffffffffffbf
    ffffffffbffcfbbffffffffcfffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffcffcf
    ffffffffbcffcbbffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfffffffffffcffb
    ffffffffbfffbcbfffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfcfffffffffbfcffb
    ffffffffbffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffbbcffcb
    ffffffffffffcccffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffbcbfffb
    fffffffcfffffccfffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffb
    fffffffcffffffcfffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffff
    fffffffccbfffccfffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffccfffff
    ffffffcccbfffccffffcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffcffffff
    ffffffcfcbffccfffffcbbccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffccfffbc
    ffffffcffcbffffffffffbccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffffffccfffbc
    ffffffccfcbfffffffffbbcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffccffbc
    ffffffccfbbbfffffffcfccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffffffffffbcf
    ffffffccfbfbfffffffccccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffffbcf
    ffffffcffbfbffffffcfcbccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffbbbf
    ffffffcfccbbffffffffccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffcfffffffbfbf
    ffffffcfbcbbfffffffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffcffffffbfbf
    ffffffccbbbbfffffffcfbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffffffffffbbcc
    ffffffcccbbbfffffffffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcfffffffbbcb
    fffffffccbbbfffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffbbbb
    fffffffcccbbffffffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffbbbc
    fffffffcccbfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbc
    ffffffcfccbffffffffffccfffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffbbcc
    ffffffcfccbffffffffffccffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcc
    ffffffccccbbfffffffffccfffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffffffbcc
    ffffffffccbbffffffffcfcfffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffffffffbcc
    fffffffffcfbfffffffffccffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffbfffcfffffffffbbcc
    ffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffcffffffffbbcc
    ffffffffccbbfffffffffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbbcccfffffffffbfcf
    fffffffffcbbbfffffffbffccbfffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbbcfffffffffffbbcc
    ffffffffcccbbfffffffcbfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbccfffffffffffbbcc
    ffffffffccbbbbffffffcbbbfbfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbccffbfffffffbbbcf
    ffffffffccbbcbbffffffccbfffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbccfbcfffffffbbccc
    ffffffcfcfffccbffffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfbbbcffffffbbbbcc
    ffffffffffffccbbbfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffbcbbcc
    fffffffcffffcccbbfffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffbccfffffffccbbcc
    ffffffffffffbccbcfffffcbbfffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffcbccf
    ffffffcfffffbcccccffffccbfffffffffccfcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffbffffcbccf
    ffffffffcfffbccccffffffcbffffffffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffbbcfffbbcfffbbccf
    fffffffccfffbcccbffffcccbfffffcfffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffbccffbbccfffbccff
    fffffffccfffcccffffffffcbfffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffbcfffbbccfffbbcfc
    fffffffccfffcccfffffffccbfffffcfffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffbcccfbccbfffbbcfc
    ffffffffbffffcdcffffffccffffffcfffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffbcfffbcbbfffcbcbc
    ffffffffbffffcbfffffffcffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffbccffbfbffffcccbc
    fffffffcbcfffcbffffffffffcbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffccffffbbfffcccbb
    fffffffcbcfffcbffffffffcfccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffcffffcbfffccccb
    fffffffcbbfffbbffffffffcffcbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcffffffffbfffccccb
    fffffffccbfffbfffffffffcffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfcfffffbbfffccccb
    fffffffccffffdfffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbcffcfffffffffffffbb
    ffffffbccffffcfffbfffffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcbcffcfffffffffffffbc
    ffffffbfcffffcfbfbfffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccbfffffffffffffdffffc
    ffffffbfcffffcfbbbfffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffffffffffffbdcffffc
    ffffffbffbfffffccfbfffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccffffffffffffbfcffffc
    fffffffffbffffcccfbffffffcffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffffffffffbbfcffffc
    fffffffffcffffcccbbfffffffffffccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffffffffffffcfcfffbf
    ffffffffffffffcccbfffffffbffffcffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccffcfffffffffcccfffbf
    ffffffffccfffffccbffffffffffffcfbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfccffffffffffcccfffcf
    ffffffffbcfffffccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbbffffffffffccfffff
    ffffffffcbfffffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcc
    fffffffffbcffffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffffffffcb
    ffffffffffbffffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffcbc
    fffffffffffffffbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbf
    fffffffffcfffffcbfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffbff
    fffffffffcfffffcbfffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffff
    fffffffffcfbffffcfffffcfcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffcf
    fffffffffcfcffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffbccffffcf
    ffffffffccfccfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfcfffffcccffffcf
    fffffffffffccfffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffccffffcf
    ffffffffffcccfffffffffffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffbffffcc
    ffffffffffccbfffffffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfffffffffbbfffff
    fffffffffcccbfffffffffffffffbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffbbfffff
    ffffffffffcbbfffffffffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffbfbffff
    fffffffffffbcfffffffffffffffbcbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffbcbffff
    ffffffcffcfbcfffffffffffffffccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffffbcbffff
    fffffffffcfbbffffffffffffffffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbfffffffffffffffbccffff
    fffffffffffbccffffffffffffffcccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffffffbccffff
    ffffffffffcbccfffffffffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffffffffbcbbfff
    ffffffffcffbfcfffffffffffffffcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcfffffffffffcccbfff
    ffffffffcffbffcffffffffffffcbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffcffffffffffbcccbcff
    ffffffffcfffcfcfffffffffffffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffccfffffffffffccfbffc
    fffffffffcbccccfffbfffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffcfbffffffffffcffbffc
    fffffffffccbcccfffbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffcfcfffc
    fffffffffccbbccfffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffbffffcccbcf
    ffffffffffccbccfffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbfffffcbccf
    ffffffffffccbccfffccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffffbccf
    fffffffffffccbcfffbcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbbffffccff
    ffffffffffffcbcfffbccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccbccfffccff
    ffffffffffffcfffffbccbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcbbccfffcfff
    ffffffffffffbfffffcccccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccbcccfffffff
    fffffffcccffcffffffffccfbcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfffffcbccfcfffffff
    fffffffffbcfffffbfffffcbfcccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbbffffffcbcffffffccff
    fffffffffbffffffbffffcfbfcbccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbfccffffcbcfcffffcfff
    fffffbfcfbfffffbbffffcfbfcbbcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbffffbcfffffbbcfbffffffff
    fffffffffffffffbcffffccbcccbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbcfbfcffffbbccbffffffff
    fffffffffccffffbffffcfcccccbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcbbcfbfcffffbbcfbffffcfbf
    ffffbbffffcffffbffffcffccccbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcccbccffffcbfcbffffbfff
    ffffbbffffcfbfffffffccfccfcbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcccccfcffffbfffffffbfff
    fffffbfffffbfffffffffffcfcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccbccccffcffffbfccffffbfbb
    ffffffbffffbbffffffffcfffcfbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbcfccfccfffffffbffffbfbb
    ffffffbffffbbffffffffcfcfcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfcfffffffffffbcffcfbf
    ffffffbcfffbbffffffffffcfffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffcffffffffbbfcffbff
    ffffffbfffffbfffffffffcfcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfcfcffffffffbbfcffbff
    ffffffbfffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcffffffffffbbcffcbff
    ffffffffffffcffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffffbcbfffbff
    fffffcffffffcfffffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccffbff
    fffffcffffffffffcfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcccffffff
    fffffccbffffffffffcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffffccfffffcf
    ffffcccbfffffffffcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffcffffffcf
    ffffcfcbffcffffffcbbccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfffffccfffbccf
    ffffcffcbffffffffffbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccbcffffccfffbccc
    ffffccfcbfffffffffbbcccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcfffffccffbcfc
    ffffccfbbbfffffffcfccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbffffffffffbcffc
    fffffcfbfbfffffffccccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffbcfcc
    fffffffbffffffffcfcbccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffbbbfcc
    ffffffccbfffffffffccccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcccfffffffbfbfcc
    ffffffbcbffffffffcfccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffbcfcffffffbfbffc
    fffffcbffffffffffcfbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffbbccfc
    fffffccffffffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffffbbcbfc
    fffffcfffffffffffffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffffffbbbbcc
    fffffcffffffffffffcfcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffbbbccc
    fffffcffffffffffffffcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffbbbccf
    fffffffffffffffffffccbbfccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffbbcccf
    fffffffffffffffffffccbfffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccf
    fffffcccbbfffffffffccbbbffcbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffcffffffffffbccfc
    ffffffccbbffffffffcfcbbfffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffcffffffffffbccfc
    fffffffcfbfffffffffcccbbfffcfbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffbbcccc
    ffffffccbbfffffffffffcbbfffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffcffffffffbbccff
    ffffffccbbfffffffffffccbfffcfcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffffffffbfcfff
    fffffffcbbbfffffffbffccbfffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffbfffffffffffffbbccff
    ffffffcccbbfffffffcbfccbfffcfccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcfffbffffffffffffffbccff
    ffffffccbbbbffffffcbbbfbfffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffcfffbffffbfffffffffbcfff
    ffffffccbbcbfffffffccbfffffffccfffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcfffbfffbcfffffffffcccff
    ffffcfccbbccfffffffccbffffffcccfffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffbfffbcfffffffffbccff
    fffffffccbccffffffffcffffffffccfffcbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcfffffffffcfffffbbfffbccff
    fffffffccbccfffbffffcbfffffffcffffbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffccffffffffcfffffbbfffbccfc
    fffffffccbbffffbbfffcbbffffffcffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcffffcffffffffffffffbbbfffccfff
    ffffffffccbffffcbbffccbffffffcfffcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbffffcfffffffffffffbbbcfffccfcf
    ffffffffcbffffccbbfffcbfffffcffffccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffccffffffffffffbbcbcfffccfff
    ffffffffcbffffbccbfcccbfffffcffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffccfffffffffffbbccccfffcfffc
    fffffffbcbffffbbcbfffcbfffffffffffbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcfffffcffffffffffbbccccfffcfcff
    fffffffbccfffffbfbffccbfffffcffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfffcfcffffffffcfbccbccfffcfccf
    fffffffbccfffcbbffffccffffffccffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffcffffffffffffbcbbfcfffcbccf
    fffffffcccfffcbcffffcffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffcffffffffffbfbffcfffcbccf
    fffffffcccfffbbffffffffcbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffccfffffffcffffbbcdfffcbbff
    fffffffcccffffbbfffffcfccbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffcbcffffccbff
    fffffffbccfffffffffffcffcbcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffccbcf
    fffffffbbcbffffffffffcffcbcbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfcfffffbbffffcfffcf
    ffffffffbccffffbfffffffffbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffcfffcf
    ffffffffbccffffbffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffcffcffffffffffbcfffcf
    ffffffffbcccfffbffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbfffffffffffffffffccfffcf
    ffffffffbcccffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffffffffcccfffcb
    fffffffbccccffffbfffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffcccffffb
    fffffffbcfcccfffbffffffcffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbffffffffffffffffcccffffb
    fffffffccccccfffbfffffffccffffbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffffffffffcccffffb
    ffffffffffcccffffffffffbbffffffbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffcfffffffffccccffffff
    ffffffffcfccffffffffffffbfffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccfffcffffffffffccccccffff
    ffffffffffcccfffffffffffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffcfffbbfffffffffccccffffff
    ffffffffffcccfffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfcfffbffffffffffcfccfcffff
    fffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffffffffccccfcffff
    fffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffbcccccffff
    ffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfccffff
    fffffffcffffcfffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfbbffff
    fffffffcffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfbfffff
    fffffffcffffffffffffcfcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffcccfffffff
    fffffffcfcffffffffffffcbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffccbfbfffff
    ffffffccfcffffffffffffccbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcfcffffffccbbbfffff
    fffffffffccfffffffffffccbbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcffffffffccbbffffff
    ffffffffcccffffffffffffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbccfffffffffbbcffffff
    ffffffffccbffffffffffffcccbbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccfffffffffbbfffffff
    fffffffcccbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffffffffffbbfffffff
    ffffffffcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccffffffffffbffffffff
    fffffffffbccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbccfffffffffffbcfffcfff
    ffffcffcfbccfffffffffffffcccccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbccffffffffffffcfffffff
    fffffffcfbbcfffffffffffffcfcccbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbcbcfffffffffffffcfffffff
    fffffffffbccffffffffffffcccccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccccfffffffffffffccbfcffc
    ffffffffcbccffffffffffffcffccbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbcccfcfffffffffffffcbbfcfff
    ffffffcffbfcffffffffffffccfcbbcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbcccccffffffffffffccbfffff
    ffffffcffbfffffffffffffbfcbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbccffcffffffffffffccbcffff
    ffffffcfffcffffffffffffbffbbbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbcfccffffffffffffcfbffcff
    fffffffcbcccfffbfffffffbffbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcbbbcfbffffffffffcffbffcff
    fffffffccbccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbbbffbffffffffffffcfffcff
    fffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffbffffffffffffccbcfff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scroller.scrollBackgroundWithSpeed(0, 40)
scroller.setBackgroundScrollOffset(-2, 0)
color.setPalette(
color.Arcade
)
Herohealth = statusbars.create(50, 4, StatusBarKind.Health)
Herohealth.value = 1000
Herohealth.setOffsetPadding(-39, 5)
Herohealth.positionDirection(CollisionDirection.Top)
game.onUpdateInterval(2500, function () {
    for (let value of sprites.allOfKind(SpriteKind.Enemy3)) {
        if (Math.percentChance(60)) {
            EnemyShot = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . . 4 . . . . . . . . 
                . . . . . . 2 5 2 . . . . . . . 
                . . . . . . 2 5 2 . . . . . . . 
                . . . . . . . 2 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value, 0, 100)
            EnemyShot.setKind(SpriteKind.enemyshotq)
        }
    }
})
game.onUpdateInterval(2000, function () {
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy1)) {
        if (Math.percentChance(50)) {
            EnemyShot = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . 7 5 5 7 . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value2, 0, 100)
            EnemyShot.setKind(SpriteKind.enemyshotq)
        }
    }
})
game.onUpdateInterval(1000, function () {
    for (let value4 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (Math.percentChance(75)) {
            EnemyShot = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 1 1 9 . . . . . . 
                . . . . . . 9 1 1 6 . . . . . . 
                . . . . . . . 6 6 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value4, 10, 100)
            EnemyShot = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 1 1 9 . . . . . . 
                . . . . . . 9 1 1 6 . . . . . . 
                . . . . . . . 6 6 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value4, -10, 100)
            EnemyShot.setKind(SpriteKind.enemyshotq)
        }
    }
})
game.onUpdateInterval(300000, function () {
    timer.after(40000, function () {
        bossman(BossMan)
    })
})
forever(function () {
    if (Planet.top > 80) {
        Planet.bottom = 0
        Planet.setVelocity(0, 25)
    }
    if (Planet2.top > 80) {
        Planet2.bottom = 0
        Planet2.setVelocity(0, 15)
    }
})
forever(function () {
    timer.after(5000, function () {
        Enemy2 = sprites.create(img`
            ....8..........8....
            ...98..........89...
            ...98...9..9...89...
            ...98...8..8...89...
            ..998...8448...899..
            ..968..898898..869..
            .9968..89cc98..8699.
            .98666.898898.66689.
            .988888948849888889.
            .44444994cc49944444.
            .94888989cc98988649.
            .9488998fccf8998649.
            .4468988ffff8898644.
            .6668...8888...8666.
            .688....9889....886.
            .68.....9889.....86.
            .68.....9889.....86.
            .22......44......22.
            .22..............22.
            ....................
            `, SpriteKind.Enemy)
        Enemy2.setVelocity(0, 40)
        Enemy2.setPosition(randint(0, scene.screenWidth()), 0)
    })
    pause(5000)
})
// Powerups
forever(function () {
    timer.after(5000, function () {
        if (Math.percentChance(20)) {
            MachinePowerUp = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 4 4 4 4 4 . . 
                . . . . . . 4 5 5 5 5 5 5 5 4 . 
                . . . . . . 4 5 4 5 5 5 4 5 4 . 
                . . . . . . 4 5 4 4 5 4 4 5 4 . 
                . . . . . . 4 5 4 5 4 5 4 5 4 . 
                . . . . . . 4 5 4 5 5 5 4 5 4 . 
                . . . . . . 4 5 4 5 5 5 4 5 4 . 
                . . . . . . 4 5 5 5 5 5 5 5 4 . 
                . . . . . . . 4 4 4 4 4 4 4 . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Food)
            MachinePowerUp.setPosition(randint(0, scene.screenWidth()), 0)
            MachinePowerUp.setVelocity(50, 50)
            MachinePowerUp.setBounceOnWall(true)
        }
        if (Math.percentChance(20)) {
            HealthUp = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 2 2 2 2 2 . . 
                . . . . . . 2 3 3 3 3 3 3 3 2 . 
                . . . . . . 2 3 2 2 3 2 2 3 2 . 
                . . . . . . 2 3 2 2 2 2 2 3 2 . 
                . . . . . . 2 3 2 2 2 2 2 3 2 . 
                . . . . . . 2 3 3 2 2 2 3 3 2 . 
                . . . . . . 2 3 3 3 2 3 3 3 2 . 
                . . . . . . 2 3 3 3 3 3 3 3 2 . 
                . . . . . . . 2 2 2 2 2 2 2 . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.HeartHealth)
            HealthUp.setPosition(randint(0, scene.screenWidth()), 0)
            HealthUp.setVelocity(50, 50)
            HealthUp.setBounceOnWall(true)
        }
    })
    pause(5000)
})
forever(function () {
    timer.after(6000, function () {
        Enemy12 = sprites.create(img`
            ........55........
            .......5665.......
            ......566665......
            .......5665.......
            ........77........
            ........77........
            77......77......77
            557.....66.....755
            557....7887....755
            5575...6886...5755
            55765.888888.56755
            558666685586666855
            888866585585668888
            77....585585....77
            ......775577......
            .......8888.......
            .......8778.......
            ........55........
            `, SpriteKind.Enemy1)
        Enemy12.setVelocity(0, 50)
        Enemy12.setPosition(randint(0, scene.screenWidth()), 0)
        animation.runMovementAnimation(
        Enemy12,
        animation.animationPresets(animation.bobbing),
        1000,
        false
        )
    })
    pause(6000)
})
// Player Hit
forever(function () {
    timer.after(1000, function () {
        Enemy33 = sprites.create(img`
            . . . . 2 . . . . . . 2 . . . . 
            . . . 2 2 . . . . . . 2 2 . . . 
            . 2 2 2 2 . . . . . . 2 2 2 2 . 
            4 5 2 2 . . . . . . . . 2 2 5 4 
            2 4 2 . . . . . . . . . . 2 4 2 
            2 . 4 . 2 . . a a . . 2 . 4 . 2 
            . . 4 2 2 . 2 a a 2 . 2 2 4 . . 
            . . 2 2 2 . 2 a a 2 . 2 2 2 . . 
            . 2 2 2 . . 2 4 4 2 . . 2 2 2 . 
            4 4 2 2 4 4 2 2 2 2 4 4 2 2 4 4 
            2 4 4 4 . a a 4 4 a a . 4 4 4 2 
            2 2 2 4 . a 2 4 4 2 a . 4 2 2 2 
            . 2 2 . . 4 a 4 4 a 4 . . 2 2 . 
            . . . . . . a 5 5 a . . . . . . 
            . . . . . . a 5 5 a . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            `, SpriteKind.Enemy3)
        Enemy33.setVelocity(randint(-20, 20), 60)
        Enemy33.follow(Hero, 80)
        Enemy33.setPosition(randint(0, scene.screenWidth()), 0)
    })
    pause(randint(5000, 6000))
})
// Boss
game.onUpdateInterval(randint(3000, 6000), function () {
    for (let value5 of sprites.allOfKind(SpriteKind.Boss)) {
        if (true) {
            BossShot3Lazer = sprites.create(img`
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                99999999
                `, SpriteKind.enemyshotq)
            characterAnimations.loopFrames(
            BossShot3Lazer,
            [img`
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                `,img`
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                `,img`
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                69111196
                `,img`
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                .911119.
                `,img`
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                ..1111..
                `],
            100,
            characterAnimations.rule(Predicate.NotMoving)
            )
            BossShot3Lazer.lifespan = 1000
            BossShot3Lazer.setKind(SpriteKind.enemyshotq)
            BossShot3Lazer.x = value5.x
            BossShot3Lazer.top = value5.bottom
        }
    }
})
game.onUpdateInterval(8000, function () {
    for (let value6 of sprites.allOfKind(SpriteKind.Boss)) {
        if (true) {
            for (let index = 0; index < 5; index++) {
                BossShot2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 . . . . . . . . . 
                    . . . . . 4 . . . . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . 2 . 4 . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 4 4 . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 4 4 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, value6, randint(-20, 20), randint(25, 75))
                characterAnimations.loopFrames(
                BossShot2,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 2 . . . . . . . . 
                    . . . . . . 4 . . . . . . . . . 
                    . . . . . . . . 2 . . . . . . . 
                    . . . . . . 2 . 4 . . . . . . . 
                    . . . . . . . . 4 4 . . . . . . 
                    . . . . . . . 4 5 4 4 . . . . . 
                    . . . . . . . 4 5 5 4 . . . . . 
                    . . . . . . . 4 4 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 . 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . 2 . . . . . . . . . 
                    . . . . . . . . 2 . . . . . . . 
                    . . . . . . . . 4 . . . . . . . 
                    . . . . . . . . 4 4 . . . . . . 
                    . . . . . . . 4 4 4 5 . . . . . 
                    . . . . . . . . 4 4 5 . . . . . 
                    . . . . . . . . 5 5 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . 2 . . . . . . 
                    . . . . . . . . 2 . . . . . . . 
                    . . . . . . 5 . 4 . . . . . . . 
                    . . . . . . . . 4 4 . . . . . . 
                    . . . . . . . 4 4 4 4 . . . . . 
                    . . . . . . . 5 4 4 4 . . . . . 
                    . . . . . . . 5 5 4 . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                75,
                characterAnimations.rule(Predicate.MovingDown)
                )
                BossShot2.setKind(SpriteKind.enemyshotq)
            }
        }
    }
})
game.onUpdateInterval(10000, function () {
    for (let value3 of sprites.allOfKind(SpriteKind.Boss)) {
        if (true) {
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value3, 10, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value3, -10, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value3, 20, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value3, -20, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value3, 30, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value3, -30, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value3, 40, 50)
            BossShot2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . 9 5 1 9 . . . . . . 
                . . . . . . 9 1 5 9 . . . . . . 
                . . . . . . . 9 9 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, value3, -40, 50)
            BossShot2.setKind(SpriteKind.enemyshotq)
        }
    }
})
