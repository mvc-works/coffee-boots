// Generated by CoffeeScript 1.6.2
var add_options, coffee, convert, events, transform;

convert = require("convert-boots");

events = require("events");

coffee = require("coffee-script");

exports.rain = new events.EventEmitter();

transform = function(code) {
  var js_code;

  js_code = coffee.compile(code, {
    bare: true
  });
  return "// Generated By CoffeeScript " + coffee.VERSION + "in Rain-boots" + js_code;
};

add_options = function(options) {
  options.transform = transform;
  options.filter = "coffee";
  return options.extname = "js";
};

exports.rain.on("watch", function(options) {
  add_options(options);
  convert.boots.watch(options);
  return convert.rain.on("converted", function(file_path) {
    return exports.rain.emit("converted", file_path);
  });
});

exports.rain.on("convert", function(options) {
  add_options(options);
  convert.boots.convert(options);
  return convert.rain.on("converted", function(file_path) {
    return exports.rain.emit("converted", file_path);
  });
});
