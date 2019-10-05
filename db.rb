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

db[:notes].find(:name => "Acute Coronary Syndromes").each do |doc|
    puts doc[:special]
end

###
# Find and update one document
###

# db[:notes].update_one({:name => "Acute Stroke"}, '$set' => {:special => {"mx"=>"Urgent non-contrast CT brain (to rule out haemorrhage), call radiology, call neuro / stroke reg", "ex"=>"Functional status-good? poor?; NIHSS stroke score", "hx"=>"Time course: last known well, wake in stroke, within 24hrs? 4.5hrs?", "etiology"=>"Ischaemic or haemorrhagic", "ix"=>"CT +/- CT angio"}})

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
