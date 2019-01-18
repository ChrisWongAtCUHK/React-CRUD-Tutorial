## Adding Bootstrap
```cmd
npm install bootstrap --save
npm install --save reactstrap react react-dom
```

src/index.js
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

src/App.js
```javascript
import { Button } from 'reactstrap';
```

## Import images
```javascript
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

<img src={images['doggy.png']} />
```