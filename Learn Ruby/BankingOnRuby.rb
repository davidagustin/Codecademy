# frozen_string_literal: true

class Account
  attr_reader :name, :balance
  def initialize(name, balance = 100)
    @name = name
    @balance = balance
  end

  public

  def display_balance(pin_number)
    if pin == pin_number
      puts "Balance: $#{@balance}."
    else
      puts pin_error
    end
  end

  def withdraw(pin_number, amount)
    if pin == pin_number
      @balance = balance - amount
      puts "Withdrew #{amount}. New balance: $#{@balance}"
    else
      pin_error
    end
  end

  private

  def pin
    @pin = 1234
  end

  def pin_error
    'Access denied: incorrect PIN.'
  end
end

checking_account = Account.new('Joe', 1_000_000)
