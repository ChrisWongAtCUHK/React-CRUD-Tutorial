## Adding Bootstrap
From CDN
```html
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
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

## Formatting a Date String in React
```cmd
npm install moment --save
```
```javascript
import Moment from 'moment';

render(){
    Moment.locale('en');
    var dt = '2016-05-02T00:00:00';
    return(<View> {Moment(dt).format('d MMM')} </View>) //basically you can do all sorts of the formatting and others
}
```
## [REACT TRAINING / REACT ROUTER Quick Start](https://reacttraining.com/react-router/web/guides/quick-start)

## [Pass props to a component rendered by React Router](https://tylermcginnis.com/react-router-pass-props-to-components/)
```ts
<Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/>
```
