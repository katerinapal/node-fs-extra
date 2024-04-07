describe("../evaluationProjects/node-fs-extra/lib/util/stat.js:39:1:68:1", () => {
  test("invoc-loc:21:3:32:4-test:0", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/move-prevent-moving-into-itself/src/srcfile.txt";
    var arg1 = "fs-extra/move-prevent-moving-into-itself/src/dest/destfile.txt";
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

