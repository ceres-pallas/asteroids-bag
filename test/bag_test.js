var expect = require('chai').expect;

var Bag = require('../lib/bag');

var Counter = function(){
    this.count = 0;
}
Counter.prototype.increment = function(){
    this.count++;
}

describe('Bag', function(){
    it('should exist', function(){
        expect(Bag).to.exist;
    });

    it('should be a constructor', function(){
        expect(Bag).to.be.a('function');
    });

    describe('object', function(){
        var bag;

        beforeEach(function(){
            bag = new Bag();
        });

        ['add', 'remove', 'forEach'].forEach(function(methodName){
            it('should respond to ' + methodName, function(){
                expect(bag).to.respondTo(methodName);
            });
        });
    });

    describe('interactions', function(){
        var bag;

        beforeEach(function(){
            bag = new Bag();
        });

        it('should start out with zero elements', function(){
            var counter = new Counter;

            bag.forEach(counter.increment.bind(this));

            expect(counter.count).to.equal(0);
        });

        it('should add an element', function(){
            var counter = new Counter;
            bag.add({});

            bag.forEach(counter.increment.bind(counter));

            expect(counter.count).to.equal(1);
        });

        it('should remove an element by id', function(){
            var counter = new Counter;
            var id = bag.add({});
            bag.remove(id);

            bag.forEach(counter.increment.bind(counter));

            expect(counter.count).to.equal(0);
        });
    });

});
