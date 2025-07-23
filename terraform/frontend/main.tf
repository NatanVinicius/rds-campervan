resource "google_artifact_registry_repository" "frontend_repo" {
  location      = var.region
  repository_id = "frontend"
  format        = "DOCKER"
}

resource "google_cloud_run_service" "frontend" {
  name     = "frontend-service"
  location = var.region

  template {
    spec {
      containers {
        image = "LOCATION-docker.pkg.dev/PROJECT_ID/frontend/frontend:latest"
        ports {
          container_port = 80
        }
      }
    }

    metadata {
      annotations = {
        "autoscaling.knative.dev/maxScale" = "3"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "frontend_public" {
  service  = google_cloud_run_service.frontend.name
  location = var.region
  role     = "roles/run.invoker"
  member   = "allUsers"
}
