import { Client, Message } from "discord.js";
import ConfigFile from "./config";
import { IBotCommand } from "./api";

const client = new Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`);

client.on("ready", () => {
  console.log("Im ready");
});

client.on("message", msg => {
  if (msg.author.bot) {
    return;
  }

  if (!msg.content.startsWith(ConfigFile.prefix)) {
    return;
  }

  handleCommand(msg);
});

async function handleCommand(msg: Message) {
  let command = msg.content.split(" ")[0].replace(ConfigFile.prefix, "");
  let args = msg.content.split(" ").slice(1);
  for (const commandClass of commands) {
    try {
      if (!commandClass.isThisCommand(command)) {
        continue;
      }
      await commandClass.runCommand(args, msg, client);
    } catch (exception) {
      console.log(exception);
    }
  }
}

function loadCommands(commandsPath: string) {
  if (!ConfigFile || (ConfigFile.commands as string[]).length === 0) {
    return;
  }

  for (const commandName of ConfigFile.commands as string[]) {
    const commandsClass = require(`${commandsPath}/${commandName}`).default;
    const command = new commandsClass() as IBotCommand;

    commands.push(command);
  }
}

client.login(ConfigFile.token);
