/**
 * yaml-lite：components.yaml 专用迷你解析器。
 * 仅支持本文件使用的格式：每行 `- {key: value, key: [a, b], ...}`（方括号深度感知切分）。
 * 不做通用 YAML 解析 —— 结构由 verify.mjs 校验兜底。
 */

export function parseComponentsYaml(text) {
  const items = [];
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line.startsWith("- {") || !line.endsWith("}")) continue;
    const body = line.slice(3, -1);
    const fields = splitTopLevel(body);
    const obj = {};
    for (const f of fields) {
      const i = f.indexOf(":");
      if (i < 1) throw new Error(`components.yaml 字段解析失败: ${f}`);
      const key = f.slice(0, i).trim();
      let val = f.slice(i + 1).trim();
      if (val.startsWith("[") && val.endsWith("]")) {
        const inner = val.slice(1, -1).trim();
        obj[key] = inner ? inner.split(",").map((s) => s.trim()) : [];
      } else if (val === "true" || val === "false") {
        obj[key] = val === "true";
      } else if (/^-?\d+$/.test(val)) {
        obj[key] = parseInt(val, 10);
      } else {
        obj[key] = val;
      }
    }
    items.push(obj);
  }
  return items;
}

function splitTopLevel(s) {
  const out = [];
  let depth = 0;
  let cur = "";
  for (const ch of s) {
    if (ch === "[") depth++;
    else if (ch === "]") depth--;
    if (ch === "," && depth === 0) {
      out.push(cur.trim());
      cur = "";
    } else {
      cur += ch;
    }
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}
