require 'sinatra'
require './models'

set :session_secret, ENV['BLOG_SECRET_SESSION']
enable :sessions

get ('/') do
  erb(:index)
end

get ('/signup') do

  erb(:signup)
end

post ('/signup') do
  user = User.create (
    f_name: params[:f_name],
    l_name: params[:f_name],
    email: params[:email],
    password: params[:password]
  )
  session[:user_id] = user.id
  redirect '/dashboard'
end

get ('/dashboard') do
 user_id = session[:user_id]
 if user_id.nil?
   return redirect '/'
 end
 @user = User.find(user_id)
  erb(:dashboard)
end
