<script setup lang="ts">
import LinkTitleVue from "@/components/LinkTitle.vue";
import CategoryBlockVue from "@/components/CategoryBlock.vue";
import type { NavReInventViewData } from "@/models/NavReInventViewData.model";
import { ref, type Ref } from "vue";

let data: Ref<NavReInventViewData | undefined> = ref(undefined);

fetch("/data.json")
  .then((res) => res.json())
  .then((json) => {
    data.value = json["NavReInventViewData"][0];
  });
// fetch("/api/NavReInventViewData")
//   .then((res) => res.json())
//   .then((json) => {
//     data.value = json[0];
//   });
</script>

<template>
  <div
    class="my-0 mx-[10%] py-0 pr-[calc(5%+15px)] pl-[5%] overflow-hidden h-full hover:overflow-auto hover:py-0 hover:px-[5%]"
  >
    <div class="my-40px mx-0">
      <div class="gap-20px flex flex-row">
        <div class="basis-[30%]">
          <div class="h-45px w-[300px] reInventImg"></div>
          <div class="text-txtWhite text-xl">{{ data?.title }}</div>
          <LinkTitleVue
            class="p-5px"
            v-for="item of data?.sublink"
            :key="item.text"
            :title="item.text"
            :link="item.link"
          />
        </div>
        <div class="flex flex-row basis-[70%] gap-20px">
          <div
            v-for="bulletin of data?.bulletins"
            :key="bulletin.text"
            class="mt-20px"
          >
            <div class="text-txtWhite text-xl font-bold h-40px">
              {{ bulletin.text }}
            </div>
            <CategoryBlockVue
              v-for="category of bulletin.categorys"
              :key="category.title"
              :childs="category.childs"
              :text="category.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// .reInvertContent {
//   margin: 0 10% 0 10%;
//   padding: 0 calc(5% + 15px) 0 5%;
//   overflow: hidden;
//   height: 100%;
//   &:hover {
//     overflow: auto;
//     padding: 0 5% 0 5%;
//   }

//   .reInventMargin {
//     margin: 40px 0 40px 0;

//     .reInventTitle {
//       color: var(--aws-text-white);
//       font-size: x-large;
//     }

.reInventImg {
  background: transparent url("../../assets/image/Nav/reinvent_nav_logo.svg")
    no-repeat scroll 0 0;
}

//     .title-padding {
//       padding: 5px;
//     }
//   }
//   .reInventGap {
//     gap: 20px;

//     .reInventBulletin {
//       margin-top: 20px;
//     }
//     .reInventBulletinTxt {
//       color: var(--aws-text-white);
//       font-size: x-large;
//       font-weight: bold;
//       height: 40px;
//     }
//   }
// }
</style>
