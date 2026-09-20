export type Language = "en" | "zh";
export type LocalizedText = { en: string; zh: string };
export type SectionId = "education" | "research" | "experience" | "publications" | "awards" | "extracurricular" | "coding";

export type PortfolioEntry = {
  slug: string;
  section: SectionId;
  year: string;
  title: LocalizedText;
  subtitle: LocalizedText;
  summary: LocalizedText;
  tags: LocalizedText[];
  metrics?: { value: string; label: LocalizedText }[];
  media?: { src: string; alt: LocalizedText; caption: LocalizedText; contain?: boolean; wide?: boolean }[];
  links?: { label: LocalizedText; href: string }[];
  aside?: LocalizedText;
  detail: { heading: LocalizedText; body: LocalizedText }[];
};

export const sections: { id: SectionId; label: LocalizedText; intro: LocalizedText }[] = [
  { id: "education", label: { en: "Education", zh: "教育背景" }, intro: { en: "Training across medical science, translational research, and health technology.", zh: "从医学科学到转化研究与医疗技术的系统训练。" } },
  { id: "research", label: { en: "Research", zh: "科研" }, intro: { en: "Human studies and physiological data, connected by a focus on clinically meaningful signals.", zh: "围绕具有临床意义的生理信号，开展人体研究与数据分析。" } },
  { id: "experience", label: { en: "Experience", zh: "实践经历" }, intro: { en: "Research governance, science communication, and educational innovation.", zh: "科研治理、科学传播与教育创新实践。" } },
  { id: "publications", label: { en: "Publications", zh: "论文成果" }, intro: { en: "Peer-reviewed research and substantial academic outputs.", zh: "同行评议论文与主要学术成果。" } },
  { id: "coding", label: { en: "Coding", zh: "编程" }, intro: { en: "Applied programming across physiological signal processing, statistical modelling, bioinformatics, and embedded prototyping.", zh: "将编程应用于生理信号处理、统计建模、生物信息学与嵌入式原型开发。" } },
  { id: "awards", label: { en: "Awards", zh: "获奖经历" }, intro: { en: "Recognition for physiology research and collaborative clinical reasoning.", zh: "在生理学研究与团队临床推理方面获得的认可。" } },
  { id: "extracurricular", label: { en: "Extracurricular", zh: "课外活动" }, intro: { en: "Creative practice and public-facing roles that developed discipline, composure, and communication beyond formal study.", zh: "在正式学习之外，通过艺术实践与公共活动培养自律、临场应变与沟通能力。" } },
];

