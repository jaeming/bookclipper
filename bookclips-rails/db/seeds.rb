require 'faker'

5.times do
  user = User.new(
  name:      Faker::Name.name,
  email:     Faker::Internet.email,
  password:  Faker::Lorem.characters(10)
  )
  user.skip_confirmation!
  user.save!
end
users = User.all

7.times do
  hashtag = Hashtag.new(
    topic:  Faker::Hacker.noun,
  )
  hashtag.save!
end
hashtags = Hashtag.all



bookmarks = Bookmark.create([{
    url: 'http://benjidalton.com',
    hashtag: hashtags.sample,
    user: users.sample
  },
  {
    url: 'http://railscasts.com',
    hashtag: hashtags.sample,
    user: users.sample
  },
  {
    url: 'http://bloc.io',
    hashtag: hashtags.sample,
    user: users.sample
  },
  {
    url: 'http://foundation.zurb.com',
    hashtag: hashtags.sample,
    user: users.sample
  },
  {
    url: 'http://crunchyroll.com',
    hashtag: hashtags.sample,
    user: users.sample
  },
  {
    url: 'http://codeschool.com',
    hashtag: hashtags.sample,
    user: users.sample
  },
  {
    url: 'http://reddit.com',
    hashtag: hashtags.sample,
    user: users.sample
  }])

puts "Seeds generated"
puts "#{User.count} Users created"
puts "#{Bookmark.count} Bookmarks created"
puts "#{Hashtag.count} Hashtags created"