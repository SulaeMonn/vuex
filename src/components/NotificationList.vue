<template>
  <div class="notification-list">
    <NotificationMessage
      v-for="noti in notification"
      :key="noti.id"
      :notification="noti"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NotificationMessage from "./NotificationMessage.vue";
export default {
  components: { NotificationMessage },
  computed: mapState(["notification"]),
};
</script>

<style>
.notification-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
