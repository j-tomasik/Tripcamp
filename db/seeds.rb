require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
User.destroy_all
Spot.destroy_all


demoUser = User.create({firstname: 'demo-user', lastname:'user-demo', zip: 94707, email: 'demo@starting.com', password: 'demo-user'})


spot01 = Spot.create({name: 'Piodao, Portugal', description: 'Located in the Serra de Estrela region of Portugal, which is the highest location in the country', lat: 40.22978, lng: 7.82472})
spot01.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/Piodao_serra_da_estrela.jpeg"), filename: 'piodao.jpeg')
review1 = Review.create({body: 'Wow this was such an amazing trip!', recommend: true, spot_id: 1, author_id: 1})

spot02 = Spot.create({name: 'Moraine Lake, Canada', description: 'Near to the town of Banff, this location is best traveled in the summer', lat: 51.32154, lng: 116.18509})
spot02.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/banff_moraine_lake.jpg"), filename: 'moraineLake.jpg')

spot03 = Spot.create({name: 'Birgu, Malta', description: 'A beautiful historic fortified city, very close to the many mediterranean beaches of Malta ', lat: 35.88803 , lng: 14.52208 })
spot03.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/birgu_malta.jpg"), filename: 'malta.jpg')

spot04 = Spot.create({name: 'Blue Lagoon, Iceland', description: 'These amazing natural hot springs are a must visit', lat: 63.87990, lng: 22.44797 })
spot04.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/blue_lagoon_iceland.jpg"), filename: 'blueLagoon.jpg')

spot05 = Spot.create({name: 'Dead Sea, Israel', description: 'This wonder of the world is famous for the unique properties of the water', lat: 31.45768, lng: 35.39895 })
spot05.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/dead_sea_israel.jpg"), filename: 'DeadSea.jpg')

spot06 = Spot.create({name: 'Dubrovnik, Croatia', description: 'This fairy tale city is well known for the iconic architecture of the old town', lat: 42.64044, lng: 18.11045 })
spot06.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/dubrovnik.JPG"), filename: 'dubrovnik.jpg')

spot07 = Spot.create({name: 'Havasu Falls, Arizona', description: 'Located in the Grand Canyon, this amazing spot is not to be missed', lat: 36.25510 , lng: 112.69785})
spot07.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/havasu_falls.jpg"), filename: 'havasu.jpg')

spot08 = Spot.create({name: 'Iguazu Falls, Brazil', description: 'This wonder of the world is one of the largest waterfalls you will ever see. Located at the boarder with Argentina and Paraguay', lat: 25.68564, lng: 54.43871})
spot08.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/iguazu_falls.jpg"), filename: 'iguazu.jpg')

spot09 = Spot.create({name: 'Kawasan Fall, Philippines', description: 'This tropical wonder located in the jungle offers a relaxing escape', lat: 9.80236, lng: 123.37415})
spot09.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/kawasan_falls_philippines.jpg"), filename: 'kawasan.jpg')

spot10 = Spot.create({name: 'Lago di Braies, Italy', description: 'Located high in the alps, this scenic mountain lake is the definition of prestine', lat: 46.69504, lng: 12.08571})
spot10.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/lago_di_braies_italy.jpg"), filename: 'lagoDeBraies.jpg')

spot11 = Spot.create({name: 'Lanquen, Guatemala', description: 'This remote jungle location holds a beautiful cascading river this unreal colors', lat: 15.57739, lng: 89.98832})
spot11.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/lanquen_guatemala.jpg"), filename: 'lanquen.jpg')

spot12 = Spot.create({name: 'Pamukkale, Turkey', description: 'This location offers an incredible view from the thermal baths carved out of the side of a giant salt cliff', lat: 37.77844, lng: 29.09776})
spot12.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/pamukkale_turkey.jpg"), filename: 'pamukkale.jpg')

spot13 = Spot.create({name: 'Lake Paron, Peru', description: 'This idyllic lake is located in the remote mountains and is very work the hike in', lat: 8.99167, lng: 77.68333})
spot13.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/paron_lake_peru.jpg"), filename: 'paron.jpg')

spot14 = Spot.create({name: 'Phuket, Thailand', description: 'A gem of an island covered in sandy beaches bosts amazing weather and food', lat: 7.92383, lng: 98.35468})
spot14.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/phuket_thailand.jpg"), filename: 'phuket.jpg')

spot15 = Spot.create({name: 'Pont du Galetas, France', description: 'Located in the south east of France, this hidden gem offers great cliff jumping', lat: 43.79740, lng: 6.23975})
spot15.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/pont_du__galetas_france.jpg"), filename: 'galetas.jpg')

spot16 = Spot.create({name: 'Puerto Vallarta, Mexico', description: 'Away from the crowded center of town, this wonderful area of Mexico provides a number of pristine beaches', lat: 20.58939, lng: 105.24359})
spot16.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/puerto+vallarta.jpg"), filename: 'pv.jpg')

spot17 = Spot.create({name: 'Punta de Mita, Mexico', description: 'A lovely penninsula with great surfing and heavenly beaches', lat: 20.77385, lng: 105.51675})
spot17.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/punta_de_mita.jpg"), filename: 'puntDeMita.jpg')

spot18 = Spot.create({name: 'Rainbow Mountain', description: 'Located deep in the Andies, this one of a kind location is worth the trek and alitiude for the amazing colorful soil', lat: 13.86962, lng: 71.30292})
spot18.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/rainbow_mountain.JPG"), filename: 'rainbowMountain.jpg')

spot19 = Spot.create({name: 'Lago di sorapis', description: 'High in the Italian Dolomites, this amazing lake is an untouched gem', lat: 46.52048, lng: 12.22329})
spot19.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/sorapiss_auronzo_di_cadore_italy.jpg"), filename: 'sorapis.jpg')

spot20 = Spot.create({name: 'Split, Croatia', description: 'A breahtakingly beautiful ancient prot city, boasting astounding architecture', lat: 43.50887, lng: 16.43882})
spot20.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/split_croatia.jpg"), filename: 'split.jpg')

spot21 = Spot.create({name: 'Grand Teaton National Park, Wyoming', description: 'Located near yellowstone, this incredible mountain range is located next to a pristine lake', lat: 43.81089, lng: 110.68122})
spot21.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/teatons.jpg"), filename: 'teatons.jpg')

spot22 = Spot.create({name: 'Tierra del Fuego, Argentina', description: 'Another world experience located and the southern most point of south america, this remote outpost is the definition of remote', lat: 54.55941, lng: 67.3242})
spot22.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/tierra_del_fuego.jpg"), filename: 'tierraDelFuego.jpg')

spot23 = Spot.create({name: 'Torres del Paine, Chile', description: 'High in the mountains, this incredible and other worldly location provides a fresh escape from civilization and amazing views', lat: 50.97355, lng: 72.87389})
spot23.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/torrez_del_paine.jpg"), filename: 'torresDelPine.jpg')

spot24 = Spot.create({name: 'Yosemite National Park, California', description: 'The pinnacle of camping and outdoor experiences, this location in the California mountains has a magical quality that must be experienced first hand', lat: 37.83616, lng: 119.51470})
spot24.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/yosemite.JPG"), filename: 'yosemite.jpg')

spot25 = Spot.create({name: 'Zion National Park, Utah', description: 'This location is continually ranked in the top ten and top five national parks is th US to visit  for a reason. It offers a plethora of amazing views and activities to do', lat: 37.29666, lng: 113.00331})
spot25.photo.attach(io: open("https://tripcamp-dev.s3.us-west-1.amazonaws.com/zion_national_park.jpg"), filename: 'zion.jpg')

#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
