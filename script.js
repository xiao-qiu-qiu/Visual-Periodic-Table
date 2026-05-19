const categoryNames = {
  alkali: "碱金属",
  alkaline: "碱土金属",
  transition: "过渡金属",
  post: "后过渡金属",
  metalloid: "类金属",
  nonmetal: "非金属",
  halogen: "卤素",
  noble: "稀有气体",
  lanthanide: "镧系",
  actinide: "锕系",
};

const phaseNames = {
  gas: "气体",
  liquid: "液体",
  solid: "固体",
  unknown: "未知",
};

const categoryColors = {
  alkali: "#f2994a",
  alkaline: "#e6c14f",
  transition: "#70a288",
  post: "#8ab6d6",
  metalloid: "#9f86c0",
  nonmetal: "#55b7a7",
  halogen: "#e8788f",
  noble: "#7f9cf5",
  lanthanide: "#d79561",
  actinide: "#c97f8a",
};

const phaseColors = {
  gas: "#7f9cf5",
  liquid: "#36a3b5",
  solid: "#d9a441",
  unknown: "#a5a8ad",
};

const valenceTypeNames = {
  positive: "固定正价",
  variable: "可变正价",
  mixed: "正负皆有",
  negative: "常见负价",
  stable: "稳定零价",
  predicted: "预测/少见",
};

const valenceTypeColors = {
  positive: "#d9a441",
  variable: "#c8736a",
  mixed: "#8f73c7",
  negative: "#4aa99f",
  stable: "#7f9cf5",
  predicted: "#9aa0a6",
};

const valenceLevelStops = [
  { value: -4, color: "#3f7fc0", label: "-4" },
  { value: -2, color: "#41aaa0", label: "-2" },
  { value: 0, color: "#a5a8ad", label: "0" },
  { value: 2, color: "#e6c14f", label: "+2" },
  { value: 4, color: "#e28a43", label: "+4" },
  { value: 6, color: "#d85f55", label: "+6" },
  { value: 8, color: "#8f62bc", label: "+8" },
];

const blockNames = {
  s: "s 区",
  p: "p 区",
  d: "d 区",
  ds: "sd 区",
  f: "f 区",
};

const blockColors = {
  s: "#f2b84b",
  p: "#55b7a7",
  d: "#70a288",
  ds: "#8ab6d6",
  f: "#d79561",
};

const blockGuides = [
  { key: "s", label: "s", row: 1, col: 1, rows: 7, cols: 2, side: "s" },
  { key: "d", label: "d", row: 4, col: 3, rows: 4, cols: 8, side: "top" },
  { key: "ds", label: "sd", row: 4, col: 11, rows: 4, cols: 2, side: "top" },
  { key: "p", label: "p", row: 2, col: 13, rows: 6, cols: 6, side: "p" },
  { key: "f", label: "f", row: 8, col: 3, rows: 2, cols: 15, side: "left" },
];

const groupLabelGuides = [
  { label: "IA", col: 1 },
  { label: "IIA", col: 2 },
  { label: "IIIB", col: 3 },
  { label: "IVB", col: 4 },
  { label: "VB", col: 5 },
  { label: "VIB", col: 6 },
  { label: "VIIB", col: 7 },
  { label: "VIII", col: 8, span: 3 },
  { label: "IB", col: 11 },
  { label: "IIB", col: 12 },
  { label: "IIIA", col: 13 },
  { label: "IVA", col: 14 },
  { label: "VA", col: 15 },
  { label: "VIA", col: 16 },
  { label: "VIIA", col: 17 },
  { label: "0族", col: 18 },
];

const periodNames = ["", "一", "二", "三", "四", "五", "六", "七"];

const groupNames = {
  1: "IA",
  2: "IIA",
  3: "IIIB",
  4: "IVB",
  5: "VB",
  6: "VIB",
  7: "VIIB",
  8: "VIII",
  9: "VIII",
  10: "VIII",
  11: "IB",
  12: "IIB",
  13: "IIIA",
  14: "IVA",
  15: "VA",
  16: "VIA",
  17: "VIIA",
  18: "0族",
};

const modeMeta = {
  category: {
    title: "按元素类别着色",
    description: "颜色展示金属、非金属、卤素、稀有气体等类别。先看“分区”，再切换到具体性质，更容易理解周期律。",
    unit: "",
  },
  electronegativity: {
    title: "电负性：越红越容易吸引共用电子对",
    description: "高中常看同周期从左到右增强、同主族从上到下减弱。氟最高，稀有气体和部分超重元素通常不作要求。",
    unit: "Pauling",
  },
  ionization: {
    title: "电离能：切换查看多级电离能",
    description: "默认显示第 1 电离能。切换到 I2、I3 等级数时，颜色、曲线和右侧详情会同步显示继续移去电子所需的能量。",
    unit: "kJ/mol",
  },
  radius: {
    title: "原子半径：越红表示半径越大",
    description: "原子半径与电负性、电离能的趋势大体相反：同周期从左到右减小，同主族从上到下增大。",
    unit: "pm",
  },
  metallicity: {
    title: "金属性：越红越容易失电子",
    description: "金属性通常左下角最强、右上角最弱。它和还原性、最高价氧化物对应水化物的碱性等高中知识点联系很紧。",
    unit: "",
  },
  block: {
    title: "电子分区：s、d、sd、p、f 区",
    description: "按高中常见分区着色，并用外框标出每个分区的位置。s 区在左侧，p 区在右侧，d 区和 sd 区位于过渡金属区域，f 区单独展开在下方。",
    unit: "",
  },
  valence: {
    title: "常见价态：颜色显示价态高低",
    description: "元素格内显示高中常见化合价。默认按最高主价态着色，也可以在周期表中间切换为按类型着色。",
    unit: "",
  },
  melting: {
    title: "熔点：越红越难熔化",
    description: "熔点反映固体变成液体所需温度。过渡金属和部分非金属通常较高，常温下为气体的元素熔点很低。",
    unit: "°C",
  },
  boiling: {
    title: "沸点：越紫越难气化",
    description: "沸点反映液体变成气体所需温度。金属键、共价网络和分子间作用力都会影响它，因此趋势比电负性更复杂。",
    unit: "°C",
  },
  phase: {
    title: "常温状态",
    description: "大多数元素在常温常压下是固体；汞和溴是液体；氢、氮、氧、氟、氯和稀有气体等是气体。",
    unit: "",
  },
};

const trendGuideMeta = {
  electronegativity: {
    title: "电负性增强",
    direction: "up-right",
    horizontal: "同周期：左到右增强",
    vertical: "同主族：下到上增强",
    corner: "右上更强",
  },
  ionization: {
    title: "第 1 电离能增大",
    direction: "up-right",
    horizontal: "同周期：左到右增大",
    vertical: "同主族：下到上增大",
    corner: "右上更大",
    exceptions: ["IIA > IIIA", "VA > VIA"],
  },
  radius: {
    title: "原子半径增大",
    direction: "down-left",
    horizontal: "同周期：右到左增大",
    vertical: "同主族：上到下增大",
    corner: "左下更大",
  },
  metallicity: {
    title: "金属性增强",
    direction: "down-left",
    horizontal: "同周期：右到左增强",
    vertical: "同主族：上到下增强",
    corner: "左下更强",
  },
  melting: {
    title: "熔点高值带",
    direction: "thermal",
    horizontal: "过渡金属常偏高",
    vertical: "C、Si 等有峰值",
    corner: "不按单一方向变化",
    factors: ["化学键强弱", "晶体结构", "相对原子/分子质量", "分子间作用力"],
    factorNote: "离子晶体、金属晶体、共价晶体和分子晶体不能只按位置硬背，要先看粒子间作用力和结构。",
  },
  boiling: {
    title: "沸点高值带",
    direction: "thermal",
    horizontal: "过渡金属常偏高",
    vertical: "结构影响很明显",
    corner: "看颜色深浅背记",
    factors: ["粒子间作用力", "分子极性", "相对分子质量", "金属键 / 共价网络"],
    factorNote: "沸点更直接反映粒子脱离彼此的难易，分子物质尤其要看范德华力、氢键和极性。",
  },
};

