const messages = [
  "Booting AI Core...",
  "Linking Neural Network...",
  "Calibrating Sensors...",
  "Activating Tutor Intelligence...",
  "System Online"
];

let index = 0;
const textEl = document.getElementById("system-text");

function typeMessage(msg, i = 0) {
  if (i < msg.length) {
    textEl.textContent += msg.charAt(i);
    setTimeout(() => typeMessage(msg, i + 1), 50);
  } else {
    setTimeout(() => {
      textEl.textContent = "";
      index = (index + 1) % messages.length;
      typeMessage(messages[index]);
    }, 1200);
  }
}

typeMessage(messages[index]);
const scanStatus = document.querySelector('.scan-status');

setTimeout(() => {
  scanStatus.textContent = "MATCHING BIOMETRICS...";
}, 3000);

setTimeout(() => {
  scanStatus.textContent = "IDENTITY CONFIRMED ✔";
}, 6000);
const terminal = document.getElementById("terminal-output");

const logs = [
  "[SYS] Initializing core modules...",
  "[NET] Establishing encrypted tunnel...",
  "[AUTH] Bypassing authentication layer...",
  "[SCAN] Mapping biometric data...",
  "[AI] Neural matrix synced.",
  "[WARN] Firewall resistance detected.",
  "[OVRD] Executing override protocol...",
  "[DATA] Extracting packets █████▒▒▒",
  "[OK] Access granted.",
  "[JARVIS] Monitoring active processes...",
  "[TRACE] Location masked.",
  "[SEC] Intrusion countermeasures active."
];

function addTerminalLine() {
  const time = new Date().toLocaleTimeString();
  const line = `[${time}] ${logs[Math.floor(Math.random() * logs.length)]}\n`;

  terminal.textContent += line;

  // Auto-scroll
  terminal.scrollTop = terminal.scrollHeight;

  // Limit lines (performance)
  if (terminal.textContent.split("\n").length > 120) {
    terminal.textContent = terminal.textContent
      .split("\n")
      .slice(40)
      .join("\n");
  }
}

// SPEED = UNSTOPPABLE
setInterval(addTerminalLine, 80);
const networkLogs = document.getElementById("networkLogs");

const connections = [
  "192.168.1.1  ➜ CONNECTED",
  "10.0.0.24    ➜ SECURE",
  "172.16.5.9   ➜ ACTIVE",
  "NODE-07      ➜ SYNCING",
  "GATEWAY      ➜ ONLINE",
  "REMOTE-HUB   ➜ ENCRYPTED",
  "DATA STREAM  ➜ STABLE"
];

function updateNetwork() {
  const line = connections[Math.floor(Math.random() * connections.length)];
  networkLogs.innerHTML += line + "<br>";

  if (networkLogs.innerHTML.split("<br>").length > 8) {
    networkLogs.innerHTML = networkLogs.innerHTML
      .split("<br>")
      .slice(2)
      .join("<br>");
  }
}

setInterval(updateNetwork, 900);
const netLogs = document.getElementById("networkLogs");

const macs = [
  "A4:3F:12:9C:7D:EF",
  "B8:27:EB:45:91:02",
  "00:1A:2B:3C:4D:5E",
  "DC:FE:07:19:AA:90"
];

const ips = [
  "192.168.1.14",
  "10.0.0.88",
  "172.16.0.22",
  "203.82.14.9"
];

const ports = [22, 80, 443, 8080, 3306];

function networkScan() {
  const mac = macs[Math.floor(Math.random() * macs.length)];
  const ip = ips[Math.floor(Math.random() * ips.length)];
  const port = ports[Math.floor(Math.random() * ports.length)];

  const result = Math.random();

  let status, cls;
  if (result < 0.7) {
    status = "VERIFIED";
    cls = "log-ok";
  } else if (result < 0.9) {
    status = "CHECKING";
    cls = "log-check";
  } else {
    status = "BLOCKED";
    cls = "log-bad";
  }

  netLogs.innerHTML += `
    <span class="${cls}">
      MAC ${mac} ➜ IP ${ip}:${port} ➜ ${status}
    </span><br>
  `;

  if (netLogs.innerHTML.split("<br>").length > 10) {
    netLogs.innerHTML = netLogs.innerHTML
      .split("<br>")
      .slice(3)
      .join("<br>");
  }
}

setInterval(networkScan, 700);
