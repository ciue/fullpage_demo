<template>
      <section @wheel = "wheelMouse($event)"  >
      <transition-group tag="div" :name="name">
        <div class="block" 
        v-for="(item, index) in pages" 
        :key="item"
        :style="{'background-color':bgColor[index] ? bgColor[index] : baseColor}"
        v-show="index+1 === curIndex"
         @transitionend="end"
        >{{item}}
        <slot></slot>
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
      endCount: 0
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
      this.endCount++;
      this.canWheel = true;
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
