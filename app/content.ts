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
  { id: "research", label: { en: "Research", zh: "科研" }, intro: { en: "Human studies, physiological signals, and organoid transcriptomics—connecting careful measurement with biological interpretation.", zh: "从人体研究、生理信号到类器官转录组，以可靠测量与数据分析理解生物学问题。" } },
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
    title: { en: "Heart-sound acquisition after exercise", zh: "运动后心音采集研究" },
    subtitle: { en: "Acoustics Laboratory · University of Cambridge", zh: "声学实验室 · 剑桥大学" },
    summary: { en: "Establishing a practical acquisition protocol for future acoustic CAD triage: early recovery restored heart-sound quality after movement stopped while heart rate remained elevated, with 98.7% acquisition yield in 39 healthy volunteers.", zh: "为未来冠心病声学初筛建立实用采集方案：运动停止后的早期恢复期，心音质量恢复而心率仍升高；39 名健康受试者的早期恢复期采集成功率达 98.7%。" },
    tags: [{ en: "Human study", zh: "人体研究" }, { en: "Signal quality", zh: "信号质量" }, { en: "Mixed-effects modelling", zh: "混合效应模型" }, { en: "Python · R", zh: "Python · R" }],
    metrics: [
      { value: "39", label: { en: "healthy participants", zh: "名健康受试者" } },
      { value: "98.7%", label: { en: "early-recovery acquisition yield (231/234)", zh: "早期恢复期采集成功率（231/234）" } },
      { value: "+22.46", label: { en: "bpm in early recovery versus rest", zh: "早期恢复期较静息心率增加（次/分）" } },
    ],
    media: [
      { src: "/images/cardiac-patch-placement.png", alt: { en: "Predecessor BP1 patch illustrating tricuspid and mitral recording locations", zh: "使用前代 BP1 贴片示意三尖瓣区与二尖瓣区采集位置" }, caption: { en: "Placement illustration using the predecessor BP1. All recordings in this study used the six-sensor Biophonics Patch 2 at these two chest locations.", zh: "图中使用前代 BP1 示意放置位置；本研究所有记录均使用六传感器 Biophonics Patch 2 在这两个胸部位置采集。" }, contain: true },
      { src: "/images/cardiac-study-timeline.png", alt: { en: "Study timeline from rest through exercise and recovery", zh: "从静息、运动到恢复期的研究流程时间线" }, caption: { en: "Each four-minute attempt moved from rest to cycling, early recovery, and late recovery.", zh: "每次四分钟采集依次包括静息、骑行、早期恢复和晚期恢复。" }, contain: true },
      { src: "/images/cardiac-signal-review.png", alt: { en: "Six-channel heart-sound review interface with cardiac-cycle labels", zh: "带心动周期标记的六通道心音核验界面" }, caption: { en: "I reviewed six-channel recordings in an interactive interface, checking and correcting S1, systole, S2, and diastole boundaries before quality analysis.", zh: "我在交互式界面中核验六通道记录，并在质量分析前检查和校正 S1、收缩期、S2 与舒张期边界。" }, contain: true, wide: true },
    ],
    aside: { en: "MPhil research, now developed into a manuscript. Findings here follow the revised October 2026 manuscript and concern acquisition feasibility in healthy adults; diagnostic performance remains a question for patient studies.", zh: "由 MPhil 课题发展为论文稿件。本页结果依据 2026 年 10 月修订稿，反映健康成人的采集可行性；诊断表现仍有待患者研究验证。" },
    detail: [
      { heading: { en: "Why the acquisition question matters", zh: "为什么先研究采集可行性" }, body: { en: "Patients with suspected coronary artery disease (CAD) often enter costly imaging pathways, although many do not have obstructive disease. A quick, inexpensive, non-invasive acoustic triage test could help direct imaging toward patients most likely to benefit, particularly if patients can operate the sensor themselves. Exercise may expose cardiac acoustic features that are subtle at rest, but movement, breathing and unstable contact can obscure the same signals. I investigated whether recovery provides a usable interval after movement stops but before the exercise response has subsided.", zh: "疑似冠状动脉疾病（CAD）患者常需接受资源密集的影像检查，但其中许多人并无阻塞性病变。快速、低成本、无创的声学初筛若能由患者自行操作，可能帮助将影像资源用于更需要的人。运动可能放大静息时不明显的心脏声学特征，却也带来动作、呼吸与接触不稳伪影。因此，我考察运动停止但生理反应尚未消退的恢复期，能否提供可用的采集窗口。" } },
      { heading: { en: "Designing and running the volunteer study", zh: "设计并开展健康受试者研究" }, body: { en: "I conducted a prospective study in 39 healthy adults, guiding placement while participants held a six-sensor Biophonics Patch 2 themselves. Three attempts at each of the tricuspid and mitral sites produced 234 recordings and 936 recording-state observations. Each four-minute recording included 40 seconds of rest, 60 seconds of cycling, 60 seconds of early recovery and 80 seconds of late recovery. My work connected participant-facing acquisition, pseudonymised data management and downstream analysis.", zh: "我在 39 名健康成年人中开展前瞻性研究，由研究者指导位置、受试者自行手持六传感器 Biophonics Patch 2。三尖瓣区与二尖瓣区各采集三次，共得到 234 条记录、936 个“记录—阶段”观测。每条四分钟记录包括静息 40 秒、骑行 60 秒、早期恢复 60 秒与晚期恢复 80 秒。我的工作贯穿受试者采集流程、假名化数据管理与后续分析。" } },
      { heading: { en: "Making signal quality measurable", zh: "把信号质量转化为明确结局" }, body: { en: "I checked automated S1–systole–S2–diastole labels visually and by listening, correcting boundaries where possible. The frequency-domain SNR estimator was evaluated in overlapping eight-second windows. Acquisition success meant at least one eligible window reaching 8 dB on the best available channel; unavailable estimates counted as failures. I analysed continuous SNR using linear mixed-effects models, threshold success using a Bayesian logistic mixed model, and heart-rate trajectories using additive mixed models with serial-correlation adjustment. Participant-cluster bootstrapping preserved the repeated-measures structure.", zh: "我通过波形与听音核验自动生成的 S1—收缩期—S2—舒张期标签，并在能够确认时校正边界。频域 SNR 在重叠的 8 秒窗口中计算；只要某阶段至少一个有效窗口的最佳通道达到 8 dB，即记为采集成功，无有效估计则记为失败。我分别用线性混合模型分析连续 SNR、贝叶斯 logistic 混合模型分析达标率、包含序列相关校正的广义加性混合模型分析心率轨迹，并以受试者为单位进行聚类自助重采样，保留重复测量结构。" } },
      { heading: { en: "The recovery window", zh: "恢复期的关键发现" }, body: { en: "All 39 volunteers passed the 8 dB criterion at both chest sites on their first early-recovery attempt. Across all attempts, early-recovery yield was 98.7% (231/234; 95% CI 97.0–100.0%), while adjusted heart rate remained 22.46 bpm above rest. Early-recovery SNR exceeded rest by 3.19 dB at the tricuspid site and 4.09 dB at the mitral site. Gains persisted into late recovery (+1.59 and +2.10 dB), when heart rate was only 2.05 bpm above rest. This suggests some flexibility for placement and settling, although the mechanisms behind sustained acoustic improvement need direct testing.", zh: "39 名受试者在两个胸部位置的首次早期恢复采集中均达到 8 dB。合并所有尝试，早期恢复期成功率为 98.7%（231/234；95% CI 97.0–100.0%），校正后心率仍比静息高 22.46 次/分。该阶段三尖瓣区与二尖瓣区 SNR 分别比静息高 3.19 和 4.09 dB；晚期恢复仍分别高 1.59 和 2.10 dB，而心率仅比静息高 2.05 次/分。这提示放置与稳定贴片可能存在一定时间余量，但声学改善持续的机制仍需直接测量验证。" } },
      { heading: { en: "Turning findings into a practical protocol", zh: "将结果转化为实用方案" }, body: { en: "Active cycling was the least reliable state, particularly at the mitral site; repeats mainly helped during exercise or when a stricter 12 dB criterion was required. The results support evaluating one planned early-recovery attempt per site, with quality-guided repeats. Mean System Usability Scale score was 82.0/100. Higher BMI was associated with lower continuous SNR, but clear BMI, age or sex associations with passing 8 dB were not established—an important distinction between signal quality and the chance of obtaining an adequate recording.", zh: "骑行阶段采集最不稳定，二尖瓣区尤为明显；重复采集主要改善运动中的成功率，或帮助满足更严格的 12 dB 标准。结果支持下一步评估“每个位置先采一次早期恢复记录，按质量需要选择性重复”的方案。系统可用性量表平均为 82.0/100。较高 BMI 与较低的连续 SNR 相关，但 BMI、年龄或性别与 8 dB 达标率的明确关系尚未建立，说明信号质量变化与能否获得合格记录需要分别判断。" } },
      { heading: { en: "What this establishes—and the next test", zh: "研究贡献与下一步验证" }, body: { en: "This work establishes an acquisition opportunity, not CAD diagnostic accuracy or proof of ischaemia. Success describes finding a suitable window, not uniformly good quality throughout recovery. The small healthy cohort, researcher-supported workflow, fixed recording order and single-reviewer segmentation limit generalisation. A prospective patient study should test diagnostic features alongside achieved exercise intensity, time to an adequate recording and assistance needs, and directly evaluate the proposed shorter protocol. The project developed my ability to connect clinical rationale, human measurement, signal processing, statistical modelling and a defensible next study.", zh: "本研究确立了可用的采集机会，并未验证 CAD 诊断准确性或证明缺血。成功率反映能否找到合格窗口，而非整个恢复期始终具有良好质量。健康小样本、研究者辅助、固定采集顺序与单人标注限制了推广。下一步应在患者中同时检验诊断特征、实际运动强度、获得合格记录所需时间及辅助需求，并直接验证建议的缩短方案。该项目训练了我将临床依据、人体测量、信号处理、统计建模与后续研究设计连接起来的能力。" } },
    ],
  },
  {
    slug: "brain-organoid-transcriptomics",
    section: "research",
    year: "2026 — Present",
    title: { en: "Brain organoid transcriptomics", zh: "脑类器官转录组研究" },
    subtitle: { en: "BCI-related research training · Developmental neuroscience", zh: "脑机接口相关科研训练 · 发育神经科学" },
    summary: { en: "Developing reproducible R workflows to explore cortical-organoid maturation, audit developmental reference data and learn single-cell analysis, with an emphasis on what sample design and validation can actually support.", zh: "建立可复现的 R 分析流程，探索皮层类器官成熟过程、核验发育参照数据并开展单细胞分析训练，重点判断样本设计与验证究竟支持哪些结论。" },
    tags: [{ en: "Bulk RNA-seq", zh: "Bulk RNA-seq" }, { en: "Brain organoids", zh: "脑类器官" }, { en: "Seurat", zh: "Seurat" }, { en: "Reproducible analysis", zh: "可复现分析" }],
    links: [
      { label: { en: "R bioinformatics methods", zh: "R 生物信息学方法" }, href: "/portfolio/coding-r-bioinformatics" },
      { label: { en: "Gordon et al. (2021): source study", zh: "Gordon 等（2021）：原始研究" }, href: "https://doi.org/10.1038/s41593-021-00802-y" },
      { label: { en: "Public organoid dataset: GSE150123", zh: "公开类器官数据：GSE150123" }, href: "https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE150123" },
    ],
    aside: { en: "Ongoing computational research training using public datasets. Current outputs are exploratory analyses and documented learning workflows, with developmental mapping and broader model comparisons as subsequent steps.", zh: "基于公开数据的持续计算科研训练。现阶段成果是探索性分析与可追溯的学习流程，发育阶段映射和更全面的模型比较为后续工作。" },
    detail: [
      { heading: { en: "From organoid cultures to developmental questions", zh: "从类器官培养到发育问题" }, body: { en: "Brain organoids provide an experimental model for studying human neural development, but time in culture is not automatically equivalent to an age in the human brain. My recent work asks how expression patterns change across culture duration, which samples support those patterns, and what would be required for a defensible comparison with a human developmental reference. It extends my physiological-data background into molecular and cellular questions relevant to brain–computer-interface research.", zh: "脑类器官为研究人类神经发育提供实验模型，但培养时间并不自动对应人脑的某个年龄。我近期关注表达模式如何随培养时间变化、哪些样本支持这些模式，以及怎样才能与人脑发育参照进行可靠比较。这将此前的生理数据经验延伸到与脑机接口研究相关的分子和细胞问题。" } },
      { heading: { en: "Auditing the data before interpreting biology", zh: "在生物学解释前核验数据" }, body: { en: "For the Gordon cortical-organoid dataset, I aligned gene-expression profiles with sample metadata and inspected donor, cell-line, culture-day and batch structure. The public author object contains 64 profiles from five lines and four individuals, whereas the paper reports 62 analysed samples and the GEO deposit has a different line-label inventory. I documented these differences rather than forcing an apparently matching cohort. This makes the unit of analysis and provenance explicit before any developmental interpretation.", zh: "针对 Gordon 皮层类器官数据，我将表达矩阵与样本信息对齐，核查供者、细胞系、培养天数和批次结构。公开作者对象含来自五个细胞系、四名个体的 64 个表达谱，而论文报告分析 62 个样本，GEO 存档中的细胞系标签也存在差异。我记录这些差异，避免人为删样本来强行匹配，使分析单位与数据来源在发育解释之前就清楚可查。" } },
      { heading: { en: "Exploring maturation-related expression", zh: "探索与成熟相关的表达变化" }, body: { en: "I implemented library-size CPM, log2 transformation, explicit low-expression filtering and exploratory PCA, then examined progenitor-, neuronal- and astroglial-associated markers across culture days, lines and batches. Plots retain individual profiles and within-line summaries so that sparse age support and uneven sampling remain visible. Marker trajectories are interpreted as descriptive expression patterns: changing cell mixtures, regulation and RNA content can all contribute, so they do not by themselves establish cell proportions or biological age.", zh: "我实现了按文库大小计算 CPM、log2 转换、明确的低表达过滤与探索性 PCA，再按培养天数、细胞系和批次检查祖细胞、神经元及星形胶质相关标志物。图中保留单个表达谱与细胞系内汇总，使年龄支持稀疏和采样不均的问题可见。标志物轨迹是描述性表达模式：细胞构成、细胞内调控与 RNA 含量都可能贡献变化，不能仅据此推断细胞比例或生物学年龄。" } },
      { heading: { en: "Learning single-cell analysis on real counts", zh: "以真实计数数据学习单细胞分析" }, body: { en: "Alongside the organoid work, I completed a Seurat workflow on the public PBMC3k training dataset: per-cell QC, documented filtering, normalisation, variable-feature selection, scaling, PCA, neighbour graphs, clustering and UMAP/t-SNE. The checked run retained 2,638 of 2,700 blood cells and produced nine numerical clusters. I examined marker tables and DotPlot, FeaturePlot and violin views, keeping cell-type assignments provisional. This is a completed single-cell training analysis, distinct from the organoid datasets.", zh: "在类器官分析之外，我用公开 PBMC3k 教学数据完成了 Seurat 流程：逐细胞质控、记录过滤规则、归一化、高变基因筛选、缩放、PCA、邻接图、聚类与 UMAP/t-SNE。核验运行从 2,700 个血细胞中保留 2,638 个，得到九个数字编号簇。我结合 marker 表、DotPlot、FeaturePlot 与小提琴图学习解释，并将细胞类型标注保留为待验证判断。这是已完成的单细胞训练分析，与类器官数据分开。" } },
      { heading: { en: "Testing predictions without leaking the target", zh: "避免信息泄漏的预测练习" }, body: { en: "For a predeclared MAP2 target, I tested linear interpolation by holding out every profile at one internal culture age and comparing predictions with a training-age-mean baseline using MAE and RMSE. Separately, I audited the official BrainSpan metadata: 524 regional profiles from 42 donors, with 36 superior temporal cortex profiles spanning 28 age labels. That audit establishes the reference design; BrainSpan expression analysis and the full developmental mapping remain subsequent steps. The interpolation exercise tests internal age reconstruction, not future forecasting or prediction for a new donor.", zh: "针对预先指定的 MAP2，我每次留出某个内部培养年龄的全部表达谱，用其余年龄做线性插值，再以 MAE、RMSE 与训练年龄均值基线比较。另一路工作核验了 BrainSpan 官方元数据：42 名供者贡献 524 个脑区表达谱，其中颞上回皮层 36 个表达谱覆盖 28 个年龄标签。该核验明确了参照设计，BrainSpan 表达分析与完整发育映射仍待推进。插值练习评估的是内部年龄重建，并非未来预测或新供者泛化。" } },
      { heading: { en: "Research habits and next steps", zh: "科研方法与后续方向" }, body: { en: "The work has strengthened my ability to move between biological rationale, matrix structure and statistical assumptions. I maintain executable R Markdown notebooks, sample and filtering audits, saved settings, figures and session information. Next steps are to extend the verified expression workflow, define the developmental comparison precisely and evaluate more advanced methods only after their inputs and validation targets are clear.", zh: "这些工作训练了我在生物学依据、矩阵结构和统计假设之间切换的能力。我保留可执行 R Markdown、样本与过滤审计、参数、图形及会话信息。后续将扩展已核验的表达分析流程，明确发育比较目标，并在输入和验证任务清楚后评估更复杂的方法。" } },
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
    title: { en: "R — Statistical modelling", zh: "R — 统计建模" },
    subtitle: { en: "Mixed-effects models · Bayesian inference · physiological trajectories", zh: "混合效应模型 · 贝叶斯推断 · 生理轨迹" },
    summary: { en: "Applied postgraduate statistical training to repeated-measures cardiac-acoustic data, building frequentist and Bayesian mixed-effects analyses with explicit contrasts, diagnostics, sensitivity checks, and report-ready outputs.", zh: "把研究生阶段的统计训练应用于重复测量心脏声学数据，建立频率学与贝叶斯混合效应分析，并完成明确对比、模型诊断、敏感性检验及可直接报告的输出。" },
    tags: [
      { en: "nlme · mgcv · emmeans", zh: "nlme · mgcv · emmeans" },
      { en: "brms · Stan", zh: "brms · Stan" },
      { en: "Mixed-effects models", zh: "混合效应模型" },
      { en: "Model diagnostics", zh: "模型诊断" },
      { en: "Cluster bootstrap", zh: "聚类自助法" },
    ],
    metrics: [
      { value: "936", label: { en: "repeated recording-state observations", zh: "条重复测量记录" } },
      { value: "3", label: { en: "principal model families", zh: "类主要模型" } },
      { value: "10,000", label: { en: "participant-cluster bootstrap resamples", zh: "次受试者聚类自助重采样" } },
    ],
    links: [{ label: { en: "R — Bioinformatics", zh: "R — 生物信息学" }, href: "/portfolio/coding-r-bioinformatics" }, { label: { en: "Cardiac-acoustics research", zh: "心脏声学研究" }, href: "/portfolio/cardiac-acoustics" }],
    aside: { en: "R became the part of the pipeline where design decisions were made explicit: unit of analysis, repeated measures, reference categories, interactions, uncertainty, and whether a model had earned interpretation.", zh: "R 是整个流程中把研究设计决定明确化的环节：分析单位、重复测量、参照组、交互作用、不确定性，以及模型是否真正具备可解释性。" },
    detail: [
      { heading: { en: "From taught statistics to a real study", zh: "从课程统计到真实研究" }, body: { en: "Postgraduate training gave me a foundation in R syntax, data structures, data cleaning, visualisation, regression, survival concepts, sample-size reasoning, and clinical-trial statistics. In the acoustic study I moved beyond classroom datasets: readr and dplyr workflows encoded factor levels, joined participant characteristics, standardised BMI, defined outcome eligibility, checked duplicates and missingness, and generated analysis-ready tables without losing provenance.", zh: "研究生课程为我建立了 R 语法、数据结构、清洗、可视化、回归、生存分析概念、样本量思维与临床试验统计基础。在心脏声学研究中，我进一步处理真实数据：用 readr 与 dplyr 设定因子水平、合并受试者特征、标准化 BMI、定义结局可用性、检查重复与缺失，并在不丢失数据来源的前提下生成分析数据表。" } },
      { heading: { en: "Defining outcomes and repeated-measures models", zh: "定义结局与重复测量模型" }, body: { en: "The revised acoustic analysis separates the opportunity to obtain an adequate recording from the SNR of an available estimate. I fitted best state-level SNR with a REML linear mixed model, including participant and recording random intercepts. Fixed effects included state × location, attempt, age, sex and participant-standardised BMI. Location-specific contrasts reported dB differences with uncertainty. Unavailable SNR remained a threshold failure but did not enter finite-SNR models, making the different analysis populations explicit.", zh: "修订后的声学分析分别评估能否获得合格记录，以及已有有效估计的 SNR。我用 REML 线性混合模型分析阶段内最佳 SNR，设置受试者与记录随机截距；固定效应包括阶段×位置、采集次数、年龄、性别及按受试者标准化的 BMI。位置特异对比报告 dB 差值及不确定性。无有效 SNR 的记录在达标分析中记为失败，但不进入有限值 SNR 模型，从而明确不同结局的分析人群。" } },
      { heading: { en: "Bayesian acquisition-yield modelling", zh: "贝叶斯采集成功率建模" }, body: { en: "Near-universal recovery success made frequentist odds ratios unstable, so I used brms/Stan for a Bernoulli-logit mixed model with proper regularising priors and a participant random intercept. I reported posterior odds ratios, credible intervals and directional probabilities, and derived population-averaged probability differences separately from conditional odds ratios. Checks included R-hat, bulk/tail effective sample sizes, divergences, tree-depth saturation and grouped posterior-predictive checks; a narrower-prior sensitivity used importance reweighting. Stable sampling did not remove the wide intervals caused by sparse failures.", zh: "恢复期接近全数通过，使频率学比值比不稳定，因此我用 brms/Stan 拟合具有适当正则化先验与受试者随机截距的 Bernoulli-logit 混合模型。结果报告后验比值比、可信区间与方向概率，并另行计算总体平均概率差，区分其与条件比值比。诊断涵盖 R-hat、bulk/tail 有效样本量、发散、树深饱和及分组后验预测检验；更窄先验的敏感性分析采用重要性重加权。采样稳定并不消除失败事件稀少带来的宽区间。" } },
      { heading: { en: "Non-linear trajectories and serial correlation", zh: "非线性轨迹与序列相关" }, body: { en: "I analysed heart-rate trajectories with mgcv/nlme additive mixed models, allowing location-specific smooth curves and participant/recording effects. AR(1) correlation addressed dependence between nearby seconds, restarting at gaps and recording boundaries. Whole-state contrasts used prediction matrices and the full coefficient covariance, averaging the two sites equally. Display smoothing remained separate from model inputs; the reported confidence intervals were conditional on estimated smoothing and correlation parameters, with remaining residual dependence acknowledged.", zh: "我使用 mgcv/nlme 加性混合模型分析心率轨迹，允许位置特异的平滑曲线，并纳入受试者与记录效应。AR(1) 处理相邻秒之间的相关，在缺口与记录边界重新起算。整阶段对比使用预测矩阵与完整系数协方差，并对两个位置等权平均。展示用平滑与模型输入保持区分；报告区间条件于估计的平滑和相关参数，同时说明残余相关仍存在。" } },
      { heading: { en: "Bootstrap, multiplicity and sensitivity", zh: "自助法、多重比较与敏感性分析" }, body: { en: "For acquisition-yield intervals, I resampled whole participants 10,000 times, retaining both sites and all attempts together. I used Holm adjustment within defined families of SNR and heart-rate contrasts, and distinguished unadjusted confidence intervals from adjusted p-values. Sensitivity checks covered a stricter 12 dB criterion, non-overlapping windows, state-specific residual variance, suspected half/double heart-rate labels and minimum valid-second coverage. These checks addressed specific analysis choices rather than turning exploratory comparisons into confirmatory evidence.", zh: "为计算采集成功率区间，我以整名受试者为单位重采样 10,000 次，同时保留其两个位置与全部尝试。SNR 与心率对比按明确的比较家族进行 Holm 校正，并区分未校正置信区间与校正后的 p 值。敏感性检查包括更严格的 12 dB 标准、非重叠窗口、阶段特异残差方差、疑似半频/倍频心率标签及最低有效秒覆盖度。这些检查针对具体分析选择，不将探索性比较升级为验证性证据。" } },
      { heading: { en: "Auditable reporting", zh: "可追溯报告" }, body: { en: "I kept data preparation, model definitions, diagnostic outputs, contrasts and manuscript tables connected through reproducible R workflows. The work required knowing which number represented a selected best window, a whole-state fitted average, a conditional odds ratio or a population probability. That distinction now shapes how I communicate results as well as how I fit models. A separate bioinformatics page documents my newer R work with bulk and single-cell RNA-seq.", zh: "我以可复现 R 流程连接数据整理、模型定义、诊断、对比与论文表格，并明确每个数值究竟表示挑选出的最佳窗口、整阶段拟合均值、条件比值比，还是总体概率。这一区分不仅影响我如何拟合模型，也影响我如何表达结果。另设的生物信息学页面介绍近期 bulk 与单细胞 RNA-seq 的 R 实践。" } },
    ],
  },
  {
    slug: "coding-r-bioinformatics",
    section: "coding",
    year: "2026 — Present",
    title: { en: "R — Bioinformatics", zh: "R — 生物信息学" },
    subtitle: { en: "Bulk RNA-seq · single-cell analysis · developmental data", zh: "Bulk RNA-seq · 单细胞分析 · 发育数据" },
    summary: { en: "Building practical R and R Markdown workflows for expression-matrix inspection, sample-metadata audits, organoid marker trajectories, leakage-aware interpolation and Seurat analysis—from real counts to documented outputs.", zh: "使用 R 与 R Markdown 建立实用流程，涵盖表达矩阵检查、样本元数据核验、类器官 marker 轨迹、避免信息泄漏的插值验证及 Seurat 分析，将真实计数转化为可追溯输出。" },
    tags: [{ en: "Seurat · ggplot2", zh: "Seurat · ggplot2" }, { en: "PCA · UMAP · t-SNE", zh: "PCA · UMAP · t-SNE" }, { en: "QC · marker interpretation", zh: "质控 · marker 解释" }, { en: "R Markdown", zh: "R Markdown" }],
    metrics: [
      { value: "64", label: { en: "organoid profiles explored", zh: "个类器官表达谱用于探索" } },
      { value: "2,638", label: { en: "PBMC training cells retained after QC", zh: "个 PBMC 教学细胞经质控保留" } },
      { value: "524", label: { en: "BrainSpan profiles in the metadata audit", zh: "个 BrainSpan 表达谱纳入元数据核验" } },
    ],
    media: [
      { src: "/images/bioinformatics-pbmc-umap.png", alt: { en: "UMAP of nine numerical clusters from the PBMC3k Seurat training run", zh: "PBMC3k Seurat 教学运行中九个数字编号簇的 UMAP" }, caption: { en: "My PBMC3k training analysis: 2,638 retained blood cells, grouped into nine numerical clusters. This is not an organoid result or validated cell-type annotation.", zh: "我的 PBMC3k 教学分析：2,638 个保留血细胞形成九个数字编号簇；这是血细胞训练结果，并非类器官结果或经验证的细胞类型标注。" }, contain: true },
      { src: "/images/bioinformatics-pbmc-markers.png", alt: { en: "PBMC marker dot plot across the numerical Seurat clusters", zh: "数字编号 Seurat 簇之间的 PBMC marker 点图" }, caption: { en: "Marker evidence is read alongside effect sizes, detection fractions and adjusted p-values before assigning provisional biological labels.", zh: "结合 marker 图、效应大小、检测比例与校正后 p 值评估证据，再考虑暂定生物学标签。" }, contain: true },
    ],
    links: [{ label: { en: "Brain organoid research", zh: "脑类器官研究" }, href: "/portfolio/brain-organoid-transcriptomics" }, { label: { en: "R — Statistical modelling", zh: "R — 统计建模" }, href: "/portfolio/coding-r" }, { label: { en: "Seurat PBMC3k reference tutorial", zh: "Seurat PBMC3k 参考教程" }, href: "https://satijalab.org/seurat/articles/pbmc3k_tutorial.html" }],
    aside: { en: "Applied learning and exploratory reanalysis of public data. Each dataset keeps its own measurement scale, sample structure and interpretation limits; code and parameters are recorded in executable notebooks.", zh: "基于公开数据的实践学习与探索性再分析。各数据集保留自身的测量尺度、样本结构与解释范围，代码及参数记录在可执行笔记本中。" },
    detail: [
      { heading: { en: "Matrix literacy, identifiers and provenance", zh: "矩阵、标识符与数据来源" }, body: { en: "I inspect genes × samples or genes × cells orientation, validate expression-column/metadata alignment and record donor, line, age and batch identifiers before plotting. I distinguish raw counts, UMI counts, CPM, FPKM and RPKM, and do not treat a processed expression table or Loupe file as a raw count matrix. The organoid audit exposed differences between a 64-profile author object and the 62-record GEO deposit, making source reconciliation part of the analysis rather than an invisible cleaning step.", zh: "绘图前，我检查“基因×样本”或“基因×细胞”的矩阵方向，验证表达列与元数据对齐，并记录供者、细胞系、年龄与批次。区分 raw counts、UMI counts、CPM、FPKM 和 RPKM，不将处理后的表达表或 Loupe 文件当作原始计数矩阵。类器官核验发现 64 表达谱作者对象与 62 条 GEO 存档之间存在差异，因此来源核对本身成为明确分析步骤。" } },
      { heading: { en: "Bulk RNA-seq exploration in base R", zh: "使用 base R 探索 bulk RNA-seq" }, body: { en: "I calculate library totals explicitly, use sweep() for CPM and log2(CPM+1), and apply a documented filter of at least 1 CPM in at least 20% of profiles. Exploratory prcomp() uses the 2,000 most variable retained genes, with profiles as rows, centring and no variance scaling. I examine PCA scores against culture age, line and batch, linking score patterns back to loadings and the sample design. These transparent teaching choices are distinct from the source paper's CQN, ComBat and TMM/limma-voom analyses.", zh: "我显式计算文库总量，使用 sweep() 得到 CPM 与 log2(CPM+1)，并记录“至少 20% 表达谱中达到 1 CPM”的过滤规则。探索性 prcomp() 使用保留基因中方差最高的 2,000 个，以表达谱为行，中心化但不按方差缩放。我按培养年龄、细胞系与批次检查 PCA scores，并结合 loadings 与样本设计理解结构。这些透明的教学设置与原论文的 CQN、ComBat 和 TMM/limma-voom 流程保持区分。" } },
      { heading: { en: "Marker trajectories and biological interpretation", zh: "Marker 轨迹与生物学解释" }, body: { en: "I maintain a gene-ID/symbol dictionary and justify marker selection using progenitor, neuronal and astroglial context, including SOX2, DCX and MAP2. Expression plots retain sample points, distinguish lines and batches, and connect within-line age means without implying repeated measurements of one organoid. MBP and PLP1 exploration helped separate low abundance from prediction error. I consider cell composition and technical variation before interpreting a trajectory as developmental regulation.", zh: "我维护基因 ID 与 gene symbol 字典，并依据祖细胞、神经元和星形胶质背景说明 SOX2、DCX、MAP2 等 marker 的选择理由。表达图保留样本点，区分细胞系与批次；连线仅表示细胞系内年龄均值，不暗示同一个类器官被连续测量。MBP 与 PLP1 练习帮助区分低表达与预测误差。在将轨迹解释为发育调控前，我会考虑细胞构成与技术变异。" } },
      { heading: { en: "Single-cell QC and preprocessing in Seurat", zh: "Seurat 单细胞质控与预处理" }, body: { en: "On real PBMC3k counts, I used Read10X() and CreateSeuratObject(), inspected nCount_RNA, nFeature_RNA and mitochondrial fractions, and saved per-cell filtering decisions. A checked run retained 2,638 of 2,700 cells. I then ran LogNormalize, variable-feature selection and ScaleData, learning how library-size normalisation, log transformation and gene-wise scaling answer different questions. The selected QC thresholds are documented training choices, not automatically transferable organoid criteria or experimentally verified live/dead labels.", zh: "基于真实 PBMC3k 计数，我使用 Read10X() 与 CreateSeuratObject()，检查 nCount_RNA、nFeature_RNA 和线粒体比例，并保存逐细胞过滤决定。核验运行从 2,700 个细胞中保留 2,638 个。随后完成 LogNormalize、高变基因筛选与 ScaleData，理解文库大小归一化、log 转换和逐基因缩放分别解决什么问题。质控阈值是记录清楚的教学选择，不能直接推广到类器官，也不能当作实验验证的存活/死亡标签。" } },
      { heading: { en: "PCA, graph clustering and marker evidence", zh: "PCA、图聚类与 marker 证据" }, body: { en: "I used RunPCA(), inspected variance and loadings, built neighbour graphs with FindNeighbors(), clustered with FindClusters(), and visualised structure with RunUMAP() and RunTSNE(). I examined FindAllMarkers() outputs as one-versus-rest comparisons, reading log2 fold change, detection fractions and adjusted p-values alongside DotPlot, FeaturePlot and VlnPlot. Numerical clusters remain separate from biological cell types; reviewed marker evidence is needed before naming them. I also learned how PC choice and clustering resolution can change the result without making one cluster count uniquely correct.", zh: "我使用 RunPCA() 检查方差和 loadings，通过 FindNeighbors() 构图、FindClusters() 聚类，并用 RunUMAP()、RunTSNE() 展示结构。将 FindAllMarkers() 结果理解为一簇对其余细胞的比较，结合 log2 fold change、检测比例、校正后 p 值及 DotPlot、FeaturePlot、VlnPlot 阅读证据。数字编号簇不直接等于生物学细胞类型，命名需要人工审查 marker；PC 数量和 resolution 会影响结果，也不存在唯一正确的簇数。" } },
      { heading: { en: "Interpolation and developmental-reference audits", zh: "插值验证与发育参照核验" }, body: { en: "For MAP2, approx() predicts one held-out internal culture-age mean at a time, withholding all profiles at that age. I compare MAE/RMSE with a training-age-mean baseline and distinguish interpolation from extrapolation and new-donor validation. Any future learned PCA basis, gene selection or model tuning must stay within training folds. Separately, I reconciled BrainSpan donor/region/age metadata and the superior-temporal-cortex chain of 36 profiles → 28 age labels → 26 internal test targets; expression-based BrainSpan prediction remains pending.", zh: "在 MAP2 练习中，approx() 每次预测一个留出的内部培养年龄均值，并将该年龄的全部表达谱从拟合中移除。以 MAE/RMSE 与训练年龄均值基线比较，区分插值、外推和新供者验证。未来若加入学习得到的 PCA 基底、基因选择或调参，均需限制在训练折内。另一路核对 BrainSpan 的供者、脑区和年龄元数据，并明确颞上回皮层“36 个表达谱→28 个年龄标签→26 个内部测试目标”的关系；基于 BrainSpan 表达的预测尚未完成。" } },
      { heading: { en: "Executable notebooks and traceable outputs", zh: "可执行笔记本与可追溯输出" }, body: { en: "I work in RStudio projects with reusable R functions and R Markdown, knitting analyses to HTML while keeping source inputs unchanged. Runs save QC/metadata/marker CSVs, figures, parameter settings, sessionInfo() and, for Seurat, an RDS object. This makes decisions inspectable and allows me to revisit results after changing a threshold or learning a method more deeply. Current strengths are exploratory workflow construction, data auditing and interpretation; formal organoid differential-expression analysis and full published developmental-map replication remain later steps.", zh: "我使用 RStudio 项目、可复用 R 函数和 R Markdown，将分析 knit 为 HTML，同时保留原始输入。运行保存质控、元数据、marker CSV、图形、参数、sessionInfo()，Seurat 还保存 RDS 对象，使决定可检查、参数调整后可回溯。目前重点是探索性流程构建、数据核验与解释；正式类器官差异表达分析及完整发表发育图谱复现为后续步骤。" } },
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
