class Connection {
  constructor(roomID, serverAddress) {
    this.roomID = roomID;
    this.serverAddress = serverAddress;
  }
  connect() {
    console.log(
      `✅ connection for "${this.roomID}" room has been established at ${this.serverAddress}!`,
    );
  }
  disconnect() {
    console.log(
      `❌ disconnected from "${this.roomID}" room at ${this.serverAddress}!`,
    );
  }
}

export default Connection;
