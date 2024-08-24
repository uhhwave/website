<template>
  <div
    class="animate__animated animate__fadeIn flex flex-col  min-h-screen  items-center justify-between p-16">
    <div class="gap-2 mb-4">
    <h1 class="text-4xl font-white">hi, im wave~</h1>
    <h6 class="text-2xl font-thin font-white"> i make stuff — stream short n' sweet</h6>
    </div>
    <!--<v-btn color="pink-lighten-4" style="color: #65002f !important; font-size: 14px !important;" v-if="showButton" class="text-lowercase text-body-1" variant="elevated" @click="showImage = true; showButton = false">
      poosh 4 fun
    </v-btn>-->
    <div class="animate__animated animate__fadeIn animate__slow grid sm:grid-flow-row md:grid-flow-col lg:grid-flow-col flex-1 ga-2">
      <div class="img" style="
      justify-content: 'center';
      align-items: 'center';
      height: 100%;
      width: 100%;

    ">
        <NuxtImg preload class="rounded-xl" src='/janet.jpeg' alt="janet" width=500 height=500 loading="lazy" />

      </div>
      <div class="sc" style="
      justify-content: 'center';
      align-items: 'center';
      height: 100%;
      width: 100%;
    ">
        <iframe allow="autoplay *; fullscreen *; clipboard-write" frameborder="0" height="450" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/short-n-sweet/1750307020"></iframe>
        <!--<iframe allow="autoplay *; fullscreen *; clipboard-write" frameborder="0" height="100%" style="width:100%;max-width:660px;overflow:hidden;border-radius:10px;" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/juna/1742301413?i=1742301428"></iframe>-->
       <!-- <iframe class="rounded-xl" width="100%" height="100%" scrolling="no" frameborder="yes" allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1867340106&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>-->
        <!--<div
        style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: 'Inter Tight', Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;">
        <a href="https://soundcloud.com/ccottrill" title="Clairo" target="_blank"
          style="color: #cccccc; text-decoration: none;">Clairo</a> · <a href="https://soundcloud.com/ccottrill/juna"
          title="Juna" target="_blank" style="color: #cccccc; text-decoration: none;">Juna</a></div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import 'animate.css';
export default {

}
</script>