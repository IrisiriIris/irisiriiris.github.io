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
  metrics?: { value: string; label: LocalizedText }[];
  links?: { label: LocalizedText; href: string }[];
  aside?: LocalizedText;
  detail: { heading: LocalizedText; body: LocalizedText }[];
};

export const sections: { id: SectionId; label: LocalizedText; intro: LocalizedText }[] = [
  { id: "education", label: { en: "Education", zh: "教育背景" }, intro: { en: "Training across medical science, translational research, and health technology.", zh: "从医学科学到转化研究与医疗技术的系统训练。" } },
  { id: "research", label: { en: "Research", zh: "科研" }, intro: { en: "Human studies and physiological data, connected by a focus on clinically meaningful signals.", zh: "围绕具有临床意义的生理信号，开展人体研究与数据分析。" } },
  { id: "experience", label: { en: "Experience", zh: "实践经历" }, intro: { en: "Research governance, science communication, and educational innovation.", zh: "科研治理、科学传播与教育创新实践。" } },
  { id: "publications", label: { en: "Publications", zh: "论文成果" }, intro: { en: "Peer-reviewed research and substantial academic outputs.", zh: "同行评议论文与主要学术成果。" } },
  { id: "awards", label: { en: "Awards", zh: "获奖经历" }, intro: { en: "Recognition for physiology research and collaborative clinical reasoning.", zh: "在生理学研究与团队临床推理方面获得的认可。" } },
];

