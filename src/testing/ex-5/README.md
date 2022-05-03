## Exercise

Refactor the `GameOfLife` component (and its tests) so that computation is performed on the server. The POST request to `/api/gameOfLife` endpoint with the current game state as a payload will return the next game state as a response (see example below):

```sh
curl --header "Content-Type: application/json" --data '{"3_3": true, "3_4": true, "3_5": true}' \
http://localhost:3000/api/gameOfLife
```
