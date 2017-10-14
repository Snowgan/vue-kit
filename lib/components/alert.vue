<template lang="pug">
  div.alert(role="alert" :class="classArr" v-if="showAlert")
    button.close(type="button" aria-label="Close" v-if="dismissible" @click="dismiss")
      span(aria-hidden="true") &times;
    slot
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'info',
      },
      duration: {
        type: Number,
        defualt: 0,
      },
      dismissible: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        dismissTimerID: null,
        dismissed: false,
      };
    },
    computed: {
      showAlert() {
        return this.show && !this.dismissed;
      },
      classArr() {
        return [`alert-${this.type}`, this.dismissible ? 'alert-dismissible' : ''];
      },
    },
    watch: {
      show(newVal) {
        if (newVal) {
          this.clearTimer();
          this.setTimer();
          this.dismissed = false;
        } else {
          this.clearTimer();
        }
      },
    },
    methods: {
      dismiss() {
        this.clearTimer();
        this.dismissed = true;
        this.$emit('dismissed');
      },
      setTimer() {
        if (this.duration > 0 && this.show) {
          this.dismissTimerID = setTimeout(this.dismiss, this.duration * 1000);
        }
      },
      clearTimer() {
        if (this.dismissTimerID) {
          clearTimeout(this.dismissTimerID);
          this.dismissTimerID = null;
        }
      }
    },
    mounted() {
      if (this.duration > 0 && this.show) {
        this.dismissTimerID = setTimeout(this.dismiss, this.duration * 1000);
      }
    },
    destroyed() {
      this.clearTimer();
    },
  }
</script>

