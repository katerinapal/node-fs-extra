var fs = require('graceful-fs');
var path = require('path');

var { CROSS_DEVICE_PATH } = process.env;
var runCrossDeviceTests = !!CROSS_DEVICE_PATH;

if (runCrossDeviceTests) {
  // make sure we have permission on device
  try {
    fs.writeFileSync(path.join(CROSS_DEVICE_PATH, 'file'), 'hi')
  } catch {
    runCrossDeviceTests = false
    throw new Error(`Can't write to device ${CROSS_DEVICE_PATH}`)
  }
} else console.log('Skipping cross-device move tests')

module.exports = {
  differentDevice: CROSS_DEVICE_PATH,
  ifCrossDeviceEnabled: (fn) => runCrossDeviceTests ? fn : fn.skip
}


'use strict'

var assert = require('assert');
var os = require('os');
var path = require('path');
var fs = require('../lib/index.js');
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

describe('+ moveSync() - prevent moving into itself', () => {
  let TEST_DIR, src

  beforeEach(done => {
    
    //TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'move-sync-prevent-moving-into-itself')
    
    TEST_DIR = path.join('./', 'fs-extra', 'move-sync-prevent-moving-into-itself')

    src = path.join(TEST_DIR, 'src')
    fs.mkdirpSync(src)

    fs.outputFileSync(path.join(src, FILES[0]), dat0)
    fs.outputFileSync(path.join(src, FILES[1]), dat1)
    fs.outputFileSync(path.join(src, FILES[2]), dat2)
    fs.outputFileSync(path.join(src, FILES[3]), dat3)
    done()
  })

  //afterEach(done => fs.remove(TEST_DIR, done))

  describe('> when source is a file', () => {
    it('should move the file successfully even if dest parent is a subdir of src', () => {
      const srcFile = path.join(TEST_DIR, 'src', 'srcfile.txt')
      const destFile = path.join(TEST_DIR, 'src', 'dest', 'destfile.txt')
      fs.writeFileSync(srcFile, dat0)

      fs.moveSync(srcFile, destFile)

      assert(fs.existsSync(destFile))
      const out = fs.readFileSync(destFile, 'utf8')
      assert.strictEqual(out, dat0, 'file contents matched')
    })
  })

  describe('> when source is a file', () => {
    it("should move the file successfully even when dest parent is 'src/dest'", () => {
      const destFile = path.join(TEST_DIR, 'src', 'dest', 'destfile.txt')
      return testSuccessFile(src, destFile)
    })

    it("should move the file successfully when dest parent is 'src/src_dest'", () => {
      const destFile = path.join(TEST_DIR, 'src', 'src_dest', 'destfile.txt')
      return testSuccessFile(src, destFile)
    })

    it("should move the file successfully when dest parent is 'src/dest_src'", () => {
      const destFile = path.join(TEST_DIR, 'src', 'dest_src', 'destfile.txt')
      return testSuccessFile(src, destFile)
    })

    it("should move the file successfully when dest parent is 'src/dest/src'", () => {
      const destFile = path.join(TEST_DIR, 'src', 'dest', 'src', 'destfile.txt')
      return testSuccessFile(src, destFile)
    })

    it("should move the file successfully when dest parent is 'srcsrc/dest'", () => {
      const destFile = path.join(TEST_DIR, 'srcsrc', 'dest', 'destfile.txt')
      return testSuccessFile(src, destFile)
    })
  })

  describe('> when source is a directory', () => {
    describe('>> when dest is a directory', () => {
      it('of not itself', () => {
        const dest = path.join(TEST_DIR, src.replace(/^\w:/, ''))
        return testSuccessDir(src, dest)
      })
      it('of itself', () => {
        const dest = path.join(src, 'dest')
        return testError(src, dest)
      })
      it("should move the directory successfully when dest is 'src_dest'", () => {
        const dest = path.join(TEST_DIR, 'src_dest')
        return testSuccessDir(src, dest)
      })
      it("should move the directory successfully when dest is 'src-dest'", () => {
        const dest = path.join(TEST_DIR, 'src-dest')
        return testSuccessDir(src, dest)
      })

      it("should move the directory successfully when dest is 'dest_src'", () => {
        const dest = path.join(TEST_DIR, 'dest_src')
        return testSuccessDir(src, dest)
      })

      it("should move the directory successfully when dest is 'src_dest/src'", () => {
        const dest = path.join(TEST_DIR, 'src_dest', 'src')
        return testSuccessDir(src, dest)
      })

      it("should move the directory successfully when dest is 'src-dest/src'", () => {
        const dest = path.join(TEST_DIR, 'src-dest', 'src')
        return testSuccessDir(src, dest)
      })

      it("should move the directory successfully when dest is 'dest_src/src'", () => {
        const dest = path.join(TEST_DIR, 'dest_src', 'src')
        return testSuccessDir(src, dest)
      })

      it("should move the directory successfully when dest is 'src_src/dest'", () => {
        const dest = path.join(TEST_DIR, 'src_src', 'dest')
        return testSuccessDir(src, dest)
      })

      it("should move the directory successfully when dest is 'src-src/dest'", () => {
        const dest = path.join(TEST_DIR, 'src-src', 'dest')
        return testSuccessDir(src, dest)
      })

      it("should move the directory successfully when dest is 'srcsrc/dest'", () => {
        const dest = path.join(TEST_DIR, 'srcsrc', 'dest')
        return testSuccessDir(src, dest)
      })

      it("should move the directory successfully when dest is 'dest/src'", () => {
        const dest = path.join(TEST_DIR, 'dest', 'src')
        return testSuccessDir(src, dest)
      })

      it('should move the directory successfully when dest is very nested that all its parents need to be created', () => {
        const dest = path.join(TEST_DIR, 'dest', 'src', 'foo', 'bar', 'baz', 'qux', 'quux', 'waldo',
          'grault', 'garply', 'fred', 'plugh', 'thud', 'some', 'highly', 'deeply',
          'badly', 'nasty', 'crazy', 'mad', 'nested', 'dest')
        return testSuccessDir(src, dest)
      })

      it("should error when dest is 'src/dest'", () => {
        const dest = path.join(TEST_DIR, 'src', 'dest')
        return testError(src, dest)
      })

      it("should error when dest is 'src/src_dest'", () => {
        const dest = path.join(TEST_DIR, 'src', 'src_dest')
        return testError(src, dest)
      })

      it("should error when dest is 'src/dest_src'", () => {
        const dest = path.join(TEST_DIR, 'src', 'dest_src')
        return testError(src, dest)
      })

      it("should error when dest is 'src/dest/src'", () => {
        const dest = path.join(TEST_DIR, 'src', 'dest', 'src')
        return testError(src, dest)
      })
    })

    describe('>> when dest is a symlink', () => {
      it('should error when dest points exactly to src and dereference is true', () => {
        const destLink = path.join(TEST_DIR, 'dest-symlink')
        fs.symlinkSync(src, destLink, 'dir')

        const srclenBefore = klawSync(src).length
        assert(srclenBefore > 2)
        let errThrown = false
        try {
          fs.moveSync(src, destLink, { dereference: true })
        } catch (err) {
          assert.strictEqual(err.message, 'Source and destination must not be the same.')
          errThrown = true
        } finally {
          assert(errThrown)
          const srclenAfter = klawSync(src).length
          assert.strictEqual(srclenAfter, srclenBefore, 'src length should not change')
          const link = fs.readlinkSync(destLink)
          assert.strictEqual(link, src)
        }
      })

      it('should error when dest is a subdirectory of src (bind-mounted directory with subdirectory)', () => {
        const destLink = path.join(TEST_DIR, 'dest-symlink')
        fs.symlinkSync(src, destLink, 'dir')

        const srclenBefore = klawSync(src).length
        assert(srclenBefore > 2)

        const dest = path.join(destLink, 'dir1')
        assert(fs.existsSync(dest))
        let errThrown = false
        try {
          fs.moveSync(src, dest)
        } catch (err) {
          assert.strictEqual(err.message, `Cannot move '${src}' to a subdirectory of itself, '${dest}'.`)
          errThrown = true
        } finally {
          assert(errThrown)
          const srclenAfter = klawSync(src).length
          assert.strictEqual(srclenAfter, srclenBefore, 'src length should not change')
          const link = fs.readlinkSync(destLink)
          assert.strictEqual(link, src)
        }
      })

      it('should error when dest is a subdirectory of src (more than one level depth)', () => {
        const destLink = path.join(TEST_DIR, 'dest-symlink')
        fs.symlinkSync(src, destLink, 'dir')

        const srclenBefore = klawSync(src).length
        assert(srclenBefore > 2)

        const dest = path.join(destLink, 'dir1', 'dir2')
        assert(fs.existsSync(dest))
        let errThrown = false
        try {
          fs.moveSync(src, dest)
        } catch (err) {
          assert.strictEqual(err.message, `Cannot move '${src}' to a subdirectory of itself, '${path.join(destLink, 'dir1')}'.`)
          errThrown = true
        } finally {
          assert(errThrown)
          const srclenAfter = klawSync(src).length
          assert.strictEqual(srclenAfter, srclenBefore, 'src length should not change')
          const link = fs.readlinkSync(destLink)
          assert.strictEqual(link, src)
        }
      })
    })
  })

  describe('> when source is a symlink', () => {
    describe('>> when dest is a directory', () => {
      it('should error when resolved src path points to dest', () => {
        const srcLink = path.join(TEST_DIR, 'src-symlink')
        fs.symlinkSync(src, srcLink, 'dir')

        const dest = path.join(TEST_DIR, 'src')
        let errThrown = false
        try {
          fs.moveSync(srcLink, dest)
        } catch (err) {
          assert(err)
          errThrown = true
        } finally {
          assert(errThrown)
          // assert source not affected
          const link = fs.readlinkSync(srcLink)
          assert.strictEqual(link, src)
        }
      })

      it('should error when dest is a subdir of resolved src path', () => {
        const srcLink = path.join(TEST_DIR, 'src-symlink')
        fs.symlinkSync(src, srcLink, 'dir')

        const dest = path.join(TEST_DIR, 'src', 'some', 'nested', 'dest')
        fs.mkdirsSync(dest)
        let errThrown = false
        try {
          fs.moveSync(srcLink, dest)
        } catch (err) {
          assert(err)
          errThrown = true
        } finally {
          assert(errThrown)
          const link = fs.readlinkSync(srcLink)
          assert.strictEqual(link, src)
        }
      })

      it('should error when resolved src path is a subdir of dest', () => {
        const dest = path.join(TEST_DIR, 'dest')

        const resolvedSrcPath = path.join(dest, 'contains', 'src')
        const srcLink = path.join(TEST_DIR, 'src-symlink')
        fs.copySync(src, resolvedSrcPath)

        // make symlink that points to a subdir in dest
        fs.symlinkSync(resolvedSrcPath, srcLink, 'dir')

        let errThrown = false
        try {
          fs.moveSync(srcLink, dest)
        } catch (err) {
          assert(err)
          errThrown = true
        } finally {
          assert(errThrown)
        }
      })

      it("should move the directory successfully when dest is 'src_src/dest'", () => {
        const srcLink = path.join(TEST_DIR, 'src-symlink')
        fs.symlinkSync(src, srcLink, 'dir')

        const dest = path.join(TEST_DIR, 'src_src', 'dest')
        testSuccessDir(srcLink, dest)
        const link = fs.readlinkSync(dest)
        assert.strictEqual(link, src)
      })

      it("should move the directory successfully when dest is 'srcsrc/dest'", () => {
        const srcLink = path.join(TEST_DIR, 'src-symlink')
        fs.symlinkSync(src, srcLink, 'dir')

        const dest = path.join(TEST_DIR, 'srcsrc', 'dest')
        testSuccessDir(srcLink, dest)
        const link = fs.readlinkSync(dest)
        assert.strictEqual(link, src)
      })
    })

    describe('>> when dest is a symlink', () => {
      it('should error when resolved dest path is exactly the same as resolved src path and dereferene is true', () => {
        const srcLink = path.join(TEST_DIR, 'src-symlink')
        fs.symlinkSync(src, srcLink, 'dir')
        const destLink = path.join(TEST_DIR, 'dest-symlink')
        fs.symlinkSync(src, destLink, 'dir')

        const srclenBefore = klawSync(srcLink).length
        const destlenBefore = klawSync(destLink).length
        assert(srclenBefore > 2)
        assert(destlenBefore > 2)
        let errThrown = false
        try {
          fs.moveSync(srcLink, destLink, { dereference: true })
        } catch (err) {
          assert.strictEqual(err.message, 'Source and destination must not be the same.')
          errThrown = true
        } finally {
          assert(errThrown)
          const srclenAfter = klawSync(srcLink).length
          assert.strictEqual(srclenAfter, srclenBefore, 'src length should not change')
          const destlenAfter = klawSync(destLink).length
          assert.strictEqual(destlenAfter, destlenBefore, 'dest length should not change')

          const srcln = fs.readlinkSync(srcLink)
          assert.strictEqual(srcln, src)
          const destln = fs.readlinkSync(destLink)
          assert.strictEqual(destln, src)
        }
      })
    })
  })
})

