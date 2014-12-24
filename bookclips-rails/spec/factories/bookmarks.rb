# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :bookmark do
    title "lolcats"
    description "Lolcats n' Funny Cat Pictures"
    url "http://icanhas.cheezburger.com/lolcats"
    tag "memes"
  end
end
