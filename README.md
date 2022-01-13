# Simple Endpoint
An Express.js server with a catch all endpoint which logs and returns the request url, body, and query params.

## Install
```bash
npm i
```

## Run
```bash
npm run serve
```

## Call
```bash
curl --request POST \
  --url 'http://localhost:3000/indexnow?timeout=1000' \
  --header 'Content-Type: application/json' \
  --data '{
	"foo": "bar"
}'
```

## Params
Accepts a timeout param which will delay the response in milliseconds
`?timeout=5000`
