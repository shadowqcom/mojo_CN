# @staticmethod

You can add the `@staticmethod` decorator on a struct method to declare a static method.

For example:

```mojo
from tensor import Tensorfrom pathlib 
import Pathstruct MyStruct:    
var data: Tensor[DType.int8]    
fn __init__(inout self):        
self.data = Tensor[DType.int8]()    
fn __moveinit__(inout self, 
owned existing: Self):        
self.data = existing.data ^    @staticmethod    fn load_from_file(file_path: Path) raises -> Self:        
var new_struct = MyStruct()        
new_struct.data = file_path.read_bytes()        
return new_struct ^
```

Unlike an instance method, a static method doesn't take an implicit `self` argument. It's not attached to a specific instance of a struct, so it can't access instance data.

For more information see the documentation on [Mojo开发者社区](https://dev.mojocn.org).