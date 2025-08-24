namespace SpriteKind {
    export const goal = SpriteKind.create()
    export const trap = SpriteKind.create()
    export const camerascroll = SpriteKind.create()
    export const cameraend = SpriteKind.create()
    export const water = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (character.vy == 0) {
        character.vy = -150
        music.pewPew.play()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.goal, function (sprite, otherSprite) {
    for (let value82 of sprites.allOfKind(SpriteKind.Player)) {
        value82.destroy()
    }
    current_level += 1
    for (let value822 of sprites.allOfKind(SpriteKind.Player)) {
        value822.destroy()
    }
    if (current_level == levels.length) {
        for (let value83 of sprites.allOfKind(SpriteKind.Player)) {
            value83.destroy()
        }
        game.over(true, effects.dissolve)
        for (let value8222 of sprites.allOfKind(SpriteKind.Player)) {
            value8222.destroy()
        }
    } else {
        nextlevel()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(5000)
    bonus.destroy()
    coined = 1
})
function nextlevel () {
    info.changeScoreBy(1000)
    for (let value832 of sprites.allOfKind(SpriteKind.Player)) {
        value832.destroy()
    }
    start()
}
function start () {
    right = 1
    coined = 0
    scene.setTileMap(levels[current_level])
    scene.setBackgroundColor(12)
    scene.setTile(7, img`
        8 8 8 8 8 8 8 9 f 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 9 f 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 9 f 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 9 f 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 9 f 8 8 8 8 8 8 8 
        f f f f f f f f f f f f f f f f 
        8 8 8 9 f 8 8 8 8 8 8 9 f 8 8 8 
        8 8 8 9 f 8 8 8 8 8 8 9 f 8 8 8 
        8 8 8 9 f 8 8 8 8 8 8 9 f 8 8 8 
        8 8 8 9 f 8 8 8 8 8 8 9 f 8 8 8 
        8 8 8 9 f 8 8 8 8 8 8 9 f 8 8 8 
        f f f f f f f f f f f f f f f f 
        8 8 8 8 8 8 8 9 f 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 9 f 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 9 f 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 9 f 8 8 8 8 8 8 8 
        `, true)
    scene.setTile(10, img`
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
        d d d d d d d d d d d d d d d d 
        . . d 9 9 9 . . . . d 9 9 9 . . 
        . . 1 9 9 9 . . . . 9 9 9 9 . . 
        . . 1 9 1 9 . . . . 1 9 9 9 . . 
        . . 1 1 9 9 . . . . 1 1 9 9 . . 
        . . . 1 9 . . . . . . 1 9 . . . 
        . . . 1 9 . . . . . . 1 9 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(4, img`
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        c c c c c c c c c c c c c c c c 
        b b b 9 b 6 6 6 6 6 c 6 c c c 6 
        b b b 9 b 6 6 6 6 6 c 6 c c 6 c 
        b b b 9 b 6 6 6 6 6 c 6 c c c 6 
        b b b 9 b 6 6 6 6 6 c 6 c c 6 c 
        b b b 9 b 6 6 6 6 6 c 6 c c c 6 
        b b b 9 b 6 6 6 6 6 c 6 c c 6 c 
        b b b 9 b 6 6 6 6 6 c 6 c c c 6 
        `, true)
    scene.setTile(8, img`
        b b b 9 b 6 6 6 6 6 c 6 c c 6 c 
        b b b 9 b 6 6 6 6 6 c 6 c c c 6 
        b b b 9 b 6 6 6 6 6 c 6 c c 6 c 
        b b b 9 b 6 6 6 6 6 c 6 c c c 6 
        b b b 9 b 6 6 6 6 6 c 6 c c 6 c 
        b b b 9 b 6 6 6 6 6 c 6 c c c 6 
        b b b 9 b 6 6 6 6 6 c 6 c c 6 c 
        c c c c c c c c c c c c c c c c 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        `, true)
    scene.setTile(6, img`
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        . b b b 9 b 6 6 6 c 6 c c c 6 . 
        . b b b 9 b 6 6 6 c 6 c c 6 c . 
        `, true)
    scene.setTile(2, img`
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
        `, false)
    scene.setTile(3, img`
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
        `, false)
    scene.setTile(5, img`
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
        `, false)
    scene.setTile(15, img`
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
        `, false)
    scene.setTile(9, img`
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
        `, false)
    scene.setTile(14, img`
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
        `, false)
    scene.setTile(13, img`
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
        `, false)
    scene.setTile(11, img`
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
        `, false)
    for (let value8 of sprites.allOfKind(SpriteKind.trap)) {
        value8.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Player)) {
        value.destroy()
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        value2.destroy()
    }
    for (let value3 of sprites.allOfKind(SpriteKind.goal)) {
        value3.destroy()
    }
    for (let value4 of sprites.allOfKind(SpriteKind.Food)) {
        value4.destroy()
    }
    for (let value24 of scene.getTilesByType(15)) {
        spike_up = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 9 . . . . 9 . . 9 . . . 9 . . 
            . 9 . . . . 9 . . 9 . . . 9 . . 
            . 9 . . . . 9 . . 9 9 . . 9 . . 
            . 9 . . . . 9 . . 9 9 . 1 9 . . 
            . 9 9 . . . 9 . . 9 9 . 1 9 . . 
            . 6 9 . . . 9 9 . 1 6 . 1 6 9 . 
            9 6 6 . . 9 1 9 1 6 9 . 1 6 9 . 
            1 6 6 . . 6 8 9 1 6 6 1 6 6 9 . 
            6 6 6 . 6 6 8 9 6 6 6 9 6 6 9 . 
            6 8 6 . 6 6 8 9 6 6 8 8 8 6 9 . 
            8 8 9 9 9 8 8 8 6 8 8 8 8 6 9 . 
            `, SpriteKind.Enemy)
        value24.place(spike_up)
    }
    for (let value5 of scene.getTilesByType(2)) {
        spike_right = sprites.create(img`
            . . . . . . . . . . . 9 1 6 6 8 
            . . . . . 9 9 9 9 9 6 6 6 6 8 8 
            . . . . . . . . . 9 9 6 6 6 6 9 
            . . . . . . . . . . . . . . . 9 
            . . . . . . . . . . . . . 6 6 9 
            . . . . . . . . . . . 9 6 6 6 8 
            . . . . . 9 9 9 9 9 9 1 8 8 8 8 
            . . . . . . . . . . 9 9 9 9 9 8 
            . . . . . . . . . . . 1 1 6 6 6 
            . . . . . 9 9 9 9 9 1 6 6 6 6 8 
            . . . . . . . 9 9 9 6 9 6 6 8 8 
            . . . . . . . . . . . . 1 9 8 8 
            . . . . . . . . 1 1 1 1 6 6 8 8 
            . . . . . 9 9 9 9 9 6 6 6 6 6 6 
            . . . . . . . . . . 9 9 9 9 9 9 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        value5.place(spike_right)
    }
    for (let value22 of scene.getTilesByType(3)) {
        spike_left = sprites.create(img`
            8 6 6 1 9 . . . . . . . . . . . 
            8 8 6 6 6 6 9 9 9 9 9 . . . . . 
            9 6 6 6 6 9 9 . . . . . . . . . 
            9 . . . . . . . . . . . . . . . 
            9 6 6 . . . . . . . . . . . . . 
            8 6 6 6 9 . . . . . . . . . . . 
            8 8 8 8 1 9 9 9 9 9 9 . . . . . 
            8 9 9 9 9 9 . . . . . . . . . . 
            6 6 6 1 1 . . . . . . . . . . . 
            8 6 6 6 6 1 9 9 9 9 9 . . . . . 
            8 8 6 6 9 6 9 9 9 . . . . . . . 
            8 8 9 1 . . . . . . . . . . . . 
            8 8 6 6 1 1 1 1 . . . . . . . . 
            6 6 6 6 6 6 9 9 9 9 9 . . . . . 
            9 9 9 9 9 9 . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        value22.place(spike_left)
    }
    for (let value23 of scene.getTilesByType(5)) {
        spike_down = sprites.create(img`
            8 8 9 9 9 8 8 8 6 8 8 8 8 6 9 . 
            6 8 6 . 6 6 8 9 6 6 8 8 8 6 9 . 
            6 6 6 . 6 6 8 9 6 6 6 9 6 6 9 . 
            1 6 6 . . 6 8 9 1 6 6 1 6 6 9 . 
            9 6 6 . . 9 1 9 1 6 9 . 1 6 9 . 
            . 6 9 . . . 9 9 . 1 6 . 1 6 9 . 
            . 9 9 . . . 9 . . 9 9 . 1 9 . . 
            . 9 . . . . 9 . . 9 9 . 1 9 . . 
            . 9 . . . . 9 . . 9 9 . . 9 . . 
            . 9 . . . . 9 . . 9 . . . 9 . . 
            . 9 . . . . 9 . . 9 . . . 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        value23.place(spike_down)
    }
    for (let value232 of scene.getTilesByType(11)) {
        spike_ball = sprites.create(img`
            . . . . . . 9 . 9 . 9 . . . . . 
            . . 9 6 . . . 9 6 9 . . . 6 9 . 
            . . 6 6 9 . . . 9 . . . 9 6 6 . 
            . . . 9 9 . . . 9 . . . 9 9 . . 
            . . . . . 6 . . 9 . . 6 . . . . 
            . 9 . . . . 9 . 9 . 9 . . . . 9 
            . . 9 . . . . 9 6 9 . . . . 9 . 
            . 9 6 9 9 9 9 6 9 6 9 9 9 9 6 9 
            . . 9 . . . . 9 6 9 . . . . 9 . 
            . 9 . . . . 9 . 9 . 9 . . . . 9 
            . . . . . 6 . . 9 . . 6 . . . . 
            . . . 9 9 . . . 9 . . . 9 9 . . 
            . . 6 6 9 . . . 9 . . . 9 6 6 . 
            . . 9 6 . . . 9 6 9 . . . 6 9 . 
            . . . . . . 9 . 9 . 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        value232.place(spike_ball)
        animation.runMovementAnimation(
        spike_ball,
        "c 0 -90 0 90 0 0",
        2000,
        true
        )
    }
    for (let value25 of scene.getTilesByType(9)) {
        if (current_level == 6) {
            light2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . 9 . d . 9 . 1 . 9 . 1 . 9 . 9 
                1 . d . 1 . 9 . 9 . 9 . 9 . 9 . 
                . 1 . 1 . 9 . 1 . 1 . 9 . 9 . 9 
                d . d . d . d . d . d . d . d . 
                d d d d d d d d d d d d d d d d 
                d d d d d d d d d d d d d d d d 
                d d d d d d d d d d d d d d d d 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                `, SpriteKind.goal)
        } else {
            light2 = sprites.create(img`
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
                d d d d d d d d d d d d d d d d 
                d d d d d d d d d d d d d d d d 
                d d d d d d d d d d d d d d d d 
                d . d . d . d . d . d . d . d . 
                . d . 1 . d . d . d . 1 . 1 . 9 
                1 . d . 1 . 1 . d . 1 . 1 . 9 . 
                . 1 . 1 . 9 . 1 . 1 . 9 . 9 . 9 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.goal)
        }
        value25.place(light2)
    }
    for (let value26 of scene.getTilesByType(13)) {
        bonus = sprites.create(img`
            . . b b b b . . 
            . b 9 9 9 9 b . 
            b 9 1 1 1 1 9 b 
            b 9 1 9 9 9 9 b 
            b 9 1 9 9 9 9 b 
            b 9 9 9 9 9 9 b 
            . b 9 9 9 9 b . 
            . . b b b b . . 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        bonus,
        [img`
            . . b b b b . . 
            . b 9 9 9 9 b . 
            b 9 1 1 1 1 9 b 
            b 9 1 9 9 9 9 b 
            b 9 1 9 9 9 9 b 
            b 9 9 9 9 9 9 b 
            . b 9 9 9 9 b . 
            . . b b b b . . 
            `,img`
            . . . b b . . . 
            . . b 9 9 b . . 
            . b 9 1 1 9 b . 
            . b 9 1 9 9 b . 
            . b 9 1 9 9 b . 
            . b 9 9 9 9 b . 
            . . b 9 9 b . . 
            . . . b b . . . 
            `,img`
            . . . b b . . . 
            . . . b b . . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . . b b . . . 
            . . . b b . . . 
            `,img`
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            `,img`
            . . . b b . . . 
            . . . b b . . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . . b b . . . 
            . . . b b . . . 
            `,img`
            . . . b b . . . 
            . . b 9 9 b . . 
            . b 9 1 1 9 b . 
            . b 9 9 1 9 b . 
            . b 9 9 1 9 b . 
            . b 9 9 1 9 b . 
            . . b 9 9 b . . 
            . . . b b . . . 
            `,img`
            . . b b b b . . 
            . b 9 9 9 9 b . 
            b 9 1 1 1 1 9 b 
            b 9 9 9 9 1 9 b 
            b 9 9 9 9 1 9 b 
            b 9 9 9 9 9 9 b 
            . b 9 9 9 9 b . 
            . . b b b b . . 
            `,img`
            . . . b b . . . 
            . . b 9 9 b . . 
            . b 9 1 1 9 b . 
            . b 9 9 1 9 b . 
            . b 9 9 1 9 b . 
            . b 9 9 1 9 b . 
            . . b 9 9 b . . 
            . . . b b . . . 
            `,img`
            . . . b b . . . 
            . . . b b . . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . . b b . . . 
            . . . b b . . . 
            `,img`
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            . . . b b . . . 
            `,img`
            . . . b b . . . 
            . . . b b . . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . b 9 9 b . . 
            . . . b b . . . 
            . . . b b . . . 
            `,img`
            . . . b b . . . 
            . . b 9 9 b . . 
            . b 9 1 1 9 b . 
            . b 9 1 9 9 b . 
            . b 9 1 9 9 b . 
            . b 9 9 9 9 b . 
            . . b 9 9 b . . 
            . . . b b . . . 
            `],
        200,
        true
        )
        value26.place(bonus)
        animation.runMovementAnimation(
        bonus,
        animation.animationPresets(animation.bobbing),
        4000,
        true
        )
    }
    character = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . b b b b b b b b b . . . . . 
        . . b 7 b 7 7 7 7 7 b . . . . . 
        . . b b b b b b b b b . . . . . 
        . . . b b b 7 b 7 b . . . . . . 
        . . . b b b b b b b . . . . . . 
        . . b b 7 b 7 7 7 b . . . . . . 
        . b 6 b 6 b 7 7 7 b . . . . . . 
        b 6 6 b 6 b b b b b b b . . . . 
        b 6 6 b 6 b 7 7 7 7 7 7 b . . . 
        b 6 6 6 b b b b b b b b . . . . 
        . b 6 6 6 b . b . . b . . . . . 
        . . b b b . . b . . b . . . . . 
        . . . . . . . b . . b . . . . . 
        `, SpriteKind.Player)
    controller.moveSprite(character, 100, 0)
    scene.placeOnRandomTile(character, 14)
    if (current_level == 8 || current_level == 17) {
        camerascroll2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.camerascroll)
        camerascroll2.setFlag(SpriteFlag.Ghost, true)
        camerascroll2.setPosition(80, character.y)
        scene.cameraFollowSprite(camerascroll2)
        camerascroll2.vy = -20
    } else {
        for (let value6 of sprites.allOfKind(SpriteKind.camerascroll)) {
            value6.destroy()
        }
    }
    if (current_level == 18) {
        rising_water = sprites.create(img`
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
            6669996669999666666999666999966666699966699996666669996669999666666999666999966666699966699996666669996669999666666999666999966666699966699996666669996669999666
            9966699999966669996669999996666999666999999666699966699999966669996669999996666999666999999666699966699999966669996669999996666999666999999666699966699999966669
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            b.99999.b.b999b.b.99999.b.b999b.b.99999.b.b999b.b.99999.b.b999b.b.99999.b.b999b.b.99999.b.b999b.b.99999.b.b999b.b.99999.b.b999b.b.99999.b.b999b.b.99999.b.b999b.
            9999.b.666.b.b.b9999.b.666.b.b.b9999.b.666.b.9.b9999.b.666.b.9.b9999.b.666.b.b9b9999.b.696.b.b.b9999.b.666.b.b.b9999.b.666.b.b.b9999.b.666.b.b.b9999.b.666.b.b.b
            b.b.9.b.b.b99.9.b.b.b.b.b.b.b9b9b.b9b.b.b.b.9.9.b.b.b.9.b9b.9.b9b.b.b.b.b.b.b.9.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.
            .b.b.b9b9b.b.b.b.b.b.b.b.b.b.b.9.b9b.9.b.b.b.b.b9b.b.b9b.9.b.b.b.b.b.b.b.9.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b
            b.b.b.b.b.9.b.b.b.b.b.b.b.b.b.b9b.b.b.b.b.b.b.b.b.b.b.b.9.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.
            .b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b
            b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.
            .b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b
            b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.
            .b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b
            b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.
            `, SpriteKind.water)
    }
}
function gameover () {
    scene.cameraShake(4, 100)
    for (let value9 of sprites.allOfKind(SpriteKind.Player)) {
        value9.destroy()
    }
    music.powerDown.play()
    scene.setBackgroundColor(9)
    character.destroy()
    pause(500)
    if (coined == 1) {
        info.changeScoreBy(-5000)
    }
    start()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    gameover()
})
let rising_water: Sprite = null
let camerascroll2: Sprite = null
let light2: Sprite = null
let spike_ball: Sprite = null
let spike_down: Sprite = null
let spike_left: Sprite = null
let spike_right: Sprite = null
let spike_up: Sprite = null
let right = 0
let coined = 0
let bonus: Sprite = null
let character: Sprite = null
let levels: Image[] = []
let current_level = 0
info.setScore(0)
game.setDialogCursor(img`
    . . 8 6 6 b b . . 
    . 8 b b 6 6 b b . 
    8 b 6 9 9 9 6 b b 
    8 b 9 6 6 6 9 b b 
    8 6 9 6 6 6 9 b b 
    8 6 9 9 9 9 9 b b 
    8 6 9 6 6 6 9 b b 
    . 8 9 6 6 6 9 b . 
    . . 8 6 6 b b . . 
    `)
current_level = 0
levels = [
img`
    7 9 9 2 7 7 7 7 7 6 
    7 . . . . . . . . 6 
    7 . . . . . . . . 6 
    7 7 7 7 3 . . . . 4 
    8 . . . . 2 7 7 . 7 
    6 . . . . . 5 7 . 7 
    6 . e . . . . . . 7 
    7 7 7 7 7 7 7 7 7 7 
    `,
img`
    7 9 9 7 7 7 7 7 7 6 
    7 . . 5 5 5 5 5 5 6 
    7 . . . . . . . . 6 
    7 . . . . . . . e 6 
    7 7 . . . . 7 a a 4 
    8 7 . d . . 7 . . 8 
    6 7 f f f f 7 . . 6 
    7 7 7 7 7 7 7 . . 6 
    `,
img`
    7 9 9 7 7 7 7 7 7 7 
    7 . . . . . . . . 7 
    7 . . . . 7 7 . . 2 
    7 7 7 7 . 5 5 . . 2 
    7 6 7 3 d . . . . 2 
    7 6 8 7 f f f . . 7 
    7 4 6 7 7 7 7 . e 7 
    7 7 6 7 7 7 7 a a 7 
    `,
img`
    7 7 7 7 7 7 7 9 9 7 
    7 . . . 2 7 3 . . 7 
    7 . . . 2 7 3 . . 7 
    7 e . . . . . . . 2 
    7 a 7 . . . . . . 2 
    7 . 7 . . . 7 . . 7 
    7 . 7 f f f f f f 7 
    7 . 7 7 7 7 7 7 7 7 
    `,
img`
    6 7 7 7 9 9 7 7 7 7 
    4 7 5 5 . . 5 5 7 7 
    7 3 . . . . . . 2 7 
    7 . . . . . . . 2 7 
    7 . 2 7 7 7 7 7 7 7 
    7 . . 5 5 5 5 5 5 7 
    7 3 . . . . e . . 7 
    7 7 7 7 7 7 a a 7 7 
    `,
img`
    7 9 9 7 7 7 7 7 7 6 
    7 . . . . . . . . 6 
    3 . . . . . . . . 6 
    3 . . 7 7 7 7 3 . 4 
    3 . . . . 5 5 . . 7 
    7 . . . . . . . . 2 
    8 e . . f . . . . 2 
    6 a a 7 7 7 7 7 7 7 
    `,
img`
    7 7 7 7 7 7 7 7 7 7 
    7 5 5 5 5 5 5 5 5 5 
    3 . . . . . . . . . 
    3 . . . . . . . . e 
    3 . . 7 7 3 . . 7 7 
    3 . . . . . . . 2 7 
    3 . . f f f f f 7 7 
    7 9 9 7 7 7 7 7 7 7 
    `,
img`
    7 7 7 5 5 7 9 9 7 7 
    7 3 . . . . . . . 7 
    7 3 . . . . . . . 7 
    7 3 . . . . . f f 7 
    7 7 7 3 . 7 7 7 7 7 
    7 5 5 . . 5 5 5 5 7 
    7 . . . . . e . . 7 
    7 7 7 7 7 7 a a 7 7 
    `,
img`
    7799777777
    7.......76
    7.......76
    7.......76
    7.......76
    3.......76
    3...777774
    3...555578
    7.......76
    6.......76
    677.....76
    675.....77
    4........7
    7ffff....7
    7777777..7
    7555777..7
    7...277..7
    7....55..7
    7........2
    7........2
    7..7777777
    7........7
    3........7
    3........7
    3...77...7
    3...55...7
    7........7
    77......77
    75......57
    7........6
    7.f77f...6
    7777777..6
    755555...6
    7........4
    7fff....f7
    8777..7777
    6777..5557
    6777.....7
    7557.....7
    7d.7.....7
    7..7.....7
    7..7777..7
    7..7555..7
    7........2
    7f..e....2
    7777aa7777
    `,
img`
    7 7 7 7 7 9 9 7 7 7 
    7 . . . . . . . . 7 
    7 . . . . . . . . 7 
    7 . . . . b . . . 7 
    7 . . . . . . . 7 7 
    7 . . . . . . 7 7 7 
    7 e . 7 7 7 7 7 7 7 
    7 a a 7 7 7 7 7 7 7 
    `,
img`
    7 7 7 7 7 7 7 9 9 7 
    7 . . . . . . . . 7 
    7 . . 7 . . . . . 7 
    7 . 2 7 7 b . b . 7 
    7 . 2 7 7 . . . . 2 
    7 . 2 7 7 . . . . 2 
    7 e 2 7 7 f 7 f f 7 
    7 a 7 7 7 7 7 7 7 7 
    `,
img`
    7 7 9 9 7 7 7 7 7 7 
    3 . . . . . . . 7 6 
    3 . . 7 7 . . . 7 6 
    3 . d 7 3 . . . 7 6 
    7 f f 7 7 . b 7 7 8 
    7 7 7 7 5 . . 5 7 7 
    7 . . . . e . . . 7 
    7 7 7 7 a a 7 7 7 7 
    `,
img`
    7 9 9 7 7 7 7 7 7 7 
    7 . . . . . . . . 2 
    7 . . . . . . . . 2 
    7 f . . . . . . . 7 
    7 7 7 7 b 7 3 . . 7 
    7 5 5 5 . 7 3 . . 2 
    7 e . . . . . . . 2 
    7 a a 7 7 7 7 7 7 7 
    `,
img`
    7 7 7 7 7 9 9 7 7 7 
    7 . . . . . . . . 7 
    7 . . . . . . . . 7 
    7 . . . . . 7 . . 7 
    7 7 7 3 . b 7 7 7 7 
    7 5 5 . . . 5 5 5 7 
    7 e . . . . . . . 7 
    7 a a 7 7 7 7 7 7 7 
    `,
img`
    7 7 7 7 7 7 7 9 9 7 
    7 . . . . . 7 . . 7 
    7 e . . . . 7 . b 7 
    7 a 7 3 . 2 7 . . 7 
    7 . 7 3 . 2 7 . . 7 
    7 . 7 7 . 7 . b . 7 
    7 . 7 . . . . . . 7 
    7 . 7 7 7 7 7 7 7 7 
    `,
img`
    7 7 7 7 7 9 9 7 8 6 
    7 5 5 5 7 . . 7 6 6 
    8 . . . 5 . . 7 6 6 
    6 . . . . . . . 7 4 
    7 . . 7 7 7 b 7 7 7 
    3 . . . . . . . . 7 
    3 . . . . e . . . 7 
    7 7 7 7 7 a a 7 7 7 
    `,
img`
    7 7 7 7 7 7 7 9 9 7 
    7 7 5 5 5 5 . . . 7 
    7 3 . . . . b . 7 7 
    7 7 f f f . . . . 7 
    7 7 7 7 7 7 7 b . 7 
    7 5 5 5 5 5 5 . . 7 
    7 e . . . . . . . 7 
    7 a a 7 7 7 7 7 7 7 
    `,
img`
    7799777777
    7........7
    7........2
    7........2
    777773...7
    777773...7
    777777...2
    777777...2
    777773.b.7
    777773...7
    777777...2
    777777...2
    755573...7
    7...73...7
    7........2
    7........2
    7..7777777
    7........7
    7........7
    7.b......7
    7........7
    7..777...7
    7........7
    7......b.7
    7........7
    7........2
    7....77..2
    7........7
    7........7
    7777.....7
    7........7
    7....b...7
    7........7
    7...7.7..7
    7........7
    77.......2
    777......2
    7........2
    7.......f7
    7..7777777
    7...277777
    7......557
    7........7
    7.......d7
    7........7
    7..7fffff7
    7.77777777
    7.....b..7
    7........7
    7b.......7
    7.77777..7
    7.a7aa...7
    7..a..b..7
    7........7
    7........7
    7........7
    7...77..77
    7...fffff7
    7..2777777
    7..27....7
    3........7
    3........7
    777......7
    7...b..b.7
    7....77..7
    7........7
    7........7
    7..7777777
    3........7
    7f.......7
    777773...7
    777777...7
    755555...7
    7........7
    7...e...f7
    7777aa7777
    `
]
start()
game.onUpdate(function () {
    character.setFlag(SpriteFlag.ShowPhysics, false)
    if (character.vy > 0) {
        if (right == 1) {
            character.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . b b b b b b b b b . . . . . 
                . . b 7 b 7 7 7 7 7 b . . . . . 
                . . b b b b b b b b b . . . . . 
                . . . b b b b b b b . . . . . . 
                . . 6 b b b 7 b 7 b . . . . . . 
                . b b 6 b b b b b b 6 . . . . . 
                b 6 6 b 6 b 7 7 7 b . . . . . . 
                b 6 6 b 7 b b b b b b b . . . . 
                b 6 6 b 7 b 7 7 7 7 7 7 b . . . 
                b 6 6 6 b b b b b b b b . . . . 
                . b b b . . . b . . b . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            animation.runImageAnimation(
            character,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . b b b b b b b b b . . . . . 
                . . b 7 b 7 7 7 7 7 b . . . . . 
                . . b b b b b b b b b . . . . . 
                . . . b b b b b b b . . . . . . 
                b b 6 b b b 7 b 7 b . . . . . . 
                b 6 b 6 b b b b b b 6 . . . . . 
                b 6 6 b 6 b 7 7 7 b . . . . . . 
                b 6 6 b 7 b b b b b b b . . . . 
                b 6 6 b 7 b 7 7 7 7 7 7 b . . . 
                b 6 6 6 b b b b b b b b . . . . 
                . b b b . . . b . . b . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . b b b b b b b b b . . . . . 
                . . b 7 b 7 7 7 7 7 b . . . . . 
                . . b b b b b b b b b . . . . . 
                . . . b b b b b b b . . . . . . 
                . . 6 b b b 7 b 7 b . . . . . . 
                . b b 6 b b b b b b 6 . . . . . 
                b 6 6 b 6 b 7 7 7 b . . . . . . 
                b 6 6 b 7 b b b b b b b . . . . 
                b 6 6 b 7 b 7 7 7 7 7 7 b . . . 
                b 6 6 6 b b b b b b b b . . . . 
                b 6 6 6 6 b . b . . b . . . . . 
                . b b b b . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
        } else {
            character.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b b b b b b b b . . 
                . . . . . b 7 7 7 7 7 b 7 b . . 
                . . . . . b b b b b b b b b . . 
                . . . . . . b b b b b b b . . . 
                . . . . . . b 7 b 7 b b b 6 . . 
                . . . . . 6 b b b b b b 6 b b . 
                . . . . . . b 7 7 7 b 6 b 6 6 b 
                . . . . b b b b b b b 7 b 6 6 b 
                . . . b 7 7 7 7 7 7 b 7 b 6 6 b 
                . . . . b b b b b b b b 6 6 6 b 
                . . . . . b . . b . . . b b b . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            animation.runImageAnimation(
            character,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b b b b b b b b . . 
                . . . . . b 7 7 7 7 7 b 7 b . . 
                . . . . . b b b b b b b b b . . 
                . . . . . . b b b b b b b . . . 
                . . . . . . b 7 b 7 b b b 6 b b 
                . . . . . 6 b b b b b b 6 b 6 b 
                . . . . . . b 7 7 7 b 6 b 6 6 b 
                . . . . b b b b b b b 7 b 6 6 b 
                . . . b 7 7 7 7 7 7 b 7 b 6 6 b 
                . . . . b b b b b b b b 6 6 6 b 
                . . . . . b . . b . . . b b b . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b b b b b b b b . . 
                . . . . . b 7 7 7 7 7 b 7 b . . 
                . . . . . b b b b b b b b b . . 
                . . . . . . b b b b b b b . . . 
                . . . . . . b 7 b 7 b b b 6 . . 
                . . . . . 6 b b b b b b 6 b b . 
                . . . . . . b 7 7 7 b 6 b 6 6 b 
                . . . . b b b b b b b 7 b 6 6 b 
                . . . b 7 7 7 7 7 7 b 7 b 6 6 b 
                . . . . b b b b b b b b 6 6 6 b 
                . . . . . b . . b . . . b b b . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
        }
    } else if (character.vy < 0) {
        if (right == 1) {
            character.setImage(img`
                . . . b b b b b b b b . . . . . 
                . . . b 7 b 7 7 7 7 b . . . . . 
                . . . b 7 b 7 7 7 7 b . . . . . 
                . . . b b b 7 b 7 b b . . . . . 
                . . . . b b 7 b 7 b . . . . . . 
                . . . . b b b b b b . . . . . . 
                . . . . b 7 7 7 7 b . . . . . . 
                . . . b b 7 7 7 7 b . . . . . . 
                . . . b b 6 7 7 7 b . . . . . . 
                . . b 6 b 6 b b b b b b . . . . 
                . . b 6 b 6 7 7 7 7 7 7 b . . . 
                . . b 6 6 6 b b b b b b . . . . 
                . . b 6 6 6 . b . . b . . . . . 
                . . . b b b . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            animation.runImageAnimation(
            character,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . b b b b b b b b b . . . . . 
                . . b 7 b 7 7 7 7 7 b . . . . . 
                . . b b b b b b b b b . . . . . 
                . . . b b b 7 b 7 b . . . . . . 
                . . . b b b b b b b . . . . . . 
                . . b b 7 b 7 7 7 b . . . . . . 
                . . b b 6 b 7 7 7 b . . . . . . 
                . b 6 b 6 b b b b b b b . . . . 
                . b 6 b 6 b 7 7 7 7 7 7 b . . . 
                . b 6 6 b b b b b b b b . . . . 
                . b 6 6 6 b . b . . b . . . . . 
                . . b b b . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . b b b b b b b b b . . . . . 
                . . b 7 b 7 7 7 7 7 b . . . . . 
                . . b b b b 7 b 7 b b . . . . . 
                . . . b b b b b b b . . . . . . 
                . . . b b b b b b b . . . . . . 
                . . b b 7 b 7 7 7 b . . . . . . 
                . . b b 6 b 7 7 7 b . . . . . . 
                . b 6 b 6 b b b b b b b . . . . 
                . b 6 b 6 b 7 7 7 7 7 7 b . . . 
                . b 6 6 6 b b b b b b b . . . . 
                . b 6 6 6 b . b . . b . . . . . 
                . . b b b . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            false
            )
        } else {
            character.setImage(img`
                . . . . . b b b b b b b b . . . 
                . . . . . b 7 7 7 7 b 7 b . . . 
                . . . . . b 7 7 7 7 b 7 b . . . 
                . . . . . b b 7 b 7 b b b . . . 
                . . . . . . b 7 b 7 b b . . . . 
                . . . . . . b b b b b b . . . . 
                . . . . . . b 7 7 7 7 b . . . . 
                . . . . . . b 7 7 7 7 b b . . . 
                . . . . . . b 7 7 7 6 b b . . . 
                . . . . b b b b b b 6 b 6 b . . 
                . . . b 7 7 7 7 7 7 6 b 6 b . . 
                . . . . b b b b b b 6 6 6 b . . 
                . . . . . b . . b . 6 6 6 b . . 
                . . . . . . . . b . b b b . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            animation.runImageAnimation(
            character,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . b b b b b b b b b . 
                . . . . . . b 7 7 7 7 7 b 7 b . 
                . . . . . . b b b b b b b b b . 
                . . . . . . . b 7 b 7 b b b . . 
                . . . . . . . b b b b b b b . . 
                . . . . . . . b 7 7 7 b 7 b b . 
                . . . . . . . b 7 7 7 b 6 b b . 
                . . . . . b b b b b b b 6 b 6 b 
                . . . . b 7 7 7 7 7 7 b 6 b 6 b 
                . . . . . b b b b b b b b 6 6 b 
                . . . . . . b . . b . b 6 6 6 b 
                . . . . . . . . . b . . b b b . 
                . . . . . . . . . b . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b b b b b b b b . . 
                . . . . . b 7 7 7 7 7 b 7 b . . 
                . . . . . b b 7 b 7 b b b b . . 
                . . . . . . b b b b b b b . . . 
                . . . . . . b b b b b b b . . . 
                . . . . . . b 7 7 7 b 7 b b . . 
                . . . . . . b 7 7 7 b 6 b b . . 
                . . . . b b b b b b b 6 b 6 b . 
                . . . b 7 7 7 7 7 7 b 6 b 6 b . 
                . . . . b b b b b b b 6 6 6 b . 
                . . . . . b . . b . b 6 6 6 b . 
                . . . . . . . . b . . b b b . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            100,
            false
            )
        }
    } else {
        if (right == 1) {
            if (0 == character.x % 2) {
                character.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . b b b b b b b b b . . . . . 
                    . . b 7 b 7 7 7 7 7 b . . . . . 
                    . . b b b b b b b b b . . . . . 
                    . . . b b b 7 b 7 b . . . . . . 
                    . . . b b b b b b b . . . . . . 
                    . . b b 7 b 7 7 7 b . . . . . . 
                    . b 6 b 6 b 7 7 7 b . . . . . . 
                    b 6 6 b 6 b b b b b b b . . . . 
                    b 6 6 b 6 b 7 7 7 7 7 7 b . . . 
                    b 6 6 6 b b b b b b b b . . . . 
                    . b 6 6 6 b . b . . b . . . . . 
                    . . b b b . . b . . b . . . . . 
                    . . . . . . . b . . b . . . . . 
                    `)
            } else {
                character.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . b b b b b b b b b . . . . . 
                    . . b 7 b 7 7 7 7 7 b . . . . . 
                    . . b b b b b b b b b . . . . . 
                    . . . b b b 7 b 7 b . . . . . . 
                    . . . b b b b b b b . . . . . . 
                    . b b b 6 b 7 7 7 b . . . . . . 
                    b 6 6 b 6 b 7 7 7 b . . . . . . 
                    b 6 6 b 6 b b b b b b b . . . . 
                    b 6 6 b 7 b 7 7 7 7 7 7 b . . . 
                    . b 6 6 b b b b b b b b . . . . 
                    . . b 6 6 b . b b . . . . . . . 
                    . . . b b . . b b . . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    `)
            }
        } else {
            if (0 == character.x % 2) {
                character.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . b b b b b b b b b . . 
                    . . . . . b 7 7 7 7 7 b 7 b . . 
                    . . . . . b b b b b b b b b . . 
                    . . . . . . b 7 b 7 b b b . . . 
                    . . . . . . b b b b b b b . . . 
                    . . . . . . b 7 7 7 b 6 b b b . 
                    . . . . . . b 7 7 7 b 6 b 6 6 b 
                    . . . . b b b b b b b 6 b 6 6 b 
                    . . . b 7 7 7 7 7 7 b 7 b 6 6 b 
                    . . . . b b b b b b b b 6 6 b . 
                    . . . . . . . b b . b 6 6 b . . 
                    . . . . . . . b b . . b b . . . 
                    . . . . . . . b b . . . . . . . 
                    . . . . . . . b b . . . . . . . 
                    `)
            } else {
                character.setImage(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . b b b b b b b b b . . 
                    . . . . . b 7 7 7 7 7 b 7 b . . 
                    . . . . . b b b b b b b b b . . 
                    . . . . . . b 7 b 7 b b b . . . 
                    . . . . . . b b b b b b b . . . 
                    . . . . . . b 7 7 7 b 7 b b . . 
                    . . . . . . b 7 7 7 b 6 b 6 b . 
                    . . . . b b b b b b b 6 b 6 6 b 
                    . . . b 7 7 7 7 7 7 b 6 b 6 6 b 
                    . . . . b b b b b b b b 6 6 6 b 
                    . . . . . b . . b . b 6 6 6 b . 
                    . . . . . b . . b . . b b b . . 
                    . . . . . b . . b . . . . . . . 
                    `)
            }
        }
    }
    if ((character.isHittingTile(CollisionDirection.Right) || character.isHittingTile(CollisionDirection.Left)) && character.vy >= 0) {
        character.vy = 0
        character.ay = 0
        if (right == 1) {
            character.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . b b b b b b b b b . . . . . 
                . . b 7 b 7 7 7 7 7 b . . . . . 
                . . b b b b b b b b b . . . . . 
                . . . b b 7 b 7 b b . . . . . . 
                . . . b b b b b b b . . . . . . 
                . b 6 6 6 b 7 7 7 b 6 6 6 . . . 
                b 6 6 b 7 b 7 7 7 b . . . . . . 
                b 6 6 b 7 b b b b b b . . . . . 
                b 6 6 b 7 b 7 7 7 7 7 b . . . . 
                b 6 6 6 b b b b b b b b b . . . 
                b 6 6 6 b b . . . . . . . . . . 
                b 6 6 6 b b . . . . . . . . . . 
                . b b b . b . . . . . . . . . . 
                `)
        } else {
            character.setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b b b b b b b b . . 
                . . . . . b 7 7 7 7 7 b 7 b . . 
                . . . . . b b b b b b b b b . . 
                . . . . . . b b 7 b 7 b b . . . 
                . . . . . . b b b b b b b . . . 
                . . . 6 6 6 b 7 7 7 b 6 6 6 b . 
                . . . . . . b 7 7 7 b 7 b 6 6 b 
                . . . . . b b b b b b 7 b 6 6 b 
                . . . . b 7 7 7 7 7 b 7 b 6 6 b 
                . . . b b b b b b b b b 6 6 6 b 
                . . . . . . . . . . b b 6 6 6 b 
                . . . . . . . . . . b b 6 6 6 b 
                . . . . . . . . . . b . b b b . 
                `)
        }
    } else {
        character.ay = 350
    }
    if (character.vx < 0) {
        right = 0
    }
    if (character.vx > 0) {
        right = 1
    }
    if (current_level == 8 || current_level == 17) {
        if (character.y > camerascroll2.y + 72) {
            gameover()
        }
        if (camerascroll2.y < 60) {
            camerascroll2.ay = 0
            camerascroll2.vy = 0
        }
    }
})
