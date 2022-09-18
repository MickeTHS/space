<template>
  <div class="stage" @click="pop"></div>
</template>

<script>
import * as PIXI from "pixi.js";
import anime from "animejs";

export default {
  name: "CanvasComponent",
  data() {
    return {
      app: null,
      colors: ["75F4F4", "90E0F3", "B8B3E9", "D999B9"],
      star_texture: null,
      planet0_texture: null
    };
  },
  mounted() {
    this.app = new PIXI.Application({
      transparent: true,
      antialias: true
    });
    this.$el.appendChild(this.app.view);
    this.app.renderer.view.style.display = "block";
    this.app.renderer.autoResize = true;
    //this.app.renderer.resize(window.innerWidth, window.innerHeight);

    this.star_texture = PIXI.Texture.from('./textures/star_base_16px.png');
    this.planet0_texture = PIXI.Texture.from('./textures/planet0.png');

    for (let x = 0; x < 32; ++x) {
      for (let y = 0; y < 32; ++y) {
        this.drawStar(Math.floor(Math.random() * 512), Math.floor(Math.random() * 512), Math.random() / 3.0);
      }
    }

    this.drawPlanet(256, 256, 0.2);
  },
  methods: {
    drawPlanet(x, y, scale) {
      const planet = new PIXI.Sprite(this.planet0_texture);
      planet.anchor.set(0.5);
      planet.x = x;
      planet.y = y;
      planet.width = 159 * scale;
      planet.height = 159 * scale;
      this.app.stage.addChild(planet);
    },

    drawStar(x, y, scale) {
      
      const star = new PIXI.Sprite(this.star_texture);
      star.anchor.set(0.5);
      star.x = x;
      star.y = y;
      star.width = 8 * scale;
      star.height = 8 * scale;
      this.app.stage.addChild(star);
    },

    pop(event) {
      let mouse_x = event.x,
        mouse_y = event.y,
        particles = [],
        spread = 100;

      for (let i = 0; i < 50; i++) {
        let particle = new PIXI.Graphics();
        let rand = anime.random(1, this.colors.length);
        particle.beginFill("0x" + this.colors[rand - 1]);
        particle.drawCircle(0, 0, 4);
        particle.endFill();
        particle.x = mouse_x;
        particle.y = mouse_y;
        particles.push(particle);
        this.app.stage.addChild(particle);
      }

      anime({
        targets: particles,
        x() {
          return anime.random(mouse_x - spread, mouse_x + spread);
        },
        y() {
          return anime.random(mouse_y - spread, mouse_y + spread);
        },
        alpha: { delay: 300, duration: 500, value: 0 },
        easing: "easeOutQuint",
        complete: () => {
          for (let particle of particles) {
            this.app.stage.removeChild(particle);
          }
        }
      });
    }
  }
};
</script>
