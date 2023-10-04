# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: DLD

1. Why would super be used in a Ruby class?

Your answer: for inheritance, when you use super in a ruby class, you are inheriting values from a superclass. for example: i have my superclass Programming and my subclass Coding, in order for my Coding class to inherit the values from Programming, I am going to do this: 

```rb 
class Coding < Programming
    super
end
```
yay super, now i should inherit whatever values programming has into coding, yay coding 

Researched answer: our lecture notes say that super is a method that is used to pass values of variables from the superclass to the subclass. And ruby guides says it can call on methods too! so you can inherit a method from the superclass to the subclass. For example :
``` rb 
class Videogame 
     def name
        p "Animal Crossing"
     end
end

class Superior < Videogame
    def name
        super
    end 
end 

superior_videogame = Superior.new 
superior_videogame.name
```

AND this should print Animal Crossing! AMAZING
2. What is a relational database? Are there other kinds of databases?

Your answer: it is a database similar to a spreadsheet, it has rows and columns, maybe its called relational, and im going on a stretch here, because the rows and columns have something in common, like each row is described by the columnn and the rows and columns NEED each other, they have a sort of relationship. I am sure there are other kinds of databases??? not sure. 

Researched answer: no way i was right about the rows and columns being related to one another WOOHOO so oraxle says a relational database stores data and provides access to datapoints that are related to one another, this database is based on the relational model, which is a way of representing data in tables. The other kind of databases are non-relational. 

3. What are primary keys? Why purpose does a primary key serve?

Your answer: A primary key is the unique key that one gives to each row in a relational database. It is a unique identifier for each of them. If I were to delete a value and add another one in its place and the pk's were in order, for example the deleted one's primary key was 6, the new one's will be 7, because it is unique for each entry to help organize. 

Researched answer: Techopedia says that a primary key is designated in a relational database column to uniquely identify each table record, that way you can quickly parse (and i had to look up what parse is: it is to separate things into more easily processsed components) data within the table. So like, when we are extracting the data to do things with it or just to see it, the primary key makes it easier to identify each data entry since it is the unique key for each one. 

4. What are the five HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: get, post, put, patch and delete. Get's crud action is read, as it displays content. Post's crud action is create, as it makes new content. Put and patch's crud action is update because both put and patch modify content. And, delete's crud action is delete, because it removes content. 

Researched answer: To add new content, you use crud create, which translates to the HTTP verb post. To display content you use crud read, which translates to get http verb. To modify content, you use crud update, which is http verb put and patch. And to remove content you delete, which is the same name for the http verb. 

5. STRETCH: What is a JOIN table in SQL?

Your answer:

Researched answer: it is used to combine rows from tow or more tables based on a related column between them. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations: ruby on rails guides says it is the best way to ensure that only valid data is saved into your database. 

2. Params: params are parameters. its a way to access the user's data that they provide in your program 

3. API: application programming interface. application is a software and interface is teh contract of service between two applicatios. This contract ishow the two communicate with each other using requests and responses. 
