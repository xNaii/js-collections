# JS Collections
Javascript Collections to store arrays, objects

### Usage
```js
const collection = new Collection({ /* settings */ });
```

### Settings
```js
storageName - default: 'data-collection'
```

### Adding
```js
let arr = collection.addArray('secret', [
  /*data*/
]);

let obj = collection.addObject('secret-object', {
  /*data*/
});
```

### Retrieving
```js
let arr = collection.getArray('secret');

let obj = collection.getObject('secret-object');
```

### Methods
|               |  Parameters  |     Returns    |
| ------------- | ------------ | -------------- |
| addArray      | name, array  | array          |
| getArray      | name         | immutable array or null  |
| addObject     | name, object | object         |
| getObject     | name         | immutable object or null |
| store         | empty        |                |
| retrieve      | empty        |                |
| clearAll      | emtpy        |                |
| clearInstance | empty        |                |
| clearStorage  | empty        |                |
