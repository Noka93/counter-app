let log = console.log

let names = ["Remi", 25, "Female"]
names.push("unicorn")
let removedItem = names.pop()
log("removed item --> " + removedItem)
let removedItemTwo = names.pop([0])
log(removedItemTwo)

let people = []

people[0] = "Unicorn"
people[1] = "Mary"
people.shift("Mercy")
log(people)
people.push("Push 1")
people.push("Push 2")
people.push("Push 3")
people.push("Push 4")
log(people.slice(0, 3))
log(people.splice(3, 5))

let items = ["monkey", "goat"]
let content = ["climb trees", "at home"]

log(items.concat(content))

