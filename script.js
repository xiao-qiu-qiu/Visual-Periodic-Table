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

const periodNames = ["", "第一周期", "第二周期", "第三周期", "第四周期", "第五周期", "第六周期", "第七周期"];

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
    title: "第一电离能：越黑越难失去最外层电子",
    description: "总体规律是同周期从左到右增大、同主族从上到下减小。稀有气体很高，碱金属很低，个别元素会因半充满或全充满结构出现小波动。",
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

const state = {
  mode: "category",
  selected: null,
  hovered: null,
  query: "",
  groupFilter: "all",
};

const table = document.querySelector("#periodicTable");
const periodicPanel = document.querySelector(".periodic-panel");
const legend = document.querySelector("#legend");
const modeTitle = document.querySelector("#modeTitle");
const modeDescription = document.querySelector("#modeDescription");
const searchInput = document.querySelector("#searchInput");
const groupSelect = document.querySelector("#groupSelect");
const canHoverPreview =
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function displayPosition(element) {
  if (element.category === "lanthanide") return { row: 8, col: element.z - 54 };
  if (element.category === "actinide") return { row: 9, col: element.z - 86 };
  return { row: element.period, col: element.group };
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
  ["electronegativity", "ionization", "radius", "melting", "boiling"].forEach((mode) => {
    const values = elements
      .map((element) => element[mode])
      .filter((value) => value !== null)
      .sort((a, b) => a - b);
    const lower = values[Math.floor(values.length * 0.04)];
    const upper = values[Math.ceil(values.length * 0.96) - 1];
    visualRanges[mode] = [lower, upper];
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
  const [min, max] = visualRanges[mode] || ranges[mode];
  const raw = (value - min) / (max - min);
  const t = Math.max(0, Math.min(1, raw));
  const eased = Math.pow(t, 0.72);
  const palette = palettes[mode] || palettes.electronegativity;
  const scaled = eased * (palette.length - 1);
  const index = Math.min(palette.length - 2, Math.floor(scaled));
  return mixHex(palette[index], palette[index + 1], scaled - index);
}

function valueForMode(element) {
  if (state.mode === "electronegativity") return element.electronegativity;
  if (state.mode === "ionization") return element.ionization;
  if (state.mode === "radius") return element.radius;
  if (state.mode === "melting") return element.melting;
  if (state.mode === "boiling") return element.boiling;
  if (state.mode === "metallicity") return metallicity(element);
  return null;
}

function formatValue(element) {
  const unit = modeMeta[state.mode].unit;
  const value = valueForMode(element);
  if (state.mode === "category") return categoryNames[element.category];
  if (state.mode === "phase") return phaseNames[element.phase];
  if (state.mode === "block") return blockNames[elementBlock(element)];
  if (value === null) return "暂无";
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

function renderTable() {
  table.innerHTML = "";
  createBlockGuides();
  createPlaceholders();

  elements.forEach((element) => {
    const { row, col } = displayPosition(element);
    const card = document.createElement("button");
    card.className = "element";
    card.type = "button";
    card.dataset.z = element.z;
    card.style.gridRow = row;
    card.style.gridColumn = col;
    const color = colorForElement(element);
    card.style.setProperty("--cell-bg", color);
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
}

function badgeText(element) {
  if (state.mode === "category") return categoryNames[element.category].slice(0, 2);
  if (state.mode === "phase") return phaseNames[element.phase];
  if (state.mode === "block") return blockNames[elementBlock(element)].replace(" 区", "");
  const value = valueForMode(element);
  if (value === null) return "—";
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

function cancelSelection() {
  state.selected = null;
  state.hovered = null;
  updateDetail();
  applyFilters();
}

function activeElement() {
  return state.selected || state.hovered || elements[0];
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
  document.querySelector("#detailIE").textContent = element.ionization === null ? "暂无常用值" : `${element.ionization} kJ/mol`;
  document.querySelector("#detailRadius").textContent = element.radius === null ? "暂无常用值" : `${element.radius} pm`;
  document.querySelector("#detailMelting").textContent = formatTemperature(element.melting);
  document.querySelector("#detailBoiling").textContent = formatTemperature(element.boiling);
  document.querySelector("#detailPhase").textContent = phaseNames[element.phase];

  const enHeight = element.electronegativity ? ((element.electronegativity - 0.7) / (3.98 - 0.7)) * 82 + 8 : 8;
  const ieHeight = element.ionization ? ((element.ionization - 376) / (2372 - 376)) * 82 + 8 : 8;
  const radiusHeight = element.radius ? ((element.radius - 31) / (348 - 31)) * 82 + 8 : 8;
  document.querySelector("#barEN").style.height = `${enHeight}px`;
  document.querySelector("#barIE").style.height = `${ieHeight}px`;
  document.querySelector("#barRadius").style.height = `${radiusHeight}px`;
}

function applyFilters() {
  const active = activeElement();
  document.querySelectorAll(".element").forEach((card) => {
    const element = elements.find((item) => item.z === Number(card.dataset.z));
    const { textMatch, groupMatch } = matchesFilter(element);
    card.classList.toggle("selected", Boolean(state.selected && state.selected.z === element.z));
    card.classList.toggle("previewed", !state.selected && active.z === element.z);
    card.classList.toggle("hidden-by-search", !textMatch);
    card.classList.toggle("dimmed", textMatch && !groupMatch);
  });
}

function updateMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  modeTitle.textContent = modeMeta[mode].title;
  modeDescription.textContent = modeMeta[mode].description;
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
  const items = state.mode === "radius" ? ["小", "中", "大"] : ["低", "中", "高"];
  items.forEach((label, index) => {
    const range = visualRanges[state.mode] || ranges[state.mode];
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

document.querySelectorAll(".mode-button").forEach((button) => {
  button.addEventListener("click", () => updateMode(button.dataset.mode));
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  applyFilters();
});

groupSelect.addEventListener("change", (event) => {
  state.groupFilter = event.target.value;
  applyFilters();
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
if (modeMeta[requestedMode]) {
  updateMode(requestedMode);
} else {
  renderLegend();
  renderTable();
}
updateDetail();
