.PHONY: serve update generate
.DEFAULT_GOAL := generate

serve:
	hugo server -D

update:
	hugo mod get -u

generate:
	hugo