export const entries: PortfolioEntry[] = [
  {
    slug: "cambridge-mphil",
    section: "education",
    year: "2025 — 2026",
    title: { en: "MPhil in Translating Medical Device and Advanced Therapy Research", zh: "医疗器械与先进疗法转化研究MPhil研究硕士" },
    subtitle: { en: "University of Cambridge", zh: "剑桥大学" },
    summary: { en: "Completed with Distinction, an overall mark of 78%, and a third-place cohort ranking. The programme connected device development and advanced therapies with clinical study design, regulation, statistics, and commercialisation.", zh: "以总成绩 78% 获 Distinction，同届排名第 3。课程以转化医学为主线，将医疗器械与先进疗法研发同临床研究、监管、统计及成果转化相连接。" },
    tags: [
      { en: "Medical Device Innovation", zh: "医疗器械创新" },
      { en: "Gene, Cell & CAR-T Therapies", zh: "基因、细胞及 CAR-T 治疗" },
      { en: "Advanced Statistics", zh: "进阶统计学" },
      { en: "Clinical Research Design", zh: "临床研究设计" },
      { en: "IP & Patents", zh: "知识产权与专利" },
      { en: "Medical Regulation", zh: "医疗监管" },
      { en: "Translation & Commercialisation", zh: "生物医学技术转化与商业化" },
    ],
    metrics: [
      { value: "78%", label: { en: "overall programme mark", zh: "总成绩" } },
      { value: "Distinction", label: { en: "degree result", zh: "学位等级" } },
      { value: "3rd", label: { en: "in the cohort", zh: "同届排名" } },
    ],
    detail: [
      { heading: { en: "Academic result", zh: "学业成绩" }, body: { en: "I completed the MPhil with Distinction, receiving an overall programme mark of 78% and ranking third in the cohort.", zh: "我以总成绩 78% 完成 MPhil，获 Distinction，并位列同届第 3 名。" } },
      { heading: { en: "Device and therapy development", zh: "器械与疗法开发" }, body: { en: "Training covered device innovation, AI and software as medical devices, implantable systems, verification and validation, risk management, user interfaces, and quality and safety. Advanced-therapy teaching included stem-cell and gene-based products, in-vitro toxicology, manufacturing, and scale-up.", zh: "课程涵盖器械创新、AI 与医疗软件、植入式器械、验证与确认、风险管理、用户界面及质量安全；先进疗法部分则包括干细胞与基因类产品、体外毒理、生产与规模化。" } },
      { heading: { en: "Clinical and quantitative methods", zh: "临床与定量方法" }, body: { en: "Clinical trial design, ethics and Research Ethics Committees, first-in-human studies, systematic review, and qualitative research were paired with R-based statistics, regression, survival analysis, sample-size planning, and adaptive trial designs.", zh: "临床试验设计、研究伦理与 REC、首次人体研究、系统综述和定性研究，与基于 R 的统计、回归、生存分析、样本量设计及适应性试验相结合。" } },
      { heading: { en: "Translation and implementation", zh: "转化与实施" }, body: { en: "The programme also examined health economics, stakeholder engagement, business models, pricing, intellectual property, commercialisation, sustainability, and communication—placing technical evidence within the full path from laboratory to patient use.", zh: "课程同时涉及卫生经济学、利益相关者沟通、商业模式、定价、知识产权、商业化、可持续性与媒体传播，帮助我从实验室到患者应用的完整路径理解技术证据。" } },
      { heading: { en: "Learning through application", zh: "在实践中学习" }, body: { en: "Alongside taught work, I applied this translational perspective through research in cardiac acoustics, a biotechnology hackathon, and entrepreneurship activities. These settings required me to connect scientific feasibility with user need, regulation, intellectual property, environmental impact, and a convincing implementation route.", zh: "在课程之外，我通过心脏声学研究、生物科技黑客松与创业活动实践这一转化视角，在不同情境中同时考虑科学可行性、用户需求、监管、知识产权、环境影响及落地路径。" } },
    ],
  },
  {
    slug: "ucl-applied-medical-sciences",
    section: "education",
    year: "2022 — 2025",
    title: { en: "Applied Medical Sciences BSc", zh: "应用医学科学BSc本科" },
    subtitle: { en: "University College London · First Class Honours", zh: "伦敦大学学院 · 一等荣誉学位" },
    summary: { en: "Graduated with First Class Honours in the top 5% of the programme, building an integrated foundation in human systems, molecular disease, neuroscience, and quantitative research.", zh: "以专业前 5% 的成绩获一等荣誉学位，建立了人体系统、疾病分子机制、神经科学与定量研究的综合基础。" },
    tags: [
      { en: "Physiology", zh: "生理学" },
      { en: "Medical Imaging & Anatomy", zh: "医学影像与解剖" },
      { en: "Nervous System & Neurological Disease", zh: "神经系统与神经疾病" },
      { en: "Brain & Behaviour", zh: "脑与行为" },
      { en: "Molecular Medicine Techniques", zh: "分子医学技术" },
      { en: "Molecular Basis of Disease", zh: "疾病分子机制" },
      { en: "Pharmacology", zh: "药理学" },
      { en: "Clinical Trial Design", zh: "临床试验设计" },
      { en: "Bioinformatics & Genomics", zh: "生物信息与基因组学" },
    ],
    metrics: [
      { value: "First", label: { en: "Class Honours", zh: "一等荣誉学位" } },
      { value: "Top 5%", label: { en: "of the programme", zh: "专业排名" } },
      { value: "41", label: { en: "school pupils mentored", zh: "名中学生获指导" } },
    ],
    detail: [
      { heading: { en: "Integrated medical science", zh: "整合医学基础" }, body: { en: "Core study connected cardiovascular and respiratory physiology, liver and drug metabolism, renal and endocrine regulation, infection and inflammation, anatomy and imaging, molecular disease, pharmacology, and cell biology.", zh: "核心课程将心血管与呼吸生理、肝脏与药物代谢、肾脏与内分泌调控、感染与炎症、解剖与影像、疾病分子基础、药理学及细胞生物学贯通起来。" } },
      { heading: { en: "Selected advanced study", zh: "进阶课程" }, body: { en: "Selected modules included neurological disease, biological rhythms, clinical trials, bioinformatics, advanced bacteriology, mind–brain processes, regulatory affairs, and the relationship between bioscience, public engagement, policy, and funding.", zh: "进阶学习包括神经系统与神经疾病、生物节律、临床试验、生物信息学、高级医学细菌学、心理与脑过程、医疗监管，以及生物科学与公众参与、政策和资助之间的关系。" } },
      { heading: { en: "Research preparation", zh: "科研训练" }, body: { en: "Training in scientific evaluation, molecular techniques, medical statistics, and bench-to-bedside research culminated in an independent research project in network physiology and a first-author journal paper.", zh: "通过科学证据评价、分子医学技术、医学统计与从实验室到临床的研究方法训练，最终完成网络生理学独立课题并形成第一作者论文。" } },
      { heading: { en: "Student ambassador and advisor", zh: "学生大使与学生顾问" }, body: { en: "As a Faculty of Medical Sciences Student Ambassador, I supported prospective students through taster sessions, individual advice on applications and course choices, and cross-cultural communication. I also led a widening-participation group of 41 pupils through the pathophysiology of melanoma; the sessions received a median feedback score of 4/4.", zh: "作为医学科学学院学生大使，我通过体验课、申请与选课的一对一建议及跨文化沟通支持潜在申请者。我还带领 41 名来自教育资源不足背景的中学生学习黑色素瘤病理生理学，活动反馈中位数为 4/4。" } },
      { heading: { en: "Leadership and academic community", zh: "领导力与学术共同体" }, body: { en: "I led a UCL ChangeMakers curriculum project, facilitated small-group tutorials, served as a student advisor within the faculty, chaired programme taster sessions, and performed piano at faculty events. Together, these roles developed facilitation, mentorship, public speaking, and the ability to make complex medical ideas accessible.", zh: "我曾负责 UCL ChangeMakers 课程创新项目、带领小组教程、担任学院学生顾问并主持专业体验活动，也在学院活动中进行钢琴演奏。这些经历共同训练了引导讨论、朋辈支持、公开表达，以及让复杂医学概念更易理解的能力。" } },
      { heading: { en: "How the degree shaped my direction", zh: "专业方向的形成" }, body: { en: "Working between code, physiological traces, and clinical questions taught me to see computation as a language for care rather than an end in itself. My undergraduate SpO₂ project brought systems thinking, entropy, and uncertainty together, and shaped my interest in clinically grounded quantitative physiology.", zh: "在代码、生理信号与临床问题之间工作，让我逐渐把计算视为服务医疗的语言，而非目的本身。本科 SpO₂ 项目把系统思维、熵与不确定性联系起来，也由此形成了我对临床导向定量生理学的兴趣。" } },
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
    media: [
      { src: "/images/cardiac-patch-placement.png", alt: { en: "Participant-held patch at tricuspid and mitral recording locations", zh: "受试者在三尖瓣区与二尖瓣区手持贴片采集" }, caption: { en: "The participant-held Biophonics Patch 2 was evaluated at tricuspid and mitral recording locations.", zh: "研究评估受试者在三尖瓣区和二尖瓣区手持 Biophonics Patch 2 的采集方式。" }, contain: true },
      { src: "/images/cardiac-study-timeline.png", alt: { en: "Study timeline from rest through exercise and recovery", zh: "从静息、运动到恢复期的研究流程时间线" }, caption: { en: "Each four-minute attempt moved from rest to cycling, early recovery, and late recovery.", zh: "每次四分钟采集依次包括静息、骑行、早期恢复和晚期恢复。" }, contain: true },
      { src: "/images/cardiac-signal-review.png", alt: { en: "Six-channel heart-sound review interface with cardiac-cycle labels", zh: "带心动周期标记的六通道心音核验界面" }, caption: { en: "I reviewed six-channel recordings in an interactive interface, checking and correcting S1, systole, S2, and diastole boundaries before quality analysis.", zh: "我在交互式界面中核验六通道记录，并在质量分析前检查和校正 S1、收缩期、S2 与舒张期边界。" }, contain: true, wide: true },
    ],
    aside: { en: "MPhil thesis study. The page foregrounds the decisions that make later diagnostic modelling trustworthy: protocol design, signal quality, repeated measures, and honest limits.", zh: "硕士论文研究。本页重点呈现让后续诊断建模可信的前置工作：研究方案、信号质量、重复测量与边界意识。" },
    detail: [
      { heading: { en: "The problem", zh: "研究问题" }, body: { en: "Coronary disease is demand-dependent, so exertion may expose acoustic changes that are subtle at rest. Yet active exercise also introduces motion, breathing, and contact artefacts. Before testing diagnostic performance, I asked whether usable signals could be acquired during exercise or whether early recovery offered a better compromise.", zh: "冠状动脉疾病与负荷相关，运动可能暴露静息时不明显的声学变化，但也会带来动作、呼吸和接触伪影。因此在验证诊断性能前，我先回答一个基础问题：应当在运动中采集，还是在运动后的早期恢复期采集，才能兼顾生理负荷与信号质量？" } },
      { heading: { en: "Study design and acquisition", zh: "研究设计与采集" }, body: { en: "I conducted a single-centre prospective study with 39 healthy adults. Participants placed and held the Biophonics Patch 2 at tricuspid and mitral sites, completing three attempts across rest, cycling, early recovery, and late recovery. I managed participant-facing procedures and the resulting pseudonymised, six-channel recordings.", zh: "我开展了单中心前瞻性研究，共纳入 39 名健康成年人。受试者将 Biophonics Patch 2 分别置于三尖瓣区与二尖瓣区，在静息、骑行、早期恢复及晚期恢复四个阶段各完成三次采集；我负责受试者流程及由此产生的匿名化六通道数据。" } },
      { heading: { en: "Analysis and quality control", zh: "分析与质量控制" }, body: { en: "Recordings were divided into eight-second windows. I reviewed automated S1–systole–S2–diastole labels in a human-verification interface, corrected boundaries where possible, and combined segmentability with a pre-specified best-channel SNR threshold of 8 dB. Bayesian and frequentist mixed-effects models accounted for repeated observations and near-complete separation.", zh: "我将信号切分为 8 秒窗口，并在人机核验界面中逐一审查自动生成的 S1—收缩期—S2—舒张期标记，必要时手动校正。研究以可分割性和最佳通道 SNR≥8 dB 共同定义可用记录，并分别采用贝叶斯与频率学混合效应模型处理重复测量及近完全分离问题。" } },
      { heading: { en: "What the study showed", zh: "主要发现" }, body: { en: "Signal quality fell sharply during cycling, especially at the mitral site, but recovered while heart rate remained 17.6 bpm above rest. In early recovery, 224 of 234 recordings were usable and the first attempt succeeded in 77 of 78 participant–location units. The result supports a recovery-centred acquisition protocol, with repeat recording triggered by quality control rather than routine repetition; diagnostic validity still requires testing in patients.", zh: "运动中信号质量明显下降，二尖瓣区尤为突出；进入早期恢复后，心率仍比静息高 17.6 次/分，而 234 次记录中有 224 次可用，78 个“受试者—位置”单元中有 77 个首次采集即成功。结果支持将标准化恢复期作为主要采集窗口，并仅在质量控制失败时重复采集；其诊断效度仍需在患者中验证。" } },
      { heading: { en: "From feasibility to clinical translation", zh: "从可行性走向临床转化" }, body: { en: "The study sits at the intersection of engineering, medicine, and data science. By establishing when and how the patch can be used reliably, it provides a defensible acquisition protocol for subsequent patient work at Addenbrooke's Hospital. It also taught me that diagnostic AI depends as much on careful measurement, annotation, and study design as it does on the final model.", zh: "该研究位于工程、医学与数据科学的交叉点。通过先确定贴片何时、如何能够可靠使用，它为后续在 Addenbrooke's Hospital 开展患者研究提供了可辩护的采集方案，也让我认识到：诊断 AI 的可信度不仅取决于最终模型，同样取决于测量、标注与研究设计。" } },
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
    media: [
      { src: "/images/network-physiology-paper.png", alt: { en: "First page of the Experimental Physiology research article", zh: "Experimental Physiology 研究论文首页" }, caption: { en: "The project developed from an undergraduate dissertation into a first-author, open-access research article.", zh: "该项目由本科毕业课题发展为第一作者开放获取研究论文。" }, contain: true },
    ],
    aside: { en: "Published in Experimental Physiology. I contributed to study conception and design, data analysis and interpretation, and manuscript development.", zh: "发表于 Experimental Physiology。我参与研究构思与设计、数据分析与解释，以及论文撰写和修订。" },
    detail: [
      { heading: { en: "The interpretive gap", zh: "解释上的缺口" }, body: { en: "SpO₂ entropy describes how predictable a signal is, but the same entropy value can mean different things at 99% and 85% saturation. I therefore treated complexity as a response to physiological challenge, not a stand-alone number, and asked whether departure from the normal response to hypoxia carried clinical information.", zh: "SpO₂ 熵反映信号的可预测性，但同一个熵值出现在 99% 与 85% 血氧时，生理意义并不相同。因此我不再把复杂性视为孤立数值，而把它放回低氧挑战的背景中，考察偏离正常适应反应是否具有临床信息。" } },
      { heading: { en: "A directional framework", zh: "方向性分析框架" }, body: { en: "Using graded-hypoxia data from 12 healthy participants, I developed a healthy mean-SpO₂–entropy trajectory. A signed perpendicular distance, δ, then captured whether each ICU signal was less variable or more irregular than expected for its hypoxia severity. MATLAB workflows calculated sample and multiscale entropy from one-hertz recordings.", zh: "我利用 12 名健康受试者的分级低氧数据建立“平均 SpO₂—熵”健康轨迹，再用带符号的垂直距离 δ 表示 ICU 信号在相同低氧程度下比预期更平坦还是更紊乱，并通过 MATLAB 流程计算 1 Hz 信号的样本熵与多尺度熵。" } },
      { heading: { en: "Testing clinical meaning", zh: "检验临床意义" }, body: { en: "The framework was applied to 450 ICU patients with sepsis, COPD, acute liver failure, or cirrhosis and compared with 108 healthy resting participants. Group comparisons examined disease-specific patterns, and Cox models tested 30-day ICU mortality while accounting for SOFA score and ventilation.", zh: "该框架应用于 450 例脓毒症、COPD、急性肝衰竭或肝硬化 ICU 患者，并与 108 名健康静息受试者比较。研究通过组间比较识别疾病特异性模式，再用 Cox 模型在校正 SOFA 评分和机械通气后评估 30 天 ICU 死亡结局。" } },
      { heading: { en: "Finding and interpretation", zh: "结果与解释" }, body: { en: "In sepsis, a larger positive deviation—lower entropy than expected—was associated with mortality after adjustment (hazard ratio 1.79). The same prognostic signal did not generalise across COPD or liver cohorts, while cirrhosis showed an opposite pattern. This disease specificity is part of the result: the method adds physiological context, but it is not a universal risk score and needs external validation.", zh: "在脓毒症中，更大的正向偏离——即熵低于同等低氧程度下的预期——在校正后仍与死亡相关（风险比 1.79）。这一预后关系并未普遍出现在 COPD 或肝病队列中，肝硬化反而呈现相反模式。疾病特异性本身就是结果的一部分：该方法为复杂性补充了生理背景，但不是通用风险评分，仍需外部验证。" } },
      { heading: { en: "Research growth", zh: "科研成长" }, body: { en: "The project began as an undergraduate dissertation and developed into my first first-author paper. Presenting the work, discussing it with physiologists, and responding to peer review sharpened both the analysis and my judgement. The central lesson was that physiology is about response, not measurement alone: a signal becomes informative when it is interpreted against the challenge the body is facing.", zh: "该项目由本科毕业课题发展为我的第一篇第一作者论文。展示研究、与生理学研究者讨论并回应同行评议的过程，同时完善了分析与科研判断。最重要的认识是：生理学关注的不只是测量值，更关注机体如何响应挑战；信号只有置于其生理背景中才真正有意义。" } },
    ],
  },
  {
    slug: "research-ethics-committee",
    section: "experience",
    year: "2026 — Present",
    title: { en: "Research Ethics Committee lay member", zh: "研究伦理委员会公众委员" },
    subtitle: { en: "Health Research Authority · East Midlands—Leicester Central", zh: "英国健康研究管理局 · East Midlands—Leicester Central" },
    summary: { en: "Appointed as a lay member to bring independent judgement and a participant-centred perspective to the ethical review of health and social-care research, reviewing around four applications each month.", zh: "受聘为公众委员，以独立判断和受试者视角参与健康与社会照护研究的伦理审查，每月约审阅四项申请。" },
    tags: [{ en: "Research ethics", zh: "研究伦理" }, { en: "Risk–benefit review", zh: "风险—获益审查" }, { en: "Governance", zh: "研究治理" }],
    aside: { en: "A five-year appointment beginning in January 2026, with continuing training and regular committee participation.", zh: "五年任期自 2026 年 1 月开始，并持续接受培训、参加委员会审查。" },
    detail: [
      { heading: { en: "Role", zh: "角色" }, body: { en: "I review research applications as an individual committee member rather than as a representative of an institution or profession. The role calls for attention to scientific justification, proportionality of risk, consent, privacy, participant information, and the practical experience of taking part in a study.", zh: "我以独立委员身份审阅研究申请，而非代表某个机构或专业群体。审查关注科学依据、风险是否适度、知情同意、隐私保护、受试者材料，以及真实参与研究时可能面临的体验。" } },
      { heading: { en: "Perspective and skills", zh: "视角与能力" }, body: { en: "Committee work develops structured risk–benefit reasoning, concise written review, interdisciplinary discussion, and the ability to distinguish regulatory compliance from genuinely participant-centred research design.", zh: "委员会工作训练了结构化风险—获益判断、简洁书面审查、跨专业讨论，以及区分“满足监管要求”与“真正以受试者为中心”的能力。" } },
      { heading: { en: "Review in practice", zh: "实际审查流程" }, body: { en: "For roughly four applications each month, I examine the protocol, participant information, consent materials, recruitment plan, and IRAS documentation before committee discussion. I identify points that need clarification, contribute questions for investigators, and help the committee reach a proportionate, clearly reasoned decision.", zh: "每月约四项申请中，我会在委员会会议前审阅研究方案、受试者信息、知情同意材料、招募计划及 IRAS 文件，识别需澄清之处、向研究团队提出问题，并参与形成适度且论证清楚的审查决定。" } },
    ],
  },
  {
    slug: "ucl-student-ambassador",
    section: "experience",
    year: "2023 — 2025",
    title: { en: "Faculty of Medical Sciences Student Ambassador", zh: "医学科学学院学生大使" },
    subtitle: { en: "University College London", zh: "伦敦大学学院" },
    summary: { en: "Represented the Faculty of Medical Sciences through taster sessions, widening-participation teaching, and individual guidance for prospective students from varied educational and cultural backgrounds.", zh: "通过专业体验课、教育机会拓展教学及一对一申请指导，代表医学科学学院支持来自不同教育与文化背景的潜在申请者。" },
    tags: [{ en: "Science outreach", zh: "科学传播" }, { en: "Student mentoring", zh: "学生指导" }, { en: "Inclusive education", zh: "包容性教育" }, { en: "Public speaking", zh: "公开表达" }],
    metrics: [
      { value: "41", label: { en: "pupils guided in one programme", zh: "名中学生参与单次项目" } },
      { value: "4/4", label: { en: "median participant feedback", zh: "参与者反馈中位数" } },
    ],
    media: [
      { src: "/images/student-ambassador-team.jpg", alt: { en: "UCL Faculty of Medical Sciences staff and student ambassador team", zh: "UCL 医学科学学院教师与学生大使团队合影" }, caption: { en: "Faculty staff and the student ambassador team following a Medical Sciences taster event.", zh: "医学科学体验活动结束后的学院教师与学生大使团队。" }, contain: true },
      { src: "/images/student-ambassador-taster-session.jpg", alt: { en: "Iris Feng supporting a skin microscopy teaching session", zh: "Iris Feng 协助皮肤显微观察教学活动" }, caption: { en: "Supporting an interactive skin-microscopy session during a Faculty of Medical Sciences taster programme.", zh: "在医学科学学院体验项目中协助开展互动式皮肤显微观察教学。" }, contain: true },
    ],
    aside: { en: "The role combined institutional representation with practical teaching and individual support, requiring scientific accuracy, empathy, and adaptable communication.", zh: "这一角色把学院代表、实践教学与个体支持结合起来，要求兼顾科学准确性、同理心及灵活沟通。" },
    detail: [
      { heading: { en: "Taster-session facilitation", zh: "体验课组织与引导" }, body: { en: "I worked with academic staff and fellow ambassadors to welcome prospective students, chair programme sessions, guide small-group activities, and help participants engage with unfamiliar medical concepts. Activities included a skin-microscopy workshop and discussion of how laboratory observations connect with disease mechanisms.", zh: "我与教师及其他学生大使合作接待潜在申请者、主持专业介绍、引导小组活动，并帮助参与者理解陌生的医学概念。活动包括皮肤显微观察，以及讨论实验室观察如何与疾病机制相联系。" } },
      { heading: { en: "Widening participation", zh: "拓展教育机会" }, body: { en: "In one programme, I led a group of 41 pupils from under-represented backgrounds through the pathophysiology of melanoma. I broke the topic into manageable questions, encouraged participation, and adjusted explanations in response to the group; the sessions received a median feedback score of 4/4.", zh: "在其中一次项目中，我带领 41 名来自代表性不足背景的中学生学习黑色素瘤病理生理学。我把主题拆解为可讨论的问题、鼓励每位学生参与，并根据现场反应调整解释；活动反馈中位数为 4/4。" } },
      { heading: { en: "Individual guidance", zh: "个体申请指导" }, body: { en: "I also offered one-to-one guidance on applications, personal statements, course selection, and the transition into university study. Working with students from different countries and school systems strengthened cross-cultural communication and taught me to give advice that is specific without becoming prescriptive.", zh: "我还就大学申请、个人陈述、课程选择及进入大学后的学习转变提供一对一建议。与来自不同国家和教育体系的学生交流，提升了我的跨文化沟通能力，也让我学会提供具体但不过度替他人做决定的建议。" } },
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
    detail: [
      { heading: { en: "From source material to story", zh: "从资料到内容" }, body: { en: "I began by researching gene-related source material and translating it into accessible Chinese, then progressed to selecting topics, writing scripts, and producing short-form videos with editing and voice-over. Subjects ranged from inherited and neurodegenerative disorders to circadian, metabolic, and exercise-related genetics.", zh: "我最初负责检索基因相关资料并转化为易懂中文，随后逐步独立承担选题、脚本撰写及短视频剪辑与配音。内容涵盖遗传病与神经退行性疾病，也包括昼夜节律、代谢及运动相关基因。" } },
      { heading: { en: "What the work developed", zh: "能力积累" }, body: { en: "The internship strengthened evidence selection, audience-aware medical writing, visual explanation, and editorial judgement: deciding what detail is necessary for accuracy, and what can be removed so a non-specialist can follow the core idea.", zh: "这段经历强化了证据筛选、面向不同受众的医学写作、视觉化解释与编辑判断：既保留保证准确性所需的信息，也删去阻碍非专业读者理解的细节。" } },
      { heading: { en: "Scientific range and workflow", zh: "科学范围与工作流程" }, body: { en: "Drawing on undergraduate training in neuroscience, genetics, cancer biology, and molecular medicine, I checked claims against source material before adapting them for articles, graphics, narration, and social-media formats. Moving between research, writing, and production strengthened both scientific accuracy and practical content delivery.", zh: "我结合本科阶段在神经科学、遗传学、肿瘤生物学与分子医学方面的训练，先核对资料与科学表述，再将内容改写为文章、图文、配音及社交媒体形式。在检索、写作与制作之间切换，兼顾科学准确性与内容落地。" } },
    ],
  },
  {
    slug: "ucl-changemakers",
    section: "experience",
    year: "2023 — 2024",
    title: { en: "Curriculum innovation project lead", zh: "课程创新项目负责人" },
    subtitle: { en: "UCL ChangeMakers", zh: "UCL ChangeMakers" },
    summary: { en: "Secured a £1,300 UCL ChangeMakers grant and led a student–staff project that reframed exam support as interactive case-based learning designed to prompt curiosity and critical thinking.", zh: "获得 UCL ChangeMakers £1,300 项目资助并领导学生—教师协作项目，将“应试支持”重新设计为激发好奇心与批判性思维的互动案例学习。" },
    tags: [{ en: "Project leadership", zh: "项目领导" }, { en: "Learning design", zh: "学习设计" }, { en: "Stakeholder engagement", zh: "多方协作" }],
    metrics: [
      { value: "£1,300", label: { en: "UCL ChangeMakers grant", zh: "UCL ChangeMakers 项目资助" } },
      { value: "12", label: { en: "interactive learning cases", zh: "个互动学习案例" } },
      { value: "≈2,900", label: { en: "faculty-wide student audience", zh: "名院系潜在学生受众" } },
    ],
    media: [
      { src: "/images/changemakers-grant-cover.png", alt: { en: "Cover of the funded ChangeMakers project", zh: "获资助 ChangeMakers 项目封面" }, caption: { en: "The funded project, “Unravelling Learning Objectives into Novel Learning Framework,” was created with Flora Yuqing Cai and supervised by Dr Alireza Mani.", zh: "获资助项目《Unravelling Learning Objectives into Novel Learning Framework》由我与 Flora Yuqing Cai 共同创建，Alireza Mani 博士指导。" }, contain: true },
      { src: "/images/changemakers-logo.png", alt: { en: "UCL ChangeMakers logo", zh: "UCL ChangeMakers 标识" }, caption: { en: "UCL ChangeMakers supports student–staff partnerships that improve education and the student experience.", zh: "UCL ChangeMakers 支持学生与教师合作改进教学及学生体验。" }, contain: true },
      { src: "/images/changemakers-interactive-case.png", alt: { en: "Interactive clinical reasoning case on progressive paralysis", zh: "关于进行性瘫痪的互动临床推理案例" }, caption: { en: "An interactive case required students to distinguish ALS from plausible alternatives and provided mechanism-based feedback.", zh: "互动案例要求学生在多种合理诊断中识别 ALS，并通过机制解释获得即时反馈。" }, contain: true, wide: true },
    ],
    detail: [
      { heading: { en: "Reframing the brief", zh: "重新定义问题" }, body: { en: "The project began as an attempt to improve exam preparation in Applied Medical Sciences. Through discussion with students and teaching staff, I shifted the goal from rehearsing assessment to creating clinically grounded activities that could reveal neglected topics and encourage deeper inquiry.", zh: "项目最初旨在改善应用医学科学学生的考试准备。通过与学生及教师讨论，我把目标从重复应试训练转向具有临床情境的互动活动，用案例补足易被忽视的主题，并鼓励更深入的追问。" } },
      { heading: { en: "Delivery", zh: "项目实施" }, body: { en: "After securing £1,300 in funding from UCL ChangeMakers, I coordinated a student collaborator, academic staff, programme administrators, the ChangeMakers team, and the incoming module lead. We translated learning needs into 12 H5P-style interactive cases spanning neuroscience and clinical mechanisms, with a route into future teaching materials.", zh: "获得 UCL ChangeMakers £1,300 资助后，我协调学生合作者、教师、项目行政人员、ChangeMakers 团队及下一年度课程负责人，把学习需求转化为 12 个 H5P 互动案例，覆盖神经科学与临床机制，并为后续纳入教学资源建立路径。" } },
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
    media: [
      { src: "/images/network-physiology-paper.png", alt: { en: "First page of the published Experimental Physiology article", zh: "发表于 Experimental Physiology 的论文首页" }, caption: { en: "Feng, S. I. et al. (2026), published open access in Experimental Physiology.", zh: "Feng, S. I. 等（2026），开放获取发表于 Experimental Physiology。" }, contain: true },
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
    media: [
      { src: "/images/rob-clarke-poster-presentation.jpg", alt: { en: "Iris Feng beside her Rob Clarke Award poster at the Royal Society of Medicine", zh: "Iris Feng 在英国皇家医学会与 Rob Clarke 获奖海报合影" }, caption: { en: "Presenting the oxygen-saturation study at The Physiological Society's 2025 Member Forum at the Royal Society of Medicine.", zh: "在英国皇家医学会举行的英国生理学会 2025 Member Forum 展示血氧动态研究。" }, contain: true },
      { src: "/images/rob-clarke-discussion.jpg", alt: { en: "Iris Feng discussing her research with delegates at the poster session", zh: "Iris Feng 在海报交流环节与参会者讨论研究" }, caption: { en: "Discussing the directional entropy framework and its clinical interpretation with fellow delegates.", zh: "在海报交流环节与参会者讨论方向性熵分析框架及其临床解释。" }, contain: true },
      { src: "/images/rob-clarke-award-photo.jpg", alt: { en: "Iris Feng receiving the Rob Clarke Award certificate", zh: "Iris Feng 获颁 Rob Clarke Award 证书" }, caption: { en: "Receiving the Rob Clarke Award at the Society's 150th-anniversary Member Forum.", zh: "在英国生理学会 150 周年 Member Forum 获颁 Rob Clarke Award。" }, contain: true, wide: true },
    ],
    detail: [
      { heading: { en: "Recognition", zh: "获奖说明" }, body: { en: "The Rob Clarke Awards recognise excellence in undergraduate physiology projects, including the student's ability to frame a hypothesis-driven project and show data collection and analytical skill. My abstract was one of 11 selected nationally for poster presentation and final judging.", zh: "Rob Clarke Awards 用于表彰优秀的本科生理学项目，重视学生是否能清楚呈现假设驱动的研究，以及数据采集与分析能力。我的摘要入选当年全英 11 项获奖作品，并进入现场海报展示与终评。" } },
      { heading: { en: "Presentation", zh: "现场展示" }, body: { en: "I presented “Interpreting Peripheral Oxygen Saturation Variability in Critical Illness” at the Society's 150th-anniversary Member Forum at the Royal Society of Medicine on 4 December 2025, explaining the directional entropy framework and responding to questions from physiologists and judges.", zh: "2025 年 12 月 4 日，我在英国皇家医学会举行的学会 150 周年 Member Forum 展示《危重病中外周血氧饱和度变异性的解释》，向生理学研究者与评委说明方向性熵分析框架并回答提问。" } },
      { heading: { en: "Why the experience mattered", zh: "这次经历的意义" }, body: { en: "The meeting broadened my view of what physiological research is for. Discussions spanning antimicrobial resistance, public engagement, and evidence-informed policy reinforced that rigorous analysis has greatest value when it can be communicated clearly and contribute to decisions beyond the laboratory.", zh: "这次会议拓展了我对生理学研究价值的理解。围绕抗微生物药物耐药、公众参与及循证政策的讨论让我进一步认识到：严谨分析只有被清楚传达，并能影响实验室之外的决策时，才会产生更完整的价值。" } },
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
    media: [
      { src: "/images/pbl-award-team.jpg", alt: { en: "The four-person PBL award team outside UCL Medical School", zh: "四人 PBL 获奖团队在 UCL Medical School 外合影" }, caption: { en: "Our four-person team after receiving the PBL Capstone Competition award at the Royal Free Campus.", zh: "四人团队在 Royal Free Campus 获得 PBL 综合项目竞赛奖项后合影。" }, contain: true },
      { src: "/images/pbl-wilson-brain.png", alt: { en: "Wilson disease brain mechanism map", zh: "Wilson 病脑部机制图" }, caption: { en: "The neurological branch linked copper accumulation with neurotransmission, inflammation, hepatic encephalopathy, and clinical signs.", zh: "脑部机制分支将铜蓄积与神经递质、炎症、肝性脑病及临床表现联系起来。" }, contain: true },
      { src: "/images/pbl-wilson-kidney.png", alt: { en: "Wilson disease kidney mechanism map", zh: "Wilson 病肾脏机制图" }, caption: { en: "The renal branch integrated tubular injury, fluid balance, cirrhosis, and haemodynamic consequences.", zh: "肾脏机制分支整合了肾小管损伤、体液平衡、肝硬化及血流动力学后果。" }, contain: true },
      { src: "/images/pbl-wilson-liver.png", alt: { en: "Wilson disease liver mechanism map", zh: "Wilson 病肝脏机制图" }, caption: { en: "The hepatic branch followed ATP7B dysfunction from copper accumulation to inflammation, cirrhosis, and systemic complications.", zh: "肝脏机制分支从 ATP7B 功能异常出发，追踪铜蓄积、炎症、肝硬化及全身并发症。" }, contain: true },
    ],
    detail: [
      { heading: { en: "The challenge", zh: "任务" }, body: { en: "Given a patient's history, symptoms, and assay results, our four-person team had to identify the diagnosis and explain how apparently separate findings fitted together. We clarified unfamiliar terms, set shared learning objectives, researched alternatives, and repeatedly tested the logic of the case.", zh: "面对患者病史、症状及检验结果，四人团队需要判断诊断，并解释看似分散的发现如何相互关联。我们先澄清陌生概念、制定共同学习目标，再检索不同可能性并反复检验病例逻辑。" } },
      { heading: { en: "Mechanistic synthesis", zh: "机制整合" }, body: { en: "We identified Wilson disease and mapped how ATP7B dysfunction disrupts copper handling, linking hepatic injury and portal-hypertension complications with neurological, psychiatric, renal, and systemic manifestations. Treatment options were placed on the same map so that mechanism, diagnosis, and management formed one coherent explanation.", zh: "我们最终锁定 Wilson 病，并梳理 ATP7B 功能异常如何破坏铜代谢，将肝损伤与门静脉高压并发症同神经、精神、肾脏及全身表现连接起来；治疗方案也被放入同一机制图，使病理机制、诊断与管理形成完整解释。" } },
      { heading: { en: "The response", zh: "解决方式" }, body: { en: "The integrated diagram became the backbone of a narrated presentation. Building it required systems thinking, evidence synthesis, visual communication, task coordination, and teamwork under a deadline. The clarity and completeness of the final account resulted in first place.", zh: "整合机制图成为配音演示的主线。其制作要求我们在限时内完成系统思维、证据整合、可视化表达与任务协调；最终呈现的清晰度与完整性帮助团队获得一等奖。" } },
    ],
  },
  {
    slug: "cambridge-bio-hackathon",
    section: "awards",
    year: "2026",
    title: { en: "Third place, Cambridge Bio-Hackathon Challenge", zh: "剑桥 Bio-Hackathon Challenge 三等奖" },
    subtitle: { en: "Cambridge University Biotech Society · Cambridge Zero", zh: "剑桥大学生物科技学会 · Cambridge Zero" },
    summary: { en: "A rapid team challenge developing a closed-loop water-cooling and heat-reuse concept to reduce the water footprint and contamination risks associated with data-centre cooling.", zh: "在限时团队挑战中提出数据中心闭环水冷与余热回收方案，以降低冷却过程的用水足迹及水体污染风险。" },
    tags: [{ en: "Food & water security", zh: "粮食与水安全" }, { en: "Systems design", zh: "系统设计" }, { en: "Sustainability", zh: "可持续发展" }, { en: "Team pitch", zh: "团队路演" }],
    links: [
      { label: { en: "Cambridge University Biotech Society", zh: "剑桥大学生物科技学会" }, href: "https://uk.linkedin.com/company/cubiotechsoc" },
    ],
    detail: [
      { heading: { en: "The challenge", zh: "挑战背景" }, body: { en: "The 2026 Bio-Hackathon focused on food and water security. Our team examined how conventional data-centre cooling can consume large volumes of water and transfer heat or contaminants into local water systems, a problem linking digital infrastructure with public and environmental health.", zh: "2026 Bio-Hackathon 以粮食与水安全为主题。团队聚焦传统数据中心冷却系统的大量用水，以及热量或污染物进入当地水体的风险，把数字基础设施问题同公共与环境健康联系起来。" } },
      { heading: { en: "Our concept", zh: "方案设计" }, body: { en: "We proposed a closed-loop cooling architecture that recirculates water and captures waste heat for reuse. The design mapped water and thermal flows, contamination control, environmental benefit, and implementation constraints rather than treating cooling efficiency as an isolated engineering metric.", zh: "我们提出水循环使用并回收余热的闭环冷却架构，同时梳理水流与热流、污染控制、环境收益及实施约束，而不是只把冷却效率视为单一工程指标。" } },
      { heading: { en: "Outcome and skills", zh: "结果与能力" }, body: { en: "The proposal placed third. Working under a short deadline strengthened rapid evidence gathering, interdisciplinary synthesis, collaborative problem solving, and the ability to turn a broad sustainability challenge into a concrete technical and commercial pitch.", zh: "方案最终获得第三名。限时协作训练了快速检索证据、跨学科整合、团队问题解决，以及把宽泛的可持续发展挑战转化为具体技术与商业路演的能力。" } },
    ],
  },
  {
    slug: "leonard-manns-travel-award",
    section: "awards",
    year: "2026",
    title: { en: "Leonard Manns Travel Award", zh: "Leonard Manns 旅行资助" },
    subtitle: { en: "Queens' College, University of Cambridge", zh: "剑桥大学王后学院" },
    summary: { en: "A £250 travel grant supporting a research visit to the Extreme Environments Laboratory at the University of Portsmouth, where the healthy hypoxia data underpinning my SpO₂ work were collected.", zh: "获 £250 旅行资助，访问朴茨茅斯大学极端环境实验室；我的 SpO₂ 研究所使用的健康低氧参考数据正是在该实验室采集。" },
    tags: [{ en: "Travel grant", zh: "旅行资助" }, { en: "Extreme physiology", zh: "极端环境生理学" }, { en: "Research collaboration", zh: "科研合作" }],
    metrics: [
      { value: "£250", label: { en: "college grant", zh: "学院资助" } },
      { value: "3 days", label: { en: "research visit", zh: "科研访问" } },
    ],
    links: [
      { label: { en: "Queens' College financial support", zh: "王后学院资助说明" }, href: "https://www.queens.cam.ac.uk/teaching-and-learning/tutorial-office/student-administration/financial-support-for-current-students/" },
    ],
    media: [
      { src: "/images/leonard-manns-lab-visit.jpeg", alt: { en: "Iris Feng and Dr Joe Costello at the Extreme Environments Laboratory", zh: "Iris Feng 与 Joe Costello 博士在极端环境实验室" }, caption: { en: "Meeting collaborator Dr Joe Costello beside The Physiological Society plaque during the Portsmouth visit.", zh: "访问期间与合作研究者 Joe Costello 博士在英国生理学会铭牌旁合影。" } },
      { src: "/images/extreme-environments-lab.jpeg", alt: { en: "Research equipment in the Extreme Environments Laboratory", zh: "极端环境实验室内的研究设备" }, caption: { en: "The laboratory supports controlled studies of temperature, humidity, simulated altitude, and immersion physiology.", zh: "实验室支持温度、湿度、模拟海拔及浸水生理学等受控研究。" } },
    ],
    detail: [
      { heading: { en: "Purpose of the visit", zh: "访问目的" }, body: { en: "From 9–11 February 2026, I visited the Extreme Environments Laboratory to deepen a collaboration that began during my undergraduate research. I met Dr Joe Costello and Dr Tom Williams in person and discussed the healthy graded-hypoxia dataset used to establish the reference trajectory in my oxygen-saturation study.", zh: "2026 年 2 月 9—11 日，我访问极端环境实验室，以深化本科研究期间建立的合作。我与 Joe Costello 博士和 Tom Williams 博士线下交流，并讨论用于建立血氧研究健康参考轨迹的分级低氧数据。" } },
      { heading: { en: "Understanding how the data were made", zh: "理解数据如何产生" }, body: { en: "Seeing the climate chambers, simulated-altitude facilities, immersion systems, and measurement workflows made the experimental origins of the dataset tangible. It reinforced that physiological signal analysis begins long before an algorithm: environmental control, instrumentation, protocol consistency, and participant safety all shape what the data can support.", zh: "参观气候舱、模拟海拔设施、浸水系统及测量流程后，我更具体地理解了数据的实验来源。生理信号分析远在算法之前便已开始：环境控制、仪器、方案一致性及受试者安全都会决定数据最终能够支持怎样的结论。" } },
      { heading: { en: "Research development", zh: "科研发展" }, body: { en: "The visit connected computational analysis with experimental physiology and opened conversations about future doctoral training and collaborative research. It strengthened my ability to evaluate data provenance, communicate across laboratories, and place analytical findings within the conditions under which signals were collected.", zh: "这次访问把计算分析与实验生理学重新连接起来，也促成了关于博士训练与后续合作的讨论。它进一步训练了我评估数据来源、开展跨实验室沟通，并把分析结果放回原始采集条件中解释的能力。" } },
    ],
  },
  {
    slug: "piano-performance",
    section: "extracurricular",
    year: "Ongoing",
    title: { en: "Piano", zh: "钢琴" },
    subtitle: { en: "Performance and creative practice", zh: "演奏与艺术实践" },
    summary: { en: "Piano has remained a creative practice alongside my academic work, including live performances at university and community events.", zh: "钢琴始终是我学术学习之外的重要艺术实践，也让我有机会在大学及社群活动中进行现场演奏。" },
    tags: [{ en: "Performance", zh: "现场演奏" }, { en: "Creative practice", zh: "艺术实践" }, { en: "Discipline", zh: "长期训练" }],
    media: [
      { src: "/images/piano-performance.jpg", alt: { en: "Iris Feng performing on a grand piano before an audience", zh: "Iris Feng 在观众面前演奏三角钢琴" }, caption: { en: "A live piano performance in a university setting.", zh: "在大学活动中进行现场钢琴演奏。" }, wide: true },
      { src: "/images/piano-event.jpeg", alt: { en: "Iris Feng performing piano on stage", zh: "Iris Feng 在舞台上演奏钢琴" }, caption: { en: "Performing on stage as part of a wider community event.", zh: "在社群活动中进行舞台演奏。" }, contain: true },
    ],
    aside: { en: "Music provides a different form of concentration from research: performance makes preparation visible in real time and leaves little room to hide from uncertainty.", zh: "音乐带来一种不同于科研的专注：舞台让准备过程在当下被检验，也训练人在不确定中保持稳定。" },
    detail: [
      { heading: { en: "A practice alongside science", zh: "科学之外的长期实践" }, body: { en: "Continuing piano alongside medical science has given me a deliberate space for close listening, repetition, and interpretation. Progress depends less on a single performance than on returning to difficult passages, noticing small changes, and building consistency over time.", zh: "在医学科学学习之外持续练习钢琴，让我保留了一个专注聆听、重复训练与表达理解的空间。进步并不取决于某一次演出，而来自反复面对困难段落、察觉细微变化，并长期建立稳定性。" } },
      { heading: { en: "Performing for an audience", zh: "面向观众的演奏" }, body: { en: "Live performance required me to turn private preparation into a clear experience for an audience. Playing at university and community events strengthened stage awareness, calmness under observation, and the ability to recover without interrupting the wider event.", zh: "现场演奏要求我把个人练习转化为观众能够感受到的完整体验。在大学及社群活动中演奏，训练了舞台意识、被注视时的沉着，以及出现偏差后不中断整体节奏的恢复能力。" } },
      { heading: { en: "What it carries into my work", zh: "对学习与工作的影响" }, body: { en: "Piano has reinforced habits that also matter in research: patient preparation, sensitivity to patterns, honest self-correction, and respect for the difference between technical accuracy and meaningful communication.", zh: "钢琴也强化了科研中同样重要的习惯：耐心准备、对模式的敏感、诚实自我修正，以及理解“技术准确”与“有效表达”之间的差别。" } },
    ],
  },
  {
    slug: "hosting-ceremonies",
    section: "extracurricular",
    year: "2021",
    title: { en: "Hosting a large-scale anniversary ceremony", zh: "大型校庆典礼主持" },
    subtitle: { en: "Kang Chiao International School · Lead host", zh: "康桥国际学校 · 主持人" },
    summary: { en: "Led an outdoor anniversary ceremony for more than 2,000 students, teachers, and school leaders, coordinating the programme and responding to live technical and performance disruptions.", zh: "主持一场面向 2,000 余名师生及学校管理者的户外周年庆典，统筹现场流程，并处理突发技术与表演问题。" },
    tags: [{ en: "Public speaking", zh: "公开表达" }, { en: "Event coordination", zh: "活动协调" }, { en: "Crisis response", zh: "临场应变" }, { en: "Teamwork", zh: "团队协作" }],
    metrics: [
      { value: "2,000+", label: { en: "students, staff, and leaders", zh: "名师生及学校管理者" } },
      { value: "800 m", label: { en: "outdoor track venue", zh: "户外跑道会场" } },
    ],
    media: [
      { src: "/images/hosting-stage-1.jpg", alt: { en: "Iris Feng hosting the school anniversary ceremony", zh: "Iris Feng 主持学校周年庆典" }, caption: { en: "Hosting the seventh-anniversary ceremony before the assembled school community.", zh: "面向全校师生主持七周年庆典。" }, contain: true },
      { src: "/images/hosting-stage-2.jpg", alt: { en: "Hosts on the outdoor anniversary stage", zh: "主持人在户外周年庆典舞台上" }, caption: { en: "The outdoor setting required close coordination across hosts, performers, and the technical team.", zh: "户外会场要求主持人、表演团队与技术人员保持紧密协作。" }, contain: true },
      { src: "/images/hosting-stage-3.jpg", alt: { en: "Ceremony programme on the school track", zh: "学校跑道上的典礼流程" }, caption: { en: "The programme brought together speeches, performances, and a school-wide finale.", zh: "典礼流程包括致辞、表演及全校共同参与的闭幕环节。" }, contain: true },
      { src: "/images/hosting-stage-4.jpg", alt: { en: "Anniversary event audience and stage", zh: "周年活动现场观众与舞台" }, caption: { en: "More than 2,000 students, teachers, and school leaders attended the event.", zh: "活动共有 2,000 余名学生、教师及学校管理者参加。" }, contain: true },
    ],
    aside: { en: "The experience was less about reading a script than maintaining continuity: listening to the room, making fast decisions, and supporting the wider team when plans changed.", zh: "这次经历并不只是照稿主持，更重要的是维持现场连续性：观察全场、快速判断，并在计划变化时支持整个团队。" },
    detail: [
      { heading: { en: "Event responsibility", zh: "活动职责" }, body: { en: "In April 2021, I served as lead host for Kang Chiao International School's seventh-anniversary ceremony, a large outdoor event held on the school's 800-metre track. I worked with school leaders, organisers, technical staff, performers, and my co-host to refine the script, rehearse transitions, and keep the programme coherent for an audience of more than 2,000.", zh: "2021 年 4 月，我担任康桥国际学校七周年庆典主持人。活动在学校 800 米跑道举行，现场超过 2,000 人。我与学校管理者、活动组织者、技术人员、表演团队及搭档共同完善主持稿、排练衔接，并确保整体流程连贯。" } },
      { heading: { en: "Responding when the plan changed", zh: "计划变化时的临场处理" }, body: { en: "Two disruptions required immediate decisions. When a keynote speaker's microphone failed, I handed over mine so the speech could continue without a lengthy delay. Later, when the designated anthem lead was absent, I used the lyrics kept with my notes and stepped in to lead the choir and orchestra, allowing the ceremony to close as planned.", zh: "现场两次突发情况需要立即处理。主讲嘉宾麦克风失灵时，我直接将自己的麦克风交给嘉宾，避免流程长时间中断；闭幕环节原定领唱缺席时，我利用事先随稿准备的歌词临时领唱，并带领合唱团与乐团按计划完成校歌。" } },
      { heading: { en: "Coordination and reflection", zh: "协作与复盘" }, body: { en: "The role extended beyond stage delivery. Multiple rehearsals aligned timing and responsibilities across teams, while post-event debriefs turned unexpected problems into practical contingency plans, including backup microphones and alternate performers. The experience strengthened public speaking, team coordination, preparation, and calm decision-making under pressure.", zh: "主持工作也延伸到台前之外。多轮排练帮助不同团队对齐时间与职责；活动后的复盘则把突发问题转化为具体预案，例如准备备用麦克风和替补表演人员。这段经历强化了公开表达、团队协调、预先准备及压力下冷静决策的能力。" } },
    ],
  },
  {
    slug: "coding-python",
    section: "coding",
    year: "2025 — Present",
    title: { en: "Python", zh: "Python" },
    subtitle: { en: "Research software · signal processing · bioinformatics", zh: "科研软件 · 信号处理 · 生物信息学" },
    summary: { en: "Built reproducible workflows around cardiac-acoustic research—from Git and conda setup and NI data acquisition to six-channel signal processing, interactive review tools, quality control, and publication-ready visualisation—while also applying computational thinking to sequence-based bioinformatics.", zh: "围绕心脏声学研究建立可复现工作流：从 Git、conda 环境及 NI 数据采集，到六通道信号处理、交互式核验工具、质量控制与发表级可视化；同时将计算思维应用于序列生物信息学。" },
    tags: [
      { en: "NumPy · pandas · SciPy", zh: "NumPy · pandas · SciPy" },
      { en: "Matplotlib GUI", zh: "Matplotlib GUI" },
      { en: "Signal processing", zh: "信号处理" },
      { en: "Git · conda", zh: "Git · conda" },
      { en: "NI-DAQ", zh: "NI-DAQ" },
      { en: "Bioinformatics", zh: "生物信息学" },
    ],
    metrics: [
      { value: "6", label: { en: "acoustic channels handled", zh: "路声学通道" } },
      { value: "936", label: { en: "recording-state records audited", zh: "条记录状态完成审计" } },
      { value: "39", label: { en: "participants in the final pipeline", zh: "名受试者进入最终流程" } },
    ],
    media: [
      { src: "/images/cardiac-signal-review.png", alt: { en: "Python review interface showing six cardiac-acoustic channels and cardiac-state labels", zh: "显示六通道心脏声学信号及心动周期标签的 Python 核验界面" }, caption: { en: "A research-facing review interface for checking six-channel recordings and correcting S1, systole, S2, and diastole boundaries.", zh: "用于核验六通道记录，并检查和校正 S1、收缩期、S2 与舒张期边界的科研界面。" }, contain: true, wide: true },
    ],
    aside: { en: "My Python work sits at the boundary between instrument, signal, model, and researcher: code is useful only when each transformation remains inspectable and physiologically defensible.", zh: "我的 Python 实践位于仪器、信号、模型与研究者之间：只有当每一步转换都可核查、且在生理学上站得住脚时，代码才真正有用。" },
    detail: [
      { heading: { en: "Reproducible working environments", zh: "可复现的开发环境" }, body: { en: "I learned to enter unfamiliar research repositories safely: cloning and navigating Git projects, creating and activating isolated Anaconda/conda environments, installing pinned dependencies, resolving interpreter and path problems, and running scripts from VS Code or the command line. I use branches, commits, pulls, diffs, and versioned output folders to preserve working analyses rather than editing a single fragile copy in place.", zh: "我学习了如何安全进入陌生科研代码库：克隆和浏览 Git 项目，创建并激活独立的 Anaconda/conda 环境，安装固定版本依赖，处理解释器与路径问题，并在 VS Code 或命令行运行脚本。我使用分支、提交、拉取、差异检查及版本化输出目录保留可工作的分析，而不是在唯一副本上反复覆盖修改。" } },
      { heading: { en: "From NI hardware to analysable data", zh: "从 NI 硬件到可分析数据" }, body: { en: "In the cardiac-acoustics study I worked across the acquisition stack: checking National Instruments hardware in NI MAX, understanding channel and sampling configuration, and using the Python nidaqmx-based workflow that connects the six-sensor patch to the recording software. I learned to distinguish device, driver, configuration, database, and analysis failures, and to verify metadata and raw traces before interpreting downstream results.", zh: "在心脏声学研究中，我接触了完整采集链路：使用 NI MAX 检查 National Instruments 硬件，理解通道与采样配置，并使用基于 Python nidaqmx 的工作流，将六传感器贴片连接到记录软件。我逐渐能够区分设备、驱动、配置、数据库与分析环节的故障，并在解释下游结果前核验元数据和原始波形。" } },
      { heading: { en: "Signal processing and cardiac segmentation", zh: "信号处理与心动周期分割" }, body: { en: "Using NumPy, pandas, and SciPy, I worked with multichannel physiological time series through zero-centring, band-pass filtering, de-spiking, polyphase resampling, windowing, cross-correlation, SNR calculation, and heart-rate estimation from verified S1 timings. I also learned how a pretrained recurrent model generates frame-level cardiac-state probabilities, how evidence is fused across sensors, and how an HMM/HSMM Viterbi decoder combines probability, cardiac-state order, and heart-rate-dependent duration constraints.", zh: "我使用 NumPy、pandas 与 SciPy 处理多通道生理时间序列，包括去均值、带通滤波、尖峰去除、多相重采样、分窗、互相关、SNR 计算，以及基于已核验 S1 时点估算心率。我也理解了预训练循环模型如何生成逐帧心动状态概率、多传感器证据如何融合，以及 HMM/HSMM Viterbi 解码器如何综合概率、心动状态顺序与随心率变化的持续时间约束。" } },
      { heading: { en: "Interactive GUI and quality control", zh: "交互式 GUI 与质量控制" }, body: { en: "I used and extended a Qt-backed Matplotlib interface that combines waveform display, audio playback, channel selection, zoom and navigation, cardiac-state overlays, RR intervals, model posteriors, and editable boundaries. The workflow supported chunk-level review, correction, explicit unsegmentable labels, missed-beat inspection, and separate pass-one/pass-two outputs so manual decisions remained auditable rather than disappearing into a final CSV.", zh: "我使用并扩展了基于 Qt 与 Matplotlib 的交互界面，将波形显示、音频播放、通道选择、缩放与导航、心动状态覆盖、RR 间期、模型后验概率及可编辑边界整合在一起。该流程支持分块核验、人工校正、明确标记不可分割片段、检查漏搏，并分别保留第一轮与第二轮结果，使人工判断能够追溯，而不是消失在最终 CSV 中。" } },
      { heading: { en: "Analysis, plotting, and bioinformatics", zh: "分析、绘图与生物信息学" }, body: { en: "I automated cohort assembly, data joins, eligibility rules, summary tables, audit checks, and Matplotlib figures for signal quality and heart-rate recovery. In an earlier bioinformatics project, I moved from unannotated mRNA sequences to a clinically interpretable HBB variant, combining computational sequence handling with BLAST, Clustal Omega, ExPASy translation, PyMOL, GTEx, and Ensembl to connect a nucleotide change with altered β-globin and sickle-cell pathophysiology.", zh: "我用 Python 自动完成队列整理、数据合并、纳入规则、汇总表、审计检查，以及信号质量和心率恢复的 Matplotlib 绘图。在此前的生物信息学项目中，我从未注释 mRNA 序列出发，结合计算化序列处理、BLAST、Clustal Omega、ExPASy 翻译、PyMOL、GTEx 与 Ensembl，识别具有临床意义的 HBB 变异，并把核苷酸改变连接到 β-珠蛋白变化及镰状细胞病的病理生理。" } },
    ],
  },
  {
    slug: "coding-matlab",
    section: "coding",
    year: "2024 — 2026",
    title: { en: "MATLAB", zh: "MATLAB" },
    subtitle: { en: "Network physiology · entropy · time-series analysis", zh: "网络生理学 · 熵 · 时间序列分析" },
    summary: { en: "Developed physiological time-series workflows for SpO₂ and heart-rate variability, progressing from sample and multiscale entropy to a directional parenclitic framework that contextualised signal complexity against hypoxia severity.", zh: "为 SpO₂ 与心率变异性建立生理时间序列分析流程，从样本熵、多尺度熵进一步发展到方向性偏联框架，把信号复杂度放回低氧严重程度中解释。" },
    tags: [
      { en: "Sample entropy", zh: "样本熵" },
      { en: "Multiscale entropy", zh: "多尺度熵" },
      { en: "Parenclitic analysis", zh: "偏联分析" },
      { en: "HRV · SDNN", zh: "HRV · SDNN" },
      { en: "Fractals", zh: "分形" },
    ],
    metrics: [
      { value: "450", label: { en: "ICU patients analysed", zh: "例 ICU 患者" } },
      { value: "4", label: { en: "critical-illness cohorts", zh: "类危重病队列" } },
      { value: "1 Hz", label: { en: "physiological time series", zh: "生理时间序列" } },
    ],
    media: [
      { src: "/images/network-physiology-paper.png", alt: { en: "Published study developed from MATLAB analysis of oxygen-saturation variability", zh: "由 MATLAB 血氧变异性分析发展形成的发表论文" }, caption: { en: "The MATLAB analysis grew from an undergraduate project into a first-author paper in Experimental Physiology.", zh: "这套 MATLAB 分析由本科课题发展为发表于 Experimental Physiology 的第一作者论文。" }, contain: true },
    ],
    aside: { en: "MATLAB was where I first learned that a physiological metric becomes meaningful only after its assumptions, reference condition, and visual interpretation are made explicit.", zh: "MATLAB 是我最早系统理解“生理指标只有在假设、参照条件与可视化解释被明确后才有意义”的实践平台。" },
    detail: [
      { heading: { en: "Building the physiological time-series workflow", zh: "建立生理时间序列流程" }, body: { en: "I worked with one-hertz SpO₂ recordings from healthy graded-hypoxia experiments and ICU cohorts with sepsis, COPD, acute liver failure, and cirrhosis. MATLAB scripts organised participant files, extracted standardised analysis windows, handled group labels and outcomes, calculated descriptive summaries, and produced trace-level and cohort-level figures. Related scripts explored heart-rate and SDNN measures so oxygen-saturation variability could be interpreted alongside broader autonomic behaviour.", zh: "我处理健康人分级低氧实验及脓毒症、COPD、急性肝衰竭和肝硬化 ICU 队列的 1 Hz SpO₂ 记录。MATLAB 脚本用于整理受试者文件、提取标准化分析窗口、管理分组与结局变量、计算描述性结果，并生成个体轨迹和队列图。相关脚本还探索心率与 SDNN，使血氧变异性能够与更广泛的自主调控表现共同理解。" } },
      { heading: { en: "Sample and multiscale entropy", zh: "样本熵与多尺度熵" }, body: { en: "I implemented and adapted sample-entropy calculations to quantify the predictability of SpO₂ fluctuations, then used multiscale entropy to test whether apparent complexity persisted after coarse-graining rather than depending on one sampling scale. This required careful choices around window length, embedding parameters, tolerance, missing values, and signals that were too regular to yield stable estimates.", zh: "我实现并调整样本熵计算，用于量化 SpO₂ 波动的可预测性；随后使用多尺度熵检验这种复杂性在粗粒化后是否仍然存在，而非只依赖某一个采样尺度。过程中需要认真处理窗口长度、嵌入参数、容差、缺失值，以及过于规则而难以产生稳定估计的信号。" } },
      { heading: { en: "Directional parenclitic modelling", zh: "方向性偏联建模" }, body: { en: "The central methodological step was to fit the healthy relationship between mean SpO₂ and entropy under graded hypoxia, then calculate each patient signal's signed perpendicular distance from that reference trajectory. The resulting δ measure distinguished blunted variability from excessive irregularity at the same hypoxia severity. I used it to compare disease groups and to prepare variables for survival analysis, turning an abstract complexity measure into a physiologically contextualised marker.", zh: "核心方法是先拟合健康人在分级低氧下平均 SpO₂ 与熵的关系，再计算每段患者信号到健康参考轨迹的带符号垂直距离。所得 δ 指标能够在相同低氧严重程度下区分变异受抑与过度紊乱。我用它比较不同疾病队列，并为生存分析准备变量，使抽象的复杂度指标成为具有生理背景的标志物。" } },
      { heading: { en: "From exploratory code to research output", zh: "从探索代码到研究成果" }, body: { en: "The workflow required repeated visual checking of traces, distributions, regression geometry, group differences, and sensitivity across entropy definitions. I learned to separate exploratory scripts from final reproducible analyses, annotate figures clearly, and preserve the chain from raw waveform to derived metric and clinical interpretation. This work ultimately supported a first-author peer-reviewed publication.", zh: "整个流程需要反复核查原始轨迹、分布、回归几何关系、组间差异及不同熵定义下的敏感性。我逐渐学会区分探索性脚本与最终可复现分析，清晰标注图形，并保留从原始波形到派生指标再到临床解释的完整链路；这项工作最终形成第一作者同行评议论文。" } },
      { heading: { en: "Chaos games and fractal experiments", zh: "混沌游戏与分形实验" }, body: { en: "Alongside biomedical analysis, I used MATLAB for small computational experiments with the chaos game and fractal generation. Iterative random vertex selection, coordinate updates, loops, user parameters, and animated plotting produced Sierpiński-like structures from simple rules. These exercises made recursion, emergence, stochastic simulation, and geometric visualisation intuitive rather than purely mathematical abstractions.", zh: "除生物医学分析外，我也用 MATLAB 制作混沌游戏与分形生成的小型实验。通过随机选取顶点、迭代更新坐标、循环、用户参数和动态图形，由简单规则生成类似 Sierpiński 三角形的结构。这些练习把递归、涌现、随机模拟与几何可视化从抽象概念变成了直观过程。" } },
    ],
  },
  {
    slug: "coding-r",
    section: "coding",
    year: "2025 — 2026",
    title: { en: "R", zh: "R" },
    subtitle: { en: "Mixed-effects modelling · Bayesian sensitivity · diagnostics", zh: "混合效应模型 · 贝叶斯敏感性分析 · 模型诊断" },
    summary: { en: "Applied postgraduate statistical training to repeated-measures cardiac-acoustic data, building frequentist and Bayesian mixed-effects analyses with explicit contrasts, diagnostics, sensitivity checks, and report-ready outputs.", zh: "把研究生阶段的统计训练应用于重复测量心脏声学数据，建立频率学与贝叶斯混合效应分析，并完成明确对比、模型诊断、敏感性检验及可直接报告的输出。" },
    tags: [
      { en: "nlme · MASS", zh: "nlme · MASS" },
      { en: "brms · Stan", zh: "brms · Stan" },
      { en: "Mixed-effects models", zh: "混合效应模型" },
      { en: "Model diagnostics", zh: "模型诊断" },
      { en: "Power simulation", zh: "功效模拟" },
    ],
    metrics: [
      { value: "936", label: { en: "repeated recording-state observations", zh: "条重复测量记录" } },
      { value: "3", label: { en: "principal model families", zh: "类主要模型" } },
      { value: "100", label: { en: "sensitivity simulations", zh: "次敏感性模拟" } },
    ],
    aside: { en: "R became the part of the pipeline where design decisions were made explicit: unit of analysis, repeated measures, reference categories, interactions, uncertainty, and whether a model had earned interpretation.", zh: "R 是整个流程中把研究设计决定明确化的环节：分析单位、重复测量、参照组、交互作用、不确定性，以及模型是否真正具备可解释性。" },
    detail: [
      { heading: { en: "From taught statistics to a real study", zh: "从课程统计到真实研究" }, body: { en: "Postgraduate training gave me a foundation in R syntax, data structures, data cleaning, visualisation, regression, survival concepts, sample-size reasoning, and clinical-trial statistics. In the acoustic study I moved beyond classroom datasets: readr and dplyr workflows encoded factor levels, joined participant characteristics, standardised BMI, defined outcome eligibility, checked duplicates and missingness, and generated analysis-ready tables without losing provenance.", zh: "研究生课程为我建立了 R 语法、数据结构、清洗、可视化、回归、生存分析概念、样本量思维与临床试验统计基础。在心脏声学研究中，我进一步处理真实数据：用 readr 与 dplyr 设定因子水平、合并受试者特征、标准化 BMI、定义结局可用性、检查重复与缺失，并在不丢失数据来源的前提下生成分析数据表。" } },
      { heading: { en: "Frequentist mixed-effects models", zh: "频率学混合效应模型" }, body: { en: "I modelled continuous best-channel SNR with a linear mixed-effects model and binary segmentability and SNR-pass outcomes with logistic mixed models. Participant-specific random intercepts accounted for repeated recordings; fixed effects included recording state, chest location, sex, age, standardised BMI, and attempt. I assessed state-by-location interactions, constructed location-specific contrasts, and reported dB differences or odds ratios with confidence intervals rather than relying on isolated p-values.", zh: "我用线性混合效应模型分析连续型最佳通道 SNR，并用 logistic 混合模型分析可分割性与 SNR 达标等二分类结局。受试者随机截距用于处理重复记录；固定效应包括记录阶段、胸部位置、性别、年龄、标准化 BMI 与采集次数。我评估阶段×位置交互作用，构建位置特异的对比，并报告 dB 差值或比值比及其置信区间，而不是只依赖单独的 p 值。" } },
      { heading: { en: "Diagnostics and assumption checks", zh: "诊断与假设检验" }, body: { en: "For linear models I examined normalised residuals against fitted values and normal Q–Q plots. For binary models I used Pearson residuals and calibration by fitted-probability decile rather than inappropriate normality plots. A separate heart-rate model tested phase effects with participant random intercepts, and a heteroscedastic sensitivity fit using phase-specific residual variances checked whether exercise-related changes depended on the constant-variance assumption.", zh: "在线性模型中，我检查标准化残差—拟合值图与正态 Q–Q 图；对二分类模型则使用 Pearson 残差及按拟合概率十分位分组的校准图，避免套用不合适的正态性诊断。另一个心率模型以受试者随机截距检验不同阶段效应，并通过阶段特异残差方差的异方差敏感性模型，判断运动相关变化是否依赖恒定方差假设。" } },
      { heading: { en: "Bayesian sensitivity analysis", zh: "贝叶斯敏感性分析" }, body: { en: "Sparse and near-ceiling segmentability cells could create unstable frequentist odds ratios, so I used brms/Stan to fit Bernoulli-logit mixed models with weakly informative regularising priors. I compared additive and state-by-location interaction formulations, derived posterior odds-ratio contrasts, and checked R-hat, bulk and tail effective sample sizes, divergent transitions, maximum tree depth, trace plots, posterior predictive checks, and approximate leave-one-out comparison.", zh: "由于部分可分割性单元格稀疏或接近全数通过，频率学比值比可能不稳定，因此我使用 brms/Stan，以弱信息正则化先验拟合 Bernoulli-logit 混合模型。我比较加性模型与阶段×位置交互模型，计算后验比值比对比，并检查 R-hat、bulk/tail 有效样本量、发散转移、最大树深、轨迹图、后验预测检验及近似留一法比较。" } },
      { heading: { en: "Simulation and report-ready outputs", zh: "模拟与可报告输出" }, body: { en: "I ran a 100-simulation sensitivity analysis to examine power and minimum detectable effects for the principal outcomes. The final workflow exported tidy coefficient tables, planned contrasts, interaction tests, coverage summaries, calibration and residual figures, posterior summaries, and power curves. Keeping computation, diagnostics, and reporting connected reduced transcription errors and made every thesis number traceable to a defined model and data version.", zh: "我进行了 100 次模拟的敏感性分析，用于考察主要结局的统计功效与最小可检测效应。最终流程输出整洁的系数表、预设对比、交互作用检验、覆盖度汇总、校准与残差图、后验结果及功效曲线。把计算、诊断与报告连接起来，减少了转录错误，也使论文中的每个数值都能追溯到明确的数据版本与模型。" } },
    ],
  },
  {
    slug: "coding-cpp",
    section: "coding",
    year: "2026 — Present",
    title: { en: "C++ & Arduino", zh: "C++ 与 Arduino" },
    subtitle: { en: "Embedded-systems foundations", zh: "嵌入式系统基础" },
    summary: { en: "Developing a practical C++ foundation through Arduino-based prototyping: translating simple control logic into code that can be compiled, uploaded, and tested on physical hardware.", zh: "通过 Arduino 原型开发拓展 C++ 基础，把简单控制逻辑转化为能够编译、烧录并在真实硬件上测试的程序。" },
    tags: [
      { en: "C++ fundamentals", zh: "C++ 基础" },
      { en: "Arduino IDE", zh: "Arduino IDE" },
      { en: "GPIO · sensors", zh: "GPIO · 传感器" },
      { en: "Serial debugging", zh: "串口调试" },
    ],
    aside: { en: "This is an active skills-development area. I describe it as embedded-systems foundations rather than claiming production-level firmware experience.", zh: "这是仍在持续拓展的能力方向，因此我将其准确表述为嵌入式系统基础，而非成熟的产品级固件开发经验。" },
    detail: [
      { heading: { en: "Language foundations", zh: "语言基础" }, body: { en: "I am building familiarity with typed variables, operators, control flow, functions, arrays, basic classes, scope, and the compile–link–run cycle. Moving from interpreted research scripts to C++ has helped me understand how memory, types, timing, and resource constraints shape software behaviour closer to the hardware.", zh: "我正在建立对强类型变量、运算符、流程控制、函数、数组、基础类、作用域以及编译—链接—运行流程的理解。从解释型科研脚本转向 C++，让我开始理解内存、类型、时序和资源限制如何影响更接近硬件的软件行为。" } },
      { heading: { en: "Arduino prototyping", zh: "Arduino 原型开发" }, body: { en: "Using the Arduino IDE, I can create sketches, select the board and port, compile code, upload firmware, and verify behaviour through the serial monitor. Exercises cover digital and analogue input/output, timing, sensor readings, simple actuator control, and translating a wiring diagram into pin definitions and testable logic.", zh: "我使用 Arduino IDE 编写 sketch、选择开发板与端口、编译程序、烧录固件，并通过串口监视器核验运行结果。练习包括数字与模拟输入输出、定时、传感器读取、简单执行器控制，以及把接线图转化为引脚定义和可测试逻辑。" } },
      { heading: { en: "Hardware–software debugging", zh: "软硬件联合调试" }, body: { en: "Embedded work makes failure modes tangible: an incorrect pin, baud rate, power connection, library, board selection, or timing assumption can look like a coding error. I am learning to debug systematically by isolating the circuit, checking serial output, testing one component at a time, and distinguishing compile, upload, communication, and hardware faults.", zh: "嵌入式开发让故障模式变得非常具体：错误的引脚、波特率、供电连接、库、开发板选择或时序假设，都可能表现得像代码错误。我正在学习通过隔离电路、检查串口输出、逐个测试组件，系统地区分编译、烧录、通信与硬件故障。" } },
      { heading: { en: "Direction of development", zh: "后续拓展方向" }, body: { en: "The next step is to connect these foundations to biomedical sensing: stable sensor acquisition, calibration, simple real-time filtering, threshold or state logic, and reliable transfer of measurements to a computer for analysis. The goal is to understand the full route from a physical signal to usable data, not simply to collect another programming language.", zh: "下一步是把这些基础连接到生物医学传感：稳定采集、校准、简单实时滤波、阈值或状态逻辑，以及可靠地把测量结果传输到计算机分析。目标并不是单纯增加一种编程语言，而是理解物理信号如何沿完整链路变成可用数据。" } },
    ],
  },
  {
    slug: "coding-stata",
    section: "coding",
    year: "2023 — 2025",
    title: { en: "Stata", zh: "Stata" },
    subtitle: { en: "Medical statistics and clinical data", zh: "医学统计与临床数据" },
    summary: { en: "Used Stata in undergraduate medical-statistics work to move from raw health data through cleaning, exploratory analysis, probability and hypothesis testing to regression and clinically grounded interpretation.", zh: "在本科医学统计学习中使用 Stata，从原始健康数据出发，完成清洗、探索性分析、概率与假设检验、回归及具有临床背景的结果解释。" },
    tags: [
      { en: "t-tests · ANOVA", zh: "t 检验 · ANOVA" },
      { en: "Probability", zh: "概率" },
      { en: "Regression", zh: "回归" },
      { en: "Medical data", zh: "医学数据" },
    ],
    aside: { en: "Stata provided my first structured route from a clinical question to a defensible statistical comparison, including the checks needed before interpreting significance.", zh: "Stata 为我建立了最早的一套结构化路径：从临床问题到可辩护的统计比较，并理解在解释显著性之前必须完成哪些检查。" },
    detail: [
      { heading: { en: "Data preparation and exploration", zh: "数据准备与探索" }, body: { en: "I imported health datasets, inspected variable types and missing values, recoded groups, labelled variables, and generated derived measures such as BMI from height and weight. Histograms, box plots, summary statistics, skewness, quartiles, and the 1.5-IQR rule were used to understand distributions and identify influential observations before formal testing.", zh: "我导入健康数据，检查变量类型与缺失值，重编码分组、设置变量标签，并由身高和体重计算 BMI 等派生指标。通过直方图、箱线图、描述统计、偏度、四分位数及 1.5 倍 IQR 规则，在正式检验前理解数据分布并识别可能有影响的观测值。" } },
      { heading: { en: "Probability and statistical inference", zh: "概率与统计推断" }, body: { en: "Coursework covered probability calculations, sampling distributions, standard errors, confidence intervals, null and alternative hypotheses, p-values, and Type I and Type II error. I used these ideas to choose and interpret one-sample, paired, and independent-samples t-tests where appropriate, while checking whether the comparison and assumptions matched the study question.", zh: "课程涵盖概率计算、抽样分布、标准误、置信区间、原假设与备择假设、p 值，以及第一类和第二类错误。我据此在合适情境中选择并解释单样本、配对及独立样本 t 检验，同时核对比较方式和假设是否符合研究问题。" } },
      { heading: { en: "Group comparisons", zh: "组间比较" }, body: { en: "For questions involving more than two groups, I used analysis of variance followed by appropriate post-hoc comparisons, interpreting the omnibus test before individual pairs. In the medical-data coursework, BMI categories were compared in relation to systolic blood pressure, linking statistical differences back to cardiovascular risk rather than treating significance as the endpoint.", zh: "对于两个以上组别的问题，我使用方差分析并在需要时进行事后比较，先解释整体检验，再查看具体组对。在医学数据作业中，我比较不同 BMI 组的收缩压，并把统计差异重新联系到心血管风险，而不是把显著性本身当作终点。" } },
      { heading: { en: "Correlation and regression", zh: "相关与回归" }, body: { en: "I examined relationships among BMI, cholesterol, age, waist–hip ratio, and systolic blood pressure using correlations, simple linear regression, and multiple regression. Model comparison used effect estimates, confidence intervals, p-values, R-squared, and residual behaviour; transformations were considered when relationships or assumptions suggested them. This introduced the distinction between association, prediction, confounding, and causal interpretation.", zh: "我通过相关分析、简单线性回归及多元回归，考察 BMI、胆固醇、年龄、腰臀比与收缩压之间的关系。模型比较综合效应估计、置信区间、p 值、R² 与残差表现，并在关系形式或假设提示时考虑变量转换。这也帮助我区分相关、预测、混杂与因果解释。" } },
      { heading: { en: "Clinical interpretation", zh: "临床解释" }, body: { en: "The work followed a complete analytical arc: derive a variable, inspect its distribution, select a test, check assumptions, estimate uncertainty, and explain what the result can and cannot support. It also exposed the limits of common measures such as BMI and reinforced why multivariable context is often necessary in clinical risk analysis.", zh: "这项学习覆盖了完整分析链条：构建变量、查看分布、选择检验、检查假设、估计不确定性，并说明结果能够与不能支持什么结论。它也揭示了 BMI 等常用指标的局限，并强化了临床风险分析中多变量背景的重要性。" } },
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
