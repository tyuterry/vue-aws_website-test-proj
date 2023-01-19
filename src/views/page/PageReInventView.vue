<script setup lang="ts">
import CarouselComponentVue from "@/components/CarouselComponent.vue";
import SectionTitleVue from "@/components/SectionTitle.vue";
import SectionCategoryBlockVue from "@/components/SectionCategoryBlock.vue";
import SectionImageTextVue from "@/components/SectionImageText.vue";

import type { Carousel } from "@/models/Carousel.model";
import type { ResourcesWithTitleLink } from "@/models/ResourcesWithTitleLink.model";
import type { SummaryWithTitleLink } from "@/models/SummaryWithTitleLink.model";
import SectionLink from "@/components/SectionLink.vue";
import type { SummaryWithTitleImgLink } from "@/models/SummaryWithTitleImgLink.model";
import { ref, type Ref } from "vue";

let cdata: Ref<Carousel[]> = ref([]);
let spotlightLinks: Ref<SummaryWithTitleLink[]> = ref([]);
let categoryResourse: Ref<ResourcesWithTitleLink[]> = ref([]);
let speakerResourse: Ref<SummaryWithTitleImgLink[]> = ref([]);

fetch("/api/cdata")
  .then((res) => res.json())
  .then((json) => {
    cdata.value = json;
  });

fetch("/api/categoryResourse")
  .then((res) => res.json())
  .then((json) => {
    categoryResourse.value = json;
  });

fetch("/api/speakerResourse")
  .then((res) => res.json())
  .then((json) => {
    speakerResourse.value = json;
  });

fetch("/api/spotlightLinks")
  .then((res) => res.json())
  .then((json) => {
    spotlightLinks.value = json;
  });
</script>

<template>
  <main class="overflow-hidden">
    <div class="relative h-[500px]">
      <CarouselComponentVue :slots="cdata" indexpath="id">
        <template v-for="item of cdata" v-slot:[item.id] :key="item.id">
          <div
            class="h-[500px] w-full"
            :style="{
              background: 'no-repeat center/cover url(' + item.imgUrl + ')',
            }"
          >
            <div class="top-[100px] left-[200px] w-fit">
              <div class="h-45px w-[300px] mb-40px reInventImg"></div>
              <div class="text-txtWhite font-[800] text-[48px]">
                {{ item.title }}
              </div>
              <div class="text-txtWhite text-xl">
                {{ item.text }}
              </div>
              <div
                class="my-30px mx-0 text-txtWhite text-basd border border-solid border-[#d5dbdb] w-fit rounded-[20px] p-10px"
              >
                {{ item.urlTitle }}
              </div>
            </div>
          </div>
        </template>
      </CarouselComponentVue>
    </div>
    <div
      class="divingLine bg-no-repeat flex flex-row w-[85vw] h-[160px] m-auto"
    >
      <div class="flex flex-row w-full px-[60px]">
        <a
          :href="spotlightLink.link"
          v-for="spotlightLink in spotlightLinks"
          :key="spotlightLink.title"
          class="flex basis-1/4 flex-col items-center pt-50px"
        >
          <div class="font-extrabold">{{ spotlightLink.title }}</div>
          <div>{{ spotlightLink.text }}</div>
        </a>
      </div>
    </div>
    <div class="flex flex-col w-[85vw] m-auto p-10px gap-40px">
      <div>
        <SectionTitleVue text="特色公告"></SectionTitleVue>
        <SectionCategoryBlockVue :datas="categoryResourse">
        </SectionCategoryBlockVue>
        <SectionLink text="探索所有公告 »" link:="" />
      </div>
      <div
        class="mb-[50px] bg-center bg-no-repeat bg-cover bg-[url('/image/Page/Section-Desk_Key-Adam.jpg')]"
      >
        <SectionTitleVue text="重大發表"></SectionTitleVue>
        <div class="font-bold text-lg">Adam Selipsky 重大發表</div>
        <div class="text-sm">AWS 執行長</div>
        <div class="text-base">
          Adam Selipsky 將上台分享與 AWS 客戶、產品和服務有關的見解和最新新聞。
        </div>
        <SectionLink marginTop="50px" text="隨需觀看 »" link:="" />
        <div class="divingLine bg-no-repeat h-2px mt-30px"></div>
      </div>
      <div class="flex flex-row gap-20px">
        <SectionImageTextVue
          class="flex-auto"
          v-for="resourse in speakerResourse"
          :key="resourse.title"
          :title="resourse.title"
          :text="resourse.text"
          :imgUrl="resourse.imgUrl"
          :link="resourse.link"
        ></SectionImageTextVue>
      </div>
      <div class="flex flex-col gap-20px">
        <SectionTitleVue text="領導力會議" />
        <div class="flex flex-row gap-20px">
          <div class="basis-1/2">
            <img class="-" src="/image/Page/Section-Desk-Mob_Leadership.jpg" />
          </div>
          <div class="basis-1/2 flex flex-col justify-center">
            <div>
              直接聆聽 AWS 領導人分享的 AWS
              技術最新進展，設定產品未來方向，通過引人入勝的成功案例點燃您的激情。領導力會議在拉斯維加斯現場進行，還提供虛擬觀看選項。
            </div>
            <SectionLink
              marginTop="20px"
              text="瀏覽所有會議 »"
              link=""
            ></SectionLink>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        background: no-repeat center/cover
          url('/image/Page/Registration-Desktop.jpg');
      "
    >
      <div class="flex flex-row w-[85vw] m-auto items-center">
        <div
          class="basis-1/3 flex-grow-0 flex-shrink-0 flex flex-col justify-center"
        >
          <div class="mt-[200px]"></div>
          <div class="h-45px reInventImg"></div>
          <div class="text-sm">
            2022 年 11 月 28 日 – 12 月 2 日 | 內華達州拉斯維加斯
          </div>
          <div
            class="text-txtWhite mt-50px text-basd border border-solid border-[#d5dbdb] w-fit rounded-[15px] p-10px"
          >
            立即報名 »
          </div>
          <div class="mt-[200px]"></div>
        </div>
        <div class="basis-1/3 flex-grow-0 flex-shrink-0"></div>
        <div class="basis-1/3 flex-grow-0 flex-shrink-0"></div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.reInventImg {
  background: transparent url("../../assets/image/Nav/reinvent_nav_logo.svg")
    no-repeat scroll 0 0;
}

.divingLine {
  background-image: url("/image/divingLine.jpeg");
}
</style>
