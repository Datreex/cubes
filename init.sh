echo "thtis script is running"
createdb -U mahdichaari aact
pg_restore -e -U mahdichaari -v -O -x -d aact --no-owner /postgres.dmp