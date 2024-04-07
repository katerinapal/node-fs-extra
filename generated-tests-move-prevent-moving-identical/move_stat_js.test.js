describe("../evaluationProjects/node-fs-extra/lib/util/stat.js:39:1:68:1", () => {
  test("invoc-loc:21:3:32:4-test:0", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/TEST_fs-extra_move";
    var arg1 = "fs-extra/move-prevent-moving-identical/TEST_fs-extra_move";
    var arg2 = "move";
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:14:5:14:13
    opts = {};
    var opts;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:1", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/a/file.txt";
    var arg1 = "fs-extra/move-prevent-moving-identical/b/file.txt";
    var arg2 = "move";
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:14:5:14:13
    opts = {};
    var opts;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:2", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/a/foo";
    var arg1 = "fs-extra/move-prevent-moving-identical/b/foo";
    var arg2 = "move";
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:14:5:14:13
    opts = {};
    var opts;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:3", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/a/dir/file.txt";
    var arg1 = "fs-extra/move-prevent-moving-identical/b/dir/file.txt";
    var arg2 = "move";
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:14:5:14:13
    opts = {};
    var opts;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:4", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/a/dir/foo";
    var arg1 = "fs-extra/move-prevent-moving-identical/b/dir/foo";
    var arg2 = "move";
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:14:5:14:13
    opts = {};
    var opts;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:5", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:6:1:6:35
    var fs = require("../lib/index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/src";
    var arg1 = "fs-extra/move-prevent-moving-identical/dest-symlink";
    var arg2 = "move";
    var fs;
    var opts = { dereference: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:6", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/src-symlink";
    var arg1 = "fs-extra/move-prevent-moving-identical/dest";
    var arg2 = "move";
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:14:5:14:13
    opts = {};
    var opts;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:7", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:6:1:6:35
    var fs = require("../lib/index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/src.txt";
    var arg1 = "fs-extra/move-prevent-moving-identical/dest-symlink";
    var arg2 = "move";
    var fs;
    var opts = { dereference: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:8", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:6:1:6:35
    var fs = require("../lib/index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/src-symlink";
    var arg1 = "fs-extra/move-prevent-moving-identical/dest/somefile.txt";
    var arg2 = "move";
    var fs;
    var opts = { dereference: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:9", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:6:1:6:35
    var fs = require("../lib/index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-identical/src_symlink";
    var arg1 = "fs-extra/move-prevent-moving-identical/dest_symlink";
    var arg2 = "move";
    var fs;
    var opts = { dereference: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });
});

