<template>
  <div v-auto-animate class="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 class="text-6xl font-thin font-white">hi~</h1>
    <v-btn color="pink-lighten-4" style="color: #65002f !important; font-size: 14px !important;" v-if="showButton" class="text-lowercase text-body-1" variant="elevated" @click="showImage = true; showButton = false">
      poosh 4 fun
    </v-btn>
    <div v-if="showImage" style="display: flex; justify-content: center; align-items: center; height: 60vh">
      <NuxtImg preload class="rounded-xl" src='/cupcakke.jpg' alt="Shibe" width=500 height=500 loading="lazy" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showImage: false,
      showButton: true
    }
  }
}
</script>
