FactoryBot.define do
  factory :task do
    name { Faker::StarWars.character }
    done false
    deadline nil
  end
end