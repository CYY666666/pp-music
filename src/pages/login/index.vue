<template>
  <div>
    <div class="grid bg-red box">
      <div class="logo">
        <img
          alt="Vue logo"
          src="/src/assets/logo.png"
          height="82"
          width="82"
        />
      </div>
      <div class="button2">
        <Button
          round
          type="primary"
          plain
          hairline
          color="#db2c1f"
          class="login-button"
          @click="mobileLogin"
        >
          手机号登录
        </Button>
      </div>
      <!-- <div class="button2">
        <Button
          round
          type="primary"
          color="#db2c1f"
          class="login-button"
        >
          立即体验
        </Button>
      </div> -->
      <div class="agree">
        <van-checkbox
          v-model="checked"
          icon-size="12px"
          checked-color="#db2c1f"
          shape="square"
        >
          <div class="agree-text">
            <span>
              同意
            </span>
            <span>
              《用户协议》
            </span>
            <span>
              《隐私政策》
            </span>
            <span>
              《儿童隐私协议》
            </span>
          </div>
        </van-checkbox>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Checkbox, Toast, Button } from 'vant'
import { ref } from 'vue'

const router = useRouter()
const checked = ref(false)
const mobileLogin = function () {
  if (!checked.value) {
    return Toast('请先同意协议')
  } else {
    router.push('mobile')
  }
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.box {
  grid-template-rows: repeat(20, 5%);
  justify-items: center;
}

.logo {
  grid-row-start: 6;
}

.button1 {
  grid-row-start: 15;
  justify-self: stretch;
}

.button2 {
  grid-row-start: 17;
  justify-self: stretch;
}

.agree {
  grid-row-start: 19;
  font-size: 12px;
}

.agree-text {
  position: relative;
  top: 2px;
}
</style>
