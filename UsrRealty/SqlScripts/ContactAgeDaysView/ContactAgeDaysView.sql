create or alter view UsrVwContactAgeDays
as
select id as UsrId, Name as UsrName, BirthDate as UsrBirthDate,
datediff(day, BirthDate, getdate()) as UsrAgeDays,
id as UsrContactId
from Contact