<script setup lang="ts">
import LinkTitleVue from "@/components/LinkTitle.vue";
import CategoryBlockVue from "@/components/CategoryBlock.vue";


class SubLink {
  text: string = "";
  link: string = "";
}

class TitleLink {
  title: string = "";
  text: string = "";
  link: string = "";
}

class Category {
  text: string = "";
  data: TitleLink[] = [];
}

class Bulletin {
  text: string = "";
  categorys: Category[] = [];
}

class dataClass {
  title: string = "";
  sublink: SubLink[] = [];
  bulletins: Bulletin[] = [];
}

let data: dataClass = {
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
          text: "分析",
          data: [
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
      ],
    },
    {
      text: "",
      categorys: [
        {
          text: "分析",
          data: [
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
      ],
    }
  ],
};
</script>

<template>
  <div class="reInventBlock">
    <div class="reInventGap flex-row">
      <div class="flex-30">
        <div class="reInventImg"></div>
        <div class="reInventTitle">{{ data.title }}</div>
        <LinkTitleVue
          v-for="item of data.sublink"
          :text="item.text"
          :link="item.link"
        />
      </div>
      <div class="flex-70 flex-row reInventGap">
        <div v-for="bulletin of data.bulletins" class="reInventBulletin">
          <div class="reInventBulletinTxt">{{ bulletin.text }}</div>
          <CategoryBlockVue v-for="category of bulletin.categorys" :datas="category.data" :text="category.text" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reInventBlock {
  margin: 40px 15% 0 15%;
}
.flex-40 {
  flex: 40;
}
.flex-60 {
  flex: 60;
}

.reInventTitle {
  color: var(--aws-text-white);
  font-size: x-large;
}

.reInventImg {
  height: 45px;
  width: 300px;
  background: transparent url("../assets/image/reinvent_nav_logo.svg") no-repeat
    scroll 0 0;
}
.reInventBulletin {
  margin-top: 20px;
}
.reInventBulletinTxt {
  color: var(--aws-text-white);
  font-size: x-large;
  font-weight: bold;
  height: 40px;
}

.reInventGap{
  gap: 20px;
}
</style>
