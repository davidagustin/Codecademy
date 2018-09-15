# frozen_string_literal: true

print "What's your first name? "
first_name = gets.chomp
first_name = first_name.capitalize
print "What's your last name? "
last_name = gets.chomp
last_name = last_name.capitalize
print 'What city do you live in? '
city = gets.chomp
city = city.split(' ')
city.each(&:capitalize!)
city = city.join(' ')
print 'What state you live in? Please use the two letter initials. '
state = gets.chomp
state = state.upcase
print "#{first_name} #{last_name}, #{city}, #{state}"
