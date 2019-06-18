# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Snack.destroy_all
Retailer.destroy_all

hostess = Retailer.create(name: "Hostess", year_established: 1902)
girl_scouts = Retailer.create(name: "Girl Scouts", year_established: 1887)

Snack.create(name: "Dunkaroos", calories: 500, deliciousness: 3, retailer: hostess)
Snack.create(name: "Sun Chips", calories: 300, deliciousness: 4, retailer: hostess)
Snack.create(name: "Samoas", calories: 300, deliciousness: 4, retailer: girl_scouts)
Snack.create(name: "Trefoils", calories: 300, deliciousness: 4, retailer: girl_scouts)
Snack.create(name: "Thin Mints", calories: 300, deliciousness: 1, retailer: girl_scouts)
Snack.create(name: "Twinkies", calories: 300, deliciousness: 4, retailer: girl_scouts)
Snack.create(name: "Ho Hos", calories: 300, deliciousness: 4, retailer: girl_scouts)
Snack.create(name: "M&Ms", calories: 300, deliciousness: 4, retailer: girl_scouts)
