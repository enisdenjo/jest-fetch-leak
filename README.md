1. [Install Docker](https://docs.docker.com/engine/install)
1. [Install Node v19+](https://nodejs.org/en/download/current)
1. `npm i`
1. In one terminal: `docker run --rm -p "58080:80" kennethreitz/httpbin`
1. In another terminal:
   - `ITERATIONS=100 npm test` doesn't leak ✅
   - `ITERATIONS=300 npm test` leaks ❌
