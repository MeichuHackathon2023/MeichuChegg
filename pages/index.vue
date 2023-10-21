<script setup>
const auth = useAuthStore();
definePageMeta({
  layout: "home",
});

// const videoList = [
//   "https://youtube.com/embed/hfjKe3g7fDc?si=sqM-RgxLaiwvVUzT",
//   "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6IjQ3ODYwZDdmLTU0MjQtNDNhNy04YmY2LWVmOTZiNThhNDYxYSIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.pjGZ_5OJ6SF6iQm4ZaKXk8F9NWml4xUNeCX2LX9ogv_yN5Z3WNYSFyV8XMbuMkDueeHv7utm0CzHT8hXgIGeFQ1g43gEvioQBeu7aS6xrQfq81HVLPfiKTBBTEhmroDXSYd_-8VxUtn751SJW3NeOcQ58CpJ1g2hQJ6UyP7w01GKbrvf3M8J2R2Vk9qWp8Haqf9I5YyX9tUYVFKl2TbPiGJYTRfv3Yaz2PJIQRPoIAumqCOHI1hc-I1MRaVnrHXlTrQlgr7P981TZyOdh6u2jIHEsAXqGWOwhUCXk1Oj7EONRK7sRFHAjS7-gdzeXtH3FrzcWweqsaesiX-fVkAC50DqCiwGuF-GsLk-XYouj27F5jQlEZWQ-CqmrnLHZmBd84ShS7Gs4VUqVPS4-1iGpfdOxwzRtJJj_mfiKBa1CYqlIPqxT-Jz-n-mAtdJ-3SQKP9TeIk_XLu-wXtuJCoAD3M1EG1ry07Z-JIxJM-817j0MaoPWPEXTdQSQylmaqkGr6ZvMuc9RiwBq7FWo5dLADL_TaWziocjgupPtzJui6I27XCsld3QKepNyi0iKCndLfRiHFeCFsRaH2YlWKAssuILEt0WoDeHNoOlKdyCNIHhHG46jS-t8Zu8VGtpQXlVttb3able_P1mecw5N0nisNC1aoMxETSg13T-wi5dccA",
//   "https://youtube.com/embed/hfjKe3g7fDc?si=sqM-RgxLaiwvVUzT",
//   "https://youtube.com/embed/hfjKe3g7fDc?si=sqM-RgxLaiwvVUzT",
//   "https://youtube.com/embed/hfjKe3g7fDc?si=sqM-RgxLaiwvVUzT",
//   "https://youtube.com/embed/hfjKe3g7fDc?si=sqM-RgxLaiwvVUzT",
//   "https://youtube.com/embed/hfjKe3g7fDc?si=sqM-RgxLaiwvVUzT",
// ];
const videoList = [
  "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6Ijk4YjY5MGI4LTc4NDEtNGE1Ni04ZTUxLWQ4ZjExZjkyZGM2NyIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.lCd5hqhny2RdTtORK3h21cRtZEdI_m2klbAicqzR6NZJcRVgn4MFo-Is1Yd95jB3ge12i5_q6LyrJdMJCM_44EWTi1lJh4YrYxEidysls4mDSpeUqeBpFy7FPlBeJ18iLoFjRtbCY-Omz6lX2v_EpXRcJIJHM06tixf3AByhMKPVEdqEnH9zbQl02MY9W_5l1q13gzyqOvAuPuJTKDfv-UdPPbUI8ieDgkBl05_hUomUJltKWAIURWSsodT6QX1GkQp6RnsRiXma7vVJ_fB0MY1uvhun6UTflnvqGIbaeLbKNBqcxIy0cuhbmP3uqk86D8MNYFHyyLrcwo_g8B5Xso5Ejs2GWnIkZhJMoIfzJs1sCGUUW29UdbIwwXqeRHSu6OwGtoVVRwL6pbc8k9f9vnAowVS21JC7wtUCTUZVEoRU69x7QfZYyxFk2GI0gSaiyHuaU7T8IMEp9yEuK712yee1qMCgGHD-HR14iukcCazSNP1CbT06ULRtxD-Hwwn6aXabffkbXHBGu68JqHExaWDhgdhbM56C5mOdfDo8BK52w4kdRQcVAYz8WRTwsbwDMqzbGqXoeB4fWz4NJEzJe-WKesGujJcO8HBgGJD5Bq933i71YqKDuSD9Xec9vbMoH1ZDSL2xNILj8lVOwdKntJsKM3heebs4Drjr6ZaxoqA",
  "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6Ijk4YjY5MGI4LTc4NDEtNGE1Ni04ZTUxLWQ4ZjExZjkyZGM2NyIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.lCd5hqhny2RdTtORK3h21cRtZEdI_m2klbAicqzR6NZJcRVgn4MFo-Is1Yd95jB3ge12i5_q6LyrJdMJCM_44EWTi1lJh4YrYxEidysls4mDSpeUqeBpFy7FPlBeJ18iLoFjRtbCY-Omz6lX2v_EpXRcJIJHM06tixf3AByhMKPVEdqEnH9zbQl02MY9W_5l1q13gzyqOvAuPuJTKDfv-UdPPbUI8ieDgkBl05_hUomUJltKWAIURWSsodT6QX1GkQp6RnsRiXma7vVJ_fB0MY1uvhun6UTflnvqGIbaeLbKNBqcxIy0cuhbmP3uqk86D8MNYFHyyLrcwo_g8B5Xso5Ejs2GWnIkZhJMoIfzJs1sCGUUW29UdbIwwXqeRHSu6OwGtoVVRwL6pbc8k9f9vnAowVS21JC7wtUCTUZVEoRU69x7QfZYyxFk2GI0gSaiyHuaU7T8IMEp9yEuK712yee1qMCgGHD-HR14iukcCazSNP1CbT06ULRtxD-Hwwn6aXabffkbXHBGu68JqHExaWDhgdhbM56C5mOdfDo8BK52w4kdRQcVAYz8WRTwsbwDMqzbGqXoeB4fWz4NJEzJe-WKesGujJcO8HBgGJD5Bq933i71YqKDuSD9Xec9vbMoH1ZDSL2xNILj8lVOwdKntJsKM3heebs4Drjr6ZaxoqA",
  "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6Ijk4YjY5MGI4LTc4NDEtNGE1Ni04ZTUxLWQ4ZjExZjkyZGM2NyIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.lCd5hqhny2RdTtORK3h21cRtZEdI_m2klbAicqzR6NZJcRVgn4MFo-Is1Yd95jB3ge12i5_q6LyrJdMJCM_44EWTi1lJh4YrYxEidysls4mDSpeUqeBpFy7FPlBeJ18iLoFjRtbCY-Omz6lX2v_EpXRcJIJHM06tixf3AByhMKPVEdqEnH9zbQl02MY9W_5l1q13gzyqOvAuPuJTKDfv-UdPPbUI8ieDgkBl05_hUomUJltKWAIURWSsodT6QX1GkQp6RnsRiXma7vVJ_fB0MY1uvhun6UTflnvqGIbaeLbKNBqcxIy0cuhbmP3uqk86D8MNYFHyyLrcwo_g8B5Xso5Ejs2GWnIkZhJMoIfzJs1sCGUUW29UdbIwwXqeRHSu6OwGtoVVRwL6pbc8k9f9vnAowVS21JC7wtUCTUZVEoRU69x7QfZYyxFk2GI0gSaiyHuaU7T8IMEp9yEuK712yee1qMCgGHD-HR14iukcCazSNP1CbT06ULRtxD-Hwwn6aXabffkbXHBGu68JqHExaWDhgdhbM56C5mOdfDo8BK52w4kdRQcVAYz8WRTwsbwDMqzbGqXoeB4fWz4NJEzJe-WKesGujJcO8HBgGJD5Bq933i71YqKDuSD9Xec9vbMoH1ZDSL2xNILj8lVOwdKntJsKM3heebs4Drjr6ZaxoqA",
  "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6Ijk4YjY5MGI4LTc4NDEtNGE1Ni04ZTUxLWQ4ZjExZjkyZGM2NyIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.lCd5hqhny2RdTtORK3h21cRtZEdI_m2klbAicqzR6NZJcRVgn4MFo-Is1Yd95jB3ge12i5_q6LyrJdMJCM_44EWTi1lJh4YrYxEidysls4mDSpeUqeBpFy7FPlBeJ18iLoFjRtbCY-Omz6lX2v_EpXRcJIJHM06tixf3AByhMKPVEdqEnH9zbQl02MY9W_5l1q13gzyqOvAuPuJTKDfv-UdPPbUI8ieDgkBl05_hUomUJltKWAIURWSsodT6QX1GkQp6RnsRiXma7vVJ_fB0MY1uvhun6UTflnvqGIbaeLbKNBqcxIy0cuhbmP3uqk86D8MNYFHyyLrcwo_g8B5Xso5Ejs2GWnIkZhJMoIfzJs1sCGUUW29UdbIwwXqeRHSu6OwGtoVVRwL6pbc8k9f9vnAowVS21JC7wtUCTUZVEoRU69x7QfZYyxFk2GI0gSaiyHuaU7T8IMEp9yEuK712yee1qMCgGHD-HR14iukcCazSNP1CbT06ULRtxD-Hwwn6aXabffkbXHBGu68JqHExaWDhgdhbM56C5mOdfDo8BK52w4kdRQcVAYz8WRTwsbwDMqzbGqXoeB4fWz4NJEzJe-WKesGujJcO8HBgGJD5Bq933i71YqKDuSD9Xec9vbMoH1ZDSL2xNILj8lVOwdKntJsKM3heebs4Drjr6ZaxoqA",
];

