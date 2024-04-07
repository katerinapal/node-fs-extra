describe(
  "../evaluationProjects/node-fs-extra/lib/util/stat.js:129:1:144:1",
  () => {
    test("invoc-loc:36:3:36:55-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat.js");
      var arg0 = "fs-extra/copy-sync-case-insensitive-paths/srcdir";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat.js");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-case-insensitive-paths/srcdir", "fs-extra/copy-sync-case-insensitive-paths/srcDir", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-case-insensitive-paths/srcDir";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat.js");
      var arg0 = "fs-extra/copy-sync-case-insensitive-paths/srcfile";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat.js");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-case-insensitive-paths/srcfile", "fs-extra/copy-sync-case-insensitive-paths/srcFile", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-case-insensitive-paths/srcFile";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat.js");
      var arg0 = "fs-extra/copy-sync-case-insensitive-paths/src-symlink";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat.js");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-case-insensitive-paths/src-symlink", "fs-extra/copy-sync-case-insensitive-paths/src-Symlink", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-case-insensitive-paths/src-Symlink";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:36:3:36:55-test:3", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat.js");
      var arg0 = "fs-extra/copy-sync-case-insensitive-paths/src-symlink";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      var stat = require("../lib/util/stat.js");
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-case-insensitive-paths/src-symlink", "fs-extra/copy-sync-case-insensitive-paths/src-Symlink", 'copy', opts);
      var res;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:33:3:33:29
      var srcStat = res.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/copy-sync-case-insensitive-paths/src-Symlink";
      var arg3 = "copy";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

