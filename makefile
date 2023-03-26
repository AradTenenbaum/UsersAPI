# Run postgres docker container
postgres:
	docker run --name postgres -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=secret -d postgres

# Create users_api database
createdb:
	docker exec -it postgres createdb --username=root --owner=root users_api