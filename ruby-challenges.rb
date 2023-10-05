# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:
# name: letterArray
# input: array, string
# output: array of all works containing the letter
# process: I am going to create a method with two parameters of an array and a string, the array argument being the beverages_array and the string argument being the filter_letter_o. Then I am going to use select to filter through the array, I will give it the argument of word since we want to see if the word contains the string, and then i will use .include to see if the word includes the string provided. Since ruby has an implicit return, it is going to then return just the words in the array that include the letter provided. 

def letter_array array, string 
    array.select do |word|
        word.include? string 
    end 
end 

p letter_array beverages_array,filter_letter_o
p letter_array beverages_array,filter_letter_t

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# name: ordered_array  
# input: hash 
# output: array, no nested arrays 
# process: i am going to create a method with the parameter hash, that takes in a hash and returns an array. To access the values in the array i am going to use .value, then .flatten to get rid of the nested arrays (thanks google) and .sort to sort the new array in alphabetical order. 

def ordered_array hash 
    hash.values.flatten.sort 
end 
p ordered_array us_states


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
# name: Bike 
# input:
# output: 
# process: I will create a class called Bike , I will initialize it with the parameter of model because we want the user to be able to input that as the argument. I will then hard code the number of wheels to be 2and the current_speed to start at 0. finally, i will instantiate it by creating a variable called my_bike and doing Bike.new and giving it an argument of the model of a bike 

# name: bike_info
# input: argument of model 
# output: string with string interpolation 
# process: i will create a method called bike_info that will take in the argument of model and use string interpolation to include the model, number of wheels and current speed. 

class Bike 
    def initialize model 
        @model = model 
        @wheels = 2 
        @current_speed = 0 
    end 
    def bike_info 
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end 

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:
# name: pedal_faster 
# input: number
# output: number
# process: i will create a method pedal_faster that will take in a parameter of a number and increase the current_speed by that amount using this operator that i do not remember the name of : += 

    def pedal_faster number
        @current_speed += number 
    end 

# Pseudo code:
# name: brake
# input: number
# output: number
# process: i will create a method brake that will take a parameter of number and subtract that from the current_speed, however speed cannot be negative therefore I will put the current_speed - number in an array and zero separated by a comma, and use the .max function outside of this array, that way the largest number in the array is returned, so if the number is negative, zero is going to be returned. 

    def brake number 
        @current_speed = [@current_speed - number , 0].max 
    end 
end 

my_bike = Bike.new('Trek')
p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)
p my_bike.bike_info 