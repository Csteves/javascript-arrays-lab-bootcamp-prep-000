const app = "I don't do much."

kittens = ["Milo", "Otis", "Garfield"]

var kittens = ["Milo", "Otis", "Garfield"]
function destructivelyAppendKitten(kittens, cat) {
cat = kittens.push("Ralph");
return kittens
}