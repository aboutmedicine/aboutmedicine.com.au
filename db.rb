require 'mongo'
require 'JSON'
Mongo::Logger.logger.level = ::Logger::FATAL
puts Gem.loaded_specs["mongo"].version

mongo_uri = 'mongodb://heroku_28trdw16:tpk3e8svp7nu5mlceio2ir16jh@ds029814.mlab.com:29814/heroku_28trdw16'
client = Mongo::Client.new(mongo_uri);
db = client.database

json = File.read('/Users/reuben/notes.json')

data = JSON.parse(json)

data.each do |child|
    db[:notes].insert_one child
end

client.close
