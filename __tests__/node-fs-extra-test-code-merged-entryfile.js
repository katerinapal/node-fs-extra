'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');
var copy = require("../lib/copy/copy");

/* global afterEach, beforeEach, describe, it */

describe('copy / broken symlink', () => {
  const TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'copy-broken-symlink')
  const src = path.join(TEST_DIR, 'src')
  const dest = path.join(TEST_DIR, 'dest')

  beforeEach(done => {
    fse.emptyDir(TEST_DIR, err => {
      assert.ifError(err)
      createFixtures(src, done)
    })
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('when symlink is broken', () => {
    it('should not throw error if dereference is false', done => {
      copy(src, dest, err => {
        assert.strictEqual(err, null)
        done()
      })
    })

    it('should throw error if dereference is true', done => {
      copy(src, dest, { dereference: true }, err => {
        assert.strictEqual(err.code, 'ENOENT')
        done()
      })
    })
  })
})

function createFixtures (srcDir, callback) {
  fs.mkdir(srcDir, err => {
    let brokenFile
    let brokenFileLink

    if (err) return callback(err)

    try {
      brokenFile = path.join(srcDir, 'does-not-exist')
      brokenFileLink = path.join(srcDir, 'broken-symlink')
      fs.writeFileSync(brokenFile, 'does not matter')
      fs.symlinkSync(brokenFile, brokenFileLink, 'file')
    } catch (err) {
      callback(err)
    }

    // break the symlink now
    fse.remove(brokenFile, callback)
  })
}

'use strict'

/* eslint-env mocha */

var assert = require('assert');
var fse = require("../lib/index.js");

var methods = [
  'emptyDir',
  'ensureFile',
  'ensureDir',
  'mkdirs',
  'readJson',
  'readJSON',
  'remove'
];

describe('promise support', () => {
  methods.forEach(method => {
    it(method, done => {
      fse[method]().catch(() => done())
    })
  })
})

'use strict'

var assert = require('assert');
var os = require('os');
var path = require('path');
var fs = require("../lib/index.js");
var platform = os.platform();

/* global beforeEach, afterEach, describe, it */

describe('+ copy() - case insensitive paths', () => {
  let TEST_DIR = ''
  let src = ''
  let dest = ''

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'copy-case-insensitive-paths')
    fs.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fs.remove(TEST_DIR, done))

  describe('> when src is a directory', () => {})

  describe('> when src is a file', () => {})

  describe('> when src is a symlink', () => {})
})

'use strict'

// relevant: https://github.com/jprichardson/node-fs-extra/issues/89
// come up with better file name

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('copy() - gh #89', () => {
  const TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'copy-gh-89')

  beforeEach(done => {
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => {
    fse.remove(TEST_DIR, done)
  })

  it('should copy successfully', done => {
    const A = path.join(TEST_DIR, 'A')
    const B = path.join(TEST_DIR, 'B')
    fs.mkdirSync(A)
    fs.mkdirSync(B)

    const one = path.join(A, 'one.txt')
    const two = path.join(A, 'two.txt')
    const three = path.join(B, 'three.txt')
    const four = path.join(B, 'four.txt')

    fs.writeFileSync(one, '1')
    fs.writeFileSync(two, '2')
    fs.writeFileSync(three, '3')
    fs.writeFileSync(four, '4')

    const C = path.join(TEST_DIR, 'C')
    fse.copy(A, C, err => {
      if (err) return done(err)

      fse.copy(B, C, err => {
        if (err) return done(err)

        assert(fs.existsSync(path.join(C, 'one.txt')))
        assert(fs.existsSync(path.join(C, 'two.txt')))
        assert(fs.existsSync(path.join(C, 'three.txt')))
        assert(fs.existsSync(path.join(C, 'four.txt')))
        done()
      })
    })
  })
})

'use strict'

var assert = require('assert');
var os = require('os');
var path = require('path');
var fs = require("../lib/index.js");
var klawSync = require('klaw-sync');

/* global beforeEach, afterEach, describe, it */

// these files are used for all tests
var FILES = [
  'file0.txt',
  path.join('dir1', 'file1.txt'),
  path.join('dir1', 'dir2', 'file2.txt'),
  path.join('dir1', 'dir2', 'dir3', 'file3.txt')
];

var dat0 = 'file0';
var dat1 = 'file1';
var dat2 = 'file2';
var dat3 = 'file3';

describe('+ copy() - prevent copying into itself', () => {
  let TEST_DIR, src

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'copy-prevent-copying-into-itself')
    src = path.join(TEST_DIR, 'src')
    fs.mkdirpSync(src)

    fs.outputFileSync(path.join(src, FILES[0]), dat0)
    fs.outputFileSync(path.join(src, FILES[1]), dat1)
    fs.outputFileSync(path.join(src, FILES[2]), dat2)
    fs.outputFileSync(path.join(src, FILES[3]), dat3)
    done()
  })

  afterEach(done => fs.remove(TEST_DIR, done))

  describe('> when source is a file', () => {})

  // test for these cases:
  //  - src is directory, dest is directory
  //  - src is directory, dest is symlink
  //  - src is symlink, dest is directory
  //  - src is symlink, dest is symlink

  describe('> when source is a directory', () => {
    describe('>> when dest is a directory', () => {})

    describe('>> when dest is a symlink', () => {})
  })

  describe('> when source is a symlink', () => {
    describe('>> when dest is a directory', () => {})

    describe('>> when dest is a symlink', () => {})
  })
})

