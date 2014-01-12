asteroids-bag [![Build Status](https://travis-ci.org/ceres-pallas/asteroids-bag.png?branch=master)](https://travis-ci.org/ceres-pallas/asteroids-bag)
=============

An implementation of a bag tailored to Asteroids

Examples
--------

```javascript
var Bag = require('asteroids-bag');

var bag = new Bag();
var identifier = bag.add({ 'an': 'object' });

bag.forEach(function(element, id){
    console.log('we found an element with id: %s', id);
    console.log(element);
})

bag.remove(identifier);
bag.forEach(function(){
    console.log('this will not show because bag is empty');
});
```

Output:

```
we found an element with id: f624a2c94c204058b9689687d1868a22
{ an: 'object' }
```