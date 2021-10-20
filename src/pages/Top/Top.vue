<template>
  <div class="top">
      <div class="arwes">
        <transition name="fade">
          <div class="sss" v-if="show"></div>
        </transition>
      </div>
  </div>
</template>

<script>
export default {
  name: "Top",
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true;
  }
}
</script>

<style src="./Top.scss" lang="scss" scoped/>