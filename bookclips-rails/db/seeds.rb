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

20.times do
  hashtag = Hashtag.new(
    topic:  Faker::Hacker.noun,
  )
  hashtag.save!
end
hashtags = Hashtag.all



bookmarks = Bookmark.create([{
    url: 'http://benjidalton.com',
    title: 'Benji Dalton\'s Blog',
    description: 'The blog of Benji Dalton',
    hashtags: hashtags.sample(3),
    user: users.sample
  },
  {
    url: 'http://railscasts.com',
    title: 'Rails Casts',
    description: 'Ryan Bates reigns in Rails',
    hashtags: hashtags.sample(3),
    user: users.sample
  },
  {
    url: 'http://bloc.io',
    title: 'Bloc Education',
    description: 'Learn to code, etc...',
    hashtags: hashtags.sample(3),
    user: users.sample
  },
  {
    url: 'http://foundation.zurb.com',
    title: 'Zurb Foundation',
    description: 'The 2nd most popular framework for front-ends',
    hashtags: hashtags.sample(3),
    user: users.sample
  },
  {
    url: 'http://crunchyroll.com',
    title: 'crunchyroll anime',
    description: 'Watch it now!',
    hashtags: hashtags.sample(3),
    user: users.sample
  },
  {
    url: 'http://codeschool.com',
    title: 'The school of code',
    description: 'We teach you code stuffs',
    hashtags: hashtags.sample(3),
    user: users.sample
  },
  {
    url: 'http://reddit.com',
    title: 'lots of memes and AMA\'s',
    description: 'The largest user community of something.',
    hashtags: hashtags.sample(3),
    user: users.sample
  }])

bookmark = Bookmark.all

puts "Seeds generated"
puts "#{User.count} Users created"
puts "#{Bookmark.count} Bookmarks created"
puts "#{Hashtag.count} Hashtags created"