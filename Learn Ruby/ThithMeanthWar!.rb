# frozen_string_literal: true

print 'Put user input '
user_input = gets.chomp
user_input.downcase!
if user_input.include?('s')
  user_input.gsub!(/s/, 'th')
else
  print 'no s'
end
puts user_input.to_s
