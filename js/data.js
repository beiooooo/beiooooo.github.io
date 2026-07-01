/* ===== 博客文章与项目数据 ===== */

const blogPosts = [
  {
    id: 1,
    title: "Vue 3 + TypeScript 项目工程化实践总结",
    date: "2026-06-20",
    category: "前端",
    summary: "从项目初始化、代码规范、状态管理到跨端编译，总结 Vue 3 + TypeScript 项目工程化搭建的核心要点与实践心得。",
    content: "<p>在今年的课程项目中，我使用 Vue 3 + TypeScript 搭建了两个完整的前端项目，积累了比较丰富的工程化经验。本文从几个方面做一下总结。</p><p><strong>一、项目初始化与构建工具</strong>：我选择 Vite 作为构建工具，它不仅启动速度快，HMR 体验也很好。配合 TypeScript 模板初始化后，我会统一配置路径别名、环境变量和代理转发。</p><p><strong>二、代码规范</strong>：在每个项目中我都搭建了 ESLint + Prettier + Husky 规范链，确保团队协作时代码风格一致。Pre-commit 钩子自动格式化并校验，避免问题代码入库。</p><p><strong>三、状态管理</strong>：我使用 Pinia 作为状态管理方案，相比 Vuex 更轻量、类型推断更好。我会按业务模块拆分 Store，避免单一 Store 过于臃肿。</p><p><strong>四、跨端编译</strong>：在\"friend\"项目中，我基于 uni-app 实现了一套代码多端编译（小程序/H5/App），通过条件编译与平台适配降低成本，效果非常好。</p><p>以上是我在工程化方面的一些实践总结，后续还会继续深入探索。</p>"
  },
  {
    id: 2,
    title: "基于 DeepSeek 的 AI Agent 开发探索",
    date: "2026-06-10",
    category: "AI",
    summary: "在电商用户价值分析系统中，我使用 DeepSeek 大模型构建了 Function Calling 的完整 Agent 闭环。本文分享技术设计与实现细节。",
    content: "<p>在电商用户价值分析系统项目中，我负责基于 DeepSeek 大模型构建完整的 AI Agent 应用。这是一个典型的复杂任务拆解场景——用户用自然语言提问，系统自动完成客户分层、数据质量体检与智能清洗等分析任务。</p><p><strong>核心设计思路</strong>：我设计了基于 DeepSeek 的 Function Calling 多工具调度链路。当用户输入自然语言问题后，大模型自动识别意图并调用对应的工具函数（如 RFM 计算、K-Means 聚类、数据预处理等），经过多步调用后将结果聚合返回给用户。这个闭环很好地解决了大模型在数据分析场景下的精度与幻觉问题。</p><p><strong>流式传输优化</strong>：前端采用 SSE 流式传输接收 AI 回答，并自定义渲染器在流中实时解析并渲染 ECharts 图表，实现了文字与图表混合流式输出的效果。同时引入 Web Worker 处理 K-Means 聚类运算，主线程阻塞时间降低了约 70%。</p><p><strong>架构分离</strong>：我设计了\"数据精确计算层 + AI 解读层\"分离架构——后端完成 RFM/K-Means 等精确数值计算，大模型仅负责自然语言层面的解读和表达，既保证了计算结果准确，又发挥了 LLM 的表达优势。</p>"
  },
  {
    id: 3,
    title: "从零构建 uni-app 社交应用的心得",
    date: "2026-06-03",
    category: "前端",
    summary: "回顾 \"friend\" 社交应用的完整开发历程，从需求分析、技术选型到完整社交链路的实现，分享 uni-app 跨端开发中的踩坑与收获。",
    content: "<p>\"friend\" 社交应用是我第一个完整的跨端项目，历时 3 个月。这是一个面向年轻人的社区内容平台，提供发帖分享、信息流浏览、点赞评论、好友关系和私信沟通等一站式社交体验。</p><p><strong>技术选型</strong>：我选择了 Vue 3 + TypeScript + uni-app + Pinia + Element Plus 的技术栈。uni-app 让我能够一套代码编译到小程序、H5 和 App，大幅降低了多端维护成本。</p><p><strong>完整社交链路实现</strong>：独立实现了登录/注册（JWT 认证）、Feed 流展示、点赞评论互动、好友关系管理和 WebSocket 实时私信聊天。其中 WebSocket 的连接管理和重连机制是比较有挑战的部分。</p><p><strong>运营后台</strong>：使用 Vue 3 + Element Plus 搭建了配套的运营后台，封装了通用的表格和表单组件，提升了开发效率。API 层封装了 Axios 统一拦截，实现了 JWT 自动注入、刷新、重试和错误处理。</p><p>这个项目让我真正体会到跨端开发的便利与挑战，也让我对前后端联调有了更深的理解。</p>"
  },
  {
    id: 4,
    title: "Web Worker 在前端密集计算中的应用",
    date: "2026-05-25",
    category: "前端",
    summary: "在电商分析项目中，我引入 Web Worker 处理 K-Means 聚类运算，主线程阻塞时间降低约 70%。本文介绍 Web Worker 的使用场景与实践方法。",
    content: "<p>在电商用户价值分析系统中，K-Means 聚类是一个计算密集型的任务。如果直接在主线程中执行，会导致页面卡顿甚至长时间无响应，严重影响用户体验。</p><p><strong>Web Worker 方案</strong>：我将 K-Means 聚类算法封装到 Web Worker 中运行，主线程通过 postMessage 与 Worker 通信，计算结果通过消息事件返回。这样主线程可以继续响应用户操作，聚类运算在后台线程中并发执行。</p><p><strong>效果</strong>：引入 Web Worker 后，主线程阻塞时间从原来的数百毫秒降低到几乎为零，页面交互始终保持流畅。</p><p><strong>注意事项</strong>：Web Worker 无法访问 DOM，也无法使用某些浏览器 API，因此数据传输需要序列化。Worker 创建有开销，适合处理较大规模的计算任务。</p>"
  },
  {
    id: 5,
    title: "MySQL 复杂查询优化实践笔记",
    date: "2026-05-15",
    category: "数据库",
    summary: "记录在课程项目中遇到的一些 MySQL 查询性能问题，通过索引优化、查询重构和事务控制等手段提升数据库响应速度的实践经验。",
    content: "<p>在开发过程中，我遇到了一些数据库查询性能的瓶颈问题，通过学习和实践，积累了一些优化经验。</p><p><strong>索引优化</strong>：通过 EXPLAIN 分析慢查询，发现表扫描是主要性能瓶颈。合理添加联合索引和覆盖索引后，查询速度提升了 10 倍以上。</p><p><strong>查询重构</strong>：将多层嵌套子查询改写为 JOIN 查询，减少临时表的产生。避免 SELECT *，只查询需要的字段，减少数据传输量。</p><p><strong>事务控制</strong>：合理控制事务的粒度和隔离级别，避免长事务导致的锁竞争和死锁问题。</p><p>数据库优化是一个持续的过程，需要结合业务场景和数据量级做针对性的调整。</p>"
  },
  {
    id: 6,
    title: "Prompt Engineering 与大模型应用实践",
    date: "2026-05-08",
    category: "AI",
    summary: "在开发 AI Agent 的过程中，深入实践了 Prompt Engineering、RAG 检索增强生成等大模型应用技术，分享一些关键经验。",
    content: "<p>Prompt Engineering 是大模型应用开发的基础能力，良好的 Prompt 设计能显著提升大模型输出的质量和稳定性。</p><p><strong>系统提示词设计</strong>：在电商分析项目中，我设计了结构化的 System Prompt，明确了大模型的角色定位、能力边界和输出格式要求，有效降低了幻觉和偏离主题的问题。</p><p><strong>RAG 实践</strong>：对于需要参考特定知识的问题，我引入 RAG 检索增强生成机制，将相关知识文档向量化后作为上下文注入 Prompt，准确率大幅提升。</p><p><strong>工具调用策略</strong>：在 Function Calling 设计中，我将工具描述写得清晰具体，大模型仅负责任务拆解和工具选择，精确计算由后端完成。</p>"
  }
];

