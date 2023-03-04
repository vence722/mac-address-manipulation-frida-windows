# mac-address-manipulation-frida-windows
Frida script for MAC address manipulation in Windows

# Requirements

- OS: Windows 10 or higher

- Frida: Please make sure [Frida](https://frida.re/) is installed correctly, and frida-cli is available. 

- Node.js: 18 or higher

# Installation

```
cd $PROJECT_PATH;
npm install
```

# Build

```
npm run build
```

# Run the script

```
frida <PID> -l .\dist\_agent.js
```

After run, the mac address of the first network adapter will be overriden as 01-02-03-04-05-06 for the process <PID>.

# TODO

Make the script more easier to use.