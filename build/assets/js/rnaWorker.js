// rnaWorker.js
self.onmessage = e => {
  const { trackIdx, data, layerMax } = e.data;

  // 1) 一次遍历收集 bounds 和 intron ranges
  const map = {};
  data.forEach(el => {
    const n = el.name;
    if (!n) return;
    if (!map[n]) {
      map[n] = { start: el.genomicStart, end: el.genomicEnd, intronMin: Infinity, intronMax: -Infinity };
    } else {
      map[n].start = Math.min(map[n].start, el.genomicStart);
      map[n].end   = Math.max(map[n].end,   el.genomicEnd);
    }
    if (el.rnaType === 'intron') {
      map[n].intronMin = Math.min(map[n].intronMin, el.genomicStart);
      map[n].intronMax = Math.max(map[n].intronMax, el.genomicEnd);
    }
  });

  // 2) 构 transcriptArray
  const transcriptArray = Object.entries(map).map(([name, m]) => {
    const intronRange = m.intronMin === Infinity
      ? null
      : [m.intronMin, m.intronMax];
    return {
      name,
      start: m.start,
      end:   m.end,
      intronRange,
      intronStart: intronRange ? intronRange[0] : m.start
    };
  });
  transcriptArray.sort((a, b) => a.intronStart - b.intronStart);

  // 3) 分层
  const layers = [];
  const layerIndex = {};
  const overlaps = (a, b) => {
    if (!a.intronRange || !b.intronRange) return false;
    const [s1, e1] = a.intronRange, [s2, e2] = b.intronRange;
    return !(e1 <= s2 || e2 <= s1);
  };
  transcriptArray.forEach(t => {
    let placed = false;
    for (let li = 0; li < layers.length; li++) {
      if (!layers[li].some(o => overlaps(o, t))) {
        layerIndex[t.name] = li;
        layers[li].push(t);
        placed = true;
        break;
      }
    }
    if (!placed && layers.length < layerMax) {
      layerIndex[t.name] = layers.length;
      layers.push([t]);
    }
  });

  // 4) 把结果回主线程
  self.postMessage({ trackIdx, transcriptArray, layerIndex });
};
