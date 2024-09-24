<template>
  <v-app>
    <v-main>
      <AppHeader />
      <router-view />
      <AppFooter />
    </v-main>
  </v-app>
</template>
<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from '@/components/AppFooter.vue';
export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
<style></style>