u = User.find_or_create_by!(id: 1) do |user|
  user.email = "stefan@keoscout.com"
  user.password = SecureRandom.base58(10)
  user.name = "Da Nang Bass Man"
  user.username = "danangbassman"
end

u.identities.find_or_create_by!(provider: "zalo", provider_id: "206492388818353401")

# p = u.posts.find_or_create_by!(id: 1) do |post|
#   p.text = "Drum and Bass live from Da Nang, Vietnam. Catch me on Twitch: https://www.twitch.tv/danangbassman"
# end

u.profile_image.attach(
  io: File.open(Rails.root.join("db/seeds/profile.png")),
  filename: "profile.png"
)

u.header_image.attach(
  io: File.open(Rails.root.join("db/seeds/header.png")),
  filename: "header.png"
)
