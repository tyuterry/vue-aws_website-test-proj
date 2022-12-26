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

const cdata: Carousel[] = [
  {
    id: "ad1",
    title: "聯網的最新功能1",
    text: "了解新的創新項目，協助您建置、管理和保護網路",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel1.jpg",
  },
  {
    id: "ad2",
    title: "Amazon CodeCatalyst 簡介2",
    text: "可更快速地在AWS上建置及提交的統一軟體開發服務",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel2.jpg",
  },
  {
    id: "ad3",
    title: "AWS 應用程式編寫器 (預覽版)3",
    text: "以視覽化方式快速設計和組建無伺服器應用程式。",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel3.jpg",
  },
  {
    id: "ad4",
    title: "聯網的最新功能4",
    text: "了解新的創新項目，協助您建置、管理和保護網路",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel1.jpg",
  },
  {
    id: "ad5",
    title: "Amazon CodeCatalyst 簡介5",
    text: "可更快速地在AWS上建置及提交的統一軟體開發服務",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel2.jpg",
  },
  {
    id: "ad6",
    title: "AWS 應用程式編寫器 (預覽版)6",
    text: "以視覽化方式快速設計和組建無伺服器應用程式。",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel3.jpg",
  },
  {
    id: "ad7",
    title: "聯網的最新功能7",
    text: "了解新的創新項目，協助您建置、管理和保護網路",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel1.jpg",
  },
  {
    id: "ad8",
    title: "Amazon CodeCatalyst 簡介8",
    text: "可更快速地在AWS上建置及提交的統一軟體開發服務",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel2.jpg",
  },
  {
    id: "ad9",
    title: "AWS 應用程式編寫器 (預覽版)9",
    text: "以視覽化方式快速設計和組建無伺服器應用程式。",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel3.jpg",
  },
  {
    id: "adA",
    title: "聯網的最新功能A",
    text: "了解新的創新項目，協助您建置、管理和保護網路",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel1.jpg",
  },
  {
    id: "adB",
    title: "Amazon CodeCatalyst 簡介B",
    text: "可更快速地在AWS上建置及提交的統一軟體開發服務",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel2.jpg",
  },
  {
    id: "adC",
    title: "AWS 應用程式編寫器 (預覽版)C",
    text: "以視覽化方式快速設計和組建無伺服器應用程式。",
    urlTitle: "瀏覽公告 »",
    url: "",
    imgUrl: "/image/ReInvent/reinvent_carousel3.jpg",
  },
];

const spotlightLinks: SummaryWithTitleLink[] = [
  {
    title: "公告",
    text: "觀看重大發表簡報",
    link: "",
  },
  {
    title: "重大發表",
    text: "直接聆聽 AWS 領導人的發言",
    link: "",
  },
  {
    title: "領導力會議",
    text: "了解 AWS 全新產品和功能",
    link: "",
  },
  {
    title: "部落格",
    text: "閱讀 AWS 首席推廣者和團隊的最新文章",
    link: "",
  },
];