function testSuccess (src, dest, done) {
  const srclen = klawSync(src).length
  assert(srclen > 2)
  fs.copy(src, dest, err => {
    assert.ifError(err)

    FILES.forEach(f => assert(fs.existsSync(path.join(dest, f)), 'file copied'))

    const o0 = fs.readFileSync(path.join(dest, FILES[0]), 'utf8')
    const o1 = fs.readFileSync(path.join(dest, FILES[1]), 'utf8')
    const o2 = fs.readFileSync(path.join(dest, FILES[2]), 'utf8')
    const o3 = fs.readFileSync(path.join(dest, FILES[3]), 'utf8')

    assert.strictEqual(o0, dat0, 'file contents matched')
    assert.strictEqual(o1, dat1, 'file contents matched')
    assert.strictEqual(o2, dat2, 'file contents matched')
    assert.strictEqual(o3, dat3, 'file contents matched')
    done()
  })
}

function testError (src, dest, done) {
  fs.copy(src, dest, err => {
    assert.strictEqual(err.message, `Cannot copy '${src}' to a subdirectory of itself, '${dest}'.`)
    done()
  })
}

'use strict'

var assert = require('assert');
var os = require('os');
var path = require('path');
var fs = require("../lib/index.js");
var platform = os.platform();

/* global beforeEach, afterEach, describe, it */

describe('+ copySync() - case insensitive paths', () => {
  let TEST_DIR = ''
  let src = ''
  let dest = ''

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'copy-sync-case-insensitive-paths')
    fs.emptyDir(TEST_DIR, done)
  })

  afterEach(() => fs.removeSync(TEST_DIR))

  describe('> when src is a directory', () => {})

  describe('> when src is a file', () => {})

  describe('> when src is a symlink', () => {})
})

'use strict'

var os = require('os');
var fs = require("../lib/index.js");
var path = require('path');
var assert = require('assert');
var copySync = require("../lib/copy/copy-sync");

/* global afterEach, beforeEach, describe, it */

describe('copy-sync / symlink', () => {
  const TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'copy-sync-symlinks')
  const src = path.join(TEST_DIR, 'src')
  const out = path.join(TEST_DIR, 'out')

  beforeEach(done => {
    fs.emptyDir(TEST_DIR, err => {
      assert.ifError(err)
      createFixtures(src, done)
    })
  })

  afterEach(done => {
    fs.remove(TEST_DIR, done)
  })
})

function createFixtures (srcDir, callback) {
  fs.mkdir(srcDir, err => {
    if (err) return callback(err)

    // note: third parameter in symlinkSync is type e.g. 'file' or 'dir'
    // https://nodejs.org/api/fs.html#fs_fs_symlink_srcpath_dstpath_type_callback
    try {
      const fooFile = path.join(srcDir, 'foo')
      const fooFileLink = path.join(srcDir, 'file-symlink')
      fs.writeFileSync(fooFile, 'foo contents')
      fs.symlinkSync(fooFile, fooFileLink, 'file')

      const dir = path.join(srcDir, 'dir')
      const dirFile = path.join(dir, 'bar')
      const dirLink = path.join(srcDir, 'dir-symlink')
      fs.mkdirSync(dir)
      fs.writeFileSync(dirFile, 'bar contents')
      fs.symlinkSync(dir, dirLink, 'dir')
    } catch (err) {
      callback(err)
    }

    callback()
  })
}

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');
var crypto = require('crypto');

/* global afterEach, beforeEach, describe, it */

var SIZE = 16 * 64 * 1024 + 7;
var TEST_DIR = '';

describe('fs-extra', () => {
  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'copy')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('+ copy()', () => {
    describe('> when src is a file', () => {
      describe('> when the destination dir does not exist', () => {})

      describe('> when dest exists and is a directory', () => {})
    })

    describe('> when src is a directory', () => {
      describe('> when src directory does not exist', () => {})

      describe('> when dest exists and is a file', () => {})

      describe('> when the destination dir does not exist', () => {})

      describe('> when src dir does not exist', () => {
        it('should return an error', done => {
          fse.copy('/does/not/exist', '/something/else', err => {
            assert(err instanceof Error)
            done()
          })
        })
      })
    })

    describe('> when filter is used', () => {
      it('should apply filter when it is applied only to dest', done => {
        const timeCond = new Date().getTime()

        const filter = (s, d) => fs.statSync(d).mtime.getTime() < timeCond

        const src = path.join(TEST_DIR, 'src')
        fse.mkdirsSync(src)
        const subdir = path.join(src, 'subdir')
        fse.mkdirsSync(subdir)

        const dest = path.join(TEST_DIR, 'dest')

        setTimeout(() => {
          fse.mkdirsSync(dest)

          fse.copy(src, dest, filter, err => {
            assert(!err)
            assert(!fs.existsSync(path.join(dest, 'subdir')))
            done()
          })
        }, 1000)
      })

      it('should apply filter when it is applied to both src and dest', done => {
        const timeCond = new Date().getTime()
        const filter = (s, d) => s.split('.').pop() !== 'css' && fs.statSync(path.dirname(d)).mtime.getTime() > timeCond

        const dest = path.join(TEST_DIR, 'dest')
        setTimeout(() => {
          fse.mkdirsSync(dest)

          const srcFile1 = path.join(TEST_DIR, '1.html')
          const srcFile2 = path.join(TEST_DIR, '2.css')
          const srcFile3 = path.join(TEST_DIR, '3.jade')

          fse.writeFileSync(srcFile1, '')
          fse.writeFileSync(srcFile2, '')
          fse.writeFileSync(srcFile3, '')

          const destFile1 = path.join(dest, 'dest1.html')
          const destFile2 = path.join(dest, 'dest2.css')
          const destFile3 = path.join(dest, 'dest3.jade')

          fse.copy(srcFile1, destFile1, filter, err => {
            assert(!err)
            assert(fs.existsSync(destFile1))

            fse.copy(srcFile2, destFile2, filter, err => {
              assert(!err)
              assert(!fs.existsSync(destFile2))

              fse.copy(srcFile3, destFile3, filter, err => {
                assert(!err)
                assert(fs.existsSync(destFile3))
                done()
              })
            })
          })
        }, 1000)
      })
    })
  })
})

