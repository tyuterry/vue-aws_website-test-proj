<script setup lang="ts">
import CarouselComponentVue from "@/components/CarouselComponent.vue";

class CauoueslData {
  id: string = "";
  title: string = "";
  text: string = "";
  urlTitle: string = "";
  url: string = "";
  imgUrl: string = "";
}

let cdata: CauoueslData[] = [
  {
    id: "ad1",
    title: "聯網的最新功能1111111",
    text: "了解新的創新項目，協助您建置、管理和保護網路",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel1.jpg",
  },
  {
    id: "ad2",
    title: "Amazon CodeCatalyst 簡介222222",
    text: "可更快速地在AWS上建置及提交的統一軟體開發服務",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel2.jpg",
  },
  {
    id: "ad3",
    title: "AWS 應用程式編寫器 (預覽版)33333",
    text: "以視覽化方式快速設計和組建無伺服器應用程式。",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel3.jpg",
  },
  {
    id: "ad4",
    title: "聯網的最新功能44444444",
    text: "了解新的創新項目，協助您建置、管理和保護網路",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel1.jpg",
  },
  {
    id: "ad5",
    title: "Amazon CodeCatalyst 簡介55555555",
    text: "可更快速地在AWS上建置及提交的統一軟體開發服務",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel2.jpg",
  },
  {
    id: "ad6",
    title: "AWS 應用程式編寫器 (預覽版)6666666",
    text: "以視覽化方式快速設計和組建無伺服器應用程式。",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel3.jpg",
  },
  {
    id: "ad7",
    title: "聯網的最新功能77777777",
    text: "了解新的創新項目，協助您建置、管理和保護網路",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel1.jpg",
  },
  {
    id: "ad8",
    title: "Amazon CodeCatalyst 簡介8888888",
    text: "可更快速地在AWS上建置及提交的統一軟體開發服務",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel2.jpg",
  },
  {
    id: "ad9",
    title: "AWS 應用程式編寫器 (預覽版)999999999",
    text: "以視覽化方式快速設計和組建無伺服器應用程式。",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel3.jpg",
  },
  {
    id: "adA",
    title: "聯網的最新功能AAAAAAAAAAA",
    text: "了解新的創新項目，協助您建置、管理和保護網路",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel1.jpg",
  },
  {
    id: "adB",
    title: "Amazon CodeCatalyst 簡介BBBBBBBBBB",
    text: "可更快速地在AWS上建置及提交的統一軟體開發服務",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel2.jpg",
  },
  {
    id: "adC",
    title: "AWS 應用程式編寫器 (預覽版)CCCCCCCC",
    text: "以視覽化方式快速設計和組建無伺服器應用程式。",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel3.jpg",
  }
];
</script>

<template>
  <main class="overflow-hidden">
    <div class="relative h-[600px]">
      <CarouselComponentVue :slots="cdata" indexpath="id">
        <template v-for="item of cdata" v-slot:[item.id] :key="item.id">
          <div
            class="h-[600px] w-full"
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

    <div>測試內容排版</div>
    <div>測試內容排版</div>
    <div>測試內容排版</div>
    <div>測試內容排版</div>
    <div>測試內容排版</div>
    <div>測試內容排版</div>
    <div>測試內容排版</div>
    <div>測試內容排版</div>
    <div>測試內容排版</div>
  </main>
</template>

<style scoped lang="scss">
.widthLimit {
  overflow-x: hidden;
}
.carouselArea {
  position: relative;
  height: 600px;
  .imageBackground {
    height: 600px;
    width: 100%;
  }

  .carouselContent {
    top: 100px;
    left: 200px;
    width: fit-content;
    .reInventImg {
      height: 45px;
      width: 300px;
      margin-bottom: 40px;
      background: transparent
        url("../../assets/image/Nav/reinvent_nav_logo.svg") no-repeat scroll 0 0;
    }
    .carouselTitle {
      color: var(--aws-text-white);
      font-weight: 800;
      font-size: 48px;
    }

    .carouselContext {
      color: var(--aws-text-white);
      font-size: x-large;
    }

    .carouselTextUrl {
      margin: 30px 0;
      color: var(--aws-text-white);
      font-size: medium;
      border: 1px solid #d5dbdb;
      width: fit-content;
      border-radius: 20px;
      padding: 10px;
    }
  }
}
</style>
