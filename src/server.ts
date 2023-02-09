import { createServer, Model } from "miragejs";
createServer({
  environment: "development",

  models: {
    user: Model,
  },

  seeds(server: any) {
    server.db.loadData({
      langs: [
        { text: "عربي", link: "" },
        { text: "Bahasa", link: "" },
        { text: "Indonesia", link: "" },
        { text: "Deutsch", link: "" },
        { text: "English", link: "" },
        { text: "Español", link: "" },
        { text: "Français", link: "" },
        { text: "Italiano", link: "" },
        { text: "Português", link: "" },
        { text: "Tiếng", link: "" },
        { text: "Việt", link: "" },
        { text: "Türkçe", link: "" },
        { text: "Ρусский", link: "" },
        { text: "ไทย", link: "" },
        { text: "日本語", link: "" },
        { text: "한국어", link: "" },
        { text: "中文 (简体)", link: "" },
        { text: "中文 (繁體)", link: "" },
      ],
      footerdata: [
        {
          text: "了解 AWS",
          links: [
            {
              text: "什麼是 AWS？",
              link: "",
            },
            {
              text: "什麼是雲端運算？",
              link: "",
            },
            {
              text: "AWS 多樣性、公平性與包容性",
              link: "",
            },
            {
              text: "什麼是 DevOps？",
              link: "",
            },
            {
              text: "什麼是容器？",
              link: "",
            },
            {
              text: "什麼是資料湖？",
              link: "",
            },
            {
              text: "AWS 雲端安全",
              link: "",
            },
            {
              text: "最新消息",
              link: "",
            },
            {
              text: "部落格",
              link: "",
            },
            {
              text: "新聞稿",
              link: "",
            },
          ],
        },
        {
          text: "AWS 資源",
          links: [
            {
              text: "入門",
              link: "",
            },
            {
              text: "培訓與認證",
              link: "",
            },
            {
              text: "AWS 解決方案組合",
              link: "",
            },
            {
              text: "架構中心",
              link: "",
            },
            {
              text: "產品和技術常見問答集",
              link: "",
            },
            {
              text: "分析師報告",
              link: "",
            },
            {
              text: "AWS 合作夥伴",
              link: "",
            },
          ],
        },
        {
          text: "AWS 開發人員",
          links: [
            {
              text: "開發人員中心",
              link: "",
            },
            {
              text: "軟體開發套件與工具",
              link: "",
            },
            {
              text: ".NET on AWS",
              link: "",
            },
            {
              text: "在 AWS 上執行的 Python",
              link: "",
            },
            {
              text: "在 AWS 上執行的 Java",
              link: "",
            },
            {
              text: "在 AWS 上執行的 PHP",
              link: "",
            },
            {
              text: "在 AWS 上執行的 JavaScript",
              link: "",
            },
          ],
        },
        {
          text: "說明",
          links: [
            {
              text: "聯絡我們",
              link: "",
            },
            {
              text: "提交支援票證",
              link: "",
            },
            {
              text: "知識中心",
              link: "",
            },
            {
              text: "AWS re:Post",
              link: "",
            },
            {
              text: "AWS Support 概觀",
              link: "",
            },
            {
              text: "法律",
              link: "",
            },
            {
              text: "AWS 徵才",
              link: "",
            },
          ],
        },
      ],
      cdata: [
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
      ],
      spotlightLinks: [
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
      ],
      categoryResourse: [
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
      ],
      speakerResourse: [
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
      ],
      NavReInventViewData: {
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
                    title:
                      "Amazon Aurora 與 Amazon Redshift 的零 ETL 整合 (預覽版)",
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
                  {
                    title: "Amazon Omics",
                    text: "將組學資料轉換為洞察",
                    link: "",
                  },
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
      },
      navItemData: [
        {
          text: "特色服務",
          link: "",
          childs: [
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
          resources: [
            {
              title: "資源和媒體",
              childs: [
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
              childs: [
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
          childs: [
            {
              title: "Amazon Athena",
              text: "使用 SQL 查詢 S3 的資料",
              link: "",
            },
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
            {
              title: "Amazon Kinesis",
              text: "分析即時影片和資料串流",
              link: "",
            },
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
            {
              title: "Amazon QuickSight",
              text: "快速的商業分析服務",
              link: "",
            },
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
            {
              title: "AWS Glue",
              text: "簡單、可擴展和無伺服器的資料整合",
              link: "",
            },
            {
              title: "AWS Lake Formation",
              text: "建置、管理和保護您的資料湖",
              link: "",
            },
          ],
          resources: [
            {
              title: "資源和媒體",
              childs: [
                {
                  title: "部落格",
                  text: "閱讀最新的大數據部落格文章",
                  link: "",
                },
                {
                  title: "AWS 最新消息",
                  text: "查看 AWS 大數據和分析的公告",
                  link: "",
                },
              ],
            },
            {
              title: "客戶支援",
              childs: [
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
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "區塊鏈",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "商業應用程式",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "雲端財務管理",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "運算",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "聯絡中心",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "容器",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "資料庫",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "開發人員工具",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "最終使用者運算",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "前端 Web 與行動",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "遊戲",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "物聯網",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "機器學習",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "管理與管控",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "媒體服務",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "遷移和傳輸",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "聯網和內容交付",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "量子技術",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "機器人",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "衛星",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "安全、身分和合規",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "無伺服器",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
        {
          text: "儲存",
          link: "",
          childs: [
            {
              title: "",
              text: "",
              link: "",
            },
          ],
          resources: [
            {
              title: "",
              childs: [],
            },
          ],
        },
      ],
      accountOptData: [
        {
          name: "聯絡我們",
          link: "",
          childs: [],
        },
        {
          name: "支援",
          link: "",
          childs: [
            {
              name: "支援中心",
              link: "",
              childs: [],
            },
            {
              name: "知識中心",
              link: "",
              childs: [],
            },
            {
              name: "AWS Support 概觀",
              link: "",
              childs: [],
            },
            {
              name: "AWS re:Post",
              link: "",
              childs: [],
            },
          ],
        },
        {
          name: "中文(繁體)",
          link: "",
          childs: [
            {
              name: "English",
              link: "",
              childs: [],
            },
            {
              name: "中文(繁體)",
              link: "",
              childs: [],
            },
            {
              name: "中文 (简体)",
              link: "",
              childs: [],
            },
          ],
        },
        {
          name: "我的帳戶",
          link: "",
          childs: [
            {
              name: "AWS 主控台管理",
              link: "",
              childs: [],
            },
            {
              name: "帳單帳戶",
              link: "",
              childs: [],
            },
            {
              name: "帳單與成本管理",
              link: "",
              childs: [],
            },
          ],
        },
      ],
      navTitle: [
        { name: "re:Invent" },
        { name: "產品" },
        { name: "解決方案" },
        { name: "定價" },
        { name: "文件" },
        { name: "了解" },
        { name: "合作夥伴" },
        { name: "AWS Marketplace" },
        { name: "客戶支援" },
        { name: "事件" },
        { name: "進一步探索" },
      ],
      consoleNotice: [
        {
          label: "未決的問題",
          data: "0",
        },
        {
          label: "排定的變更",
          data: "0",
        },
        {
          label: "其他通知",
          data: "0",
        },
      ],
      consoleLocation: [
        {
          label: "美國東部 (維吉尼亞州北部)",
          code: "us-east-1",
        },
        {
          label: "美國東部 (俄亥俄)",
          code: "us-east-2",
        },
        {
          label: "美國西部 (加州北部)",
          code: "us-west-1",
        },
        {
          label: "美國西部 (奧勒岡)",
          code: "us-west-2",
        },
        {
          label: "亞太地區 (孟買)",
          code: "ap-south-1",
        },
        {
          label: "亞太地區 (大阪)",
          code: "ap-northeast-3",
        },
        {
          label: "亞太地區 (首爾)",
          code: "ap-northeast-2",
        },
        {
          label: "亞太地區 (新加坡)",
          code: "ap-southeast-1",
        },
        {
          label: "亞太地區 (雪梨)",
          code: "ap-southeast-2",
        },
        {
          label: "亞太地區 (東京)",
          code: "ap-northeast-1",
        },
        {
          label: "加拿大 (中部)",
          code: "ca-central-1",
        },
        {
          label: "歐洲 (法蘭克福)",
          code: "eu-central-1",
        },
        {
          label: "歐洲 (愛爾蘭)",
          code: "eu-west-1",
        },
        {
          label: "歐洲 (倫敦)",
          code: "eu-west-2",
        },
        {
          label: "歐洲 (巴黎)",
          code: "eu-west-3",
        },
        {
          label: "歐洲 (斯德哥爾摩)",
          code: "eu-north-1",
        },
        {
          label: "南美洲 (聖保羅)",
          code: "sa-east-1",
        },
        {
          label: "非洲 (開普敦)",
          code: "af-south-1",
        },
        {
          label: "亞太地區 (香港)",
          code: "ap-east-1",
        },
        {
          label: "亞太地區 (海德拉巴)",
          code: "ap-south-2",
        },
        {
          label: "亞太地區 (雅加達)",
          code: "ap-southeast-3",
        },
        {
          label: "歐洲 (米蘭)",
          code: "eu-south-1",
        },
        {
          label: "歐洲 (西班牙)",
          code: "eu-south-2",
        },
        {
          label: "歐洲 (蘇黎世)",
          code: "eu-central-2",
        },
        {
          label: "中東 (巴林)",
          code: "me-south-1",
        },
        {
          label: "中東 (阿拉伯聯合大公國)",
          code: "me-central-1",
        },
      ],
      consoleServceData: [
        {
          text: "AWS 成本管理",
          link: "",
          icon: "fa-soild fa-file-invoice",
          childs: [
            {
              title: "AWS Application Cost Profiler",
              text: "每個租用戶和工作負載的成本",
              link: "",
            },
            {
              title: "AWS Billing Conductor",
              text: "簡化帳單實務",
              link: "",
            },
            {
              title: "AWS Budgets",
              text: "設定自訂預算並接收警示提醒",
              link: "",
            },
            {
              title: "AWS Cost Explorer",
              text: "視覺化並探索您的 AWS 成本與用量",
              link: "",
            },
            {
              title: "AWS Marketplace Subscriptions",
              text: "您可以找到、購買和部署軟體的數位目錄",
              link: "",
            },
          ],
        },
        {
          text: "Machine Learning",
          link: "",
          childs: [
            {
              title: "Amazon Augmented AI",
              text: "輕鬆實作機器學習預測的人工審查",
              link: "",
            },
            {
              title: "Amazon CodeGuru",
              text: "建置和執行現代應用程式的智慧建議",
              link: "",
            },
            {
              title: "Amazon Comprehend",
              text: "分析非結構化文字",
              link: "",
            },
            {
              title: "Amazon Comprehend Medical",
              text: "Amazon Comprehend Medical 使用機器學習從醫療文字擷取洞見和關係。",
              link: "",
            },
            {
              title: "AWS DeepComposer",
              text: "透過 AWS DeepComposer，不同技能等級的開發人員都能開始使用 Generative AI。",
              link: "",
            },
            {
              title: "AWS DeepLens",
              text: "具備深度學習功能的攝影機",
              link: "",
            },
            {
              title: "AWS DeepRacer",
              text: "全自動 1/18th 比例賽車，由機器學習驅動",
              link: "",
            },
            {
              title: "Amazon DevOps Guru",
              text: "採用 ML 技術的雲端作業服務，提升應用程式可用性。",
              link: "",
            },
            {
              title: "Amazon Forecast",
              text: "Amazon Forecast 是一種可進行準確時間序列預測的全受管服務",
              link: "",
            },
            {
              title: "Amazon Fraud Detector",
              text: "使用機器學習加速偵測更多線上詐騙",
              link: "",
            },
            {
              title: "Amazon HealthLake",
              text: "了解運作狀態資料",
              link: "",
            },
            {
              title: "Amazon Kendra",
              text: "透過機器學習獲得高度準確的企業搜尋服務能力",
              link: "",
            },
            {
              title: "Amazon Lex",
              text: "建置語音與文字聊天機器人",
              link: "",
            },
            {
              title: "Amazon Lookout for Equipment",
              text: "分析感應器資料，偵測設備異常行為",
              link: "",
            },
            {
              title: "Amazon Lookout for Metrics",
              text: "自動偵測指標中的異常並識別其根本原因",
              link: "",
            },
            {
              title: "Amazon Lookout for Vision",
              text: "使用電腦視覺來自動化品質檢測，藉此找出瑕疵。",
              link: "",
            },
            {
              title: "Amazon Monitron",
              text: "用於設備監控的端對端系統",
              link: "",
            },
            {
              title: "Amazon Omics",
              text: "將組學資料轉換為洞見。",
              link: "",
            },
            {
              title: "AWS Panorama",
              text: "在邊緣啟用電腦視覺應用程式",
              link: "",
            },
            {
              title: "Amazon Personalize",
              text: "Amazon Personalize 協助您在應用程式中輕鬆新增即時推薦",
              link: "",
            },
            {
              title: "Amazon Polly",
              text: "將文字轉成接近真實語音",
              link: "",
            },
            {
              title: "Amazon Rekognition",
              text: "搜尋和分析影像",
              link: "",
            },
            {
              title: "Amazon SageMaker",
              text: "建立、訓練和部署機器學習模型",
              link: "",
            },
            {
              title: "Amazon Textract",
              text: "幾乎可從任何文件輕鬆擷取文字和資料",
              link: "",
            },
            {
              title: "Amazon Transcribe",
              text: "強大的語音辨識",
              link: "",
            },
            {
              title: "Amazon Translate",
              text: "強大的神經機器翻譯",
              link: "",
            },
          ],
        },
        {
          text: "Quantum Technologies",
          link: "",
          childs: [],
        },
        {
          text: "儲存",
          link: "",
          childs: [],
        },
        {
          text: "分析",
          link: "",
          childs: [],
        },
        {
          text: "區塊鏈",
          link: "",
          childs: [],
        },
        {
          text: "商業應用程式",
          link: "",
          childs: [],
        },
        {
          text: "媒體服務",
          link: "",
          childs: [],
        },
        {
          text: "安全性、身分與合規",
          link: "",
          childs: [],
        },
        {
          text: "客戶支援",
          link: "",
          childs: [],
        },
        {
          text: "容器",
          link: "",
          childs: [],
        },
        {
          text: "應用程式整合",
          link: "",
          childs: [],
        },
        {
          text: "擴增實境與虛擬實境",
          link: "",
          childs: [],
        },
        {
          text: "最終使用者運算",
          link: "",
          childs: [],
        },
        {
          text: "機器人",
          link: "",
          childs: [],
        },
        {
          text: "物聯網",
          link: "",
          childs: [],
        },
        {
          text: "移轉與傳輸",
          link: "",
          childs: [],
        },
        {
          text: "管理與管控",
          link: "",
          childs: [],
        },
        {
          text: "聯網與內容交付",
          link: "",
          childs: [],
        },
        {
          text: "行動應用程式",
          link: "",
          childs: [],
        },
        {
          text: "衛星",
          link: "",
          childs: [],
        },
        {
          text: "資料庫",
          link: "",
          childs: [],
        },
        {
          text: "遊戲開發",
          link: "",
          childs: [],
        },
        {
          text: "運算",
          link: "",
          childs: [],
        },
        {
          text: "開發人員工具",
          link: "",
          childs: [],
        },
      ],
      consoleData: [
        {
          data: `{"content":[{"id":"0","title":"快速存取","type":"quickaccess","colSpan":1,"sortNumber":1,"data":{"content":""}},{"id":"1","title":"圖表檢視","type":"consolebar","colSpan":1,"sortNumber":2,"data":{"content":""}},{"id":"2","title":"公告","type":"bulletins","colSpan":1,"sortNumber":3,"data":{"content":""}},{"id":"3","title":"圓餅圖檢視","type":"consoledoughunt","colSpan":1,"sortNumber":4,"data":{"content":""}},{"id":"4","title":"即時訊息","type":"quickinformation","colSpan":1,"sortNumber":5,"data":{"content":""}},{"id":"5","title":"通知面板","type":"alertpanel","colSpan":1,"sortNumber":6,"data":{"content":""}},{"id":"6","title":"控制台狀態","type":"consolestate","colSpan":1,"sortNumber":7,"data":{"content":""}},{"id":"7","title":"表格檢視","type":"consoletable","colSpan":1,"sortNumber":8,"data":{"content":""}}]}`,
        },
      ],
      consoleWidget: [
        {
          addtext: "+快速存取",
          title: "快速存取",
          type: "quickaccess",
        },
        {
          addtext: "+圖表顯示",
          title: "圖表顯示",
          type: "consolebar",
        },
        {
          addtext: "+公告",
          title: "公告",
          type: "bulletins",
        },
        {
          addtext: "+圓餅圖檢視",
          title: "圓餅圖檢視",
          type: "consoledoughunt",
        },
        {
          addtext: "+即時訊息",
          title: "即時訊息",
          type: "quickinformation",
        },
        {
          addtext: "+通知面板",
          title: "通知面板",
          type: "alertpanel",
        },
        {
          addtext: "+控制台狀態",
          title: "控制台狀態",
          type: "consolestate",
        },
        {
          addtext: "+表格檢視",
          title: "表格檢視",
          type: "consoletable",
        },
      ]
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/:target", (schema: any, request: any) => {
      return schema.db[request.params.target];
    });

    this.post("/:target/:id", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const aaa = schema.db[request.params.target].update(
        request.params.id,
        attrs
      );
      // console.log(schema.db[request.params.target])
      return aaa;
    });
  },
});
