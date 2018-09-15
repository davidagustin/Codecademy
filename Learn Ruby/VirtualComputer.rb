# frozen_string_literal: true

class Computer
  @@users = {}
  def initialize(username, password)
    @username = username
    @password = password
    @@users[username] = password
    @files = {}
  end

  def create(filename)
    time = Time.now
    @files[filename] = time
    puts 'New file was created.'
  end

  def self.get_users
    @@users
  end
end

my_computer = Computer.new('joe', 'password')
