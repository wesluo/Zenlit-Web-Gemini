# Alternative: Manual Production Preview

This guide describes how to manually serve the production build files using a simple Python HTTP server. This is an alternative to the standard `npm run preview` command and can be useful for specific debugging scenarios or environments where Node.js serving might not be desired.

## Steps:

1.  **Navigate to the project root:**
    ```bash
    cd zenlit-redesign
    ```

2.  **Ensure the project is built:**
    First, build the project to generate the static `dist` folder.
    ```bash
    npm run build
    ```

3.  **Start the HTTP server:**
    Use `nohup` with Python's built-in HTTP server to ensure the process runs in the background and is resistant to terminal disconnections. This will serve the `dist` folder on port 8080.

    ```bash
    nohup python3 -m http.server 8080 --directory dist > server.log 2>&1 &
    ```
    *   `nohup`: Ensures the command continues to run even if you close your terminal.
    *   `python3 -m http.server 8080`: Starts a simple HTTP server on port 8080.
    *   `--directory dist`: Specifies that the `dist` folder should be served.
    *   `> server.log 2>&1`: Redirects all output (stdout and stderr) to a file named `server.log`. This can be useful for debugging if the server fails to start.
    *   `&`: Runs the command in the background.

4.  **Access the application:**
    Once the server is running, open your web browser and navigate to:
    ```
    http://localhost:8080
    ```

5.  **Stop the server (Optional):**
    To stop the server, you'll need to find its process ID (PID) and then kill it.
    *   Find the PID:
        ```bash
        pgrep -f "python3 -m http.server 8080"
        ```
    *   Kill the process (replace `<PID>` with the number found above):
        ```bash
        kill <PID>
        ```

This method should provide a reliable way to preview the Zenlit application.
