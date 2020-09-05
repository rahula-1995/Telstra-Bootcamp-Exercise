//1

show collections

//2

db.mycollection.remove({})

//3

db.mycollection.drop()

//4

show dbs

//5

use config

//6

db.dropDatabase()

//7

use TestData

//

use movies

//8

db.movies.insert({name : "knph",yor:new Date("2017-10-25"),collection:NumberLong(220000000000),time:new Timestamp()})

//

db.movies.find().pretty()

//

db.stats()

//9

db.album.insertMany(

	[

		{

			year_of_release: "2017",

			music_director: "k.k.Sharma",

			lyrist: "javed akhtar",

                        list_of_song:[{dil:["sonu","4"],love:["atif","5"],mai:["shekhar","3.5"]}]

			

		},

		{

                        year_of_release: "2019",

			music_director: "G.Sharma",

			lyrist: "munna",

                        list_of_song:[{dil_mera:["sonu nigam","4.5"],love_not:["atif aslam","5.5"],mai_ho:["shekhar suman","7.5"]}]

			

		}

		

	]

)

//

db.shows.find().pretty()

//10

db.shows.find({runtime:{$lte:60}}).count()

//

db.shows.find({runtime:{$lte:60,$gte:30}}).count()

//

db.shows.find({"rating.average":{$gte:8}}).count()

//

db.shows.find({"rating.average":{$gte:8,$lte:9}},{"rating.average":true}).pretty()

//

db.shows.find({genres:"Horror"}).count()

//

db.shows.find({genres:["Horror"]}).count()

//

db.shows.find({genres:{$in:["Horror","Drama"]}}).count()

//

db.shows.find({type:{$in:["Animation","Reality"]}}).count()

//

db.shows.find({genres:{$nin:["Horror","Drama"]}}).count()

//

db.shows.find({"network.name":{$nin:["HBO","FOX"]}}).count()

//

db.shows.find({$or:[{genres:"Horror"},{genres:"Drama"}]}).count()

//

db.shows.find({genres:{$not:{$in:["Horror","Drama"]}}}).count()