'use strict'

// file in reference: https://github.com/jprichardson/node-fs-extra/issues/56

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var ncp = require("../lib/copy/copy");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

// skip test for windows
// eslint-disable globalReturn */
// if (os.platform().indexOf('win') === 0) return
// eslint-enable globalReturn */

describe('ncp / error / dest-permission', () => {
  const TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'ncp-error-dest-perm')
  const src = path.join(TEST_DIR, 'src')
  const dest = path.join(TEST_DIR, 'dest')

  // when we are root, then we will be able to create the subdirectory even if
  // we don't have the permissions to do so, so no point in running this test
  if (os.platform().indexOf('win') === 0 || os.userInfo().uid === 0) return

  beforeEach(done => {
    fse.emptyDir(TEST_DIR, err => {
      assert.ifError(err)
      done()
    })
  })

  afterEach(done => fse.remove(TEST_DIR, done))
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('+ emptyDir()', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'test-fs-extra', 'empty-dir')
    if (fs.existsSync(TEST_DIR)) {
      fse.removeSync(TEST_DIR)
    }
    fse.ensureDirSync(TEST_DIR)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('> when directory exists and contains items', () => {})

  describe('> when directory exists and contains no items', () => {})

  describe('> when directory does not exist', () => {})
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('+ emptyDir()', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'test-fs-extra', 'empty-dir')
    if (fs.existsSync(TEST_DIR)) {
      fse.removeSync(TEST_DIR)
    }
    fse.ensureDirSync(TEST_DIR)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('> when directory exists and contains items', () => {})

  describe('> when directory exists and contains no items', () => {})

  describe('> when directory does not exist', () => {
    it('should create it', done => {
      fse.removeSync(TEST_DIR)
      assert(!fs.existsSync(TEST_DIR))
      fse.emptyDir(TEST_DIR, err => {
        assert.ifError(err)
        assert.strictEqual(fs.readdirSync(TEST_DIR).length, 0)
        done()
      })
    })
  })
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('fs-extra', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'create')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('+ createFile', () => {
    describe('> when the file and directory does not exist', () => {})

    describe('> when the file does exist', () => {})
  })

  describe('+ createFileSync', () => {
    describe('> when the file and directory does not exist', () => {})

    describe('> when the file does exist', () => {})
  })
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('fs-extra', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'ensure')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('+ ensureFile()', () => {
    describe('> when file exists', () => {})

    describe('> when file does not exist', () => {})

    describe('> when there is a directory at that path', () => {})
  })

  describe('+ ensureFileSync()', () => {
    describe('> when file exists', () => {})

    describe('> when file does not exist', () => {})

    describe('> when there is a directory at that path', () => {})
  })

  describe('+ ensureDir()', () => {
    describe('> when dir exists', () => {})

    describe('> when dir does not exist', () => {})
  })

  describe('+ ensureDirSync()', () => {
    describe('> when dir exists', () => {})

    describe('> when dir does not exist', () => {})
  })
})

'use strict'

var CWD = process.cwd();

var fs = require('graceful-fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');
var ensureLink = fse.ensureLink;
var ensureLinkSync = fse.ensureLinkSync;

/* global afterEach, beforeEach, describe, it, after, before */

