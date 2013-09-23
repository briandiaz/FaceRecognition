class Client < ActiveRecord::Base
	validates :email, :presence => { :message => "=> You must insert a valid email. " }, :format => {:with => /@/}
	validates :image, :presence => { :message => "=> You must insert a valid image. "}, :format => {:with => /(?:jpg|gif|png|jpeg)/}
	validates :nombre, :presence => { :message => "=> You must insert your name. "}, :length => {:minimum => 3 }
end
