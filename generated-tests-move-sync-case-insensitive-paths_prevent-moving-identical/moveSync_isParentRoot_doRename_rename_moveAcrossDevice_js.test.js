describe(
  "../evaluationProjects/node-fs-extra/lib/move/isParentRoot_doRename_rename_moveAcrossDevice.js:12:1:20:1",
  () => {
    test("invoc-loc:29:10:29:55-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:11:1:11:77
      var utilObj = require("../lib/move/isParentRoot_doRename_rename_moveAcrossDevice.js");
      var arg0 = "fs-extra/move-sync-case-insensitive-paths/srcdir";
      var arg1 = "fs-extra/move-sync-case-insensitive-paths/srcDir";
      var arg2 = false;
      var arg3 = false;
      var utilObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:13:1:13:33
      var doRename = utilObj.doRename;
      var actualResult = doRename(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:29:10:29:55-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:11:1:11:77
      var utilObj = require("../lib/move/isParentRoot_doRename_rename_moveAcrossDevice.js");
      var arg0 = "fs-extra/move-sync-case-insensitive-paths/srcfile";
      var arg1 = "fs-extra/move-sync-case-insensitive-paths/srcFile";
      var arg2 = false;
      var arg3 = false;
      var utilObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:13:1:13:33
      var doRename = utilObj.doRename;
      var actualResult = doRename(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:29:10:29:55-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:11:1:11:77
      var utilObj = require("../lib/move/isParentRoot_doRename_rename_moveAcrossDevice.js");
      var arg0 = "fs-extra/move-sync-case-insensitive-paths/src-symlink";
      var arg1 = "fs-extra/move-sync-case-insensitive-paths/src-Symlink";
      var arg2 = false;
      var arg3 = false;
      var utilObj;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:13:1:13:33
      var doRename = utilObj.doRename;
      var actualResult = doRename(arg0, arg1, arg2, arg3);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

