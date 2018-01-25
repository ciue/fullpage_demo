<template>
  <div class="project">
      <p>首屏动画效果</p>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'AvueProject'.split('').concat(['<br>','{','<br>',''])
            }
        }
    }
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

