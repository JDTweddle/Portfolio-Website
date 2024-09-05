
# stores variables separatley so easy to find and change names

variable "aws_region" {
  description = "The AWS region to create resources in."
  default     = "eu-west-2"
}

variable "domain_name" {
  description = "The domain name for the website"
  default     = "johntweddle.net"
}

# Name for static web bucket
variable "bucket_name" {
  description = "name of bucket for static website"
  default     = "patchez-portfolio-bucket"
}

