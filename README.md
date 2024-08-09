# YOU CAN DOWNLOAD EITHER THE PY OR JS VERSION THEY ARE BOTH WORK THE SAME AS INTENTED

This project provides scripts to connect to a PS4 console using the `PS4Debug` library (Python) or `nodeps4debug` library (JavaScript) and execute a series of commands on a specific process.

## Requirements

### Python Version

- Python 3.6+
- `PS4Debug` library
- `asyncio` library

### JavaScript Version

- Node.js
- `nodeps4debug` library

## Installation

### Python Version

1. Install the `PS4Debug` library:
    ```bash
    pip install pyps4debug
    ```

2. Ensure you have Python 3.6 or higher installed.

### JavaScript Version

1. Install the `nodeps4debug` library:
    ```bash
    npm install nodeps4debug
    ```

2. Ensure you have Node.js installed.

## Usage

### Python Version

1. Update the `PS4Debug` IP address in the script to match your PS4's IP address:
    ```python
    ps4 = PS4Debug("192.168.137.151")
    ```

2. Run the script:
    ```bash
    python main.py
    ```

### JavaScript Version

1. Update the IP address in the script to match your PS4's IP address:
    ```javascript
    const ip = '192.168.137.151';
    ```

2. Run the script:
    ```bash
    node index.js
    ```

## Script Overview

The scripts perform the following tasks:

1. Connect to the PS4 console.
2. Send a notification to the PS4.
3. Retrieve the list of running processes on the PS4.
4. Find the process ID (PID) of the process named `eboot.bin`.
5. Execute a series of commands on the `eboot.bin` process with specified delays.


# STEPS

1. PRESS X TO START ON THE MAIN MENU (GO OFFLINE)
2. GO TO LOCAL MULTIPLAYER
3. RUN THE SCRIPTS (EITHER PY OR JS)
4. WAIT FOR YOUR NAME TO POPUP AND JOIN THE LOBBY
5. AFTER THAT START THE GAME

# MAPS

- mp_t10_island
- mp_t10_penthouse
- mp_t10_radar
- mp_t10_sm_babylon
- mp_t10_sm_capital
- mp_t10_sm_flat
- mp_t10_sm_vorkuta_mine
- mp_t10_stripmall
- mp_t10_traingraveyard

# EXAMPLE: 
- `#x3ef237da69bb64ef6 mp_t10_island` Just change the `"mp_t10_island"` before running the code.

# CREDIT TO DREAD
