describe(
  "../evaluationProjects/node-fs-extra/lib/copy/getStats.js:6:1:18:1",
  () => {
    test("invoc-loc:40:10:40:44-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:10:1:10:41
      var getStats = require("../lib/copy/getStats.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = null;
      var arg1 = "fs-extra/copy-sync-symlinks/src";
      var arg2 = "fs-extra/copy-sync-symlinks/out";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-symlinks/src", "fs-extra/copy-sync-symlinks/out", 'copy', opts);
      var opts = {};
      var arg3 = opts;
      var actualResult = getStats(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

