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

variable "mongodb_uri" {
  description = "URI de conexão com o MongoDB"
  type        = string
}

variable "mongo_user" {
  description = "MongoDB Atlas username"
  type        = string
  sensitive   = true
}

variable "mongo_password" {
  description = "MongoDB Atlas password"
  type        = string
  sensitive   = true
}