const rows = `
1|H|氢|1|1|nonmetal|gas|2.20|1312|53|最轻的元素，常用于理解原子结构、共价键和酸碱反应。
2|He|氦|1|18|noble|gas||2372|31|稀有气体，最外层电子稳定，化学性质很不活泼。
3|Li|锂|2|1|alkali|solid|0.98|520|167|碱金属，容易失去一个电子，体现很强的金属性。
4|Be|铍|2|2|alkaline|solid|1.57|900|112|碱土金属，半径较小，性质和同族下方元素有差异。
5|B|硼|2|13|metalloid|solid|2.04|801|87|典型类金属，可帮助理解金属与非金属的过渡。
6|C|碳|2|14|nonmetal|solid|2.55|1086|67|生命和有机化学核心元素，共价键能力强。
7|N|氮|2|15|nonmetal|gas|3.04|1402|56|空气主要成分之一，第一电离能较高。
8|O|氧|2|16|nonmetal|gas|3.44|1314|48|强非金属性元素，常见于氧化反应。
9|F|氟|2|17|halogen|gas|3.98|1681|42|电负性最高，是理解非金属性趋势的标志点。
10|Ne|氖|2|18|noble|gas||2081|38|稀有气体，电子层结构稳定。
11|Na|钠|3|1|alkali|solid|0.93|496|190|典型碱金属，和水反应剧烈。
12|Mg|镁|3|2|alkaline|solid|1.31|738|145|碱土金属，燃烧产生耀眼白光。
13|Al|铝|3|13|post|solid|1.61|578|118|常见金属，氧化膜使其耐腐蚀。
14|Si|硅|3|14|metalloid|solid|1.90|787|111|类金属，半导体材料的基础元素。
15|P|磷|3|15|nonmetal|solid|2.19|1012|98|非金属，有多种同素异形体。
16|S|硫|3|16|nonmetal|solid|2.58|1000|88|常见非金属，涉及硫酸和氧化还原知识。
17|Cl|氯|3|17|halogen|gas|3.16|1251|79|典型卤素，非金属性强，常见价态丰富。
18|Ar|氩|3|18|noble|gas||1521|71|稀有气体，常用于保护气。
19|K|钾|4|1|alkali|solid|0.82|419|243|碱金属，比钠更活泼。
20|Ca|钙|4|2|alkaline|solid|1.00|590|194|碱土金属，常见于石灰石和骨骼。
21|Sc|钪|4|3|transition|solid|1.36|633|184|过渡金属，常作为第 4 周期 d 区起点。
22|Ti|钛|4|4|transition|solid|1.54|659|176|过渡金属，强度高、耐腐蚀。
23|V|钒|4|5|transition|solid|1.63|651|171|过渡金属，常见多种价态。
24|Cr|铬|4|6|transition|solid|1.66|653|166|过渡金属，半充满 d 轨道带来稳定性。
25|Mn|锰|4|7|transition|solid|1.55|717|161|过渡金属，高锰酸钾是常见强氧化剂。
26|Fe|铁|4|8|transition|solid|1.83|762|156|最常见过渡金属之一，涉及铁及其化合物。
27|Co|钴|4|9|transition|solid|1.88|760|152|过渡金属，可形成有色化合物。
28|Ni|镍|4|10|transition|solid|1.91|737|149|过渡金属，常用于合金。
29|Cu|铜|4|11|transition|solid|1.90|746|145|常见金属，导电性好。
30|Zn|锌|4|12|transition|solid|1.65|906|142|常见金属，化合价以 +2 为主。
31|Ga|镓|4|13|post|solid|1.81|579|136|熔点很低的后过渡金属。
32|Ge|锗|4|14|metalloid|solid|2.01|762|125|类金属，半导体材料。
33|As|砷|4|15|metalloid|solid|2.18|947|114|类金属，化学性质介于金属和非金属之间。
34|Se|硒|4|16|nonmetal|solid|2.55|941|103|非金属，与硫同族。
35|Br|溴|4|17|halogen|liquid|2.96|1140|94|常温下为液体的卤素。
36|Kr|氪|4|18|noble|gas|3.00|1351|88|稀有气体，电负性数据高中阶段不常作要求。
37|Rb|铷|5|1|alkali|solid|0.82|403|265|碱金属，金属性很强。
38|Sr|锶|5|2|alkaline|solid|0.95|550|219|碱土金属，焰色反应呈红色。
39|Y|钇|5|3|transition|solid|1.22|600|212|过渡金属，常与稀土元素一同讨论。
40|Zr|锆|5|4|transition|solid|1.33|640|206|过渡金属，耐腐蚀。
41|Nb|铌|5|5|transition|solid|1.60|652|198|过渡金属。
42|Mo|钼|5|6|transition|solid|2.16|684|190|过渡金属，熔点高。
43|Tc|锝|5|7|transition|solid|1.90|702|183|人工放射性元素，高中通常只了解位置。
44|Ru|钌|5|8|transition|solid|2.20|710|178|过渡金属。
45|Rh|铑|5|9|transition|solid|2.28|720|173|过渡金属，贵金属之一。
46|Pd|钯|5|10|transition|solid|2.20|804|169|过渡金属，可吸收氢。
47|Ag|银|5|11|transition|solid|1.93|731|165|导电性很强的贵金属。
48|Cd|镉|5|12|transition|solid|1.69|868|161|过渡金属，化合价常为 +2。
49|In|铟|5|13|post|solid|1.78|558|156|后过渡金属。
50|Sn|锡|5|14|post|solid|1.96|709|145|后过渡金属，常见 +2、+4 价。
51|Sb|锑|5|15|metalloid|solid|2.05|834|133|类金属。
52|Te|碲|5|16|metalloid|solid|2.10|869|123|类金属，与硒同族。
53|I|碘|5|17|halogen|solid|2.66|1008|115|卤素，常见于淀粉检验。
54|Xe|氙|5|18|noble|gas|2.60|1170|108|稀有气体，可形成少量化合物。
55|Cs|铯|6|1|alkali|solid|0.79|376|298|金属性极强的碱金属。
56|Ba|钡|6|2|alkaline|solid|0.89|503|253|碱土金属，硫酸钡难溶。
57|La|镧|6|3|lanthanide|solid|1.10|538|195|镧系起点，常归入稀土元素。
58|Ce|铈|6|3|lanthanide|solid|1.12|534|185|镧系元素，常见 +3、+4 价。
59|Pr|镨|6|3|lanthanide|solid|1.13|527|247|镧系元素。
60|Nd|钕|6|3|lanthanide|solid|1.14|533|206|镧系元素，常用于强磁材料。
61|Pm|钷|6|3|lanthanide|solid|1.13|540|205|放射性镧系元素。
62|Sm|钐|6|3|lanthanide|solid|1.17|545|238|镧系元素。
63|Eu|铕|6|3|lanthanide|solid|1.20|547|231|镧系元素。
64|Gd|钆|6|3|lanthanide|solid|1.20|593|233|镧系元素。
65|Tb|铽|6|3|lanthanide|solid|1.20|566|225|镧系元素。
66|Dy|镝|6|3|lanthanide|solid|1.22|573|228|镧系元素。
67|Ho|钬|6|3|lanthanide|solid|1.23|581|226|镧系元素。
68|Er|铒|6|3|lanthanide|solid|1.24|589|226|镧系元素。
69|Tm|铥|6|3|lanthanide|solid|1.25|597|222|镧系元素。
70|Yb|镱|6|3|lanthanide|solid|1.10|603|222|镧系元素。
71|Lu|镥|6|3|lanthanide|solid|1.27|524|217|镧系收尾元素。
72|Hf|铪|6|4|transition|solid|1.30|659|208|过渡金属，与锆性质相似。
73|Ta|钽|6|5|transition|solid|1.50|761|200|过渡金属，耐腐蚀。
74|W|钨|6|6|transition|solid|2.36|770|193|熔点极高的过渡金属。
75|Re|铼|6|7|transition|solid|1.90|760|188|过渡金属。
76|Os|锇|6|8|transition|solid|2.20|840|185|过渡金属，密度很大。
77|Ir|铱|6|9|transition|solid|2.20|880|180|贵金属，耐腐蚀。
78|Pt|铂|6|10|transition|solid|2.28|870|177|贵金属，常作催化剂。
79|Au|金|6|11|transition|solid|2.54|890|174|贵金属，延展性强。
80|Hg|汞|6|12|transition|liquid|2.00|1007|171|常温下为液体的金属。
81|Tl|铊|6|13|post|solid|1.62|589|156|后过渡金属。
82|Pb|铅|6|14|post|solid|2.33|716|154|后过渡金属，常见 +2 价。
83|Bi|铋|6|15|post|solid|2.02|703|143|后过渡金属。
84|Po|钋|6|16|post|solid|2.00|812|135|放射性元素。
85|At|砹|6|17|halogen|solid|2.20|920|127|放射性卤素，高中只需了解其位置趋势。
86|Rn|氡|6|18|noble|gas||1037|120|放射性稀有气体。
87|Fr|钫|7|1|alkali|solid|0.70|380|348|放射性碱金属，金属性趋势很强。
88|Ra|镭|7|2|alkaline|solid|0.90|509|283|放射性碱土金属。
89|Ac|锕|7|3|actinide|solid|1.10|499|260|锕系起点，放射性元素。
90|Th|钍|7|3|actinide|solid|1.30|587|237|锕系元素。
91|Pa|镤|7|3|actinide|solid|1.50|568|243|锕系元素。
92|U|铀|7|3|actinide|solid|1.38|598|240|锕系元素，核能相关。
93|Np|镎|7|3|actinide|solid|1.36|605|221|锕系元素。
94|Pu|钚|7|3|actinide|solid|1.28|585|243|锕系元素。
95|Am|镅|7|3|actinide|solid|1.30|578|244|锕系元素。
96|Cm|锔|7|3|actinide|solid|1.30|581|245|锕系元素。
97|Bk|锫|7|3|actinide|solid|1.30|601|244|锕系元素。
98|Cf|锎|7|3|actinide|solid|1.30|608|245|锕系元素。
99|Es|锿|7|3|actinide|solid|1.30|619|245|锕系元素，数据多为估计。
100|Fm|镄|7|3|actinide|solid|1.30|627|245|锕系元素，数据多为估计。
101|Md|钔|7|3|actinide|solid|1.30|635|246|锕系元素，数据多为估计。
102|No|锘|7|3|actinide|solid|1.30|642|246|锕系元素，数据多为估计。
103|Lr|铹|7|3|actinide|solid|1.30|470|246|锕系收尾元素。
104|Rf|𬬻|7|4|transition|unknown||580|240|超重过渡金属，许多性质为预测。
105|Db|𬭊|7|5|transition|unknown||660|230|超重过渡金属，许多性质为预测。
106|Sg|𬭳|7|6|transition|unknown||760|220|超重过渡金属，许多性质为预测。
107|Bh|𬭛|7|7|transition|unknown||740|210|超重过渡金属，许多性质为预测。
108|Hs|𬭶|7|8|transition|unknown||730|200|超重过渡金属，许多性质为预测。
109|Mt|鿏|7|9|transition|unknown||800|190|超重过渡金属，许多性质为预测。
110|Ds|𫟼|7|10|transition|unknown||960|180|超重过渡金属，许多性质为预测。
111|Rg|𬬭|7|11|transition|unknown||1020|170|超重过渡金属，许多性质为预测。
112|Cn|鎶|7|12|transition|unknown||1155|160|超重元素，性质受相对论效应影响明显。
113|Nh|鉨|7|13|post|unknown||704|170|超重后过渡元素，许多性质为预测。
114|Fl|𫓧|7|14|post|unknown||823|180|超重后过渡元素，许多性质为预测。
115|Mc|镆|7|15|post|unknown||538|190|超重后过渡元素，许多性质为预测。
116|Lv|𫟷|7|16|post|unknown||663|175|超重后过渡元素，许多性质为预测。
117|Ts|鿬|7|17|halogen|unknown||742|165|第 7 周期卤素，许多性质为预测。
118|Og|鿫|7|18|noble|unknown||860|157|第 7 周期稀有气体，性质与轻稀有气体可能不同。
`;

const elements = rows
  .trim()
  .split("\n")
  .map((line) => {
    const [z, symbol, name, period, group, category, phase, en, ionization, radius, summary] = line.split("|");
    return {
      z: Number(z),
      symbol,
      name,
      period: Number(period),
      group: Number(group),
      category,
      phase,
      electronegativity: en ? Number(en) : null,
      ionization: ionization ? Number(ionization) : null,
      radius: radius ? Number(radius) : null,
      summary,
    };
  });

