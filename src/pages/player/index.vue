<template>
  <div
    class="background"
    :style="`background: gainsboro url(${getPicURL}) center;`"
  >
  </div>
  <div class="body">
    <div class="flex-row header align-items-center margin-row-4">
      <div>
        <svg
          t="1647656853325"
          class="minier-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1919"
          @click="onClickLeft"
        ><path
          d="M890.335385 330.911222c-12.576374-12.416396-32.800753-12.352748-45.248112 0.192662L517.248327 661.951458 184.831931 332.512727c-12.576374-12.447359-32.800753-12.352748-45.280796 0.192662-12.447359 12.576374-12.352748 32.831716 0.192662 45.280796l353.311652 350.112082c0.543583 0.543583 1.247144 0.672598 1.792447 1.183497 0.127295 0.127295 0.159978 0.287273 0.287273 0.416288 6.239161 6.175514 14.399785 9.280473 22.527725 9.280473 8.224271 0 16.479505-3.168606 22.720387-9.471415l350.112082-353.311652C902.975407 363.615643 902.880796 343.360301 890.335385 330.911222z"
          p-id="1920"
          fill="#ffffff"
        ></path></svg>
      </div>
      <div class="flex-column flex-grow-1">
        <span
          class="big-font"
          style="color: white;"
        >{{ songStore.playingSongDetail.name }}</span>
        <span
          v-if="songStore.playingSongDetail.ar && songStore.playingSongDetail.ar.length > 0"
          class="small-font"
          style="color: #666660;"
        >{{ songStore.playingSongDetail.ar.map((x: any) => {return x.name}).join('/') }}</span>
        <span
          v-else-if="songStore.playingSongDetail.artists && songStore.playingSongDetail.artists.length > 0"
          class="small-font"
          style="color: #666660;"
        >{{ songStore.playingSongDetail.artists.map((x: any) => {return x.name}).join('/') }}</span>
      </div>
      <div>
        <svg
          t="1647597784311"
          class="micro-icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4586"
        ><path
          d="M882.758621 133.674884C882.758621 59.84828 822.91034 0 749.083736 0 675.25715 0 615.40887 59.84828 615.40887 133.674884 615.40887 163.358402 625.152318 191.656395 642.813352 214.773283L670.872117 193.336726 648.314739 166.170836 253.911693 493.666092 276.469054 520.831982 302.371681 496.834595C277.256669 469.725608 241.995388 453.990153 204.295574 453.990153 130.46897 453.990153 70.62069 513.838433 70.62069 587.66502 70.62069 661.491624 130.46897 721.339904 204.295574 721.339904 255.555319 721.339904 301.619094 692.208675 324.036714 647.136344L276.646223 663.002394 706.082022 877.440106 721.856794 845.849335 690.37312 829.861888C680.932829 848.452414 675.940882 869.068818 675.940882 890.325116 675.940882 964.15172 735.789162 1024 809.615766 1024 883.442353 1024 943.290633 964.15172 943.290633 890.325116 943.290633 874.050807 940.36533 858.125365 934.723584 843.16446L868.645076 868.0826C871.294817 875.109252 872.669943 882.595452 872.669943 890.325116 872.669943 925.14899 844.439623 953.37931 809.615766 953.37931 774.791892 953.37931 746.561571 925.14899 746.561571 890.325116 746.561571 880.245089 748.902894 870.575616 753.340487 861.836782L769.436089 830.140063 737.631567 814.258564 308.195769 599.820853 276.554929 584.02108 260.805279 615.686903C250.212352 636.984797 228.494795 650.719214 204.295574 650.719214 169.4717 650.719214 141.241379 622.488894 141.241379 587.66502 141.241379 552.841163 169.4717 524.610842 204.295574 524.610842 222.12269 524.610842 238.680594 531.99985 250.566444 544.829369L273.29589 569.363385 299.026432 547.997855 693.429478 220.502616 719.514606 198.84265 698.930882 171.900169C690.596687 160.991373 686.029559 147.727007 686.029559 133.674884 686.029559 98.85101 714.25988 70.62069 749.083736 70.62069 783.90761 70.62069 812.137931 98.85101 812.137931 133.674884 812.137931 148.208022 807.249885 161.899255 798.379608 172.996785L853.543883 217.089695C872.331935 193.584128 882.758621 164.379366 882.758621 133.674884ZM749.083736 196.729062C729.149334 196.729062 710.818745 187.460449 698.930882 171.900169L642.813352 214.773283C667.922573 247.639305 706.904064 267.349751 749.083736 267.349751 790.225902 267.349751 828.357809 248.599782 853.543883 217.089695L798.379608 172.996785C786.455411 187.915034 768.530291 196.729062 749.083736 196.729062ZM337.970441 587.66502C337.970441 553.551854 325.093782 521.360666 302.371681 496.834595L250.566444 544.829369C261.309069 556.424898 267.349751 571.526356 267.349751 587.66502 267.349751 597.565263 265.091478 607.069184 260.805279 615.686903L324.036714 647.136344C333.156105 628.801148 337.970441 608.540036 337.970441 587.66502ZM809.615766 756.650249C758.753986 756.650249 712.986006 785.330865 690.37312 829.861888L753.340487 861.836782C764.027215 840.791658 785.603302 827.270938 809.615766 827.270938 836.08553 827.270938 859.461862 843.730308 868.645076 868.0826L934.723584 843.16446C915.252259 791.529949 865.714547 756.650249 809.615766 756.650249Z"
          p-id="4587"
          fill="#fff"
        ></path></svg>
      </div>
    </div>
    <PlayerRecordVue
      v-if="!showLyrics"
      ref="refRecord"
      class="record"
      :rotate="songStore.playStatus"
      :image-src-list="songStore.misicPicList"
      :initial-swipe="songStore.playingIndex"
      @on-change="onChange"
      @click="showLyrics = !showLyrics"
    ></PlayerRecordVue>
    <LyricsVue
      v-else
      class="lyrics"
      :lyrics="songStore.lyrics"
      :current-line="currentLine"
      @click="showLyrics = !showLyrics"
      @update:line="updateLine"
    ></LyricsVue>
    <PlayerProgressVue
      class="progress"
      :current-time="songStore.currentPlayTime"
      :duration="songStore.playerRef.duration"
      @update:current-time="updateCurrentTime"
    ></PlayerProgressVue>
    <PlayerButtons
      class="buttons"
      @next="next"
      @play="play"
      @prev="prev"
      @show-list="showList"
    ></PlayerButtons>
  </div>
  <div style="display: none;">
    <MiniPlayerVue ref="refPlayer"></MiniPlayerVue>
  </div>
  <PlayingSongListVue @play="swipeTo"></PlayingSongListVue>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useSongStore } from 'store/song'
