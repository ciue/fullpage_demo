// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bkColor: ['red','blue','pink','green'],
    curIndex: 0,
    name: null,
    canWheel: true,
    endCount: 0,
  },
  methods: {
    wheelMouse(e) {
      if(!this.canWheel) return
      this.canWheel = false;
      if(e.deltaY > 0) {
        if(this.curIndex === this.bkColor.length-1) {
          this.canWheel = true
          this.endCount = 0;
          return
        };
        this.name = 'down'
        this.curIndex ++;

      }else {
        if(this.curIndex === 0) {
          this.canWheel = true
          this.endCount = 0;
          return
        };
        this.name = 'up'
        this.curIndex --;
      }
    },

    end() {
      console.log('end');
      this.endCount++;
      if(this.endCount === 2) {
        this.canWheel = true;
        this.endCount = 0;
      }
    }
  }
})
