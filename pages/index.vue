<script setup>
import { useApiFetch } from "../composables/useApiFetch";

const auth = useAuthStore();
const videos = auth.videos;
definePageMeta({
  layout: "home",
});

const videoList = ref([
  // "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6Ijk4YjY5MGI4LTc4NDEtNGE1Ni04ZTUxLWQ4ZjExZjkyZGM2NyIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.lCd5hqhny2RdTtORK3h21cRtZEdI_m2klbAicqzR6NZJcRVgn4MFo-Is1Yd95jB3ge12i5_q6LyrJdMJCM_44EWTi1lJh4YrYxEidysls4mDSpeUqeBpFy7FPlBeJ18iLoFjRtbCY-Omz6lX2v_EpXRcJIJHM06tixf3AByhMKPVEdqEnH9zbQl02MY9W_5l1q13gzyqOvAuPuJTKDfv-UdPPbUI8ieDgkBl05_hUomUJltKWAIURWSsodT6QX1GkQp6RnsRiXma7vVJ_fB0MY1uvhun6UTflnvqGIbaeLbKNBqcxIy0cuhbmP3uqk86D8MNYFHyyLrcwo_g8B5Xso5Ejs2GWnIkZhJMoIfzJs1sCGUUW29UdbIwwXqeRHSu6OwGtoVVRwL6pbc8k9f9vnAowVS21JC7wtUCTUZVEoRU69x7QfZYyxFk2GI0gSaiyHuaU7T8IMEp9yEuK712yee1qMCgGHD-HR14iukcCazSNP1CbT06ULRtxD-Hwwn6aXabffkbXHBGu68JqHExaWDhgdhbM56C5mOdfDo8BK52w4kdRQcVAYz8WRTwsbwDMqzbGqXoeB4fWz4NJEzJe-WKesGujJcO8HBgGJD5Bq933i71YqKDuSD9Xec9vbMoH1ZDSL2xNILj8lVOwdKntJsKM3heebs4Drjr6ZaxoqA",
  // "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6ImNiMDU0ZDdjLWJlZDEtNDIxNy04MWNiLTJlZGQxYWRhN2JmNiIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.FH9srK4A-Fiv9cBTtEUxkasCXKzc0RbKF_X35IjiaR_gTxuDG8n-s_rP-1jrDVr32OqlhQLNh2e9BcJD-xjMwCtl-rMq6VKGjFIg20ohccqKDFTCvAB_6TH_zwCio9UejSsl4bpShbWfrTa0W5ctUEw10lHJ0zLJGpSpPp6rvci3BRbNrjETFF7FhAHQqyvqQRcvyVPq-FnKscb_xx5porXl1dbZ-xS9hhnwNVpaOStkzNtNQ2cALNuw9FZ6nA5VUSWJbOqBeYIga2ZmaZ4YofZRnNHvnYS2Txzlgz7V7EHNAr8Sg0gQZi9Zh6tfgUOZub_PeDmT2r01d90cOURtn5LpOOtMyWKFGrtmDIt4rw1sqPNrMZgRX-rc3Ngq3MqYVr7XKJrpRsG3PM8B9w47XmaiEYRZUladz4qCDfdiYH4QKDbSyaaf79ZL5cHkVkGZOgZ7Nj03VMGWks0husmilMaf5OhGt476hcC3Y_5HSnHR01xsIsDMrXMTip0lDosfUcl_nR7Xle8-0yvBCQySdWQfgVZ610kIDdugiiXIEuI7cS8hXKjp_g39VGQMw09wyvLbx3yX3-hsv8TNYydbyi-_lHwDQ8P93NTVtJSQjno782HGWEZWqC39aKbUjsPlhCBy_bpyCkX_FfCldDV_dQjEQ7Xouh8bKDAjOxWcu3g",
]);

console.log("at a homePage", videoList.value);
onMounted(() => {
  videoList.value = videos.map(({ embedLink }) => embedLink);
});

const user = auth.user;
const showAddPlayList = ref(false);

const likeVideo = () => {};
const toggleAddPlayList = () => {
  showAddPlayList.value = !showAddPlayList.value;
};

onMounted(() => {
  window.addEventListener("message", (event) => {
    if (event.data.command === "ping") {
      Array.from(document.querySelectorAll("iframe")).forEach((iframe) =>
        iframe?.contentWindow?.postMessage({ command: "pong" }, "*")
      );
    }
  });
});
</script>

<template>
  <div class="snap-y snap-mandatory h-full overflow-y-scroll flex flex-col">
    <section
      v-for="x in videoList"
      ref="section1"
      class="snap-always snap-center basis-full shrink-0 relative"
    >
      <playpopup v-if="showAddPlayList" class="z-15" />
      <div
        class="absolute space-y-4 right-2 top-[35vh] p-2 z-20 bg-white rounded-2xl"
      >
        <div @click="likeVideo">
          <img class="w-5 h-5" src="/heart.svg" alt="" />
        </div>
        <div @click="toggleAddPlayList">
          <img class="w-5 h-5" src="/addplaylist.svg" alt="" />
        </div>
        <div>
          <img class="w-5 h-5" src="/dialog.svg" alt="" />
        </div>
      </div>
      <iframe
        class="w-full h-full"
        :src="x"
        title="YouTube video player"
        frameborder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
    </section>
  </div>
</template>

<style scoped></style>
