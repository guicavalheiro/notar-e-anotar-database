#!/bin/sh

echo ""
echo "Updating local repository..."
git pull origin master -q
echo "Updated local repository."
echo ""

echo "Checking for existing database images..."
docker stop notareanotardatabase || echo "No notareanotardatabase container running."
docker rm notareanotardatabase || echo "No notareanotardatabase container stopped."
docker rmi notareanotardatabase || echo "No notareanotardatabase image."
echo "Checked database images."
echo ""

echo "Building image from Dockerfile..."
docker build --pull --rm -f "Dockerfile" -t notareanotardatabase "." -q
echo "Image Built."
echo ""

echo "Deploying Docker container..."
docker run -d --name notareanotardatabase -p 27017:27017 notareanotardatabase:latest
echo "Docker image deployed!"
echo ""

echo "Success!"
echo "Notar e Anotar database is accessible through port 27017"
echo ""