const valenceData = {
  H: { states: ["+1", "-1"], main: "+1", note: "金属氢化物中可为 -1" },
  He: { states: ["0"], main: "0" },
  Li: { states: ["+1"], main: "+1" },
  Be: { states: ["+2"], main: "+2" },
  B: { states: ["+3"], main: "+3" },
  C: { states: ["-4", "+2", "+4"], main: "+4" },
  N: { states: ["-3", "+3", "+5"], main: "-3 / +5" },
  O: { states: ["-2", "-1", "+2"], main: "-2", note: "过氧化物中常为 -1" },
  F: { states: ["-1"], main: "-1" },
  Ne: { states: ["0"], main: "0" },
  Na: { states: ["+1"], main: "+1" },
  Mg: { states: ["+2"], main: "+2" },
  Al: { states: ["+3"], main: "+3" },
  Si: { states: ["-4", "+4"], main: "+4" },
  P: { states: ["-3", "+3", "+5"], main: "+5" },
  S: { states: ["-2", "+4", "+6"], main: "+6" },
  Cl: { states: ["-1", "+1", "+3", "+5", "+7"], main: "-1 / +7" },
  Ar: { states: ["0"], main: "0" },
  K: { states: ["+1"], main: "+1" },
  Ca: { states: ["+2"], main: "+2" },
  Sc: { states: ["+3"], main: "+3" },
  Ti: { states: ["+2", "+3", "+4"], main: "+4" },
  V: { states: ["+2", "+3", "+4", "+5"], main: "+5" },
  Cr: { states: ["+2", "+3", "+6"], main: "+3 / +6" },
  Mn: { states: ["+2", "+4", "+6", "+7"], main: "+2 / +7" },
  Fe: { states: ["+2", "+3"], main: "+2 / +3" },
  Co: { states: ["+2", "+3"], main: "+2 / +3" },
  Ni: { states: ["+2", "+3"], main: "+2" },
  Cu: { states: ["+1", "+2"], main: "+2" },
  Zn: { states: ["+2"], main: "+2" },
  Ga: { states: ["+3"], main: "+3" },
  Ge: { states: ["-4", "+2", "+4"], main: "+4" },
  As: { states: ["-3", "+3", "+5"], main: "+3 / +5" },
  Se: { states: ["-2", "+4", "+6"], main: "-2 / +6" },
  Br: { states: ["-1", "+1", "+3", "+5", "+7"], main: "-1" },
  Kr: { states: ["0", "+2"], main: "0" },
  Rb: { states: ["+1"], main: "+1" },
  Sr: { states: ["+2"], main: "+2" },
  Y: { states: ["+3"], main: "+3" },
  Zr: { states: ["+4"], main: "+4" },
  Nb: { states: ["+3", "+5"], main: "+5" },
  Mo: { states: ["+2", "+3", "+4", "+6"], main: "+6" },
  Tc: { states: ["+4", "+7"], main: "+7" },
  Ru: { states: ["+3", "+4", "+8"], main: "+3 / +4" },
  Rh: { states: ["+3"], main: "+3" },
  Pd: { states: ["+2", "+4"], main: "+2" },
  Ag: { states: ["+1"], main: "+1" },
  Cd: { states: ["+2"], main: "+2" },
  In: { states: ["+1", "+3"], main: "+3" },
  Sn: { states: ["+2", "+4"], main: "+2 / +4" },
  Sb: { states: ["-3", "+3", "+5"], main: "+3 / +5" },
  Te: { states: ["-2", "+4", "+6"], main: "-2 / +6" },
  I: { states: ["-1", "+1", "+3", "+5", "+7"], main: "-1" },
  Xe: { states: ["0", "+2", "+4", "+6", "+8"], main: "0" },
  Cs: { states: ["+1"], main: "+1" },
  Ba: { states: ["+2"], main: "+2" },
  La: { states: ["+3"], main: "+3" },
  Ce: { states: ["+3", "+4"], main: "+3" },
  Pr: { states: ["+3", "+4"], main: "+3" },
  Nd: { states: ["+3"], main: "+3" },
  Pm: { states: ["+3"], main: "+3" },
  Sm: { states: ["+2", "+3"], main: "+3" },
  Eu: { states: ["+2", "+3"], main: "+3" },
  Gd: { states: ["+3"], main: "+3" },
  Tb: { states: ["+3", "+4"], main: "+3" },
  Dy: { states: ["+3"], main: "+3" },
  Ho: { states: ["+3"], main: "+3" },
  Er: { states: ["+3"], main: "+3" },
  Tm: { states: ["+2", "+3"], main: "+3" },
  Yb: { states: ["+2", "+3"], main: "+3" },
  Lu: { states: ["+3"], main: "+3" },
  Hf: { states: ["+4"], main: "+4" },
  Ta: { states: ["+5"], main: "+5" },
  W: { states: ["+4", "+6"], main: "+6" },
  Re: { states: ["+4", "+6", "+7"], main: "+7" },
  Os: { states: ["+4", "+6", "+8"], main: "+4" },
  Ir: { states: ["+3", "+4"], main: "+3 / +4" },
  Pt: { states: ["+2", "+4"], main: "+2 / +4" },
  Au: { states: ["+1", "+3"], main: "+3" },
  Hg: { states: ["+1", "+2"], main: "+2" },
  Tl: { states: ["+1", "+3"], main: "+1" },
  Pb: { states: ["+2", "+4"], main: "+2" },
  Bi: { states: ["+3", "+5"], main: "+3" },
  Po: { states: ["-2", "+2", "+4", "+6"], main: "+4" },
  At: { states: ["-1", "+1", "+3", "+5", "+7"], main: "-1" },
  Rn: { states: ["0", "+2"], main: "0" },
  Fr: { states: ["+1"], main: "+1" },
  Ra: { states: ["+2"], main: "+2" },
  Ac: { states: ["+3"], main: "+3" },
  Th: { states: ["+4"], main: "+4" },
  Pa: { states: ["+5"], main: "+5" },
  U: { states: ["+3", "+4", "+5", "+6"], main: "+6" },
  Np: { states: ["+3", "+4", "+5", "+6", "+7"], main: "+5 / +6" },
  Pu: { states: ["+3", "+4", "+5", "+6"], main: "+4" },
  Am: { states: ["+3"], main: "+3" },
  Cm: { states: ["+3"], main: "+3" },
  Bk: { states: ["+3", "+4"], main: "+3" },
  Cf: { states: ["+3"], main: "+3" },
  Es: { states: ["+3"], main: "+3" },
  Fm: { states: ["+3"], main: "+3" },
  Md: { states: ["+2", "+3"], main: "+3" },
  No: { states: ["+2", "+3"], main: "+2" },
  Lr: { states: ["+3"], main: "+3" },
  Rf: { states: ["+4"], main: "+4", type: "predicted" },
  Db: { states: ["+5"], main: "+5", type: "predicted" },
  Sg: { states: ["+6"], main: "+6", type: "predicted" },
  Bh: { states: ["+7"], main: "+7", type: "predicted" },
  Hs: { states: ["+8"], main: "+8", type: "predicted" },
  Mt: { states: ["预测"], main: "预测", type: "predicted" },
  Ds: { states: ["预测"], main: "预测", type: "predicted" },
  Rg: { states: ["预测"], main: "预测", type: "predicted" },
  Cn: { states: ["+2"], main: "+2", type: "predicted" },
  Nh: { states: ["+1", "+3"], main: "+1", type: "predicted" },
  Fl: { states: ["+2", "+4"], main: "+2", type: "predicted" },
  Mc: { states: ["+1", "+3"], main: "+1", type: "predicted" },
  Lv: { states: ["-2", "+2", "+4"], main: "+2", type: "predicted" },
  Ts: { states: ["-1", "+1", "+3", "+5"], main: "-1", type: "predicted" },
  Og: { states: ["0"], main: "0", type: "predicted" },
};

const valenceQuickGuide = [
  {
    title: "主族速查",
    items: [
      { label: "IA", value: "+1", tone: "positive" },
      { label: "IIA", value: "+2", tone: "positive" },
      { label: "IIIA", value: "+3", tone: "positive" },
      { label: "IVA", value: "-4 / +4", tone: "mixed" },
      { label: "VA", value: "-3 / +3 / +5", tone: "mixed" },
      { label: "VIA", value: "-2 / +4 / +6", tone: "mixed" },
      { label: "VIIA", value: "-1 / +1 / +3 / +5 / +7", tone: "mixed" },
      { label: "0族", value: "0", tone: "stable" },
    ],
  },
  {
    title: "高频变价",
    items: [
      { label: "Fe", value: "+2 / +3", symbol: "Fe", tone: "variable" },
      { label: "Cu", value: "+1 / +2", symbol: "Cu", tone: "variable" },
      { label: "Mn", value: "+2 / +4 / +6 / +7", symbol: "Mn", tone: "variable" },
      { label: "Cr", value: "+2 / +3 / +6", symbol: "Cr", tone: "variable" },
      { label: "Ag", value: "+1", symbol: "Ag", tone: "positive" },
      { label: "Zn", value: "+2", symbol: "Zn", tone: "positive" },
    ],
  },
  {
    title: "易混提醒",
    items: [
      { label: "H", value: "+1 / -1", symbol: "H", tone: "mixed" },
      { label: "O", value: "-2 / -1 / +2", symbol: "O", tone: "mixed" },
      { label: "F", value: "-1", symbol: "F", tone: "negative" },
      { label: "Al", value: "+3", symbol: "Al", tone: "positive" },
      { label: "Sn", value: "+2 / +4", symbol: "Sn", tone: "variable" },
      { label: "Pb", value: "+2 / +4", symbol: "Pb", tone: "variable" },
    ],
  },
];

