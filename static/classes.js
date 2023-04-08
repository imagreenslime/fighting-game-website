
class Sprite {
  constructor({position, imageSrc, scale = 1, framesMax = 1, framesHold = 1, offset = {x:0,y:0} }){
    this.position = position
    this.image = new Image(),
    this.image.src = imageSrc
    this.scale = scale
    this.framesMax = framesMax
    this.framesHold = framesHold
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.offset = offset
  }
  draw() {
    c.drawImage(this.image,
      this.framesCurrent * (this.image.width / this.framesMax),
      0, 
      this.image.width / this.framesMax,
      this.image.height, 
      this.position.x - this.offset.x, 
      this.position.y - this.offset.y, 
      (this.image.width / this.framesMax) * this.scale, 
      this.image.height * this.scale);
  }
  animateFrame(){
    this.framesElapsed ++

    if (this.framesElapsed % this.framesHold == 0){
      if (this.framesCurrent < this.framesMax - 1) {
        this.framesCurrent++
      } else {
        this.framesCurrent = 0
      }
    }
  }
  animateFrameBack(){

    this.framesElapsed ++ 
    if (this.framesElapsed % this.framesHold == 0){
      
      if (this.framesCurrent > 0) {
        this.framesCurrent--
      } else {
        this.framesCurrent = this.framesMax - 1
      }
    }
  }

  update() {
    this.animateFrame()
    this.draw()
  }
}

class Fighter extends Sprite {
  constructor({ position, velocity, scale = 1, 
    framesMax = 1, 
    framesHold = 1, 
    hitBox = {
      offset: {},
      width: undefined,
      height: undefined,
    },
    sprites, 
    enemy = false, 
    attackBox = {
      offset: {},
      width: undefined,
      height: undefined
    }
  }){
    super({
      scale, framesMax, framesHold, position
    })
    this.hitBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: hitBox.offset,
      width: hitBox.width,
      height: hitBox.height
    }
    this.framesCurrent = 0
    this.framesElapsed = 0
    this.velocity = velocity
    this.lastKey
    this.height = 150
    this.width = 50
    this.attackBox = {
      position: {
        x: this.position.x,
        y: this.position.y
      },
      offset: attackBox.offset,
      width: attackBox.width,
      height: attackBox.height
    }
    this.attackUp = true
    this.isAttacking = false
    this.health = 100
    this.backHealth = 100
    this.sprites = sprites
    this.enemy = enemy
    this.dead = false
    for (const sprite in this.sprites){
      sprites[sprite].image = new Image()
      sprites[sprite].image.src = sprites[sprite].imageSrc
    }

    this.attackBoxX;
  }

  update() {
    if (!this.dead){
      if (this.enemy){
        this.animateFrameBack()
      } else {
        this.animateFrame()
      }
      this.draw()
    }

    // hitbox

    this.hitBox.position.x = this.position.x + this.hitBox.offset.x
    this.hitBox.position.y = this.position.y + this.hitBox.offset.y

    if (this.image == this.sprites.attack1.image){
      if (this.enemy){
        this.hitBox.position.x -= 50
      } else {
        this.hitBox.position.x += 50
      }
    }

    // c.fillRect(this.hitBox.position.x, this.hitBox.position.y, this.hitBox.width, this.hitBox.height)

    this.attackBox.position.x = this.position.x + this.attackBox.offset.x
    this.attackBox.position.y = this.position.y + this.attackBox.offset.y

    // attack box
    // c.fillRect(this.attackBox.position.x, this.attackBox.position.y,this.attackBox.width, this.attackBox.height)

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    
    // gravity
    if (this.position.y + this.height + this.velocity.y >= canvas.height - 80) {
      this.velocity.y = 0
      this.position.y = 670.4
    } else this.velocity.y += gravity
    
  }
  attack() {
    if(this.isAttacking == false){
      this.switchSprite("attack1")
    }
  }
  resetFrame(){
    this.framesCurrent = 0
    if (this.enemy){
      this.framesCurrent = this.framesMax - 1
    }
  }
  switchSprite(sprite){
    // overiding animations
    if (this.image == this.sprites.death.image){
      if (!this.enemy && this.framesCurrent < this.framesMax - 1 || this.enemy && this.framesCurrent > 0){
        return
      } else {
        this.dead = true
      }
    }

    switch (sprite){
      case "death":
        if (this.image != this.sprites.death.image){
          this.image = this.sprites.death.image
          this.framesMax = this.sprites.death.framesMax
          this.offset = this.sprites.death.offset
          
          this.resetFrame()
        }
        break
      case "hit":
        this.isAttacking = false
        if (this.image != this.sprites.hit.image){
          this.image = this.sprites.hit.image
          this.framesMax = this.sprites.hit.framesMax
          this.offset = this.sprites.hit.offset

          this.resetFrame()
        }
        break
    }

 
    // cant cancel hit or attack
    if (!this.enemy && this.framesCurrent < this.framesMax - 1 || this.enemy && this.framesCurrent > 0){
      if (this.image == this.sprites.attack1.image || this.image == this.sprites.hit.image){
        return
      }
    }

    switch (sprite) {
      case "idle":
        if (this.image != this.sprites.idle.image){
          this.image = this.sprites.idle.image
          this.framesMax = this.sprites.idle.framesMax
          this.offset = this.sprites.idle.offset
          
          this.resetFrame()
        }
        break
      case "run":
        if (this.image != this.sprites.run.image){
          this.image = this.sprites.run.image
          this.framesMax = this.sprites.run.framesMax
          this.offset = this.sprites.run.offset

          this.resetFrame()
        }
        break  
      case "jump":
        if (this.image != this.sprites.jump.image){
          this.image = this.sprites.jump.image
          this.framesMax = this.sprites.jump.framesMax
          this.offset = this.sprites.jump.offset

          this.resetFrame()
        }
        break
      case "attack1":
        if (this.image != this.sprites.attack1.image){
          this.image = this.sprites.attack1.image
          this.framesMax = this.sprites.attack1.framesMax
          this.offset = this.sprites.attack1.offset
          this.isAttacking = true
          this.resetFrame()
        }
        break    
    }
  }
}