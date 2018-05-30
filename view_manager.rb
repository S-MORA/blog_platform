class ViewManager
  attr_reader :type, :posts
  def initialize (type, posts)
    @type = type
    @posts = posts
  end
end
