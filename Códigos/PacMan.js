enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Looking,
    MoveLeft,
    MoveRight,
    MoveDown
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.MoveDown)
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mySprite, ActionKind.Idle)
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    mySprite.destroy()
    bug1.destroy()
    bug2.destroy()
    bug3.destroy()
    bug4.destroy()
    bug5.destroy()
    bug6.destroy()
    info.changeLifeBy(-1)
    reset()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.MoveLeft)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mySprite, ActionKind.Idle)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mySprite, ActionKind.Idle)
})
function populateDigits () {
    one = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one2 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one3 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one4 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one5 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one6 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one7 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one8 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one9 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one10 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one11 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one12 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one13 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one14 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one15 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one16 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one17 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one18 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one19 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one20 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one21 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one22 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one24 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one25 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one26 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one27 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one28 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    one29 = sprites.create(img`
        . . . 1 1 . . . 
        . . 1 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        `, SpriteKindLegacy.Food)
    zero = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero2 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero3 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero4 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero5 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero6 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero7 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero8 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero9 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero10 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero11 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero12 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero13 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero14 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero15 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero16 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero17 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero18 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero19 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero20 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero21 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero22 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero23 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero24 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero25 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    zero26 = sprites.create(img`
        . . 1 1 1 1 . . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . 1 1 . . 1 1 . 
        . . 1 1 1 1 . . 
        `, SpriteKindLegacy.Food)
    one12.setPosition(50, 32)
    one.setPosition(70, 32)
    zero.setPosition(90, 32)
    one2.setPosition(110, 32)
    zero2.setPosition(128, 32)
    one6.setPosition(148, 32)
    zero4.setPosition(168, 32)
    one7.setPosition(188, 32)
    one8.setPosition(208, 32)
    one3.setPosition(128, 52)
    one4.setPosition(128, 72)
    zero3.setPosition(128, 92)
    one5.setPosition(128, 109)
    one9.setPosition(128, 128)
    zero5.setPosition(108, 128)
    zero6.setPosition(88, 128)
    zero7.setPosition(68, 128)
    one11.setPosition(48, 128)
    one13.setPosition(32, 32)
    one10.setPosition(32, 52)
    zero8.setPosition(32, 72)
    zero9.setPosition(32, 92)
    one14.setPosition(32, 109)
    zero10.setPosition(32, 128)
    zero11.setPosition(32, 150)
    one15.setPosition(32, 170)
    zero12.setPosition(32, 191)
    one16.setPosition(50, 191)
    one17.setPosition(69, 191)
    one18.setPosition(88, 191)
    zero13.setPosition(108, 191)
    zero14.setPosition(128, 191)
    one19.setPosition(128, 171)
    one20.setPosition(128, 151)
    zero15.setPosition(148, 128)
    one21.setPosition(165, 128)
    zero16.setPosition(183, 128)
    zero17.setPosition(202, 128)
    zero18.setPosition(220, 128)
    one22.setPosition(240, 128)
    one24.setPosition(240, 108)
    one25.setPosition(240, 88)
    zero19.setPosition(240, 68)
    zero20.setPosition(240, 49)
    one26.setPosition(240, 32)
    zero21.setPosition(224, 32)
    one27.setPosition(240, 145)
    zero22.setPosition(240, 160)
    zero23.setPosition(240, 175)
    one28.setPosition(240, 190)
    zero24.setPosition(148, 190)
    zero25.setPosition(168, 190)
    zero26.setPosition(188, 190)
    one15.setPosition(208, 190)
    one29.setPosition(222, 190)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.MoveRight)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(mySprite, ActionKind.Idle)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.setAction(mySprite, ActionKind.MoveDown)
})
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Food, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
})
function createPlayer () {
    anim = animation.createAnimation(ActionKind.MoveLeft, 200)
    anim1 = animation.createAnimation(ActionKind.MoveRight, 200)
    anim3 = animation.createAnimation(ActionKind.Idle, 200)
    anim4 = animation.createAnimation(ActionKind.MoveDown, 200)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f f 5 5 5 f 5 5 5 5 f 5 5 f f . 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 f . 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . . . f f f f f . . . . . . 
        `, SpriteKindLegacy.Player)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f 5 5 5 5 f f 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 f f 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 f f 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 f 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f f f f f f f f f 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 f f . . . . 
        . . . . f f f f f f . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . f f 5 5 5 5 5 5 5 5 5 f f . . 
        . f f 5 5 f f 5 5 5 5 5 5 f . . 
        f 5 5 5 5 f f 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 f f 5 5 5 5 5 5 5 f . 
        f f 5 5 5 f 5 5 5 5 5 5 5 5 f . 
        f f f f 5 5 5 5 5 5 5 5 5 5 f . 
        f f f f f f 5 5 5 5 5 5 5 5 f . 
        f f f f f f f 5 5 5 5 5 5 5 f . 
        . f f f f f f 5 5 5 5 5 5 f . . 
        . f f f f 5 5 5 5 5 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 f f . . . . 
        . . . . f f f f f f . . . . . . 
        `)
    anim1.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 f f 5 5 5 f . . 
        f 5 5 5 5 5 5 5 f f 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 f f 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 f 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 f f f f f f f f f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 f f . . . . 
        . . . . f f f f f f . . . . . . 
        `)
    anim1.addAnimationFrame(img`
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f f 5 5 5 5 5 5 5 f f . . . 
        . f f 5 5 5 5 5 5 5 5 5 f f . . 
        . f 5 5 5 5 5 5 f f 5 5 f f . . 
        f 5 5 5 5 5 5 5 f f 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 f f 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 f 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 f f f f f f f f f f . 
        f 5 5 5 f f f f f f f f f f f . 
        . f 5 5 f f f f f f f f f f . . 
        . f 5 5 5 f f f f f f f f f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f 5 5 5 5 5 5 f f . . . . 
        . . . . f f f f f f . . . . . . 
        `)
    anim3.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f f 5 5 5 f 5 5 5 5 f 5 5 f f . 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 f . 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f f 5 5 5 f 5 5 5 5 f 5 5 f f . 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 f . 
        f 5 5 5 5 f 5 5 5 5 f 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 f f f f f f f f f 5 5 f . 
        . f 5 5 f f f f f f f f 5 f . . 
        . f 5 5 5 f f f f f f 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    anim4.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 5 f . . 
        f f 5 5 f 5 5 5 5 f 5 5 5 f f . 
        f 5 5 5 f 5 5 5 5 f 5 5 5 5 f . 
        f 5 5 5 f 5 5 5 5 f 5 5 5 5 f . 
        f 5 5 5 5 5 5 5 5 5 5 5 5 5 f . 
        f 5 5 f f f f f f f f f f 5 f . 
        . f 5 f f f f f f f f f 5 f . . 
        . f 5 5 f f f f f f f 5 5 f . . 
        . . f 5 5 5 5 5 5 5 5 5 f . . . 
        . . . f f 5 5 5 5 5 f f . . . . 
        . . . . . f f f f f . . . . . . 
        `)
    animation.attachAnimation(mySprite, anim)
    animation.attachAnimation(mySprite, anim1)
    animation.attachAnimation(mySprite, anim3)
    animation.attachAnimation(mySprite, anim4)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    mySprite.setPosition(128, 128)
}
function createBugs () {
    bug1Direction = 0
    bug2Direction = 0
    bug3Direction = 0
    bug4Direction = 0
    bug5Direction = 0
    bug6Direction = 0
    bug1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 5 5 5 5 5 . . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 5 . . . 
        . . 5 1 1 5 5 5 5 1 1 5 5 5 . . 
        . . 1 1 1 1 5 5 1 1 1 1 5 5 . . 
        . . 8 8 1 1 5 5 8 8 1 1 5 5 . . 
        . 5 8 8 1 1 5 5 8 8 1 1 5 5 5 . 
        . 5 5 1 1 5 5 5 5 1 1 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 . 5 5 5 . . 5 5 5 . 5 5 . 
        . 5 . . . 5 5 . . 5 5 . . . 5 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 1 1 7 7 7 7 1 1 7 7 7 . . 
        . . 1 1 1 1 7 7 1 1 1 1 7 7 . . 
        . . 8 8 1 1 7 7 8 8 1 1 7 7 . . 
        . 7 8 8 1 1 7 7 8 8 1 1 7 7 7 . 
        . 7 7 1 1 7 7 7 7 1 1 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 . 7 7 7 . . 7 7 7 . 7 7 . 
        . 7 . . . 7 7 . . 7 7 . . . 7 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 3 3 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 3 . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 3 . . . 
        . . 3 1 1 3 3 3 3 1 1 3 3 3 . . 
        . . 1 1 1 1 3 3 1 1 1 1 3 3 . . 
        . . 8 8 1 1 3 3 8 8 1 1 3 3 . . 
        . 3 8 8 1 1 3 3 8 8 1 1 3 3 3 . 
        . 3 3 1 1 3 3 3 3 1 1 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
        . 3 3 . 3 3 3 . . 3 3 3 . 3 3 . 
        . 3 . . . 3 3 . . 3 3 . . . 3 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug4 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . a a a a . . . . . . 
        . . . . . a a a a a a . . . . . 
        . . . . a a a a a a a a . . . . 
        . . . a a a a a a a a a a . . . 
        . . a 1 1 a a a a 1 1 a a a . . 
        . . 1 1 1 1 a a 1 1 1 1 a a . . 
        . . 8 8 1 1 a a 8 8 1 1 a a . . 
        . a 8 8 1 1 a a 8 8 1 1 a a a . 
        . a a 1 1 a a a a 1 1 a a a a . 
        . a a a a a a a a a a a a a a . 
        . a a a a a a a a a a a a a a . 
        . a a a a a a a a a a a a a a . 
        . a a . a a a . . a a a . a a . 
        . a . . . a a . . a a . . . a . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug5 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . d d d d d d . . . . . 
        . . . . d d d d d d d d . . . . 
        . . . d d d d d d d d d d . . . 
        . . d 1 1 d d d d 1 1 d d d . . 
        . . 1 1 1 1 d d 1 1 1 1 d d . . 
        . . 8 8 1 1 d d 8 8 1 1 d d . . 
        . d 8 8 1 1 d d 8 8 1 1 d d d . 
        . d d 1 1 d d d d 1 1 d d d d . 
        . d d d d d d d d d d d d d d . 
        . d d d d d d d d d d d d d d . 
        . d d d d d d d d d d d d d d . 
        . d d . d d d . . d d d . d d . 
        . d . . . d d . . d d . . . d . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug6 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 1 1 2 2 2 2 1 1 2 2 2 . . 
        . . 1 1 1 1 2 2 1 1 1 1 2 2 . . 
        . . 8 8 1 1 2 2 8 8 1 1 2 2 . . 
        . 2 8 8 1 1 2 2 8 8 1 1 2 2 2 . 
        . 2 2 1 1 2 2 2 2 1 1 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 . 2 2 2 . . 2 2 2 . 2 2 . 
        . 2 . . . 2 2 . . 2 2 . . . 2 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKindLegacy.Enemy)
    bug1.setPosition(150, 32)
    bug2.setPosition(220, 130)
    bug3.setPosition(32, 190)
    bug4.setPosition(128, 32)
    bug5.setPosition(32, 150)
    bug6.setPosition(240, 32)
}
function reset () {
    populateDigits()
    createPlayer()
    createBugs()
}
let bug6Direction = 0
let bug5Direction = 0
let bug4Direction = 0
let bug3Direction = 0
let bug2Direction = 0
let bug1Direction = 0
let anim4: animation.Animation = null
let anim3: animation.Animation = null
let anim1: animation.Animation = null
let anim: animation.Animation = null
let zero26: Sprite = null
let zero25: Sprite = null
let zero24: Sprite = null
let zero23: Sprite = null
let zero22: Sprite = null
let zero21: Sprite = null
let zero20: Sprite = null
let zero19: Sprite = null
let zero18: Sprite = null
let zero17: Sprite = null
let zero16: Sprite = null
let zero15: Sprite = null
let zero14: Sprite = null
let zero13: Sprite = null
let zero12: Sprite = null
let zero11: Sprite = null
let zero10: Sprite = null
let zero9: Sprite = null
let zero8: Sprite = null
let zero7: Sprite = null
let zero6: Sprite = null
let zero5: Sprite = null
let zero4: Sprite = null
let zero3: Sprite = null
let zero2: Sprite = null
let zero: Sprite = null
let one29: Sprite = null
let one28: Sprite = null
let one27: Sprite = null
let one26: Sprite = null
let one25: Sprite = null
let one24: Sprite = null
let one22: Sprite = null
let one21: Sprite = null
let one20: Sprite = null
let one19: Sprite = null
let one18: Sprite = null
let one17: Sprite = null
let one16: Sprite = null
let one15: Sprite = null
let one14: Sprite = null
let one13: Sprite = null
let one12: Sprite = null
let one11: Sprite = null
let one10: Sprite = null
let one9: Sprite = null
let one8: Sprite = null
let one7: Sprite = null
let one6: Sprite = null
let one5: Sprite = null
let one4: Sprite = null
let one3: Sprite = null
let one2: Sprite = null
let one: Sprite = null
let bug6: Sprite = null
let bug5: Sprite = null
let bug4: Sprite = null
let bug3: Sprite = null
let bug2: Sprite = null
let bug1: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
info.setLife(3)
scene.setTileMap(img`
    88888888888888888888888888888888
    8fffffffffffffff88888ffffffffff8
    8fffffffffffffff88888ffffffffff8
    8ff8888ff88888ff88888888ff888ff8
    8ff8ff8ff8fff8ff88888ff8ff8f8ff8
    8ff8ff8ff8fff8ff888888f8ff8f8ff8
    8ff8888ff88888ff88888888ff888ff8
    8fffffffffffffff888888fffffffff8
    8fffffffffffffff888888fffffffff8
    8ff8888ff88888ff888888f8ff888ff8
    8ff8888ff88888ff888888f8ff888ff8
    8fffffffffffffff888888f8fffffff8
    8fffffffffffffff88888888fffffff8
    888888888888888888888ff8ff888888
    888888888888888888888ff8ff888888
    888888888888888888888fffffffffff
    888888888888888888888fffffffffff
    8888888ff8ff8fffffff8ff8ff888888
    8ffffffff8ff8fffffff8ff8fffffff8
    8ffffffff8ff8fffffff8ff8fffffff8
    8ff8888ff8ff888888888ff8ff888ff8
    8fffff8ff8fffffffffffff8ff8ffff8
    8fffff8fffffffffffffffffff8ffff8
    8888ff8fffff888888888fffff8ff888
    8888ff8ff888888888888888ff8ff888
    8fffffffffffffff8ffffffffffffff8
    8fffffffffffffff8ffffffffffffff8
    8ff88888888888ff8ff8888888888ff8
    8ff88888888888ff8ff8888888888ff8
    8fffffffffffffff8ffffffffffffff8
    8ffffffffffffffffffffffffffffff8
    88888888888888888888888888888888
    `)
