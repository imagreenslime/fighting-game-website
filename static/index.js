
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");


canvas.width = 1600
canvas.height = 900

var photos = {
  "deathR": "https://lh3.googleusercontent.com/aQ9AsMxJIoqpxY1XQOt8kcQfA99HCjPw3Z4WhI1BUMAU6xPoHzsdasfMgWhCpeiNBHRBsUIWwwIkTJDEwtT3FWKHwfe3IDqLHx6-61nsJmT3NFZ0zbUCGdJMPD2_dCihDA5zP9gJUA=w2400",
  "attack1Sam2R": "https://lh3.googleusercontent.com/ygAtUYcgb7KSD9Bl-R7jcn-lSMf0nj2VweSlRhd43vP7hyp7WO56lRjbCb3M85uMtoPVaveuC_KtJEwOLzY2ErYlkk5IY6duz4Gb3FReKVPm4tvLIZCpQwfBbZlxMdY94BbiQio0Jw=w2400",
  "hitAnimR": "https://lh3.googleusercontent.com/EybaqMtJZVkFfVJKHlS0nBVf737pEXrHUbG45tyCHCzMTGlFzmrUniWTyEUscBT_CLU7WastUkmV72SPhrlYmhkMsVpt_F22CaYuleNGJ55qZZtvkSwHLhQ0u2yadiRTq7sZ72l-bA=w2400",
  "jumpSam2R": "https://lh3.googleusercontent.com/ABd6OgGPEGk0Uiw4IU0AQMTNImObBFH5JhKwvRTKgNPnoHD62z6Go3up8srpjlEPqfGKjk_uCAsFHbb18jJs0979yQA1SJHGNV9DPIrsWYulb1KRmm8J2G8R_M5ZOs5tLH2BJ6hPJw=w2400",
  "runSam2R": "https://lh3.googleusercontent.com/g82pEObiAYlz4yeFq1_W9vP_pPuQDQc194ZxM9nCoftHH1yuMXta28O6b88eltUKfy8SDPbJSfDVlv-JIFSLRhMoqXtJGMnZSEpQMpOlxkew7vXSERwpnHCSpA_bRqgoE17o8mB0IA=w2400",
  "idleSam2R": "https://lh3.googleusercontent.com/G_vBhYAztZinPOVwuhomnKkU0HNdiYVU0wENp0w1wKNrlEg_hVy4JV9UWL2vyuDIN4mCW9agx610ju8jJy1fvg2F29xsZPuOyMoBuiBO3zBdBYFQP2-24Pe1JhoOjoGcHB2BtfzjJQ=w2400",
  
  "death": "https://lh3.googleusercontent.com/7tdbVRVEZtoNMqk3kFRoSX2roccYW1gRUlpuaQlSDqs7BwmpkT_i9XVdHoFvs8Ry9n2LV1aCyP_S4ChkIeVJM4Xc0diu_-ITRtd0Z15QOHIO3zz7P4mO_wJNgjUiuTjNq1_JUIOSZA=w2400",
  "attack1Sam2": "https://lh3.googleusercontent.com/-kzrGXHf6W5Aj7ELkAVFYilpRIxaqDNp9F2ZtPp5fEVpyAWDQCiR8oKMUjE60YmbG3QUzd2xmJKJ4bVkoBMfuCWpYNKDktIX-FQHyMKTECucDbrRJjxdrqluCxsEI8W07aLyVDhdLw=w2400",
  "hitAnim": "https://lh3.googleusercontent.com/6KO6dOv8ISu0VWeYbmFBBuVGwvxGJ6hX1JmkmlpERBDnY5F-HLT9vMN0GAED7rkan9PA7RKfUBRZA3wa6qnPRdbUbteEPtpNKLK-Et9905d8-3qAuaddI1_G9d2taKcK_DNWO8Hivg=w2400",
  "jumpSam2": "https://lh3.googleusercontent.com/pR2_iRONhcld0y9CRakWGyUy_nym1XZqvVEBZHg4mClC63L9BFZZPFEYb2HtsvSKQO8mP21b5pV_6u-3or4byWmLYZpv7XGXANSsTf0k8ucZuVqMusjeF3FWFGraqhwANDJ6oNXLjg=w2400",
  "runSam2": "https://lh3.googleusercontent.com/N068NZ_xL3MyR9Eox2h2MT2gFjWXrU6eB8dKrmLdi_wclutDf1HZyA23rQfobfQQE6EO9yuJsfBXlnp56JqQ2nGA0u6hF_VdAHIEng6mMlfJsPY4fDRGcK2BRgEt_fUFvkzyjgT19Q=w2400",
  "idleSam2": "https://lh3.googleusercontent.com/K9Bhq_OpriYvaYeBDu1yUvOKa7l3-5_-20qBIR7Q40Z2dkfTMUxAqzVEqYpsj3955qMP-Tifv1fBFQ__vJpLp9y4an1mZQ93-5O--ttJ6IfRd0RB7WN8olZ0NlOanvyEC2XMehWdmg=w2400",
  
  "genjiDojo": "https://lh3.googleusercontent.com/DABCViVwLg6_aAlez4N4XmyYu8tCLpQw_HjIfVx4QWyC6IPbpLWCTpxpn9rFdS4y0aLwgaHGRXLw8Ue90M1x8oJZvS8-pMR588sg8UsBjRXI-aWgDqZsYHfJfPDeLmUAS8WnblYZvQ=w2400",
  "shopAnimBG": "https://lh3.googleusercontent.com/N8lV_zDOvXLiWTt33TJd4LAQPMZeGgSlnaL-hmNHgvw_GA7h498I-Sgwq2EQ4-CyXwBh1HmcbFOaH0UMgIdpodGiRCWt__sIfzllNFApmCEDYUDvGNmfSDCmD18x98xMC_ZvNxo5Yw=w2400",
  "grassPlainsBG": "https://lh3.googleusercontent.com/v_AnWIUuHwP-5ZRsoD6AeWWcXcoB0cBKlKeyqQog84SOdTmZ3KrXHqwtNyLiLMGHIC4hL82DC3C8TjSER_D4mnpRUdhpQQhtib79r1X82_23hddfQrnH4z1VM_0pWnN8Qg3puDweLA=w2400",
  "streetFightBG": "https://lh3.googleusercontent.com/B2Q7feRWVkLatgZg3FaEwyviRV5wFGdrmu5KxNkm2ZBekveWj0PwBms5AkPD8FOXOu_16bLDdZf83YCYekWBuodqH_MmxCpLaPBM0hUR_3oIULWsLKxqgfRN2NYAzTeusV1i-rmGNQ=w2400"
}
c.fillRect(0, 0, canvas.width, canvas.height)


