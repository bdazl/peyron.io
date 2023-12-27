.PHONY: serve, update
serve:
	hugo server -D

update:
	hugo mod get -u