const ionizationEnergyData = {
  1: [1312],
  2: [2372.3, 5250.5],
  3: [520.2, 7298.1, 11815],
  4: [899.5, 1757.1, 14848.7, 21006.6],
  5: [800.6, 2427.1, 3659.7, 25025.8, 32826.7],
  6: [1086.5, 2352.6, 4620.5, 6222.7, 37831, 47277],
  7: [1402.3, 2856, 4578.1, 7475, 9444.9, 53266.6],
  8: [1313.9, 3388.3, 5300.5, 7469.2, 10989.5, 13326.5],
  9: [1681, 3374.2, 6050.4, 8407.7, 11022.7, 15164.1],
  10: [2080.7, 3952.3, 6122, 9371, 12177, 15238],
  11: [495.8, 4562, 6910.3, 9543, 13354, 16613],
  12: [737.7, 1450.7, 7732.7, 10542.5, 13630, 18020],
  13: [577.5, 1816.7, 2744.8, 11577, 14842, 18379],
  14: [786.5, 1577.1, 3231.6, 4355.5, 16091, 19805],
  15: [1011.8, 1907, 2914.1, 4963.6, 6273.9, 21267],
  16: [999.6, 2252, 3357, 4556, 7004.3, 8495.8],
  17: [1251.2, 2298, 3822, 5158.6, 6542, 9362],
  18: [1520.6, 2665.8, 3931, 5771, 7238, 8781],
  19: [418.8, 3052, 4420, 5877, 7975, 9590],
  20: [589.8, 1145.4, 4912.4, 6491, 8153, 10496],
  21: [633.1, 1235, 2388.6, 7090.6, 8843, 10679],
  22: [658.8, 1309.8, 2652.5, 4174.6, 9581, 11533],
  23: [650.9, 1414, 2830, 4507, 6298.7, 12363],
  24: [652.9, 1590.6, 2987, 4743, 6702, 8744.9],
  25: [717.3, 1509, 3248, 4940, 6990, 9220],
  26: [762.5, 1561.9, 2957, 5290, 7240, 9560],
  27: [760.4, 1648, 3232, 4950, 7670, 9840],
  28: [737.1, 1753, 3395, 5300, 7339, 10400],
  29: [745.5, 1957.9, 3555, 5536, 7700, 9900],
  30: [906.4, 1733.3, 3833, 5731, 7970, 10400],
  31: [578.8, 1979.3, 2963, 6180],
  32: [762, 1537.5, 3302.1, 4411, 9020],
  33: [947, 1798, 2735, 4837, 6043, 12310],
  34: [941, 2045, 2973.7, 4144, 6590, 7880],
  35: [1139.9, 2103, 3470, 4560, 5760, 8550],
  36: [1350.8, 2350.4, 3565, 5070, 6240, 7570],
  37: [403, 2633, 3860, 5080, 6850, 8140],
  38: [549.5, 1064.2, 4138, 5500, 6910, 8760],
  39: [600, 1180, 1980, 5847, 7430, 8970],
  40: [640.1, 1270, 2218, 3313, 7752, 9500],
  41: [652.1, 1380, 2416, 3700, 4877, 9847],
  42: [684.3, 1560, 2618, 4480, 5257, 6640.8],
  43: [702, 1470, 2850],
  44: [710.2, 1620, 2747],
  45: [719.7, 1740, 2997],
  46: [804.4, 1870, 3177],
  47: [731, 2070, 3361],
  48: [867.8, 1631.4, 3616],
  49: [558.3, 1820.7, 2704, 5210],
  50: [708.6, 1411.8, 2943, 3930.3, 7456],
  51: [834, 1594.9, 2440, 4260, 5400, 10400],
  52: [869.3, 1790, 2698, 3610, 5668, 6820],
  53: [1008.4, 1845.9, 3180],
  54: [1170.4, 2046.4, 3099.4],
  55: [375.7, 2234.3, 3400],
  56: [502.9, 965.2, 3600],
  57: [538.1, 1067, 1850.3, 4819, 5940],
  58: [534.4, 1050, 1949, 3547, 6325, 7490],
  59: [527, 1020, 2086, 3761, 5551],
  60: [533.1, 1040, 2130, 3900],
  61: [540, 1050, 2150, 3970],
  62: [544.5, 1070, 2260, 3990],
  63: [547.1, 1085, 2404, 4120],
  64: [593.4, 1170, 1990, 4250],
  65: [565.8, 1110, 2114, 3839],
  66: [573, 1130, 2200, 3990],
  67: [581, 1140, 2204, 4100],
  68: [589.3, 1150, 2194, 4120],
  69: [596.7, 1160, 2285, 4120],
  70: [603.4, 1174.8, 2417, 4203],
  71: [523.5, 1340, 2022.3, 4370, 6445],
  72: [658.5, 1440, 2250, 3216],
  73: [761, 1500],
  74: [770, 1700],
  75: [760, 1260, 2510, 3640],
  76: [840, 1600],
  77: [880, 1600],
  78: [870, 1791],
  79: [890.1, 1980],
  80: [1007.1, 1810, 3300],
  81: [589.4, 1971, 2878],
  82: [715.6, 1450.5, 3081.5, 4083, 6640],
  83: [703, 1610, 2466, 4370, 5400, 8520],
  84: [812.1],
  85: [920],
  86: [1037],
  87: [380],
  88: [509.3, 979],
  89: [499, 1170],
  90: [587, 1110, 1930, 2780],
  91: [568],
  92: [597.6, 1420],
  93: [604.5],
  94: [584.7],
  95: [578],
  96: [581],
  97: [601],
  98: [608],
  99: [619],
  100: [627],
  101: [635],
  102: [642],
};

const thermalData = {
  1: [-259.14, -252.87],
  2: [null, -268.93],
  3: [180.54, 1342],
  4: [1287, 2470],
  5: [2075, 4000],
  6: [3550, 4027],
  7: [-210.1, -195.79],
  8: [-218.3, -182.9],
  9: [-219.6, -188.12],
  10: [-248.59, -246.08],
  11: [97.72, 883],
  12: [650, 1090],
  13: [660.32, 2519],
  14: [1414, 2900],
  15: [44.2, 280.5],
  16: [115.21, 444.72],
  17: [-101.5, -34.04],
  18: [-189.3, -185.8],
  19: [63.38, 759],
  20: [842, 1484],
  21: [1541, 2830],
  22: [1668, 3287],
  23: [1910, 3407],
  24: [1907, 2671],
  25: [1246, 2061],
  26: [1538, 2861],
  27: [1495, 2927],
  28: [1455, 2913],
  29: [1084.62, 2562],
  30: [419.53, 907],
  31: [29.76, 2204],
  32: [938.3, 2820],
  33: [817, 614],
  34: [221, 685],
  35: [-7.3, 59],
  36: [-157.36, -153.22],
  37: [39.31, 688],
  38: [777, 1382],
  39: [1526, 3345],
  40: [1855, 4409],
  41: [2477, 4744],
  42: [2623, 4639],
  43: [2157, 4265],
  44: [2334, 4150],
  45: [1964, 3695],
  46: [1554.9, 2963],
  47: [961.78, 2162],
  48: [321.07, 767],
  49: [156.6, 2072],
  50: [231.93, 2602],
  51: [630.63, 1587],
  52: [449.51, 988],
  53: [113.7, 184.3],
  54: [-111.8, -108],
  55: [28.44, 671],
  56: [727, 1870],
  57: [919, 3464],
  58: [798, 3360],
  59: [931, 3290],
  60: [1021, 3100],
  61: [1100, 3000],
  62: [1072, 1803],
  63: [822, 1527],
  64: [1313, 3250],
  65: [1356, 3230],
  66: [1412, 2567],
  67: [1474, 2700],
  68: [1497, 2868],
  69: [1545, 1950],
  70: [819, 1196],
  71: [1663, 3402],
  72: [2233, 4603],
  73: [3017, 5458],
  74: [3422, 5555],
  75: [3186, 5596],
  76: [3033, 5012],
  77: [2466, 4428],
  78: [1768.3, 3825],
  79: [1064.18, 2856],
  80: [-38.83, 356.73],
  81: [304, 1473],
  82: [327.46, 1749],
  83: [271.3, 1564],
  84: [254, 962],
  85: [302, null],
  86: [-71, -61.7],
  87: [null, null],
  88: [700, 1737],
  89: [1050, 3200],
  90: [1750, 4820],
  91: [1572, 4000],
  92: [1135, 3927],
  93: [644, 4000],
  94: [640, 3230],
  95: [1176, 2011],
  96: [1345, 3110],
  97: [1050, null],
  98: [900, null],
  99: [860, null],
  100: [1527, null],
  101: [828, null],
  102: [828, null],
  103: [1627, null],
};

elements.forEach((element) => {
  const [melting = null, boiling = null] = thermalData[element.z] || [];
  element.melting = melting;
  element.boiling = boiling;
  element.ionizationEnergies = ionizationEnergyData[element.z] || (element.ionization === null ? [] : [element.ionization]);
  element.ionization = element.ionizationEnergies[0] ?? element.ionization;
  element.valence = valenceForElement(element);
});

const ranges = {
  electronegativity: [0.7, 3.98],
  ionization: [376, 2372],
  radius: [31, 348],
  metallicity: [0, 1],
  melting: [-260, 3422],
  boiling: [-269, 5596],
};

const palettes = {
  electronegativity: ["#e8f7f4", "#8ed8c9", "#2fa697", "#e3bd45", "#dd5a67"],
  ionization: ["#eef2ff", "#a8c2ff", "#5f86df", "#6a52ad", "#301f67"],
  radius: ["#eaf4ff", "#9fc9ed", "#5da4ac", "#e3b64b", "#d86b45"],
  metallicity: ["#edf4f2", "#9fcfbd", "#56a178", "#dcaa3a", "#dc6a33"],
  melting: ["#e9f6ff", "#8ecae6", "#43a9a3", "#f0b84d", "#d84f3f"],
  boiling: ["#eef3ff", "#8eb9f1", "#547fd0", "#8e4fa8", "#4a1f63"],
};

const visualRanges = {};
const trendChartGeometry = { width: 560, height: 190, left: 32, right: 8, top: 14, bottom: 16 };
const absoluteZeroCelsius = -273.15;
const ionizationLevelOptions = [1, 2, 3, 4, 5, 6];

const state = {
  mode: "category",
  selected: null,
  hovered: null,
  query: "",
  groupFilter: "all",
  showTrendGuides: true,
  trendView: "chart",
  ionizationLevel: 1,
  valenceView: "level",
  ionExceptionPreview: false,
  ionExceptionLocked: false,
};

const table = document.querySelector("#periodicTable");
const periodicPanel = document.querySelector(".periodic-panel");
const legend = document.querySelector("#legend");
const modeTitle = document.querySelector("#modeTitle");
const modeDescription = document.querySelector("#modeDescription");
const valenceBoard = document.querySelector("#valenceBoard");
const valenceModeButton = document.querySelector("[data-valence-mode]");
const searchInput = document.querySelector("#searchInput");
const groupSelect = document.querySelector("#groupSelect");
const trendGuideToggle = document.querySelector("#trendGuideToggle");
const canHoverPreview =
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function displayPosition(element) {
  if (element.category === "lanthanide") return { row: 8, col: element.z - 54 };
  if (element.category === "actinide") return { row: 9, col: element.z - 86 };
  return { row: element.period, col: element.group };
}

function inferValenceType(element, states) {
  if (!states.length || states.some((stateValue) => stateValue === "预测")) return "predicted";
  if (states.includes("0") && element.category === "noble") return "stable";
  const hasPositive = states.some((stateValue) => stateValue.startsWith("+"));
  const hasNegative = states.some((stateValue) => stateValue.startsWith("-"));
  if (hasPositive && hasNegative) return "mixed";
  if (hasNegative) return "negative";
  if (states.length > 1) return "variable";
  return "positive";
}

