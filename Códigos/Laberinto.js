scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true, effects.smiles)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . f f b d d d 1 1 1 f f . . . 
    . f f b d 1 1 1 1 1 1 1 f . . . 
    . f b d 1 1 d f 1 d f 1 f . . . 
    . f b d 1 1 b f 1 b f 1 1 f . . 
    . f f b d 1 d f 1 d f 1 1 f . . 
    . . f f b d 1 1 1 1 1 1 1 f . . 
    . . . f b d 1 1 1 1 1 1 f f . . 
    . . . f f b d d d d 1 1 f . . . 
    . . . . f f b b b b f f f . . . 
    . . . . . f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
tiles.setTilemap(tilemap`level1`)
