require 'faker'

7.times do
  hashtag = Hashtag.new(
    topic:  Faker::Hacker.noun,
  )
  hashtag.save!
end
hashtags = Hashtag.all

# 20.times do
#   bookmark = Bookmark.new(
#     url:  Faker::Internet.url,
#     hashtag: hashtags.sample
#   )
#   bookmark.save!
# end

bookmarks = Bookmark.create([{
    url: 'http://benjidalton.com',
    hashtag: hashtags.sample
  },
  {
    url: 'http://railscasts.com',
    hashtag: hashtags.sample
  },
  {
    url: 'http://bloc.io',
    hashtag: hashtags.sample
  },
  {
    url: 'http://foundation.zurb.com',
    hashtag: hashtags.sample
  },
  {
    url: 'http://crunchyroll.com',
    hashtag: hashtags.sample
  },
  {
    url: 'http://codeschool.com',
    hashtag: hashtags.sample
  },
  {
    url: 'http://reddit.com',
    hashtag: hashtags.sample
  }])

puts "Seeds generated"
puts "#{Bookmark.count} Bookmarks created"
puts "#{Hashtag.count} hashtags created"