function valenceForElement(element) {
  const data = valenceData[element.symbol] || { states: [], main: "暂无" };
  const states = data.states || [];
  return {
    states,
    main: data.main || states[0] || "暂无",
    type: data.type || inferValenceType(element, states),
    note: data.note || "",
  };
}

function formatValenceList(element) {
  const states = element.valence?.states || [];
  if (!states.length) return "暂无常用值";
  return states.join(" / ");
}

function valenceBadgeText(element) {
  const main = element.valence?.main || "暂无";
  if (main === "预测") return "预测";
  return main.replaceAll(" / ", "/");
}

function numericValenceValues(values) {
  return values
    .flatMap((value) => String(value).match(/[+-]?\d+/g) || [])
    .map(Number)
    .filter((value) => Number.isFinite(value));
}

function valenceLevelValue(element) {
  const mainValues = numericValenceValues([element.valence?.main]);
  if (mainValues.length) return Math.max(...mainValues);
  const stateValues = numericValenceValues(element.valence?.states || []);
  if (stateValues.length) return Math.max(...stateValues);
  return null;
}

function valenceLevelColor(element) {
  const value = valenceLevelValue(element);
  if (value === null) return valenceTypeColors.predicted;

  const stops = valenceLevelStops;
  if (value <= stops[0].value) return stops[0].color;
  if (value >= stops[stops.length - 1].value) return stops[stops.length - 1].color;

  const upperIndex = stops.findIndex((stop) => value <= stop.value);
  const lower = stops[upperIndex - 1];
  const upper = stops[upperIndex];
  const t = (value - lower.value) / (upper.value - lower.value);
  return mixHex(lower.color, upper.color, t);
}

function ionizationLevelName(level = state.ionizationLevel) {
  return `第 ${level} 电离能`;
}

function ionizationValue(element, level = state.ionizationLevel) {
  return element.ionizationEnergies?.[level - 1] ?? null;
}

function formatIonizationValue(value) {
  if (value === null || Number.isNaN(value)) return "暂无常用值";
  const rounded = Math.abs(value) >= 100 ? Number(value.toFixed(1)).toLocaleString("zh-CN") : value.toLocaleString("zh-CN");
  return `${rounded} kJ/mol`;
}

function ionizationRange(level = state.ionizationLevel) {
  return visualRanges.ionization?.[level] || ranges.ionization;
}

function metallicity(element) {
  const periodScore = (element.period - 1) / 6;
  const groupScore = 1 - (Math.min(element.group, 18) - 1) / 17;
  const categoryBoost = {
    alkali: 1,
    alkaline: 0.86,
    lanthanide: 0.78,
    actinide: 0.78,
    transition: 0.62,
    post: 0.48,
    metalloid: 0.3,
    nonmetal: 0.08,
    halogen: 0.04,
    noble: 0,
  }[element.category];
  return Math.max(0, Math.min(1, categoryBoost * 0.62 + periodScore * 0.23 + groupScore * 0.15));
}

function elementBlock(element) {
  if (element.category === "lanthanide" || element.category === "actinide") return "f";
  if (element.symbol === "He" || element.group <= 2) return "s";
  if (element.group >= 13) return "p";
  if (element.group >= 11 && element.group <= 12) return "ds";
  return "d";
}

function buildVisualRanges() {
  ["electronegativity", "radius", "melting", "boiling"].forEach((mode) => {
    const values = elements
      .map((element) => element[mode])
      .filter((value) => value !== null)
      .sort((a, b) => a - b);
    const lower = values[Math.floor(values.length * 0.04)];
    const upper = values[Math.ceil(values.length * 0.96) - 1];
    visualRanges[mode] = [lower, upper];
  });
  visualRanges.ionization = {};
  ionizationLevelOptions.forEach((level) => {
    const values = elements
      .map((element) => ionizationValue(element, level))
      .filter((value) => value !== null)
      .sort((a, b) => a - b);
    if (!values.length) return;
    const lower = values[Math.floor(values.length * 0.04)];
    const upper = values[Math.ceil(values.length * 0.96) - 1];
    visualRanges.ionization[level] = [lower, upper];
  });
  visualRanges.metallicity = [0, 1];
}

function mixHex(a, b, t) {
  const left = a.match(/\w\w/g).map((part) => parseInt(part, 16));
  const right = b.match(/\w\w/g).map((part) => parseInt(part, 16));
  const mixed = left.map((value, index) => Math.round(value + (right[index] - value) * t));
  return `#${mixed.map((value) => value.toString(16).padStart(2, "0")).join("")}`;
}