const gravity = 0.7

const background = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  imageSrc: photos["genjiDojo"],
  scale: 0.85,
});
const shop = new Sprite({
  position: {
    x: 600,
    y: 350
  },
  imageSrc: photos["shopAnimBG"],
  scale: 4.2,
  framesMax: 6,
  framesHold: 18
});

const player = new Fighter({
  hitBox: {
    offset: {
      x: 380,
      y: 0
    },
    width: 50,
    height: 215
  },
  position: {
    x: 100,
    y: 600
  },
  velocity: {
    x: 0,
    y: 1
  },
  framesHold: 15,
  scale: 4,
  sprites: {
    hit: {
      imageSrc: photos["hitAnim"],
      framesMax: 3,
      offset: {
        x: 0,
        y: 300
      }
    },
    idle: {
      imageSrc: photos["idleSam2"],
      framesMax: 4,
      offset: {
        x: 0,
        y: 300
      },

    },
    run: {
      imageSrc: photos["runSam2"],
      framesMax: 8,
      offset: {
        x: 0,
        y: 300
      },
    },
    jump: {
      imageSrc: photos["jumpSam2"],
      framesMax: 2,
      offset: {
        x: 0,
        y: 300
      },
    },
    attack1: {
      imageSrc: photos["attack1Sam2"],
      framesMax: 4,
      offset: {
        x: 0,
        y: 300
      },
    },
    death: {
      imageSrc: photos["death"],
      framesMax: 7,
      offset: {
        x: 0,
        y: 300
      },
    }
  },
  attackBox: {
    offset: {
      x: 550,
      y: -25
    },
    width: 175,
    height: 175
  }
})

const enemy = new Fighter({
  hitBox: {
    offset: {
      x: 370,
      y: 0
    },
    width: 50,
    height: 215
  },
  position: {
    x: 500,
    y: 600
  },
  velocity: {
    x: 0,
    y: 1
  },
  framesHold: 15,
  scale: 4,
  sprites: {
    hit: {
      imageSrc: photos["hitAnimR"],
      framesMax: 3,
      offset: {
        x: 0,
        y: 300
      }
    },
    idle: {
      imageSrc: photos["idleSam2R"],
      framesMax: 4,
      offset: {
        x: 0,
        y: 300
      },

    },
    run: {
      imageSrc: photos["runSam2R"],
      framesMax: 8,
      offset: {
        x: 0,
        y: 300
      },
    },
    jump: {
      imageSrc: photos["jumpSam2R"],
      framesMax: 2,
      offset: {
        x: 0,
        y: 300
      },
    },
    attack1: {
      imageSrc: photos["attack1Sam2R"],
      framesMax: 4,
      offset: {
        x: 0,
        y: 300
      },
    }, 
    death: {
      imageSrc: photos["deathR"],
      framesMax: 7,
      offset: {
        x: 0,
        y: 300
      },
    }
  },
  enemy: true,
  attackBox: {
    offset: {
      x: 75,
      y: -25
    },
    width: 175,
    height: 175
  }
})

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  j: {
    pressed: false
  },
  l: {
    pressed: false
  }
}
function decreaseTimer() {
  timerId = setTimeout(decreaseTimer, 1000)
  if (timer > 0) {
    timer -= 1
    document.querySelector('#timer').innerHTML = timer
  }
  if (timer == 0) {
    winner = true;
    determineWinner({ player, enemy, timerId })
  }
}

