describe(
  "../evaluationProjects/node-fs-extra/lib/util/stat.js:129:1:144:1",
  () => {
    test("invoc-loc:27:3:27:55-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync/a-file";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync/a-file", "fs-extra/move-sync/a-file-dest", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync/a-file-dest";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync/a-file";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync/a-file", "fs-extra/move-sync/a-folder/another-file", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync/a-folder/another-file";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:7:1:7:36
      var fse = require("../lib/index.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync/a-file";
      var fse;
      var opts = { overwrite: false };
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync/a-file", "fs-extra/move-sync/a-folder/another-file", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync/a-folder/another-file";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:3", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:7:1:7:36
      var fse = require("../lib/index.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync/a-file";
      var fse;
      var opts = { overwrite: true };
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync/a-file", "fs-extra/move-sync/a-folder/another-file", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync/a-folder/another-file";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:4", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:7:1:7:36
      var fse = require("../lib/index.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync/src";
      var fse;
      var opts = { overwrite: true };
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync/src", "fs-extra/move-sync/a-folder", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync/a-folder";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:5", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync/a-file";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync/a-file", "fs-extra/move-sync/does/not/exist/a-file-dest", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync/does/not/exist/a-file-dest";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:6", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync/a-file";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync/a-file", "fs-extra/move-sync/a-file-dest", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync/a-file-dest";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:7", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync/a-folder";
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync/a-folder", "fs-extra/move-sync/a-folder-dest", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync/a-folder-dest";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:27:3:27:55-test:8", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:7:1:7:36
      var fse = require("../lib/index.js");
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/move-sync/a-folder";
      var fse;
      var opts = { overwrite: true };
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:16:3:16:19
      opts = opts || {};
      var stat = require("../lib/util/stat");
      var stat;
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:22:3:22:62
      var statObj = stat.checkPathsSync("fs-extra/move-sync/a-folder", "fs-extra/move-sync/a-folder-dest", 'move', opts);
      var statObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:23:3:23:33
      var srcStat = statObj.srcStat;
      var srcStat;
      var arg1 = srcStat;
      var arg2 = "fs-extra/move-sync/a-folder-dest";
      var arg3 = "move";
      var actualResult = stat.checkParentPathsSync(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

