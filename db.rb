require 'mongo'
require 'JSON'
Mongo::Logger.logger.level = ::Logger::FATAL
puts Gem.loaded_specs["mongo"].version

mongo_uri = 'mongodb://heroku_28trdw16:tpk3e8svp7nu5mlceio2ir16jh@ds029814.mlab.com:29814/heroku_28trdw16'
client = Mongo::Client.new(mongo_uri);
db = client.database

###
# Read a json file and add each entry
###

# json = File.read('/Users/reuben/notes.json')
#
# data = JSON.parse(json)
#
# data.each do |child|
#     db[:notes].insert_one child
# end

###
# Find one document
###

db[:notes].find(:name => "Amyotrophic Lateral Sclerosis").each do |doc|
    puts doc
end

###
# Find and update one document
###

# db[:notes].update_one({:name => "Amyotrophic Lateral Sclerosis"}, '$set' => {:hx => ""})

###
# Delete all documents
###

# db[:notes].delete_many

###
# List all documents in collection - limit selection with .limit(n)
###

# notes = db[:notes].find
#
# notes.each do |doc|
#   puts doc
# end

client.close
