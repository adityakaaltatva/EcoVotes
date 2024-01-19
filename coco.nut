[coco]
version = "0.3.0"

[module]
name = "Adder"
version = "1.0.0"
license = "MIT"
repository = "https://github.com/sarvalabs/cocolang-examples/counter"
authors = ""

[target]
os = "MOI"
arch = "PISA"

[target.moi]
format = "JSON"
output = "Adder"

[target.pisa]
format = "BIN"