const user = auth.user;

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
  <!-- <pre>{{ user }}</pre> -->
  <div class="snap-y snap-mandatory h-full overflow-y-scroll flex flex-col">
    <section
      v-for="x in videoList"
      ref="section1"
      class="snap-always snap-center basis-full shrink-0 relative"
    >
      <iframe
        class="w-full h-full"
        :src="x"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
      <!-- <iframe
        src="https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6Ijk4YjY5MGI4LTc4NDEtNGE1Ni04ZTUxLWQ4ZjExZjkyZGM2NyIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.lCd5hqhny2RdTtORK3h21cRtZEdI_m2klbAicqzR6NZJcRVgn4MFo-Is1Yd95jB3ge12i5_q6LyrJdMJCM_44EWTi1lJh4YrYxEidysls4mDSpeUqeBpFy7FPlBeJ18iLoFjRtbCY-Omz6lX2v_EpXRcJIJHM06tixf3AByhMKPVEdqEnH9zbQl02MY9W_5l1q13gzyqOvAuPuJTKDfv-UdPPbUI8ieDgkBl05_hUomUJltKWAIURWSsodT6QX1GkQp6RnsRiXma7vVJ_fB0MY1uvhun6UTflnvqGIbaeLbKNBqcxIy0cuhbmP3uqk86D8MNYFHyyLrcwo_g8B5Xso5Ejs2GWnIkZhJMoIfzJs1sCGUUW29UdbIwwXqeRHSu6OwGtoVVRwL6pbc8k9f9vnAowVS21JC7wtUCTUZVEoRU69x7QfZYyxFk2GI0gSaiyHuaU7T8IMEp9yEuK712yee1qMCgGHD-HR14iukcCazSNP1CbT06ULRtxD-Hwwn6aXabffkbXHBGu68JqHExaWDhgdhbM56C5mOdfDo8BK52w4kdRQcVAYz8WRTwsbwDMqzbGqXoeB4fWz4NJEzJe-WKesGujJcO8HBgGJD5Bq933i71YqKDuSD9Xec9vbMoH1ZDSL2xNILj8lVOwdKntJsKM3heebs4Drjr6ZaxoqA"
        width="640"
        height="360"
        allow="autoplay; encrypted-media; clipboard-write"
        frameborder="0"
        allowfullscreen
      ></iframe> -->
    </section>
    <!-- <section
      ref="section2"
      class="snap-stop snap-center basis-full shrink-0 relative"
    >
      <iframe
        class="w-full h-full"
        src="https://youtube.com/embed/hfjKe3g7fDc?si=sqM-RgxLaiwvVUzT"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      >
      </iframe>
    </section> -->
  </div>
</template>

<style scoped></style>
