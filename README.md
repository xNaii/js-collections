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
let arr = collection.addArray('shared-array', [
  /*data*/
]);

let obj = collection.addObject('shared-object', {
  /*data*/
});
```

### Retrieving
```js
let arr = collection.getArray('shared-array');

let obj = collection.getObject('shared-object');
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
