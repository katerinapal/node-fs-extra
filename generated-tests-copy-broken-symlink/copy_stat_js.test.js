describe("../evaluationProjects/node-fs-extra/lib/util/stat.js:39:1:68:1", () => {
  test("invoc-loc:33:3:45:4-test:0", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    var arg0 = "fs-extra/copy-broken-symlink/src";
    var arg1 = "fs-extra/copy-broken-symlink/dest";
    var arg2 = "copy";
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy.js:13:5:13:13
    opts = {};
    var opts;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy.js:19:3:19:19
    opts = opts || {};
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy.js:21:3:21:58
    opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy.js:22:3:22:72
    opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });

  test("invoc-loc:33:3:45:4-test:1", () => {
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
    var stat = require("../lib/util/stat");
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:8:1:8:41
    var copy = require("../lib/copy/copy.js");
    var arg0 = "fs-extra/copy-broken-symlink/src";
    var arg1 = "fs-extra/copy-broken-symlink/dest";
    var arg2 = "copy";
    var opts = { dereference: true };
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy.js:19:3:19:19
    opts = opts || {};
    var opts;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy.js:21:3:21:58
    opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
    ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy.js:22:3:22:72
    opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
    var arg3 = opts;
    var arg4 = null;
    var actualResult = stat.checkPaths(arg0, arg1, arg2, arg3, arg4);
    var expectedResult = undefined;
    expect(expectedResult).toBe(actualResult);
  });
});

