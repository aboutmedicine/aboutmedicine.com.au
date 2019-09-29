require 'mongo'
Mongo::Logger.logger.level = ::Logger::FATAL
puts Gem.loaded_specs["mongo"].version

mongo_uri = 'mongodb://heroku_28trdw16:tpk3e8svp7nu5mlceio2ir16jh@ds029814.mlab.com:29814/heroku_28trdw16'
client = Mongo::Client.new(mongo_uri);
db = client.database

# doc = { :_id => 4, :title => "test_title", :content => "testing", :slug => "test_slug"  }
#
# db[:blogposts].insert_one doc

# client.close
#
# db.command({"dbstats" => 1}).documents[0].each do |key, value|
#
#     puts "#{key}: #{value}"
# end

client[:blogposts].delete_one({:name => "Test"})

db[:blogposts].find.each { |doc| puts doc }

client.close
