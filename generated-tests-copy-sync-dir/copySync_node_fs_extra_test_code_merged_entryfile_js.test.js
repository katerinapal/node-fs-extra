describe(
  "../evaluationProjects/node-fs-extra/filtered-test-modules/node-fs-extra-test-code-merged-entryfile.js:200:22:201:1",
  () => {
    test("invoc-loc:37:23:37:44-test:0", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/1.html";
      var arg1 = "fs-extra/copy-sync-dir/dest/dest1.html";
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/1.html", "fs-extra/copy-sync-dir/dest/dest1.html", 'copy', opts);
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var actualResult = opts.filter(arg0, arg1);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:37:23:37:44-test:1", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/2.css";
      var arg1 = "fs-extra/copy-sync-dir/dest/dest2.css";
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/2.css", "fs-extra/copy-sync-dir/dest/dest2.css", 'copy', opts);
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var actualResult = opts.filter(arg0, arg1);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });

    test("invoc-loc:37:23:37:44-test:2", () => {
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/move/move-sync.js:8:1:8:36
      var stat = require("../lib/util/stat");
      var arg0 = "fs-extra/copy-sync-dir/3.jade";
      var arg1 = "fs-extra/copy-sync-dir/dest/dest3.jade";
      var opts;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:17:3:17:19
      opts = opts || {};
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:18:3:18:58
      opts.clobber = 'clobber' in opts ? !!opts.clobber : true;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:19:3:19:72
      opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:32:3:32:58
      var res = stat.checkPathsSync("fs-extra/copy-sync-dir/3.jade", "fs-extra/copy-sync-dir/dest/dest3.jade", 'copy', opts);
      var stat;
      ///home/katerina/visualStudioGit/evaluationProjects/node-fs-extra/lib/copy/copy-sync.js:14:5:14:27
      opts = { filter: opts };
      var actualResult = opts.filter(arg0, arg1);
      var expectedResult = undefined;
      expect(expectedResult).toBe(actualResult);
    });
  }
);

