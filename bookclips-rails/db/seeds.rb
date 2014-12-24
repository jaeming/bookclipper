require 'faker'

20.times do
  bookmark = Bookmark.new(
  title:       Faker::Internet.domain_word,
  description: Faker::Lorem.sentence,
  url:  Faker::Internet.url,
  tag:  Faker::Lorem.word
  )
  bookmark.save!
end

puts "Seeds generated"
puts "#{Bookmark.count} Bookmarks created"