function luminance(hex) {
  const [r, g, b] = hex
    .replace("#", "")
    .match(/\w\w/g)
    .map((part) => parseInt(part, 16) / 255)
    .map((channel) => (channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function applyTextContrast(card, background) {
  const isDark = background.startsWith("#") && luminance(background) < 0.24;
  card.style.setProperty("--cell-ink", isDark ? "#f8fbff" : "#19202a");
  card.style.setProperty("--cell-muted", isDark ? "rgba(248, 251, 255, 0.82)" : "rgba(25, 32, 42, 0.72)");
  card.style.setProperty("--badge-ink", isDark ? "#162033" : "rgba(25, 32, 42, 0.72)");
  card.style.setProperty("--badge-bg", isDark ? "rgba(255, 255, 255, 0.82)" : "rgba(255, 255, 255, 0.5)");
}

function heatColor(value, mode) {
  if (value === null || Number.isNaN(value)) return "#d1d5db";
  const [min, max] = mode === "ionization" ? ionizationRange() : visualRanges[mode] || ranges[mode];
  const raw = (value - min) / (max - min);
  const t = Math.max(0, Math.min(1, raw));
  const eased = Math.pow(t, 0.72);
  const palette = palettes[mode] || palettes.electronegativity;
  const scaled = eased * (palette.length - 1);
  const index = Math.min(palette.length - 2, Math.floor(scaled));
  return mixHex(palette[index], palette[index + 1], scaled - index);
}

function propertyValue(element, mode) {
  if (mode === "electronegativity") return element.electronegativity;
  if (mode === "ionization") return ionizationValue(element);
  if (mode === "radius") return element.radius;
  if (mode === "melting") return element.melting;
  if (mode === "boiling") return element.boiling;
  if (mode === "metallicity") return metallicity(element);
  return null;
}

function valueForMode(element) {
  return propertyValue(element, state.mode);
}

function formatValue(element) {
  const unit = modeMeta[state.mode].unit;
  const value = valueForMode(element);
  if (state.mode === "category") return categoryNames[element.category];
  if (state.mode === "phase") return phaseNames[element.phase];
  if (state.mode === "block") return blockNames[elementBlock(element)];
  if (state.mode === "valence") return `${formatValenceList(element)}（主价态 ${element.valence.main}）`;
  if (value === null) return "暂无";
  if (state.mode === "ionization") return formatIonizationValue(value);
  if (state.mode === "metallicity") return `${Math.round(value * 100)}%`;
  return `${value}${unit ? ` ${unit}` : ""}`;
}

function formatPeriod(element) {
  return periodNames[element.period] || `第 ${element.period} 周期`;
}

function formatGroup(element) {
  const group = groupNames[element.group] || `${element.group}`;
  return group === "0族" ? group : `第${group}族`;
}

function formatTemperature(value) {
  if (value === null || Number.isNaN(value)) return "暂无常用值";
  const rounded = Math.abs(value) >= 100 ? Math.round(value) : Number(value.toFixed(2));
  return `${rounded} °C`;
}

function colorForElement(element) {
  if (state.mode === "category") return categoryColors[element.category];
  if (state.mode === "phase") return phaseColors[element.phase];
  if (state.mode === "block") return blockColors[elementBlock(element)];
  if (state.mode === "valence") {
    if (state.valenceView === "type") return valenceTypeColors[element.valence.type] || valenceTypeColors.predicted;
    return valenceLevelColor(element);
  }
  const value = valueForMode(element);
  return heatColor(value, state.mode);
}

function matchesFilter(element) {
  const q = state.query.trim().toLowerCase();
  const textMatch =
    !q ||
    element.symbol.toLowerCase().includes(q) ||
    element.name.includes(q) ||
    String(element.z) === q;

  let groupMatch = true;
  if (state.groupFilter === "d") groupMatch = element.category === "transition";
  else if (state.groupFilter === "f") groupMatch = element.category === "lanthanide" || element.category === "actinide";
  else if (state.groupFilter !== "all") groupMatch = element.group === Number(state.groupFilter);

  return { textMatch, groupMatch };
}

function createLabels() {
  const groupLabelContainer = document.querySelector("#groupLabels");
  const periodLabels = document.querySelector("#periodLabels");

  groupLabelGuides.forEach((group) => {
    const label = document.createElement("div");
    label.className = group.span ? "group-label group-label--span" : "group-label";
    label.textContent = group.label;
    label.style.gridColumn = group.span ? `${group.col} / span ${group.span}` : group.col;
    groupLabelContainer.append(label);
  });

  [...periodNames.slice(1), "镧系", "锕系"].forEach((period, index) => {
    const label = document.createElement("div");
    label.className = index < 7 ? "period-label period-label--period" : "period-label period-label--series";
    label.textContent = period;
    label.style.gridRow = index + 1;
    periodLabels.append(label);
  });
}

function createPlaceholders() {
  [
    { text: "57-71 镧系", row: 6, col: 3 },
    { text: "89-103 锕系", row: 7, col: 3 },
  ].forEach((item) => {
    const placeholder = document.createElement("div");
    placeholder.className = "placeholder";
    placeholder.textContent = item.text;
    placeholder.style.gridRow = item.row;
    placeholder.style.gridColumn = item.col;
    table.append(placeholder);
  });
}

function createBlockGuides() {
  if (state.mode !== "block") return;

  blockGuides.forEach((guide) => {
    const blockGuide = document.createElement("div");
    blockGuide.className = `block-guide block-guide--${guide.side}`;
    blockGuide.style.gridRow = `${guide.row} / span ${guide.rows}`;
    blockGuide.style.gridColumn = `${guide.col} / span ${guide.cols}`;
    blockGuide.style.setProperty("--block-guide-color", blockColors[guide.key]);
    blockGuide.setAttribute("aria-hidden", "true");
    blockGuide.innerHTML = `<span class="block-guide-label">${guide.label}</span>`;
    table.append(blockGuide);
  });
}

function trendColor() {
  if (state.mode === "ionization") return heatColor(ionizationRange()[1], state.mode);
  if (state.mode === "electronegativity") return heatColor(ranges[state.mode][1], state.mode);
  if (state.mode === "radius" || state.mode === "metallicity") return heatColor(ranges[state.mode][1], state.mode);
  if (state.mode === "melting" || state.mode === "boiling") return heatColor(ranges[state.mode][1], state.mode);
  return "#147c72";
}

function trendGuideSvg(direction) {
  if (direction === "thermal") {
    return `
      <svg class="trend-guide-lines trend-guide-lines--thermal" viewBox="0 0 280 118" aria-hidden="true" focusable="false">
        <path class="trend-band" d="M38 84 C80 36 126 94 166 46 S232 38 248 72"></path>
        <circle class="trend-point" cx="76" cy="50" r="7"></circle>
        <circle class="trend-point" cx="170" cy="46" r="7"></circle>
        <circle class="trend-point" cx="222" cy="58" r="7"></circle>
      </svg>
    `;
  }

  if (direction === "down-left") {
    return `
      <svg class="trend-guide-lines" viewBox="0 0 280 118" aria-hidden="true" focusable="false">
        <defs>
          <marker id="trendArrowDownLeft" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto" markerUnits="strokeWidth">
            <path d="M0 0 L9 4.5 L0 9 Z"></path>
          </marker>
        </defs>
        <path class="trend-axis" d="M252 34 H226 H82" marker-end="url(#trendArrowDownLeft)"></path>
        <path class="trend-axis" d="M226 20 V34 V100" marker-end="url(#trendArrowDownLeft)"></path>
        <path class="trend-diagonal" d="M240 28 L226 34 L66 100" marker-end="url(#trendArrowDownLeft)"></path>
      </svg>
    `;
  }

  return `
    <svg class="trend-guide-lines" viewBox="0 0 280 118" aria-hidden="true" focusable="false">
      <defs>
        <marker id="trendArrowUpRight" markerWidth="9" markerHeight="9" refX="5" refY="4.5" orient="auto" markerUnits="strokeWidth">
          <path d="M0 0 L9 4.5 L0 9 Z"></path>
        </marker>
      </defs>
      <path class="trend-axis" d="M56 88 H224" marker-end="url(#trendArrowUpRight)"></path>
      <path class="trend-axis" d="M76 98 V28" marker-end="url(#trendArrowUpRight)"></path>
      <path class="trend-diagonal" d="M56 96 L218 24" marker-end="url(#trendArrowUpRight)"></path>
    </svg>
  `;
}

function chartRange(mode) {
  const values = elements.map((element) => propertyValue(element, mode)).filter((value) => value !== null);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const padding = Math.max((max - min) * 0.08, mode === "metallicity" ? 0.05 : 1);
  if (mode === "melting" || mode === "boiling") return [absoluteZeroCelsius, max + padding];
  if (mode === "electronegativity" || mode === "radius" || mode === "metallicity") return [0, max + padding];
  return [min - padding, max + padding];
}

function chartPoint(element, mode, range) {
  const value = propertyValue(element, mode);
  if (value === null) return null;
  const { width, height, left, right, top, bottom } = trendChartGeometry;
  const x = left + ((element.z - 1) / 117) * (width - left - right);
  const y = top + (1 - (value - range[0]) / (range[1] - range[0])) * (height - top - bottom);
  return { x, y, value };
}

function chartPoints(mode, range = chartRange(mode)) {
  return elements
    .map((element) => {
      const point = chartPoint(element, mode, range);
      return point ? { element, ...point } : null;
    })
    .filter(Boolean);
}

function nearestChartElement(mode, x) {
  const points = chartPoints(mode);
  return points.reduce((closest, point) => (Math.abs(point.x - x) < Math.abs(closest.x - x) ? point : closest), points[0]);
}

function chartXFromPointer(chart, event) {
  const { width, left, right } = trendChartGeometry;
  const matrix = chart.getScreenCTM?.();
  const svgPoint = chart.createSVGPoint?.();
  let x;

  if (matrix && svgPoint) {
    svgPoint.x = event.clientX;
    svgPoint.y = event.clientY;
    x = svgPoint.matrixTransform(matrix.inverse()).x;
  } else {
    const rect = chart.getBoundingClientRect();
    x = ((event.clientX - rect.left) / rect.width) * width;
  }

  return Math.min(Math.max(x, left), width - right);
}

function formatChartTick(value, mode) {
  if (mode === "metallicity") return `${Math.round(value * 100)}%`;
  if (mode === "electronegativity") return value.toFixed(1);
  if (mode === "melting" || mode === "boiling") return `${Math.round(value)}℃`;
  return `${Math.round(value)}`;
}

function formatChartValue(value, mode) {
  if (value === null) return "暂无数据";
  if (mode === "metallicity") return `${Math.round(value * 100)}%`;
  if (mode === "electronegativity") return value.toFixed(2);
  if (mode === "melting" || mode === "boiling") return formatTemperature(value);
  return `${Math.round(value)} ${modeMeta[mode].unit}`;
}

function createTrendChart() {
  const mode = state.mode;
  const range = chartRange(mode);
  const { width, height, left, right, top, bottom } = trendChartGeometry;
  const plotRight = width - right;
  const plotBottom = height - bottom;
  const gridValues = [range[1], (range[0] + range[1]) / 2, range[0]];
  const points = chartPoints(mode, range);
  const paths = [];
  let currentPath = "";

  elements.forEach((element) => {
    const point = chartPoint(element, mode, range);
    if (!point) {
      if (currentPath) paths.push(currentPath);
      currentPath = "";
      return;
    }
    currentPath += `${currentPath ? " L" : "M"} ${point.x.toFixed(1)} ${point.y.toFixed(1)}`;
  });
  if (currentPath) paths.push(currentPath);

  const pathMarkup = paths.map((path) => `<path class="trend-chart-line" d="${path}"></path>`).join("");
  const pointMarkup = points
    .map(({ element, x, y, value }) => {
      const label = `${element.symbol} ${element.name} ${formatPeriod(element)} ${formatGroup(element)} ${formatChartValue(value, mode)}`;
      return `<circle class="trend-chart-point" data-z="${element.z}" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.1"><title>${label}</title></circle>`;
    })
    .join("");
  const gridMarkup = gridValues
    .map((value) => {
      const y = top + (1 - (value - range[0]) / (range[1] - range[0])) * (height - top - bottom);
      return `
        <line class="trend-chart-gridline" x1="${left}" x2="${plotRight}" y1="${y.toFixed(1)}" y2="${y.toFixed(1)}"></line>
        <text class="trend-chart-tick" x="${left - 7}" y="${(y + 3).toFixed(1)}">${formatChartTick(value, mode)}</text>
      `;
    })
    .join("");

  return `
    <div class="trend-chart-wrap" data-chart-mode="${mode}">
      <svg class="trend-chart" viewBox="0 0 ${width} ${height}" aria-hidden="true" focusable="false">
        ${gridMarkup}
        <line class="trend-chart-axis" x1="${left}" x2="${plotRight}" y1="${plotBottom}" y2="${plotBottom}"></line>
        <line class="trend-chart-axis" x1="${left}" x2="${left}" y1="${top}" y2="${plotBottom}"></line>
        ${pathMarkup}
        ${pointMarkup}
        <g class="trend-chart-marker">
          <line class="trend-chart-marker-line" x1="0" x2="0" y1="${top}" y2="${plotBottom}"></line>
          <circle class="trend-chart-marker-dot" r="5.2"></circle>
        </g>
        <rect class="trend-chart-hit-area" x="${left}" y="${top}" width="${plotRight - left}" height="${plotBottom - top}"></rect>
      </svg>
      <div class="trend-chart-note">
        <span class="trend-chart-active-symbol"></span>
        <span class="trend-chart-active-value"></span>
      </div>
    </div>
  `;
}

function createTrendMap(guide) {
  if (guide.direction === "thermal") {
    return `
      <div class="trend-map-view trend-factor-view">
        <div class="trend-factor-grid">
          ${guide.factors.map((factor) => `<span>${factor}</span>`).join("")}
        </div>
        <p class="trend-factor-note">${guide.factorNote}</p>
      </div>
    `;
  }

  const exceptionNote =
    state.mode === "ionization"
      ? `<span class="trend-guide-label trend-guide-label--exception">例外：IIA &gt; IIIA，VA &gt; VIA</span>`
      : "";

  return `
    <div class="trend-map-view">
      ${trendGuideSvg(guide.direction)}
      <span class="trend-guide-label trend-guide-label--horizontal">${guide.horizontal}</span>
      <span class="trend-guide-label trend-guide-label--vertical">${guide.vertical}</span>
      ${exceptionNote}
      <span class="trend-guide-corner">${guide.corner}</span>
    </div>
  `;
}

function createTrendViewToggle(guide) {
  if (guide.direction === "thermal") return "";
  const isIonizationPlaceholder = state.mode === "ionization" && state.ionizationLevel !== 1;

  return `
    <div class="trend-view-toggle${isIonizationPlaceholder ? " trend-view-toggle--placeholder" : ""}" role="group" aria-label="辅助图切换">
      <button class="trend-view-button ${state.trendView === "map" ? "active" : ""}" data-trend-view="map" type="button">方向</button>
      <button class="trend-view-button ${state.trendView === "chart" ? "active" : ""}" data-trend-view="chart" type="button">曲线</button>
    </div>
  `;
}

function createIonizationLevelToggle() {
  if (state.mode !== "ionization") return "";

  return `
    <div class="ionization-level-toggle" role="group" aria-label="电离能级数切换">
      ${ionizationLevelOptions
        .map(
          (level) => `
            <button class="ionization-level-button ${state.ionizationLevel === level ? "active" : ""}" data-ionization-level="${level}" type="button">
              I${level}
            </button>
          `,
        )
        .join("")}
    </div>
  `;
}

function createTrendGuideCard(guide) {
  const card = document.createElement("div");
  card.className = `trend-guide-card trend-guide-card--${guide.direction}${state.mode === "ionization" ? " trend-guide-card--ionization" : ""}`;
  card.style.setProperty("--trend-color", trendColor());
  card.style.gridRow = "1 / span 3";
  card.style.gridColumn = "3 / span 10";
  card.setAttribute("aria-label", `${guide.title}辅助图`);
  card.innerHTML = `
    <div class="trend-guide-head">
      <div class="trend-guide-title">${state.mode === "ionization" ? `${ionizationLevelName()}对比` : guide.title}</div>
      ${createIonizationLevelToggle()}
      ${createTrendViewToggle(guide)}
    </div>
    ${guide.direction === "thermal" || state.trendView === "chart" || state.mode === "ionization" && state.ionizationLevel !== 1 ? createTrendChart() : createTrendMap(guide)}
  `;
  card.querySelectorAll("[data-trend-view]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.trendView = button.dataset.trendView;
      renderTable();
    });
  });
  card.querySelectorAll("[data-ionization-level]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.ionizationLevel = Number(button.dataset.ionizationLevel);
      if (state.ionizationLevel !== 1) {
        state.trendView = "chart";
        clearIonExceptionFocus();
      }
      updateModeText();
      renderLegend();
      renderTable();
      updateDetail();
    });
  });
  table.append(card);
  attachTrendChartHover(card);
  updateTrendMarker();
}

