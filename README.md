# alsong-lyrics node-js server [https://young-savannah-79010.herokuapp.com](https://young-savannah-79010.herokuapp.com)

made for personal project [visualizer](https://github.com/gomonk3037/Visualizer)

## used

**node-alsong** : request / reseponse && parse xml data
- [npm](https://www.npmjs.com/package/alsong), [github](https://github.com/HelloWorld017/node-alsong)

## usage

### get lyrics by artist && title 

```
GET /lyrics/:artist/:title 
```

### get lyrics by audiofile - **Expected**

```
POST /lyrics (multipart/form-data)
```

