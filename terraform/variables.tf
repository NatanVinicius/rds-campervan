variable "project_id" {
    type = string
    description = "id project gcp"
}

variable "region" {
    type = string
    default = "us-central1"
    description = "Deploy region"
}

variable "backend_image" {
    type = string
    description = "Docker image in Artifact Registry"
}