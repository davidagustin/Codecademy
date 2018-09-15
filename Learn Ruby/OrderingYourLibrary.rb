# frozen_string_literal: true

def alphabetize(arr, rev = false)
  arr.sort!
  rev ? arr.reverse! : arr
end
numbers = [3, 2, 1]
puts alphabetize(numbers)
