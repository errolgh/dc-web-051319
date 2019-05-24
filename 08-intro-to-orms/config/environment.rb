require 'bundler'
Bundler.require
require_relative '../lib/book.rb'
require_relative '../lib/author.rb'

DB = SQLite3::Database.new('db/library.db')

# module SQLite3

#     class Database

#         def initialize(database_path)
#             @database_path = database_path
#         end

            # def execute(sql_statement)
            #     # runs the sql statement against the database
            # end
#     end

# end