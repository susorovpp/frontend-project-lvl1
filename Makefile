install:
	npm install

start:
	npx babel-node src/bin/prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint .