<template>
  <div
    :class="typeClass"
    class="alert alert-dismissible fade show"
    role="alert"
  >
    <button type="button" data-dismiss="alert" aria-label="Close" class="close">
      <span aria-hidden="true">&times;</span>
    </button>
    {{ notification.message }}
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["notification"],
  data() {
    return {
      timeout: null,
    };
  },
  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    },
  },
  methods: {
    ...mapActions(["removeNotification"]),
  },
  created() {
    this.timeout = setTimeout(() => {
      this.removeNotification(this.notification);
    }, 3000);
  },
  beforeDestroy() {
    clearTimeout(this.timeOut);
  },
};
</script>

<style></style>
