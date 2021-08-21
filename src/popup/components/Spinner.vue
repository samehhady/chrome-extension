<template>
  <div>
    <div class='wheel-wrapper'></div>
    <div class='row'>
      <div v-for='emoji in password' class='emoji-input col-3 text-center pb-3'>
        <img class="emoji-icon" v-bind:src='getIcon(emoji)' width='30' height='30' />
      </div>
    </div>
  </div>
</template>
<script>
import RouletteWheel from '../../assets/roulette-wheel/js/roulette-wheel'
import extentionSettings from '../../extention-settings'

export default {
  data() {
    return {
      password: [],
    }
  },
  methods: {
    getIcon(label) {
      return extentionSettings.items.find((s) => s.label === label).icon
    },
    reset(event) {
      this.password = []
      this.$emit('password', this.password)
    },
  },
  mounted() {
    window.wheel = new RouletteWheel(document.querySelector('.wheel-wrapper'))
    window.wheel.init({
      ...extentionSettings,
      onRest: e => {
        if (this.password.length <= 3) {
          this.password.push(e.item.label);
          this.$emit('password', this.password)
        }
      },
    })
  },
}
</script>
<style>
.wheel-wrapper{
  height:300px;
}

.emoji-input{
  border-bottom:1px solid #ccc;
}

.emoji-icon{
  box-shadow:none;
}
</style>
