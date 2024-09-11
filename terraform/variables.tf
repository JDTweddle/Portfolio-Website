
# stores variables separately so easy to find and change names

variable "aws_region" {
  description = "The AWS region to create resources in."
  default     = "your-region"
}

variable "domain_name" {
  description = "The domain name for the website"
  default     = "your-domain-name"
}

# Name for static web bucket
variable "bucket_name" {
  description = "name of bucket for static website"
  default     = "you-bucket-name"
}