describe('fse-ensure-link', () => {
  const TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'ensure-symlink')

  const tests = [
    // [[srcpath, dstpath], fs.link expect, ensureLink expect]
    [['./foo.txt', './link.txt'], 'file-success', 'file-success'],
    [['./foo.txt', './dir-foo/link.txt'], 'file-success', 'file-success'],
    [['./foo.txt', './empty-dir/link.txt'], 'file-success', 'file-success'],
    [['./foo.txt', './real-alpha/link.txt'], 'file-success', 'file-success'],
    [['./foo.txt', './real-alpha/real-beta/link.txt'], 'file-success', 'file-success'],
    [['./foo.txt', './real-alpha/real-beta/real-gamma/link.txt'], 'file-success', 'file-success'],
    [['./foo.txt', './alpha/link.txt'], 'file-error', 'file-success'],
    [['./foo.txt', './alpha/beta/link.txt'], 'file-error', 'file-success'],
    [['./foo.txt', './alpha/beta/gamma/link.txt'], 'file-error', 'file-success'],
    [['./foo.txt', './link-foo.txt'], 'file-error', 'file-success'],
    [['./dir-foo/foo.txt', './link-foo.txt'], 'file-error', 'file-error'],
    [['./missing.txt', './link.txt'], 'file-error', 'file-error'],
    [['./missing.txt', './missing-dir/link.txt'], 'file-error', 'file-error'],
    [['./foo.txt', './link.txt'], 'file-success', 'file-success'],
    [['./dir-foo/foo.txt', './link.txt'], 'file-success', 'file-success'],
    [['./missing.txt', './link.txt'], 'file-error', 'file-error'],
    [['../foo.txt', './link.txt'], 'file-error', 'file-error'],
    [['../dir-foo/foo.txt', './link.txt'], 'file-error', 'file-error'],
    // error is thrown if destination path exists
    [['./foo.txt', './dir-foo/foo.txt'], 'file-error', 'file-error'],
    [[path.resolve(path.join(TEST_DIR, './foo.txt')), './link.txt'], 'file-success', 'file-success'],
    [[path.resolve(path.join(TEST_DIR, './dir-foo/foo.txt')), './link.txt'], 'file-success', 'file-success'],
    [[path.resolve(path.join(TEST_DIR, './missing.txt')), './link.txt'], 'file-error', 'file-error'],
    [[path.resolve(path.join(TEST_DIR, '../foo.txt')), './link.txt'], 'file-error', 'file-error'],
    [[path.resolve(path.join(TEST_DIR, '../dir-foo/foo.txt')), './link.txt'], 'file-error', 'file-error']
  ]

  before(() => {
    fse.emptyDirSync(TEST_DIR)
    process.chdir(TEST_DIR)
  })

  beforeEach(() => {
    fs.writeFileSync('./foo.txt', 'foo\n')
    fse.mkdirsSync('empty-dir')
    fse.mkdirsSync('dir-foo')
    fs.writeFileSync('dir-foo/foo.txt', 'dir-foo\n')
    fse.mkdirsSync('dir-bar')
    fs.writeFileSync('dir-bar/bar.txt', 'dir-bar\n')
    fse.mkdirsSync('real-alpha/real-beta/real-gamma')
    fs.linkSync('foo.txt', 'link-foo.txt')
  })

  afterEach(done => fse.emptyDir(TEST_DIR, done))

  after(() => {
    process.chdir(CWD)
    fse.removeSync(TEST_DIR)
  })

  function fileSuccess (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function fileError (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function fileSuccessSync (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function fileErrorSync (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  describe('fs.link()', () => {
    const fn = fs.link
    tests.forEach(test => {
      const args = test[0].slice(0)
      const nativeBehavior = test[1]
      // const newBehavior = test[2]
      if (nativeBehavior === 'file-success') fileSuccess(args, fn)
      if (nativeBehavior === 'file-error') fileError(args, fn)
    })
  })

  describe('ensureLink()', () => {
    const fn = ensureLink
    tests.forEach(test => {
      const args = test[0].slice(0)
      // const nativeBehavior = test[1]
      const newBehavior = test[2]
      if (newBehavior === 'file-success') fileSuccess(args, fn)
      if (newBehavior === 'file-error') fileError(args, fn)
    })
  })

  describe('ensureLink() promise support', () => {
    tests.filter(test => test[2] === 'file-success').forEach(test => {
      const args = test[0].slice(0)
      const srcpath = args[0]
      const dstpath = args[1]
    })
  })

  describe('fs.linkSync()', () => {
    const fn = fs.linkSync
    tests.forEach(test => {
      const args = test[0].slice(0)
      const nativeBehavior = test[1]
      // const newBehavior = test[2]
      if (nativeBehavior === 'file-success') fileSuccessSync(args, fn)
      if (nativeBehavior === 'file-error') fileErrorSync(args, fn)
    })
  })

  describe('ensureLinkSync()', () => {
    const fn = ensureLinkSync
    tests.forEach(test => {
      const args = test[0].slice(0)
      // const nativeBehavior = test[1]
      const newBehavior = test[2]
      if (newBehavior === 'file-success') fileSuccessSync(args, fn)
      if (newBehavior === 'file-error') fileErrorSync(args, fn)
    })
  })
})

'use strict'

var CWD = process.cwd();

var fs = require('graceful-fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');
var _symlinkPaths = require("../lib/ensure/symlink-paths");
var symlinkPaths = _symlinkPaths.symlinkPaths;
var symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
var TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'ensure-symlink');

/* global afterEach, beforeEach, describe, it, after, before */

describe('symlink-type', () => {
  before(() => {
    fse.emptyDirSync(TEST_DIR)
    process.chdir(TEST_DIR)
  })

  beforeEach(() => {
    fs.writeFileSync('./foo.txt', 'foo\n')
    fse.mkdirsSync('./empty-dir')
    fse.mkdirsSync('./dir-foo')
    fs.writeFileSync('./dir-foo/foo.txt', 'dir-foo\n')
    fse.mkdirsSync('./dir-bar')
    fs.writeFileSync('./dir-bar/bar.txt', 'dir-bar\n')
    fse.mkdirsSync('./real-alpha/real-beta/real-gamma')
  })

  afterEach(done => fse.emptyDir(TEST_DIR, done))

  after(() => {
    process.chdir(CWD)
    fse.removeSync(TEST_DIR)
  })

  const tests = [
    [['foo.txt', 'symlink.txt'], { toCwd: 'foo.txt', toDst: 'foo.txt' }], // smart && nodestyle
    [['foo.txt', 'empty-dir/symlink.txt'], { toCwd: 'foo.txt', toDst: '../foo.txt' }], // smart
    [['../foo.txt', 'empty-dir/symlink.txt'], { toCwd: 'foo.txt', toDst: '../foo.txt' }], // nodestyle
    [['foo.txt', 'dir-bar/symlink.txt'], { toCwd: 'foo.txt', toDst: '../foo.txt' }], // smart
    [['../foo.txt', 'dir-bar/symlink.txt'], { toCwd: 'foo.txt', toDst: '../foo.txt' }], // nodestyle
    // this is to preserve node's symlink capability these arguments say create
    // a link to 'dir-foo/foo.txt' this works because it exists this is unlike
    // the previous example with 'empty-dir' because 'empty-dir/foo.txt' does not exist.
    [['foo.txt', 'dir-foo/symlink.txt'], { toCwd: 'dir-foo/foo.txt', toDst: 'foo.txt' }], // nodestyle
    [['foo.txt', 'real-alpha/real-beta/real-gamma/symlink.txt'], { toCwd: 'foo.txt', toDst: '../../../foo.txt' }]
  ]

  // formats paths to pass on multiple operating systems
  tests.forEach(test => {
    test[0][0] = path.join(test[0][0])
    test[0][1] = path.join(test[0][1])
    test[1] = {
      toCwd: path.join(test[1].toCwd),
      toDst: path.join(test[1].toDst)
    }
  })

  describe('symlinkPaths()', () => {
    tests.forEach(test => {
      const args = test[0].slice(0)
      const expectedRelativePaths = test[1]
    })
  })

  describe('symlinkPathsSync()', () => {
    tests.forEach(test => {
      const args = test[0].slice(0)
      const expectedRelativePaths = test[1]
    })
  })
})

'use strict'

var CWD = process.cwd();

var fs = require('graceful-fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');
var _symlinkType = require("../lib/ensure/symlink-type");
var symlinkType = _symlinkType.symlinkType;
var symlinkTypeSync = _symlinkType.symlinkTypeSync;
var TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'ensure-symlink');

/* global afterEach, beforeEach, describe, it, after, before */

describe('symlink-type', () => {
  before(() => {
    fse.emptyDirSync(TEST_DIR)
    process.chdir(TEST_DIR)
  })

  beforeEach(() => {
    fs.writeFileSync('./foo.txt', 'foo\n')
    fse.mkdirsSync('./empty-dir')
    fse.mkdirsSync('./dir-foo')
    fs.writeFileSync('./dir-foo/foo.txt', 'dir-foo\n')
    fse.mkdirsSync('./dir-bar')
    fs.writeFileSync('./dir-bar/bar.txt', 'dir-bar\n')
    fse.mkdirsSync('./real-alpha/real-beta/real-gamma')
  })

  afterEach(done => fse.emptyDir(TEST_DIR, done))

  after(() => {
    process.chdir(CWD)
    fse.removeSync(TEST_DIR)
  })

  const tests = {
    success: [
      // [{arguments} [srcpath, dirpath, [type] , result]
      // smart file type checking
      [['./foo.txt'], 'file'],
      [['./empty-dir'], 'dir'],
      [['./dir-foo/foo.txt'], 'file'],
      [['./dir-bar'], 'dir'],
      [['./dir-bar/bar.txt'], 'file'],
      [['./real-alpha/real-beta/real-gamma'], 'dir'],
      // force dir
      [['./foo.txt', 'dir'], 'dir'],
      [['./empty-dir', 'dir'], 'dir'],
      [['./dir-foo/foo.txt', 'dir'], 'dir'],
      [['./dir-bar', 'dir'], 'dir'],
      [['./dir-bar/bar.txt', 'dir'], 'dir'],
      [['./real-alpha/real-beta/real-gamma', 'dir'], 'dir'],
      // force file
      [['./foo.txt', 'file'], 'file'],
      [['./empty-dir', 'file'], 'file'],
      [['./dir-foo/foo.txt', 'file'], 'file'],
      [['./dir-bar', 'file'], 'file'],
      [['./dir-bar/bar.txt', 'file'], 'file'],
      [['./real-alpha/real-beta/real-gamma', 'file'], 'file'],
      // default for files or dirs that don't exist is file
      [['./missing.txt'], 'file'],
      [['./missing'], 'file'],
      [['./missing.txt'], 'file'],
      [['./missing'], 'file'],
      [['./empty-dir/missing.txt'], 'file'],
      [['./empty-dir/missing'], 'file'],
      [['./empty-dir/missing.txt'], 'file'],
      [['./empty-dir/missing'], 'file'],
      // when src doesnt exist and provided type 'file'
      [['./missing.txt', 'file'], 'file'],
      [['./missing', 'file'], 'file'],
      [['./missing.txt', 'file'], 'file'],
      [['./missing', 'file'], 'file'],
      [['./empty-dir/missing.txt', 'file'], 'file'],
      [['./empty-dir/missing', 'file'], 'file'],
      [['./empty-dir/missing.txt', 'file'], 'file'],
      [['./empty-dir/missing', 'file'], 'file'],
      // when src doesnt exist and provided type 'dir'
      [['./missing.txt', 'dir'], 'dir'],
      [['./missing', 'dir'], 'dir'],
      [['./missing.txt', 'dir'], 'dir'],
      [['./missing', 'dir'], 'dir'],
      [['./empty-dir/missing.txt', 'dir'], 'dir'],
      [['./empty-dir/missing', 'dir'], 'dir'],
      [['./empty-dir/missing.txt', 'dir'], 'dir'],
      [['./empty-dir/missing', 'dir'], 'dir']
    ]
  }

  describe('symlinkType()', () => {
    tests.success.forEach(test => {
      const args = test[0].slice(0)
      const expectedType = test[1]
    })
  })

  describe('symlinkTypeSync()', () => {
    tests.success.forEach(test => {
      const args = test[0]
      const expectedType = test[1]
    })
  })
})

'use strict'

var CWD = process.cwd();

var fs = require('graceful-fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');
var _symlinkPaths = require("../lib/ensure/symlink-paths");
var symlinkPathsSync = _symlinkPaths.symlinkPathsSync;
var ensureSymlink = fse.ensureSymlink;
var ensureSymlinkSync = fse.ensureSymlinkSync;

/* global afterEach, beforeEach, describe, it, after, before */

var TEST_DIR;

describe('fse-ensure-symlink', () => {
  TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'ensure-symlink')

  const tests = [
    // [[srcpath, dstpath], fs.symlink expect, fse.ensureSymlink expect]
    [['./foo.txt', './symlink.txt'], 'file-success', 'file-success'],
    [['../foo.txt', './empty-dir/symlink.txt'], 'file-success', 'file-success'],
    [['../foo.txt', './empty-dir/symlink.txt'], 'file-success', 'file-success'],
    [['./foo.txt', './dir-foo/symlink.txt'], 'file-success', 'file-success'],
    [['./foo.txt', './empty-dir/symlink.txt'], 'file-broken', 'file-success'],
    [['./foo.txt', './real-alpha/symlink.txt'], 'file-broken', 'file-success'],
    [['./foo.txt', './real-alpha/real-beta/symlink.txt'], 'file-broken', 'file-success'],
    [['./foo.txt', './real-alpha/real-beta/real-gamma/symlink.txt'], 'file-broken', 'file-success'],
    [['./foo.txt', './alpha/symlink.txt'], 'file-error', 'file-success'],
    [['./foo.txt', './alpha/beta/symlink.txt'], 'file-error', 'file-success'],
    [['./foo.txt', './alpha/beta/gamma/symlink.txt'], 'file-error', 'file-success'],
    [['./foo.txt', './real-symlink.txt'], 'file-error', 'file-success'],
    [['./dir-foo/foo.txt', './real-symlink.txt'], 'file-error', 'file-error'],
    [['./missing.txt', './symlink.txt'], 'file-broken', 'file-error'],
    [['./missing.txt', './missing-dir/symlink.txt'], 'file-error', 'file-error'],
    // error is thrown if destination path exists
    [['./foo.txt', './dir-foo/foo.txt'], 'file-error', 'file-error'],
    [['./dir-foo', './symlink-dir-foo'], 'dir-success', 'dir-success'],
    [['../dir-bar', './dir-foo/symlink-dir-bar'], 'dir-success', 'dir-success'],
    [['./dir-bar', './dir-foo/symlink-dir-bar'], 'dir-broken', 'dir-success'],
    [['./dir-bar', './empty-dir/symlink-dir-bar'], 'dir-broken', 'dir-success'],
    [['./dir-bar', './real-alpha/symlink-dir-bar'], 'dir-broken', 'dir-success'],
    [['./dir-bar', './real-alpha/real-beta/symlink-dir-bar'], 'dir-broken', 'dir-success'],
    [['./dir-bar', './real-alpha/real-beta/real-gamma/symlink-dir-bar'], 'dir-broken', 'dir-success'],
    [['./dir-foo', './alpha/dir-foo'], 'dir-error', 'dir-success'],
    [['./dir-foo', './alpha/beta/dir-foo'], 'dir-error', 'dir-success'],
    [['./dir-foo', './alpha/beta/gamma/dir-foo'], 'dir-error', 'dir-success'],
    [['./dir-foo', './real-symlink-dir-foo'], 'dir-error', 'dir-success'],
    [['./dir-bar', './real-symlink-dir-foo'], 'dir-error', 'dir-error'],
    [['./missing', './dir-foo/symlink-dir-missing'], 'dir-broken', 'dir-error'],
    // error is thrown if destination path exists
    [['./dir-foo', './real-alpha/real-beta'], 'dir-error', 'dir-error'],
    [[path.resolve(path.join(TEST_DIR, './foo.txt')), './symlink.txt'], 'file-success', 'file-success'],
    [[path.resolve(path.join(TEST_DIR, './dir-foo/foo.txt')), './symlink.txt'], 'file-success', 'file-success'],
    [[path.resolve(path.join(TEST_DIR, './missing.txt')), './symlink.txt'], 'file-broken', 'file-error'],
    [[path.resolve(path.join(TEST_DIR, '../foo.txt')), './symlink.txt'], 'file-broken', 'file-error'],
    [[path.resolve(path.join(TEST_DIR, '../dir-foo/foo.txt')), './symlink.txt'], 'file-broken', 'file-error']
  ]

  before(() => {
    fse.emptyDirSync(TEST_DIR)
    process.chdir(TEST_DIR)
  })

  beforeEach(() => {
    fs.writeFileSync('./foo.txt', 'foo\n')
    fse.mkdirsSync('empty-dir')
    fse.mkdirsSync('dir-foo')
    fs.writeFileSync('dir-foo/foo.txt', 'dir-foo\n')
    fse.mkdirsSync('dir-bar')
    fs.writeFileSync('dir-bar/bar.txt', 'dir-bar\n')
    fse.mkdirsSync('real-alpha/real-beta/real-gamma')
    fs.symlinkSync('foo.txt', 'real-symlink.txt')
    fs.symlinkSync('dir-foo', 'real-symlink-dir-foo')
  })

  afterEach(done => fse.emptyDir(TEST_DIR, done))

  after(() => {
    process.chdir(CWD)
    fse.removeSync(TEST_DIR)
  })

  function fileSuccess (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function fileBroken (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function fileError (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function dirSuccess (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function dirBroken (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function dirError (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function fileSuccessSync (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function fileBrokenSync (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function fileErrorSync (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function dirSuccessSync (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function dirBrokenSync (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  function dirErrorSync (args, fn) {
    const srcpath = args[0]
    const dstpath = args[1]
  }

  describe('ensureSymlink()', () => {
    const fn = ensureSymlink
    tests.forEach(test => {
      const args = test[0]
      // const nativeBehavior = test[1]
      const newBehavior = test[2]
      if (newBehavior === 'file-success') fileSuccess(args, fn)
      if (newBehavior === 'file-broken') fileBroken(args, fn)
      if (newBehavior === 'file-error') fileError(args, fn)
      if (newBehavior === 'dir-success') dirSuccess(args, fn)
      if (newBehavior === 'dir-broken') dirBroken(args, fn)
      if (newBehavior === 'dir-error') dirError(args, fn)
    })
  })

  describe('ensureSymlink() promise support', () => {
    tests.filter(test => test[2] === 'file-success').forEach(test => {
      const args = test[0]
      const srcpath = args[0]
      const dstpath = args[1]
    })
  })

  describe('ensureSymlinkSync()', () => {
    const fn = ensureSymlinkSync
    tests.forEach(test => {
      const args = test[0]
      // const nativeBehavior = test[1]
      const newBehavior = test[2]
      if (newBehavior === 'file-success') fileSuccessSync(args, fn)
      if (newBehavior === 'file-broken') fileBrokenSync(args, fn)
      if (newBehavior === 'file-error') fileErrorSync(args, fn)
      if (newBehavior === 'dir-success') dirSuccessSync(args, fn)
      if (newBehavior === 'dir-broken') dirBrokenSync(args, fn)
      if (newBehavior === 'dir-error') dirErrorSync(args, fn)
    })
  })
})

'use strict'

var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* eslint-env mocha */

describe('fs.copyFile', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'fs-copyfile')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))
})

'use strict'

var os = require('os');
var fs = require('fs');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('native fs', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'native-fs')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))
})

'use strict'

var fse = require("../lib/index.js");
var os = require('os');
var path = require('path');
var assert = require('assert');

/* eslint-env mocha */

describe('fs.rm', () => {
  let TEST_FILE

  beforeEach(done => {
    TEST_FILE = path.join(os.tmpdir(), 'fs-extra', 'fs-rm')
    fse.remove(TEST_FILE, done)
  })

  afterEach(done => fse.remove(TEST_FILE, done))
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('jsonfile-integration', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'json')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('+ writeJsonSync / spaces', () => {})

  describe('+ writeJsonSync / EOL', () => {})
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('json promise support', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'json')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  ;['writeJson', 'writeJSON'].forEach(method => {
    describe(method, () => {})
  })
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('read', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'read-json')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('+ readJSON', () => {})
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('mkdirp / chmod', () => {
  let TEST_DIR
  let TEST_SUBDIR

  beforeEach(done => {
    const ps = []
    for (let i = 0; i < 15; i++) {
      const dir = Math.floor(Math.random() * Math.pow(16, 4)).toString(16)
      ps.push(dir)
    }

    TEST_SUBDIR = ps.join(path.sep)

    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'mkdirp-chmod')
    TEST_SUBDIR = path.join(TEST_DIR, TEST_SUBDIR)

    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global before, describe, it */

describe('mkdirp / clobber', () => {
  let TEST_DIR
  let file

  before(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'mkdirp-clobber')
    fse.emptyDir(TEST_DIR, err => {
      assert.ifError(err)

      const ps = [TEST_DIR]

      for (let i = 0; i < 15; i++) {
        const dir = Math.floor(Math.random() * Math.pow(16, 4)).toString(16)
        ps.push(dir)
      }

      file = ps.join(path.sep)

      // a file in the way
      const itw = ps.slice(0, 2).join(path.sep)

      fs.writeFileSync(itw, 'I AM IN THE WAY, THE TRUTH, AND THE LIGHT.')

      fs.stat(itw, (err, stat) => {
        assert.ifError(err)
        assert.ok(stat && stat.isFile(), 'should be file')
        done()
      })
    })
  })

  it('should clobber', done => {
    fse.mkdirp(file, 0o755, err => {
      assert.ok(err)
      assert.strictEqual(err.code, 'ENOTDIR')
      done()
    })
  })
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('fs-extra', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'mkdir')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('+ mkdirs()', () => {})

  describe('+ mkdirsSync()', () => {})
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('mkdirp / mkdirp', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'mkdirp')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('mkdirp / perm', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'mkdirp-perm')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('mkdirp / perm_sync', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'mkdirp-perm-sync')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('mkdirp / race', () => {
  let TEST_DIR
  let file

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'mkdirp-race')
    fse.emptyDir(TEST_DIR, err => {
      assert.ifError(err)

      const ps = [TEST_DIR]

      for (let i = 0; i < 15; i++) {
        const dir = Math.floor(Math.random() * Math.pow(16, 4)).toString(16)
        ps.push(dir)
      }

      file = path.join(...ps)
      done()
    })
  })

  afterEach(done => fse.remove(TEST_DIR, done))
})

'use strict'

var fs = require('fs');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global describe, it */

describe('mkdirp / root', () => {
  // '/' on unix
  const dir = path.normalize(path.resolve(path.sep)).toLowerCase()

  // Windows does not have permission to mkdir on root
  if (process.platform === 'win32') return

  it('should', done => {
    fse.mkdirp(dir, 0o755, err => {
      if (err) return done(err)
      fs.stat(dir, (er, stat) => {
        if (er) return done(er)
        assert.ok(stat.isDirectory(), 'target is a directory')
        done()
      })
    })
  })
})

'use strict'

var fs = require('graceful-fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');
var { differentDevice, ifCrossDeviceEnabled } = require("../lib/move/__tests__/cross-device-utils");

/* global afterEach, beforeEach, describe, it */

var describeIfWindows = process.platform === 'win32' ? describe : describe.skip;

function createAsyncErrFn (errCode) {
  const fn = function (...args) {
    fn.callCount++
    const callback = args.pop()
    setTimeout(() => {
      const err = new Error()
      err.code = errCode
      callback(err)
    }, 10)
  }
  fn.callCount = 0
  return fn
}

var originalRename = fs.rename;

function setUpMockFs (errCode) {
  fs.rename = createAsyncErrFn(errCode)
}

function tearDownMockFs () {
  fs.rename = originalRename
}

describe('+ move()', () => {
  let TEST_DIR

  beforeEach(() => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'move')

    fse.emptyDirSync(TEST_DIR)

    // Create fixtures:
    fs.writeFileSync(path.join(TEST_DIR, 'a-file'), 'sonic the hedgehog\n')
    fs.mkdirSync(path.join(TEST_DIR, 'a-folder'))
    fs.writeFileSync(path.join(TEST_DIR, 'a-folder/another-file'), 'tails\n')
    fs.mkdirSync(path.join(TEST_DIR, 'a-folder/another-folder'))
    fs.writeFileSync(path.join(TEST_DIR, 'a-folder/another-folder/file3'), 'knuckles\n')
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('> when overwrite = true', () => {})

  describe('> when overwrite = false', () => {})

  describe('> when opts is explicit undefined', () => {})

  describeIfWindows('> when dest parent is root', () => {
    let dest

    afterEach(done => fse.remove(dest, done))
  })

  describe('> clobber', () => {})

  describe('> when trying to move a folder into itself', () => {})

  // tested on Linux ubuntu 3.13.0-32-generic #57-Ubuntu SMP i686 i686 GNU/Linux
  // this won't trigger a bug on Mac OS X Yosimite with a USB drive (/Volumes)
  // see issue #108
  ifCrossDeviceEnabled(describe)('> when actually trying to move a folder across devices', () => {
    describe('>> just the folder', () => {})
  })
})

'use strict'

var fs = require('fs');
var os = require('os');
var fse = require("../lib/index.js");
var path = require('path');
var assert = require('assert');

/* global afterEach, beforeEach, describe, it */

describe('output', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'output')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('+ outputFile', () => {
    describe('> when the file and directory does not exist', () => {})

    describe('> when the file does exist', () => {})
  })

  describe('+ outputFileSync', () => {
    describe('> when the file and directory does not exist', () => {})

    describe('> when the file does exist', () => {})
  })
})

'use strict'
/* eslint-env mocha */

var fs = require("../lib/index.js");
var path = require('path');
var os = require('os');
var assert = require('assert');

describe('pathExists()', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'path-exists')
    fs.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fs.remove(TEST_DIR, done))
})

