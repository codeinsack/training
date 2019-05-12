const Benchmark = require('benchmark');

const suite = new Benchmark.Suite();

suite
  .add('foo', foo)
  .add('bar', bar)
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  })
  .run({ async: true });

function foo() {
}

function bar() {
}
