provider "google" {
  credentials = "${file("account.json")}"
  project     = "nice-note"
  region      = "europe-west1"
}

terraform {
  backend "gcs" {
    bucket = "terraform-state-nice-note"
    prefix = "state"
  }
}

data "terraform_remote_state" "network" {
  backend = "gcs"

  config {
    bucket = "terraform-state-nice-note"
    prefix = "state"
  }
}
