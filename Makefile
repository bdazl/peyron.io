.PHONY: serve, update
serve:
	hugo server

update:
	hugo mod get -u
