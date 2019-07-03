# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.create(name: "Meowth", breed: "Tabby", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/052.png")
Cat.create(name: "Purssian", breed: "Persian", image: "https://vetstreet.brightspotcdn.com/dims4/default/303f54d/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F29%2Fb6%2Ff4a864144d09974dfe5bf0513e20%2FPersian-AP-V8HE5B-645sm3614.jpg")
Cat.create(name: "Pixel", breed: "Siamese", image: "https://www.thesprucepets.com/thmb/TY3hC2JNUrBi952nKrlTlYChqV4=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/35493166_2113126082300521_5592447779063463936_n-5b69b61946e0fb002562c234.jpg")
Cat.create(name: "Lara", breed: "Calico", image: "https://cf.ltkcdn.net/cats/images/std/245665-699x450-myths-facts-about-male-calico-cats.jpg")

Hobby.create(name: "Nap", description: "ZZzzzZZzz", materials:"pillow, bed, couch")
Hobby.create(name: "Hunting", description: "*sneaking....*", materials:"mice, birds, claws")
Hobby.create(name: "Mischief", description: "naughty...", materials:"cat")

CatHobby.create(cat_id: 1, hobby_id: 1)
CatHobby.create(cat_id: 1, hobby_id: 2)
CatHobby.create(cat_id: 1, hobby_id: 3)
CatHobby.create(cat_id: 2, hobby_id: 1)
CatHobby.create(cat_id: 3, hobby_id: 1)
CatHobby.create(cat_id: 3, hobby_id: 3)
CatHobby.create(cat_id: 4, hobby_id: 3)
