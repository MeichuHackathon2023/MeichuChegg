<template>
  <div class="p-3">
    <div class="flex justify-around">
      <div class="basis-[40%] p-2">
        <img src="/person.svg" alt="" />
      </div>
      <div class="flex flex-col justify-center">
        <!-- <h2 class="text-3xl">{{ user.name }}</h2> -->
        <p>user_id: {{ user_id }}</p>
        <p>Name: {{ name }}</p>
        <p>Grade: {{ grade }}</p>
      </div>
    </div>
    <div class="mt-10 pt-2 border-t border-gray-600 dark:border-gray-900">
      <h1 class="text-3xl mb-2">My Videos</h1>
    </div>
    <div class="flex overflow-x-auto space-x-4">
      <iframe
        v-for="x in list"
        class="basis-full shrink-0 aspect-video rounded-3xl"
        :src="x"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta } from "#imports";

definePageMeta({
  middleware: ["user"],
});

const auth = useAuthStore();

const user = auth.user;
const name = ref("");
const grade = ref("");
const list = [
  "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6IjliNmEyZDQzLTFhOWYtNGI2My04YWJmLWU2ZTFmZjFjMTkxZCIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.SOn4m5s0l0q6YdEqEn0nUcmmlXdTk6KedClGaYwnslDVdP1yaJOzmKaG_V3v16TqzI7MO0fCZXUrzPzpCOzsABULDNlT-TebvHjQN4YiIdOhHfiZz2ZEIPfOThoT1aqn4nYS7tv6S0HUxbx8nEk_DcncYCJJiIPO714qPEYyIqygr9dQyQZS8eGS1OpGK2Y6OTFBK0J8uJ1RcV9k_DHcpTKGHvuFR4I7Ute7FfhPaXdndiJsWvYzuICJ0AU1N3jGHnuy5FAeAHMM_3gXuLkWcphCePDojfPQSLdiEhbaCeCNOd6Hv09TrRA0Mkpe8GWpsEpNEO4UxDYkQmlSH3NPB7HZMhIdlJSFVHCJOc3Y_V9Y2GqWDLkv26uN7UOwilXCv-ztIwB1E7gxJMqyiYLY7qJM7Hv9zSGYDhnsdN5E21Xrqlql0APDCD3gdypEtpVzj3yb6perpFD78AA0UVLtRThYvk-aIZbfclRFcRTEwMgOmas3LrKWwT0yvbXlfgEBWURyjf_y43mjS1JSp45bx6KXlwp4fGXgxeNHzbGGZXjgwf39W7p1sf0CKMe3Ogwk5M-4aDirJ-sXYJXbyYcHl24dt3jZKnwJ-G1E_cFvp7gliIlMsIyP3bUz92bvqoV9eHWk-HaVLZSq2j2IPCIrPInqAkPThK6HK_ra9mYsdks",
  "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6IjUwMzNhOWEwLTI3MjYtNDliNi05MWRiLTQ4ZDU3ZDY2NGM1NiIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.qf8y9zpqWLQsDPVJDkLsWey32h5eGgKk8bjkYnZbnm9DjqGoHmqvYFBW6NadhChOc-_pe3Dro-fZA5MoApR-CvIfIBiebn3IO3Ojh0voZDAQ56oC7xUI13yOhD2zp_2eZpX-QeiN_Osb5vNrn0KeW6FeZgo-PAcrqGi4f5HUmQVKVY1EPtrhoxcCfp_rQ4zm7-hVLa9WS-VDRmJBNz5M5-QrCtK7hyRPepWon7pD7LIwHYmLRBrJfSYvq78Fg4QpjG-_-32PprS5r8NVMlYgBHgOA69GInDZNZrKcNeoDWezw9clnBES1-McQ3KdXmRi_5m1f93bvbIOzoTODQhtUBrGLqRoNs29rnoq5X8aAg9DM_isXMMIpCDx9ScaF6YEbap3BilH1oLZHacIGf9HRfKGeO0n5jHH7QcxGgRABq6DEOV-Ddec9xC-vq5islZYarAz0KQEYrmnB0zEU3d_lgLfyqmK_-sCJzl7aIeh6izcuXR9bIVcWo3FtVjePoT7MnXg5eaBTVhmI5mFSvPfoOUOhO2vc2cTadYnDewkKExLUMaAHFEz3aueAIQZBLNgqQooXR_YXPS1ka7cS5Hwn5LOriRcXuWUM_a_kach-u2B1Vhr3d23QKAxHrOz0Jlbv92xbWXePo--peNnMnjV9ATO9C286BhaCDJ8KHG1CRI",
  "https://showroom.one-stage.kkstream.io/embed?token=eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3N2RhODVjLTllZjgtNTVjYS05M2FkLTAyYTMyZjkwZjg2MyIsInR5cCI6IkpXVCJ9.eyJyZXNvdXJjZV9pZCI6IjhhNDJiYmE0LTI0YjYtNDY3Mi05NzQwLTA3NWJiZDlmOTNjZiIsInJlc291cmNlX3R5cGUiOiJSRVNPVVJDRV9UWVBFX1ZPRF9FVkVOVCJ9.dCv4yGJxNPqE0-mzG91BmIcnfgjnv-Nw95kVAgaMekFT8PByBA6TbJ8bej7Qczf7R37xVhuY-R9FzRO7fo4pPhf-AdF86c-x6H_0Gwzd8R2DQCCatXP0aQydwVkYp_cJzeI2kN9vrDktF7TbRt6TuOzJGa4C2ygxMSfvBc2G_gGw-SKj5ZKZvtbwUusvum2l9NgSLAMb5LGnEye4-l18qxqt4auHypR615NzqfKjwfnw8od7ZWiOWDRaNE8ZQLH4cE5cZYcxwLPhHlPjRA07pIFbSIJsSb68gk9-K9TtGBcnmtWN0rF474tFSBcSsSITSa1APfg1Wub4ko9a2MxkkhtLgHOZ5UWaWA-9nAUojIH3oiOuZQhge_LGB06jj_9ufJ9QcEgCwEbl1bV3PFcNaz7oy-qacNBZzJHxzceqb8Rrt44U8pJbYvVANy76mu5cMeeRFzFPG2htE4L6pR4g9VweLGMA7gmrJKG_DhWEjmZzBzhJEp8JuQdTsPSq9_glx7IgAUCstjEV51ciX4NNxAZVtZaK0dWfjC_kv-9wJ56sPQ01XLI3miO26JjjWElXp2N_nzA_MoOBWmeC62JUix4ZaQmc8tpZ3ZsQAIhV8TMlThgajTMKiaKh47vXTydNw9KXI8VcG5aRV5gGVyUYdWDx28vjKTBTir11xptfP24",
];
// const email = user.email;
const { user_id } = useRoute().params;

onMounted(() => {
  name.value = user.name;
  grade.value = user.grade;
});
</script>

<style scoped></style>
