describe(
  "../evaluationProjects/node-fs-extra/lib/mkdirs/make-dir.js:24:30:31:1",
  () => {
    test("invoc-loc:28:28:28:57-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:7:1:7:50
      var mkdirpSync = require("../lib/mkdirs").mkdirpSync;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/cross-device-utils.js:2:1:2:28
      var path = require('path');
      var arg0 = "fs-extra/move-sync";
      var path;
      var actualResult = mkdirpSync(arg0);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:28:28:28:57-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:7:1:7:50
      var mkdirpSync = require("../lib/mkdirs").mkdirpSync;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/cross-device-utils.js:2:1:2:28
      var path = require('path');
      var arg0 = "fs-extra/move-sync/a-folder";
      var path;
      var actualResult = mkdirpSync(arg0);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:28:28:28:57-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:7:1:7:50
      var mkdirpSync = require("../lib/mkdirs").mkdirpSync;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/filtered-test-modules/cross-device-utils.js:2:1:2:28
      var path = require('path');
      var arg0 = "fs-extra/move-sync/does/not/exist";
      var path;
      var actualResult = mkdirpSync(arg0);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