'use strict'

var assert = require('assert');
var fs = require('fs');
var os = require('os');
var path = require('path');
var randomBytes = require('crypto').randomBytes;
var fse = require("../lib/index.js");

/* global afterEach, beforeEach, describe, it */

var TEST_DIR;

function buildFixtureDir () {
  const buf = randomBytes(5)
  const baseDir = path.join(TEST_DIR, `TEST_fs-extra_remove-${Date.now()}`)

  fs.mkdirSync(baseDir)
  fs.writeFileSync(path.join(baseDir, Math.random() + ''), buf)
  fs.writeFileSync(path.join(baseDir, Math.random() + ''), buf)

  const subDir = path.join(TEST_DIR, Math.random() + '')
  fs.mkdirSync(subDir)
  fs.writeFileSync(path.join(subDir, Math.random() + ''), buf)
  return baseDir
}

describe('remove', () => {
  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'remove')
    fse.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fse.remove(TEST_DIR, done))

  describe('+ remove()', () => {})
})

'use strict'

var fs = require("../lib/index.js");
var os = require('os');
var path = require('path');
var assert = require('assert');
var stat = require("../lib/util/stat.js");

/* global beforeEach, afterEach, describe, it */

describe('util/stat', () => {
  let TEST_DIR

  beforeEach(done => {
    TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'util-stat')
    fs.emptyDir(TEST_DIR, done)
  })

  afterEach(done => fs.remove(TEST_DIR, done))

  describe('should use stats with bigint type', () => {})

  describe('should stop at src or root path and not throw max call stack size error', () => {})
})

