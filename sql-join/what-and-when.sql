select "films"."releaseYear",
        "categories"."name" as "categoryName",
        "films"."title"
from "filmCategory"
join "categories" using ("categoryId")
join "films" using ("filmId")
where "films"."title" = 'Boogie Amelie'
