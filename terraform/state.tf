
terraform {
    backend "s3" {
        bucket = "your-bucket-name"
        key = "global/s3/terrafrom.tfstate"
        region = "your region"
        
    }
}
