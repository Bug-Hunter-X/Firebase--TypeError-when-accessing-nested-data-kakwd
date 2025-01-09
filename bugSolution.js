```javascript
// Corrected code with null checks:
const data = {
a: {
b: {
c: 'value'
}
}
};

const data2 = {
a: {
b: null
}
};

const getValue = (obj, path) => {
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current === null || current === undefined || !current.hasOwnProperty(part)) {
      return undefined; // or handle the error in another way
    }
    current = current[part];
  }
  return current;
};

const value = getValue(data, 'a.b.c');
console.log(value); // Logs 'value'

const value2 = getValue(data2, 'a.b.c');
console.log(value2); // Logs undefined
```