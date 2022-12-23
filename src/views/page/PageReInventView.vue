<script setup lang="ts">
import CarouselComponentVue from "@/components/CarouselComponent.vue";
import SectionTitleVue from "@/components/SectionTitle.vue";
import SectionCategoryBlockVue from "@/components/SectionCategoryBlock.vue";

import type { Carousel } from "@/models/Carousel.model";
import type { ResourcesWithTitleLink } from "@/models/ResourcesWithTitleLink.model";
import type { SummaryWithTitleLink } from "@/models/SummaryWithTitleLink.model";

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
    imgUrl: "/image/Page/.png",
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
    imgUrl: "/image/Page/.png",
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
    imgUrl: "/image/Page/.png",
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
    imgUrl: "/image/Page/.png",
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
    imgUrl: "/image/Page/.png",
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
    imgUrl: "/image/Page/.png",
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
    imgUrl: "/image/Page/.png",
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
    imgUrl: "/image/Page/.png",
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
    imgUrl: "/image/Page/.png",
    childs: [
      {
        title: "AWS 應用程式編寫器 (預覽版)",
        text: "以視覺化方式快速設計和組建無伺服器應用程式",
        link: "",
      },
    ],
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
          class="flex flex-auto flex-col items-center justify-center"
        >
          <div class="font-extrabold">{{ spotlightLink.title }}</div>
          <div>{{ spotlightLink.text }}</div>
        </a>
      </div>
    </div>
    <div class="flex flex-col w-[85vw] m-auto p-10px">
      <SectionTitleVue text="特色公告"></SectionTitleVue>
      <SectionCategoryBlockVue :datas="categoryResourse"> </SectionCategoryBlockVue>
      <div>中間列表</div>
      <div>內容列表</div>
      <div>測試內容排版</div>
      <div>測試內容排版</div>
      <div>測試內容排版</div>
      <div>測試內容排版</div>
      <div>測試內容排版</div>
      <div>測試內容排版</div>
      <div>測試內容排版</div>
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
