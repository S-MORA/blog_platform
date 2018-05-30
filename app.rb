require 'sinatra'
require './models'

set :session_secret, ENV['BLOG_SECRET_SESSION']
enable :sessions

get ('/') do
  @posts = Post.all 
  erb(:index)
end

get ('/signup') do

  erb(:signup)
end

post ('/signup') do

  existing_user = User.find_by(email: params[:email])
    if existing_user != nil
      return redirect '/login'
    end

  user = User.create(
    f_name: params[:f_name],
    l_name: params[:l_name],
    email: params[:email],
    password: params[:password]
  )
  session[:user_id] = user.id
  redirect '/dashboard'
end

get('/login') do
	erb :login
end

post('/login') do

	user = User.find_by(email: params[:user_email])
	if user.nil?
		return redirect '/login'
	end

	unless user.password == params[:password]
		return redirect '/login'
	end

	session[:user_id] = user.id
	redirect '/dashboard'
end

get ('/logout') do
  old_user = session[:username]
  session[:username] = nil
  redirect '/'
end

get ('/dashboard') do
 user_id = session[:user_id]
 if user_id.nil?
   return redirect '/'
 end
 @user = User.find(user_id)


  erb(:dashboard)
end

get ('/create') do
  user_id = session[:user_id]
  if user_id.nil?
    return redirect '/'
  end
  erb(:create)
end

post ('/create') do
  user_id = session[:user_id]
  if user_id.nil?
    return redirect '/'
  end

  @filename = params[:file][:filename]
  file = params[:file][:tempfile]

  File.open("./public/images/#{@filename}", 'wb') do |f|
    f.write(file.read)
  end

  Post.create(
    title: params[:title],
    content: params[:content],
    user_id: user_id,
    tag: params[:tag],
    img: "images/#{@filename}",
    created_at: Time.now,
    updated_at: Time.now
  )

  redirect '/dashboard'
end
