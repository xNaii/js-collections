class Collection {
    #_settings = {
        storeName: 'data_collection',
    };
    
    #_objectNames;
    #_objects;
    
    #_arrayNames;
    #_arrays;
    
    constructor(settings = {}) {
        this.#_objects = [];
        this.#_objectNames = {};
        
        this.#_arrays = [];
        this.#_arrayNames = {};
        
        Object.assign(this.#_settings, settings);
    }
    
    addArray(name, arr = []) {
        if (!name || typeof name !== 'string') {
            console.error(`Array requires name to be given`);
            return null;
        } else if (!Array.isArray(arr)) {
            console.error(`This is not an array`);
            return null;
        } else if (arr.length === 0) {
            console.error(`Array can not be empty`);
            return null;
        }
        
        this.#_arrays.push(arr);
        this.#_arrayNames[name] = this.#_arrays.length - 1;
        
        return arr;
    }
    
    getArray(name) {
        let array = this.#_arrayNames[name] !== undefined ? this.#_arrays[this.#_arrayNames[name]] : null;
        if (!array) { return array; }
        return JSON.parse(JSON.stringify(array));
    }
    
    addObject(name, obj = {}) {
        if (!name || typeof name !== 'string') {
            console.error(`Object requires name to be given`);
            return null;
        } else if (Object.keys(obj).length === 0) {
            console.error(`Object can not be empty`);
            return null;
        }
        
        this.#_objects.push(obj);
        this.#_objectNames[name] = this.#_objects.length - 1;
        
        return obj;
    }
    
    getObject(name) {
        let obj = this.#_objectNames[name] !== undefined ? this.#_objects[this.#_objectNames[name]] : null;
        if (!obj) { return obj; }
        return Object.freeze(obj);
    }
    
    store() {
        const data = [
            this.#_objectNames,
            this.#_objects,
            this.#_arrayNames,
            this.#_arrays
        ];
        localStorage.setItem(this.#_settings.storeName, JSON.stringify(data));
    }
    
    retrieve() {
        let storage = localStorage.getItem(this.#_settings.storeName);
        if (!storage) { return false; }
        
        let data = JSON.parse(storage);
        
        this.#_objects = data[1] ?? [];
        this.#_objectNames = data[0] ?? {};

        this.#_arrays = data[3] ?? [];
        this.#_arrayNames = data[2] ?? {};
    }
    
    clearAll() {
        this.clearInstance();
        this.clearStorage();
    }
    
    clearInstance() {
        this.#_objects = [];
        this.#_objectNames = {};

        this.#_arrays = [];
        this.#_arrayNames = {};
    }
    
    clearStorage() {
        localStorage.setItem(this.#_settings.storeName, JSON.stringify([]));
    }
}