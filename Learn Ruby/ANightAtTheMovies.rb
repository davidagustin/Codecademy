# frozen_string_literal: true

movies = {
  The_Matrix: 4
}
puts 'Commands are: add, update, display, delete'
choice = gets.chomp!
case choice
when 'add'
  puts 'Input movie title.'
  title = gets.chomp!
  puts 'Input rating for movie'
  rating = gets.chomp!
  puts 'Movie already exist ' if movies.key?(title.to_sym)
  movies[title.to_sym] = rating.to_i
when 'update'
  puts 'Input movie title'
  title = gets.chomp!
  puts 'Error, no title exist.' unless movies.key?(title.to_sym)
when 'display'
  movies.each do |key, value|
    puts "#{key}: #{value}"
  end
when 'delete'
  puts 'Select movie to delete'
  title = gets.chomp!
  if !movies.key? title.to_sym
    puts 'No movie can match input.'
  else
    movies.delete(title.to_sym)
  end
else puts 'Error!'
end