export const entries: PortfolioEntry[] = [
  {
    slug: "cambridge-mphil",
    section: "education",
    year: "2025 — 2026",
    title: { en: "MPhil in Translating Medical Device and Advanced Therapy Research", zh: "医疗器械与先进疗法转化研究硕士" },
    subtitle: { en: "University of Cambridge", zh: "剑桥大学" },
    summary: { en: "A translational programme connecting device development and advanced therapies with clinical study design, regulation, statistics, and commercialisation.", zh: "以转化医学为主线，将医疗器械与先进疗法研发同临床研究、监管、统计及成果转化相连接。" },
    tags: [{ en: "Medical devices", zh: "医疗器械" }, { en: "Clinical research", zh: "临床研究" }, { en: "Regulation", zh: "法规与监管" }],
    detail: [
      { heading: { en: "Device and therapy development", zh: "器械与疗法开发" }, body: { en: "Training covered device innovation, AI and software as medical devices, implantable systems, verification and validation, risk management, user interfaces, and quality and safety. Advanced-therapy teaching included stem-cell and gene-based products, in-vitro toxicology, manufacturing, and scale-up.", zh: "课程涵盖器械创新、AI 与医疗软件、植入式器械、验证与确认、风险管理、用户界面及质量安全；先进疗法部分则包括干细胞与基因类产品、体外毒理、生产与规模化。" } },
      { heading: { en: "Clinical and quantitative methods", zh: "临床与定量方法" }, body: { en: "Clinical trial design, ethics and Research Ethics Committees, first-in-human studies, systematic review, and qualitative research were paired with R-based statistics, regression, survival analysis, sample-size planning, and adaptive trial designs.", zh: "临床试验设计、研究伦理与 REC、首次人体研究、系统综述和定性研究，与基于 R 的统计、回归、生存分析、样本量设计及适应性试验相结合。" } },
      { heading: { en: "Translation and implementation", zh: "转化与实施" }, body: { en: "The programme also examined health economics, stakeholder engagement, business models, pricing, intellectual property, commercialisation, sustainability, and communication—placing technical evidence within the full path from laboratory to patient use.", zh: "课程同时涉及卫生经济学、利益相关者沟通、商业模式、定价、知识产权、商业化、可持续性与媒体传播，帮助我从实验室到患者应用的完整路径理解技术证据。" } },
    ],
  },
  {
    slug: "ucl-applied-medical-sciences",
    section: "education",
    year: "2022 — 2025",
    title: { en: "BSc Applied Medical Sciences", zh: "应用医学科学学士" },
    subtitle: { en: "University College London · First Class Honours", zh: "伦敦大学学院 · 一等荣誉学位" },
    summary: { en: "Graduated with First Class Honours in the top 5% of the programme, building an integrated foundation in human systems, molecular disease, neuroscience, and quantitative research.", zh: "以专业前 5% 的成绩获一等荣誉学位，建立了人体系统、疾病分子机制、神经科学与定量研究的综合基础。" },
    tags: [{ en: "Physiology", zh: "生理学" }, { en: "Neuroscience", zh: "神经科学" }, { en: "Research methods", zh: "研究方法" }],
    detail: [
      { heading: { en: "Integrated medical science", zh: "整合医学基础" }, body: { en: "Core study connected cardiovascular and respiratory physiology, liver and drug metabolism, renal and endocrine regulation, infection and inflammation, anatomy and imaging, molecular disease, pharmacology, and cell biology.", zh: "核心课程将心血管与呼吸生理、肝脏与药物代谢、肾脏与内分泌调控、感染与炎症、解剖与影像、疾病分子基础、药理学及细胞生物学贯通起来。" } },
      { heading: { en: "Selected advanced study", zh: "进阶课程" }, body: { en: "Selected modules included neurological disease, biological rhythms, clinical trials, bioinformatics, advanced bacteriology, mind–brain processes, regulatory affairs, and the relationship between bioscience, public engagement, policy, and funding.", zh: "进阶学习包括神经系统与神经疾病、生物节律、临床试验、生物信息学、高级医学细菌学、心理与脑过程、医疗监管，以及生物科学与公众参与、政策和资助之间的关系。" } },
      { heading: { en: "Research preparation", zh: "科研训练" }, body: { en: "Training in scientific evaluation, molecular techniques, medical statistics, and bench-to-bedside research culminated in an independent research project in network physiology and a first-author journal paper.", zh: "通过科学证据评价、分子医学技术、医学统计与从实验室到临床的研究方法训练，最终完成网络生理学独立课题并形成第一作者论文。" } },
    ],
  },
  {
    slug: "cardiac-acoustics",
    section: "research",
    year: "2025 — 2026",
    title: { en: "Cardiac acoustics after exercise", zh: "运动后心脏声学研究" },
    subtitle: { en: "Acoustics Laboratory · University of Cambridge", zh: "声学实验室 · 剑桥大学" },
    summary: { en: "A prospective feasibility study asking when a participant-held, six-sensor patch can capture analysable heart sounds while physiological stress is still present.", zh: "一项前瞻性可行性研究：在运动负荷尚未完全消退时，六传感器自持式贴片能否稳定采集可分析的心音。" },
    tags: [{ en: "Human study", zh: "人体研究" }, { en: "Signal quality", zh: "信号质量" }, { en: "Mixed-effects modelling", zh: "混合效应模型" }, { en: "Python · R", zh: "Python · R" }],
    metrics: [
      { value: "39", label: { en: "healthy participants", zh: "名健康受试者" } },
      { value: "95.7%", label: { en: "early-recovery recordings usable", zh: "早期恢复期记录可用" } },
      { value: "82.0", label: { en: "mean usability score", zh: "平均系统可用性评分" } },
    ],
    aside: { en: "MPhil thesis study. The page foregrounds the decisions that make later diagnostic modelling trustworthy: protocol design, signal quality, repeated measures, and honest limits.", zh: "硕士论文研究。本页重点呈现让后续诊断建模可信的前置工作：研究方案、信号质量、重复测量与边界意识。" },
    detail: [
      { heading: { en: "The problem", zh: "研究问题" }, body: { en: "Coronary disease is demand-dependent, so exertion may expose acoustic changes that are subtle at rest. Yet active exercise also introduces motion, breathing, and contact artefacts. Before testing diagnostic performance, I asked whether usable signals could be acquired during exercise or whether early recovery offered a better compromise.", zh: "冠状动脉疾病与负荷相关，运动可能暴露静息时不明显的声学变化，但也会带来动作、呼吸和接触伪影。因此在验证诊断性能前，我先回答一个基础问题：应当在运动中采集，还是在运动后的早期恢复期采集，才能兼顾生理负荷与信号质量？" } },
      { heading: { en: "Study design and acquisition", zh: "研究设计与采集" }, body: { en: "I conducted a single-centre prospective study with 39 healthy adults. Participants placed and held the Biophonics Patch 2 at tricuspid and mitral sites, completing three attempts across rest, cycling, early recovery, and late recovery. I managed participant-facing procedures and the resulting pseudonymised, six-channel recordings.", zh: "我开展了单中心前瞻性研究，共纳入 39 名健康成年人。受试者将 Biophonics Patch 2 分别置于三尖瓣区与二尖瓣区，在静息、骑行、早期恢复及晚期恢复四个阶段各完成三次采集；我负责受试者流程及由此产生的匿名化六通道数据。" } },
      { heading: { en: "Analysis and quality control", zh: "分析与质量控制" }, body: { en: "Recordings were divided into eight-second windows. I reviewed automated S1–systole–S2–diastole labels in a human-verification interface, corrected boundaries where possible, and combined segmentability with a pre-specified best-channel SNR threshold of 8 dB. Bayesian and frequentist mixed-effects models accounted for repeated observations and near-complete separation.", zh: "我将信号切分为 8 秒窗口，并在人机核验界面中逐一审查自动生成的 S1—收缩期—S2—舒张期标记，必要时手动校正。研究以可分割性和最佳通道 SNR≥8 dB 共同定义可用记录，并分别采用贝叶斯与频率学混合效应模型处理重复测量及近完全分离问题。" } },
      { heading: { en: "What the study showed", zh: "主要发现" }, body: { en: "Signal quality fell sharply during cycling, especially at the mitral site, but recovered while heart rate remained 17.6 bpm above rest. In early recovery, 224 of 234 recordings were usable and the first attempt succeeded in 77 of 78 participant–location units. The result supports a recovery-centred acquisition protocol, with repeat recording triggered by quality control rather than routine repetition; diagnostic validity still requires testing in patients.", zh: "运动中信号质量明显下降，二尖瓣区尤为突出；进入早期恢复后，心率仍比静息高 17.6 次/分，而 234 次记录中有 224 次可用，78 个“受试者—位置”单元中有 77 个首次采集即成功。结果支持将标准化恢复期作为主要采集窗口，并仅在质量控制失败时重复采集；其诊断效度仍需在患者中验证。" } },
    ],
  },
  {
    slug: "network-physiology",
    section: "research",
    year: "2024 — 2026",
    title: { en: "Oxygen-saturation dynamics in critical illness", zh: "危重病中的血氧动态" },
    subtitle: { en: "Network Physiology Laboratory · UCL", zh: "网络生理学实验室 · 伦敦大学学院" },
    summary: { en: "A first-author study that turns oxygen-saturation complexity into a directional measure of how a patient's response departs from healthy adaptation to hypoxia.", zh: "一项第一作者研究：将血氧波动的复杂性转化为方向性指标，用于描述患者相对健康低氧适应模式的偏离。" },
    tags: [{ en: "Physiological time series", zh: "生理时间序列" }, { en: "Entropy", zh: "熵分析" }, { en: "Survival analysis", zh: "生存分析" }, { en: "MATLAB", zh: "MATLAB" }],
    metrics: [
      { value: "450", label: { en: "ICU patients", zh: "例 ICU 患者" } },
      { value: "4", label: { en: "critical-illness cohorts", zh: "类危重病队列" } },
      { value: "1.79", label: { en: "adjusted hazard ratio in sepsis", zh: "脓毒症校正后风险比" } },
    ],
    links: [
      { label: { en: "Read the open-access paper", zh: "阅读开放获取论文" }, href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13140704/" },
      { label: { en: "DOI record", zh: "DOI 页面" }, href: "https://doi.org/10.1113/EP093235" },
    ],
    aside: { en: "Published in Experimental Physiology. I contributed to study conception and design, data analysis and interpretation, and manuscript development.", zh: "发表于 Experimental Physiology。我参与研究构思与设计、数据分析与解释，以及论文撰写和修订。" },
    detail: [
      { heading: { en: "The interpretive gap", zh: "解释上的缺口" }, body: { en: "SpO₂ entropy describes how predictable a signal is, but the same entropy value can mean different things at 99% and 85% saturation. I therefore treated complexity as a response to physiological challenge, not a stand-alone number, and asked whether departure from the normal response to hypoxia carried clinical information.", zh: "SpO₂ 熵反映信号的可预测性，但同一个熵值出现在 99% 与 85% 血氧时，生理意义并不相同。因此我不再把复杂性视为孤立数值，而把它放回低氧挑战的背景中，考察偏离正常适应反应是否具有临床信息。" } },
      { heading: { en: "A directional framework", zh: "方向性分析框架" }, body: { en: "Using graded-hypoxia data from 12 healthy participants, I developed a healthy mean-SpO₂–entropy trajectory. A signed perpendicular distance, δ, then captured whether each ICU signal was less variable or more irregular than expected for its hypoxia severity. MATLAB workflows calculated sample and multiscale entropy from one-hertz recordings.", zh: "我利用 12 名健康受试者的分级低氧数据建立“平均 SpO₂—熵”健康轨迹，再用带符号的垂直距离 δ 表示 ICU 信号在相同低氧程度下比预期更平坦还是更紊乱，并通过 MATLAB 流程计算 1 Hz 信号的样本熵与多尺度熵。" } },
      { heading: { en: "Testing clinical meaning", zh: "检验临床意义" }, body: { en: "The framework was applied to 450 ICU patients with sepsis, COPD, acute liver failure, or cirrhosis and compared with 108 healthy resting participants. Group comparisons examined disease-specific patterns, and Cox models tested 30-day ICU mortality while accounting for SOFA score and ventilation.", zh: "该框架应用于 450 例脓毒症、COPD、急性肝衰竭或肝硬化 ICU 患者，并与 108 名健康静息受试者比较。研究通过组间比较识别疾病特异性模式，再用 Cox 模型在校正 SOFA 评分和机械通气后评估 30 天 ICU 死亡结局。" } },
      { heading: { en: "Finding and interpretation", zh: "结果与解释" }, body: { en: "In sepsis, a larger positive deviation—lower entropy than expected—was associated with mortality after adjustment (hazard ratio 1.79). The same prognostic signal did not generalise across COPD or liver cohorts, while cirrhosis showed an opposite pattern. This disease specificity is part of the result: the method adds physiological context, but it is not a universal risk score and needs external validation.", zh: "在脓毒症中，更大的正向偏离——即熵低于同等低氧程度下的预期——在校正后仍与死亡相关（风险比 1.79）。这一预后关系并未普遍出现在 COPD 或肝病队列中，肝硬化反而呈现相反模式。疾病特异性本身就是结果的一部分：该方法为复杂性补充了生理背景，但不是通用风险评分，仍需外部验证。" } },
    ],
  },
  {
    slug: "research-ethics-committee",
    section: "experience",
    year: "2026 — Present",
    title: { en: "Research Ethics Committee lay member", zh: "研究伦理委员会公众委员" },
    subtitle: { en: "Health Research Authority · East Midlands—Leicester Central", zh: "英国健康研究管理局 · East Midlands—Leicester Central" },
    summary: { en: "Appointed as a lay member to bring independent judgement and a participant-centred perspective to the ethical review of health and social-care research.", zh: "受聘为公众委员，以独立判断和受试者视角参与健康与社会照护研究的伦理审查。" },
    tags: [{ en: "Research ethics", zh: "研究伦理" }, { en: "Risk–benefit review", zh: "风险—获益审查" }, { en: "Governance", zh: "研究治理" }],
    aside: { en: "A five-year appointment beginning in January 2026, with continuing training and regular committee participation.", zh: "五年任期自 2026 年 1 月开始，并持续接受培训、参加委员会审查。" },
    detail: [
      { heading: { en: "Role", zh: "角色" }, body: { en: "I review research applications as an individual committee member rather than as a representative of an institution or profession. The role calls for attention to scientific justification, proportionality of risk, consent, privacy, participant information, and the practical experience of taking part in a study.", zh: "我以独立委员身份审阅研究申请，而非代表某个机构或专业群体。审查关注科学依据、风险是否适度、知情同意、隐私保护、受试者材料，以及真实参与研究时可能面临的体验。" } },
      { heading: { en: "Perspective and skills", zh: "视角与能力" }, body: { en: "Committee work develops structured risk–benefit reasoning, concise written review, interdisciplinary discussion, and the ability to distinguish regulatory compliance from genuinely participant-centred research design.", zh: "委员会工作训练了结构化风险—获益判断、简洁书面审查、跨专业讨论，以及区分“满足监管要求”与“真正以受试者为中心”的能力。" } },
    ],
  },
  {
    slug: "haplox-biotechnology",
    section: "experience",
    year: "2024",
    title: { en: "Medical writing and genomics communication", zh: "医学写作与基因健康传播" },
    subtitle: { en: "HaploX Biotechnology · Internship", zh: "HaploX 生物科技 · 实习" },
    summary: { en: "Translated genetics and precision-medicine topics into concise, public-facing Chinese articles and narrated visual content.", zh: "将遗传学与精准医学主题转化为简洁、面向公众的中文文章及图文讲解内容。" },
    tags: [{ en: "Science communication", zh: "科学传播" }, { en: "Genomics", zh: "基因组学" }, { en: "Video production", zh: "视频制作" }],
    links: [{ label: { en: "Earlier portfolio entry", zh: "旧版作品集详情" }, href: "https://reflect.ucl.ac.uk/ims-portfolio-22-23-iris-feng/coursework-showcase/haplox-biotechnology/" }],
    detail: [
      { heading: { en: "From source material to story", zh: "从资料到内容" }, body: { en: "I began by researching gene-related source material and translating it into accessible Chinese, then progressed to selecting topics, writing scripts, and producing short-form videos with editing and voice-over. Subjects ranged from inherited and neurodegenerative disorders to circadian, metabolic, and exercise-related genetics.", zh: "我最初负责检索基因相关资料并转化为易懂中文，随后逐步独立承担选题、脚本撰写及短视频剪辑与配音。内容涵盖遗传病与神经退行性疾病，也包括昼夜节律、代谢及运动相关基因。" } },
      { heading: { en: "What the work developed", zh: "能力积累" }, body: { en: "The internship strengthened evidence selection, audience-aware medical writing, visual explanation, and editorial judgement: deciding what detail is necessary for accuracy, and what can be removed so a non-specialist can follow the core idea.", zh: "这段经历强化了证据筛选、面向不同受众的医学写作、视觉化解释与编辑判断：既保留保证准确性所需的信息，也删去阻碍非专业读者理解的细节。" } },
    ],
  },
  {
    slug: "ucl-changemakers",
    section: "experience",
    year: "2023 — 2024",
    title: { en: "Curriculum innovation project lead", zh: "课程创新项目负责人" },
    subtitle: { en: "UCL ChangeMakers", zh: "UCL ChangeMakers" },
    summary: { en: "Initiated and led a student–staff project that reframed exam support as interactive case-based learning designed to prompt curiosity and critical thinking.", zh: "发起并领导学生—教师协作项目，将“应试支持”重新设计为激发好奇心与批判性思维的互动案例学习。" },
    tags: [{ en: "Project leadership", zh: "项目领导" }, { en: "Learning design", zh: "学习设计" }, { en: "Stakeholder engagement", zh: "多方协作" }],
    metrics: [
      { value: "12", label: { en: "interactive learning cases", zh: "个互动学习案例" } },
      { value: "≈2,900", label: { en: "faculty-wide student audience", zh: "名院系潜在学生受众" } },
    ],
    links: [{ label: { en: "Earlier portfolio entry", zh: "旧版作品集详情" }, href: "https://reflect.ucl.ac.uk/ims-portfolio-22-23-iris-feng/coursework-showcase/ucl-changemakers-project-leader/" }],
    detail: [
      { heading: { en: "Reframing the brief", zh: "重新定义问题" }, body: { en: "The project began as an attempt to improve exam preparation in Applied Medical Sciences. Through discussion with students and teaching staff, I shifted the goal from rehearsing assessment to creating clinically grounded activities that could reveal neglected topics and encourage deeper inquiry.", zh: "项目最初旨在改善应用医学科学学生的考试准备。通过与学生及教师讨论，我把目标从重复应试训练转向具有临床情境的互动活动，用案例补足易被忽视的主题，并鼓励更深入的追问。" } },
      { heading: { en: "Delivery", zh: "项目实施" }, body: { en: "I coordinated a student collaborator, academic staff, programme administrators, the ChangeMakers team, and the incoming module lead. We translated learning needs into 12 H5P-style interactive cases spanning neuroscience and clinical mechanisms, with a route into future teaching materials.", zh: "我协调学生合作者、教师、项目行政人员、ChangeMakers 团队及下一年度课程负责人，把学习需求转化为 12 个 H5P 互动案例，覆盖神经科学与临床机制，并为后续纳入教学资源建立路径。" } },
      { heading: { en: "What I learned", zh: "项目收获" }, body: { en: "The work required scope-setting, stakeholder alignment, feedback synthesis, content quality control, and handover planning. It also changed how I evaluate educational impact: not only by short-term performance, but by whether a resource helps students ask better questions.", zh: "项目要求我完成范围界定、多方目标协调、反馈整合、内容质量控制及交接规划，也改变了我对教育影响的判断：不仅看短期成绩，更看资源能否帮助学生提出更好的问题。" } },
    ],
  },
  {
    slug: "spo2-directional-framework-paper",
    section: "publications",
    year: "2026",
    title: { en: "Interpreting peripheral oxygen saturation variability in critical illness", zh: "危重病中外周血氧饱和度变异性的解释" },
    subtitle: { en: "Experimental Physiology · First author", zh: "Experimental Physiology · 第一作者" },
    summary: { en: "Feng, S. I. et al. (2026). A directional framework adjusted for hypoxia severity. Experimental Physiology, 111(4), 2334–2347.", zh: "Feng, S. I. 等（2026）。一种校正低氧严重程度的方向性分析框架。Experimental Physiology, 111(4), 2334–2347。" },
    tags: [{ en: "Peer reviewed", zh: "同行评议" }, { en: "Open access", zh: "开放获取" }, { en: "First author", zh: "第一作者" }],
    links: [
      { label: { en: "Full text", zh: "阅读全文" }, href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13140704/" },
      { label: { en: "DOI: 10.1113/EP093235", zh: "DOI：10.1113/EP093235" }, href: "https://doi.org/10.1113/EP093235" },
    ],
    detail: [
      { heading: { en: "In brief", zh: "论文简述" }, body: { en: "The paper introduces a signed distance from the healthy relationship between mean oxygen saturation and entropy. Applied across four critical-illness cohorts, the measure identified distinct patterns of physiological dysregulation and an independent association with 30-day mortality in sepsis.", zh: "论文以健康人平均血氧与熵的关系为参照，提出带方向的偏离距离。该指标在四类危重病队列中呈现不同的生理失调模式，并在脓毒症中与 30 天死亡风险独立相关。" } },
      { heading: { en: "Contribution", zh: "个人贡献" }, body: { en: "As first author, I contributed to the conception and design of the work, data analysis and interpretation, and drafting and critical revision of the manuscript. The study grew from my UCL undergraduate research project into a peer-reviewed publication.", zh: "作为第一作者，我参与研究构思与设计、数据分析与解释，以及论文的撰写和关键修订。该研究由 UCL 本科科研课题发展为同行评议论文。" } },
    ],
  },
  {
    slug: "mphil-heart-sound-thesis",
    section: "publications",
    year: "2026",
    title: { en: "Heart-sound signal quality across rest, exercise, and recovery", zh: "静息、运动与恢复期的心音信号质量" },
    subtitle: { en: "University of Cambridge · MPhil thesis", zh: "剑桥大学 · 硕士论文" },
    summary: { en: "A prospective feasibility study of self-applied multi-sensor recording in healthy adults, establishing early recovery as the strongest acquisition window for later clinical investigation.", zh: "一项针对健康成人自持式多传感器采集的前瞻性可行性研究，为后续临床研究确定早期恢复期这一更优采集窗口。" },
    tags: [{ en: "Thesis", zh: "学位论文" }, { en: "Digital health", zh: "数字健康" }, { en: "Cardiac acoustics", zh: "心脏声学" }],
    detail: [
      { heading: { en: "Academic output", zh: "成果概述" }, body: { en: "The thesis integrates study design, participant acquisition, human-verified signal processing, quantitative quality criteria, Bayesian and frequentist mixed-effects analysis, usability assessment, and a protocol recommendation for the next clinical stage.", zh: "论文整合了研究设计、受试者采集、人机结合的信号处理、量化质量标准、贝叶斯与频率学混合效应分析、可用性评价，并为下一阶段临床研究提出采集方案建议。" } },
      { heading: { en: "Scope", zh: "研究边界" }, body: { en: "The work establishes acquisition feasibility rather than diagnostic accuracy. Its next test is whether recovery-period signals remain usable in patients and contribute to clinically relevant discrimination.", zh: "该研究验证的是采集可行性，而非诊断准确性；下一步需要检验恢复期信号在患者中是否仍可稳定获得，并能否贡献临床相关的疾病区分信息。" } },
    ],
  },
  {
    slug: "rob-clarke-award",
    section: "awards",
    year: "2025",
    title: { en: "Rob Clarke Abstract Award", zh: "Rob Clarke 摘要奖" },
    subtitle: { en: "The Physiological Society", zh: "英国生理学会" },
    summary: { en: "Recognised for an undergraduate physiology abstract and invited to present the oxygen-saturation research at the 2025 Member Forum at the Royal Society of Medicine.", zh: "本科生理学研究摘要获奖，并受邀在英国皇家医学会举行的 2025 Member Forum 展示血氧动态研究。" },
    tags: [{ en: "Physiology", zh: "生理学" }, { en: "Research abstract", zh: "研究摘要" }, { en: "Poster presentation", zh: "学术海报" }],
    links: [
      { label: { en: "Official 2025 winners", zh: "2025 获奖者官方报道" }, href: "https://www.physoc.org/news_article/congratulations-to-our-2025-rob-clarke-award-winners/" },
      { label: { en: "Award information", zh: "奖项介绍" }, href: "https://www.physoc.org/grants-and-prizes/prizes/the-rob-clarke-awards/" },
    ],
    detail: [
      { heading: { en: "Recognition", zh: "获奖说明" }, body: { en: "The Rob Clarke Awards recognise excellence in undergraduate physiology projects, including the student's ability to frame a hypothesis-driven project and show data collection and analytical skill. My abstract was one of 11 selected nationally for poster presentation and final judging.", zh: "Rob Clarke Awards 用于表彰优秀的本科生理学项目，重视学生是否能清楚呈现假设驱动的研究，以及数据采集与分析能力。我的摘要入选当年全英 11 项获奖作品，并进入现场海报展示与终评。" } },
      { heading: { en: "Presentation", zh: "现场展示" }, body: { en: "I presented “Interpreting Peripheral Oxygen Saturation Variability in Critical Illness” at the Society's Member Forum on 4 December 2025, explaining the directional entropy framework and responding to questions from physiologists and judges.", zh: "2025 年 12 月 4 日，我在学会 Member Forum 展示《危重病中外周血氧饱和度变异性的解释》，向生理学研究者与评委说明方向性熵分析框架并回答提问。" } },
    ],
  },
  {
    slug: "pbl-capstone-prize",
    section: "awards",
    year: "2023",
    title: { en: "First place, PBL Capstone Competition", zh: "PBL 综合项目竞赛一等奖" },
    subtitle: { en: "UCL Faculty of Medical Sciences", zh: "UCL 医学科学学院" },
    summary: { en: "A four-person team analysed a complex clinical case, connected symptoms and test results to underlying mechanisms, and communicated a coherent differential diagnosis.", zh: "四人团队分析复杂临床病例，将症状和检验结果与病理生理机制相连，并完整呈现鉴别诊断过程。" },
    tags: [{ en: "Clinical reasoning", zh: "临床推理" }, { en: "Teamwork", zh: "团队协作" }, { en: "Visual explanation", zh: "可视化表达" }],
    links: [{ label: { en: "Earlier portfolio entry", zh: "旧版作品集详情" }, href: "https://reflect.ucl.ac.uk/ims-portfolio-22-23-iris-feng/awards/ucl-pbl-competition-first-prize/" }],
    detail: [
      { heading: { en: "The challenge", zh: "任务" }, body: { en: "Given a patient's history, symptoms, and assay results, our team had to identify the diagnosis and explain the mechanisms connecting the evidence. We clarified unfamiliar terms, set shared learning objectives, researched alternatives, and tested the logic of the case together.", zh: "面对患者病史、症状及检验结果，我们需要判断诊断，并解释各项证据背后的关联机制。团队先澄清陌生概念、制定共同学习目标，再检索不同可能性并反复检验病例逻辑。" } },
      { heading: { en: "The response", zh: "解决方式" }, body: { en: "We built an integrated mechanism diagram as the backbone of the differential diagnosis and turned it into a narrated presentation. The process combined systems thinking, evidence synthesis, visual communication, task coordination, and teamwork under a deadline, resulting in first place.", zh: "我们以整合机制图作为鉴别诊断的主线，再制作成配音演示。整个过程结合了系统思维、证据整合、可视化表达、任务协调与限时协作，最终获得一等奖。" } },
    ],
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
