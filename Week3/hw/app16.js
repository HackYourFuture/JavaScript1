const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

// yes changing o2 will affect o3 since they reference each other and changing o1 will not affect o3 as no connection exist between them.
o2.foo = 'new value';
console.log(o2); // returned: Object { foo: "new value" }
console.log(o3); // returned: Object { foo: "new value" }

// with const declared variable, changes are not possible
