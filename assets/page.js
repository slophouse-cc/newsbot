// newsbot public pages: rewrites <time datetime> into the reader's
// timezone. Progressive enhancement — the server-rendered UTC text stands
// without JavaScript. No fetches; no DOM changes beyond <time> text nodes.
(function () {
  "use strict";
  var nodes = document.querySelectorAll("time[datetime]");
  var fmt;
  try { fmt = new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }); }
  catch (e) { return; }
  for (var i = 0; i < nodes.length; i++) {
    var t = nodes[i];
    var d = new Date(t.getAttribute("datetime"));
    if (!isNaN(d.getTime())) t.textContent = fmt.format(d);
  }
})();
