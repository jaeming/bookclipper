FactoryGirl.define do
  factory :bookmark do
    url "http://wwww.great-url.com"
    hashtag { Hashtag.create(topic: 'technology') }
  end

end
