<script setup lang="ts">
import LinkTitleAndSummary from "@/components/LinkTitleAndSummary.vue";
import LinkTitleVue from "@/components/LinkTitle.vue";
import { ref } from "vue";
import ResourceBlockVue from "@/components/ResourceBlock.vue";

class TitleLink {
  title: string = "";
  text: string = "";
  link: string = "";
}

class CategoryWithTitleLink {
  title: string = "";
  data: TitleLink[] = [];
}

class Category {
  text: string = "";
  link: string = "";
  data: TitleLink[] = [];
  resource: CategoryWithTitleLink[] = [];
}
let categoryIndex = ref(0);
let categorydata: Category[] = [
  {
    text: "特色服務",
    link: "",
    data: [
      {
        title: "Amazon EC2",
        text: "雲端的虛擬伺服器",
        link: "",
      },
      {
        title: "Amazon Simple Storage Service (S3)",
        text: "可擴展的雲端儲存",
        link: "",
      },
      {
        title: "Amazon Aurora",
        text: "高效能受管關聯式資料庫，具備 MySQL 和 PostgreSQL 全相容性",
        link: "",
      },
      {
        title: "Amazon DynamoDB",
        text: "受管的 NoSQL 資料庫",
        link: "",
      },
      {
        title: "Amazon RDS",
        text: "適用於 MySQL、PostgreSQL、Oracle、SQL Server 和 MariaDB 的受管關聯式資料庫服務",
        link: "",
      },
      {
        title: "AWS Lambda",
        text: "執行程式碼而無需考慮伺服器",
        link: "",
      },
      {
        title: "Amazon VPC",
        text: "隔離的雲端資源",
        link: "",
      },
      {
        title: "Amazon Lightsail",
        text: "啟動和管理虛擬私有伺服器",
        link: "",
      },
      {
        title: "Amazon SageMaker",
        text: "大規模建立、訓練和部署機器學習模型",
        link: "",
      },
    ],
    resource: [
      {
        title: "資源和媒體",
        data: [
          {
            title: "部落格",
            text: "閱讀最新的 AWS 部落格文章",
            link: "",
          },
          {
            title: "AWS 最新消息",
            text: "查看 AWS 服務公告",
            link: "",
          },
        ],
      },
      {
        title: "客戶支援",
        data: [
          {
            title: "AWS IQ",
            text: "在 AWS 認證的第三方專家協助下更快地完成專案",
            link: "",
          },
          {
            title: "AWS Managed Services",
            text: "代您操作 AWS 基礎設施",
            link: "",
          },
          {
            title: "AWS 專業服務",
            text: "透過 AWS 加速實現您的業務成果",
            link: "",
          },
          {
            title: "AWS Training and Certification",
            text: "培養和驗證您的技能與技術專業知識",
            link: "",
          },
        ],
      },
    ],
  },
  {
    text: "分析",
    link: "",
    data: [
      { title: "Amazon Athena", text: "使用 SQL 查詢 S3 的資料", link: "" },
      { title: "Amazon CloudSearch", text: "受管搜尋服務", link: "" },
      {
        title: "Amazon DataZone (預覽)",
        text: "使用內建控管功能，解鎖跨組織界限的資料",
        link: "",
      },
      {
        title: "Amazon OpenSearch Service",
        text: "搜尋、視覺化和分析高達數 PB 的文字和非結構化資料",
        link: "",
      },
      { title: "Amazon EMR", text: "輕鬆執行大數據架構", link: "" },
      { title: "Amazon FinSpace", text: "金融服務業分析", link: "" },
      { title: "Amazon Kinesis", text: "分析即時影片和資料串流", link: "" },
      {
        title: "Amazon Managed Streaming for Apache Kafka",
        text: "全受管的 Apache Kafka 服務",
        link: "",
      },
      {
        title: "Amazon Redshift",
        text: "快速、簡單、經濟實惠的資料倉儲",
        link: "",
      },
      { title: "Amazon QuickSight", text: "快速的商業分析服務", link: "" },
      {
        title: "AWS Clean Rooms (預覽)",
        text: "在資料集上比對、分析和協作，無需共用或揭露基礎資料",
        link: "",
      },
      {
        title: "AWS Data Exchange",
        text: "尋找、訂閱及使用雲端中的第三方資料",
        link: "",
      },
      {
        title: "AWS Data Pipeline",
        text: "適用於週期性且由資料驅動的工作流程的協調流程服務",
        link: "",
      },
      { title: "AWS Glue", text: "簡單、可擴展和無伺服器的資料整合", link: "" },
      {
        title: "AWS Lake Formation",
        text: "建置、管理和保護您的資料湖",
        link: "",
      },
    ],
    resource: [
      {
        title: "資源和媒體",
        data: [
          { title: "部落格", text: "閱讀最新的大數據部落格文章", link: "" },
          {
            title: "AWS 最新消息",
            text: "查看 AWS 大數據和分析的公告",
            link: "",
          },
        ],
      },
      {
        title: "客戶支援",
        data: [
          {
            title: "AWS IQ",
            text: "在 AWS 認證的第三方專家協助下更快地完成專案",
            link: "",
          },
          {
            title: "AWS Managed Services",
            text: "代您操作 AWS 基礎設施",
            link: "",
          },
          {
            title: "AWS 專業服務",
            text: "透過 AWS 加速實現您的業務成果",
            link: "",
          },
          {
            title: "AWS Training and Certification",
            text: "培養和驗證您的技能與技術專業知識",
            link: "",
          },
        ],
      },
    ],
  },
  {
    text: "應用程式整合",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "區塊鏈",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "商業應用程式",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "雲端財務管理",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "運算",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "聯絡中心",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "容器",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "資料庫",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "開發人員工具",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "最終使用者運算",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "前端 Web 與行動",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "遊戲",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "物聯網",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "機器學習",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "管理與管控",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "媒體服務",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "遷移和傳輸",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "聯網和內容交付",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "量子技術",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "機器人",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "衛星",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "安全、身分和合規",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "無伺服器",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
  {
    text: "儲存",
    link: "",
    data: [
      {
        title: "",
        text: "",
        link: "",
      },
    ],
    resource: [
      {
        title: "",
        data: [],
      },
    ],
  },
];

function onmouseenter(index: number) {
  categoryIndex.value = index;
}
</script>

<template>
  <div class="flex-row product-block">
    <div class="flex-20 category">
      <div
        v-for="(data, index) of categorydata"
        class="item pointer"
        @mouseenter="onmouseenter(index)"
      >
        {{ data.text }}
      </div>
    </div>
    <div class="productlist category flex-40">
      <LinkTitleVue
        class="padding"
        :text="categorydata[categoryIndex].text"
        :link="categorydata[categoryIndex].link"
      />
      <LinkTitleAndSummary
        class="padding"
        v-for="data of categorydata[categoryIndex].data"
        :title="data.title"
        :text="data.text"
        :link="data.link"
      />
    </div>
    <div class="media-resource flex-40 flex-column">
      <div v-for="data of categorydata[categoryIndex].resource">
        {{ data.title }}
        <div class="flex-warp flex-row">
          <ResourceBlockVue
            class="mediablock"
            v-for="data2 of data.data"
            :title="data2.title"
            :text="data2.text"
            :link="data2.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-block {
  margin: 0px 50px;
  height: 100%;
}
.category {
  padding: 30px 0;
  overflow: auto;
  .item {
    color: var(--aws-text);
    padding: 3px 0;
    &:hover {
      color: var(--aws-text-active);
    }
  }
}

.productlist {
  padding: 30px 20px;
  overflow: auto;
  .padding {
    padding-bottom: 10px;
  }
}

.media-resource {
  padding: 30px 20px;
  overflow: auto;
  .mediablock {
    margin: 5px;
    flex: 1 0 47%;
  }
}
</style>