const categoryResourse: ResourcesWithTitleLink[] = [
  {
    title: "分析",
    imgUrl: "/image/Page/Analytics.png",
    childs: [
      {
        title: "Amazon DataZone (預覽)",
        text: "使用內建控管功能，解鎖跨組織界限的資料",
        link: "",
      },
      {
        title: "Amazon Athena 上的 Apache Spark 支援",
        text: "不到一秒即可在 Apache Spark 上執行互動式分析",
        link: "",
      },
      {
        title: "AWS Glue 資料品質 (預覽版)",
        text: "跨資料湖和管道提供高品質資料",
        link: "",
      },
      {
        title: "AWS Glue for Ray (預覽版)",
        text: "使用適用於 ETL 的 Python 程式碼擴展及簡化，實現無伺服器化",
        link: "",
      },
      {
        title: "Amazon OpenSearch Serverless (預覽)",
        text: "無需佈建和調整資源即可提供搜尋和日誌分析",
        link: "",
      },
      {
        title: "Amazon QuickSight Paginated Reports",
        text: "建立、排程、分享報告和資料匯出",
        link: "",
      },
      {
        title: "適用於 Apache Spark 的 Amazon Redshift 整合",
        text: "建置可從 Amazon Redshift 讀取和寫入資料的 Apache Spark 應用程式",
        link: "",
      },
      {
        title: "AWS Clean Rooms (預覽)",
        text: "在資料集上比對、分析和協作，無需共用或揭露基礎資料",
        link: "",
      },
      {
        title: "適用於 Amazon QuickSight Q 的自動化資料準備",
        text: "藉由快速、輕鬆地為您的資料啟用自然語言搜尋來回答業務問題",
        link: "",
      },
      {
        title: "Amazon QuickSight 新增 API 功能",
        text: "在 Amazon QuickSight 中以程式設計方式建立和管理儀表板並加速向雲端的遷移",
        link: "",
      },
    ],
  },
  {
    title: "商業應用程式",
    imgUrl: "/image/Page/Business-Application.png",
    childs: [
      {
        title: "Amazon DataZone (預覽)",
        text: "使用內建控管功能，解鎖跨組織界限的資料",
        link: "",
      },
      {
        title: "Amazon Connect forecasting, capacity planning, and scheduling",
        text: "利用採用機器學習技術的聯絡中心功能，更快回應容量和人力變更",
        link: "",
      },

      {
        title: "AWS 供應鏈 (預覽)",
        text: "利用採用機器學習 (ML) 技術的供應鏈應用程式減輕風險、降低成本",
        link: "",
      },

      {
        title: "AWS Wickr",
        text: "透過端對端加密保護企業通訊",
        link: "",
      },

      {
        title: "Amazon Connect 客服人員工作區的逐步指南 (預覽)",
        text: "更快、更準確地解決聯絡中心客戶問題",
        link: "",
      },
    ],
  },
  {
    title: "運算",
    imgUrl: "/image/Page/Compute.png",
    childs: [
      {
        title: "Amazon EC2 C7gn 執行個體 (預覽)",
        text: "具有高達 200 Gbps 網路頻寬的 Graviton 運算優化執行個體",
        link: "",
      },
      {
        title: "Amazon EC2 Hpc6id 執行個體",
        text: "Amazon EC2 Hpc6id 執行個體可為資料密集型 HPC 工作負載提供經濟實惠的價格效能",
        link: "",
      },
      {
        title: "Amazon EC2 Hpc7g 執行個體",
        text: "為運算密集型工作負載提供比上一代同類執行個體高出 60% 的效能",
        link: "",
      },
      {
        title: "Amazon EC2 Inf2 執行個體 (預覽)",
        text: "在 Amazon EC2 中以最低成本提供高效能，適用於最高要求的推論工作負載",
        link: "",
      },
      {
        title: "AWS Lambda SnapStart",
        text: "將 Java 函數啟動時間提高 10 倍",
        link: "",
      },
      {
        title: "AWS SimSpace Weaver",
        text: "在 AWS 受管基礎設施上建置動態、大規模的空間模擬",
        link: "",
      },
      {
        title:
          "Local Zones 現在已在布宜諾斯艾利斯、哥本哈根、赫爾辛基和馬斯喀特正式上市",
        text: "向 4 個新城市的數百萬使用者提供 AWS 雲端",
        link: "",
      },
    ],
  },
  {
    title: "資料庫",
    imgUrl: "/image/Page/Database.png",
    childs: [
      {
        title: "Amazon Aurora 與 Amazon Redshift 的零 ETL 整合 (預覽版)",
        text: "Amazon Aurora 現在支援與 Amazon Redshift 的零擷取、轉換和載入 (ETL) 整合",
        link: "",
      },
    ],
  },
  {
    title: "開發人員工具",
    imgUrl: "/image/Page/Dev-Tools.png",
    childs: [
      {
        title: "Amazon CodeCatalyst (預覽版)",
        text: "統一的軟體開發服務，可在 AWS 上加快開發和交付速度",
        link: "",
      },
    ],
  },
  {
    title: "機器學習和 AI",
    imgUrl: "/image/Page/Machine-Learning.png",
    childs: [
      { title: "Amazon Omics", text: "將組學資料轉換為洞察", link: "" },
      {
        title: "Amazon SageMaker 現在支援地理空間 ML (預覽版)",
        text: "使用地理空間資料建置、訓練及部署機器學習 (ML) 模型",
        link: "",
      },
      {
        title: "使用 Amazon SageMaker 進行 ML 管理 (預覽版)",
        text: "簡化存取控制並增強透明度",
        link: "",
      },
    ],
  },
  {
    title: "管理與管控",
    imgUrl: "/image/Page/Management-Governance.png",
    childs: [
      {
        title: "Amazon CloudWatch Internet Monitor (預覽版)",
        text: "以視覺化方式呈現應用程式的整體網際網路運作狀態，將診斷問題的時間從幾天縮短到幾分鐘",
        link: "",
      },
    ],
  },
  {
    title: "聯網和內容交付",
    imgUrl: "/image/Page/Networking-Content-Delivery.png",
    childs: [
      {
        title: "AWS Verified Access (預覽版)",
        text: "無需 VPN 即可安全存取企業應用程式",
        link: "",
      },
      {
        title: "Amazon VPC Lattice (預覽版)",
        text: "簡化服務對服務的連線能力、安全和監控",
        link: "",
      },
    ],
  },
  {
    title: "安全、身分和合規",
    imgUrl: "/image/Page/Security-Identity-Compliance.png",
    childs: [
      {
        title: "Amazon Security Lake (預覽)",
        text: "只要按幾下滑鼠，即可自動集中您的安全資料",
        link: "",
      },
      {
        title: "Amazon Verified Permissions (預覽版)",
        text: "應用程式的精細許可和授權",
        link: "",
      },
    ],
  },
  {
    title: "無伺服器",
    imgUrl: "/image/Page/Serverless.png",
    childs: [
      {
        title: "AWS 應用程式編寫器 (預覽版)",
        text: "以視覺化方式快速設計和組建無伺服器應用程式",
        link: "",
      },
    ],
  },
];

const speakerResourse: SummaryWithTitleImgLink[] = [
  {
    title: "Ruba Borno",
    text: "AWS 全球通路暨聯盟副總裁 Ruba Borno。",
    imgUrl: "/image/Page/Section-P1.jpg",
    link: "",
  },
  {
    title: "Swami Sivasubramanian",
    text: "AWS 資料與機器學習副總裁",
    imgUrl: "/image/Page/Section-P2.jpg",
    link: "",
  },
  {
    title: "Peter DeSantis",
    text: "AWS 公用事業運算資深副總裁",
    imgUrl: "/image/Page/Section-P3.jpg",
    link: "",
  },
  {
    title: "博士Werner Vogels",
    text: "Amazon.com 副總裁暨技術長",
    imgUrl: "/image/Page/Section-P4.jpg",
    link: "",
  },
];
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