function createThermalGuides(guide) {
  createTrendGuideCard(guide);
}

function createTrendGuides() {
  if (!state.showTrendGuides) return;
  const guide = trendGuideMeta[state.mode];
  if (!guide) return;
  if (guide.direction === "thermal") {
    createThermalGuides(guide);
    return;
  }
  createTrendGuideCard(guide);
}

function attachTrendChartHover(scope) {
  const chart = scope.querySelector(".trend-chart");
  const hitArea = scope.querySelector(".trend-chart-hit-area");
  const chartWrap = scope.querySelector(".trend-chart-wrap");
  if (!chart || !chartWrap) return;

  const chartElementFromPointer = (event) => {
    const x = chartXFromPointer(chart, event);
    const point = nearestChartElement(chartWrap.dataset.chartMode, x);
    return point?.element || null;
  };

  const updateHover = (event) => {
    const element = chartElementFromPointer(event);
    if (!element) return;
    if (state.selected) {
      updateTrendMarker(element, true);
      return;
    }
    previewTrendElement(element);
  };

  const updateSelection = (event) => {
    event.stopPropagation();
    const element = chartElementFromPointer(event);
    if (element) selectElement(element);
  };

  (hitArea || chart).addEventListener("pointermove", updateHover);
  (hitArea || chart).addEventListener("pointerleave", clearTrendPreview);
  (hitArea || chart).addEventListener("click", updateSelection);
}

function updateTrendMarker(element = activeElement(), isHover = false) {
  const chartWrap = table.querySelector(".trend-chart-wrap");
  if (!chartWrap) return;
  const mode = chartWrap.dataset.chartMode;
  const marker = chartWrap.querySelector(".trend-chart-marker");
  const markerLine = chartWrap.querySelector(".trend-chart-marker-line");
  const symbol = chartWrap.querySelector(".trend-chart-active-symbol");
  const valueLabel = chartWrap.querySelector(".trend-chart-active-value");
  const point = chartPoint(element, mode, chartRange(mode));

  symbol.textContent = element.symbol;
  if (!point) {
    marker.classList.add("hidden");
    chartWrap.classList.remove("is-hovering");
    const metricName = mode === "ionization" ? ionizationLevelName() : modeMeta[mode].title.split("：")[0];
    valueLabel.textContent = `${metricName}：暂无数据`;
    return;
  }

  marker.classList.remove("hidden");
  marker.setAttribute("transform", `translate(${point.x.toFixed(1)} ${point.y.toFixed(1)})`);
  markerLine.setAttribute("y1", (trendChartGeometry.top - point.y).toFixed(1));
  markerLine.setAttribute("y2", (trendChartGeometry.height - trendChartGeometry.bottom - point.y).toFixed(1));
  chartWrap.classList.toggle("is-hovering", isHover);
  valueLabel.textContent = `${formatChartValue(point.value, mode)} · ${formatPeriod(element)} · ${formatGroup(element)}`;
}

function ionizationExceptionPairs() {
  return [
    { leftGroup: 2, rightGroup: 13, className: "wide" },
    { leftGroup: 15, rightGroup: 16, className: "short" },
  ].flatMap((rule) =>
    [2, 3, 4, 5, 6].flatMap((period) => {
      const left = elements.find((element) => element.period === period && element.group === rule.leftGroup);
      const right = elements.find((element) => element.period === period && element.group === rule.rightGroup);
      if (!left || !right || left.ionization === null || right.ionization === null || left.ionization <= right.ionization) return [];
      return [{ ...rule, period, left, right }];
    }),
  );
}

function canShowIonizationExceptions() {
  return state.showTrendGuides && state.mode === "ionization" && state.ionizationLevel === 1;
}

function shouldFocusIonizationExceptions() {
  return canShowIonizationExceptions() && (state.ionExceptionPreview || state.ionExceptionLocked);
}

function syncIonExceptionFocus() {
  const isActive = shouldFocusIonizationExceptions();
  table.classList.toggle("ion-exception-focus", isActive);
  table.querySelector(".ion-exception-button")?.classList.toggle("active", isActive);
}

function createIonizationExceptionButton(pairs) {
  if (!canShowIonizationExceptions() || !pairs.length) return;

  const isActive = shouldFocusIonizationExceptions();
  const button = document.createElement("button");
  button.className = `ion-exception-button${isActive ? " active" : ""}`;
  button.type = "button";
  button.style.gridRow = 1;
  button.style.gridColumn = "13 / span 5";
  button.style.setProperty("--trend-color", trendColor());
  button.setAttribute("aria-pressed", String(state.ionExceptionLocked));
  button.innerHTML = `
    <strong>例外记忆</strong>
    <span>IIA &gt; IIIA，VA &gt; VIA</span>
  `;
  button.addEventListener("pointerenter", () => {
    state.ionExceptionPreview = true;
    syncIonExceptionFocus();
    applyFilters();
  });
  button.addEventListener("pointerleave", () => {
    state.ionExceptionPreview = false;
    syncIonExceptionFocus();
    applyFilters();
  });
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    state.ionExceptionLocked = !state.ionExceptionLocked;
    state.ionExceptionPreview = false;
    syncIonExceptionFocus();
    applyFilters();
  });
  table.append(button);
}

function createIonizationExceptionFocus(pairs) {
  if (!pairs.length) return;

  const directionCue = document.createElement("div");
  directionCue.className = "ion-exception-direction-cue";
  directionCue.style.gridRow = 1;
  directionCue.style.gridColumn = "2 / span 15";
  directionCue.style.setProperty("--trend-color", trendColor());
  directionCue.setAttribute("aria-hidden", "true");
  directionCue.innerHTML = `
    <svg viewBox="0 0 1500 70" preserveAspectRatio="none" focusable="false">
      <defs>
        <marker id="ionExceptionArrowLeft" markerWidth="7" markerHeight="7" refX="1.6" refY="3.5" orient="auto" markerUnits="strokeWidth">
          <path d="M0 0 L7 3.5 L0 7 Z"></path>
        </marker>
      </defs>
      <path d="M1150 44 C900 30 440 30 50 44" marker-end="url(#ionExceptionArrowLeft)"></path>
      <path d="M1450 54 C1420 48 1380 48 1350 54" marker-end="url(#ionExceptionArrowLeft)"></path>
    </svg>
  `;
  table.append(directionCue);

  pairs.forEach((pair) => {
    const relation = document.createElement("div");
    const start = Math.min(pair.left.group, pair.right.group);
    const end = Math.max(pair.left.group, pair.right.group) + 1;
    relation.className = `ion-exception-relation ion-exception-relation--${pair.className}`;
    relation.style.gridRow = pair.period;
    relation.style.gridColumn = `${start} / ${end}`;
    relation.style.setProperty("--trend-color", trendColor());
    relation.setAttribute("aria-hidden", "true");
    relation.innerHTML = `
      <span class="ion-exception-card ion-exception-card--higher">
        <b>${pair.left.symbol}</b>
        <small>${Math.round(pair.left.ionization)}</small>
      </span>
      <span class="ion-exception-arrow">&gt;</span>
      <span class="ion-exception-card ion-exception-card--lower">
        <b>${pair.right.symbol}</b>
        <small>${Math.round(pair.right.ionization)}</small>
      </span>
    `;
    table.append(relation);
  });
}

function createValenceViewToggle() {
  if (state.mode !== "valence") return;

  const panel = document.createElement("div");
  panel.className = "valence-view-card";
  panel.style.gridRow = 1;
  panel.style.gridColumn = "3 / span 10";
  panel.setAttribute("aria-label", "价态着色方式");
  panel.innerHTML = `
    <div>
      <strong>价态颜色</strong>
      <span>${state.valenceView === "level" ? "暖色越深，最高主价态越高" : "按价态类型分组"}</span>
    </div>
    <div class="valence-view-toggle" role="group" aria-label="价态着色切换">
      <button class="valence-view-button ${state.valenceView === "level" ? "active" : ""}" data-valence-view="level" type="button">高低</button>
      <button class="valence-view-button ${state.valenceView === "type" ? "active" : ""}" data-valence-view="type" type="button">类型</button>
    </div>
  `;
  panel.querySelectorAll("[data-valence-view]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      state.valenceView = button.dataset.valenceView;
      updateModeText();
      renderLegend();
      renderTable();
      updateDetail();
    });
  });
  table.append(panel);
}

function renderTable() {
  table.innerHTML = "";
  const ionPairs = canShowIonizationExceptions() ? ionizationExceptionPairs() : [];
  const shouldFocusIonPairs = shouldFocusIonizationExceptions();
  const ionPairRoles = new Map(
    canShowIonizationExceptions() ? ionPairs.flatMap((pair) => [
      [pair.left.z, "higher"],
      [pair.right.z, "lower"],
    ]) : [],
  );
  table.classList.toggle("ion-exception-focus", shouldFocusIonPairs);
  createBlockGuides();
  createPlaceholders();
  createTrendGuides();
  createValenceViewToggle();
  createIonizationExceptionButton(ionPairs);
  createIonizationExceptionFocus(ionPairs);

  elements.forEach((element) => {
    const { row, col } = displayPosition(element);
    const card = document.createElement("button");
    card.className = "element";
    const ionExceptionRole = ionPairRoles.get(element.z);
    if (ionExceptionRole) {
      card.classList.add("ion-exception-cell", `ion-exception-cell--${ionExceptionRole}`);
      card.dataset.exceptionRole = ionExceptionRole === "higher" ? "较高" : "较低";
    }
    card.type = "button";
    card.dataset.z = element.z;
    card.style.gridRow = row;
    card.style.gridColumn = col;
    const color = colorForElement(element);
    card.style.setProperty("--cell-bg", color);
    if (ionExceptionRole) card.style.setProperty("--trend-color", trendColor());
    applyTextContrast(card, color);
    card.setAttribute(
      "aria-label",
      `${element.name}，${element.symbol}，原子序数 ${element.z}，${formatPeriod(element)}，${formatGroup(element)}，${formatValue(element)}`,
    );
    card.innerHTML = `
      <span class="number">${element.z}</span>
      <span class="symbol">${element.symbol}</span>
      <span class="name">${element.name}</span>
      <span class="value-badge">${badgeText(element)}</span>
    `;
    card.addEventListener("pointerenter", () => previewElement(element));
    card.addEventListener("focus", () => previewElement(element));
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      selectElement(element);
    });
    table.append(card);
  });

  applyFilters();
  updateTrendMarker();
}

