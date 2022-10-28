"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const lodash = require("lodash");
const treeMap = (tree = [], fn = () => void 0, cfg = {}) => {
  const isSource = cfg.isSource || false;
  const s = isSource ? tree : lodash.cloneDeep(tree);
  const ck = cfg.children || "children";
  const f = (list, pn, ins) => {
    const tl = lodash.clone(list);
    for (let i = 0, l = tl.length; i < l; i++) {
      const n = tl[i];
      if (n) {
        const res = fn(n, list, i, pn, ins);
        if (res === false) {
          break;
        }
        const c = n[ck];
        if (c && c.length > 0) {
          f(c, n, i);
        }
      }
    }
  };
  f(s, void 0, void 0);
  return s;
};
const treeToObject = (tree, cfg = {}) => {
  const res = {};
  const k = cfg.key || "id";
  const f = (n) => {
    if (n && n[k]) {
      res[n[k]] = n;
    }
  };
  treeMap(tree, f, cfg);
  return res;
};
const treeFilter = (tree = [], fn, cfg = {}) => {
  const ck = cfg.children || "children";
  const f = (n, l, i, pn, ins) => {
    const bool = fn(n, l, i, pn, ins);
    if (!bool) {
      const it = l.indexOf(n);
      l.splice(it, 1);
      if (pn && pn[ck] && pn[ck].length == 0) {
        delete pn[ck];
      }
    }
  };
  return treeMap(tree, f, cfg);
};
const treeSort = (tree = [], fn, cfg = {}) => {
  const f = (n, l, i, pn, ins) => {
    l.sort(fn);
  };
  return treeMap(tree, f, cfg);
};
const treeNodeMove = (tree, id, pid, index, cfg = {}, fc) => {
  const k = cfg.key || "id";
  const ck = cfg.children || "children";
  let node;
  let si;
  let snode;
  let tnode;
  let target;
  let pnode;
  const f = (n, l, i, pn) => {
    if (n[k] == id) {
      node = n;
      snode = l;
      si = i;
      pnode = pn;
    }
    if (n[k] == pid) {
      tnode = n[ck] || n;
      target = n;
    }
  };
  const res = treeMap(tree, f, cfg);
  tnode = tnode != null ? tnode : res;
  if (fc && node) {
    fc(node, pnode, target, si);
  }
  if (node != void 0) {
    if (snode) {
      snode.splice(si, 1);
    }
    if (tnode) {
      Array.isArray(tnode) ? tnode.splice(index, 0, node) : tnode[ck] = [node];
    }
  }
  return res;
};
const treeAdd = (tree = [], fn, cfg = {}) => {
  cfg.children || "children";
  const f = (n, l, i, pn, ins) => {
    if (pn) {
      const [ns, index = l.length] = fn(pn) || [];
      if (ns) {
        l.splice(index, 0, ...ns);
        return false;
      }
    }
  };
  return treeMap(tree, f, cfg);
};
const treeAddOne = (tree = [], fn, cfg = {}) => {
  const ck = cfg.children || "children";
  const f = (n, l) => {
    const [node, index = l.length] = fn(n) || [];
    if (node) {
      if (!n[ck]) {
        n[ck] = [];
      }
      n[ck].splice(index, 0, node);
      return false;
    }
  };
  return treeMap(tree, f, cfg);
};
const treeFind = (tree, fn, cfg = {}) => {
  let node;
  const f = (n) => {
    if (fn(n)) {
      node = n;
      return false;
    }
  };
  treeMap(tree, f, cfg);
  return node;
};
const treeDelete = (tree = [], list = [], cfg = {}) => {
  const k = cfg.key || "id";
  const f = (n) => !list.includes(n[k]);
  return treeFilter(tree, f, cfg);
};
const treeDeleteOne = (tree = [], key, cfg = {}) => {
  const k = cfg.key || "id";
  let res;
  const f = (n, list, i) => {
    if (n[k] == key) {
      list.splice(i, 1);
      res = n;
      return false;
    }
    return true;
  };
  treeMap(tree, f, cfg);
  return res;
};
const treeAllPath = (tree = [], cfg = {}) => {
  const paths = [];
  let s = [];
  const f = (n, l, i, pn, ins) => {
    if (pn) {
      const pi = s.indexOf(pn);
      const len = s.length;
      if (pi == -1) {
        s.push(pn);
      } else if (pi < len - 1) {
        let ct = len - 1 - pi;
        while (ct-- > 0) {
          s.pop();
        }
      }
    } else {
      s = [];
    }
    paths.push([n, ...s]);
  };
  treeMap(tree, f, cfg);
  return paths;
};
const treeLeafs = (tree = [], cfg = {}) => {
  const ck = cfg.children || "children";
  const paths = treeAllPath(tree, cfg);
  return paths.filter((items) => !items[0][ck] || items[0][ck].length == 0);
};
const treeFindPath = (tree = [], list = [], cfg = {}) => {
  const k = cfg.key || "id";
  const paths = treeAllPath(tree, cfg);
  return paths.filter((item) => list.includes(item[0][k]));
};
const treeReset = (tree = [], fn, cfg = {}) => {
  const csk = cfg.sourceChildren || cfg.children || "children";
  const ctk = cfg.children || "children";
  const f = (n, l, i, pn, ins) => {
    const o = fn(n, l, i, pn, ins);
    if (o == n && n != void 0) {
      return;
    }
    if (o == void 0) {
      l.splice(l.indexOf(n), 1);
      return;
    }
    const c = n[csk];
    const ks = Object.keys(n);
    ks.forEach((k) => delete n[k]);
    const oks = Object.keys(o);
    oks.forEach((k) => n[k] = o[k]);
    if (!o[ctk] && c && c.length > 0) {
      n[ctk] = c;
    }
  };
  return treeMap(tree, f, cfg);
};
exports.treeAdd = treeAdd;
exports.treeAddOne = treeAddOne;
exports.treeAllPath = treeAllPath;
exports.treeDelete = treeDelete;
exports.treeDeleteOne = treeDeleteOne;
exports.treeFilter = treeFilter;
exports.treeFind = treeFind;
exports.treeFindPath = treeFindPath;
exports.treeLeafs = treeLeafs;
exports.treeMap = treeMap;
exports.treeNodeMove = treeNodeMove;
exports.treeReset = treeReset;
exports.treeSort = treeSort;
exports.treeToObject = treeToObject;
