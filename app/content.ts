export type Language = "en" | "zh";
export type LocalizedText = { en: string; zh: string };
export type SectionId = "education" | "research" | "experience" | "publications" | "awards";

export type PortfolioEntry = {
  slug: string;
  section: SectionId;
  year: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  tags: LocalizedText[];
  detail: { heading: LocalizedText; body: LocalizedText }[];
};

export const sections: { id: SectionId; label: LocalizedText; intro: LocalizedText }[] = [
  { id: "education", label: { en: "Education", zh: "教育背景" }, intro: { en: "Academic training and the questions that shaped it.", zh: "学术训练，以及在学习中逐渐形成的问题意识。" } },
  { id: "research", label: { en: "Research", zh: "科研" }, intro: { en: "Selected investigations across physiology and data.", zh: "围绕生理学与数据分析开展的研究项目。" } },
  { id: "experience", label: { en: "Experience", zh: "实习经历" }, intro: { en: "Professional practice, communication, and service.", zh: "专业实践、科学传播与公共服务经历。" } },
  { id: "publications", label: { en: "Publications", zh: "论文发表" }, intro: { en: "Published work, manuscripts, and research outputs.", zh: "已发表论文、手稿与其他研究成果。" } },
  { id: "awards", label: { en: "Awards", zh: "获奖经历" }, intro: { en: "Recognition for academic work and contribution.", zh: "学术表现与社会贡献所获认可。" } },
];

