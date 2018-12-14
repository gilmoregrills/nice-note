resource "google_storage_bucket" "bucket" {
  name = "nice_note"
}

resource "google_storage_bucket_object" "src" {
  count  = "${length(var.gcp-function-names)}"
  name   = "${var.gcp-function-names[count.index]}.zip"
  bucket = "${google_storage_bucket.bucket.name}"
  source = "../cloud_functions/${var.gcp-function-names[count.index]}.zip"
}

resource "google_cloudfunctions_function" "function" {
  count                 = "${length(var.gcp-function-names)}"
  name                  = "${var.gcp-function-names[count.index]}"
  available_memory_mb   = 128
  source_archive_bucket = "${google_storage_bucket.bucket.name}"
  source_archive_object = "${element(google_storage_bucket_object.src.*.name, count.index)}"
  trigger_http          = true
  timeout               = 60
  entry_point           = "entryPoint"
  labels {
    project = "nice_note"
  }
}