import { computed, onMounted, ref, watch } from 'vue'
import { getSongDetail } from '@/api/play'
import { onClickLeft } from '@/utils/router'
import PlayerRecordVue from 'components/player/Record.vue'
import PlayerProgressVue from 'components/player/Progress.vue'
import PlayerButtons from 'components/player/Buttons.vue'
import PlayingSongListVue from 'components/PlayingSongList.vue'
import LyricsVue from '@/components/player/Lyrics.vue'
import { lyricsType } from '@/types/types'
const router = useRouter()
const route = useRoute()
const songStore = useSongStore()
const refPlayer: any = ref(null)
const refRecord: any = ref(null)
const showLyrics = ref(false)
const currentLine = ref(0)
onMounted(() => {
  if (!songStore.playingSongDetail.al) {
    router.push('home')
  }
})

const getPicURL = computed(() => {
  return songStore.misicPicList[songStore.playingIndex]
})

watch(() => songStore.currentPlayTime, async (newValue) => {
  for (let i = songStore.lyrics.length - 1; i >= 0; i--) {
    if (newValue > songStore.lyrics[i].time) {
      if (songStore.lyrics[i].content) {
        currentLine.value = i
        break
      }
    }
  }
})

const prev = function () {
  showLyrics.value = false
  refRecord.value.prev()
  // refPlayer.value.getPrevSong()
}
const next = function () {
  if (showLyrics.value) {
    refPlayer.value.getNextSong()
  } else {
    refRecord.value.next()
  }
}
const play = function () {
  refPlayer.value.play()
}
const showList = function () {
  songStore.showPopup = true
}

const swipeTo = function (index: number) {
  refRecord.value.swipeTo(index)
  refPlayer.value.playByIndex(index)
}

const onChange = function (index: number) {
  setTimeout(() => {
    refPlayer.value.playByIndex(index)
  }, 500)
}

const updateCurrentTime = function (percentage: number) {
  songStore.playerRef.currentTime = (percentage / 100) * songStore.playerRef.duration
}

const updateLine = function (index: number) {
  currentLine.value = index
  songStore.playerRef.currentTime = songStore.lyrics[index].time
}

</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.background {
  height: 100%;
  width: 100%;
  background-size: cover;
  -webkit-filter: brightness(0.2) saturate(2) blur(20px);
  -moz-filter: brightness(0.2) saturate(2) blur(20px);
  -ms-filter: brightness(0.2) saturate(2) blur(20px);
  filter: brightness(0.2) saturate(2) blur(20px);
  z-index: -1;
}

.header {
  height: 8vh;
  width: calc(100vw - 8%);
}

.body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.record {
  position: relative;
  top: 10vh;
}

.lyrics {
  position: relative;
  top: 2vh;
}

.progress {
  position: absolute;
  bottom: 12vh;
}

.buttons {
  position: absolute;
  bottom: 2vh;
  width: 60vw;
  left: 20vw;
}
</style>
