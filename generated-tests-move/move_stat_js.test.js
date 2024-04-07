describe("../evaluationProjects/node-fs-extra/lib/util/stat.js:39:1:68:1", () => {
  test("invoc-loc:21:3:32:4-test:0", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:5:1:5:36
    var fse = require("../lib/index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-folder/another-file";
    var arg2 = "move";
    var fse;
    var opts = { overwrite: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:1", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:5:1:5:36
    var fse = require("../lib/index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/src";
    var arg1 = "fs-extra/move/a-folder";
    var arg2 = "move";
    var fse;
    var opts = { overwrite: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:2", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:5:1:5:36
    var fse = require("../lib/index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-folder";
    var arg1 = "fs-extra/move/a-folder-dest";
    var arg2 = "move";
    var fse;
    var opts = { overwrite: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:3", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-file-dest";
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
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-file-dest";
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
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-file";
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

  test("invoc-loc:21:3:32:4-test:6", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/non-existent";
    var arg1 = "fs-extra/move/non-existent";
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
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-folder";
    var arg1 = "fs-extra/move/a-folder";
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

  test("invoc-loc:21:3:32:4-test:8", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-folder/another-file";
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

  test("invoc-loc:21:3:32:4-test:9", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:5:1:5:36
    var fse = require("../lib/index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-folder/another-file";
    var arg2 = "move";
    var fse;
    var opts = { overwrite: false };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:10", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/does/not/exist/a-file-dest";
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

  test("invoc-loc:21:3:32:4-test:11", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-file-dest";
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

  test("invoc-loc:21:3:32:4-test:12", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-folder";
    var arg1 = "fs-extra/move/a-folder-dest";
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

  test("invoc-loc:21:3:32:4-test:13", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-folder";
    var arg1 = "fs-extra/move/a-folder-dest";
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

  test("invoc-loc:21:3:32:4-test:14", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-file-dest";
    var arg2 = "move";
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:15", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-file-dest";
    var arg2 = "move";
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:16", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:5:1:5:36
    var fse = require("../lib/index.js");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/a-file";
    var arg1 = "fs-extra/move/a-folder/another-file";
    var arg2 = "move";
    var fse;
    var opts = { clobber: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move.js:17:3:17:19
    opts = opts || {};
    var opts;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:21:3:32:4-test:17", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move/test";
    var arg1 = "fs-extra/move/test/test";
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
});

