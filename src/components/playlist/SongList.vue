<template>
  <div>
    <van-cell
      style="text-align: left;"
      center
      @click="play(-1)"
    >
      <template #icon>
        <van-icon
          name="play-circle"
          color="#ff3024"
          class="small-play-icon"
          style="padding-right: 2vw;"
        />
      </template>
      <template #title>
        <span class="bold">播放全部</span>
      </template>
    </van-cell>
    <van-cell
      v-for="(item, index) in props.songList"
      :key="item.id"
      style="text-align: left;"
      center
      @click="play(index)"
    >
      <template #title>
        <span
          class="medium-font text-line-one"
          style="font-weight: 500;"
        >
          {{ item.name }}
        </span>
      </template>
      <template #icon>
        <span class="index">{{ index + 1 }}</span>
      </template>
      <template #label>
        <div>
          <svg
            v-if="props.privileges[index].maxbr === 999000"
            t="1647653055755"
            class="micro-icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="13133"
          ><path
            d="M411.82958 487.166405c-0.548492-0.042979-1.032516-0.303922-1.581008-0.303922l-90.782609 0c-19.49603 0-35.325553-15.678074-35.325553-34.914184s15.829524-34.892695 35.325553-34.892695c0.724501 0 1.339508-0.346901 2.020006-0.411369 0.703011 0.064468 1.315972 0.411369 2.041496 0.411369l135.110187 0c12.140505 0 21.954011-9.714246 21.954011-21.686928 0-11.969613-9.813506-21.684882-21.954011-21.684882L323.526441 373.683794c-0.725524 0-1.339508 0.325411-2.041496 0.38988-0.681522-0.064468-1.295506-0.38988-2.020006-0.38988-43.691081 0-79.235622 35.109636-79.235622 78.263481 0 40.030715 30.692023 72.776514 69.992097 77.352739 1.559519 0.346901 2.986007 0.933255 4.63353 0.933255l93.834108 0c19.47454 0 35.325553 15.656585 35.325553 34.892695 0 19.234063-15.851013 34.892695-35.325553 34.892695L262.185374 600.018659c-12.141528 0-21.956058 9.714246-21.956058 21.684882 0 11.992125 9.813506 21.686928 21.956058 21.686928l150.851707 0c1.557472 0 2.919493-0.564865 4.368494-0.867764 39.563064-4.358261 70.5191-37.190017 70.5191-77.395718C487.924675 523.033287 454.025611 488.834394 411.82958 487.166405z"
            fill="#ff3024"
            p-id="13134"
          ></path><path
            d="M773.813914 615.112426c7.397481-10.317996 11.782348-22.796192 11.782348-36.291554L785.596262 436.777785c0-35.304064-29.616528-63.907519-66.172095-63.907519L588.419484 372.870266c-36.534078 0-66.172095 28.603455-66.172095 63.907519l0 142.042063c0 35.282574 29.639041 63.907519 66.172095 63.907519l131.004683 0c6.144954 0 11.976776-1.069355 17.620309-2.582825l13.56904 13.301957c4.259 4.206812 9.858532 6.310729 15.456017 6.310729 5.64251 0 11.30651-2.146896 15.587-6.4192 8.540514-8.500605 8.497535-22.228257-0.130983-30.66337L773.813914 615.112426zM741.686193 578.819848c0 1.394766-0.574075 2.617617-0.86367 3.936659l-24.019043-23.555485c-8.563026-8.414647-22.50455-8.370645-31.045063 0.12996-8.53949 8.500605-8.496511 22.228257 0.132006 30.66337l9.54847 9.361205L588.419484 599.355557c-12.272511 0-22.262026-9.215896-22.262026-20.535709L566.157457 436.777785c0-11.319813 9.989515-20.535709 22.262026-20.535709l131.004683 0c12.272511 0 22.262026 9.215896 22.262026 20.535709L741.686193 578.819848z"
            fill="#ff3024"
            p-id="13135"
          ></path><path
            d="M865.968777 252.511038 158.029176 252.511038c-52.202942 0-94.237291 42.34748-94.237291 94.585215l0 329.806471c0 52.115961 42.190915 94.585215 94.237291 94.585215l707.940624 0c52.204989 0 94.238314-42.34748 94.238314-94.585215L960.208115 347.096253C960.208115 294.981315 918.015154 252.511038 865.968777 252.511038zM913.028583 676.902724c0 26.139334-21.110807 47.405683-47.058782 47.405683L158.029176 724.308407c-25.947975 0-47.057759-21.266349-47.057759-47.405683L110.971417 347.096253c0-26.139334 21.10876-47.405683 47.057759-47.405683l707.940624 0c25.947975 0 47.058782 21.266349 47.058782 47.405683L913.028583 676.902724z"
            fill="#ff3024"
            p-id="13136"
          ></path></svg>
          <span>
            <span v-if="item.ar.length > 0">
              <span
                v-for="(ar, index2) in item.ar"
                :key="ar.id"
              >
                {{ ar.name }}
                <span v-if="index2 + 1 !== item.ar.length">/</span>
              </span>
            </span>
            <span>
              -{{ item.al.name }}
            </span>
          </span>
        </div>
      </template>
      <template #right-icon>
        <!-- <van-icon
          name="play-circle-o"
          class="play-icon"
        /> -->
      </template>
    </van-cell>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSearchStore } from '@/store/search'
import { useSongStore } from '@/store/song'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  songList: {
    type: Array as any,
    default: () => {
      return []
    }
  },
  privileges: {
    type: Array as any,
    default: () => {
      return []
    }
  }
})
const songStore = useSongStore()

const play = function (index: number) {
  songStore.playingSongList = props.songList
  songStore.playingIndex = 0
  if (index !== -1) {
    songStore.playingIndex = index
    if (songStore.playStatus && songStore.playingId === songStore.playingSongList[songStore.playingIndex].id) {
      router.push({ path: '/player', query: { id: songStore.playingId } })
    }
  }
  songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
  songStore.showPlayer = true
  setTimeout(() => {
    songStore.playStatus = false
  }, 200)
  setTimeout(() => {
    songStore.playStatus = true
  }, 200)
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.index {
  color: #a7a7a7;
  padding-right: 4vw;
}
</style>
