FactoryGirl.define do
  factory :bookmark do
    url "http://wwww.great-url.com"
    title "Great Site"
    description "lorem ipsum description"
    hashtags { Hashtag.create(topic: 'technology') }
  end

end
