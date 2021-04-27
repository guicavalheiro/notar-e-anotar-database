# Notar e Anotar Database

## Steps to deploy the database as a Docker container (Manual):

1. Clone the repository
2. Build the image
```bash
docker build --pull --rm -f "Dockerfile" -t notareanotardatabase "."
```
3. Deploy the image
```bash
docker run -d --name notareanotardatabase -p 27017:27017 notareanotardatabase:latest
```
4. Connect to the database!
>localhost:27017

## Steps to deploy the database as a Docker container (Automatically):
1. Clone the repository
2. Run the script "build-deploy.sh"
> Proceed with caution! Not stable yet.
3. Connect to the database!
>localhost:27017

