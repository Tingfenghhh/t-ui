<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import Block from "./components/block.vue";
import Separator from "./components/separator.vue";
import SwitchNumber from "./components/types/numbers";

type ClockType = [string, string?];

interface IClock {
  hour: ClockType;
  minute: ClockType;
  second: ClockType;
}

const clock = ref<IClock>({
  hour: ["0", "0"],
  minute: ["0", "0"],
  second: ["0", "0"],
} as IClock);

let interval: any = null;

onMounted(() => {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    const date = new Date();
    let hour = date.getHours().toString().split("");
    let minute = date.getMinutes().toString().split("");
    let second = date.getSeconds().toString().split("");
    if (hour.length === 1) {
      hour = ["0", hour[0]];
    }
    if (minute.length === 1) {
      minute = ["0", minute[0]];
    }
    if (second.length === 1) {
      second = ["0", second[0]];
    }

    clock.value = {
      hour: [hour[0], hour[1]],
      minute: [minute[0], minute[1]],
      second: [second[0], second[1]],
    };
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>

<template>
  <transition name="fade-in" mode="out-in">
    <div class="tclock_div">
      <Block :separators="4" :number="SwitchNumber(clock.hour[0])"> </Block>
      <Block :separators="4" :number="SwitchNumber(clock.hour[1] || '0')">
      </Block>
      <Separator :separators="2" />
      <Block :separators="4" :number="SwitchNumber(clock.minute[0])"> </Block>
      <Block :separators="4" :number="SwitchNumber(clock.minute[1] || '0')">
      </Block>
      <Separator :separators="2" />
      <Block :separators="4" :number="SwitchNumber(clock.second[0])"> </Block>
      <Block :separators="4" :number="SwitchNumber(clock.second[1] || '0')">
      </Block>
    </div>
  </transition>
</template>

<style lang="less" scoped>
.tclock_div {
  background-color: #0e0e0e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 1s ease-out;
}
</style>
