select "customers"."firstName",
        "customers"."lastName",
        SUM("payments"."amount")
from "customers"
join "payments" using ("customerId")
group by "customers"."firstName", "customers"."lastName", "payments"."amount"
order by "payments"."amount" desc;

/*Not finished
