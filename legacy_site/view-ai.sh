#!/bin/bash

# Simple script to start a local server and view the AI page
# This bypasses CORS and ES Module restrictions inherent to the file:// protocol.

PORT=8000
PAGE="AI.html"

echo "Starting local server on port $PORT..."
echo "Press Ctrl+C to stop the server."

# Start Python HTTP server in the background
python3 -m http.server $PORT &
SERVER_PID=$!

# Wait a moment for server to start
sleep 2

# Open the page in the default browser
if [[ "$OSTYPE" == "darwin"* ]]; then
    open "http://localhost:$PORT/$PAGE"
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    xdg-open "http://localhost:$PORT/$PAGE"
else
    echo "Please open http://localhost:$PORT/$PAGE in your browser"
fi

# Wait for server process
wait $SERVER_PID
