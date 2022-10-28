import { unref, isRef } from "vue";
import { ElTabs, ElRadio, ElTabPane, ElSelect, ElInputNumber, ElCheckboxGroup, ElCheckbox } from "element-plus";
import { fromPairs, uniq, isArray } from "lodash";
const CRON_ATTR_NAMES = [
  "",
  "",
  "to",
  "interval",
  "next",
  "last",
  "float",
  "",
  "",
  "the"
];
const CRON_REGS = [
  /^\?$/,
  /^\*$/,
  /^(\d+)-(\d+)$/,
  /^(\d+)\/(\d+)$/,
  /^(\d+)W$/,
  /^(\d+)L$/,
  /^(\d+)#(\d+)$/,
  /^\s+$/,
  /^L$/,
  /^(,?\d+)+$/
];
const CRON_TEMP = [
  "?",
  "*",
  ([v1, v2]) => `${v1}-${v2}`,
  ([v1, v2]) => `${v1}/${v2}`,
  ([v1]) => `${v1}W`,
  ([v1]) => `${v1}L`,
  ([v1, v2]) => `${v1}#${v2}`,
  "",
  "L",
  (vs) => vs.sort((a, b) => a - b).join(",")
];
const DER = { tag: ElRadio, prop: "type" };
const DES = { tag: ElSelect, elFormItem: false };
const DEIN = {
  tag: ElInputNumber,
  controlsPosition: "right",
  elFormItem: false
};
const getINS = (prop, config) => {
  const { attrs, prefix = "", suffix = "", connect = [] } = config;
  const res = [prefix];
  const cstr = new Array().concat(connect);
  let ct = 0;
  for (const d of attrs) {
    const p = `${prop}.${ct}`;
    const c = cstr[ct] || "";
    if (!isArray(d)) {
      res.push({ ...DEIN, prop: p, value: d == null ? void 0 : d.min, ...d });
    } else {
      res.push({ ...DES, prop: p, value: d[0].value, cls: d });
    }
    c && res.push(c);
    ct++;
  }
  res.push(suffix);
  return res;
};
const DECBG = { tag: ElCheckboxGroup, class: "_item _checkbox-group" };
const DECB = { tag: ElCheckbox };
const getCBG = (prop, config = {}) => {
  const { min = 0, max = 59, getLabel } = config;
  const cls = [];
  for (let i = min; i <= max; i++) {
    const s = getLabel ? getLabel(i) : `${i}`;
    cls.push({ ...DECB, label: i, cls: s });
  }
  return [{ ...DECBG, prop, cls }];
};
const getLineElem = (label, config, name) => {
  const n = CRON_ATTR_NAMES[Number(label)];
  let cls = "";
  if (!n) {
    cls = config;
  } else if (n === "the") {
    cls = getCBG(`.${name}.${n}`, config);
  } else {
    cls = getINS(`.${name}.${n}`, config);
  }
  const c = `_radio-item _label-${label}`;
  return { ...DER, class: c, label, cls };
};
const toData = (v, i) => {
  const res = { type: String(i) };
  const n = CRON_ATTR_NAMES[i];
  const reg = CRON_REGS[i];
  const [all, ...vals] = i == 9 ? [""].concat(uniq(v.split(","))) : reg.exec(v) || [];
  res[n] = vals.map((t) => Number(t));
  return res;
};
const toText = (v) => {
  const i = Number(v.type);
  const r = CRON_REGS[i];
  const n = CRON_ATTR_NAMES[i];
  const t = CRON_TEMP[i];
  const b = typeof t === "string";
  const vals = v[n] || [];
  const res = b ? t : t(vals);
  if (!b && !r.test(res)) {
    return t;
  }
  return res;
};
const SECOND = [
  ["1", "\u6BCF\u79D2 \u5141\u8BB8\u7684\u901A\u914D\u7B26[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 0, max: 59 },
        { min: 0, max: 60 }
      ],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u79D2 \u5230",
      suffix: "\u79D2"
    },
    [0, 0]
  ],
  [
    "3",
    {
      attrs: [{ min: 0, max: 59 }, { min: 0 }],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u79D2\u5F00\u59CB\uFF0C\u6BCF\u9694",
      suffix: "\u79D2\u6267\u884C\u4E00\u6B21"
    },
    [0, 0]
  ],
  ["9", {}, [0]]
];
const MINUTE = [
  ["1", "\u6BCF\u5206 \u5141\u8BB8\u7684\u901A\u914D\u7B26[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 0, max: 59 },
        { min: 0, max: 60 }
      ],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u5206 \u5230",
      suffix: "\u5206\u949F"
    },
    [0, 0]
  ],
  [
    "3",
    {
      attrs: [{ min: 0, max: 59 }, { min: 0 }],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u5206\u949F\u5F00\u59CB\uFF0C\u6BCF\u9694",
      suffix: "\u5206\u949F\u6267\u884C\u4E00\u6B21"
    },
    [0, 0]
  ],
  ["9", {}, [0]]
];
const HOUR = [
  ["1", "\u6BCF\u5C0F\u65F6 \u5141\u8BB8\u7684\u901A\u914D\u7B26[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 0, max: 59 },
        { min: 0, max: 60 }
      ],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u65F6 \u5230",
      suffix: "\u5C0F\u65F6"
    },
    [0, 0]
  ],
  [
    "3",
    {
      attrs: [{ min: 0, max: 59 }, { min: 0 }],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u65F6\u5F00\u59CB\uFF0C\u6BCF\u9694",
      suffix: "\u5C0F\u65F6\u6267\u884C\u4E00\u6B21"
    },
    [0, 0]
  ],
  ["9", { max: 23 }, [0]]
];
const DAY = [
  ["0", "\u4E0D\u6307\u5B9A", ""],
  ["1", "\u6BCF\u65E5 \u5141\u8BB8\u7684\u901A\u914D\u7B26[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 1, max: 31 },
        { min: 1, max: 31 }
      ],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u65E5 \u5230",
      suffix: "\u65E5"
    },
    [1, 1]
  ],
  [
    "3",
    {
      attrs: [{ min: 1, max: 31 }, { min: 1 }],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u65E5\u5F00\u59CB\uFF0C\u6BCF\u9694",
      suffix: "\u65E5\u6267\u884C\u4E00\u6B21"
    },
    [1, 1]
  ],
  [
    "4",
    {
      attrs: [{ min: 1, max: 31 }],
      prefix: "\u6BCF\u6708",
      suffix: "\u65E5\u6700\u8FD1\u7684\u90A3\u4E2A\u5DE5\u4F5C\u65E5"
    },
    [1]
  ],
  ["8", "\u672C\u6708\u6700\u540E\u4E00\u5929", ""],
  ["9", { min: 1, max: 31 }, [1]]
];
const MONTH = [
  ["0", "\u4E0D\u6307\u5B9A", ""],
  ["1", "\u6BCF\u6708 \u5141\u8BB8\u7684\u901A\u914D\u7B26[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 1, max: 12 },
        { min: 1, max: 12 }
      ],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u6708 \u5230",
      suffix: "\u6708"
    },
    [1, 1]
  ],
  [
    "3",
    {
      attrs: [{ min: 1, max: 12 }, { min: 1 }],
      prefix: "\u5468\u671F\u4ECE",
      connect: "\u6708\u5F00\u59CB\uFF0C\u6BCF\u9694",
      suffix: "\u4E2A\u6708\u6267\u884C\u4E00\u6B21"
    },
    [1, 1]
  ],
  ["9", { min: 1, max: 12 }, [1]]
];
const WEEKOPTIONS = [
  { value: 1, label: "\u4E00" },
  { value: 2, label: "\u4E8C" },
  { value: 3, label: "\u4E09" },
  { value: 4, label: "\u56DB" },
  { value: 5, label: "\u4E94" },
  { value: 6, label: "\u516D" },
  { value: 7, label: "\u65E5" }
];
const WEEK = [
  ["0", "\u4E0D\u6307\u5B9A", ""],
  ["1", "\u6BCF\u5468 \u5141\u8BB8\u7684\u901A\u914D\u7B26[, - * /]", ""],
  [
    "2",
    {
      attrs: [WEEKOPTIONS, WEEKOPTIONS],
      prefix: "\u5468\u671F\u4ECE\u661F\u671F",
      connect: " \u5230\u661F\u671F"
    },
    [1, 1]
  ],
  [
    "6",
    {
      attrs: [{ min: 1, max: 4 }, WEEKOPTIONS],
      prefix: "\u6BCF\u6708\u7B2C",
      connect: "\u5468\u7684\u661F\u671F"
    },
    [1, 1]
  ],
  [
    "5",
    {
      attrs: [WEEKOPTIONS],
      prefix: "\u672C\u6708\u7684\u6700\u540E\u4E00\u5468\u7684\u661F\u671F"
    },
    [1]
  ],
  [
    "9",
    { min: 1, max: 7, getLabel: (n) => WEEKOPTIONS[n - 1].label },
    [1]
  ]
];
const YEAR = [
  ["0", "\u4E0D\u6307\u5B9A", ""],
  ["1", "\u6BCF\u5E74 \u5141\u8BB8\u7684\u901A\u914D\u7B26[, - * /]", ""],
  [
    "2",
    {
      attrs: [
        { min: 1970, max: 3e3, value: new Date().getFullYear() },
        { min: 1970, max: 3e3, value: new Date().getFullYear() }
      ]
    },
    [1970, new Date().getFullYear()]
  ]
];
const check = (v, regs) => {
  let index = -1;
  for (let i = 0, l = regs.length; i < l; i++) {
    const ri = regs[i];
    const reg = CRON_REGS[ri];
    if (reg.test(v)) {
      index = ri;
      break;
    }
  }
  return index;
};
const LAYOUT = [
  ["second", SECOND],
  ["minute", MINUTE],
  ["hour", HOUR],
  ["day", DAY],
  ["month", MONTH],
  ["week", WEEK],
  ["year", YEAR]
];
const defaultLayout = LAYOUT.map((d) => d[0]);
const layoutData = fromPairs(LAYOUT);
const validator = (v) => {
  const vals = v.trim().split(" ");
  if (vals.length !== 7) {
    return `ERROR_LENGTH :${vals.length} : ${v} - [${defaultLayout.join(" ")}]`;
  }
  for (let i = 0, l = vals.length; i < l; i++) {
    const val = vals[i];
    const [n, d] = LAYOUT[i];
    const regs = d.map((c) => Number(c[0]));
    if (check(val, regs) == -1) {
      return `ERROR_VALUE :${v} :: ${n}`;
    }
  }
  return "";
};
const LABEL = {
  second: "\u79D2",
  minute: "\u5206",
  hour: "\u65F6",
  day: "\u65E5",
  month: "\u6708",
  week: "\u5468",
  year: "\u5E74"
};
const DETP = { tag: ElTabPane };
const DETAB = { tag: ElTabs, type: "border-card" };
const createElem = (layout = defaultLayout) => {
  const data = layout.map((n) => layoutData[n]);
  const elems = [];
  for (let i = 0, l = layout.length; i < l; i++) {
    const d = data[i];
    const n = layout[i];
    const l2 = LABEL[n];
    const cls = d.map(([label, config]) => getLineElem(label, config, n));
    const tab = { ...DETP, label: l2, prop: n, cls };
    elems.push(tab);
  }
  return { ...DETAB, cls: elems };
};
const defaultText = {
  second: "0",
  minute: "0",
  hour: "0",
  day: "1",
  month: "1",
  week: "?",
  year: "*"
};
const resetData = (name, key, val, data) => {
  if (data && isRef(data)) {
    data.value[name][key] = val;
  }
};
const createCronText = (data, reset = resetData, dVal = defaultText) => {
  const d = unref(data);
  const res = [];
  for (const n of defaultLayout) {
    let r = dVal[n];
    if (d[n] != void 0 && d[n].type) {
      const t = d[n].type;
      const v1 = toText(d[n]);
      const cd = layoutData[n];
      const k = CRON_ATTR_NAMES[Number(t)];
      const dd = cd.filter((e) => e[0] == t)[0];
      const val = dd[2];
      const v2 = typeof v1 === "function" ? v1(val) : false;
      v2 && reset(n, k, val, data);
      r = v2 || v1;
    }
    res.push(r);
  }
  return res.join(" ");
};
const createCronData = (v) => {
  const vals = v.split(" ");
  const res = {};
  for (let i = 0, l = defaultLayout.length; i < l; i++) {
    const n = defaultLayout[i];
    const val = vals[i];
    const cd = layoutData[n];
    const rs = cd.map((d) => Number(d[0]));
    const ins = check(val, rs);
    res[n] = toData(val, ins);
  }
  return res;
};
export {
  CRON_ATTR_NAMES,
  CRON_REGS,
  CRON_TEMP,
  LAYOUT,
  check,
  createCronData,
  createCronText,
  createElem,
  defaultLayout,
  layoutData,
  toData,
  toText,
  validator
};
