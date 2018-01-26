<template>
      <section @wheel = "wheelMouse($event)"  >
      <transition-group tag="div" :name="name" 
        @enter = "enter"
        @leave = "leave"
      >
        <div class="block" 
        v-for="(item, index) in pages" 
        :key="item"
        :style="{'background-color':bgColor[index] ? bgColor[index] : baseColor}"
        v-show="index+1 === curIndex"
         @transitionend="end"
        >{{item}}
        <slot v-if="index === 2" :state="state"></slot>
        </div>
      </transition-group>
    </section>
</template>

<script>
export default {
  props: {
    pages: {
      type: Number,
      required: true
    },
    bgColor: {
      type: Array
    },
    baseColor: {
      default: "yellow"
    }
  },
  data() {
    return {
      curIndex: 1,
      name: null,
      canWheel: true,
      endCount: 0,
      state: null,
    };
  },
  methods: {
    wheelMouse(e) {
      if (!this.canWheel) return;
      this.canWheel = false;
      if (e.deltaY > 0) {
        if (this.curIndex === this.pages) {
          this.canWheel = true;
          this.endCount = 0;
          return;
        }
        this.name = "down";
        this.curIndex++;
      }
      if (e.deltaY < 0) {
        if (this.curIndex === 1) {
          this.canWheel = true;
          this.endCount = 0;
          return;
        }
        this.name = "up";
        this.curIndex--;
      }
    },

    end() {
      console.log("end");
      this.canWheel = true;
      this.state = 'transitionend'
    },

    enter(el,done) {
      this.state = 'enter'
      // done()
    },

    leave(el, done) {
      this.state = 'leave'
      // done()
    }
  }
};
</script>

<style>
.down-leave-active {
  transition: all 1.5s ease;
  transform: translateY(-100%);
}
.down-enter {
  transform: translateY(100%);
}
.down-enter-active {
  transition: all 1.5s ease;
}

.up-leave-active {
  transform: translateY(100%);
  transition: all 1.5s ease;
}

.up-enter {
  transform: translateY(-100%);
}
.down-leave-active {
  transition: all 1.5s ease;
}
</style>
