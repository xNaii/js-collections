# JS Collections
Collections to store arrays, objects

### Usage
```js
const collection = new Collection({ /* settings */ });
```

### Settings
```js
storageName - default: 'data-collection'
```

### Methods
|               |  Parameters  |     Returns    |
| ------------- | ------------ | -------------- |
| addArray      | name, array  | array          |
| getArray      | name         | array or null  |
| addObject     | name, object | object         |
| getObject     | name         | object or null |
| store         | empty        |                |
| retrieve      | empty        |                |
| clearAll      | emtpy        |                |
| clearInstance | empty        |                |
| clearStorage  | empty        |                |
