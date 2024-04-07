describe(
  "../evaluationProjects/node-fs-extra/lib/copy/getStats.js:6:1:18:1",
  () => {
    test("invoc-loc:40:10:40:44-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:10:1:10:41
      var getStats = require("../lib/copy/getStats.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = null;
      var arg1 = "fs-extra/copy-sync-dir/src";
      var arg2 = "fs-extra/copy-sync-dir/dest";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src", "fs-extra/copy-sync-dir/dest", 'copy', opts);
      var opts = {};
      var arg3 = opts;
      var actualResult = getStats(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:40:10:40:44-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:10:1:10:41
      var getStats = require("../lib/copy/getStats.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = null;
      var arg1 = "fs-extra/copy-sync-dir/src";
      var arg2 = "fs-extra/copy-sync-dir/dest";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src", "fs-extra/copy-sync-dir/dest", 'copy', opts);
      var opts = {};
      var arg3 = opts;
      var actualResult = getStats(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:40:10:40:44-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:10:1:10:41
      var getStats = require("../lib/copy/getStats.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = null;
      var arg1 = "fs-extra/copy-sync-dir/data/";
      var arg2 = "fs-extra/copy-sync-dir/this/path/does/not/exist/outputDir";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/data/", "fs-extra/copy-sync-dir/this/path/does/not/exist/outputDir", 'copy', opts);
      var opts = {};
      var arg3 = opts;
      var actualResult = getStats(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:40:10:40:44-test:3", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:10:1:10:41
      var getStats = require("../lib/copy/getStats.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = null;
      var arg1 = "fs-extra/copy-sync-dir/src";
      var arg2 = "fs-extra/copy-sync-dir/dest";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src", "fs-extra/copy-sync-dir/dest", 'copy', opts);
      var opts = { filter: opts };
      var arg3 = opts;
      var actualResult = getStats(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:40:10:40:44-test:4", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:10:1:10:41
      var getStats = require("../lib/copy/getStats.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = null;
      var arg1 = "fs-extra/copy-sync-dir/src";
      var arg2 = "fs-extra/copy-sync-dir/dest";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src", "fs-extra/copy-sync-dir/dest", 'copy', opts);
      var opts = { filter: opts };
      var arg3 = opts;
      var actualResult = getStats(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:40:10:40:44-test:5", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:10:1:10:41
      var getStats = require("../lib/copy/getStats.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = null;
      var arg1 = "fs-extra/copy-sync-dir/1.html";
      var arg2 = "fs-extra/copy-sync-dir/dest/dest1.html";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/1.html", "fs-extra/copy-sync-dir/dest/dest1.html", 'copy', opts);
      var opts = { filter: opts };
      var arg3 = opts;
      var actualResult = getStats(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:40:10:40:44-test:6", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:10:1:10:41
      var getStats = require("../lib/copy/getStats.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = null;
      var arg1 = "fs-extra/copy-sync-dir/3.jade";
      var arg2 = "fs-extra/copy-sync-dir/dest/dest3.jade";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/3.jade", "fs-extra/copy-sync-dir/dest/dest3.jade", 'copy', opts);
      var opts = { filter: opts };
      var arg3 = opts;
      var actualResult = getStats(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

