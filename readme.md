Coffee-boots: watch and compile CoffeeScript code
------

This is a [Rain-boots][rain-boots] based plugin for CoffeeScript.  
You may know more about it by reading docs of [Convert-boots][convert-boots].  

[rain-boots]: https://github.com/jiyinyiyong/rain-boots
[convert-boots]: https://github.com/jiyinyiyong/convert-boots

### Usage

```coffee
coffee = require("coffee-boots").rain
coffee.emit "watch",
  from: "a.coffee"
  to: "a.js"

coffee.emit "convert",
  from: "a.coffee"
  to: "a.js"

coffee.emit "watch",
  from: "a-dir"
  to: "b-dir"

coffee.emit "convert",
  from: "a-dir"
  to: "b-dir"
```

Events you may trigger:

* `watch`: watch file and convert file on file change  
* `convert`: convert file at once

Parameters: more details in [Convert-boots][convert-boots] project

* `from`: the filename or directory name of `.coffee` file  
* `to`: the destination, filename of directory correspond to `from`  