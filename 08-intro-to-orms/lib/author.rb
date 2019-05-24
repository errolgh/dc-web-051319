class Author

    attr_accessor :name, :id

    def initialize(name, id=nil)
        @name = name
        @id = id
    end

    def self.create(name)
         # Author.create("Maya Angelou")
         author = Author.new(name)
         author.save

         return author
    end

    def save
        sql = <<-SQL 
            INSERT INTO authors (name) VALUES (?)
        SQL
        DB.execute(sql, self.name)
        id_sql = "SELECT last_insert_rowid()"
        id = DB.execute(id_sql)[0][0]
        self.id = id
    end

    def self.find(id)
        # Author.find(3) => author object with id 3
        sql = "SELECT * from authors WHERE id = ?"
        results = DB.execute(sql, id) # [[1, Maya Angelou]]
        author = self.make_object_from_row(results[0])
    end

    def self.make_object_from_row(row)
        # row = [1, Maya Angelou]
        id = row[0]
        name = row[1]
        return Author.new(name, id)
    end

    def self.all 
        sql = <<-SQL
            SELECT * from authors
        SQL
        results = DB.execute(sql)
        results.map {|row| self.make_object_from_row(row)}

    end
end