function testSuccessFile (src, destFile) {
  const srcFile = path.join(src, FILES[0])

  fs.moveSync(srcFile, destFile)
  const f0 = fs.readFileSync(destFile, 'utf8')
  assert.strictEqual(f0, dat0, 'file contents matched')
  assert(!fs.existsSync(srcFile))
}

function testSuccessDir (src, dest) {
  const srclen = klawSync(src).length

  assert(srclen > 2) // assert src has contents

  fs.moveSync(src, dest)
  const destlen = klawSync(dest).length

  assert.strictEqual(destlen, srclen, 'src and dest length should be equal')

  const f0 = fs.readFileSync(path.join(dest, FILES[0]), 'utf8')
  const f1 = fs.readFileSync(path.join(dest, FILES[1]), 'utf8')
  const f2 = fs.readFileSync(path.join(dest, FILES[2]), 'utf8')
  const f3 = fs.readFileSync(path.join(dest, FILES[3]), 'utf8')

  assert.strictEqual(f0, dat0, 'file contents matched')
  assert.strictEqual(f1, dat1, 'file contents matched')
  assert.strictEqual(f2, dat2, 'file contents matched')
  assert.strictEqual(f3, dat3, 'file contents matched')
  assert(!fs.existsSync(src))
}

function testError (src, dest) {
  let errThrown = false
  try {
    fs.moveSync(src, dest)
  } catch (err) {
    assert.strictEqual(err.message, `Cannot move '${src}' to a subdirectory of itself, '${dest}'.`)
    assert(fs.existsSync(src))
    assert(!fs.existsSync(dest))
    errThrown = true
  } finally {
    assert(errThrown)
  }
}