decreaseTimer()

function animate() {
  window.requestAnimationFrame(animate)
  c.fillStyle = "black"
  c.fillRect(0, 0, canvas.width, canvas.height)

  background.update()
  shop.update()

  player.update()
  enemy.update()
  // enemy.update()



  // player movement
  if (keys.a.pressed && player.lastKey === "a" && player.image != player.sprites.hit.image) {
    player.velocity.x = -3
    player.switchSprite("run")
  } else if (keys.d.pressed && player.lastKey === "d" && player.image != player.sprites.hit.image) {
    player.velocity.x = 3
    player.switchSprite("run")
  } else {
    player.switchSprite("idle")
  }

  // enemy movement
  if (keys.j.pressed && enemy.lastKey === "j" && enemy.image != enemy.sprites.hit.image) {
    enemy.velocity.x = -3
    enemy.switchSprite("run")
  } else if (keys.l.pressed && enemy.lastKey === "l" && enemy.image != enemy.sprites.hit.image) {
    enemy.velocity.x = 3
    enemy.switchSprite("run")
  } else {
    enemy.switchSprite("idle")
  }



  //detect for colision
  if (player.isAttacking && rectangularCollision(player, enemy) && player.framesCurrent == 2) {
    player.isAttacking = false

    enemy.health -= 10
    setTimeout(() =>{document.querySelector("#enemyHealth").style.width = enemy.health + "%"}, 80)
    setTimeout(() => {enemyHealthDepletion()}, 1000)
    
    if (enemy.health <= 0 ){
      enemy.switchSprite("death")
    } else {
      enemy.switchSprite("hit")
    }

    enemy.velocity.x = 3
    setTimeout(() =>{enemy.velocity.x = 0}, 80)
  }
  if (enemy.isAttacking && rectangularCollision(enemy, player)  && enemy.framesCurrent == 1) {
    enemy.isAttacking = false

    player.health -= 10
    setTimeout(() =>{document.querySelector("#playerHealth").style.width = player.health + "%"}, 80)
    setTimeout(() => {playerHealthDepletion()}, 1000)
    
    if (player.health <= 0 ){
      player.switchSprite("death")
    } else {
      player.switchSprite("hit")
    }
    
    player.velocity.x = -3
    setTimeout(() =>{player.velocity.x = 0}, 80)
  }
  
  if (player.isAttacking && player.framesCurrent >= 2){
    player.isAttacking = false
  } 
  if (enemy.isAttacking && enemy.framesCurrent <= 1){
    enemy.isAttacking = false
  }

  //determine winner
  if (!winner) {
    if (enemy.health <= 0 || player.health <= 0) {
      winner = true;
      determineWinner({ player, enemy, timerId })
    }
  }

}

animate()

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true
      player.lastKey = "d"
      break
    case "a":
      keys.a.pressed = true
      player.lastKey = "a"
      break
    case "w":
      if (player.velocity.y == 0) {
        player.velocity.y = -10
      }
      break
    case "f":
      if (player.attackUp == true){
        player.attack()
        player.attackUp = false
      }
      break

    case "j":
      keys.j.pressed = true
      enemy.lastKey = "j"
      break
    case "l":
      keys.l.pressed = true
      enemy.lastKey = "l"
      break
    case "i":
      if (enemy.velocity.y == 0) {
        enemy.velocity.y = -10
      }
      break
    case ";":
      if (enemy.attackUp == true){
        enemy.attack()
        enemy.attackUp = false
      }
      break
  }
})

window.addEventListener('keyup', (event) => {
  switch (event.key) {
    case "d":
      player.velocity.x = 0
      keys.d.pressed = false
      break
    case "a":
      player.velocity.x = 0
      keys.a.pressed = false
      break
    case "f":
      player.attackUp = true
      break
    case "j":
      enemy.velocity.x = 0
      keys.j.pressed = false
      break
    case "l":
      enemy.velocity.x = 0
      keys.l.pressed = false
      break
    case ";":
      enemy.attackUp = true
      break
  }

})