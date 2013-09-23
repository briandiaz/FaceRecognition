json.array!(@clients) do |client|
  json.extract! client, :nombre, :email, :image
  json.url client_url(client, format: :json)
end
