require 'mongo'
require 'JSON'
Mongo::Logger.logger.level = ::Logger::FATAL
puts Gem.loaded_specs["mongo"].version

mongo_uri = 'mongodb://heroku_28trdw16:tpk3e8svp7nu5mlceio2ir16jh@ds029814.mlab.com:29814/heroku_28trdw16'
client = Mongo::Client.new(mongo_uri);
db = client.database

###
# Reads a json array and adds each entry
###

json = File.read('/Users/reuben/notes.json')

data = JSON.parse(json)

data.each do |child|
    db[:notes].insert_one child
end


###
# Delete all documents
###

# db[:notes].delete_many

###
# List all documents in collection
###

# notes = db[:notes].find
#
# notes.each do |doc|
#   puts doc
# end

client.close