'use strict'

// TODO: enable this once graceful-fs supports bigint option.
// const fs = require('graceful-fs')
var fs = require('fs');
var os = require('os');
var fse = require('../lib/index.js');
var path = require('path');
var assert = require('assert');
var { differentDevice, ifCrossDeviceEnabled } = require('./cross-device-utils.js');

/* global afterEach, beforeEach, describe, it */

var describeIfWindows = process.platform === 'win32' ? describe : describe.skip;

function createSyncErrFn (errCode) {
  const fn = function () {
    const err = new Error()
    err.code = errCode
    throw err
  }
  return fn
}

var originalRenameSync = fs.renameSync;

function setUpMockFs (errCode) {
  fs.renameSync = createSyncErrFn(errCode)
}

function tearDownMockFs () {
  fs.renameSync = originalRenameSync
}

describe('moveSync()', () => {
  let TEST_DIR

  beforeEach(() => {
    
    //TEST_DIR = path.join(os.tmpdir(), 'fs-extra', 'move-sync')

    TEST_DIR = path.join('./', 'fs-extra', 'move-sync')

    fse.emptyDirSync(TEST_DIR)

    // Create fixtures
    fse.outputFileSync(path.join(TEST_DIR, 'a-file'), 'sonic the hedgehog\n')
    fse.outputFileSync(path.join(TEST_DIR, 'a-folder/another-file'), 'tails\n')
    fse.outputFileSync(path.join(TEST_DIR, 'a-folder/another-folder/file3'), 'knuckles\n')
  })

  //afterEach(() => fse.removeSync(TEST_DIR))

  it('should not move if src and dest are the same', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-file`

    let errThrown = false
    try {
      fse.moveSync(src, dest)
    } catch (err) {
      assert.strictEqual(err.message, 'Source and destination must not be the same.')
      errThrown = true
    } finally {
      assert(errThrown)
    }

    // assert src not affected
    const contents = fs.readFileSync(src, 'utf8')
    const expected = /^sonic the hedgehog\r?\n$/
    assert(contents.match(expected))
  })

  it('should error if src and dest are the same and src does not exist', () => {
    const src = `${TEST_DIR}/non-existent`
    const dest = src
    assert.throws(() => fse.moveSync(src, dest))
  })

  it('should rename a file on the same device', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-file-dest`

    fse.moveSync(src, dest)

    const contents = fs.readFileSync(dest, 'utf8')
    const expected = /^sonic the hedgehog\r?\n$/
    assert(contents.match(expected))
  })

  it('should not overwrite the destination by default', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-folder/another-file`

    // verify file exists already
    assert(fs.existsSync(dest))

    try {
      fse.moveSync(src, dest)
    } catch (err) {
      assert.strictEqual(err.message, 'dest already exists.')
    }
  })

  it('should not overwrite if overwrite = false', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-folder/another-file`

    // verify file exists already
    assert(fs.existsSync(dest))

    try {
      fse.moveSync(src, dest, { overwrite: false })
    } catch (err) {
      assert.strictEqual(err.message, 'dest already exists.')
    }
  })

  it('should overwrite file if overwrite = true', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-folder/another-file`

    // verify file exists already
    assert(fs.existsSync(dest))

    fse.moveSync(src, dest, { overwrite: true })

    const contents = fs.readFileSync(dest, 'utf8')
    const expected = /^sonic the hedgehog\r?\n$/
    assert.ok(contents.match(expected))
  })

  it('should overwrite the destination directory if overwrite = true', () => {
    // Create src
    const src = path.join(TEST_DIR, 'src')
    fse.ensureDirSync(src)
    fse.mkdirsSync(path.join(src, 'some-folder'))
    fs.writeFileSync(path.join(src, 'some-file'), 'hi')

    const dest = path.join(TEST_DIR, 'a-folder')

    // verify dest has stuff in it
    const pathsBefore = fs.readdirSync(dest)
    assert(pathsBefore.indexOf('another-file') >= 0)
    assert(pathsBefore.indexOf('another-folder') >= 0)

    fse.moveSync(src, dest, { overwrite: true })

    // verify dest does not have old stuff
    const pathsAfter = fs.readdirSync(dest)
    assert.strictEqual(pathsAfter.indexOf('another-file'), -1)
    assert.strictEqual(pathsAfter.indexOf('another-folder'), -1)

    // verify dest has new stuff
    assert(pathsAfter.indexOf('some-file') >= 0)
    assert(pathsAfter.indexOf('some-folder') >= 0)
  })

  it('should create directory structure by default', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/does/not/exist/a-file-dest`

    // verify dest directory does not exist
    assert(!fs.existsSync(path.dirname(dest)))

    fse.moveSync(src, dest)

    const contents = fs.readFileSync(dest, 'utf8')
    const expected = /^sonic the hedgehog\r?\n$/
    assert(contents.match(expected))
  })

  it('should work across devices', () => {
    const src = `${TEST_DIR}/a-file`
    const dest = `${TEST_DIR}/a-file-dest`

    setUpMockFs('EXDEV')

    fse.moveSync(src, dest)

    const contents = fs.readFileSync(dest, 'utf8')
    const expected = /^sonic the hedgehog\r?\n$/
    assert(contents.match(expected))
    tearDownMockFs()
  })

  it('should move folders', () => {
    const src = `${TEST_DIR}/a-folder`
    const dest = `${TEST_DIR}/a-folder-dest`

    // verify it doesn't exist
    assert(!fs.existsSync(dest))

    fse.moveSync(src, dest)

    const contents = fs.readFileSync(dest + '/another-file', 'utf8')
    const expected = /^tails\r?\n$/
    assert(contents.match(expected))
  })

  it('should overwrite folders across devices', () => {
    const src = `${TEST_DIR}/a-folder`
    const dest = `${TEST_DIR}/a-folder-dest`
    fs.mkdirSync(dest)

    setUpMockFs('EXDEV')

    fse.moveSync(src, dest, { overwrite: true })

    const contents = fs.readFileSync(dest + '/another-folder/file3', 'utf8')
    const expected = /^knuckles\r?\n$/
    assert(contents.match(expected))
    tearDownMockFs()
  })

  it('should move folders across devices with EXDEV error', () => {
    const src = `${TEST_DIR}/a-folder`
    const dest = `${TEST_DIR}/a-folder-dest`

    setUpMockFs('EXDEV')

    fse.moveSync(src, dest)

    const contents = fs.readFileSync(dest + '/another-folder/file3', 'utf8')
    const expected = /^knuckles\r?\n$/
    assert(contents.match(expected))
    tearDownMockFs()
  })

  describe('clobber', () => {
    it('should be an alias for overwrite', () => {
      const src = `${TEST_DIR}/a-file`
      const dest = `${TEST_DIR}/a-folder/another-file`

      // verify file exists already
      assert(fs.existsSync(dest))

      fse.moveSync(src, dest, { clobber: true })

      const contents = fs.readFileSync(dest, 'utf8')
      const expected = /^sonic the hedgehog\r?\n$/
      assert(contents.match(expected))
    })
  })

  describe('> when trying to move a folder into itself', () => {
    it('should produce an error', () => {
      const SRC_DIR = path.join(TEST_DIR, 'src')
      const DEST_DIR = path.join(TEST_DIR, 'src', 'dest')

      assert(!fs.existsSync(SRC_DIR))
      fs.mkdirSync(SRC_DIR)
      assert(fs.existsSync(SRC_DIR))

      try {
        fse.moveSync(SRC_DIR, DEST_DIR)
      } catch (err) {
        assert(err.message, `Cannot move ${SRC_DIR} into itself ${DEST_DIR}.`)
        assert(fs.existsSync(SRC_DIR))
        assert(!fs.existsSync(DEST_DIR))
      }
    })
  })

  describe('> when trying to move a file into its parent subdirectory', () => {
    it('should move successfully', () => {
      const src = `${TEST_DIR}/a-file`
      const dest = `${TEST_DIR}/dest/a-file-dest`

      fse.moveSync(src, dest)

      const contents = fs.readFileSync(dest, 'utf8')
      const expected = /^sonic the hedgehog\r?\n$/
      assert(contents.match(expected))
    })
  })

  describeIfWindows('> when dest parent is root', () => {
    let dest

    afterEach(() => fse.removeSync(dest))

    it('should not create parent directory', () => {
      const src = path.join(TEST_DIR, 'a-file')
      dest = path.join(path.parse(TEST_DIR).root, 'another-file')

      fse.moveSync(src, dest)

      const contents = fs.readFileSync(dest, 'utf8')
      const expected = /^sonic the hedgehog\r?\n$/
      assert(contents.match(expected))
    })
  })

  ifCrossDeviceEnabled(describe)('> when actually trying to move a folder across devices', () => {
    describe('> just the folder', () => {
      it('should move the folder', () => {
        const src = path.join(differentDevice, 'some/weird/dir-really-weird')
        const dest = path.join(TEST_DIR, 'device-weird')

        if (!fs.existsSync(src)) fse.mkdirpSync(src)
        assert(!fs.existsSync(dest))
        assert(fs.lstatSync(src).isDirectory())

        fse.moveSync(src, dest)

        assert(fs.existsSync(dest))
        assert(fs.lstatSync(dest).isDirectory())
      })
    })
  })
})