const projectsData = [
  {
    id: 1,
    name: "\"friend\"社交应用",
    description: "面向年轻人的社区内容平台，核心提供发帖分享、浏览信息流、互动点赞评论、建立好友关系、私信沟通的一站式社交体验。技术栈：Vue 3 + TypeScript + uni-app + Pinia + Element Plus。基于 uni-app 实现多端编译（小程序/H5/App），独立实现了登录注册、Feed流、点赞评论、好友关系、WebSocket 实时私信等完整社交链路。配套 Vue 3 + Element Plus 运营后台，封装通用表格/表单组件。",
    tags: ["Vue 3", "TypeScript", "uni-app", "Pinia", "WebSocket"],
    cover: "微信图片_20260627163752_3_821.jpg"
  },
  {
    id: 2,
    name: "电商用户价值分析系统",
    description: "基于 DeepSeek 大模型构建的智能电商数据分析平台，用户通过自然语言提问即可自动完成客户分层、数据质量体检与智能清洗等复杂分析任务。设计 Function Calling 多工具调度链路实现完整 Agent 闭环；采用 SSE 流式传输与前端自定义渲染器实现文字与图表混合流式输出；引入 Web Worker 处理 K-Means 聚类，主线程阻塞时间降低约 70%。采用\"数据精确计算层 + AI 解读层\"分离架构。",
    tags: ["DeepSeek", "AI Agent", "Function Calling", "SSE", "Web Worker"],
    cover: "微信图片_20260626174753_2828_287.png"
  }
];
