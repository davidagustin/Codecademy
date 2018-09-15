# frozen_string_literal: true

puts 'Put in text'
text = gets.chomp
puts 'Pick what to redact'
redact = gets.chomp
words = text.split('')
words.each do |x|
  if x == redact
    print "REDACTED \n"
  else
    print x.to_s + ''
  end
end