scene.setTile(8, img`
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 f f f f f f f f f f f f 8 8 
    8 f 8 f f f f f f f f f f 8 f 8 
    8 f f 8 f f f f f f f f 8 f f 8 
    8 f f f 8 f f f f f f 8 f f f 8 
    8 f f f f 8 f f f f 8 f f f f 8 
    8 f f f f f 8 f f 8 f f f f f 8 
    8 f f f f f f 8 8 f f f f f f 8 
    8 f f f f f f 8 8 f f f f f f 8 
    8 f f f f f 8 f f 8 f f f f f 8 
    8 f f f f 8 f f f f 8 f f f f 8 
    8 f f f 8 f f f f f f 8 f f f 8 
    8 f f 8 f f f f f f f f 8 f f 8 
    8 f 8 f f f f f f f f f f 8 f 8 
    8 8 f f f f f f f f f f f f 8 8 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    `, true)
populateDigits()
createPlayer()
createBugs()
forever(function () {
    if (bug1.x > 239) {
        bug1Direction = 1
    }
    if (bug1.x < 30) {
        bug1Direction = 0
    }
    if (bug1Direction == 0) {
        bug1.setVelocity(50, 0)
    } else {
        bug1.setVelocity(-50, 0)
    }
    if (bug2.x > 239) {
        bug2Direction = 1
    }
    if (bug2.x < 30) {
        bug2Direction = 0
    }
    if (bug2Direction == 0) {
        bug2.setVelocity(50, 0)
    } else {
        bug2.setVelocity(-50, 0)
    }
    if (bug3.x > 239) {
        bug3Direction = 1
    }
    if (bug3.x < 30) {
        bug3Direction = 0
    }
    if (bug3Direction == 0) {
        bug3.setVelocity(50, 0)
    } else {
        bug3.setVelocity(-50, 0)
    }
    if (bug4.y < 30) {
        bug4Direction = 0
    }
    if (bug4.y > 190) {
        bug4Direction = 1
    }
    if (bug4Direction == 0) {
        bug4.setVelocity(0, 50)
    } else {
        bug4.setVelocity(0, -50)
    }
    if (bug5.y < 30) {
        bug5Direction = 0
    }
    if (bug5.y > 190) {
        bug5Direction = 1
    }
    if (bug5Direction == 0) {
        bug5.setVelocity(0, 50)
    } else {
        bug5.setVelocity(0, -50)
    }
    if (bug6.y < 30) {
        bug6Direction = 0
    }
    if (bug6.y > 190) {
        bug6Direction = 1
    }
    if (bug6Direction == 0) {
        bug6.setVelocity(0, 50)
    } else {
        bug6.setVelocity(0, -50)
    }
})
