describe(
  "../evaluationProjects/node-fs-extra/lib/util/stat.js:129:1:144:1",
  () => {
    test("invoc-loc:36:3:36:55-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/src";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src", "fs-extra/copy-sync-dir/dest", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/dest";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/src";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src", "fs-extra/copy-sync-dir/dest", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/dest";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/data/";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/data/", "fs-extra/copy-sync-dir/this/path/does/not/exist/outputDir", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/this/path/does/not/exist/outputDir";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:3", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/src/srcfile.css";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src/srcfile.css", "fs-extra/copy-sync-dir/dest/destfile.css", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/dest/destfile.css";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:4", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/src";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src", "fs-extra/copy-sync-dir/dest", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/dest";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:5", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/src";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src", "fs-extra/copy-sync-dir/dest", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/dest";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:6", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/src";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/src", "fs-extra/copy-sync-dir/dest", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/dest";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:7", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/1.html";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/1.html", "fs-extra/copy-sync-dir/dest/dest1.html", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/dest/dest1.html";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:8", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/2.css";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/2.css", "fs-extra/copy-sync-dir/dest/dest2.css", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/dest/dest2.css";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:9", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/3.jade";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/3.jade", "fs-extra/copy-sync-dir/dest/dest3.jade", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-dir/dest/dest3.jade";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

