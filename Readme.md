# Node.js basics

Для вашего удобства вы можете воспользоваться npm-скриптами:
"fs:create": "node src/fs/create.js",
"fs:copy": "node src/fs/copy.js",
"fs:rename": "node src/fs/rename.js",
"fs:delete": "node src/fs/delete.js",
"fs:list": "node src/fs/list.js",
"fs:read": "node src/fs/read.js",
"cli:env": "node src/cli/env.js",
"cli:args": "node src/cli/args.js",
"hash": "node src/hash/calcHash.js",
"streams:read": "node src/streams/read.js",
"streams:write": "node src/streams/write.js",
"streams:transform": "node src/streams/transform.js",
"zip:compress": "node src/zip/compress.js",
"zip:decompress": "node src/zip/decompress.js",
"worker": "node src/wt/main.js",
"cp": "node src/cp/cp.js"

При передаче аргументов необходимо указать дополнительно " -- " между именем скипта и аргументами, т.е., например,
вместо 
  node src/cli/args.js --arg val
писать:
  npm run cli:args -- --arg val

Но, по-моему, проще и лучше запускать файлы js ;)
