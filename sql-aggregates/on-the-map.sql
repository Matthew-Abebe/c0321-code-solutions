select "cr"."name" as "countryName",
      count("ci".*) as "cities"
from "countries" as cr
join "cities" as "ci" using ("countryId")
group by "cr"."name";
