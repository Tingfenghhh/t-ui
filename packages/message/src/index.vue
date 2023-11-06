<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { MESSAGE_STYLE, MESSAGE_TIMEOUT } from "./enum/index";
import Ticon from "../../icon";

interface TMessageProps {
  text: string;
  type?: string;
  duration?: number;
  timeOut?: number;
}

const props = withDefaults(defineProps<TMessageProps>(), {
  type: "info",
  duration: 3000,
  timeOut: MESSAGE_TIMEOUT,
});

// 组件状态
const isShow = ref<boolean>(false);

// 注册定时器控制组件的消失
onMounted(() => {
  console.log("props", props);
  isShow.value = true;
  setTimeout(() => {
    isShow.value = false;
  }, props.timeOut);
});
</script>

<template>
  <transition name="fade">
    <div class="t-message" :style="MESSAGE_STYLE[props.type]" v-if="isShow">
      <Ticon
        :name="MESSAGE_STYLE[props.type].icon"
        :color="MESSAGE_STYLE[props.type].color"
        :size="18"
      />
      <span class="t-message-text">{{ props.text ?? "TMessage组件" }}</span>
    </div>
  </transition>
</template>

<style lang="less" scoped>
@import url("./style/index.less");
.t-message {
  min-width: 120px;
  height: 30px;
  color: black;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -60px;
  top: 25px;
  margin-bottom: 15px;
  cursor: pointer;
  border: 1px solid;

  .t-message-text {
    color: black !important;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
