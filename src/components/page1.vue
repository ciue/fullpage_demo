<template>
  <div class="project">
        <span 
            v-for="code in codes" 
            v-html="code"></span>

        <span v-show="show">|</span>
        
  </div>
</template>

<script>
export default {
  props: ["state"],
  data() {
    return {
      msg: `VueProject`
        .split("")
        .concat(["<br>", "{", "<br>"], ` return "lalala"`.split(""), [
          "<br>",
          "}"
        ]),
      msgIndex: 0,
      codes: [],
      show: true,
      timer1: null,
      timer2: null
    };
  },

  // mounted() {
  //   this.timer2 = setInterval(this.addCode, 200);
  //   this.timer1 = setInterval(this.showChange, 150);
  // },

  methods: {
    addCode() {
      if (this.msgIndex === 31) return;
      this.codes.push(this.msg[this.msgIndex++]);
    },

    showChange() {
      this.show = !this.show;
      if (this.msgIndex === this.msg.length) {
        this.clear();
      }
    },

    clear() {
      clearInterval(this.time1);
      clearInterval(this.time2);
      this.timer1 = this.timer2 = null;
      this.show = false;
    }
  },

  watch: {
    state() {
      if ((this.state = "enter")) {
        this.timer2 = setInterval(this.addCode, 300);
        this.timer1 = setInterval(this.showChange, 150);
      }

      if ((this.state = "leave")) {
        this.clear();
        this.codes = [];
        this.msgIndex = 0;
      }
    }
  }
};
</script>

<style>
.project {
  position: fixed;
  bottom: 30px;
  left: 25px;
  font-size: 26px;
  font-weight: bold;
}
</style>

