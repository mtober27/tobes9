(function (global) {
  var BOARD = "https://crudcrud.com/api/d918aa2b97204fd0a5531d5ea43580f0/times";
  var MIN_MS = 45 * 1000;
  var MAX_MS = 6 * 60 * 60 * 1000;

  function format(ms) {
    ms = Math.max(0, Math.round(Number(ms) || 0));
    var total = Math.floor(ms / 1000);
    var h = Math.floor(total / 3600);
    var m = Math.floor((total % 3600) / 60);
    var s = total % 60;
    var hs = Math.floor((ms % 1000) / 10);
    var pad = function (n) { return String(n).padStart(2, "0"); };
    var body = pad(m) + ":" + pad(s) + "." + pad(hs);
    return h > 0 ? h + ":" + body : body;
  }

  function usable(row) {
    return row && typeof row.name === "string" && row.name.length > 0 &&
      Number.isFinite(row.ms) && row.ms >= MIN_MS && row.ms <= MAX_MS;
  }

  async function list() {
    var res = await fetch(BOARD);
    if (!res.ok) throw new Error("load");
    var rows = await res.json();
    return rows.filter(usable).sort(function (a, b) { return a.ms - b.ms; });
  }

  async function submit(name, ms) {
    ms = Math.round(ms);
    if (!Number.isFinite(ms) || ms < MIN_MS || ms > MAX_MS) {
      return { saved: false, reason: "short", rows: await list().catch(function () { return []; }) };
    }
    var rows = await list();
    var mine = rows.filter(function (row) { return row.name === name; });
    var best = mine.reduce(function (low, row) { return Math.min(low, row.ms); }, Infinity);
    if (best <= ms) return { saved: false, reason: "slower", best: best, rows: rows };
    if (mine.length) {
      var row = mine.slice().sort(function (a, b) { return a.ms - b.ms; })[0];
      var put = await fetch(BOARD + "/" + row._id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, ms: ms })
      });
      if (!put.ok) throw new Error("save");
    } else {
      var post = await fetch(BOARD, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, ms: ms })
      });
      if (!post.ok) throw new Error("save");
    }
    var next = await list();
    return { saved: true, rows: next };
  }

  global.BrambleBoard = { format: format, list: list, submit: submit };
})(window);
