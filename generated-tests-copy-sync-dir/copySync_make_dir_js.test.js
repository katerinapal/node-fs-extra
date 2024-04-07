describe(
  "../evaluationProjects/node-fs-extra/lib/mkdirs/make-dir.js:24:30:31:1",
  () => {
    test("invoc-loc:39:35:39:56-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:7:1:7:50
      var mkdirpSync = require("../lib/mkdirs").mkdirpSync;
      var arg0 = "fs-extra/copy-sync-dir/this/path/does/not/exist";
      var mkdirsSync = mkdirpSync;
      var actualResult = mkdirsSync(arg0);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