function badgeText(element) {
  if (state.mode === "category") return categoryNames[element.category].slice(0, 2);
  if (state.mode === "phase") return phaseNames[element.phase];
  if (state.mode === "block") return blockNames[elementBlock(element)].replace(" 区", "");
  if (state.mode === "valence") return valenceBadgeText(element);
  const value = valueForMode(element);
  if (value === null) return "—";
  if (state.mode === "ionization") return Math.round(value).toLocaleString("zh-CN");
  if (state.mode === "metallicity") return Math.round(value * 100);
  if (state.mode === "melting" || state.mode === "boiling") return Math.round(value);
  return value;
}

function selectElement(element) {
  state.selected = element;
  state.hovered = element;
  updateDetail();
  applyFilters();
}

function previewElement(element) {
  if (!canHoverPreview || state.selected) return;
  state.hovered = element;
  updateDetail();
  applyFilters();
}

function previewTrendElement(element) {
  state.hovered = element;
  updateDetail();
  applyFilters();
  updateTrendMarker(element, true);
}

function clearTrendPreview() {
  state.hovered = state.selected;
  updateDetail();
  applyFilters();
  updateTrendMarker();
}

function clearIonExceptionFocus() {
  state.ionExceptionPreview = false;
  state.ionExceptionLocked = false;
}

function cancelSelection() {
  state.selected = null;
  state.hovered = null;
  clearIonExceptionFocus();
  updateDetail();
  applyFilters();
}

function activeElement() {
  return state.hovered || state.selected || elements[0];
}

function updateDetail() {
  const element = activeElement();
  const detailColor = colorForElement(element);
  const detailCard = document.querySelector("#detailAtomicCard");
  const detailCardIsDark = detailColor.startsWith("#") && luminance(detailColor) < 0.24;

  detailCard.style.setProperty("--detail-card-bg", detailColor);
  detailCard.style.setProperty("--detail-card-ink", detailCardIsDark ? "#f8fbff" : "#19202a");
  detailCard.style.setProperty("--detail-card-muted", detailCardIsDark ? "rgba(248, 251, 255, 0.78)" : "rgba(25, 32, 42, 0.68)");

  document.querySelector("#detailNumber").textContent = element.z;
  document.querySelector("#detailTileSymbol").textContent = element.symbol;
  document.querySelector("#detailTileName").textContent = element.name;
  document.querySelector("#detailSymbol").textContent = element.symbol;
  document.querySelector("#detailName").textContent = element.name;
  document.querySelector("#detailPeriod").textContent = formatPeriod(element);
  document.querySelector("#detailGroup").textContent = formatGroup(element);
  document.querySelector("#detailCategory").textContent = `${categoryNames[element.category]} · ${formatPeriod(element)} · ${formatGroup(element)}`;
  document.querySelector("#detailSummary").textContent = element.summary;
  document.querySelector("#detailEN").textContent = element.electronegativity === null ? "暂无常用值" : element.electronegativity.toFixed(2);
  document.querySelector("#detailIELabel").textContent = ionizationLevelName();
  document.querySelector("#detailIE").textContent = formatIonizationValue(ionizationValue(element));
  document.querySelector("#detailRadius").textContent = element.radius === null ? "暂无常用值" : `${element.radius} pm`;
  document.querySelector("#detailValence").textContent = element.valence.note
    ? `${formatValenceList(element)} · ${element.valence.note}`
    : formatValenceList(element);
  document.querySelector("#detailMainValence").textContent = element.valence.main;
  document.querySelector("#detailMelting").textContent = formatTemperature(element.melting);
  document.querySelector("#detailBoiling").textContent = formatTemperature(element.boiling);
  document.querySelector("#detailPhase").textContent = phaseNames[element.phase];

  const enHeight = element.electronegativity ? ((element.electronegativity - 0.7) / (3.98 - 0.7)) * 82 + 8 : 8;
  const currentIE = ionizationValue(element);
  const ieRange = ionizationRange();
  const ieRatio = currentIE ? Math.max(0, Math.min(1, (currentIE - ieRange[0]) / (ieRange[1] - ieRange[0]))) : 0;
  const ieHeight = ieRatio * 82 + 8;
  const radiusHeight = element.radius ? ((element.radius - 31) / (348 - 31)) * 82 + 8 : 8;
  document.querySelector("#barEN").style.height = `${enHeight}px`;
  document.querySelector("#barIE").style.height = `${ieHeight}px`;
  document.querySelector("#barRadius").style.height = `${radiusHeight}px`;
  updateTrendMarker();
}

function applyFilters() {
  const active = activeElement();
  const isIonExceptionFocus = shouldFocusIonizationExceptions();
  document.querySelectorAll(".element").forEach((card) => {
    const element = elements.find((item) => item.z === Number(card.dataset.z));
    const { textMatch, groupMatch } = matchesFilter(element);
    const keepVisibleForIonFocus = isIonExceptionFocus && card.classList.contains("ion-exception-cell");
    card.classList.toggle("selected", Boolean(state.selected && state.selected.z === element.z));
    card.classList.toggle("previewed", Boolean(state.hovered && active.z === element.z && state.selected?.z !== element.z));
    card.classList.toggle("hidden-by-search", !textMatch && !keepVisibleForIonFocus);
    card.classList.toggle("dimmed", textMatch && !groupMatch && !keepVisibleForIonFocus);
  });
}

function updateModeText() {
  modeTitle.textContent = state.mode === "ionization" ? `${ionizationLevelName()}：越深越难继续失电子` : modeMeta[state.mode].title;
  if (state.mode === "ionization") {
    modeDescription.textContent =
      state.ionizationLevel === 1
        ? "第 1 电离能仍保留周期律方向图和例外记忆；切到更高级数时，图表会改成曲线对比，更适合观察突然跃迁。"
        : `${ionizationLevelName()}表示从 ${state.ionizationLevel - 1}+ 离子继续移去一个电子所需的能量。若某元素没有该级数据，格内显示为“—”。`;
    return;
  }
  if (state.mode === "valence" && state.valenceView === "type") {
    modeDescription.textContent = "元素格内显示高中常见化合价。当前按固定正价、可变正价、正负皆有、常见负价和稳定零价分组着色。";
    return;
  }
  modeDescription.textContent = modeMeta[state.mode].description;
}

function updateMode(mode) {
  state.mode = mode;
  clearIonExceptionFocus();
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  updateModeText();
  renderLegend();
  renderTable();
}

function renderLegend() {
  legend.innerHTML = "";
  if (state.mode === "category") {
    Object.entries(categoryColors).forEach(([key, color]) => addLegendItem(color, categoryNames[key]));
    return;
  }
  if (state.mode === "phase") {
    Object.entries(phaseColors).forEach(([key, color]) => addLegendItem(color, phaseNames[key]));
    return;
  }
  if (state.mode === "block") {
    Object.entries(blockColors).forEach(([key, color]) => addLegendItem(color, blockNames[key]));
    return;
  }
  if (state.mode === "valence") {
    if (state.valenceView === "type") {
      Object.entries(valenceTypeColors).forEach(([key, color]) => addLegendItem(color, valenceTypeNames[key]));
      return;
    }
    valenceLevelStops.forEach((stop) => addLegendItem(stop.color, stop.label));
    return;
  }
  const items = state.mode === "radius" ? ["小", "中", "大"] : ["低", "中", "高"];
  items.forEach((label, index) => {
    const range = state.mode === "ionization" ? ionizationRange() : visualRanges[state.mode] || ranges[state.mode];
    const value = range[0] + (range[1] - range[0]) * (index / 2);
    addLegendItem(heatColor(value, state.mode), label);
  });
}

function addLegendItem(color, text) {
  const item = document.createElement("span");
  item.className = "legend-item";
  item.innerHTML = `<span class="swatch" style="--swatch:${color}"></span>${text}`;
  legend.append(item);
}

function renderValenceBoard() {
  if (!valenceBoard) return;
  valenceBoard.innerHTML = valenceQuickGuide
    .map(
      (section) => `
        <section class="valence-section">
          <h3>${section.title}</h3>
          <div class="valence-chip-grid">
            ${section.items
              .map((item) => {
                const tone = item.tone || "positive";
                const color = valenceTypeColors[tone] || valenceTypeColors.positive;
                const symbolAttribute = item.symbol ? ` data-symbol="${item.symbol}"` : "";
                const tag = item.symbol ? "button" : "div";
                const typeAttribute = item.symbol ? ` type="button"` : "";
                const staticClass = item.symbol ? "" : " valence-chip--static";
                return `
                  <${tag} class="valence-chip${staticClass}"${typeAttribute}${symbolAttribute} style="--valence-chip:${color}">
                    <span>${item.label}</span>
                    <b>${item.value}</b>
                  </${tag}>
                `;
              })
              .join("")}
          </div>
        </section>
      `,
    )
    .join("");

  valenceBoard.querySelectorAll("[data-symbol]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const element = elements.find((item) => item.symbol === chip.dataset.symbol);
      if (!element) return;
      updateMode("valence");
      selectElement(element);
      document.querySelector(".workspace")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => updateMode(button.dataset.mode));
});

valenceModeButton?.addEventListener("click", () => {
  updateMode("valence");
  document.querySelector(".workspace")?.scrollIntoView({ behavior: "smooth", block: "start" });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  applyFilters();
});

groupSelect.addEventListener("change", (event) => {
  state.groupFilter = event.target.value;
  applyFilters();
});

trendGuideToggle.addEventListener("change", (event) => {
  state.showTrendGuides = event.target.checked;
  clearIonExceptionFocus();
  renderTable();
});

periodicPanel.addEventListener("click", (event) => {
  if (!event.target.closest(".element")) {
    cancelSelection();
  }
});

const requestedMode =
  typeof window === "undefined"
    ? ""
    : new URLSearchParams(window.location.search).get("mode") || window.location.hash.replace("#", "");

buildVisualRanges();
createLabels();
renderValenceBoard();
if (modeMeta[requestedMode]) {
  updateMode(requestedMode);
} else {
  renderLegend();
  renderTable();
}
updateDetail();