'use strict'

var fs = require('fs');
var ncp = require("../lib/copy/copy");
var path = require('path');
var rimraf = require('rimraf');
var assert = require('assert');
var readDirFiles = require('read-dir-files').read; // temporary, will remove

/* eslint-env mocha */

var fixturesDir = path.join(__dirname, 'fixtures');

describe('ncp', () => {
  describe('regular files and directories', () => {
    const fixtures = path.join(fixturesDir, 'regular-fixtures')
    const src = path.join(fixtures, 'src')
    const out = path.join(fixtures, 'out')

    before(cb => rimraf(out, () => ncp(src, out, cb)))

    describe('when copying a directory of files', () => {})

    describe('when copying files using filter', () => {
      before(cb => {
        const filter = name => name.slice(-1) !== 'a'

        rimraf(out, () => ncp(src, out, { filter }, cb))
      })
    })

    describe('when using overwrite=true', () => {
      before(function () {
        this.originalCreateReadStream = fs.createReadStream
      })

      after(function () {
        fs.createReadStream = this.originalCreateReadStream
      })
    })

    describe('when using overwrite=false', () => {
      beforeEach(done => rimraf(out, done))
    })

    describe('clobber', () => {
      beforeEach(done => rimraf(out, done))
    })

    describe('when using transform', () => {})
  })

  // see https://github.com/AvianFlu/ncp/issues/71
  describe('Issue 71: Odd Async Behaviors', () => {
    const fixtures = path.join(__dirname, 'fixtures', 'regular-fixtures')
    const src = path.join(fixtures, 'src')
    const out = path.join(fixtures, 'out')

    let totalCallbacks = 0

    function copyAssertAndCount (callback) {
      // rimraf(out, function() {
      ncp(src, out, err => {
        assert(!err)
        totalCallbacks += 1
        readDirFiles(src, 'utf8', (srcErr, srcFiles) => {
          readDirFiles(out, 'utf8', (outErr, outFiles) => {
            assert.ifError(srcErr)
            assert.deepStrictEqual(srcFiles, outFiles)
            callback()
          })
        })
      })
      // })
    }

    describe('when copying a directory of files without cleaning the destination', () => {})
  })
})

