require 'faker'

10.times do
  hashtag = Hashtag.new(
    topic:  Faker::Hacker.noun,
  )
  hashtag.save!
end
hashtags = Hashtag.all

20.times do
  bookmark = Bookmark.new(
    url:  Faker::Internet.url,
    hashtag: hashtags.sample
  )
  bookmark.save!
end

puts "Seeds generated"
puts "#{Bookmark.count} Bookmarks created"
puts "#{Hashtag.count} Bookmarks created"