export const entries: PortfolioEntry[] = [
  {
    slug: "current-degree",
    section: "education",
    year: "20XX — Present",
    title: { en: "Current degree programme", zh: "当前学位项目" },
    subtitle: { en: "University · Department", zh: "大学 · 院系" },
    summary: { en: "A concise degree summary will sit here, with selected modules and academic focus.", zh: "这里将简要介绍学位、核心课程与学术方向。" },
    tags: [{ en: "Degree", zh: "学位" }, { en: "Coursework", zh: "课程" }],
    detail: [
      { heading: { en: "Overview", zh: "概览" }, body: { en: "Add the programme, institution, dates, classification, and one sentence about the intellectual focus.", zh: "补充项目名称、学校、时间、成绩，以及一句对学术重点的概括。" } },
      { heading: { en: "Selected study", zh: "重点课程" }, body: { en: "Use this section for only the modules, dissertation, or training most relevant to the portfolio.", zh: "仅列出与作品集最相关的课程、毕业论文或专业训练。" } },
    ],
  },
  {
    slug: "earlier-education",
    section: "education",
    year: "20XX — 20XX",
    title: { en: "Earlier academic training", zh: "早期学术经历" },
    subtitle: { en: "Institution · Subject", zh: "院校 · 专业" },
    summary: { en: "A second education entry keeps the timeline complete without crowding the homepage.", zh: "第二条教育经历让时间线完整，同时保持首页简洁。" },
    tags: [{ en: "Foundation", zh: "基础训练" }],
    detail: [{ heading: { en: "Overview", zh: "概览" }, body: { en: "Replace this drafting note with the final bilingual education summary.", zh: "正式填充内容时，将本提示替换为双语教育经历简介。" } }],
  },
  {
    slug: "cardiac-acoustics",
    section: "research",
    year: "20XX — Present",
    title: { en: "Cardiac acoustics", zh: "心脏声学研究" },
    subtitle: { en: "Research project · Cambridge", zh: "科研项目 · 剑桥" },
    summary: { en: "A project page prepared for the study question, participant work, analytical approach, and selected figures.", zh: "项目页将用于呈现研究问题、受试者工作、分析方法与代表性图表。" },
    tags: [{ en: "Human physiology", zh: "人体生理学" }, { en: "Signal analysis", zh: "信号分析" }],
    detail: [
      { heading: { en: "Research question", zh: "研究问题" }, body: { en: "State the scientific question and why cardiac sound signals are informative in two or three sentences.", zh: "用两三句话说明科学问题，以及心音信号为何能提供有效信息。" } },
      { heading: { en: "Approach", zh: "研究方法" }, body: { en: "Summarise study design, participant-facing work, acquisition, and analysis at a reader-friendly level.", zh: "以易读方式概括研究设计、受试者工作、数据采集与分析。" } },
      { heading: { en: "Outcome", zh: "阶段成果" }, body: { en: "Add the key finding, output, or current project status when the content is ready.", zh: "内容确定后，在此加入主要发现、成果或当前进度。" } },
    ],
  },
  {
    slug: "network-physiology",
    section: "research",
    year: "20XX",
    title: { en: "Network physiology in critical illness", zh: "危重病中的网络生理学" },
    subtitle: { en: "Research project · UCL", zh: "科研项目 · 伦敦大学学院" },
    summary: { en: "A data-led study of physiological dynamics, designed here as a compact, non-technical research story.", zh: "一项基于生理动态数据的研究；详情页将以精炼、易读的方式讲清研究逻辑。" },
    tags: [{ en: "Critical care", zh: "重症医学" }, { en: "Data analysis", zh: "数据分析" }],
    detail: [
      { heading: { en: "Research question", zh: "研究问题" }, body: { en: "Introduce the physiological pattern under study and its potential relevance to clinical outcome.", zh: "介绍所研究的生理模式，以及它与临床结局的潜在关系。" } },
      { heading: { en: "Approach", zh: "研究方法" }, body: { en: "Describe the healthy reference, patient data, deviation measure, and survival analysis in plain language.", zh: "用简明语言介绍健康参照、患者数据、偏离指标与生存分析。" } },
    ],
  },
  {
    slug: "genomics-communication",
    section: "experience",
    year: "20XX",
    title: { en: "Genomics communication", zh: "基因健康科普" },
    subtitle: { en: "HaploX · Internship", zh: "HaploX · 实习" },
    summary: { en: "Translated genetics and precision-medicine concepts into accessible public-facing materials.", zh: "将基因健康与精准医学知识转化为面向公众的科普内容。" },
    tags: [{ en: "Science communication", zh: "科学传播" }, { en: "Genomics", zh: "基因组学" }],
    detail: [{ heading: { en: "Contribution", zh: "工作内容" }, body: { en: "Add selected formats, audiences, responsibilities, and examples once the content is approved.", zh: "内容确认后，补充作品形式、受众、职责与代表案例。" } }],
  },
  {
    slug: "research-governance",
    section: "experience",
    year: "20XX — Present",
    title: { en: "Research ethics & governance", zh: "科研伦理与治理" },
    subtitle: { en: "Committee service", zh: "委员会经历" },
    summary: { en: "A page for committee responsibilities, review experience, and contributions to research quality.", zh: "用于介绍委员会职责、审查经验及对研究质量的贡献。" },
    tags: [{ en: "Ethics", zh: "科研伦理" }, { en: "Service", zh: "公共服务" }],
    detail: [{ heading: { en: "Role", zh: "角色" }, body: { en: "Summarise the remit, your responsibilities, and the perspective you brought to the work.", zh: "概括工作范围、个人职责，以及你为委员会带来的视角。" } }],
  },
  {
    slug: "selected-publication",
    section: "publications",
    year: "20XX",
    title: { en: "Selected publication", zh: "代表性论文" },
    subtitle: { en: "Journal · Citation to add", zh: "期刊 · 待补引用信息" },
    summary: { en: "The final entry can pair a formal citation with a short plain-language explanation of the work.", zh: "正式版本可同时呈现规范引用与简短易懂的研究说明。" },
    tags: [{ en: "Journal article", zh: "期刊论文" }],
    detail: [
      { heading: { en: "Abstract in brief", zh: "论文简述" }, body: { en: "Explain the research question, approach, and principal result without repeating the abstract.", zh: "不重复摘要原文，用简短语言说明研究问题、方法与主要结果。" } },
      { heading: { en: "Citation & links", zh: "引用与链接" }, body: { en: "Add the full citation, DOI, open-access link, and author contribution where appropriate.", zh: "补充完整引用、DOI、开放获取链接及个人作者贡献。" } },
    ],
  },
  {
    slug: "works-in-progress",
    section: "publications",
    year: "In progress",
    title: { en: "Works in progress", zh: "进行中的成果" },
    subtitle: { en: "Manuscripts · Posters · Talks", zh: "手稿 · 海报 · 报告" },
    summary: { en: "A flexible home for outputs that are useful to show but do not yet have a formal citation.", zh: "用于展示值得呈现、但尚未形成正式引用的研究成果。" },
    tags: [{ en: "Research output", zh: "研究成果" }],
    detail: [{ heading: { en: "Current work", zh: "当前工作" }, body: { en: "List only public or shareable work, with its status stated precisely.", zh: "仅列出可公开或可分享的成果，并准确标明进度。" } }],
  },
  {
    slug: "academic-awards",
    section: "awards",
    year: "20XX",
    title: { en: "Academic awards", zh: "学术奖项" },
    subtitle: { en: "Institution · Awarding body", zh: "院校 · 颁发机构" },
    summary: { en: "A dedicated page for the basis of each distinction and its context.", zh: "独立页面用于说明奖项依据及其背景。" },
    tags: [{ en: "Academic", zh: "学术" }],
    detail: [{ heading: { en: "Recognition", zh: "获奖说明" }, body: { en: "Add the official award name, date, awarding body, and one line of context.", zh: "补充奖项正式名称、日期、颁发机构及一句背景说明。" } }],
  },
  {
    slug: "leadership-service-awards",
    section: "awards",
    year: "20XX",
    title: { en: "Leadership & service recognition", zh: "领导力与服务荣誉" },
    subtitle: { en: "Organisation · Recognition", zh: "机构 · 荣誉" },
    summary: { en: "A separate entry keeps non-academic recognition visible without mixing distinct evidence.", zh: "单独呈现非学术荣誉，避免将不同性质的经历混在一起。" },
    tags: [{ en: "Leadership", zh: "领导力" }, { en: "Service", zh: "服务" }],
    detail: [{ heading: { en: "Context", zh: "背景" }, body: { en: "Describe the contribution recognised and the selection context concisely.", zh: "简要说明获认可的贡献以及评选背景。" } }],
  },
];

export function text(value: LocalizedText, language: Language) {
  return value[language];
}

export function entriesFor(section: SectionId) {
  return entries.filter((entry) => entry.section === section);
}

export function entryBySlug(slug: string) {
  return entries.find((entry) => entry.slug === slug);
}
