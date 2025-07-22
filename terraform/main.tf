terraform {
  required_version = ">= 0.12"
  backend "gcs" {
    bucket  = "rds-campervan-terraform-state"
    prefix  = "terraform/state"
  }
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_artifact_registry_repository" "backend_repo" {
  location      = var.region
  repository_id = "campervan-backend"
  format        = "DOCKER"
  description   = "Docker image repo for Campervan backend"
}

resource "google_cloud_run_service" "backend_service" {
  name     = "campervan-backend"
  location = var.region

  template {
    spec {
      containers {
        image = "${var.region}-docker.pkg.dev/${var.project_id}/campervan-backend/backend:latest"
        ports {
          container_port = 8080
        }
        env {
          name  = "MONGO_URL"
          value = "mongodb+srv://${var.mongo_user}:${var.mongo_password}@cluster0.4odqdau.mongodb.net/campervan?retryWrites=true&w=majority&appName=Cluster0"
        }

      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }

  autogenerate_revision_name = true
}

resource "google_cloud_run_service_iam_member" "all_users_invoker" {
  service  = google_cloud_run_service.backend_service.name
  location = google_cloud_run_service.backend_service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
