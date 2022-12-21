<script setup lang="ts">
import LinkTitleVue from "@/components/LinkTitle.vue";
import CategoryBlockVue from "@/components/CategoryBlock.vue";
import type { NavReInventViewData } from "@/models/NavReInventViewData.model";

let data: NavReInventViewData = {
  title: "2022 年 11 月 28 日至 12 月 2 日",
  sublink: [
    {
      text: "重大發表 »",
      link: "",
    },
    {
      text: "領導力會議 »",
      link: "",
    },
    {
      text: "議程 »",
      link: "",
    },
    {
      text: "立即報名 »",
      link: "",
    },
  ],
  bulletins: [
    {
      text: "特色公告",
      categorys: [
        {
          title: "分析",
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
          childs: [
            {
              title: "Amazon DataZone (預覽)",
              text: "使用內建控管功能，解鎖跨組織界限的資料",
              link: "",
            },
            {
              title:
                "Amazon Connect forecasting, capacity planning, and scheduling",
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
      ],
    },
    {
      text: "",
      categorys: [
        {
          title: "資料庫",
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
      ],
    },
  ],
};
</script>

<template>
  <div class="reInvertContent">
    <div class="reInventMargin">
      <div class="reInventGap flex-row">
        <div class="flex-30">
          <div class="reInventImg"></div>
          <div class="reInventTitle">{{ data.title }}</div>
          <LinkTitleVue
            class="title-padding"
            v-for="item of data.sublink"
            :key="item.text"
            :title="item.text"
            :link="item.link"
          />
        </div>
        <div class="flex-70 flex-row reInventGap">
          <div
            v-for="bulletin of data.bulletins"
            :key="bulletin.text"
            class="reInventBulletin"
          >
            <div class="reInventBulletinTxt">{{ bulletin.text }}</div>
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
.reInvertContent {
  margin: 0 10% 0 10%;
  padding: 0 calc(5% + 15px) 0 5%;
  overflow: hidden;
  height: 100%;
  &:hover {
    overflow: auto;
    padding: 0 5% 0 5%;
  }

  .reInventMargin {
    margin: 40px 0 40px 0;

    .reInventTitle {
      color: var(--aws-text-white);
      font-size: x-large;
    }

    .reInventImg {
      height: 45px;
      width: 300px;
      background: transparent
        url("../../assets/image/Nav/reinvent_nav_logo.svg") no-repeat scroll 0 0;
    }

    .title-padding {
      padding: 5px;
    }
  }
  .reInventGap {
    gap: 20px;

    .reInventBulletin {
      margin-top: 20px;
    }
    .reInventBulletinTxt {
      color: var(--aws-text-white);
      font-size: x-large;
      font-weight: bold;
      height: 40px;
    }
  }
}
</style>
