describe(
  "../evaluationProjects/node-fs-extra/lib/util/stat.js:129:1:144:1",
  () => {
    test("invoc-loc:27:3:27:55-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync-case-insensitive-paths/srcdir";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync-case-insensitive-paths/srcdir", "fs-extra/move-sync-case-insensitive-paths/srcDir", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync-case-insensitive-paths/srcDir";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync-case-insensitive-paths/srcfile";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync-case-insensitive-paths/srcfile", "fs-extra/move-sync-case-insensitive-paths/srcFile", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync-case-insensitive-paths/srcFile";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync-case-insensitive-paths/src-symlink";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync-case-insensitive-paths/src-symlink", "fs-extra/move-sync-case-insensitive-paths/src-Symlink", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync-case-insensitive-paths/src-Symlink";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:3", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync-case-insensitive-paths/src-symlink";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync-case-insensitive-paths/src-symlink", "fs-extra/move-sync-case-insensitive-paths/src-Symlink", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync-case-insensitive-paths/src-Symlink";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

